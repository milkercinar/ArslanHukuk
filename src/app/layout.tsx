import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SmoothScroll from "@/components/site/SmoothScroll";
import PageTransition from "@/components/site/PageTransition";
import { contact, firm, SITE_URL } from "@/lib/content/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${firm.name} | İstanbul`,
    template: `%s | ${firm.name}`,
  },
  description:
    "1982 yılında kurulan Arslan Hukuk Bürosu, İstanbul merkezli olarak ticaret, gayrimenkul, icra ve iflas, iş, fikri ve sınai haklar, medeni, idare ve vergi ile bankacılık hukuku alanlarında danışmanlık ve avukatlık hizmeti sunmaktadır.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: firm.name,
    url: SITE_URL,
    title: `${firm.name} | İstanbul`,
    description:
      "1982 yılından bu yana İstanbul'da hukuki danışmanlık ve avukatlık hizmeti.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${firm.name} | İstanbul`,
    description:
      "1982 yılından bu yana İstanbul'da hukuki danışmanlık ve avukatlık hizmeti.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#111512",
  colorScheme: "light",
};

/** Arama motorları için kurumsal işaretleme — yalnızca doğrulanmış veriler. */
const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: firm.name,
  url: SITE_URL,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // `js-ready` sınıfı hidrasyondan önce eklendiği için sunucu ve istemci
    // işaretlemesi burada bilinçli olarak farklıdır.
    <html
      lang="tr"
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
        <Header />
        <main id="icerik">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
