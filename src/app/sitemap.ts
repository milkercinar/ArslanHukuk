import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/site";
import { practiceAreas } from "@/lib/content/practice-areas";
import { profiledMembers } from "@/lib/content/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/hakkimizda", priority: 0.8 },
    { path: "/uzmanlik-alanlari", priority: 0.9 },
    { path: "/ekibimiz", priority: 0.8 },
    { path: "/iletisim", priority: 0.7 },
    { path: "/kvkk", priority: 0.2 },
    { path: "/gizlilik", priority: 0.2 },
    { path: "/cerez-politikasi", priority: 0.2 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: route.priority,
    })),
    ...practiceAreas.map((area) => ({
      url: `${SITE_URL}/uzmanlik-alanlari/${area.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...profiledMembers.map((member) => ({
      url: `${SITE_URL}/ekibimiz/${member.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
