"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { firm } from "@/lib/content/site";
import { getDictionary, NAV_KEYS, route, type Locale } from "@/lib/i18n";
import LocaleSwitch from "./LocaleSwitch";
import MobileMenu from "./MobileMenu";

/** Ana sayfa dışındaki bağlantılarda alt sayfalar da etkin sayılır. */
function isActive(pathname: string, href: string): boolean {
  if (href === "/" || href === "/en") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Başlık ana sayfada video üzerinde saydam ve açık renkli başlar; kahraman
 * bölümü geçildikten sonra fildişi zemine ve koyu metne geçer. Diğer
 * sayfalarda doğrudan açık zeminlidir.
 */
export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const [solid, setSolid] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Sayfanın koyu bir açılış bölümü var mı? Ana sayfadaki video ve
    // fotoğraflı sayfa başlıkları bu işareti taşır. Rota listesi tutmak
    // yerine işareti aramak, yeni sayfalar eklendiğinde de doğru çalışır.
    const region = document.querySelector<HTMLElement>("[data-hero-region]");

    if (!region) {
      setSolid(true);
      return;
    }

    // Eşiği bölümün biraz öncesinde geçeriz ki renk değişimi fotoğrafın
    // karanlık alt kısmında tamamlansın.
    const update = () => {
      setSolid(window.scrollY > region.offsetHeight * 0.82);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  // Menü açıkken başlık her zaman ters kontrastta olmalıdır.
  const light = !solid || menuOpen;

  return (
    <>
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
      >
        {dict.common.skipToContent}
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
              href={route(locale, "home")}
              onClick={() => setMenuOpen(false)}
              className="relative block h-[30px] w-[137px] shrink-0 md:h-[34px] md:w-[155px]"
              aria-label={dict.common.homeLinkLabel(dict.common.firmName)}
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

            <div className="flex items-center gap-8 lg:gap-9">
              <nav
                aria-label={dict.common.mainMenuLabel}
                className="hidden items-center gap-8 md:flex lg:gap-9"
              >
                {NAV_KEYS.map((key) => {
                  const href = route(locale, key);
                  const active = isActive(pathname, href);
                  return (
                    <Link
                      key={key}
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`group relative text-[0.8rem] tracking-wide transition-all duration-300 ${
                        active
                          ? "font-semibold opacity-100"
                          : "font-normal opacity-60 hover:opacity-95"
                      }`}
                    >
                      {dict.nav[key]}
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

              {/* Dil geçişi mobilde de görünür; menüyü açmadan dil
                  değiştirilebilmelidir. */}
              <LocaleSwitch locale={locale} />

              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobil-menu"
                className="label-eyebrow -mr-2 flex items-center gap-3 px-2 py-2 md:hidden"
              >
                <span>
                  {menuOpen ? dict.common.menuClose : dict.common.menuOpen}
                </span>
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
        </div>
      </header>

      <MobileMenu
        locale={locale}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
