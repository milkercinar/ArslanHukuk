import { NextResponse } from "next/server";
import { contact, firm } from "@/lib/content/site";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  consent?: unknown;
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

  const problems: string[] = [];
  if (name.length < 2) problems.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) problems.push("email");
  if (phone && phone.replace(/\D/g, "").length < 10) problems.push("phone");
  if (subject.length < 3) problems.push("subject");
  if (message.length < 20) problems.push("message");
  if (!consent) problems.push("consent");

  // Aşırı uzun gönderimler kabul edilmez.
  if (message.length > 5000) problems.push("message");

  return { problems, data: { name, email, phone, subject, message } };
}

type FormData = ReturnType<typeof validate>["data"];

function asText(data: FormData) {
  return [
    `Ad Soyad: ${data.name}`,
    `E-posta: ${data.email}`,
    `Telefon: ${data.phone || "—"}`,
    `Konu: ${data.subject}`,
    "",
    data.message,
  ].join("\n");
}

/**
 * Teslimat iki yoldan biriyle yapılır; hangisi yapılandırılmışsa o kullanılır.
 * Hiçbiri yapılandırılmamışsa istek reddedilir — form, mesajın iletilmediğini
 * kullanıcıya açıkça bildirir. Sessizce başarı dönmeyiz.
 */
async function deliver(data: FormData): Promise<boolean> {
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

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { problems, data } = validate(body);
  if (problems.length > 0) {
    return NextResponse.json({ error: "validation", problems }, { status: 422 });
  }

  const configured = Boolean(
    process.env.CONTACT_WEBHOOK_URL ||
      (process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL),
  );

  if (!configured) {
    console.error(
      "[iletisim] Teslimat yapılandırılmamış. CONTACT_WEBHOOK_URL veya " +
        "RESEND_API_KEY + CONTACT_FROM_EMAIL tanımlanmalıdır.",
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

  return NextResponse.json({ ok: true });
}
