import type { LegalSection } from "@/components/ui/LegalPage";
import type { ProfileFactLabels } from "@/lib/content/team";
import type { LegalRouteKey, RouteKey } from "./routes";

/**
 * Sitedeki tüm çevrilebilir metinlerin biçimi.
 *
 * Tip açıkça yazılır — Türkçe sözlükten türetilmez — çünkü asıl amacı,
 * bir dile eklenip diğerine eklenmemiş metni derleme sırasında yakalamaktır.
 * Adres, telefon, isim ve yıl gibi çevrilmeyen veriler burada yer almaz;
 * onlar `content/site.ts` ve `content/team.ts` içindedir.
 */
export type Dictionary = {
  /** Ana menü etiketleri — anahtarlar rota haritasıyla aynıdır. */
  nav: Record<Exclude<RouteKey, LegalRouteKey>, string>;
  /** Alt bilgideki hukuki metin bağlantıları. */
  legalNav: Record<LegalRouteKey, string>;

  common: {
    /**
     * Büronun o dildeki görünen adı. Ticaret unvanı Türkçe'dir; İngilizce
     * sayfalarda okunabilir karşılığı kullanılır, yapılandırılmış veride ise
     * Türkçe unvan esas alınıp bu ad `alternateName` olarak verilir.
     */
    firmName: string;
    skipToContent: string;
    mainMenuLabel: string;
    mobileMenuLabel: string;
    footerMenuLabel: string;
    menuOpen: string;
    menuClose: string;
    scrollHint: string;
    breadcrumbLabel: string;
    heroRegionLabel: string;
    /** Logo bağlantısının ekran okuyucu açıklaması. */
    homeLinkLabel: (firmName: string) => string;
    /** Portre görsellerinin alternatif metni. */
    portraitAlt: (name: string) => string;
    profile: string;
    allTeam: string;
    allPracticeAreas: string;
    /** Dil değiştiricinin ekran okuyucu başlığı. */
    languageLabel: string;
  };

  footer: {
    menuHeading: string;
    contactHeading: string;
    tagline: string;
    fax: string;
    rights: string;
  };

  home: {
    heroHeadlineLines: string[];
    heroSupport: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;

    introLabel: string;
    introStatementLines: string[];
    introParagraphs: string[];
    introLink: string;

    practiceHeading: string;

    statementLabel: string;
    statementLines: string[];
    statementBody: string;

    valuesLabel: string;
    valuesHeadingLines: string[];
    values: { title: string; body: string }[];

    teamEyebrow: string;
    teamHeading: string;

    contactLabel: string;
    contactHeadlineLines: string[];
    contactBody: string;
    contactCta: string;
  };

  about: {
    eyebrow: string;
    headlineLines: string[];
    officeLabel: string;
    paragraphs: string[];
    pillars: string[];
    valuesLabel: string;
  };

  practiceAreas: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    disclaimer: string;
    servicesLabel: string;
    lawyersLabel: string;
    detailDisclaimer: string;
    nextLabel: string;
  };

  team: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    lawyersHeading: string;
    staffHeading: string;
    factsLabel: string;
    emailLabel: string;
    focusLabel: string;
    relatedLabel: string;
    factLabels: ProfileFactLabels;
  };

  contact: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    addressLabel: string;
    phoneLabel: string;
    faxLabel: string;
    emailLabel: string;
    barLabel: string;
    barValue: string;
    formLabel: string;
    formHeading: string;
    formIntro: string;
  };

  form: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    optional: string;
    errors: Record<
      "name" | "email" | "phone" | "subject" | "message" | "consent",
      string
    >;
    consentBefore: string;
    consentLink: string;
    consentAfter: string;
    submit: string;
    submitting: string;
    deliveryError: string;
    sentLabel: string;
    sentHeading: string;
    sentBody: string;
    sentAgain: string;
    disclaimer: string;
  };

  legal: Record<
    LegalRouteKey,
    {
      eyebrow: string;
      titleLines: string[];
      lead: string;
      sections: LegalSection[];
    }
  >;

  notFound: {
    heading: string;
    body: string;
  };

  meta: {
    siteDescription: string;
    siteDescriptionShort: string;
    home: { title: string; description: string };
    about: { title: string; description: string; ogDescription: string };
    practiceAreas: { title: string; description: string; ogDescription: string };
    team: { title: string; description: string; ogDescription: string };
    contact: { title: string };
    dataProtection: { title: string; description: string };
    privacy: { title: string; description: string };
    cookies: { title: string; description: string };
    notFound: { title: string };
  };
};
