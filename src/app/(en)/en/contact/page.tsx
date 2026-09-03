import type { Metadata } from "next";
import ContactView from "@/components/pages/ContactView";
import { contact } from "@/lib/content/site";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata, routePaths } from "@/lib/seo";

const dict = getDictionary("en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  paths: routePaths("contact"),
  title: dict.meta.contact.title,
  description: `${dict.common.firmName} — ${contact.address.full}. ${
    dict.contact.phoneLabel
  }: ${contact.phones.map((p) => p.label).join(", ")}.`,
  ogDescription: contact.address.full,
});

export default function ContactPage() {
  return <ContactView locale="en" />;
}
