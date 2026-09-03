import { getDictionary, route, type Locale } from "@/lib/i18n";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitLines from "@/components/ui/SplitLines";

/**
 * Videodan sonraki ilk fildişi bölüm. Etiket en üstte; altında solda büyük
 * ifade, sağda paragraflar yan yana durur.
 */
export default function Intro({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32 lg:py-40">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-10 select-none font-serif text-[13rem] font-light leading-none text-ink/[0.04] md:-top-16 md:text-[20rem] lg:-top-24 lg:text-[26rem]"
      >
        1982
      </span>

      <div className="container-editorial relative">
        <SectionLabel>{dict.home.introLabel}</SectionLabel>

        <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <SplitLines
            as="h2"
            lines={dict.home.introStatementLines}
            className="font-serif text-statement font-light md:col-span-6"
          />

          <div className="md:col-span-6 md:pt-2 lg:col-span-5 lg:col-start-8">
            <Reveal className="space-y-7" stagger={0.12}>
              {dict.home.introParagraphs.map((p) => (
                <p key={p} className="text-[1.02rem] leading-[1.85] text-ink/75">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal className="mt-10" delay={0.15}>
              <ArrowLink href={route(locale, "about")}>
                {dict.home.introLink}
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
