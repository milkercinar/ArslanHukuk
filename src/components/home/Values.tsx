import { values } from "@/lib/content/firm";
import Reveal from "@/components/ui/Reveal";
import SplitLines from "@/components/ui/SplitLines";

/**
 * Yaklaşımımız. İkon yok; numara, başlık ve tek cümlelik açıklama.
 */
export default function Values() {
  return (
    <section
      className="bg-ivory-soft py-20 md:py-28"
      aria-labelledby="yaklasim-baslik"
    >
      <div className="container-editorial">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="label-eyebrow font-bold! text-ink">Yaklaşımımız</p>
          </Reveal>

          <SplitLines
            as="h2"
            lines={["Çalışma biçimimizi", "belirleyen ilkeler."]}
            className="mt-4 font-serif text-title font-light"
          />
        </div>

        <ul className="mx-auto mt-12 max-w-3xl md:mt-14">
          {values.map((value, i) => (
            <Reveal
              as="li"
              key={value.number}
              delay={i * 0.06}
              className="border-t border-line py-8 text-center md:py-10"
            >
              <h3 className="font-serif text-[1.35rem] font-light leading-snug md:text-[1.6rem]">
                {value.title}
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink/65">
                {value.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
