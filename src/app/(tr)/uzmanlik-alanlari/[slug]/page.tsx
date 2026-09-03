import type { Metadata } from "next";
import PracticeAreaDetailView from "@/components/pages/PracticeAreaDetailView";
import {
  getPracticeArea,
  getPracticeAreaById,
  getPracticeAreas,
} from "@/lib/content/practice-areas";
import { practiceAreaRoute } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPracticeAreas("tr").map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea("tr", slug);
  if (!area) return {};

  const alternate = getPracticeAreaById("en", area.id);

  return buildMetadata({
    locale: "tr",
    paths: {
      tr: practiceAreaRoute("tr", area.slug),
      en: practiceAreaRoute("en", alternate?.slug ?? area.slug),
    },
    title: `${area.title} — İstanbul`,
    description: area.excerpt,
  });
}

export default async function PracticeAreaPage({ params }: Params) {
  const { slug } = await params;
  return <PracticeAreaDetailView locale="tr" slug={slug} />;
}
