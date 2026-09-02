import type { ReactNode } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SplitLines from "@/components/ui/SplitLines";

const OVERLAYS = {
  hafif: {
    dikey:
      "linear-gradient(to bottom, rgba(5,10,8,0.10), rgba(5,10,8,0.22), rgba(5,10,8,0.46))",
    kose: "linear-gradient(to top right, rgba(5,10,8,0.34), rgba(5,10,8,0) 55%)",
  },
  orta: {
    dikey:
      "linear-gradient(to bottom, rgba(5,10,8,0.35), rgba(5,10,8,0.48), rgba(5,10,8,0.68))",
    kose: "linear-gradient(to top right, rgba(5,10,8,0.50), rgba(5,10,8,0) 60%)",
  },
  koyu: {
    dikey:
      "linear-gradient(to bottom, rgba(5,10,8,0.52), rgba(5,10,8,0.62), rgba(5,10,8,0.78))",
    kose: "linear-gradient(to top right, rgba(5,10,8,0.60), rgba(5,10,8,0) 65%)",
  },
} as const;

const OBJECT_POSITION = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
} as const;

/**
 * İç sayfaların ortak açılışı: küçük etiket, satır satır açılan büyük başlık
 * ve isteğe bağlı giriş cümlesi.
 *
 * `image` verildiğinde başlık, arkasında fotoğraf olan koyu bir açılış
 * bölümüne dönüşür — ana sayfadaki video girişiyle aynı muamele. Bu durumda
 * bölüm `data-hero-region` ile işaretlenir; sabit site başlığı bu işareti
 * arayıp üzerindeyken açık renge geçer.
 */
export default function PageHeader({
  eyebrow,
  breadcrumb,
  titleLines,
  lead,
  align = "left",
  image,
  imageAlt = "",
  overlay = "orta",
  imagePosition = "center",
}: {
  eyebrow: string;
  /** Etiketin üstünde gösterilen, kendi üst boşluğunu getirmeyen konum çubuğu. */
  breadcrumb?: ReactNode;
  titleLines: readonly string[];
  lead?: string;
  align?: "left" | "wide";
  /** Başlığın arkasına yerleşecek fotoğraf. */
  image?: string;
  imageAlt?: string;
  /**
   * Karartma gücü. Zaten koyu olan fotoğraflarda "hafif" seçilmeli; aksi
   * hâlde görüntü siyaha yaklaşır ve fotoğraf seçilmez olur.
   */
  overlay?: "hafif" | "orta" | "koyu";
  /** Kırpmanın fotoğrafın hangi bölgesini göstereceği. */
  imagePosition?: "center" | "top" | "bottom";
}) {
  const titleClass = `mt-8 font-serif font-light md:mt-10 ${
    align === "wide" ? "text-display" : "text-statement"
  }`;

  if (!image) {
    return (
      <header className="bg-ivory pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="container-editorial">
          {breadcrumb && <Reveal className="mb-6 md:mb-8">{breadcrumb}</Reveal>}

          <Reveal>
            <p className="label-eyebrow text-muted">{eyebrow}</p>
          </Reveal>

          <SplitLines
            as="h1"
            lines={titleLines}
            playOnMount
            delay={0.1}
            className={titleClass}
          />

          {lead && (
            <Reveal className="mt-10 max-w-2xl md:mt-12" delay={0.25}>
              <p className="text-[1.02rem] leading-[1.75] text-ink/70">{lead}</p>
            </Reveal>
          )}
        </div>
      </header>
    );
  }

  return (
    <header
      data-hero-region=""
      className="relative flex min-h-[62svh] items-end overflow-hidden bg-ink-black pb-14 pt-36 md:min-h-[70svh] md:pb-20 md:pt-44"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${OBJECT_POSITION[imagePosition]}`}
      />

      {/* Videodaki ile aynı sinematik karartma: fotoğrafın açık ya da koyu
          olması tipografinin okunmasını etkilemesin. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: OVERLAYS[overlay].dikey }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: OVERLAYS[overlay].kose }}
      />

      <div className="container-editorial relative w-full text-ivory">
        {breadcrumb && <Reveal className="mb-6 md:mb-8">{breadcrumb}</Reveal>}

        <Reveal>
          <p className="label-eyebrow text-ivory/70">{eyebrow}</p>
        </Reveal>

        <SplitLines
          as="h1"
          lines={titleLines}
          playOnMount
          delay={0.1}
          className={titleClass}
        />

        {lead && (
          <Reveal className="mt-8 max-w-2xl md:mt-10" delay={0.25}>
            <p className="text-[1.02rem] leading-[1.75] text-ivory/85">{lead}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
