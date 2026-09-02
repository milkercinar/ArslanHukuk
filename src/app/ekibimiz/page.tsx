import type { Metadata } from "next";
import { lawyers, officeStaff } from "@/lib/content/team";
import { firm } from "@/lib/content/site";
import ImageSection from "@/components/ui/ImageSection";
import PageHeader from "@/components/ui/PageHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitLines from "@/components/ui/SplitLines";
import Reveal from "@/components/ui/Reveal";
import TeamGrid from "@/components/site/TeamGrid";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "Ekibimiz",
  description:
    "Arslan Hukuk Bürosu avukatları ve büro ekibi. Her bir avukatımız hukukun farklı bir alanında uzmanlaşmıştır.",
  alternates: { canonical: "/ekibimiz" },
  openGraph: {
    title: `Ekibimiz | ${firm.name}`,
    description: "Arslan Hukuk Bürosu avukatları ve büro ekibi.",
    url: "/ekibimiz",
  },
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ekibimiz"
        titleLines={["Dosyanızla kimin", "ilgilendiğini", "bilirsiniz."]}
        lead="Büromuzda her avukat hukukun farklı bir alanında çalışır; dosyanız da o alanda çalışan kişiye gider. Danışmanlığı ve dava takibini Türkçe ve İngilizce yürütüyoruz."
        align="wide"
      />

      <section
        className="bg-ivory pb-16 md:pb-24"
        aria-labelledby="avukatlar-baslik"
      >
        <div className="container-editorial">
          <Reveal className="mb-10 border-t border-line pt-8 md:mb-14">
            <h2 id="avukatlar-baslik" className="label-eyebrow text-muted">
              Avukatlar
            </h2>
          </Reveal>

          <TeamGrid members={lawyers} columns={2} />
        </div>
      </section>

      <section
        className="bg-ivory pb-20 md:pb-28"
        aria-labelledby="buro-baslik"
      >
        <div className="container-editorial">
          <Reveal className="mb-10 border-t border-line pt-8 md:mb-14">
            <h2 id="buro-baslik" className="label-eyebrow text-muted">
              Büro ekibi
            </h2>
          </Reveal>

          <TeamGrid members={officeStaff} columns={3} />
        </div>
      </section>

      <ImageSection
        src="/images/sahne/ekibimiz.jpg"
        alt=""
        overlay="koyu"
        height="kisa"
      >
        <SectionLabel invert>Kadromuz</SectionLabel>
        <SplitLines
          as="p"
          lines={["Her biri kendi alanında", "uzmanlaşmış bir kadro."]}
          className="max-w-3xl font-serif text-statement font-light"
        />
      </ImageSection>

      <ContactCta />
    </>
  );
}
