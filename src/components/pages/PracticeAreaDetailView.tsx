import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getNextPracticeArea,
  getPracticeArea,
} from "@/lib/content/practice-areas";
import { fullName, getLawyers } from "@/lib/content/team";
import {
  getDictionary,
  practiceAreaRoute,
  route,
  teamMemberRoute,
  type Locale,
} from "@/lib/i18n";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ArrowLink from "@/components/ui/ArrowLink";

/** Başlık iki satıra bölünürken sözcük bütünlüğü korunur. */
function titleLines(title: string): string[] {
  const words = title.split(" ");
  if (words.length < 4) return [title];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export default function PracticeAreaDetailView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const dict = getDictionary(locale);
  const area = getPracticeArea(locale, slug);
  if (!area) notFound();

  const next = getNextPracticeArea(locale, area.slug);
  const relatedLawyers = getLawyers(locale).filter((l) =>
    l.relatedAreas?.includes(area.id),
  );

  return (
    <>
      <PageHeader
        breadcrumb={
          <nav
            aria-label={dict.common.breadcrumbLabel}
            className="label-eyebrow text-muted"
          >
            <Link
              href={route(locale, "practiceAreas")}
              className="transition-colors duration-300 hover:text-ink"
            >
              {dict.practiceAreas.eyebrow}
            </Link>
          </nav>
        }
        eyebrow={area.category}
        titleLines={titleLines(area.title)}
        lead={area.intro}
      />

      <section className="bg-ivory pb-20 md:pb-28">
        <div className="container-editorial">
          <div className="grid gap-10 border-t border-line pt-16 md:grid-cols-12 md:gap-8">
            <Reveal className="max-w-2xl space-y-7 md:col-span-7" stagger={0.1}>
              {area.body.map((p) => (
                <p key={p} className="text-[1.02rem] leading-[1.8] text-ink/78">
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="md:col-span-4 md:col-start-9">
              <SectionLabel className="mb-5 md:mb-6">
                {dict.practiceAreas.servicesLabel}
              </SectionLabel>
              <ul className="space-y-0">
                {area.services.map((service) => (
                  <li
                    key={service}
                    className="border-b border-line py-3.5 text-sm leading-relaxed text-ink/75"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {relatedLawyers.length > 0 && (
            <div className="mt-16 border-t border-line pt-16">
              <SectionLabel>{dict.practiceAreas.lawyersLabel}</SectionLabel>
              <Reveal
                className="flex flex-wrap gap-x-12 gap-y-6"
                stagger={0.08}
              >
                {relatedLawyers.map((lawyer) => (
                  <Link
                    key={lawyer.slug}
                    href={teamMemberRoute(locale, lawyer.slug)}
                    className="group"
                  >
                    <span className="font-serif text-[1.35rem] font-light">
                      {fullName(lawyer)}
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-3 inline-block text-sm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
                    >
                      →
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {lawyer.role}
                    </span>
                  </Link>
                ))}
              </Reveal>
            </div>
          )}

          <Reveal className="mt-16 border-t border-line pt-10">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              {dict.practiceAreas.detailDisclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sonraki alan — sayfalar arasında editoryal bir akış kurar. */}
      <section className="border-t border-line bg-ivory-soft">
        <Link
          href={practiceAreaRoute(locale, next.slug)}
          className="group relative block"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
          />
          <div className="container-editorial relative py-12 transition-colors duration-500 group-hover:text-ivory md:py-16">
            <p className="label-eyebrow text-muted transition-colors duration-500 group-hover:text-ivory/50">
              {dict.practiceAreas.nextLabel}
            </p>
            <div className="mt-5 flex items-baseline justify-between gap-8">
              <h2 className="font-serif text-title font-light">{next.title}</h2>
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
              >
                →
              </span>
            </div>
          </div>
        </Link>
      </section>

      <section className="bg-ivory py-12 md:py-14">
        <div className="container-editorial">
          <ArrowLink href={route(locale, "practiceAreas")}>
            {dict.common.allPracticeAreas}
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
