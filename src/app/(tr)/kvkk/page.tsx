import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata, routePaths } from "@/lib/seo";

const dict = getDictionary("tr");
const page = dict.legal.dataProtection;

export const metadata: Metadata = buildMetadata({
  locale: "tr",
  paths: routePaths("dataProtection"),
  title: dict.meta.dataProtection.title,
  description: dict.meta.dataProtection.description,
});

export default function KvkkPage() {
  return (
    <LegalPage
      eyebrow={page.eyebrow}
      titleLines={page.titleLines}
      lead={page.lead}
      sections={page.sections}
    />
  );
}
