"use client";

import { useRef, type ElementType } from "react";
import { gsap, EASE_LONG, prefersReducedMotion } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

type SplitLinesProps = {
  /** Her dizi elemanı kendi maskesi içinde ayrı bir satırdır. */
  lines: readonly string[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
  /** Kaydırmayla değil, sayfa açılışında oynat. */
  playOnMount?: boolean;
  start?: string;
};

/**
 * Editoryal başlıkları satır satır maskeden yukarı doğru açar.
 *
 * Satır kırılımları içerikte elle belirlenir; otomatik bölme yapılmaz, çünkü
 * başlıkların nerede kırıldığı bu tasarımda kompozisyonun parçasıdır.
 */
export default function SplitLines({
  lines,
  as: Tag = "h2",
  className,
  lineClassName,
  delay = 0,
  playOnMount = false,
  start = "top 82%",
}: SplitLinesProps) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const spans = el.querySelectorAll<HTMLElement>("[data-line] > span");

    if (prefersReducedMotion()) {
      gsap.set(spans, { y: 0, clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { yPercent: 105, y: 0 },
        {
          yPercent: 0,
          y: 0,
          duration: 1.2,
          delay,
          ease: EASE_LONG,
          stagger: 0.09,
          ...(playOnMount
            ? {}
            : { scrollTrigger: { trigger: el, start, once: true } }),
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay, playOnMount, start]);

  return (
    <Tag ref={ref} className={className} data-reveal-line="">
      {lines.map((line, i) => (
        <span key={i} data-line="" className={`line-mask ${lineClassName ?? ""}`}>
          {/* Satır sonundaki boşluk, metin çıkarıldığında sözcüklerin
              birbirine yapışmasını engeller. */}
          <span>{line + " "}</span>
        </span>
      ))}
    </Tag>
  );
}
