import type { Metadata } from "next";
import HomeView from "@/components/pages/HomeView";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata, routePaths } from "@/lib/seo";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  paths: routePaths("home"),
  title: dict.meta.home.title,
  absoluteTitle: true,
  description: dict.meta.home.description,
  ogTitle: dict.meta.home.title,
  ogDescription: dict.meta.siteDescriptionShort,
});

export default function HomePage() {
  return <HomeView locale="en" />;
}
