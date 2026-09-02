import Image from "next/image";
import Link from "next/link";
import { fullName, team } from "@/lib/content/team";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";

/**
 * Yatay kaydırılan avukat kartları. Bilgi normalde görselin altında bir
 * çizgiye sıkışmış hâlde durur; üzerine gelindiğinde alttan yukarı doğru
 * büyüyen koyu bir bar açılır ve avukat hakkındaki bilgileri gösterir.
 */
export default function TeamPreview() {
  return (
    <section className="bg-ivory py-20 md:py-28" aria-labelledby="ekip-baslik">
      <div className="container-editorial">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="label-eyebrow text-muted">Ekibimiz</p>
            <h2
              id="ekip-baslik"
              className="mt-6 max-w-xl font-serif text-title font-light"
            >
              Dosyanızla kimin ilgilendiğini baştan bilirsiniz.
            </h2>
          </div>
          <ArrowLink href="/ekibimiz">Tüm ekip</ArrowLink>
        </Reveal>
      </div>

      <div className="container-editorial">
        <ul className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] snap-x snap-mandatory md:gap-6 [&::-webkit-scrollbar]:hidden">
          {team.map((member, i) => {
            const card = (
              <>
                <div className="relative aspect-[3/4] overflow-hidden bg-ivory-deep">
                  <Image
                    src={member.photo}
                    alt={`${fullName(member)} portresi`}
                    width={710}
                    height={947}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 30vw"
                    className="h-full w-full object-cover object-center grayscale-[0.15] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-x-0 bottom-0 grid grid-rows-[auto_0fr] bg-ink/95 px-6 pt-5 transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[auto_1fr]">
                    <div className="pb-5">
                      <p className="label-eyebrow text-ivory/55">
                        {member.role}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.3rem] font-light leading-tight text-ivory md:text-[1.5rem]">
                        {fullName(member)}
                      </h3>
                    </div>

                    <div className="overflow-hidden">
                      <div className="pb-6">
                        {member.barRegistration && (
                          <p className="text-xs text-ivory/50">
                            {member.barRegistration}
                          </p>
                        )}
                        {member.hasProfile && (
                          <span className="mt-4 inline-flex items-baseline gap-2 text-sm text-ivory/80 transition-colors duration-500 group-hover:text-ivory">
                            Profil
                            <span
                              aria-hidden="true"
                              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
                            >
                              →
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );

            return (
              <Reveal
                as="li"
                key={member.slug}
                delay={(i % 3) * 0.08}
                className="w-[80%] shrink-0 snap-start sm:w-[55%] lg:w-[30%]"
              >
                {member.hasProfile ? (
                  <Link href={`/ekibimiz/${member.slug}`} className="group block">
                    {card}
                  </Link>
                ) : (
                  <div className="group">{card}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
