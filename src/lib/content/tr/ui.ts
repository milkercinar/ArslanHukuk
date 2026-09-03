/**
 * Türkçe metinler.
 *
 * Kurumsal metinlerin kaynağı arslanhukuk.com.tr üzerindeki mevcut ana sayfa
 * ve "Hakkımızda" içerikleridir. Kuruluş yılı, kurucu ve faaliyet tanımları
 * korunmuştur. Deneyim yılı, ödül, müvekkil sayısı, başarı oranı gibi
 * doğrulanamayan hiçbir iddia eklenmemiştir.
 */

import type { Dictionary } from "@/lib/i18n/dictionary";
import { contact, firm } from "../site";

export const dictionaryTr: Dictionary = {
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    practiceAreas: "Uzmanlık Alanları",
    team: "Ekibimiz",
    contact: "İletişim",
  },

  legalNav: {
    dataProtection: "KVKK Aydınlatma Metni",
    privacy: "Gizlilik",
    cookies: "Çerez Politikası",
  },

  common: {
    firmName: firm.name,
    skipToContent: "İçeriğe geç",
    mainMenuLabel: "Ana menü",
    mobileMenuLabel: "Mobil menü",
    footerMenuLabel: "Alt menü",
    menuOpen: "Menü",
    menuClose: "Kapat",
    scrollHint: "Kaydırın",
    breadcrumbLabel: "Konum",
    heroRegionLabel: "Giriş",
    homeLinkLabel: (firmName) => `${firmName} — ana sayfa`,
    portraitAlt: (name) => `${name} portresi`,
    profile: "Profil",
    allTeam: "Tüm ekip",
    allPracticeAreas: "Tüm uzmanlık alanları",
    languageLabel: "Dil",
  },

  footer: {
    menuHeading: "Menü",
    contactHeading: "İletişim",
    tagline: `${firm.foundedYear}’den bu yana İstanbul’da avukatlık ve hukuki danışmanlık yapıyoruz.`,
    fax: "Faks",
    rights: "Tüm hakları saklıdır.",
  },

  home: {
    heroHeadlineLines: [
      "Adalet önünde herkes eşittir.",
      "Farkı yaratan, iyi avukattır.",
    ],
    heroSupport:
      "1982'den bu yana İstanbul'dayız. Yurt içinde ve yurt dışında iş yapan kişi ve şirketlere danışmanlık veriyor, dava ve takiplerini yürütüyoruz.",
    heroPrimaryCta: "Uzmanlık alanlarımız",
    heroSecondaryCta: "Bize ulaşın",

    introLabel: firm.name,
    introStatementLines: [
      "Hukuki bir sorun,",
      "hiçbir zaman yalnızca",
      "hukuki değildir.",
    ],
    introParagraphs: [
      "Arkasında çoğu zaman bir şirketin işleyişi, bir ailenin düzeni ya da yılların birikimi vardır. Bu yüzden bir dosyayı devralmadan önce, sizin için asıl neyin önemli olduğunu anlamaya çalışırız.",
      "Büromuzu 1982'de Av. Seyit Arslan kurdu. O günden bu yana kadromuz büyüdü, çalıştığımız alanlar çeşitlendi. Çalışma biçimimiz aynı kaldı.",
    ],
    introLink: "Hakkımızda",

    practiceHeading: "Uzmanlık alanlarımız.",

    statementLabel: "Büromuz",
    statementLines: [
      "İstanbul'da kurulduk.",
      "İşimiz sınırların ötesine uzanıyor.",
    ],
    statementBody:
      "Yurt içinde ve yurt dışında faaliyet gösteren kişi ve kurumlara Türkçe ve İngilizce hizmet veriyoruz.",

    valuesLabel: "Yaklaşımımız",
    valuesHeadingLines: ["Çalışma biçimimizi", "belirleyen ilkeler."],
    values: [
      {
        title: "Alanında uzmanlaşma",
        body: "Her avukatımız hukukun belirli bir alanında derinleşti. Dosyanız o alanda çalışan kişiye gider; herkes her işe bakmaz.",
      },
      {
        title: "Süreklilik",
        body: "1982'den bu yana aynı büroyuz. Bugün açtığınız bir dosyayı, yıllar sonra da aynı yerde arayabilirsiniz.",
      },
      {
        title: "İki dilde çalışma",
        body: "Danışmanlığı ve yazışmaları Türkçe ve İngilizce yürütüyoruz. Yurt dışındaki müvekkillerimizle aramıza çevirmen girmiyor.",
      },
      {
        title: "Sınır ötesi dosyalar",
        body: "Yurt dışında iş yapan şirketlerin ve yurt dışında yaşayan kişilerin işleri, büromuzun alıştığı konular arasında.",
      },
      {
        title: "İstanbul dışı",
        body: "Başka şehirlerdeki işler için orada çalıştığımız bürolarla ilerliyoruz. Kendinize ayrıca avukat aramanız gerekmiyor.",
      },
    ],

    teamEyebrow: "Ekibimiz",
    teamHeading: "Dosyanızla kimin ilgilendiğini baştan bilirsiniz.",

    contactLabel: "İletişim",
    contactHeadlineLines: ["Anlatın,", "birlikte bakalım."],
    contactBody:
      "Dosyanızın hangi aşamada olduğunu ve sizin için neyin önemli olduğunu dinleyelim. Sonrasında önünüzdeki yolları açıkça anlatalım.",
    contactCta: "İletişime geçin",
  },

  about: {
    eyebrow: "Hakkımızda",
    headlineLines: ["1982 yılından beri", "adaletin yanında."],
    officeLabel: "Büro",
    paragraphs: [
      "Büromuz 1982 yılında Av. Seyit Arslan tarafından kuruldu. O günden bu yana çalışmalarını kesintisiz sürdürüyor.",
      "Bugün, her biri kendi alanında uzmanlaşmış avukatlardan oluşan bir kadroyuz. Yurt içinde ve yurt dışında faaliyet gösteren kişi ve kurumlara Türkçe ve İngilizce hizmet veriyoruz.",
      "Şirketler ve uluslararası ticaret hukukundan icra ve iflasa, kira ve gayrimenkulden bankacılık ve finansa, iş hukukundan fikri ve sınai haklara, idare ve vergiden medeni hukuka kadar geniş bir alanda çalışıyoruz. Tüketici ve rekabet hukuku da faaliyet alanlarımız arasında yer alıyor. Her avukatımız bu alanlardan birinde derinleşmiştir; dosyalar da buna göre paylaşılır.",
      "Merkezimiz İstanbul. Ancak ülkenin birçok şehrindeki hukuk bürolarıyla kurduğumuz bağlantılar sayesinde, dosyalarınızı İstanbul dışında da takip edebiliyoruz.",
    ],
    pillars: ["Uzmanlık.", "Süreklilik.", "Erişim."],
    valuesLabel: "Yaklaşımımız",
  },

  practiceAreas: {
    eyebrow: "Uzmanlık Alanları",
    titleLines: ["Farklı alanlar,", "aynı çalışma", "disiplini."],
    lead: "Aşağıdaki başlıklar, kurumsal ve bireysel müvekkillerimize danışmanlık verdiğimiz ve dava takibi yaptığımız alanlar. Her birinde o konuda çalışan bir avukatımız var.",
    disclaimer:
      "Buradaki açıklamalar genel bilgi vermek içindir, hukuki görüş yerine geçmez. Her dosya kendi koşulları içinde değerlendirilir.",
    servicesLabel: "İlgili hizmetler",
    lawyersLabel: "Bu alanda çalışanlar",
    detailDisclaimer:
      "Bu sayfadaki bilgiler geneldir, hukuki görüş yerine geçmez. Elinizde somut bir dosya varsa bize yazın, konuşalım.",
    nextLabel: "Sonraki alan",
  },

  team: {
    eyebrow: "Ekibimiz",
    titleLines: ["Dosyanızla kimin", "ilgilendiğini", "bilirsiniz."],
    lead: "Büromuzda her avukat hukukun farklı bir alanında çalışır; dosyanız da o alanda çalışan kişiye gider. Danışmanlığı ve dava takibini Türkçe ve İngilizce yürütüyoruz.",
    lawyersHeading: "Avukatlar",
    staffHeading: "Büro ekibi",
    factsLabel: "Künye",
    emailLabel: "E-posta",
    focusLabel: "Çalışma konuları",
    relatedLabel: "İlgili uzmanlık alanları",
    factLabels: {
      barRegistration: "Baro sicil no",
      admitted: "Avukatlığa başlama",
      joined: "Büroya katılım",
      education: "Eğitim",
      credentials: "Unvan ve görevler",
      languages: "Yabancı dil",
      birthYear: "Doğum yılı",
    },
  },

  contact: {
    eyebrow: "İletişim",
    titleLines: ["Büromuza", "ulaşın."],
    lead: "Kısaca durumu anlatın, size dönelim. Doğrudan konuşmayı tercih ederseniz telefon numaralarımız aşağıda.",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    faxLabel: "Faks",
    emailLabel: "E-posta",
    barLabel: "Baro",
    barValue: "İstanbul Barosu",
    formLabel: "Mesaj gönderin",
    formHeading: "Bize yazın.",
    formIntro:
      "Ne olduğunu birkaç cümleyle anlatmanız yeterli. Gerisini konuşurken netleştiririz.",
  },

  form: {
    name: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon",
    subject: "Konu",
    message: "Mesaj",
    optional: "isteğe bağlı",
    errors: {
      name: "Lütfen ad ve soyadınızı yazınız.",
      email: "Geçerli bir e-posta adresi giriniz.",
      phone: "Telefon numarası eksik görünüyor.",
      subject: "Lütfen kısa bir konu başlığı yazınız.",
      message: "Mesajınızı biraz daha ayrıntılı yazabilir misiniz?",
      consent: "Devam edebilmek için onay kutusunu işaretlemeniz gerekir.",
    },
    consentBefore: "",
    consentLink: "KVKK Aydınlatma Metni",
    consentAfter:
      "’ni okudum ve kişisel verilerimin belirtilen kapsamda işlenmesini kabul ediyorum.",
    submit: "Mesajı gönder",
    submitting: "Gönderiliyor",
    deliveryError:
      "Mesaj gönderilemedi. Lütfen tekrar deneyin veya bize doğrudan e-posta gönderin.",
    sentLabel: "Teşekkür ederiz",
    sentHeading: "Mesajınızı aldık.",
    sentBody:
      "Okuyup size döneceğiz. Beklemeyecek bir konuysa büromuzu telefonla da arayabilirsiniz.",
    sentAgain: "Yeni bir mesaj yaz",
    disclaimer:
      "Bu formu doldurmanız avukat–müvekkil ilişkisi kurmaz; vekâlet ilişkisi ancak ayrıca imzalanacak bir sözleşmeyle doğar. Bu nedenle gizli bilgileri forma yazmamanızı öneririz. Süre sınırı olan bir konuysa beklemeden bizi arayın.",
  },

  legal: {
    dataProtection: {
      eyebrow: "KVKK",
      titleLines: [
        "Kişisel verilerin",
        "korunması hakkında",
        "aydınlatma metni.",
      ],
      lead: `Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında ${firm.name} tarafından hazırlanmıştır.`,
      sections: [
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
      ],
    },

    privacy: {
      eyebrow: "Gizlilik",
      titleLines: ["Gizlilik", "bildirimi."],
      lead: "Bu bildirim, web sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını ve nasıl kullanıldığını açıklar.",
      sections: [
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
      ],
    },

    cookies: {
      eyebrow: "Çerezler",
      titleLines: ["Çerez", "politikası."],
      lead: "Bu politika, web sitemizde çerezlerin nasıl kullanıldığını açıklar.",
      sections: [
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
      ],
    },
  },

  notFound: {
    heading: "Aradığınız sayfayı bulamadık.",
    body: "Adres değişmiş veya sayfa kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.",
  },

  meta: {
    siteDescription:
      "1982 yılında kurulan Arslan Hukuk Bürosu, İstanbul merkezli olarak ticaret, gayrimenkul, icra ve iflas, iş, fikri ve sınai haklar, medeni, idare ve vergi ile bankacılık hukuku alanlarında danışmanlık ve avukatlık hizmeti sunmaktadır.",
    siteDescriptionShort:
      "1982 yılından bu yana İstanbul'da hukuki danışmanlık ve avukatlık hizmeti.",
    home: {
      title: `${firm.name} | İstanbul`,
      description:
        "1982 yılında kurulan Arslan Hukuk Bürosu, İstanbul merkezli olarak ticaret, gayrimenkul, icra ve iflas, iş, fikri ve sınai haklar, medeni, idare ve vergi ile bankacılık hukuku alanlarında danışmanlık ve avukatlık hizmeti sunmaktadır.",
    },
    about: {
      title: "Hakkımızda",
      description:
        "1982 yılında Av. Seyit Arslan tarafından kurulan Arslan Hukuk Bürosu, İstanbul merkezli olarak yurt içinde ve yurt dışında faaliyet gösteren kişi ve kurumlara Türkçe ve İngilizce hukuki danışmanlık ve avukatlık hizmeti sunmaktadır.",
      ogDescription:
        "1982 yılında kurulan Arslan Hukuk Bürosu'nun kuruluşu, çalışma alanları ve yaklaşımı.",
    },
    practiceAreas: {
      title: "Uzmanlık Alanları",
      description:
        "Ticaret ve uluslararası ticaret, kira ve gayrimenkul, icra ve iflas, iş ve sosyal güvenlik, fikri ve sınai haklar, medeni, idare ve vergi ile bankacılık ve finans hukuku alanlarında hizmet veriyoruz.",
      ogDescription:
        "Arslan Hukuk Bürosu'nun danışmanlık ve dava takibi yaptığı hukuk alanları.",
    },
    team: {
      title: "Ekibimiz",
      description:
        "Arslan Hukuk Bürosu avukatları ve büro ekibi. Her bir avukatımız hukukun farklı bir alanında uzmanlaşmıştır.",
      ogDescription: "Arslan Hukuk Bürosu avukatları ve büro ekibi.",
    },
    contact: { title: "İletişim" },
    dataProtection: {
      title: "KVKK Aydınlatma Metni",
      description: `${firm.name} kişisel verilerin korunması hakkında aydınlatma metni.`,
    },
    privacy: {
      title: "Gizlilik",
      description: `${firm.name} web sitesi gizlilik bildirimi.`,
    },
    cookies: {
      title: "Çerez Politikası",
      description: `${firm.name} web sitesi çerez politikası.`,
    },
    notFound: { title: "Sayfa bulunamadı" },
  },
};
