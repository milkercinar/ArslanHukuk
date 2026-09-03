import { DEFAULT_LOCALE, type Locale } from "./config";

/**
 * Rota haritası.
 *
 * Her sayfanın iki dilde ayrı bir adresi vardır; İngilizce adresler Türkçe
 * karşılıklarının çevirisi değil, İngilizce okuyucu için doğal olan
 * karşılıklarıdır. Site içindeki bağlantılar buradan üretilir; hiçbir
 * bileşende elle yazılmış yol bulunmaz.
 */

/** Hukuki bilgilendirme sayfaları — ana menüde değil, alt bilgide durur. */
export type LegalRouteKey = "dataProtection" | "privacy" | "cookies";

/** Sayfanın dilden bağımsız kimliği. */
export type RouteKey =
  | "home"
  | "about"
  | "practiceAreas"
  | "team"
  | "contact"
  | "dataProtection"
  | "privacy"
  | "cookies";

type RouteMap = Record<RouteKey, string>;

/**
 * Ana menüde görünen sayfalar ve sıraları.
 *
 * Başlık, mobil menü ve alt bilgi aynı listeyi kullanır. Liste burada durur
 * çünkü Header bir istemci bileşenidir; sunucuda çalışan Footer'ın oradan
 * sabit içe aktarması Next.js'te istemci referansına dönüşürdü.
 */
export const NAV_KEYS = [
  "home",
  "about",
  "practiceAreas",
  "team",
  "contact",
] as const satisfies readonly Exclude<RouteKey, LegalRouteKey>[];

/** Alt bilgideki hukuki metin bağlantıları ve sıraları. */
export const LEGAL_KEYS = [
  "dataProtection",
  "privacy",
  "cookies",
] as const satisfies readonly LegalRouteKey[];

/** Ön ek olmadan, dile göre yol parçaları. */
const SEGMENTS: Record<Locale, RouteMap> = {
  tr: {
    home: "",
    about: "/hakkimizda",
    practiceAreas: "/uzmanlik-alanlari",
    team: "/ekibimiz",
    contact: "/iletisim",
    dataProtection: "/kvkk",
    privacy: "/gizlilik",
    cookies: "/cerez-politikasi",
  },
  en: {
    home: "",
    about: "/about",
    practiceAreas: "/practice-areas",
    team: "/team",
    contact: "/contact",
    dataProtection: "/data-protection",
    privacy: "/privacy",
    cookies: "/cookies",
  },
};

function prefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/** Sayfanın verilen dildeki tam yolu. */
export function route(locale: Locale, key: RouteKey): string {
  return `${prefix(locale)}${SEGMENTS[locale][key]}` || "/";
}

/** Uzmanlık alanı detay sayfasının yolu. */
export function practiceAreaRoute(locale: Locale, slug: string): string {
  return `${route(locale, "practiceAreas")}/${slug}`;
}

/** Avukat profili sayfasının yolu. */
export function teamMemberRoute(locale: Locale, slug: string): string {
  return `${route(locale, "team")}/${slug}`;
}

/**
 * Bir yolun hangi dile ve hangi sayfaya ait olduğunu çözer.
 *
 * Dil değiştirici, bulunulan sayfanın diğer dildeki karşılığına gitmek için
 * bunu kullanır; kullanıcı dil değiştirdiğinde ana sayfaya düşmez.
 */
export function matchRoute(
  pathname: string,
): { locale: Locale; key: RouteKey; rest: string } | null {
  const path = pathname.replace(/\/+$/, "") || "/";
  const locale: Locale = path === "/en" || path.startsWith("/en/") ? "en" : "tr";
  const withoutPrefix = locale === "en" ? path.slice(3) || "" : path === "/" ? "" : path;

  const entries = Object.entries(SEGMENTS[locale]) as [RouteKey, string][];

  // Uzun parçalar önce denenir; "/uzmanlik-alanlari" ile "" çakışmasın.
  const sorted = entries.sort((a, b) => b[1].length - a[1].length);

  for (const [key, segment] of sorted) {
    if (segment === "") continue;
    if (withoutPrefix === segment) return { locale, key, rest: "" };
    if (withoutPrefix.startsWith(`${segment}/`)) {
      return { locale, key, rest: withoutPrefix.slice(segment.length + 1) };
    }
  }

  if (withoutPrefix === "") return { locale, key: "home", rest: "" };
  return null;
}
