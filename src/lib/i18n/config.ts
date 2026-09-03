/**
 * Dil yapılandırması.
 *
 * Türkçe varsayılan dildir ve URL'de ön ek taşımaz ("/hakkimizda").
 * İngilizce "/en" ön eki altında yayınlanır ("/en/about").
 */

export type Locale = "tr" | "en";

export const LOCALES: Locale[] = ["tr", "en"];
export const DEFAULT_LOCALE: Locale = "tr";

/** `<html lang>` ve `hreflang` için tam dil etiketleri. */
export const HTML_LANG: Record<Locale, string> = {
  tr: "tr",
  en: "en",
};

/** Open Graph `locale` alanı. */
export const OG_LOCALE: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
};

/** Dil değiştiricide görünen kısa adlar. */
export const LOCALE_LABEL: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
};

/** Ekran okuyucular için tam dil adı — her zaman hedef dilde yazılır. */
export const LOCALE_NAME: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

/** Verilen dilin URL ön eki. Türkçe için boş dizedir. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "tr" ? "en" : "tr";
}
