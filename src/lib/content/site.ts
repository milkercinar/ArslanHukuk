/**
 * Kurumsal sabitler ve iletişim bilgileri.
 *
 * Buradaki tüm veriler Arslan Hukuk Bürosu'nun mevcut kurumsal iletişim
 * bilgilerinden birebir alınmıştır. Uydurulmuş bilgi yer almaz.
 */

export type Locale = "tr" | "en";

export const DEFAULT_LOCALE: Locale = "tr";
export const LOCALES: Locale[] = ["tr"];

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.arslanhukuk.com.tr";

export const firm = {
  name: "Arslan Hukuk Bürosu",
  shortName: "Arslan Hukuk",
  wordmark: { first: "ARSLAN", second: "HUKUK" },
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
  bar: "İstanbul Barosu",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Uzmanlık Alanları", href: "/uzmanlik-alanlari" },
  { label: "Ekibimiz", href: "/ekibimiz" },
  { label: "İletişim", href: "/iletisim" },
];

export const legalNav: NavItem[] = [
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  { label: "Gizlilik", href: "/gizlilik" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
];
