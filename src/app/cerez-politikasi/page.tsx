import type { Metadata } from "next";
import { contact, firm } from "@/lib/content/site";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: `${firm.name} web sitesi çerez politikası.`,
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Çerezler"
      titleLines={["Çerez", "politikası."]}
      lead="Bu politika, web sitemizde çerezlerin nasıl kullanıldığını açıklar."
      sections={[
        {
          heading: "Çerez nedir?",
          paragraphs: [
            "Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Sitenin çalışması ve tercihlerinizin hatırlanması için kullanılırlar.",
          ],
        },
        {
          heading: "Sitemizde kullanılan çerezler",
          paragraphs: [
            "Web sitemiz, çalışması için gerekli olan zorunlu çerezler dışında çerez kullanmamaktadır. Reklam, profilleme veya üçüncü taraf takip çerezleri kullanılmaz.",
          ],
          list: [
            "Zorunlu çerezler: sitenin temel işlevlerinin çalışmasını sağlar ve devre dışı bırakılamaz.",
          ],
        },
        {
          heading: "Çerezlerin yönetimi",
          paragraphs: [
            "Tarayıcı ayarlarınız üzerinden çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi hâlinde sitenin bazı bölümleri beklendiği gibi çalışmayabilir.",
          ],
        },
        {
          heading: "Değişiklikler",
          paragraphs: [
            "Bu politika, sitede kullanılan teknolojilerin değişmesi hâlinde güncellenebilir. Güncel metin her zaman bu sayfada yayımlanır.",
          ],
        },
        {
          heading: "İletişim",
          paragraphs: [
            `Çerez kullanımı hakkındaki sorularınız için ${contact.email} adresine yazabilirsiniz.`,
          ],
        },
      ]}
    />
  );
}
