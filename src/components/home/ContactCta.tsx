import { contactCta } from "@/lib/content/firm";
import { contact } from "@/lib/content/site";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitLines from "@/components/ui/SplitLines";

/**
 * Sayfanın sonundaki koyu bölüm. Pazarlama iddiası içermez; yalnızca
 * görüşmeye davet eder.
 */
export default function ContactCta() {
  return (
    <section
      className="bg-ink-deep text-ivory"
      aria-labelledby="iletisim-cta-baslik"
    >
      <div className="container-editorial py-24 md:py-32">
        <SectionLabel invert>İletişim</SectionLabel>

        <SplitLines
          as="h2"
          lines={contactCta.headlineLines}
          className="font-serif text-statement font-light"
        />

        <Reveal className="mt-10 max-w-xl" delay={0.1}>
          <p className="text-[0.98rem] leading-relaxed text-ivory/70">
            {contactCta.body}
          </p>
        </Reveal>

        <Reveal
          className="mt-10 flex flex-col gap-10 md:mt-12 md:flex-row md:items-center md:gap-12"
          delay={0.18}
        >
          <ArrowLink href={contactCta.cta.href} invert className="text-ivory">
            {contactCta.cta.label}
          </ArrowLink>

          <div className="space-y-1 text-sm text-ivory/60">
            <p>
              <a
                href={contact.phones[0].href}
                className="transition-colors duration-300 hover:text-ivory"
              >
                {contact.phones[0].label}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors duration-300 hover:text-ivory"
              >
                {contact.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
