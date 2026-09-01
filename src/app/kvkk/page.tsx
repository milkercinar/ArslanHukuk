import type { Metadata } from "next";
import { contact, firm } from "@/lib/content/site";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: `${firm.name} kişisel verilerin korunması hakkında aydınlatma metni.`,
  alternates: { canonical: "/kvkk" },
  robots: { index: true, follow: true },
};

export default function KvkkPage() {
  return (
    <LegalPage
      eyebrow="KVKK"
      titleLines={["Kişisel verilerin", "korunması hakkında", "aydınlatma metni."]}
      lead={`Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında ${firm.name} tarafından hazırlanmıştır.`}
      sections={[
        {
          heading: "Veri sorumlusu",
          paragraphs: [
            `KVKK uyarınca veri sorumlusu ${firm.name}'dur. Büromuzun adresi ${contact.address.full}, telefon numarası ${contact.phones[0].label}, elektronik posta adresi ${contact.email}'dur.`,
          ],
        },
        {
          heading: "İşlenen kişisel veriler",
          paragraphs: [
            "Web sitemizdeki iletişim formu aracılığıyla yalnızca sizin ilettiğiniz veriler işlenir:",
          ],
          list: [
            "Kimlik bilgisi: ad ve soyad",
            "İletişim bilgisi: e-posta adresi ve varsa telefon numarası",
            "Mesaj içeriği: form üzerinden ilettiğiniz konu başlığı ve mesaj metni",
          ],
        },
        {
          heading: "İşleme amaçları",
          paragraphs: [
            "Bu veriler; talebinizin değerlendirilmesi, tarafınıza geri dönüş yapılması ve iletişim sürecinin yürütülmesi amaçlarıyla işlenir. Verileriniz pazarlama amacıyla kullanılmaz.",
          ],
        },
        {
          heading: "Hukuki sebep",
          paragraphs: [
            "Kişisel verileriniz, KVKK m.5/2 kapsamında bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması ile meşru menfaat hukuki sebeplerine ve açık rızanıza dayanılarak işlenmektedir.",
          ],
        },
        {
          heading: "Aktarım",
          paragraphs: [
            "Kişisel verileriniz, yalnızca hukuki yükümlülüklerin yerine getirilmesi amacıyla yetkili kamu kurum ve kuruluşlarına ve web sitesi ile e-posta altyapımızı sağlayan hizmet sağlayıcılarımıza, hizmetin gerektirdiği ölçüde aktarılabilir. Bunun dışında üçüncü kişilerle paylaşılmaz ve satılmaz.",
          ],
        },
        {
          heading: "Saklama süresi",
          paragraphs: [
            "Verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen saklama süreleri kadar muhafaza edilir; sürenin sonunda silinir, yok edilir veya anonim hâle getirilir.",
          ],
        },
        {
          heading: "İlgili kişinin hakları",
          paragraphs: [
            "KVKK m.11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, bu işlemlerin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme ve zararınızın giderilmesini talep etme haklarına sahipsiniz.",
            `Taleplerinizi ${contact.email} adresine veya ${contact.address.full} adresine yazılı olarak iletebilirsiniz.`,
          ],
        },
        {
          heading: "Avukat–müvekkil ilişkisi",
          paragraphs: [
            "İletişim formunun doldurulması ve tarafımıza mesaj iletilmesi avukat–müvekkil ilişkisi kurmaz. Vekâlet ilişkisi ancak ayrıca düzenlenecek yazılı bir sözleşme ile kurulur. Bu nedenle formda gizli veya hassas bilgilere yer vermemenizi öneririz.",
          ],
        },
      ]}
    />
  );
}
