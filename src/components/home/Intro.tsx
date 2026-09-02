import { intro } from "@/lib/content/firm";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitLines from "@/components/ui/SplitLines";

/**
 * Videodan sonraki ilk fildişi bölüm. Etiket başlığın üstünde durur.
 */
export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32 lg:py-40">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-10 select-none font-serif text-[13rem] font-light leading-none text-ink/[0.04] md:-top-16 md:text-[20rem] lg:-top-24 lg:text-[26rem]"
      >
        1982
      </span>

      <div className="container-editorial relative">
        <SectionLabel>{intro.label}</SectionLabel>

        <SplitLines
          as="h2"
          lines={intro.statementLines}
          className="max-w-4xl font-serif text-statement font-light"
        />

        <Reveal className="mt-12 max-w-2xl space-y-7" stagger={0.12}>
          {intro.paragraphs.map((p) => (
            <p key={p} className="text-[1.05rem] leading-[1.85] text-ink/75">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal className="mt-14" delay={0.15}>
          <ArrowLink href={intro.link.href}>{intro.link.label}</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
