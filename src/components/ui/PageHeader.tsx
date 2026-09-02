import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import SplitLines from "@/components/ui/SplitLines";

/**
 * İç sayfaların ortak açılışı: küçük etiket, satır satır açılan büyük başlık
 * ve isteğe bağlı giriş cümlesi. Sabit başlığın altında kalmaması için üst
 * boşluk cömerttir.
 */
export default function PageHeader({
  eyebrow,
  breadcrumb,
  titleLines,
  lead,
  align = "left",
}: {
  eyebrow: string;
  /** Etiketin üstünde gösterilen, kendi üst boşluğunu getirmeyen konum çubuğu. */
  breadcrumb?: ReactNode;
  titleLines: readonly string[];
  lead?: string;
  align?: "left" | "wide";
}) {
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
          className={`mt-8 font-serif font-light md:mt-10 ${
            align === "wide" ? "text-display" : "text-statement"
          }`}
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
