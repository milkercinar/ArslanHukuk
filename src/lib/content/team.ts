/**
 * Ekip.
 *
 * İsimler, baro sicil numaraları, doğum yılları, mezuniyet yılları ve
 * e-posta adresleri arslanhukuk.com.tr "Avukatlarımız" sayfasından birebir
 * alınmıştır. Bunlar dile bağlı olmadığı için burada tek yerde durur;
 * unvan, özgeçmiş, eğitim ve çalışma konusu metinleri `tr/team.ts` ve
 * `en/team.ts` dosyalarındadır. Kaynakta bulunmayan hiçbir bilgi
 * eklenmemiştir.
 */

import type { Locale } from "@/lib/i18n/config";
import type { PracticeAreaId } from "./practice-areas";
import { teamTextTr } from "./tr/team";
import { teamTextEn } from "./en/team";

export type TeamGroup = "avukatlar" | "buro";

/** Dile bağlı olmayan künye verisi. */
type TeamMemberBase = {
  slug: string;
  name: string;
  group: TeamGroup;
  photo: string;
  /** Özgeçmişte belirtilen doğum yılı. */
  birthYear?: number;
  /** Baro sicil numarası. Bağlı olduğu baronun adı çeviriden gelir. */
  barNumber?: string;
  /** Baroya kayıtlı olarak avukatlığa başlama yılı. */
  admittedYear?: number;
  /** Büroya katılma yılı. */
  joinedYear?: number;
  email?: string;
  /** İlgili uzmanlık alanları — dilden bağımsız kimlikler. */
  relatedAreas?: PracticeAreaId[];
  /** Detay sayfası oluşturulacak mı. */
  hasProfile: boolean;
};

/** Bir kişinin çevrilen metinleri. */
export type TeamMemberText = {
  /** Ada eklenen mesleki ön ek. İngilizce'de boştur. */
  prefix?: string;
  role: string;
  bio: string[];
  education?: string[];
  languages?: string[];
  /** Vekillik, bilirkişilik gibi ayrıca belirtilmiş sıfatlar. */
  credentials?: string[];
  /** Özgeçmişte adı geçen çalışma konuları. */
  focus?: string[];
};

export type TeamMember = TeamMemberBase &
  TeamMemberText & {
    /** "12194 — İstanbul Barosu" biçiminde birleştirilmiş sicil satırı. */
    barRegistration?: string;
  };

const BASE: TeamMemberBase[] = [
  {
    slug: "seyit-arslan",
    name: "Seyit Arslan",
    group: "avukatlar",
    photo: "/images/team/seyit-arslan.jpg",
    birthYear: 1957,
    barNumber: "12194",
    admittedYear: 1984,
    email: "av.seyitarslan@mynet.com",
    relatedAreas: ["ticaret", "gayrimenkul", "idare"],
    hasProfile: true,
  },
  {
    slug: "alper-arslan",
    name: "Alper Arslan",
    group: "avukatlar",
    photo: "/images/team/alper-arslan.jpg",
    birthYear: 1981,
    barNumber: "30175",
    joinedYear: 2006,
    email: "alperarslan@istanbulbarosu.org.tr",
    relatedAreas: ["fikri", "ticaret", "medeni"],
    hasProfile: true,
  },
  {
    slug: "polatkan-ermeydan",
    name: "Polatkan Ermeydan",
    group: "avukatlar",
    photo: "/images/team/polatkan-ermeydan.jpg",
    birthYear: 1962,
    barNumber: "14871",
    admittedYear: 1987,
    relatedAreas: ["is", "icra", "bankacilik"],
    hasProfile: true,
  },
  {
    slug: "mehmet-cacan",
    name: "Mehmet Çaçan",
    group: "avukatlar",
    photo: "/images/team/mehmet-cacan.jpg",
    hasProfile: true,
  },
  {
    slug: "habibe-turkay",
    name: "Habibe Türkay",
    group: "buro",
    photo: "/images/team/habibe-turkay.jpg",
    joinedYear: 2014,
    hasProfile: false,
  },
  {
    slug: "perihan-altunsoy",
    name: "Perihan Altunsoy",
    group: "buro",
    photo: "/images/team/perihan-altunsoy.jpg",
    joinedYear: 2013,
    hasProfile: false,
  },
];

const TEXT: Record<Locale, Record<string, TeamMemberText>> = {
  tr: teamTextTr,
  en: teamTextEn,
};

/** O dildeki baro adı — sicil satırında kullanılır. */
const BAR_NAME: Record<Locale, string> = {
  tr: "İstanbul Barosu",
  en: "Istanbul Bar Association",
};

function compose(locale: Locale, base: TeamMemberBase): TeamMember {
  const text = TEXT[locale][base.slug];
  return {
    ...base,
    ...text,
    barRegistration: base.barNumber
      ? `${base.barNumber} — ${BAR_NAME[locale]}`
      : undefined,
  };
}

export function getTeam(locale: Locale): TeamMember[] {
  return BASE.map((member) => compose(locale, member));
}

export function getLawyers(locale: Locale): TeamMember[] {
  return getTeam(locale).filter((m) => m.group === "avukatlar");
}

export function getOfficeStaff(locale: Locale): TeamMember[] {
  return getTeam(locale).filter((m) => m.group === "buro");
}

export function getProfiledMembers(locale: Locale): TeamMember[] {
  return getTeam(locale).filter((m) => m.hasProfile);
}

/** Detay sayfası oluşturulacak kişilerin adres parçaları — dilden bağımsız. */
export const profiledSlugs = BASE.filter((m) => m.hasProfile).map(
  (m) => m.slug,
);

export function getTeamMember(
  locale: Locale,
  slug: string,
): TeamMember | undefined {
  const base = BASE.find((m) => m.slug === slug);
  return base ? compose(locale, base) : undefined;
}

/** Tam görünen ad: Türkçe'de "Av. Seyit Arslan", İngilizce'de "Seyit Arslan". */
export function fullName(member: TeamMember): string {
  return member.prefix ? `${member.prefix} ${member.name}` : member.name;
}

/** Profil sayfasındaki künye satırlarının başlıkları. */
export type ProfileFactLabels = {
  barRegistration: string;
  admitted: string;
  joined: string;
  education: string;
  credentials: string;
  languages: string;
  birthYear: string;
};

/**
 * Profil sayfasındaki künye satırları. Yalnızca kaynakta karşılığı olan
 * alanlar döner; boş alan gösterilmez.
 */
export function profileFacts(
  member: TeamMember,
  labels: ProfileFactLabels,
): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = [];

  if (member.barRegistration) {
    rows.push({ label: labels.barRegistration, value: member.barRegistration });
  }
  if (member.admittedYear) {
    rows.push({ label: labels.admitted, value: String(member.admittedYear) });
  }
  if (member.joinedYear) {
    rows.push({ label: labels.joined, value: String(member.joinedYear) });
  }
  if (member.education?.length) {
    rows.push({ label: labels.education, value: member.education.join(", ") });
  }
  if (member.credentials?.length) {
    rows.push({
      label: labels.credentials,
      value: member.credentials.join(", "),
    });
  }
  if (member.languages?.length) {
    rows.push({ label: labels.languages, value: member.languages.join(", ") });
  }
  if (member.birthYear) {
    rows.push({ label: labels.birthYear, value: String(member.birthYear) });
  }

  return rows;
}
