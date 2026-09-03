import { getDictionary, type Locale } from "@/lib/i18n";
import ImageSection from "@/components/ui/ImageSection";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitLines from "@/components/ui/SplitLines";

/**
 * Fotoğraf üzerine kurumsal ifade. Uzmanlık listesi ile ilkeler bölümü
 * arasında nefes aldırır.
 */
export default function StatementBand({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <ImageSection
      src="/images/sahne/ana-sayfa.jpg"
      alt=""
      overlay="orta"
      height="normal"
    >
      <SectionLabel invert>{dict.home.statementLabel}</SectionLabel>

      <SplitLines
        as="p"
        lines={dict.home.statementLines}
        className="max-w-4xl font-serif text-statement font-light"
      />

      <Reveal className="mt-8 max-w-xl" delay={0.15}>
        <p className="text-[0.98rem] leading-relaxed text-ivory/80">
          {dict.home.statementBody}
        </p>
      </Reveal>
    </ImageSection>
  );
}
