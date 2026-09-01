import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

/**
 * Hukuki bilgilendirme sayfalarının ortak düzeni: dar ölçü, geniş satır
 * aralığı, numarasız başlıklar.
 */
export default function LegalPage({
  eyebrow,
  titleLines,
  lead,
  sections,
  updatedAt,
}: {
  eyebrow: string;
  titleLines: readonly string[];
  lead?: string;
  sections: LegalSection[];
  updatedAt?: string;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} titleLines={titleLines} lead={lead} />

      <section className="bg-ivory pb-28 md:pb-40">
        <div className="container-editorial">
          <div className="max-w-2xl border-t border-line pt-14 md:pt-16">
            {sections.map((section, i) => (
              <Reveal
                as="section"
                key={section.heading}
                delay={Math.min(i, 4) * 0.05}
                className="mb-12"
              >
                <h2 className="font-serif text-[1.35rem] font-light md:text-[1.55rem]">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((p) => (
                  <p
                    key={p}
                    className="mt-5 text-[0.97rem] leading-[1.85] text-ink/75"
                  >
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="mt-6 space-y-3">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 text-[0.95rem] leading-[1.8] text-ink/75"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-3 h-px w-4 shrink-0 bg-line-strong"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {updatedAt && (
              <Reveal className="mt-16 border-t border-line pt-8">
                <p className="text-xs text-muted">
                  Son güncelleme: {updatedAt}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
