/**
 * Kurumsal sabitler ve iletişim bilgileri.
 *
 * Buradaki tüm veriler Arslan Hukuk Bürosu'nun mevcut kurumsal iletişim
 * bilgilerinden birebir alınmıştır. Uydurulmuş bilgi yer almaz. Bu dosyadaki
 * hiçbir değer çevrilmez: adres, telefon ve e-posta her iki dilde de aynıdır.
 * Çevrilen metinler `tr/ui.ts` ve `en/ui.ts` dosyalarındadır.
 */

const FALLBACK_SITE_URL = "https://www.arslanhukuk.com.tr";

/**
 * Kanonik kök adres.
 *
 * `NEXT_PUBLIC_SITE_URL` dağıtım panelinde tanımlanıp boş bırakılabildiği ya
 * da protokolsüz ("www.ornek.com") girilebildiği için değer burada
 * doğrulanır. Geçersiz her durumda varsayılana dönülür; `new URL()` çağrısı
 * derlemeyi çökertmemelidir.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_SITE_URL;

  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(candidate).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const SITE_URL = resolveSiteUrl();

export const firm = {
  name: "Arslan Hukuk Bürosu",
  shortName: "Arslan Hukuk",
  foundedYear: 1982,
  founder: "Av. Seyit Arslan",
} as const;

export const contact = {
  address: {
    line1: "Büyükdere Cad. No:30",
    line2: "Sema Apt. K:3",
    district: "Şişli / İstanbul",
    full: "Büyükdere Cad. No:30 Sema Apt. K:3 Şişli / İstanbul",
    locality: "İstanbul",
    region: "Şişli",
    country: "TR",
  },
  phones: [
    { label: "0212 415 35 20", href: "tel:+902124153520" },
    { label: "0212 415 34 20", href: "tel:+902124153420" },
  ],
  fax: "0212 415 13 83",
  email: "alperarslan@istanbulbarosu.org.tr",
} as const;
