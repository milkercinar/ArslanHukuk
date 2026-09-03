import { getLawyers, getOfficeStaff } from "@/lib/content/team";
import { getDictionary, type Locale } from "@/lib/i18n";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import TeamGrid from "@/components/site/TeamGrid";

export default function TeamView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.team.eyebrow}
        titleLines={dict.team.titleLines}
        lead={dict.team.lead}
        align="wide"
        image="/images/sahne/ekibimiz.jpg"
        overlay="koyu"
      />

      <section
        className="bg-ivory pb-16 md:pb-24"
        aria-labelledby="avukatlar-baslik"
      >
        <div className="container-editorial">
          <Reveal className="mb-10 border-t border-line pt-8 md:mb-14">
            <h2 id="avukatlar-baslik" className="label-eyebrow text-muted">
              {dict.team.lawyersHeading}
            </h2>
          </Reveal>

          <TeamGrid locale={locale} members={getLawyers(locale)} columns={2} />
        </div>
      </section>

      <section
        className="bg-ivory pb-20 md:pb-28"
        aria-labelledby="buro-baslik"
      >
        <div className="container-editorial">
          <Reveal className="mb-10 border-t border-line pt-8 md:mb-14">
            <h2 id="buro-baslik" className="label-eyebrow text-muted">
              {dict.team.staffHeading}
            </h2>
          </Reveal>

          <TeamGrid
            locale={locale}
            members={getOfficeStaff(locale)}
            columns={3}
          />
        </div>
      </section>
    </>
  );
}
