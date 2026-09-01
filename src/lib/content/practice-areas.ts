/**
 * Uzmanlık alanları.
 *
 * Başlıklar arslanhukuk.com.tr ana sayfasında listelenen faaliyet
 * alanlarından birebir alınmıştır. Alt hizmetler yalnızca büronun mevcut
 * "Hakkımızda" ve avukat özgeçmişi metinlerinde geçen konulardan
 * oluşturulmuştur. Açıklamalar, hukuk dalının kapsamını anlatan genel ve
 * tarafsız metinlerdir; sonuç, başarı veya tecrübe iddiası içermez.
 */

export type PracticeCategory = "Kurumsal" | "Bireysel";

export type PracticeArea = {
  number: string;
  slug: string;
  title: string;
  /** Uzun başlıklar için listelerde kullanılan kısa ad. */
  shortTitle?: string;
  category: PracticeCategory;
  /** Satır listelerinde görünen tek cümlelik açıklama. */
  excerpt: string;
  /** Detay sayfasının giriş paragrafı. */
  intro: string;
  /** Detay sayfasının gövde metni. */
  body: string[];
  /** İlgili hizmet başlıkları. */
  services: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    number: "01",
    slug: "ticaret-ve-uluslararasi-ticaret-hukuku",
    title: "Ticaret ve Uluslararası Ticaret Hukuku",
    category: "Kurumsal",
    excerpt:
      "Şirket kuruluşundan pay devrine, ticari sözleşmelerden sınır ötesi işlere.",
    intro:
      "Ticari hayatta işler yolunda giderken sözleşmeye kimse bakmaz. Sözleşme, işler ters gittiğinde okunur. Bu yüzden metni kurarken en çok üzerinde durduğumuz şey, o gün ne yazdığıdır.",
    body: [
      "Şirket kuruluşu, pay devirleri, ortaklık yapısındaki değişiklikler, genel kurul ve yönetim kurulu süreçleri günlük işlerimizin bir bölümünü oluşturuyor. Diğer bölümü ticari sözleşmeler: hazırlanması, karşı tarafla müzakeresi ve imzadan sonra doğan uyuşmazlıkların takibi.",
      "İş sınırı aştığında birkaç soru öne çıkıyor: hangi ülkenin hukuku uygulanacak, uyuşmazlık nerede çözülecek, ödeme ve teslim nasıl güvenceye alınacak. Bunları sözleşme aşamasında netleştirmek, sonradan yürütülecek bir davadan çok daha ucuza gelir. Yurt içinde ve yurt dışında iş yapan müvekkillerimize bu konularda Türkçe ve İngilizce danışmanlık veriyoruz.",
    ],
    services: [
      "Şirketler Hukuku",
      "Ticari sözleşmelerin hazırlanması ve müzakeresi",
      "Uluslararası ticaret ve sözleşmeler hukuku",
      "Ticari uyuşmazlıkların takibi",
      "Tanıma ve tenfiz",
      "Rekabet Hukuku",
    ],
  },
  {
    number: "02",
    slug: "kira-ve-gayrimenkul-hukuku",
    title: "Kira ve Gayrimenkul Hukuku",
    category: "Kurumsal",
    excerpt:
      "Kira sözleşmeleri, tahliye, tapu uyuşmazlıkları ve taşınmaz devirleri.",
    intro:
      "Gayrimenkul, insanın en uzun süre elinde tuttuğu şeylerden biri. Bir kira sözleşmesi on yıl, bir tapu kaydı ömür boyu sizinle kalabilir. Bu yüzden başlangıçtaki küçük bir eksik, yıllar sonra büyük bir sorun olarak geri döner.",
    body: [
      "Kira tarafında en sık karşılaştığımız işler sözleşmenin hazırlanması, kira bedelinin güncel koşullara uyarlanması, tahliye ve birikmiş kira alacaklarının tahsili. Ticari kiralarda tarafların yükümlülüklerini ayrıntılı yazmak ayrıca önemli; çünkü orada tartışma çoğu zaman kira bedelinden değil, tadilattan, aidattan veya devirden çıkıyor.",
      "Mülkiyet tarafında ise tapu kayıtlarının satın almadan önce incelenmesi, satış ve devir işlemleri, paylı mülkiyette ortaklığın giderilmesi ile tapu iptali ve tescil talepleri üzerinde çalışıyoruz.",
    ],
    services: [
      "Kira sözleşmelerinin hazırlanması",
      "Tahliye ve kira alacağı takibi",
      "Tapu iptali ve tescil davaları",
      "Taşınmaz satış ve devir işlemleri",
      "Ortaklığın giderilmesi",
    ],
  },
  {
    number: "03",
    slug: "icra-ve-iflas-hukuku",
    title: "İcra ve İflas Hukuku",
    category: "Kurumsal",
    excerpt: "Alacağın tahsili, icra takibi, haciz ve iflas süreçleri.",
    intro:
      "Bu alanda en pahalı hata genellikle gecikmedir. Süreler kısa, itiraz pencereleri dar; takibin yanlış türde açılması ya da bir sürenin kaçırılması, sağlam bir alacağı tahsil edilemez hâle getirebilir.",
    body: [
      "İlamlı ve ilamsız icra takipleri, itirazın iptali ve kaldırılması davaları, haciz ve satış işlemleri ile üçüncü kişilerin mallara ilişkin istihkak iddiaları bu alandaki günlük işlerimiz.",
      "Borçlunun mali durumu ağırlaştığında iflas ve konkordato gündeme geliyor. Burada alacaklı ile borçlunun izleyeceği yol taban tabana zıt olduğu için, hangi tarafta olduğunuza göre baştan farklı bir strateji kuruyoruz.",
    ],
    services: [
      "İlamlı ve ilamsız icra takibi",
      "İtirazın iptali ve itirazın kaldırılması",
      "Haciz ve satış işlemleri",
      "İstihkak davaları",
      "İflas ve konkordato süreçleri",
    ],
  },
  {
    number: "04",
    slug: "is-ve-sosyal-guvenlik-hukuku",
    title: "İş ve Sosyal Güvenlik Hukuku",
    category: "Kurumsal",
    excerpt:
      "İşe alımdan fesihe, işçilik alacaklarından iş kazası dosyalarına.",
    intro:
      "İş hukukunda sonucu belirleyen şey çoğu zaman haklılık değil, usuldür. Yerinde bir fesih bile, tebligatı ya da savunma alma adımı atlandığı için geçersiz sayılabilir.",
    body: [
      "İşveren tarafında iş sözleşmelerinin ve işyeri iç düzenlemelerinin hazırlanması, fesih süreçlerinin adım adım yürütülmesi üzerinde çalışıyoruz. Uyuşmazlık doğduğunda ise kıdem ve ihbar tazminatı, fazla mesai, yıllık izin ve diğer işçilik alacaklarına ilişkin talepler gündeme geliyor.",
      "İşe iade davaları, iş kazası ve meslek hastalığından doğan talepler ile sosyal güvenlik mevzuatına ilişkin uyuşmazlıklar da bu kapsamda. İş davalarının önemli bir bölümünde mahkemeye gitmeden önce arabuluculuğa başvurmak zorunlu; o aşamayı da baştan hesaba katıyoruz.",
    ],
    services: [
      "İş sözleşmeleri ve işyeri düzenlemeleri",
      "Fesih süreçlerinin yönetimi",
      "İşçilik alacakları ve tazminat talepleri",
      "İşe iade davaları",
      "İş kazası ve meslek hastalığı uyuşmazlıkları",
      "Sosyal güvenlik uyuşmazlıkları",
    ],
  },
  {
    number: "05",
    slug: "fikri-ve-sinai-haklar-hukuku",
    title: "Fikri ve Sınai Haklar Hukuku",
    shortTitle: "Fikri ve Sınai Haklar",
    category: "Kurumsal",
    excerpt: "Marka ve patent tescili, itirazlar, lisans ve tecavüz dosyaları.",
    intro:
      "Bir markanın değeri yıllar içinde birikir, ama korumasının sınırı tescil gününde çizilir. Yanlış sınıfta yapılmış bir başvuru, markanız tanınır hâle geldiğinde işe yaramaz.",
    body: [
      "Marka ve patent başvurularının hazırlanması, sınıf seçimi, yayına itiraz ve itirazların incelenmesi süreçlerini yürütüyoruz. Büromuzdan Av. Alper Arslan, 2005 yılında Türk Standartları Enstitüsü nezdinde Marka ve Patent vekilliğine hak kazandı.",
      "Tescilli bir hakka tecavüz edildiğinde tecavüzün tespiti, durdurulması ve önlenmesi ile buradan doğan tazminat talepleri devreye giriyor. Hakkı ticari olarak kullandırmak istediğinizde ise iş lisans ve devir sözleşmelerine dönüyor.",
    ],
    services: [
      "Marka ve patent başvuruları",
      "Yayına itiraz ve itiraz incelemesi",
      "Marka ve patent devri, lisans sözleşmeleri",
      "Hakka tecavüzün tespiti ve önlenmesi",
      "Bilişim Hukuku",
    ],
  },
  {
    number: "06",
    slug: "medeni-hukuk",
    title: "Medeni Hukuk",
    category: "Bireysel",
    excerpt: "Boşanma, velayet, nafaka, mal rejimi, vesayet ve miras.",
    intro:
      "Bu dosyalarda karşı taraf çoğu zaman bir yabancı değil. Bu yüzden sürecin nasıl yürütüldüğü, çıkan sonuç kadar önem taşıyor; gereksiz sertleşen bir dosya, kazanılsa bile geride kalıcı bir hasar bırakabiliyor.",
    body: [
      "Anlaşmalı ve çekişmeli boşanma, velayet ve çocukla kişisel ilişki kurulması, nafaka ve evlilik boyunca edinilen malların paylaşımı bu alanın başlıca konuları. Taraflardan biri yurt dışındaysa ya da yabancı bir mahkeme kararı varsa, tanıma ve tenfiz süreci de işin içine giriyor.",
      "Miras tarafında mirasçılık belgesi, terekenin tespiti, mirasın paylaşımı, saklı payın korunması için tenkis ve muris muvazaası talepleri ile vasiyetname ve miras sözleşmelerinden doğan uyuşmazlıklar üzerinde çalışıyoruz. Vesayet ve kayyımlık işlemleri de bu alanın içinde.",
    ],
    services: [
      "Boşanma ve mal rejiminin tasfiyesi",
      "Velayet, nafaka ve kişisel ilişki",
      "Vesayet ve kayyımlık",
      "Miras paylaşımı, tenkis ve tereke işlemleri",
      "Yabancı mahkeme kararlarının tanınması ve tenfizi",
    ],
  },
  {
    number: "07",
    slug: "idare-ve-vergi-hukuku",
    title: "İdare ve Vergi Hukuku",
    category: "Kurumsal",
    excerpt:
      "İdari işlemlere itiraz, iptal davaları ve vergi uyuşmazlıkları.",
    intro:
      "Devletten gelen bir yazıda en kritik bilgi çoğu zaman metnin kendisi değil, tebliğ tarihidir. Süreler kısa ve kaçırıldığında geri dönüşü yok; bu yüzden ilk günden doğru yolu seçmek gerekiyor.",
    body: [
      "İdari işlemin iptali, idarenin verdiği zararın tazmini için tam yargı davaları, idari para cezalarına itiraz ve kamu ihalelerine ilişkin başvurular bu alandaki işlerimiz arasında.",
      "Vergi tarafında tarhiyat ve cezalara karşı uzlaşma, düzeltme ve dava yolları var; hangisinin seçileceği çoğu zaman tutara ve incelemenin gidişatına bağlı. Vergi incelemesi sürecinin baştan doğru yönetilmesi, sonradan açılacak davanın zeminini de belirliyor. Büronun kurucusu Av. Seyit Arslan bu alanda danışmanlık veriyor.",
    ],
    services: [
      "İptal ve tam yargı davaları",
      "İdari para cezalarına itiraz",
      "Vergi tarhiyatı ve cezalarına karşı başvurular",
      "Vergi incelemesi ve uzlaşma süreçleri",
      "Kamu ihale mevzuatına ilişkin başvurular",
    ],
  },
  {
    number: "08",
    slug: "bankacilik-ve-finans-hukuku",
    title: "Bankacılık ve Finans Hukuku",
    category: "Kurumsal",
    excerpt: "Kredi sözleşmeleri, ipotek ve rehin, kefalet ve sigorta işleri.",
    intro:
      "Kredi ilişkisinde asıl pazarlık faiz oranında değil, teminatta biter. Teminatın türü ve paraya nasıl çevrileceği, işler kötüye gittiğinde tarafların nerede duracağını baştan belirler.",
    body: [
      "Kredi sözleşmelerinin imzadan önce incelenmesi, ipotek ve rehin başta olmak üzere teminatların kurulması ve kefaletten doğan uyuşmazlıklar üzerinde çalışıyoruz. Kefalet, özellikle şirket ortaklarının kişisel sorumluluğu bakımından sonradan en çok tartışılan konulardan biri.",
      "Bankacılık işlemlerinden doğan alacak ve tazminat talepleri, tüketici kredilerine ilişkin uyuşmazlıklar ve sigorta hukukundan doğan talepler de bu kapsamda değerlendiriliyor.",
    ],
    services: [
      "Kredi sözleşmeleri ve teminat yapıları",
      "İpotek ve rehin işlemleri",
      "Kefaletten doğan uyuşmazlıklar",
      "Tüketici Hukuku kapsamındaki uyuşmazlıklar",
      "Sigorta Hukuku",
    ],
  },
];

export const practiceAreaSlugs = practiceAreas.map((a) => a.slug);

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((a) => a.slug === slug);
}

/** Listedeki bir sonraki alan; son eleman için başa döner. */
export function getNextPracticeArea(slug: string): PracticeArea {
  const i = practiceAreas.findIndex((a) => a.slug === slug);
  return practiceAreas[(i + 1) % practiceAreas.length];
}
