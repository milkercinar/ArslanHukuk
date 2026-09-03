import { getDictionary, type Locale } from "@/lib/i18n";
import PageHeader from "@/components/ui/PageHeader";
import PracticeAreaRows from "@/components/home/PracticeAreaRows";

export default function PracticeAreasView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.practiceAreas.eyebrow}
        titleLines={dict.practiceAreas.titleLines}
        lead={dict.practiceAreas.lead}
        align="wide"
        image="/images/sahne/uzmanlik-alanlari.jpg"
      />

      <section className="bg-ivory pb-16 md:pb-24">
        <PracticeAreaRows locale={locale} />

        <div className="container-editorial">
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            {dict.practiceAreas.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
