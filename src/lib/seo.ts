import type { Metadata } from "next";
import { getDictionary, OG_LOCALE, route, type Locale } from "@/lib/i18n";
import type { RouteKey } from "@/lib/i18n/routes";

/**
 * Sayfa üst verisi.
 *
 * İki dilli bir sitede en kolay kaçırılan şey `hreflang` bağlantılarıdır:
 * her sayfa hem kendi kanonik adresini hem de diğer dildeki karşılığını
 * bildirmelidir. Bu yüzden üst veri tek bir yerden, her iki adres birden
 * verilerek üretilir; sayfaların kendi içinde `alternates` yazması gerekmez.
 */
export function buildMetadata({
  locale,
  paths,
  title,
  description,
  absoluteTitle = false,
  ogTitle,
  ogDescription,
  ogType = "website",
  images,
}: {
  locale: Locale;
  /** Sayfanın her iki dildeki adresi. */
  paths: Record<Locale, string>;
  title: string;
  description: string;
  /**
   * Başlık büro adını zaten içeriyorsa (ana sayfa) yerleşimin
   * "%s | Büro adı" şablonu uygulanmamalıdır; aksi hâlde ad iki kez yazılır.
   */
  absoluteTitle?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "profile";
  images?: { url: string; width: number; height: number; alt: string }[];
}): Metadata {
  const dict = getDictionary(locale);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: paths[locale],
      languages: {
        tr: paths.tr,
        en: paths.en,
        "x-default": paths.tr,
      },
    },
    openGraph: {
      type: ogType,
      locale: OG_LOCALE[locale],
      alternateLocale: OG_LOCALE[locale === "tr" ? "en" : "tr"],
      siteName: dict.common.firmName,
      url: paths[locale],
      title: ogTitle ?? `${title} | ${dict.common.firmName}`,
      description: ogDescription ?? description,
      ...(images ? { images } : {}),
    },
  };
}

/** Sabit bir sayfanın her iki dildeki adresi. */
export function routePaths(key: RouteKey): Record<Locale, string> {
  return { tr: route("tr", key), en: route("en", key) };
}
