import type { Metadata, Viewport } from "next";
import SiteShell from "@/components/site/SiteShell";
import { getDictionary } from "@/lib/i18n";
import { SITE_URL } from "@/lib/content/site";
import "../globals.css";

const dict = getDictionary("en");

/** Root layout for the English tree. See `(tr)/layout.tsx`. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: dict.meta.home.title,
    template: `%s | ${dict.common.firmName}`,
  },
  description: dict.meta.siteDescription,
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

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
