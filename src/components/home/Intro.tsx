import { intro } from "@/lib/content/firm";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import SplitLines from "@/components/ui/SplitLines";

/**
 * Videodan sonraki ilk fildişi bölüm. Solda küçük bir etiket, sağda ekranın
 * büyük bölümünü kaplayan editoryal ifade.
 */
export default function Intro() {
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-3">
            <p className="label-eyebrow text-muted">{intro.label}</p>
          </Reveal>

          <div className="md:col-span-9 lg:col-span-8">
            <SplitLines
              as="h2"
              lines={intro.statementLines}
              className="font-serif text-statement font-light"
            />

            <Reveal
              className="mt-10 max-w-2xl space-y-6"
              stagger={0.12}
            >
              {intro.paragraphs.map((p) => (
                <p key={p} className="text-[0.98rem] leading-[1.75] text-ink/75">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal className="mt-12" delay={0.15}>
              <ArrowLink href={intro.link.href}>{intro.link.label}</ArrowLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
