import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getNextPracticeArea,
  getPracticeArea,
  practiceAreas,
} from "@/lib/content/practice-areas";
import { lawyers, fullName } from "@/lib/content/team";
import { firm } from "@/lib/content/site";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ArrowLink from "@/components/ui/ArrowLink";
import ContactCta from "@/components/home/ContactCta";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};

  const title = `${area.title} — İstanbul`;
  return {
    title,
    description: area.excerpt,
    alternates: { canonical: `/uzmanlik-alanlari/${area.slug}` },
    openGraph: {
      title: `${title} | ${firm.name}`,
      description: area.excerpt,
      url: `/uzmanlik-alanlari/${area.slug}`,
    },
  };
}

/** Başlık iki satıra bölünürken sözcük bütünlüğü korunur. */
function titleLines(title: string): string[] {
  const words = title.split(" ");
  if (words.length < 4) return [title];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export default async function PracticeAreaPage({ params }: Params) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const next = getNextPracticeArea(area.slug);
  const relatedLawyers = lawyers.filter((l) =>
    l.relatedAreas?.includes(area.slug),
  );

  return (
    <>
      <PageHeader
        breadcrumb={
          <nav aria-label="Konum" className="label-eyebrow text-muted">
            <Link
              href="/uzmanlik-alanlari"
              className="transition-colors duration-300 hover:text-ink"
            >
              Uzmanlık Alanları
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
            <Reveal
              className="max-w-2xl space-y-7 md:col-span-7"
              stagger={0.1}
            >
              {area.body.map((p) => (
                <p key={p} className="text-[1.02rem] leading-[1.8] text-ink/78">
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="md:col-span-4 md:col-start-9">
              <SectionLabel className="mb-5 md:mb-6">
                İlgili hizmetler
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
              <SectionLabel>Bu alanda çalışanlar</SectionLabel>
              <Reveal
                className="flex flex-wrap gap-x-12 gap-y-6"
                stagger={0.08}
              >
                {relatedLawyers.map((lawyer) => (
                  <Link
                    key={lawyer.slug}
                    href={`/ekibimiz/${lawyer.slug}`}
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
              Bu sayfadaki bilgiler geneldir, hukuki görüş yerine geçmez.
              Elinizde somut bir dosya varsa bize yazın, konuşalım.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sonraki alan — sayfalar arasında editoryal bir akış kurar. */}
      <section className="border-t border-line bg-ivory-soft">
        <Link
          href={`/uzmanlik-alanlari/${next.slug}`}
          className="group relative block"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
          />
          <div className="container-editorial relative py-12 transition-colors duration-500 group-hover:text-ivory md:py-16">
            <p className="label-eyebrow text-muted transition-colors duration-500 group-hover:text-ivory/50">
              Sonraki alan
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
          <ArrowLink href="/uzmanlik-alanlari">
            Tüm uzmanlık alanları
          </ArrowLink>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
