import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  fullName,
  getTeamMember,
  profileFacts,
} from "@/lib/content/team";
import { getPracticeAreaById } from "@/lib/content/practice-areas";
import { firm, SITE_URL } from "@/lib/content/site";
import {
  getDictionary,
  practiceAreaRoute,
  route,
  teamMemberRoute,
  type Locale,
} from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitLines from "@/components/ui/SplitLines";
import ArrowLink from "@/components/ui/ArrowLink";

export default function TeamMemberView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const dict = getDictionary(locale);
  const member = getTeamMember(locale, slug);
  if (!member || !member.hasProfile) notFound();

  const name = fullName(member);
  const facts = profileFacts(member, dict.team.factLabels);
  const related = (member.relatedAreas ?? [])
    .map((id) => getPracticeAreaById(locale, id))
    .filter((a) => a !== undefined);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: member.role,
    worksFor: { "@type": "LegalService", name: firm.name, url: SITE_URL },
    url: `${SITE_URL}${teamMemberRoute(locale, member.slug)}`,
    image: `${SITE_URL}${member.photo}`,
    ...(member.email ? { email: member.email } : {}),
    ...(member.languages?.length ? { knowsLanguage: member.languages } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="bg-ivory pb-14 pt-28 md:pb-20 md:pt-32">
        <div className="container-editorial">
          <Reveal>
            <nav
              aria-label={dict.common.breadcrumbLabel}
              className="label-eyebrow text-muted"
            >
              <Link
                href={route(locale, "team")}
                className="transition-colors duration-300 hover:text-ink"
              >
                {dict.team.eyebrow}
              </Link>
            </nav>
          </Reveal>

          <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-5" delay={0.1}>
              <div className="overflow-hidden bg-ivory-deep">
                <Image
                  src={member.photo}
                  alt={dict.common.portraitAlt(name)}
                  width={710}
                  height={532}
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="aspect-4/3 w-full object-cover object-center grayscale-[0.15]"
                />
              </div>
            </Reveal>

            <div className="md:col-span-7 md:pt-2">
              <Reveal>
                <p className="label-eyebrow text-muted">{member.role}</p>
              </Reveal>

              <SplitLines
                as="h1"
                lines={[name]}
                playOnMount
                delay={0.15}
                className="mt-6 font-serif text-statement font-light"
              />

              <Reveal className="mt-10 max-w-xl space-y-6" stagger={0.1}>
                {member.bio.map((p) => (
                  <p key={p} className="text-[1rem] leading-[1.8] text-ink/78">
                    {p}
                  </p>
                ))}
              </Reveal>

              {(facts.length > 0 || member.email) && (
                <div className="mt-12 max-w-xl">
                  <SectionLabel className="mb-5 md:mb-5">
                    {dict.team.factsLabel}
                  </SectionLabel>
                  <Reveal delay={0.15}>
                    <dl className="border-t border-line">
                      {facts.map((row) => (
                        <div
                          key={row.label}
                          className="grid grid-cols-3 gap-4 border-b border-line py-4"
                        >
                          <dt className="label-eyebrow text-muted">
                            {row.label}
                          </dt>
                          <dd className="col-span-2 text-sm leading-relaxed text-ink/78">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                      {member.email && (
                        <div className="grid grid-cols-3 gap-4 border-b border-line py-4">
                          <dt className="label-eyebrow text-muted">
                            {dict.team.emailLabel}
                          </dt>
                          <dd className="col-span-2 text-sm">
                            <a
                              href={`mailto:${member.email}`}
                              className="text-ink/78 underline decoration-line-strong underline-offset-4 transition-colors duration-300 hover:text-ink"
                            >
                              {member.email}
                            </a>
                          </dd>
                        </div>
                      )}
                    </dl>
                  </Reveal>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {member.focus && member.focus.length > 0 && (
        <section className="bg-ivory-soft py-14 md:py-20">
          <div className="container-editorial">
            <SectionLabel>{dict.team.focusLabel}</SectionLabel>
            <Reveal stagger={0.05}>
              {member.focus.map((item) => (
                <p
                  key={item}
                  className="border-b border-line py-4 font-serif text-[1.25rem] font-light md:text-[1.45rem]"
                >
                  {item}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-ivory py-14 md:py-20">
          <div className="container-editorial">
            <SectionLabel>{dict.team.relatedLabel}</SectionLabel>
            <Reveal className="flex flex-wrap gap-x-12 gap-y-5" stagger={0.06}>
              {related.map((area) => (
                <ArrowLink
                  key={area.slug}
                  href={practiceAreaRoute(locale, area.slug)}
                >
                  {area.shortTitle ?? area.title}
                </ArrowLink>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-ivory pb-14">
        <div className="container-editorial">
          <ArrowLink href={route(locale, "team")}>
            {dict.common.allTeam}
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
