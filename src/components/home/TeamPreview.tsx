import { lawyers } from "@/lib/content/team";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import TeamGrid from "@/components/site/TeamGrid";

export default function TeamPreview() {
  return (
    <section className="bg-ivory py-28 md:py-40" aria-labelledby="ekip-baslik">
      <div className="container-editorial">
        <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-24">
          <div>
            <p className="label-eyebrow text-muted">Ekibimiz</p>
            <h2
              id="ekip-baslik"
              className="mt-6 max-w-xl font-serif text-title font-light"
            >
              Her dosya, o alanda çalışan avukat tarafından yürütülür.
            </h2>
          </div>
          <ArrowLink href="/ekibimiz">Tüm ekip</ArrowLink>
        </Reveal>

        <TeamGrid members={lawyers.slice(0, 3)} columns={3} />
      </div>
    </section>
  );
}
