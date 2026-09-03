import { dictionaryTr } from "@/lib/content/tr/ui";
import { dictionaryEn } from "@/lib/content/en/ui";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionary";

const DICTIONARIES: Record<Locale, Dictionary> = {
  tr: dictionaryTr,
  en: dictionaryEn,
};

/**
 * O dilin metinleri.
 *
 * Sözlükler eş zamanlı yüklenir; site küçük olduğu için dinamik içe aktarma
 * ve `async` bir arayüz gereksiz karmaşıklık yaratırdı.
 */
export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary } from "./dictionary";
export * from "./config";
export * from "./routes";
