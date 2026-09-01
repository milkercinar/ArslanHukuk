import Link from "next/link";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  /** Dışa açılan bağlantılarda kuzeydoğu oku kullanılır. */
  external?: boolean;
  className?: string;
  /** Koyu zeminlerde ters kontrast. */
  invert?: boolean;
};

/**
 * Sitenin tek eylem çağrısı biçimi: dolgulu düğme yerine altı ince çizgili
 * editoryal bir metin bağlantısı. Ok, üzerine gelindiğinde 8px kayar.
 */
export default function ArrowLink({
  href,
  children,
  external = false,
  className = "",
  invert = false,
}: ArrowLinkProps) {
  const line = invert ? "bg-ivory/40" : "bg-ink/30";
  const lineHover = invert
    ? "group-hover:bg-ivory"
    : "group-hover:bg-ink";

  const content = (
    <>
      <span className="relative inline-block">
        {children}
        <span
          aria-hidden="true"
          className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 transition-colors duration-500 ${line} ${lineHover}`}
        />
      </span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
      >
        {external ? "↗" : "→"}
      </span>
    </>
  );

  const classes = `group inline-flex items-baseline gap-3 text-sm tracking-wide ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer noopener"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
