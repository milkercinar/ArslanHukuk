/**
 * Uzmanlık alanları.
 *
 * Başlıklar arslanhukuk.com.tr ana sayfasında listelenen faaliyet
 * alanlarından birebir alınmıştır. Alt hizmetler yalnızca büronun mevcut
 * "Hakkımızda" ve avukat özgeçmişi metinlerinde geçen konulardan
 * oluşturulmuştur. Alanların tanımları, hukuk dalının kapsamını anlatan
 * genel ve tarafsız açıklamalardır; sonuç, başarı veya tecrübe iddiası
 * içermez.
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
      "Şirketler hukuku, ticari sözleşmeler ve sınır ötesi ticari ilişkilerin kurulması ile yönetimi.",
    intro:
      "Ticaret hukuku, ticari işletmelerin kuruluşundan günlük ticari ilişkilerine kadar geniş bir alanı kapsar. Uluslararası boyut kazanan işlemlerde ise uygulanacak hukukun ve uyuşmazlık çözüm yolunun baştan doğru kurgulanması belirleyici olur.",
    body: [
      "Şirketlerin kuruluşu, pay devirleri, ortaklık yapısındaki değişiklikler, genel kurul ve yönetim kurulu süreçleri ile ticari sözleşmelerin hazırlanması bu alanın merkezinde yer alır. Sözleşmenin kurulma aşamasında yapılan düzenlemeler, uyuşmazlık doğduğunda tarafların elindeki en güçlü araçtır.",
      "Sınır ötesi ticari ilişkilerde uygulanacak hukuk, yetkili mahkeme veya tahkim şartı ile ödeme ve teslim koşulları ayrı bir dikkat gerektirir. Büromuz, yurt içinde ve yurt dışında faaliyet gösteren kişi ve kurumlara bu alanda Türkçe ve İngilizce danışmanlık vermektedir.",
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
      "Taşınmaz mülkiyeti, kira ilişkileri ve tapuya bağlı uyuşmazlıkların yönetimi.",
    intro:
      "Gayrimenkul, hem yatırım hem de günlük kullanım açısından uzun vadeli ilişkiler doğurur. Bu ilişkilerin sözleşme ve tapu düzeyinde doğru kurulması, sonraki yıllarda ortaya çıkabilecek uyuşmazlıkların kapsamını doğrudan belirler.",
    body: [
      "Kira ilişkilerinde sözleşmenin hazırlanması, kira bedelinin uyarlanması, tahliye ve alacak takibi süreçleri sık karşılaşılan konulardır. Ticari kiralarda tarafların yükümlülüklerinin ayrıntılı düzenlenmesi ayrıca önem taşır.",
      "Taşınmaz mülkiyetine ilişkin olarak tapu kayıtlarının incelenmesi, satış ve devir işlemleri, ortaklığın giderilmesi ile tapu iptali ve tescil talepleri bu alan kapsamında ele alınır.",
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
    excerpt:
      "Alacağın tahsili, icra takibi ve borçlunun mali durumuna bağlı süreçlerin yürütülmesi.",
    intro:
      "İcra ve iflas hukuku, alacağın hukuki yoldan tahsilini düzenler. Süreç büyük ölçüde sıkı sürelere bağlıdır; bu nedenle takibin doğru türde başlatılması ve süresinde ilerletilmesi belirleyicidir.",
    body: [
      "İlamlı ve ilamsız icra takipleri, itirazın iptali ve kaldırılması davaları, haciz ve satış işlemleri ile istihkak uyuşmazlıkları bu alanın günlük konularıdır.",
      "Borçlunun mali durumunun ağırlaştığı hâllerde iflas, konkordato ve buna bağlı süreçler gündeme gelir. Alacaklı ve borçlu taraf açısından izlenecek yol, her dosyanın kendi koşullarına göre değerlendirilir.",
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
      "İş ilişkisinin kurulması, yürütülmesi ve sona ermesine bağlı hak ve yükümlülükler.",
    intro:
      "İş hukuku, işveren ve çalışan arasındaki ilişkiyi hem sözleşme hem de kamu düzeni boyutuyla düzenler. Fesih sürecindeki usul kurallarına uyum, uyuşmazlığın sonucunu belirleyen unsurların başında gelir.",
    body: [
      "İş sözleşmelerinin hazırlanması, işyeri iç düzenlemeleri, fesih süreçlerinin yönetimi ile kıdem ve ihbar tazminatı, fazla mesai ve yıllık izin alacaklarına ilişkin talepler bu alanda ele alınır.",
      "İşe iade, iş kazası ve meslek hastalığından doğan talepler ile sosyal güvenlik mevzuatına ilişkin uyuşmazlıklar da bu kapsamdadır. Dava öncesi arabuluculuk süreci, iş uyuşmazlıklarının önemli bir bölümünde zorunlu bir aşamadır.",
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
    excerpt:
      "Marka ve patent başta olmak üzere fikri ürünler üzerindeki hakların tesisi ve korunması.",
    intro:
      "Marka, patent, tasarım ve telif hakları; bir ticari işletmenin en kalıcı değerleri arasındadır. Bu hakların tescil aşamasında doğru kurgulanması, sonraki ihlallere karşı korumanın kapsamını belirler.",
    body: [
      "Marka ve patent başvurularının hazırlanması, sınıf seçimi, yayına itiraz ve itirazın incelenmesi süreçleri bu alanın başlangıcını oluşturur. Büromuz avukatlarından Av. Alper Arslan, 2005 yılında Türk Standartları Enstitüsü nezdinde Marka ve Patent vekilliğine hak kazanmıştır.",
      "Tescilli hakların ihlali hâlinde tecavüzün tespiti, durdurulması ve önlenmesi ile bundan doğan tazminat talepleri gündeme gelir. Lisans ve devir sözleşmeleri ise hakkın ticari olarak kullanılmasını düzenler.",
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
    excerpt:
      "Boşanma, velayet, vesayet ve miras başta olmak üzere kişi ve aile ilişkileri.",
    intro:
      "Medeni hukuk, kişinin aile ve mirasa ilişkin en yakın ilişkilerini düzenler. Bu dosyalarda hukuki sonuç kadar, sürecin nasıl yürütüldüğü de taraflar açısından belirleyicidir.",
    body: [
      "Anlaşmalı ve çekişmeli boşanma, velayet ve kişisel ilişki kurulması, nafaka ve mal rejiminin tasfiyesi bu alanın başlıca konularıdır. Yabancılık unsuru taşıyan dosyalarda tanıma ve tenfiz süreci ayrıca gündeme gelir.",
      "Miras hukuku kapsamında mirasçılık belgesi, tereke tespiti, mirasın paylaşımı, tenkis ve muris muvazaası talepleri ile vasiyetname ve miras sözleşmelerine ilişkin uyuşmazlıklar ele alınır. Vesayet ve kayyımlık işlemleri de bu alan içindedir.",
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
      "İdari işlemlere karşı başvuru yolları ile vergi uyuşmazlıklarının yönetimi.",
    intro:
      "İdare ve vergi hukukunda süreler kısa ve çoğu zaman hak düşürücüdür. Bu nedenle işlemin tebliğinden itibaren izlenecek yolun ilk aşamada belirlenmesi gerekir.",
    body: [
      "İdari işlemin iptali ve idarenin sorumluluğundan doğan tam yargı davaları, idari para cezalarına itiraz ile kamu ihalelerine ilişkin başvurular bu alanın kapsamındadır.",
      "Vergi tarhiyatları ve cezalarına karşı uzlaşma, düzeltme ve dava yolları ile vergi incelemesi süreçlerinin yönetimi ayrı bir uzmanlık gerektirir. Büronun kurucusu Av. Seyit Arslan bu alanda danışmanlık vermektedir.",
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
    excerpt:
      "Kredi ilişkileri, teminat yapıları ve finansal uyuşmazlıkların değerlendirilmesi.",
    intro:
      "Finansman ilişkilerinde kredi sözleşmesi ile teminat yapısı bir bütün olarak kurgulanır. Teminatın türü ve paraya çevrilme usulü, uyuşmazlık hâlinde tarafların konumunu doğrudan etkiler.",
    body: [
      "Kredi sözleşmelerinin incelenmesi, ipotek ve rehin başta olmak üzere teminatların tesisi ile kefalet ilişkilerinden doğan uyuşmazlıklar bu alanda ele alınır.",
      "Bankacılık işlemlerinden doğan alacak ve tazminat talepleri, tüketici kredilerine ilişkin uyuşmazlıklar ile sigorta hukukundan doğan talepler de bu kapsamda değerlendirilir.",
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
