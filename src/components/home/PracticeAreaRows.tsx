import Link from "next/link";
import { practiceAreas } from "@/lib/content/practice-areas";
import Reveal from "@/components/ui/Reveal";

/**
 * Numaralandırılmış yatay uzmanlık satırları.
 *
 * Kart yok, gölge yok: hiyerarşi yalnızca numara, tipografi ve ince ayırıcı
 * çizgilerle kurulur. Satırın üzerine gelindiğinde zemin koyulaşır ve ok kayar.
 */
export default function PracticeAreaRows({
  limit,
  className = "",
}: {
  limit?: number;
  className?: string;
}) {
  const areas = limit ? practiceAreas.slice(0, limit) : practiceAreas;

  return (
    <ul className={`border-t border-line ${className}`}>
      {areas.map((area) => (
        <li key={area.slug} className="border-b border-line">
          <Link
            href={`/uzmanlik-alanlari/${area.slug}`}
            className="group relative block"
          >
            {/* Üzerine gelindiğinde soldan açılan koyu zemin. */}
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
            />

            <div className="relative grid grid-cols-12 items-baseline gap-4 px-1 py-8 transition-colors duration-500 group-hover:text-ivory md:gap-6 md:py-11 lg:py-14">
              <span className="col-span-12 font-mono text-xs tracking-widest text-muted transition-colors duration-500 group-hover:text-ivory/50 md:col-span-1 md:text-[0.7rem]">
                {area.number}
              </span>

              <h3 className="col-span-12 mt-2 font-serif text-[1.6rem] font-light leading-tight md:col-span-5 md:mt-0 md:text-[1.85rem] lg:text-[2.15rem]">
                {area.title}
              </h3>

              <p className="col-span-11 mt-3 max-w-md text-sm leading-relaxed text-ink/70 transition-colors duration-500 group-hover:text-ivory/65 md:col-span-5 md:mt-0">
                {area.excerpt}
              </p>

              <span
                aria-hidden="true"
                className="col-span-1 justify-self-end self-center text-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
              >
                →
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Ana sayfadaki bölüm sarmalayıcısı. */
export function PracticeAreasSection() {
  return (
    <section
      id="uzmanlik"
      className="bg-ivory pb-24 pt-4 md:pb-32"
      aria-labelledby="uzmanlik-baslik"
    >
      <div className="container-editorial">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
          <h2
            id="uzmanlik-baslik"
            className="font-serif text-title font-light"
          >
            Uzmanlık alanlarımız.
          </h2>
          <p className="label-eyebrow text-muted">
            {practiceAreas.length.toString().padStart(2, "0")} alan
          </p>
        </Reveal>

        <PracticeAreaRows />
      </div>
    </section>
  );
}
