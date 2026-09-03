import type { Locale } from "@/lib/i18n";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import { PracticeAreasSection } from "@/components/home/PracticeAreaRows";
import StatementBand from "@/components/home/StatementBand";
import Values from "@/components/home/Values";
import TeamPreview from "@/components/home/TeamPreview";
import ContactCta from "@/components/home/ContactCta";

/** Ana sayfanın gövdesi. Türkçe ve İngilizce rotalar aynı bileşeni kullanır. */
export default function HomeView({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <Intro locale={locale} />
      <PracticeAreasSection locale={locale} />
      <StatementBand locale={locale} />
      <Values locale={locale} />
      <TeamPreview locale={locale} />
      <ContactCta locale={locale} />
    </>
  );
}
