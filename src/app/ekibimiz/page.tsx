import type { Metadata } from "next";
import { lawyers, officeStaff } from "@/lib/content/team";
import { firm } from "@/lib/content/site";
import PageHeader from "@/components/ui/PageHeader";
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
        titleLines={["Dosyayı, o alanda", "çalışan avukat", "yürütür."]}
        lead="Büromuzdaki her bir avukat hukukun farklı bir alanında uzman olup yoğun tecrübe sahibidir. Danışmanlık ve dava takibi Türkçe ve İngilizce olarak yürütülmektedir."
        align="wide"
      />

      <section
        className="bg-ivory pb-24 md:pb-32"
        aria-labelledby="avukatlar-baslik"
      >
        <div className="container-editorial">
          <Reveal className="mb-14 border-t border-line pt-8 md:mb-20">
            <h2 id="avukatlar-baslik" className="label-eyebrow text-muted">
              Avukatlar
            </h2>
          </Reveal>

          <TeamGrid members={lawyers} columns={2} />
        </div>
      </section>

      <section
        className="bg-ivory pb-28 md:pb-40"
        aria-labelledby="buro-baslik"
      >
        <div className="container-editorial">
          <Reveal className="mb-14 border-t border-line pt-8 md:mb-20">
            <h2 id="buro-baslik" className="label-eyebrow text-muted">
              Büro ekibi
            </h2>
          </Reveal>

          <TeamGrid members={officeStaff} columns={3} />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
