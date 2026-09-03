"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternatePath } from "@/lib/i18n/alternate";
import {
  getDictionary,
  LOCALE_LABEL,
  LOCALE_NAME,
  LOCALES,
  type Locale,
} from "@/lib/i18n";

/**
 * TR | EN geçişi.
 *
 * Bağlantı, bulunulan sayfanın diğer dildeki karşılığına gider; dil
 * değiştiren kullanıcı ana sayfaya düşmez. Etkin dil de bağlantı olarak
 * değil, işaretli bir metin olarak durur — böylece kendine giden bir
 * bağlantı üretilmez.
 */
export default function LocaleSwitch({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const dict = getDictionary(locale);

  return (
    <div
      className={`flex items-center gap-2 text-[0.72rem] tracking-[0.14em] ${className}`}
    >
      <span className="sr-only">{dict.common.languageLabel}</span>

      {LOCALES.map((item, i) => (
        <span key={item} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden="true" className="opacity-30">
              /
            </span>
          )}

          {item === locale ? (
            <span aria-current="true" className="font-semibold opacity-100">
              {LOCALE_LABEL[item]}
            </span>
          ) : (
            <Link
              href={alternatePath(pathname, item)}
              hrefLang={item}
              lang={item}
              aria-label={LOCALE_NAME[item]}
              className="opacity-55 transition-opacity duration-300 hover:opacity-95"
            >
              {LOCALE_LABEL[item]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
