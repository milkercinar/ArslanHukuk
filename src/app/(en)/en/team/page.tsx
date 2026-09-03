import type { Metadata } from "next";
import TeamView from "@/components/pages/TeamView";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata, routePaths } from "@/lib/seo";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  paths: routePaths("team"),
  title: dict.meta.team.title,
  description: dict.meta.team.description,
  ogDescription: dict.meta.team.ogDescription,
});

export default function TeamPage() {
  return <TeamView locale="en" />;
}
