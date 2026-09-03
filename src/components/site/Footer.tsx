import Image from "next/image";
import Link from "next/link";
import { contact, firm } from "@/lib/content/site";
import {
  getDictionary,
  LEGAL_KEYS,
  NAV_KEYS,
  route,
  type Locale,
} from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-black text-ivory">
      <div className="container-editorial py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Link
              href={route(locale, "home")}
              className="relative block h-[34px] w-[155px]"
            >
              {/* Koyu zemin için beyaz siluet. */}
              <Image
                src="/images/arslan-hukuk-logo.png"
                alt={firm.name}
                fill
                sizes="155px"
                className="object-contain object-left brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">
              {dict.footer.tagline}
            </p>
          </div>

          <nav aria-label={dict.common.footerMenuLabel} className="md:col-span-3">
            <p className="label-eyebrow text-ivory/55">
              {dict.footer.menuHeading}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <Link
                    href={route(locale, key)}
                    className="text-ivory/75 transition-colors duration-300 hover:text-ivory"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="label-eyebrow text-ivory/55">
              {dict.footer.contactHeading}
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic leading-relaxed text-ivory/75">
              <p className="max-w-[16rem]">{contact.address.full}</p>
              <p className="flex flex-wrap gap-x-3">
                {contact.phones.map((phone, i) => (
                  <span key={phone.href} className="whitespace-nowrap">
                    <a
                      href={phone.href}
                      className="transition-colors duration-300 hover:text-ivory"
                    >
                      {phone.label}
                    </a>
                    {i < contact.phones.length - 1 && (
                      <span aria-hidden="true" className="pl-3 text-ivory/30">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <p className="text-ivory/60">
                {dict.footer.fax} {contact.fax}
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors duration-300 hover:text-ivory"
                >
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line-invert pt-8 text-xs text-ivory/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {firm.name}. {dict.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {LEGAL_KEYS.map((key) => (
              <li key={key}>
                <Link
                  href={route(locale, key)}
                  className="transition-colors duration-300 hover:text-ivory"
                >
                  {dict.legalNav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
