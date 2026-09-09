import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contact, firm } from "@/lib/content/site";
import { clientKey, isAllowed, rateLimit, record } from "@/lib/rate-limit";

export const runtime = "nodejs";

const RATE_WINDOW_MS = 60 * 60 * 1000;

/**
 * Aynı adresten saatte iletilecek mesaj sayısı. Yalnızca gerçekten
 * gönderilen mesajlar sayılır; doğrulamaya takılan ya da teslim edilemeyen
 * denemeler hak yakmaz, çünkü ikisi de kullanıcının hatası olmayabilir.
 */
const SEND_MAX = 5;

/**
 * Kaba taşkın koruması: geçersiz olanlar dahil her istek sayılır. Amaç,
 * geçersiz gövdelerle uç noktayı dövmeyi engellemek.
 */
const FLOOD_MAX = 30;

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  consent?: unknown;
  /** Formun hangi dilde doldurulduğu — yanıtın dilini seçmeye yarar. */
  locale?: unknown;
  /**
   * Tuzak alan. Formda gizlidir ve gerçek kullanıcı asla dolduramaz;
   * doluysa gönderim bir bottandır.
   */
  website?: unknown;
};

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

/** İstemcideki doğrulamanın sunucu tarafındaki karşılığı. */
function validate(body: Payload) {
  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const subject = str(body.subject);
  const message = str(body.message);
  const consent = body.consent === true;
  // Bilinmeyen bir değer gönderilirse Türkçe kabul edilir.
  const locale = body.locale === "en" ? "en" : "tr";

  const problems: string[] = [];
  if (name.length < 2) problems.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) problems.push("email");
  if (phone && phone.replace(/\D/g, "").length < 10) problems.push("phone");
  if (subject.length < 3) problems.push("subject");
  if (message.length < 20) problems.push("message");
  if (!consent) problems.push("consent");

  // Aşırı uzun gönderimler kabul edilmez.
  if (message.length > 5000) problems.push("message");

  return { problems, data: { name, email, phone, subject, message, locale } };
}

type FormData = ReturnType<typeof validate>["data"];

function asText(data: FormData) {
  return [
    `Ad Soyad: ${data.name}`,
    `E-posta: ${data.email}`,
    `Telefon: ${data.phone || "—"}`,
    `Konu: ${data.subject}`,
    // Büro, yanıtı gönderenin sitede kullandığı dilde yazabilsin.
    `Form dili: ${data.locale === "en" ? "İngilizce" : "Türkçe"}`,
    "",
    data.message,
  ].join("\n");
}

/**
 * Teslimat yolları, yapılandırılmışsa bu sırayla denenir:
 *
 *   1. SMTP  — büronun kendi mail sunucusu. Tercih edilen yol: araya yeni bir
 *              hizmet sağlayıcı girmez, veri yurt dışına çıkmaz.
 *   2. Webhook — mesajı bir otomasyona/tabloya iletir.
 *   3. Resend  — SMTP erişimi yoksa e-posta API'si.
 *
 * Hiçbiri yapılandırılmamışsa istek reddedilir ve form, mesajın
 * iletilmediğini kullanıcıya açıkça bildirir. Sessizce başarı dönmeyiz;
 * kullanıcı mesajının gittiğini sanmamalıdır.
 */
async function deliver(data: FormData): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (host && user && pass) {
    const port = Number(process.env.SMTP_PORT ?? 465);
    const transporter = nodemailer.createTransport({
      host,
      port,
      // 465 örtük TLS ister; 587 düz başlayıp STARTTLS'e geçer.
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE === "true"
        : port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      // Çoğu sunucu kimliği doğrulanmış kutudan başka bir gönderici
      // adresini reddeder; bu yüzden varsayılan SMTP kullanıcısıdır.
      from: process.env.CONTACT_FROM_EMAIL ?? user,
      to: process.env.CONTACT_TO_EMAIL ?? contact.email,
      // "Yanıtla" doğrudan formu dolduran kişiye gitsin.
      replyTo: data.email,
      subject: `İletişim formu — ${data.subject}`,
      text: asText(data),
    });
    return true;
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: firm.name, ...data }),
    });
    return res.ok;
  }

  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (resendKey && from) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [process.env.CONTACT_TO_EMAIL ?? contact.email],
        reply_to: data.email,
        subject: `İletişim formu — ${data.subject}`,
        text: asText(data),
      }),
    });
    return res.ok;
  }

  return false;
}

function isConfigured(): boolean {
  return Boolean(
    (process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASSWORD) ||
      process.env.CONTACT_WEBHOOK_URL ||
      (process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL),
  );
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Tuzak alan doluysa gönderim bir bottandır. Bilerek başarı dönüyoruz:
  // hata dönmek bota neyin yakalandığını söyler ve formu aşmayı kolaylaştırır.
  // Mesaj hiçbir yere iletilmez.
  if (str(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const key = clientKey(request);

  if (!rateLimit(`flood:${key}`, FLOOD_MAX, RATE_WINDOW_MS)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const { problems, data } = validate(body);
  if (problems.length > 0) {
    return NextResponse.json({ error: "validation", problems }, { status: 422 });
  }

  if (!isAllowed(`send:${key}`, SEND_MAX, RATE_WINDOW_MS)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  if (!isConfigured()) {
    console.error(
      "[iletisim] Teslimat yapılandırılmamış. SMTP_HOST + SMTP_USER + " +
        "SMTP_PASSWORD, CONTACT_WEBHOOK_URL ya da RESEND_API_KEY + " +
        "CONTACT_FROM_EMAIL tanımlanmalıdır.",
    );
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }

  try {
    const ok = await deliver(data);
    if (!ok) {
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("[iletisim] Teslimat hatası:", error);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  // Hak yalnızca mesaj gerçekten iletildiğinde harcanır.
  record(`send:${key}`, RATE_WINDOW_MS);

  return NextResponse.json({ ok: true });
}
