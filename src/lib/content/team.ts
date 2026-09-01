/**
 * Ekip.
 *
 * İsimler, unvanlar, baro sicil numaraları, doğum yılları, mezuniyet
 * bilgileri, özgeçmiş metinleri ve yabancı dil bilgileri arslanhukuk.com.tr
 * "Avukatlarımız" sayfasından birebir alınmıştır. Sayfada yer almayan hiçbir
 * bilgi (ödül, üyelik, ek eğitim vb.) eklenmemiştir.
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
  /** Sicil bilgisi yalnızca sitede açıkça belirtilen kişiler için vardır. */
  barRegistration?: string;
  bio: string[];
  education?: string[];
  languages?: string[];
  email?: string;
  /** Özgeçmişte adı geçen çalışma konuları. */
  focus?: string[];
  /** İlgili uzmanlık alanı sayfalarının slug'ları. */
  relatedAreas?: string[];
  /** Detay sayfası oluşturulacak mı — yeterli bilgi olan kişiler için. */
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
    barRegistration: "Baro Sicil No: 12194 (İstanbul Barosu)",
    bio: [
      "1957 yılında doğan Seyit Arslan, İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra 1984 yılında İstanbul Barosu'na kayıtlı olarak avukatlık yapmaya başlamış, aynı yıl Arslan Hukuk Bürosu'nu kurmuştur.",
      "Seyit Arslan, ülkenin önde gelen kişi ve kurumlarına Ticaret Hukuku, Kira ve Gayrimenkul Hukuku, Borçlar Hukuku ile İdare ve Vergi Hukuku konularında danışmanlık yapmış ve yapmaya devam etmektedir.",
    ],
    education: ["İstanbul Üniversitesi Hukuk Fakültesi"],
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
    barRegistration: "Baro Sicil No: 30175 (İstanbul Barosu)",
    bio: [
      "1981 yılında doğan Alper Arslan, İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra ülkenin önde gelen uluslararası hukuk firmalarında çalışmış, 2006 yılında Arslan Hukuk Bürosu'nda çalışmaya başlamıştır.",
      "Alper Arslan aynı zamanda 2005 yılında Türk Standartları Enstitüsü nezdinde Marka ve Patent vekilliğine hak kazanmış olup; Fikri ve Sınai Haklar Hukuku, Uluslararası Ticaret ve Sözleşmeler Hukuku, Sigorta Hukuku, Rekabet Hukuku, Bilişim Hukuku, Tanıma ve Tenfiz ile Medeni Hukuk (boşanma, velayet, vesayet, miras vb.) ilişkin davalarda bilgi ve tecrübe sahibidir.",
    ],
    education: ["İstanbul Üniversitesi Hukuk Fakültesi"],
    languages: ["İngilizce"],
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
    barRegistration: "Baro Sicil No: 14871 (İstanbul Barosu)",
    bio: [
      "1962 yılında doğan Polatkan Ermeydan, 1986 yılında İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
      "1987 yılından bu yana İstanbul Barosu'na kayıtlı olarak avukatlık yapmakta olan Polatkan Ermeydan, İş Hukuku konusunda bilirkişilik yapmaktadır.",
      "Ayrıca Borçlar Hukuku, İcra ve İflas Hukuku, Kira ve Gayrimenkul Hukuku, Bankacılık ve Finans Hukuku ile Tüketici Hukuku konularında bilgi ve tecrübe sahibidir.",
    ],
    education: ["İstanbul Üniversitesi Hukuk Fakültesi (1986)"],
    languages: ["Almanca"],
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
    education: ["Hukuk Fakültesi (2014)"],
    languages: ["İngilizce", "Almanca"],
    hasProfile: true,
  },
  {
    slug: "habibe-turkay",
    name: "Habibe Türkay",
    role: "İcra ve İflas Birimi",
    group: "buro",
    photo: "/images/team/habibe-turkay.jpg",
    bio: [
      "2014 yılından bu yana büromuz bünyesinde çalışan Habibe Türkay, icra ve iflas hukuku konusunda çalışmalarda bulunmaktadır.",
    ],
    hasProfile: false,
  },
  {
    slug: "perihan-altunsoy",
    name: "Perihan Altunsoy",
    role: "Yönetici Asistanı",
    group: "buro",
    photo: "/images/team/perihan-altunsoy.jpg",
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
