import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/site";
import {
  getPracticeAreaById,
  getPracticeAreas,
} from "@/lib/content/practice-areas";
import { profiledSlugs } from "@/lib/content/team";
import { practiceAreaRoute, route, teamMemberRoute } from "@/lib/i18n";
import type { RouteKey } from "@/lib/i18n/routes";

const STATIC_ROUTES: { key: RouteKey; priority: number }[] = [
  { key: "home", priority: 1 },
  { key: "practiceAreas", priority: 0.9 },
  { key: "about", priority: 0.8 },
  { key: "team", priority: 0.8 },
  { key: "contact", priority: 0.7 },
  { key: "dataProtection", priority: 0.2 },
  { key: "privacy", priority: 0.2 },
  { key: "cookies", priority: 0.2 },
];

/**
 * Her giriş, iki dildeki adresini `alternates.languages` altında bildirir.
 * Bir sayfanın karşılığı olduğunu arama motoruna hem sayfanın kendisinden
 * hem de site haritasından söylemek, iki dilli sitelerde tekrar eden içerik
 * olarak değerlendirilmeyi önler.
 */
function entry(
  paths: { tr: string; en: string },
  locale: "tr" | "en",
  priority: number,
  now: Date,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${paths[locale]}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority,
    alternates: {
      languages: {
        tr: `${SITE_URL}${paths.tr}`,
        en: `${SITE_URL}${paths.en}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const items: MetadataRoute.Sitemap = [];

  for (const { key, priority } of STATIC_ROUTES) {
    const paths = { tr: route("tr", key), en: route("en", key) };
    items.push(entry(paths, "tr", priority, now));
    items.push(entry(paths, "en", priority, now));
  }

  for (const area of getPracticeAreas("tr")) {
    const en = getPracticeAreaById("en", area.id);
    const paths = {
      tr: practiceAreaRoute("tr", area.slug),
      en: practiceAreaRoute("en", en?.slug ?? area.slug),
    };
    items.push(entry(paths, "tr", 0.7, now));
    items.push(entry(paths, "en", 0.7, now));
  }

  for (const slug of profiledSlugs) {
    const paths = {
      tr: teamMemberRoute("tr", slug),
      en: teamMemberRoute("en", slug),
    };
    items.push(entry(paths, "tr", 0.6, now));
    items.push(entry(paths, "en", 0.6, now));
  }

  return items;
}
