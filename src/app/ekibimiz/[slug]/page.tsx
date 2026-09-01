import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  fullName,
  getTeamMember,
  profiledMembers,
  type TeamMember,
} from "@/lib/content/team";
import { getPracticeArea } from "@/lib/content/practice-areas";
import { firm, SITE_URL } from "@/lib/content/site";
import Reveal from "@/components/ui/Reveal";
import SplitLines from "@/components/ui/SplitLines";
import ArrowLink from "@/components/ui/ArrowLink";
import ContactCta from "@/components/home/ContactCta";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return profiledMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member || !member.hasProfile) return {};

  const name = fullName(member);
  return {
    title: name,
    description: `${name} — ${member.role}, ${firm.name}. ${member.bio[0]}`,
    alternates: { canonical: `/ekibimiz/${member.slug}` },
    openGraph: {
      type: "profile",
      title: `${name} | ${firm.name}`,
      description: `${member.role}, ${firm.name}`,
      url: `/ekibimiz/${member.slug}`,
      images: [{ url: member.photo, width: 710, height: 532, alt: name }],
    },
  };
}

/** Yalnızca sitede açıkça yer alan alanlar listelenir. */
function factRows(member: TeamMember) {
  const rows: { label: string; values: string[] }[] = [];
  if (member.barRegistration) {
    rows.push({ label: "Baro kaydı", values: [member.barRegistration] });
  }
  if (member.education?.length) {
    rows.push({ label: "Eğitim", values: member.education });
  }
  if (member.languages?.length) {
    rows.push({ label: "Yabancı dil", values: member.languages });
  }
  return rows;
}

export default async function TeamMemberPage({ params }: Params) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member || !member.hasProfile) notFound();

  const name = fullName(member);
  const facts = factRows(member);
  const related = (member.relatedAreas ?? [])
    .map(getPracticeArea)
    .filter((a) => a !== undefined);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: member.role,
    worksFor: { "@type": "LegalService", name: firm.name, url: SITE_URL },
    url: `${SITE_URL}/ekibimiz/${member.slug}`,
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

      <section className="bg-ivory pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="container-editorial">
          <Reveal>
            <nav aria-label="Konum" className="label-eyebrow text-muted">
              <Link
                href="/ekibimiz"
                className="transition-colors duration-300 hover:text-ink"
              >
                Ekibimiz
              </Link>
            </nav>
          </Reveal>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-5" delay={0.1}>
              <div className="overflow-hidden bg-ivory-deep">
                <Image
                  src={member.photo}
                  alt={`${name} portresi`}
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
                  <p
                    key={p}
                    className="text-[1rem] leading-[1.8] text-ink/78"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>

              {facts.length > 0 && (
                <Reveal className="mt-14 max-w-xl" delay={0.15}>
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
                          {row.values.join(", ")}
                        </dd>
                      </div>
                    ))}
                    {member.email && (
                      <div className="grid grid-cols-3 gap-4 border-b border-line py-4">
                        <dt className="label-eyebrow text-muted">E-posta</dt>
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
              )}
            </div>
          </div>
        </div>
      </section>

      {member.focus && member.focus.length > 0 && (
        <section className="bg-ivory-soft py-20 md:py-28">
          <div className="container-editorial">
            <div className="grid gap-10 md:grid-cols-12 md:gap-8">
              <Reveal className="md:col-span-3">
                <p className="label-eyebrow text-muted">Çalışma konuları</p>
              </Reveal>
              <Reveal className="md:col-span-9" stagger={0.05}>
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
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-ivory py-20 md:py-28">
          <div className="container-editorial">
            <Reveal className="mb-10">
              <p className="label-eyebrow text-muted">İlgili uzmanlık alanları</p>
            </Reveal>
            <Reveal className="flex flex-wrap gap-x-12 gap-y-5" stagger={0.06}>
              {related.map((area) => (
                <ArrowLink
                  key={area.slug}
                  href={`/uzmanlik-alanlari/${area.slug}`}
                >
                  {area.shortTitle ?? area.title}
                </ArrowLink>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-ivory pb-20">
        <div className="container-editorial">
          <ArrowLink href="/ekibimiz">Tüm ekip</ArrowLink>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
