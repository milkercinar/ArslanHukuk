import { values } from "@/lib/content/firm";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitLines from "@/components/ui/SplitLines";

/**
 * Yaklaşımımız. İkon ve numara yok; başlık ve tek cümlelik açıklama.
 */
export default function Values() {
  return (
    <section
      className="bg-ivory-soft py-20 md:py-28"
      aria-labelledby="yaklasim-baslik"
    >
      <div className="container-editorial">
        <SectionLabel>Yaklaşımımız</SectionLabel>

        <SplitLines
          as="h2"
          lines={["Çalışma biçimimizi", "belirleyen ilkeler."]}
          className="font-serif text-title font-light"
        />

        <ul className="mt-12 md:mt-14">
          {values.map((value, i) => (
            <Reveal
              as="li"
              key={value.title}
              delay={i * 0.06}
              className="grid grid-cols-12 gap-4 border-t border-line py-8 md:gap-6 md:py-10"
            >
              <h3 className="col-span-12 font-serif text-[1.35rem] font-light leading-snug md:col-span-4 md:text-[1.6rem]">
                {value.title}
              </h3>
              <p className="col-span-12 max-w-lg text-sm leading-relaxed text-ink/70 md:col-span-7 md:col-start-6">
                {value.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
