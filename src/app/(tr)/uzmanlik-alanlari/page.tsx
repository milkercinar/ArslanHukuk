import type { Metadata } from "next";
import PracticeAreasView from "@/components/pages/PracticeAreasView";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata, routePaths } from "@/lib/seo";

const dict = getDictionary("tr");

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  paths: routePaths("practiceAreas"),
  title: dict.meta.practiceAreas.title,
  description: dict.meta.practiceAreas.description,
  ogDescription: dict.meta.practiceAreas.ogDescription,
});

export default function PracticeAreasPage() {
  return <PracticeAreasView locale="tr" />;
}
