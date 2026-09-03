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
  return getPracticeAreas("en").map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea("en", slug);
  if (!area) return {};

  const alternate = getPracticeAreaById("tr", area.id);

  return buildMetadata({
    locale: "en",
    paths: {
      tr: practiceAreaRoute("tr", alternate?.slug ?? area.slug),
      en: practiceAreaRoute("en", area.slug),
    },
    title: `${area.title} — Istanbul`,
    description: area.excerpt,
  });
}

export default async function PracticeAreaPage({ params }: Params) {
  const { slug } = await params;
  return <PracticeAreaDetailView locale="en" slug={slug} />;
}
