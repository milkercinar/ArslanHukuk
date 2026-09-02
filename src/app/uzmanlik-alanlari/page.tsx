import type { Metadata } from "next";
import { firm } from "@/lib/content/site";
import PageHeader from "@/components/ui/PageHeader";
import PracticeAreaRows from "@/components/home/PracticeAreaRows";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "Uzmanlık Alanları",
  description:
    "Ticaret ve uluslararası ticaret, kira ve gayrimenkul, icra ve iflas, iş ve sosyal güvenlik, fikri ve sınai haklar, medeni, idare ve vergi ile bankacılık ve finans hukuku alanlarında hizmet veriyoruz.",
  alternates: { canonical: "/uzmanlik-alanlari" },
  openGraph: {
    title: `Uzmanlık Alanları | ${firm.name}`,
    description:
      "Arslan Hukuk Bürosu'nun danışmanlık ve dava takibi yaptığı hukuk alanları.",
    url: "/uzmanlik-alanlari",
  },
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uzmanlık Alanları"
        titleLines={["Farklı alanlar,", "aynı çalışma", "disiplini."]}
        lead="Aşağıdaki başlıklar, kurumsal ve bireysel müvekkillerimize danışmanlık verdiğimiz ve dava takibi yaptığımız alanlar. Her birinde o konuda çalışan bir avukatımız var."
        align="wide"
      />

      <section className="bg-ivory pb-16 md:pb-24">
        <PracticeAreaRows />

        <div className="container-editorial">
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            Buradaki açıklamalar genel bilgi vermek içindir, hukuki görüş
            yerine geçmez. Her dosya kendi koşulları içinde değerlendirilir.
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
