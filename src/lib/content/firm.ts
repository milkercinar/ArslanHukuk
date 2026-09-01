/**
 * Kurumsal metinler.
 *
 * Kaynak: arslanhukuk.com.tr üzerindeki mevcut "Hakkımızda" ve ana sayfa
 * metinleri. Kuruluş yılı, kurucu ve faaliyet tanımları birebir korunmuştur.
 * Deneyim yılı, ödül, müvekkil sayısı, başarı oranı gibi doğrulanamayan
 * hiçbir iddia eklenmemiştir.
 */

export const hero = {
  eyebrow: "Arslan Hukuk Bürosu",
  /** Büronun mevcut sitesinde yer alan kurumsal sloganı. */
  headlineLines: [
    "Adalet önünde",
    "herkes eşittir.",
    "Farkı yaratan,",
    "iyi avukattır.",
  ],
  support:
    "1982 yılından bu yana İstanbul'da; yurt içinde ve yurt dışında faaliyet gösteren kişi ve kurumlara hukukun çeşitli alanlarında danışmanlık ve avukatlık hizmeti sunuyoruz.",
  primaryCta: { label: "Uzmanlık alanlarımız", href: "/uzmanlik-alanlari" },
  secondaryCta: { label: "Bize ulaşın", href: "/iletisim" },
} as const;

export const intro = {
  label: "Arslan Hukuk Bürosu",
  statementLines: [
    "Hukuki meseleler",
    "nadiren tek boyutludur.",
  ],
  paragraphs: [
    "1982 yılında Av. Seyit Arslan tarafından kurulan Arslan Hukuk Bürosu, kurulduğu günden beri sürekli gelişme göstermiş ve göstermeye devam etmektedir.",
    "Her biri konusunda uzman ve tecrübeli hukukçu kadromuzla, yurt içinde ve yurt dışında faaliyet gösteren birçok kişi ve kuruma Türkçe ve İngilizce hukuki danışmanlık ve avukatlık hizmeti sunuyoruz.",
  ],
  link: { label: "Hakkımızda", href: "/hakkimizda" },
} as const;

export const about = {
  title: "Hakkımızda",
  headlineLines: ["1982 yılından beri", "adaletin yanında."],
  paragraphs: [
    "1982 yılında Av. Seyit Arslan tarafından kurulan Arslan Hukuk Bürosu, kurulduğu günden beri sürekli gelişme göstermiş ve göstermeye devam etmektedir.",
    "Her biri konusunda uzman ve tecrübeli hukukçu kadrosu ile yurt içinde ve yurt dışında faaliyet gösteren birçok kişi ve kuruma, hukukun çeşitli alanlarında Türkçe ve İngilizce hukuki danışmanlık ve avukatlık hizmeti sunmaktadır.",
    "Büromuzun faaliyet alanları arasında Şirketler Hukuku, Uluslararası Ticaret Hukuku, İcra ve İflas Hukuku, Kira ve Gayrimenkul Hukuku, Bankacılık ve Finans Hukuku, İş Hukuku, Fikri ve Sınai Haklar Hukuku, İdare ve Vergi Hukuku, Medeni Hukuk (boşanma, miras, velayet, vesayet vb.), Tüketici Hukuku ve Rekabet Hukuku bulunmaktadır. Büromuzdaki her bir avukatımız hukukun farklı bir alanında uzman olup yoğun tecrübe sahibidir.",
    "Hukuk büromuz İstanbul merkezli olsa da, ülkenin birçok şehrindeki hukuk büroları ile bağlantıları bulunmakta, bu sayede çok geniş kapsamlı hizmet sunmaktadır.",
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
    body: "Büromuzdaki her bir avukat, hukukun farklı bir alanında uzmanlaşmıştır. Dosyalar bu uzmanlığa göre yürütülür.",
  },
  {
    number: "02",
    title: "Süreklilik",
    body: "1982 yılında kurulan büromuz, kurulduğu günden bu yana kesintisiz olarak gelişerek çalışmalarını sürdürmektedir.",
  },
  {
    number: "03",
    title: "İki dilde danışmanlık",
    body: "Hukuki danışmanlık ve avukatlık hizmetlerimiz Türkçe ve İngilizce olarak yürütülmektedir.",
  },
  {
    number: "04",
    title: "Yurt içi ve yurt dışı",
    body: "Yurt içinde ve yurt dışında faaliyet gösteren kişi ve kurumlara hizmet veriyoruz.",
  },
  {
    number: "05",
    title: "Ülke geneli erişim",
    body: "İstanbul merkezli büromuzun ülkenin birçok şehrindeki hukuk büroları ile bağlantıları bulunmaktadır.",
  },
] as const;

export const contactCta = {
  headlineLines: ["Hukuki meselenizi", "birlikte değerlendirelim."],
  body: "Dosyanızı ve beklentilerinizi dinleyelim, izlenebilecek yolları birlikte ele alalım.",
  cta: { label: "İletişime geçin", href: "/iletisim" },
} as const;
