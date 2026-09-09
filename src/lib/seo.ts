import type { Metadata } from "next";
import { getDictionary, OG_LOCALE, route, type Locale } from "@/lib/i18n";
import type { RouteKey } from "@/lib/i18n/routes";

/**
 * Paylaşım kartının varsayılan görseli.
 *
 * Sayfa kendi görselini vermezse (avukat profillerinde portre veriliyor) bu
 * kullanılır. Görsel olmadan WhatsApp ve LinkedIn boş kart gösterir.
 * `scripts/paylasim-gorseli-uret.ps1` ile üretilir.
 */
const DEFAULT_OG_IMAGE: Record<Locale, string> = {
  tr: "/images/og-tr.png",
  en: "/images/og-en.png",
};

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

  const cardImages = images ?? [
    {
      url: DEFAULT_OG_IMAGE[locale],
      width: 1200,
      height: 630,
      alt: dict.common.firmName,
    },
  ];
  const cardTitle = ogTitle ?? `${title} | ${dict.common.firmName}`;
  const cardDescription = ogDescription ?? description;

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
      title: cardTitle,
      description: cardDescription,
      images: cardImages,
    },
    // Next.js bunu Open Graph'tan türetmez; ayrıca yazılmazsa X'te kart
    // eksik görünür.
    twitter: {
      card: "summary_large_image",
      title: cardTitle,
      description: cardDescription,
      images: cardImages.map((i) => i.url),
    },
  };
}

/** Sabit bir sayfanın her iki dildeki adresi. */
export function routePaths(key: RouteKey): Record<Locale, string> {
  return { tr: route("tr", key), en: route("en", key) };
}
