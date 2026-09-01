"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, ScrollTrigger, EASE, prefersReducedMotion } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Saniye cinsinden gecikme; sıralı girişler için. */
  delay?: number;
  /** Doğrudan alt öğeleri sırayla açar. */
  stagger?: number;
  /** Tetiklenme eşiği — "top 85%" gibi ScrollTrigger konumu. */
  start?: string;
};

/**
 * Görünüm alanına giren blokları yukarı doğru sakin bir hareketle açar.
 * Tek bir yerde tanımlanır ki site genelinde hareket dili tutarlı kalsın.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  stagger,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger
      ? (Array.from(el.children) as HTMLElement[])
      : [el as HTMLElement];

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0, clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: EASE,
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [delay, stagger, start]);

  const revealAttr = stagger ? {} : { "data-reveal": "" };
  const childAttr = stagger ? { "data-reveal-children": "" } : {};

  return (
    <Tag
      ref={ref}
      className={className}
      {...revealAttr}
      {...childAttr}
      suppressHydrationWarning
    >
      {children}
    </Tag>
  );
}
