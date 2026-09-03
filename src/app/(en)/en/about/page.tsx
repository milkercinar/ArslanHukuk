import type { Metadata } from "next";
import AboutView from "@/components/pages/AboutView";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata, routePaths } from "@/lib/seo";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  paths: routePaths("about"),
  title: dict.meta.about.title,
  description: dict.meta.about.description,
  ogDescription: dict.meta.about.ogDescription,
});

export default function AboutPage() {
  return <AboutView locale="en" />;
}
