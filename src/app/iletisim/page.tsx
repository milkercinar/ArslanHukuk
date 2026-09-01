import type { Metadata } from "next";
import { contact, firm } from "@/lib/content/site";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${firm.name} — ${contact.address.full}. Telefon: ${contact.phones
    .map((p) => p.label)
    .join(", ")}.`,
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: `İletişim | ${firm.name}`,
    description: contact.address.full,
    url: "/iletisim",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="İletişim"
        titleLines={["Büromuza", "ulaşın."]}
        lead="Kısaca durumu anlatın, size dönelim. Doğrudan konuşmayı tercih ederseniz telefon numaralarımız aşağıda."
        align="wide"
      />

      <section className="bg-ivory pb-20 md:pb-28">
        <div className="container-editorial">
          <div className="grid gap-12 border-t border-line pt-16 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <Reveal className="space-y-12" stagger={0.1}>
                <div>
                  <p className="label-eyebrow text-muted">Adres</p>
                  <address className="mt-5 text-[1rem] not-italic leading-[1.8] text-ink/80">
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                    <br />
                    {contact.address.district}
                  </address>
                </div>

                <div>
                  <p className="label-eyebrow text-muted">Telefon</p>
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
                  <p className="mt-3 text-sm text-muted">Faks {contact.fax}</p>
                </div>

                <div>
                  <p className="label-eyebrow text-muted">E-posta</p>
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
                  <p className="label-eyebrow text-muted">Baro</p>
                  <p className="mt-5 text-[1rem] text-ink/80">{contact.bar}</p>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <Reveal delay={0.1}>
                <h2 className="font-serif text-title font-light">
                  Bize yazın.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink/70">
                  Ne olduğunu birkaç cümleyle anlatmanız yeterli. Gerisini
                  konuşurken netleştiririz.
                </p>
              </Reveal>

              <Reveal className="mt-10" delay={0.18}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
