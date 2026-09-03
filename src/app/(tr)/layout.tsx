import type { Metadata, Viewport } from "next";
import SiteShell from "@/components/site/SiteShell";
import { getDictionary } from "@/lib/i18n";
import { SITE_URL } from "@/lib/content/site";
import "../globals.css";

const dict = getDictionary("tr");

/**
 * Türkçe ağacın kök yerleşimi.
 *
 * Türkçe ve İngilizce ayrı kök yerleşimlerdir; `<html lang>` ancak böyle
 * sunucuda doğru üretilir. İki dil arasında geçiş tam sayfa yüklemesiyle
 * olur — dil değiştirmek zaten seyrek ve bilinçli bir eylemdir.
 */
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

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="tr">{children}</SiteShell>;
}
