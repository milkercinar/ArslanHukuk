"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact, primaryNav } from "@/lib/content/site";
import { gsap, EASE_LONG, prefersReducedMotion } from "@/lib/gsap";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Tam ekran koyu menü. Bağlantılar sırayla maskeden açılır; Escape ve
 * rota değişimi menüyü kapatır.
 */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Rota değiştiğinde menü açık kalmamalı.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !open || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-menu-line] > span",
        { yPercent: 110, y: 0 },
        { yPercent: 0, y: 0, duration: 0.9, ease: EASE_LONG, stagger: 0.07, delay: 0.1 },
      );
      gsap.fromTo(
        "[data-menu-foot]",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.8, ease: EASE_LONG, delay: 0.45 },
      );
    }, panel);

    return () => ctx.revert();
  }, [open]);

  return (
    <div
      id="mobil-menu"
      ref={panelRef}
      aria-hidden={!open}
      className={`fixed inset-0 z-40 bg-ink-deep text-ivory transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="container-editorial flex h-[100svh] flex-col justify-between pb-10 pt-32">
        <nav aria-label="Mobil menü">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.href} className="border-b border-line-invert">
                <Link
                  href={item.href}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  className="block py-5"
                >
                  <span data-menu-line="" className="line-mask">
                    <span className="block font-serif text-[2.1rem] font-light leading-none">
                      {item.label}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div data-menu-foot="" className="space-y-3 text-sm text-ivory/70">
          <p className="label-eyebrow text-ivory/55">İletişim</p>
          <p>
            <a href={contact.phones[0].href} tabIndex={open ? 0 : -1}>
              {contact.phones[0].label}
            </a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`} tabIndex={open ? 0 : -1}>
              {contact.email}
            </a>
          </p>
          <p className="pt-2 text-ivory/60">{contact.address.full}</p>
        </div>
      </div>
    </div>
  );
}
