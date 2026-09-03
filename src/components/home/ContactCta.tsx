import Image from "next/image";
import { contactCta } from "@/lib/content/firm";
import { contact, firm } from "@/lib/content/site";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitLines from "@/components/ui/SplitLines";

/**
 * Ana sayfanın sonundaki koyu bölüm. Pazarlama iddiası içermez; yalnızca
 * görüşmeye davet eder. Sağ sütunda büro logosu durur.
 */
export default function ContactCta() {
  return (
    <section
      className="bg-ink-deep text-ivory"
      aria-labelledby="iletisim-cta-baslik"
    >
      <div className="container-editorial py-24 md:py-32">
        <SectionLabel invert>İletişim</SectionLabel>

        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
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

          {/* Sağ sütundaki logo. Koyu zeminde beyaz siluet olarak durur ve
              biraz saydamdır; imza gibi okunsun, düğme gibi değil.
              Bilinçli olarak Reveal ile sarılmadı: marka işaretinin
              görünürlüğü kaydırma animasyonuna bağlı olmamalı. */}
          <div className="flex items-center md:col-span-4 md:col-start-9 md:justify-end">
            <Image
              src="/images/arslan-hukuk-logo.png"
              alt={firm.name}
              width={205}
              height={45}
              sizes="(max-width: 768px) 200px, 320px"
              className="h-auto w-[200px] opacity-80 brightness-0 invert md:w-[280px] lg:w-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
