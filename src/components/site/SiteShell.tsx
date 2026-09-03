import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SmoothScroll from "@/components/site/SmoothScroll";
import PageTransition from "@/components/site/PageTransition";
import { contact, firm, SITE_URL } from "@/lib/content/site";
import { getDictionary, HTML_LANG, type Locale } from "@/lib/i18n";

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-body",
});

/**
 * Sitenin ortak kabuğu.
 *
 * Türkçe ve İngilizce ağaçların ayrı kök yerleşimleri vardır — yalnızca
 * böylece `<html lang>` sunucuda doğru üretilebilir — ama ikisi de bu
 * bileşeni sarar; başlık, alt bilgi ve yazı tipleri tek bir yerde durur.
 */
export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const dict = getDictionary(locale);

  /** Arama motorları için kurumsal işaretleme — yalnızca doğrulanmış veriler. */
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    // Ticaret unvanı Türkçedir; İngilizce karşılığı yalnızca ek ad olarak
    // verilir, esas ad olarak değil.
    name: firm.name,
    ...(dict.common.firmName !== firm.name
      ? { alternateName: dict.common.firmName }
      : {}),
    url: `${SITE_URL}${locale === "tr" ? "" : `/${locale}`}`,
    foundingDate: String(firm.foundedYear),
    founder: { "@type": "Person", name: firm.founder },
    areaServed: "TR",
    availableLanguage: ["tr", "en"],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contact.address.line1} ${contact.address.line2}`,
      addressLocality: contact.address.region,
      addressRegion: contact.address.locality,
      addressCountry: contact.address.country,
    },
    telephone: contact.phones.map((p) => p.label),
    faxNumber: contact.fax,
    email: contact.email,
  };

  return (
    // `js-ready` sınıfı hidrasyondan önce eklendiği için sunucu ve istemci
    // işaretlemesi burada bilinçli olarak farklıdır.
    <html
      lang={HTML_LANG[locale]}
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Açılış animasyonlarının başlangıç durumu ilk boyamadan önce
            uygulanmalı; aksi hâlde içerik görünüp sonra gizlenir. JavaScript
            kapalıysa sınıf hiç eklenmez ve her şey doğrudan görünür kalır. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-ready')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        <Header locale={locale} />
        <main id="icerik">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
