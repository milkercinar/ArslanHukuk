"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// registerPlugin aynı eklenti için tekrar çağrıldığında zararsızdır.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Site genelinde tek bir hareket dili kullanılır. */
export const EASE = "power3.out";
export const EASE_LONG = "expo.out";

/**
 * Kullanıcı hareketi azaltmayı tercih ettiyse animasyon çalıştırmak yerine
 * öğeleri doğrudan son durumlarına yerleştiririz.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
