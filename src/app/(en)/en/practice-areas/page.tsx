import type { Metadata } from "next";
import PracticeAreasView from "@/components/pages/PracticeAreasView";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata, routePaths } from "@/lib/seo";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  paths: routePaths("practiceAreas"),
  title: dict.meta.practiceAreas.title,
  description: dict.meta.practiceAreas.description,
  ogDescription: dict.meta.practiceAreas.ogDescription,
});

export default function PracticeAreasPage() {
  return <PracticeAreasView locale="en" />;
}
