import { getDictionary, route, type Locale } from "@/lib/i18n";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ArrowLink from "@/components/ui/ArrowLink";

export default function AboutView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.about.eyebrow}
        titleLines={dict.about.headlineLines}
        align="wide"
        image="/images/sahne/hakkimizda.jpg"
      />

      <section className="bg-ivory pb-20 md:pb-28">
        <div className="container-editorial">
          <div className="border-t border-line pt-16">
            <SectionLabel>{dict.about.officeLabel}</SectionLabel>

            {/* İki bağımsız sütun. Tek ızgarada dört paragraf verilirse
                satırlar hizalanır ve kısa paragrafın altında ölü boşluk
                kalır; burada her sütun kendi içinde akar. */}
            <div className="grid gap-x-12 gap-y-7 md:grid-cols-2 lg:gap-x-20">
              {[
                dict.about.paragraphs.slice(0, 2),
                dict.about.paragraphs.slice(2),
              ].map((sutun, i) => (
                <Reveal
                  key={i}
                  className="space-y-7"
                  stagger={0.1}
                  delay={i * 0.08}
                >
                  {sutun.map((p) => (
                    <p
                      key={p}
                      className="text-[1.02rem] leading-[1.8] text-ink/78"
                    >
                      {p}
                    </p>
                  ))}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Büyük tipografi ile üç ilke — hepsi mevcut kurumsal metne dayanır. */}
      <section className="bg-ivory-soft py-16 md:py-24">
        <div className="container-editorial">
          <Reveal
            className="flex flex-col gap-4 font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.05] md:flex-row md:gap-12"
            stagger={0.12}
          >
            {dict.about.pillars.map((pillar, i) => (
              <span
                key={pillar}
                className={i === dict.about.pillars.length - 1 ? "text-ink/45" : undefined}
              >
                {pillar}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        className="bg-ivory py-20 md:py-28"
        aria-labelledby="ilkeler-baslik"
      >
        <div className="container-editorial">
          <SectionLabel>{dict.about.valuesLabel}</SectionLabel>

          <h2 id="ilkeler-baslik" className="sr-only">
            {dict.about.valuesLabel}
          </h2>
          <ul>
            {dict.home.values.map((value, i) => (
              <Reveal
                as="li"
                key={value.title}
                delay={i * 0.05}
                className="grid grid-cols-12 gap-4 border-t border-line py-8 md:gap-6 md:py-10"
              >
                <h3 className="col-span-12 font-serif text-[1.35rem] font-light leading-snug md:col-span-4 md:text-[1.55rem]">
                  {value.title}
                </h3>
                <p className="col-span-12 max-w-lg text-sm leading-relaxed text-ink/70 md:col-span-7 md:col-start-6">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-10 flex flex-wrap gap-x-14 gap-y-5">
            <ArrowLink href={route(locale, "practiceAreas")}>
              {dict.home.heroPrimaryCta}
            </ArrowLink>
            <ArrowLink href={route(locale, "team")}>{dict.nav.team}</ArrowLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
