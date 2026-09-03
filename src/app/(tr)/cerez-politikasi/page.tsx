import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata, routePaths } from "@/lib/seo";

const dict = getDictionary("tr");
const page = dict.legal.cookies;

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  paths: routePaths("cookies"),
  title: dict.meta.cookies.title,
  description: dict.meta.cookies.description,
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow={page.eyebrow}
      titleLines={page.titleLines}
      lead={page.lead}
      sections={page.sections}
    />
  );
}
