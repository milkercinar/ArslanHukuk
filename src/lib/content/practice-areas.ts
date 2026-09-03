/**
 * Uzmanlık alanları — dilden bağımsız tipler ve erişim yardımcıları.
 *
 * Metinler `tr/practice-areas.ts` ve `en/practice-areas.ts` dosyalarında
 * durur. Her alanın dilden bağımsız bir `id` değeri vardır; diller arası
 * bağlantı (dil değiştirici, avukat profilindeki ilgili alanlar) bu kimlik
 * üzerinden kurulur, adres parçaları üzerinden değil.
 */

import type { Locale } from "@/lib/i18n/config";
import { practiceAreasTr } from "./tr/practice-areas";
import { practiceAreasEn } from "./en/practice-areas";

export type PracticeAreaId =
  | "ticaret"
  | "gayrimenkul"
  | "icra"
  | "is"
  | "fikri"
  | "medeni"
  | "idare"
  | "bankacilik";

export type PracticeArea = {
  id: PracticeAreaId;
  /** O dildeki adres parçası. */
  slug: string;
  title: string;
  /** Uzun başlıklar için listelerde kullanılan kısa ad. */
  shortTitle?: string;
  /** Detay sayfasının üst etiketi — "Kurumsal" / "Corporate". */
  category: string;
  /** Satır listelerinde görünen tek cümlelik açıklama. */
  excerpt: string;
  /** Detay sayfasının giriş paragrafı. */
  intro: string;
  /** Detay sayfasının gövde metni. */
  body: string[];
  /** İlgili hizmet başlıkları. */
  services: string[];
};

const BY_LOCALE: Record<Locale, PracticeArea[]> = {
  tr: practiceAreasTr,
  en: practiceAreasEn,
};

export function getPracticeAreas(locale: Locale): PracticeArea[] {
  return BY_LOCALE[locale];
}

export function getPracticeArea(
  locale: Locale,
  slug: string,
): PracticeArea | undefined {
  return BY_LOCALE[locale].find((a) => a.slug === slug);
}

export function getPracticeAreaById(
  locale: Locale,
  id: PracticeAreaId,
): PracticeArea | undefined {
  return BY_LOCALE[locale].find((a) => a.id === id);
}

/** Listedeki bir sonraki alan; son eleman için başa döner. */
export function getNextPracticeArea(
  locale: Locale,
  slug: string,
): PracticeArea {
  const areas = BY_LOCALE[locale];
  const i = areas.findIndex((a) => a.slug === slug);
  return areas[(i + 1) % areas.length];
}

/**
 * Bir alanın diğer dildeki adres parçası. Dil değiştirici, detay
 * sayfasındayken karşılık gelen sayfaya gitmek için bunu kullanır.
 */
export function practiceAreaSlugIn(
  from: Locale,
  slug: string,
  to: Locale,
): string | null {
  const area = getPracticeArea(from, slug);
  if (!area) return null;
  return getPracticeAreaById(to, area.id)?.slug ?? null;
}
