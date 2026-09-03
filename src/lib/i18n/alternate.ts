import { practiceAreaSlugIn } from "@/lib/content/practice-areas";
import { profiledSlugs } from "@/lib/content/team";
import type { Locale } from "./config";
import {
  matchRoute,
  practiceAreaRoute,
  route,
  teamMemberRoute,
} from "./routes";

/**
 * Bulunulan adresin başka bir dildeki karşılığı.
 *
 * Dil değiştirici her sayfada aynı bileşendir ve hangi sayfada olduğunu
 * yalnızca adresten bilir; bu yüzden eşleştirme burada, adres üzerinden
 * yapılır. Karşılığı bulunamayan bir adreste (örneğin 404) hedef dilin ana
 * sayfasına dönülür — kullanıcı dil değiştirdiğinde hata sayfasında
 * kalmamalıdır.
 */
export function alternatePath(pathname: string, target: Locale): string {
  const match = matchRoute(pathname);
  if (!match) return route(target, "home");

  const { locale, key, rest } = match;
  if (locale === target) return pathname;

  if (key === "practiceAreas" && rest) {
    const slug = practiceAreaSlugIn(locale, rest, target);
    return slug ? practiceAreaRoute(target, slug) : route(target, "practiceAreas");
  }

  if (key === "team" && rest) {
    // Kişi adresleri iki dilde aynıdır; yalnızca var olduğu doğrulanır.
    return profiledSlugs.includes(rest)
      ? teamMemberRoute(target, rest)
      : route(target, "team");
  }

  return route(target, key);
}
