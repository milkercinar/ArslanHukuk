import Image from "next/image";
import { contact, mapsUrl } from "@/lib/content/site";
import { getDictionary, type Locale } from "@/lib/i18n";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.contact.eyebrow}
        titleLines={dict.contact.titleLines}
        lead={dict.contact.lead}
        align="wide"
        image="/images/sahne/iletisim.jpg"
      />

      <section className="bg-ivory pb-20 md:pb-28">
        <div className="container-editorial">
          <div className="grid gap-12 border-t border-line pt-16 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <Reveal className="space-y-12" stagger={0.1}>
                <div>
                  <p className="label-eyebrow text-muted">
                    {dict.contact.addressLabel}
                  </p>
                  <address className="mt-5 text-[1rem] not-italic leading-[1.8] text-ink/80">
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                    <br />
                    {contact.address.district}
                  </address>
                </div>

                <div>
                  <p className="label-eyebrow text-muted">
                    {dict.contact.phoneLabel}
                  </p>
                  <ul className="mt-5 space-y-1.5 text-[1rem] text-ink/80">
                    {contact.phones.map((phone) => (
                      <li key={phone.href}>
                        <a
                          href={phone.href}
                          className="transition-colors duration-300 hover:text-ink"
                        >
                          {phone.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-muted">
                    {dict.contact.faxLabel} {contact.fax}
                  </p>
                </div>

                <div>
                  <p className="label-eyebrow text-muted">
                    {dict.contact.emailLabel}
                  </p>
                  <p className="mt-5 text-[1rem]">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-ink/80 underline decoration-line-strong underline-offset-4 transition-colors duration-300 hover:text-ink"
                    >
                      {contact.email}
                    </a>
                  </p>
                </div>

                <div>
                  <p className="label-eyebrow text-muted">
                    {dict.contact.barLabel}
                  </p>
                  <p className="mt-5 text-[1rem] text-ink/80">
                    {dict.contact.barValue}
                  </p>
                </div>

                {/* Sol sütun, sağdaki formdan belirgin biçimde kısa kaldığı
                    için altta ölü bir boşluk oluşuyordu; konum bağlantısı
                    hem o boşluğu dolduruyor hem de en çok işe yarayan
                    eylemi veriyor. Gömülü harita yerine dışa bağlantı
                    veriliyor: gömme, Google'a istek atıp çerez bırakır ve
                    sitenin kendi Çerez Politikası'ndaki "üçüncü taraf takip
                    çerezi kullanılmaz" taahhüdünü geçersiz kılardı. */}
                <div>
                  <p className="label-eyebrow text-muted">
                    {dict.contact.locationLabel}
                  </p>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Bağlantı metni tek başına nereye gittiğini söylemiyor;
                    // ekran okuyucuda adres de duyulsun.
                    aria-label={`${dict.contact.mapCta} — ${contact.address.full}`}
                    className="group mt-5 block border border-line bg-ivory-soft transition-colors duration-500 hover:border-line-strong"
                  >
                    {/* Harita, büronun koordinatına ortalanmış olarak
                        üretilip projeye kopyalanmıştır (bkz. README). Karolar
                        çalışma anında değil, bir kez indirildiği için sayfa
                        hiçbir üçüncü tarafa istek atmaz. */}
                    <span className="relative block aspect-4/3 overflow-hidden">
                      <Image
                        src="/images/harita-buro.png"
                        alt={dict.contact.mapAlt}
                        width={812}
                        height={608}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="h-full w-full object-cover grayscale-[0.35] transition-[filter,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0"
                      />

                      {/* Büronun tam noktası. Görselin merkezi bu koordinata
                          göre kırpıldığı için işaret ortada durur. */}
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/12 ring-1 ring-ink/25 transition-colors duration-500 group-hover:bg-ink/20"
                      >
                        <span className="block h-2.5 w-2.5 rounded-full bg-ink shadow-[0_0_0_3px_rgba(241,240,235,0.9)]" />
                      </span>
                    </span>

                    <span className="flex items-baseline justify-between gap-4 border-t border-line px-5 py-4">
                      <span className="text-sm leading-relaxed text-ink/75 transition-colors duration-500 group-hover:text-ink">
                        {dict.contact.mapCta}
                      </span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-sm text-ink/55 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </span>
                  </a>

                  {/* Atıf bağlantısı, geçerli işaretleme için dış bağlantının
                      içine değil altına konur. */}
                  <p className="mt-3 text-[0.7rem] leading-relaxed text-muted">
                    ©{" "}
                    <a
                      href="https://www.openstreetmap.org/copyright"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-line-strong underline-offset-2 transition-colors duration-300 hover:text-ink"
                    >
                      {dict.contact.mapAttribution}
                    </a>
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form, sayfanın geri kalanından ayrı bir yüzeyde durur;
                böylece iletişim bilgileri ile doldurulacak alan görsel
                olarak birbirine karışmaz. */}
            <div className="md:col-span-7 md:col-start-6">
              <div className="bg-ivory-soft p-7 md:p-10">
                <SectionLabel>{dict.contact.formLabel}</SectionLabel>

                <Reveal delay={0.1}>
                  <h2 className="font-serif text-title font-light">
                    {dict.contact.formHeading}
                  </h2>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink/70">
                    {dict.contact.formIntro}
                  </p>
                </Reveal>

                <Reveal className="mt-10" delay={0.18}>
                  <ContactForm locale={locale} />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
