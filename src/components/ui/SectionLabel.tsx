import Reveal from "@/components/ui/Reveal";

/**
 * Bölüm etiketi. Sitenin her yerinde aynı yerde durur: başlığın hemen
 * üstünde, sol sütunda değil. Sayfa başlıklarındaki (PageHeader) düzenle
 * aynı olması için ölçüler oradan alınmıştır.
 */
export default function SectionLabel({
  children,
  invert = false,
  className = "",
}: {
  children: React.ReactNode;
  /** Koyu zeminli bölümler için ters kontrast. */
  invert?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`mb-6 md:mb-8 ${className}`}>
      <p
        className={`label-eyebrow ${invert ? "text-ivory/55" : "text-muted"}`}
      >
        {children}
      </p>
    </Reveal>
  );
}
