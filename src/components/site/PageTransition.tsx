"use client";

import { useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

/**
 * Sayfa girişlerinde kısa ve sakin bir açılma. Çıkış animasyonu bilinçli
 * olarak yoktur: gezinmenin yavaş hissettirmemesi için geçiş 450 ms'de biter.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.45, ease: EASE },
    );

    return () => {
      tween.kill();
      gsap.set(el, { clearProps: "opacity,transform" });
    };
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
