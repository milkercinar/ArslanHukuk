import type { Metadata } from "next";
import NotFoundView from "@/components/pages/NotFoundView";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: getDictionary("en").meta.notFound.title,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundView locale="en" />;
}
