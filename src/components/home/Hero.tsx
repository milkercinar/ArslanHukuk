"use client";

import { useRef } from "react";
import Link from "next/link";
import { hero } from "@/lib/content/firm";
import { gsap, ScrollTrigger, EASE_LONG, prefersReducedMotion } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

/**
 * Tam ekran video açılışı.
 *
 * Video kare kare kaydırmaya bağlanmaz; normal otomatik oynatma kullanılır.
 * Kaydırıldıkça yalnızca metin yukarı süzülür ve video hafifçe geride kalır —
 * bu, koyu videodan fildişi bölüme geçişi yumuşatır.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Açılış: başlık satırları maskeden çıkar, çevresi ardından belirir.
      const intro = gsap.timeline({ delay: 0.15 });

      intro
        .fromTo(
          "[data-hero-line] > span",
          { yPercent: 106, y: 0 },
          { yPercent: 0, y: 0, duration: 1.25, ease: EASE_LONG, stagger: 0.1 },
          0,
        )
        .fromTo(
          "[data-hero-support]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 1, ease: EASE_LONG },
          0.6,
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.9, ease: EASE_LONG, stagger: 0.1 },
          0.8,
        )
        .fromTo(
          "[data-hero-scroll]",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          1,
        );

      // Kaydırma: metin yukarı çıkar ve söner, video yavaşça geride kalır.
      gsap.to("[data-hero-content]", {
        yPercent: -18,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to("[data-hero-media]", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-hero-region=""
      className="relative h-[100svh] w-full overflow-hidden bg-ink-black"
      aria-label="Giriş"
    >
      {/* Video yüklenene kadar koyu zemin görünür; bu sayede yerleşim
          kayması ve beyaz parlama oluşmaz. */}
      <div data-hero-media="" className="absolute inset-0 h-[112%] w-full">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/video/hero-geneva.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Tipografinin okunabilirliği için sinematik koyu geçiş. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,10,8,0.15), rgba(5,10,8,0.25), rgba(5,10,8,0.55))",
        }}
      />
      {/* Sol alt köşedeki metin bloğunun altını ayrıca koyulaştırır. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top right, rgba(5,10,8,0.5), rgba(5,10,8,0) 55%)",
        }}
      />

      <div className="container-editorial relative flex h-full flex-col justify-end pb-12 md:pb-14">
        <div data-hero-content="" className="max-w-6xl text-ivory">
          <h1 className="font-serif text-hero font-light">
            {hero.headlineLines.map((line, i) => (
              <span key={i} data-hero-line="" className="line-mask">
                <span className="block">{line + " "}</span>
              </span>
            ))}
          </h1>

          <p
            data-hero-support=""
            className="mt-8 max-w-2xl text-[0.95rem] leading-relaxed text-ivory/85 md:mt-10"
          >
            {hero.support}
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-12">
            <Link
              data-hero-cta=""
              href={hero.primaryCta.href}
              className="group inline-flex items-baseline gap-3 text-sm tracking-wide text-ivory"
            >
              <span className="relative">
                {hero.primaryCta.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-full bg-ivory/45 transition-colors duration-500 group-hover:bg-ivory"
                />
              </span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
              >
                →
              </span>
            </Link>

            <Link
              data-hero-cta=""
              href={hero.secondaryCta.href}
              className="group inline-flex items-baseline gap-3 text-sm tracking-wide text-ivory/85 transition-colors duration-500 hover:text-ivory"
            >
              <span>{hero.secondaryCta.label}</span>
              <span
                aria-hidden="true"
                className="inline-block rotate-6 scale-x-110 text-[0.9em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div
        data-hero-scroll=""
        aria-hidden="true"
        className="absolute bottom-8 right-6 hidden items-center gap-3 text-ivory/45 md:right-10 md:flex xl:right-16"
      >
        <span className="label-eyebrow text-[0.6rem]">Kaydırın</span>
        <span className="block h-px w-10 bg-ivory/35" />
      </div>
    </section>
  );
}
