"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, firm } from "@/lib/content/site";
import MobileMenu from "./MobileMenu";

/**
 * Başlık ana sayfada video üzerinde saydam ve açık renkli başlar; kahraman
 * bölümü geçildikten sonra fildişi zemine ve koyu metne geçer. Diğer
 * sayfalarda doğrudan açık zeminlidir.
 */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }

    // Kahraman bölümü ekran yüksekliği kadardır; eşiği biraz önce geçeriz ki
    // metin renk değişimi videonun karanlık alt kısmında tamamlansın.
    const update = () => {
      setSolid(window.scrollY > window.innerHeight * 0.82);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  // Menü açıkken başlık her zaman ters kontrastta olmalıdır.
  const light = !solid || menuOpen;

  return (
    <>
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
      >
        İçeriğe geç
      </a>

      <header
        className="fixed inset-x-0 top-0 z-50"
        data-header-theme={light ? "light" : "dark"}
      >
        {/* Zemin katmanı ayrı tutulur; böylece metin rengi ile arka plan
            birbirinden bağımsız ve yumuşak geçiş yapabilir. */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 border-b border-line bg-ivory transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            solid && !menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="container-editorial relative">
          <div
            className={`flex items-center justify-between transition-[padding,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              light ? "text-ivory" : "text-ink"
            } ${solid ? "py-5" : "py-7 md:py-9"}`}
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="label-eyebrow flex items-baseline gap-[0.45em] text-[0.78rem] md:text-[0.85rem]"
              aria-label={`${firm.name} — ana sayfa`}
            >
              <span className="font-semibold">{firm.wordmark.first}</span>
              <span className="font-normal opacity-70">
                {firm.wordmark.second}
              </span>
            </Link>

            <nav
              aria-label="Ana menü"
              className="hidden items-center gap-9 md:flex"
            >
              {primaryNav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative text-[0.8rem] tracking-wide transition-opacity duration-300 hover:opacity-100 ${
                      active ? "opacity-100" : "opacity-65"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobil-menu"
              className="label-eyebrow -mr-2 flex items-center gap-3 px-2 py-2 md:hidden"
            >
              <span>{menuOpen ? "Kapat" : "Menü"}</span>
              <span aria-hidden="true" className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-px w-full bg-current transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    menuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-full bg-current transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    menuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
