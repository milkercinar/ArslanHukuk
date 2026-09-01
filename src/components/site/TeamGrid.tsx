import Image from "next/image";
import Link from "next/link";
import { fullName, type TeamMember } from "@/lib/content/team";
import Reveal from "@/components/ui/Reveal";

/**
 * Ekip kartları. Fotoğraflar büronun kendi arşivinden gelir; stok görsel
 * kullanılmaz. Üzerine gelindiğinde görsel yalnızca %2 büyür.
 */
export default function TeamGrid({
  members,
  columns = 2,
}: {
  members: TeamMember[];
  columns?: 2 | 3;
}) {
  const grid =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2";

  return (
    <ul className={`grid grid-cols-1 gap-x-8 gap-y-16 ${grid}`}>
      {members.map((member, i) => {
        const card = (
          <>
            <div className="relative overflow-hidden bg-ivory-deep">
              <Image
                src={member.photo}
                alt={`${fullName(member)} portresi`}
                width={710}
                height={532}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-4/3 w-full object-cover object-center grayscale-[0.15] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
              />
            </div>

            <div className="mt-6">
              <p className="label-eyebrow text-muted">{member.role}</p>
              <h3 className="mt-3 font-serif text-[1.5rem] font-light leading-tight md:text-[1.7rem]">
                {fullName(member)}
              </h3>
              {member.barRegistration && (
                <p className="mt-2 text-xs text-muted">
                  {member.barRegistration}
                </p>
              )}
              {member.hasProfile && (
                <span className="mt-5 inline-flex items-baseline gap-2 text-sm text-ink/70 transition-colors duration-500 group-hover:text-ink">
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
          </>
        );

        return (
          <Reveal as="li" key={member.slug} delay={(i % 3) * 0.08}>
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
  );
}
