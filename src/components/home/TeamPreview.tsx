import { lawyers } from "@/lib/content/team";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import TeamGrid from "@/components/site/TeamGrid";

export default function TeamPreview() {
  return (
    <section className="bg-ivory py-20 md:py-28" aria-labelledby="ekip-baslik">
      <div className="container-editorial">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="label-eyebrow text-muted">Ekibimiz</p>
            <h2
              id="ekip-baslik"
              className="mt-6 max-w-xl font-serif text-title font-light"
            >
              Dosyanızla kimin ilgilendiğini baştan bilirsiniz.
            </h2>
          </div>
          <ArrowLink href="/ekibimiz">Tüm ekip</ArrowLink>
        </Reveal>

        <TeamGrid members={lawyers.slice(0, 3)} columns={3} />
      </div>
    </section>
  );
}
