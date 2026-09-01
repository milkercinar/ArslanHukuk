/**
 * Kurumsal metinler.
 *
 * Kaynak: arslanhukuk.com.tr üzerindeki mevcut "Hakkımızda" ve ana sayfa
 * metinleri. Kuruluş yılı, kurucu ve faaliyet tanımları korunmuştur.
 * Deneyim yılı, ödül, müvekkil sayısı, başarı oranı gibi doğrulanamayan
 * hiçbir iddia eklenmemiştir.
 */

export const hero = {
  /** Büronun mevcut sitesinde yer alan kurumsal sloganı. */
  headlineLines: [
    "Adalet önünde",
    "herkes eşittir.",
    "Farkı yaratan,",
    "iyi avukattır.",
  ],
  support:
    "1982'den bu yana İstanbul'dayız. Yurt içinde ve yurt dışında iş yapan kişi ve şirketlere danışmanlık veriyor, dava ve takiplerini yürütüyoruz.",
  primaryCta: { label: "Uzmanlık alanlarımız", href: "/uzmanlik-alanlari" },
  secondaryCta: { label: "Bize ulaşın", href: "/iletisim" },
} as const;

export const intro = {
  label: "Arslan Hukuk Bürosu",
  statementLines: [
    "Hukuki bir sorun,",
    "hiçbir zaman yalnızca",
    "hukuki değildir.",
  ],
  paragraphs: [
    "Arkasında çoğu zaman bir şirketin işleyişi, bir ailenin düzeni ya da yılların birikimi vardır. Bu yüzden bir dosyayı devralmadan önce, sizin için asıl neyin önemli olduğunu anlamaya çalışırız.",
    "Büromuzu 1982'de Av. Seyit Arslan kurdu. O günden bu yana kadromuz büyüdü, çalıştığımız alanlar çeşitlendi. Çalışma biçimimiz aynı kaldı.",
  ],
  link: { label: "Hakkımızda", href: "/hakkimizda" },
} as const;

export const about = {
  title: "Hakkımızda",
  headlineLines: ["1982 yılından beri", "adaletin yanında."],
  paragraphs: [
    "Büromuz 1982 yılında Av. Seyit Arslan tarafından kuruldu. O günden bu yana çalışmalarını kesintisiz sürdürüyor.",
    "Bugün, her biri kendi alanında uzmanlaşmış avukatlardan oluşan bir kadroyuz. Yurt içinde ve yurt dışında faaliyet gösteren kişi ve kurumlara Türkçe ve İngilizce hizmet veriyoruz.",
    "Şirketler ve uluslararası ticaret hukukundan icra ve iflasa, kira ve gayrimenkulden bankacılık ve finansa, iş hukukundan fikri ve sınai haklara, idare ve vergiden medeni hukuka kadar geniş bir alanda çalışıyoruz. Tüketici ve rekabet hukuku da faaliyet alanlarımız arasında yer alıyor. Her avukatımız bu alanlardan birinde derinleşmiştir; dosyalar da buna göre paylaşılır.",
    "Merkezimiz İstanbul. Ancak ülkenin birçok şehrindeki hukuk bürolarıyla kurduğumuz bağlantılar sayesinde, dosyalarınızı İstanbul dışında da takip edebiliyoruz.",
  ],
} as const;

/**
 * Yaklaşımımız — her madde büronun mevcut kurumsal metninde açıkça
 * belirtilen bir niteliğe dayanır.
 */
export const values = [
  {
    number: "01",
    title: "Alanında uzmanlaşma",
    body: "Her avukatımız hukukun belirli bir alanında derinleşti. Dosyanız o alanda çalışan kişiye gider; herkes her işe bakmaz.",
  },
  {
    number: "02",
    title: "Süreklilik",
    body: "1982'den bu yana aynı büroyuz. Bugün açtığınız bir dosyayı, yıllar sonra da aynı yerde arayabilirsiniz.",
  },
  {
    number: "03",
    title: "İki dilde çalışma",
    body: "Danışmanlığı ve yazışmaları Türkçe ve İngilizce yürütüyoruz. Yurt dışındaki müvekkillerimizle aramıza çevirmen girmiyor.",
  },
  {
    number: "04",
    title: "Sınır ötesi dosyalar",
    body: "Yurt dışında iş yapan şirketlerin ve yurt dışında yaşayan kişilerin işleri, büromuzun alıştığı konular arasında.",
  },
  {
    number: "05",
    title: "İstanbul dışı",
    body: "Başka şehirlerdeki işler için orada çalıştığımız bürolarla ilerliyoruz. Kendinize ayrıca avukat aramanız gerekmiyor.",
  },
] as const;

export const contactCta = {
  headlineLines: ["Anlatın,", "birlikte bakalım."],
  body: "Dosyanızın hangi aşamada olduğunu ve sizin için neyin önemli olduğunu dinleyelim. Sonrasında önünüzdeki yolları açıkça anlatalım.",
  cta: { label: "İletişime geçin", href: "/iletisim" },
} as const;
