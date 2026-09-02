"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

type ImageSectionProps = {
  src: string;
  /** Ekran okuyucular için; yalnızca dekoratifse boş bırakın. */
  alt?: string;
  children: ReactNode;
  /**
   * Karartma gücü. Metin ne kadar uzunsa o kadar koyu olmalı ki
   * okunabilirlik korunsun.
   */
  overlay?: "hafif" | "orta" | "koyu";
  /** Bölüm yüksekliği. */
  height?: "kisa" | "normal" | "tam";
  /** Yavaş yukarı kayan arka plan. */
  parallax?: boolean;
  className?: string;
  priority?: boolean;
};

const HEIGHTS = {
  kisa: "min-h-[42svh] py-20 md:py-28",
  normal: "min-h-[62svh] py-28 md:py-36",
  tam: "min-h-[88svh] py-32 md:py-40",
} as const;

const OVERLAYS = {
  hafif:
    "linear-gradient(to bottom, rgba(5,10,8,0.20), rgba(5,10,8,0.30), rgba(5,10,8,0.45))",
  orta: "linear-gradient(to bottom, rgba(5,10,8,0.38), rgba(5,10,8,0.50), rgba(5,10,8,0.62))",
  koyu: "linear-gradient(to bottom, rgba(5,10,8,0.55), rgba(5,10,8,0.66), rgba(5,10,8,0.76))",
} as const;

/**
 * Arka planda fotoğraf, önünde metin.
 *
 * Fotoğraf `next/image` ile servis edilir (AVIF/WebP, boyuta göre kırpma).
 * Üstüne koyu bir geçiş bindirilir; bu, hero bölümündeki muameleyle aynıdır
 * ve tipografinin her fotoğrafta okunmasını garanti eder — resmin açık veya
 * koyu olması metni etkilemez.
 */
export default function ImageSection({
  src,
  alt = "",
  children,
  overlay = "orta",
  height = "normal",
  parallax = true,
  className = "",
  priority = false,
}: ImageSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || !parallax || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Fotoğraf, bölümün kendisinden daha yavaş hareket eder.
      gsap.fromTo(
        "[data-image-layer]",
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [parallax]);

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-center overflow-hidden bg-ink-black ${HEIGHTS[height]} ${className}`}
    >
      {/* Katman bölümden uzun tutulur ki parallax sırasında altta boşluk
          açılmasın. */}
      <div
        data-image-layer=""
        className="absolute inset-x-0 -top-[8%] h-[116%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: OVERLAYS[overlay] }}
      />

      <div className="container-editorial relative w-full text-ivory">
        {children}
      </div>
    </section>
  );
}
