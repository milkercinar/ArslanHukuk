import Link from "next/link";
import { getPracticeAreas } from "@/lib/content/practice-areas";
import {
  getDictionary,
  practiceAreaRoute,
  type Locale,
} from "@/lib/i18n";
import Reveal from "@/components/ui/Reveal";

/**
 * Yatay uzmanlık satırları.
 *
 * Kart yok, gölge yok, numara yok: hiyerarşi yalnızca tipografi ve ince
 * ayırıcı çizgilerle kurulur. Satırın üzerine gelindiğinde zemin koyulaşır ve ok kayar.
 */
export default function PracticeAreaRows({
  locale,
  limit,
  className = "",
}: {
  locale: Locale;
  limit?: number;
  className?: string;
}) {
  const all = getPracticeAreas(locale);
  const areas = limit ? all.slice(0, limit) : all;

  return (
    <ul className={`w-full border-t border-line ${className}`}>
      {areas.map((area) => (
        <li key={area.slug} className="border-b border-line">
          <Link
            href={practiceAreaRoute(locale, area.slug)}
            className="group relative block"
          >
            {/* Üzerine gelindiğinde soldan açılan, ekranın kenarına kadar giden koyu zemin. */}
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
            />

            <div className="container-editorial relative grid grid-cols-12 items-baseline gap-4 py-8 transition-colors duration-500 group-hover:text-ivory md:gap-6 md:py-9 lg:py-10">
              <h3 className="col-span-12 font-serif text-[1.6rem] font-light leading-tight md:col-span-6 md:text-[1.85rem] lg:text-[2.15rem]">
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
export function PracticeAreasSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section
      id="uzmanlik"
      className="bg-ivory pb-16 pt-4 md:pb-24"
      aria-labelledby="uzmanlik-baslik"
    >
      <div className="container-editorial">
        <Reveal className="mb-10 md:mb-14">
          <h2 id="uzmanlik-baslik" className="font-serif text-title font-light">
            {dict.home.practiceHeading}
          </h2>
        </Reveal>
      </div>

      <PracticeAreaRows locale={locale} />
    </section>
  );
}
