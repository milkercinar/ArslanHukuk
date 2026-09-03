import { getDictionary, route, type Locale } from "@/lib/i18n";
import ArrowLink from "@/components/ui/ArrowLink";

export default function NotFoundView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="flex min-h-[70svh] items-center bg-ivory pb-16 pt-28">
      <div className="container-editorial">
        <p className="label-eyebrow text-muted">404</p>
        <h1 className="mt-8 max-w-2xl font-serif text-statement font-light">
          {dict.notFound.heading}
        </h1>
        <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ink/70">
          {dict.notFound.body}
        </p>
        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-5">
          <ArrowLink href={route(locale, "home")}>{dict.nav.home}</ArrowLink>
          <ArrowLink href={route(locale, "practiceAreas")}>
            {dict.nav.practiceAreas}
          </ArrowLink>
          <ArrowLink href={route(locale, "contact")}>
            {dict.nav.contact}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
