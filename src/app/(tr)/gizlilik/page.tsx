import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata, routePaths } from "@/lib/seo";

const dict = getDictionary("tr");
const page = dict.legal.privacy;

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  paths: routePaths("privacy"),
  title: dict.meta.privacy.title,
  description: dict.meta.privacy.description,
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow={page.eyebrow}
      titleLines={page.titleLines}
      lead={page.lead}
      sections={page.sections}
    />
  );
}
