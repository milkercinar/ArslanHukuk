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
                    <span className="flex aspect-4/3 items-center justify-center">
                      {/* Soyut konum işareti. Bilerek sokak çizimi değil:
                          doğrulanmış koordinatımız yok, gerçek gibi duran
                          uydurma bir kroki yanıltıcı olurdu. */}
                      <svg
                        viewBox="0 0 120 120"
                        aria-hidden="true"
                        className="h-28 w-28 text-ink/45 transition-colors duration-500 group-hover:text-ink/70"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          vectorEffect="non-scaling-stroke"
                        >
                          <circle cx="60" cy="60" r="46" opacity="0.35" />
                          <circle cx="60" cy="60" r="30" opacity="0.55" />
                          <path d="M60 6v20M60 94v20M6 60h20M94 60h20" opacity="0.4" />
                        </g>
                        <circle cx="60" cy="60" r="4.5" fill="currentColor" />
                      </svg>
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
