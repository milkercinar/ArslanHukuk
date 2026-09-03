import type { Metadata } from "next";
import TeamMemberView from "@/components/pages/TeamMemberView";
import { fullName, getTeamMember, profiledSlugs } from "@/lib/content/team";
import { getDictionary, teamMemberRoute } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return profiledSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember("en", slug);
  if (!member || !member.hasProfile) return {};

  const dict = getDictionary("en");
  const name = fullName(member);

  return buildMetadata({
    locale: "en",
    paths: {
      tr: teamMemberRoute("tr", member.slug),
      en: teamMemberRoute("en", member.slug),
    },
    title: name,
    description: `${name} — ${member.role}, ${dict.common.firmName}. ${member.bio[0]}`,
    ogDescription: `${member.role}, ${dict.common.firmName}`,
    ogType: "profile",
    images: [{ url: member.photo, width: 710, height: 532, alt: name }],
  });
}

export default async function TeamMemberPage({ params }: Params) {
  const { slug } = await params;
  return <TeamMemberView locale="en" slug={slug} />;
}
