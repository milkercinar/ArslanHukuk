import { values } from "@/lib/content/firm";
import Reveal from "@/components/ui/Reveal";
import SplitLines from "@/components/ui/SplitLines";

/**
 * Yaklaşımımız. İkon yok; numara, başlık ve tek cümlelik açıklama.
 */
export default function Values() {
  return (
    <section
      className="bg-ivory-soft py-28 md:py-40"
      aria-labelledby="yaklasim-baslik"
    >
      <div className="container-editorial">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-3">
            <p className="label-eyebrow text-muted">Yaklaşımımız</p>
          </Reveal>

          <div className="md:col-span-9">
            <SplitLines
              as="h2"
              lines={["Çalışma biçimimizi", "belirleyen ilkeler."]}
              className="font-serif text-title font-light"
            />

            <ul className="mt-16 md:mt-20">
              {values.map((value, i) => (
                <Reveal
                  as="li"
                  key={value.number}
                  delay={i * 0.06}
                  className="grid grid-cols-12 gap-4 border-t border-line py-8 md:gap-6 md:py-10"
                >
                  <span className="col-span-2 font-mono text-xs tracking-widest text-muted md:col-span-1 md:text-[0.7rem]">
                    {value.number}
                  </span>
                  <h3 className="col-span-10 font-serif text-[1.35rem] font-light leading-snug md:col-span-4 md:text-[1.6rem]">
                    {value.title}
                  </h3>
                  <p className="col-span-12 max-w-lg text-sm leading-relaxed text-ink/65 md:col-span-7 md:col-start-6">
                    {value.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
