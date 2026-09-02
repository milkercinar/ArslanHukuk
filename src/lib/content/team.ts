/**
 * Ekip.
 *
 * İsimler, unvanlar, baro sicil numaraları, doğum yılları, mezuniyet
 * bilgileri, özgeçmiş metinleri ve yabancı dil bilgileri arslanhukuk.com.tr
 * "Avukatlarımız" sayfasından birebir alınmıştır. Özgeçmiş metninin içinde
 * geçen olgular (doğum yılı, baroya kayıt yılı, vekillik, bilirkişilik)
 * burada ayrıca alanlara çıkarılmıştır ki her profil aynı düzende ve eksiksiz
 * görünsün. Kaynakta bulunmayan hiçbir bilgi eklenmemiştir.
 */

export type TeamGroup = "avukatlar" | "buro";

export type TeamMember = {
  slug: string;
  /** Ada eklenen mesleki ön ek — "Av.", "Stj. Av." veya yok. */
  prefix?: string;
  name: string;
  role: string;
  group: TeamGroup;
  photo: string;
  /** Özgeçmişte belirtilen doğum yılı. */
  birthYear?: number;
  /** Baro sicil numarası ve bağlı olduğu baro. */
  barRegistration?: string;
  /** Baroya kayıtlı olarak avukatlığa başlama yılı. */
  admittedYear?: number;
  /** Büroya katılma yılı. */
  joinedYear?: number;
  bio: string[];
  education?: string[];
  languages?: string[];
  /** Vekillik, bilirkişilik gibi ayrıca belirtilmiş sıfatlar. */
  credentials?: string[];
  email?: string;
  /** Özgeçmişte adı geçen çalışma konuları. */
  focus?: string[];
  /** İlgili uzmanlık alanı sayfalarının slug'ları. */
  relatedAreas?: string[];
  /** Detay sayfası oluşturulacak mı. */
  hasProfile: boolean;
};

export const team: TeamMember[] = [
  {
    slug: "seyit-arslan",
    prefix: "Av.",
    name: "Seyit Arslan",
    role: "Kurucu",
    group: "avukatlar",
    photo: "/images/team/seyit-arslan.jpg",
    birthYear: 1957,
    barRegistration: "12194 — İstanbul Barosu",
    admittedYear: 1984,
    bio: [
      "1957 yılında doğan Seyit Arslan, İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra 1984 yılında İstanbul Barosu'na kayıtlı olarak avukatlık yapmaya başlamış, aynı yıl Arslan Hukuk Bürosu'nu kurmuştur.",
      "Seyit Arslan, ülkenin önde gelen kişi ve kurumlarına Ticaret Hukuku, Kira ve Gayrimenkul Hukuku, Borçlar Hukuku ile İdare ve Vergi Hukuku konularında danışmanlık yapmış ve yapmaya devam etmektedir.",
    ],
    education: ["İstanbul Üniversitesi Hukuk Fakültesi"],
    credentials: ["Arslan Hukuk Bürosu'nun kurucusu"],
    email: "av.seyitarslan@mynet.com",
    focus: [
      "Ticaret Hukuku",
      "Kira ve Gayrimenkul Hukuku",
      "Borçlar Hukuku",
      "İdare ve Vergi Hukuku",
    ],
    relatedAreas: [
      "ticaret-ve-uluslararasi-ticaret-hukuku",
      "kira-ve-gayrimenkul-hukuku",
      "idare-ve-vergi-hukuku",
    ],
    hasProfile: true,
  },
  {
    slug: "alper-arslan",
    prefix: "Av.",
    name: "Alper Arslan",
    role: "Avukat, Marka ve Patent Vekili",
    group: "avukatlar",
    photo: "/images/team/alper-arslan.jpg",
    birthYear: 1981,
    barRegistration: "30175 — İstanbul Barosu",
    joinedYear: 2006,
    bio: [
      "1981 yılında doğan Alper Arslan, İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra ülkenin önde gelen uluslararası hukuk firmalarında çalışmış, 2006 yılında Arslan Hukuk Bürosu'nda çalışmaya başlamıştır.",
      "Alper Arslan aynı zamanda 2005 yılında Türk Standartları Enstitüsü nezdinde Marka ve Patent vekilliğine hak kazanmış olup; Fikri ve Sınai Haklar Hukuku, Uluslararası Ticaret ve Sözleşmeler Hukuku, Sigorta Hukuku, Rekabet Hukuku, Bilişim Hukuku, Tanıma ve Tenfiz ile Medeni Hukuk (boşanma, velayet, vesayet, miras vb.) ilişkin davalarda bilgi ve tecrübe sahibidir.",
    ],
    education: ["İstanbul Üniversitesi Hukuk Fakültesi"],
    languages: ["İngilizce"],
    credentials: [
      "Marka ve Patent Vekili — Türk Standartları Enstitüsü, 2005",
    ],
    email: "alperarslan@istanbulbarosu.org.tr",
    focus: [
      "Fikri ve Sınai Haklar Hukuku",
      "Uluslararası Ticaret ve Sözleşmeler Hukuku",
      "Sigorta Hukuku",
      "Rekabet Hukuku",
      "Bilişim Hukuku",
      "Tanıma ve Tenfiz",
      "Medeni Hukuk",
    ],
    relatedAreas: [
      "fikri-ve-sinai-haklar-hukuku",
      "ticaret-ve-uluslararasi-ticaret-hukuku",
      "medeni-hukuk",
    ],
    hasProfile: true,
  },
  {
    slug: "polatkan-ermeydan",
    prefix: "Av.",
    name: "Polatkan Ermeydan",
    role: "Avukat",
    group: "avukatlar",
    photo: "/images/team/polatkan-ermeydan.jpg",
    birthYear: 1962,
    barRegistration: "14871 — İstanbul Barosu",
    admittedYear: 1987,
    bio: [
      "1962 yılında doğan Polatkan Ermeydan, 1986 yılında İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
      "1987 yılından bu yana İstanbul Barosu'na kayıtlı olarak avukatlık yapmakta olan Polatkan Ermeydan, İş Hukuku konusunda bilirkişilik yapmaktadır.",
      "Ayrıca Borçlar Hukuku, İcra ve İflas Hukuku, Kira ve Gayrimenkul Hukuku, Bankacılık ve Finans Hukuku ile Tüketici Hukuku konularında bilgi ve tecrübe sahibidir.",
    ],
    education: ["İstanbul Üniversitesi Hukuk Fakültesi, 1986"],
    languages: ["Almanca"],
    credentials: ["İş Hukuku alanında bilirkişi"],
    focus: [
      "İş Hukuku",
      "Borçlar Hukuku",
      "İcra ve İflas Hukuku",
      "Kira ve Gayrimenkul Hukuku",
      "Bankacılık ve Finans Hukuku",
      "Tüketici Hukuku",
    ],
    relatedAreas: [
      "is-ve-sosyal-guvenlik-hukuku",
      "icra-ve-iflas-hukuku",
      "bankacilik-ve-finans-hukuku",
    ],
    hasProfile: true,
  },
  {
    slug: "mehmet-cacan",
    prefix: "Stj. Av.",
    name: "Mehmet Çaçan",
    role: "Stajyer Avukat",
    group: "avukatlar",
    photo: "/images/team/mehmet-cacan.jpg",
    bio: [
      "2014 yılında Hukuk Fakültesi'nden mezun olan Mehmet Çaçan, avukatlık stajını hukuk büromuzda yapmaktadır.",
    ],
    education: ["Hukuk Fakültesi, 2014"],
    languages: ["İngilizce", "Almanca"],
    hasProfile: true,
  },
  {
    slug: "habibe-turkay",
    name: "Habibe Türkay",
    role: "İcra ve İflas Birimi",
    group: "buro",
    photo: "/images/team/habibe-turkay.jpg",
    joinedYear: 2014,
    bio: [
      "2014 yılından bu yana büromuz bünyesinde çalışan Habibe Türkay, icra ve iflas hukuku konusunda çalışmalarda bulunmaktadır.",
    ],
    focus: ["İcra ve İflas Hukuku"],
    hasProfile: false,
  },
  {
    slug: "perihan-altunsoy",
    name: "Perihan Altunsoy",
    role: "Yönetici Asistanı",
    group: "buro",
    photo: "/images/team/perihan-altunsoy.jpg",
    joinedYear: 2013,
    bio: [
      "2013 yılından bu yana büromuz bünyesinde çalışmakta olan Perihan Altunsoy, yönetici asistanlığı görevini sürdürmektedir.",
    ],
    hasProfile: false,
  },
];

export const lawyers = team.filter((m) => m.group === "avukatlar");
export const officeStaff = team.filter((m) => m.group === "buro");
export const profiledMembers = team.filter((m) => m.hasProfile);

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}

/** Tam görünen ad: "Av. Seyit Arslan". */
export function fullName(member: TeamMember): string {
  return member.prefix ? `${member.prefix} ${member.name}` : member.name;
}

/**
 * Profil sayfasındaki künye satırları. Yalnızca kaynakta karşılığı olan
 * alanlar döner; boş alan gösterilmez.
 */
export function profileFacts(
  member: TeamMember,
): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = [];

  if (member.barRegistration) {
    rows.push({ label: "Baro sicil no", value: member.barRegistration });
  }
  if (member.admittedYear) {
    rows.push({
      label: "Avukatlığa başlama",
      value: String(member.admittedYear),
    });
  }
  if (member.joinedYear) {
    rows.push({ label: "Büroya katılım", value: String(member.joinedYear) });
  }
  if (member.education?.length) {
    rows.push({ label: "Eğitim", value: member.education.join(", ") });
  }
  if (member.credentials?.length) {
    rows.push({ label: "Unvan ve görevler", value: member.credentials.join(", ") });
  }
  if (member.languages?.length) {
    rows.push({ label: "Yabancı dil", value: member.languages.join(", ") });
  }
  if (member.birthYear) {
    rows.push({ label: "Doğum yılı", value: String(member.birthYear) });
  }

  return rows;
}
