import type { Metadata } from "next";
import { contact, firm } from "@/lib/content/site";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Gizlilik",
  description: `${firm.name} web sitesi gizlilik bildirimi.`,
  alternates: { canonical: "/gizlilik" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Gizlilik"
      titleLines={["Gizlilik", "bildirimi."]}
      lead="Bu bildirim, web sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını ve nasıl kullanıldığını açıklar."
      sections={[
        {
          heading: "Toplanan bilgiler",
          paragraphs: [
            "Web sitemizi yalnızca gezinmek için kullandığınızda sizden kimlik bilgisi talep edilmez. Yalnızca iletişim formunu doldurduğunuzda, formda yer alan bilgiler tarafımıza iletilir.",
          ],
        },
        {
          heading: "Bilgilerin kullanımı",
          paragraphs: [
            "İlettiğiniz bilgiler yalnızca talebinize yanıt vermek amacıyla kullanılır. Reklam veya pazarlama amacıyla kullanılmaz, üçüncü kişilere satılmaz.",
          ],
        },
        {
          heading: "Mesleki sır ve gizlilik",
          paragraphs: [
            "Avukatlık mesleği kapsamındaki sır saklama yükümlülüğü, büromuza iletilen tüm bilgiler bakımından geçerlidir. Bununla birlikte, form üzerinden iletilen mesajlar avukat–müvekkil ilişkisi kurmaz; bu nedenle hassas bilgileri form yerine doğrudan görüşme yoluyla paylaşmanızı öneririz.",
          ],
        },
        {
          heading: "Güvenlik",
          paragraphs: [
            "Web sitesi üzerinden iletilen veriler şifreli bağlantı üzerinden aktarılır. Buna rağmen internet üzerinden yapılan hiçbir aktarımın mutlak güvenlikte olduğu garanti edilemez.",
          ],
        },
        {
          heading: "Dış bağlantılar",
          paragraphs: [
            "Sitemizde üçüncü taraf sitelere bağlantı verilmesi hâlinde, bu sitelerin içeriğinden ve gizlilik uygulamalarından büromuz sorumlu değildir.",
          ],
        },
        {
          heading: "İletişim",
          paragraphs: [
            `Bu bildirim hakkındaki sorularınız için ${contact.email} adresine yazabilir veya ${contact.phones[0].label} numaralı telefondan büromuza ulaşabilirsiniz.`,
          ],
        },
      ]}
    />
  );
}
