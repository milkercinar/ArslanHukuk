import type { Metadata } from "next";
import ArrowLink from "@/components/ui/ArrowLink";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-ivory pb-16 pt-28">
      <div className="container-editorial">
        <p className="label-eyebrow text-muted">404</p>
        <h1 className="mt-8 max-w-2xl font-serif text-statement font-light">
          Aradığınız sayfayı bulamadık.
        </h1>
        <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ink/70">
          Adres değişmiş veya sayfa kaldırılmış olabilir. Aşağıdaki
          bağlantılardan devam edebilirsiniz.
        </p>
        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-5">
          <ArrowLink href="/">Ana sayfa</ArrowLink>
          <ArrowLink href="/uzmanlik-alanlari">Uzmanlık alanları</ArrowLink>
          <ArrowLink href="/iletisim">İletişim</ArrowLink>
        </div>
      </div>
    </section>
  );
}
