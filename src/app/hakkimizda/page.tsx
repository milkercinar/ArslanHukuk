import type { Metadata } from "next";
import { about, values } from "@/lib/content/firm";
import { firm } from "@/lib/content/site";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "1982 yılında Av. Seyit Arslan tarafından kurulan Arslan Hukuk Bürosu, İstanbul merkezli olarak yurt içinde ve yurt dışında faaliyet gösteren kişi ve kurumlara Türkçe ve İngilizce hukuki danışmanlık ve avukatlık hizmeti sunmaktadır.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: `Hakkımızda | ${firm.name}`,
    description:
      "1982 yılında kurulan Arslan Hukuk Bürosu'nun kuruluşu, çalışma alanları ve yaklaşımı.",
    url: "/hakkimizda",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hakkımızda"
        titleLines={about.headlineLines}
        align="wide"
      />

      <section className="bg-ivory pb-28 md:pb-40">
        <div className="container-editorial">
          <div className="grid gap-12 border-t border-line pt-16 md:grid-cols-12 md:gap-8 md:pt-20">
            <Reveal className="md:col-span-3">
              <p className="label-eyebrow text-muted">Büro</p>
            </Reveal>

            <Reveal
              className="max-w-2xl space-y-7 md:col-span-8 md:col-start-5"
              stagger={0.1}
            >
              {about.paragraphs.map((p) => (
                <p key={p} className="text-[1.02rem] leading-[1.8] text-ink/78">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Büyük tipografi ile üç ilke — hepsi mevcut kurumsal metne dayanır. */}
      <section className="bg-ivory-soft py-24 md:py-36">
        <div className="container-editorial">
          <Reveal
            className="flex flex-col gap-4 font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.05] md:flex-row md:gap-16"
            stagger={0.12}
          >
            <span>Uzmanlık.</span>
            <span>Süreklilik.</span>
            <span className="text-ink/45">Erişim.</span>
          </Reveal>
        </div>
      </section>

      <section
        className="bg-ivory py-28 md:py-40"
        aria-labelledby="ilkeler-baslik"
      >
        <div className="container-editorial">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-3">
              <p className="label-eyebrow text-muted">Yaklaşımımız</p>
            </Reveal>

            <div className="md:col-span-9">
              <h2 id="ilkeler-baslik" className="sr-only">
                Yaklaşımımız
              </h2>
              <ul>
                {values.map((value, i) => (
                  <Reveal
                    as="li"
                    key={value.number}
                    delay={i * 0.05}
                    className="grid grid-cols-12 gap-4 border-t border-line py-8 md:gap-6 md:py-10"
                  >
                    <span className="col-span-2 font-mono text-xs tracking-widest text-muted md:col-span-1 md:text-[0.7rem]">
                      {value.number}
                    </span>
                    <h3 className="col-span-10 font-serif text-[1.35rem] font-light leading-snug md:col-span-4 md:text-[1.55rem]">
                      {value.title}
                    </h3>
                    <p className="col-span-12 max-w-lg text-sm leading-relaxed text-ink/65 md:col-span-7 md:col-start-6">
                      {value.body}
                    </p>
                  </Reveal>
                ))}
              </ul>

              <Reveal className="mt-14 flex flex-wrap gap-x-14 gap-y-5">
                <ArrowLink href="/uzmanlik-alanlari">
                  Uzmanlık alanlarımız
                </ArrowLink>
                <ArrowLink href="/ekibimiz">Ekibimiz</ArrowLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
