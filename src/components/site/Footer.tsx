import Link from "next/link";
import { contact, firm, legalNav, primaryNav } from "@/lib/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-black text-ivory">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="label-eyebrow flex items-baseline gap-[0.45em] text-[0.85rem]"
            >
              <span className="font-semibold">{firm.wordmark.first}</span>
              <span className="font-normal opacity-70">
                {firm.wordmark.second}
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/55">
              {firm.foundedYear} yılında kurulan Arslan Hukuk Bürosu, İstanbul
              merkezli olarak hukuki danışmanlık ve avukatlık hizmeti
              vermektedir.
            </p>
          </div>

          <nav aria-label="Alt menü" className="md:col-span-3">
            <p className="label-eyebrow text-ivory/55">Menü</p>
            <ul className="mt-6 space-y-3 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivory/75 transition-colors duration-300 hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="label-eyebrow text-ivory/55">İletişim</p>
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
              <p className="text-ivory/60">Faks {contact.fax}</p>
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

        <div className="mt-20 flex flex-col gap-5 border-t border-line-invert pt-8 text-xs text-ivory/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {firm.name}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-300 hover:text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
