import ImageSection from "@/components/ui/ImageSection";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitLines from "@/components/ui/SplitLines";

/**
 * Fotoğraf üzerine kurumsal ifade. Uzmanlık listesi ile ilkeler bölümü
 * arasında nefes aldırır.
 */
export default function StatementBand() {
  return (
    <ImageSection
      src="/images/sahne/ana-sayfa.jpg"
      alt=""
      overlay="orta"
      height="normal"
    >
      <SectionLabel invert>Büromuz</SectionLabel>

      <SplitLines
        as="p"
        lines={["İstanbul'da kurulduk.", "İşimiz sınırların ötesine uzanıyor."]}
        className="max-w-4xl font-serif text-statement font-light"
      />

      <Reveal className="mt-8 max-w-xl" delay={0.15}>
        <p className="text-[0.98rem] leading-relaxed text-ivory/80">
          Yurt içinde ve yurt dışında faaliyet gösteren kişi ve kurumlara
          Türkçe ve İngilizce hizmet veriyoruz.
        </p>
      </Reveal>
    </ImageSection>
  );
}
