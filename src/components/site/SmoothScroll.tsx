"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Lenis'i GSAP'in ticker'ına bağlar; böylece kaydırma ve ScrollTrigger
 * hesaplamaları tek bir kare döngüsünde çalışır ve titreme oluşmaz.
 *
 * Hareket azaltma tercihinde Lenis hiç başlatılmaz — tarayıcının kendi
 * anlık kaydırması kullanılır.
 */
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Tarayıcının kendi konum geri yüklemesi, yeni sayfayı eski konumda
    // açtığı için devre dışı bırakılır.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Dokunmatik cihazlarda yerel kaydırma daha akıcı ve daha ucuzdur.
      syncTouch: false,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Sayfa değiştiğinde başa dön ve tetikleyicileri yeni yüksekliğe göre ölç.
  //
  // Lenis kendi kaydırma konumunu ayrı tuttuğu için yalnızca window.scrollTo
  // çağırmak yetmez: Lenis bir sonraki karede eski konumuna geri döner. Bu
  // yüzden örneğe doğrudan `immediate` ile sıfır konumu verilir.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }

    const id = window.setTimeout(() => ScrollTrigger.refresh(), 220);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
