"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, firm } from "@/lib/content/site";
import MobileMenu from "./MobileMenu";

/** Ana sayfa dışındaki bağlantılarda alt sayfalar da etkin sayılır. */
function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

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
    // renk değişimi videonun karanlık alt kısmında tamamlansın.
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
            } ${solid ? "py-4" : "py-6 md:py-7"}`}
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="relative block h-[30px] w-[137px] shrink-0 md:h-[34px] md:w-[155px]"
              aria-label={`${firm.name} — ana sayfa`}
            >
              {/* Logonun lacivert yazısı video üzerinde okunmadığı için koyu
                  zeminde beyaz siluete geçilir; açık zeminde özgün renkler
                  görünür. İki katman çapraz geçiş yapar. */}
              <Image
                src="/images/arslan-hukuk-logo.png"
                alt={firm.name}
                fill
                priority
                sizes="155px"
                className={`object-contain object-left brightness-0 invert transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  light ? "opacity-100" : "opacity-0"
                }`}
              />
              <Image
                src="/images/arslan-hukuk-logo.png"
                alt=""
                aria-hidden="true"
                fill
                sizes="155px"
                className={`object-contain object-left transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  light ? "opacity-0" : "opacity-100"
                }`}
              />
            </Link>

            <nav
              aria-label="Ana menü"
              className="hidden items-center gap-8 md:flex lg:gap-9"
            >
              {primaryNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative text-[0.8rem] tracking-wide transition-all duration-300 ${
                      active
                        ? "font-semibold opacity-100"
                        : "font-normal opacity-60 hover:opacity-95"
                    }`}
                  >
                    {item.label}
                    {/* Bulunulan bölüm kalın yazı + tam alt çizgiyle
                        işaretlenir; diğerlerinde çizgi yalnızca üzerine
                        gelindiğinde soldan açılır. */}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-2 left-0 h-[1.5px] w-full origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
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
