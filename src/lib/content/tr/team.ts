/**
 * Ekip — Türkçe metinler.
 *
 * Unvanlar, özgeçmiş metinleri, eğitim ve yabancı dil bilgileri
 * arslanhukuk.com.tr "Avukatlarımız" sayfasından birebir alınmıştır.
 * Özgeçmiş metninin içinde geçen olgular (doğum yılı, baroya kayıt yılı,
 * vekillik, bilirkişilik) `team.ts` içinde ayrıca alanlara çıkarılmıştır ki
 * her profil aynı düzende ve eksiksiz görünsün.
 */

import type { TeamMemberText } from "../team";

export const teamTextTr: Record<string, TeamMemberText> = {
  "seyit-arslan": {
    prefix: "Av.",
    role: "Kurucu",
    bio: [
      "1957 yılında doğan Seyit Arslan, İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra 1984 yılında İstanbul Barosu'na kayıtlı olarak avukatlık yapmaya başlamış, aynı yıl Arslan Hukuk Bürosu'nu kurmuştur.",
      "Seyit Arslan, ülkenin önde gelen kişi ve kurumlarına Ticaret Hukuku, Kira ve Gayrimenkul Hukuku, Borçlar Hukuku ile İdare ve Vergi Hukuku konularında danışmanlık yapmış ve yapmaya devam etmektedir.",
    ],
    education: ["İstanbul Üniversitesi Hukuk Fakültesi"],
    credentials: ["Arslan Hukuk Bürosu'nun kurucusu"],
    focus: [
      "Ticaret Hukuku",
      "Kira ve Gayrimenkul Hukuku",
      "Borçlar Hukuku",
      "İdare ve Vergi Hukuku",
    ],
  },
  "alper-arslan": {
    prefix: "Av.",
    role: "Avukat, Marka ve Patent Vekili",
    bio: [
      "1981 yılında doğan Alper Arslan, İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra ülkenin önde gelen uluslararası hukuk firmalarında çalışmış, 2006 yılında Arslan Hukuk Bürosu'nda çalışmaya başlamıştır.",
      "Alper Arslan aynı zamanda 2005 yılında Türk Standartları Enstitüsü nezdinde Marka ve Patent vekilliğine hak kazanmış olup; Fikri ve Sınai Haklar Hukuku, Uluslararası Ticaret ve Sözleşmeler Hukuku, Sigorta Hukuku, Rekabet Hukuku, Bilişim Hukuku, Tanıma ve Tenfiz ile Medeni Hukuk (boşanma, velayet, vesayet, miras vb.) ilişkin davalarda bilgi ve tecrübe sahibidir.",
    ],
    education: ["İstanbul Üniversitesi Hukuk Fakültesi"],
    languages: ["İngilizce"],
    credentials: ["Marka ve Patent Vekili — Türk Standartları Enstitüsü, 2005"],
    focus: [
      "Fikri ve Sınai Haklar Hukuku",
      "Uluslararası Ticaret ve Sözleşmeler Hukuku",
      "Sigorta Hukuku",
      "Rekabet Hukuku",
      "Bilişim Hukuku",
      "Tanıma ve Tenfiz",
      "Medeni Hukuk",
    ],
  },
  "polatkan-ermeydan": {
    prefix: "Av.",
    role: "Avukat",
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
  },
  "mehmet-cacan": {
    prefix: "Stj. Av.",
    role: "Stajyer Avukat",
    bio: [
      "2014 yılında Hukuk Fakültesi'nden mezun olan Mehmet Çaçan, avukatlık stajını hukuk büromuzda yapmaktadır.",
    ],
    education: ["Hukuk Fakültesi, 2014"],
    languages: ["İngilizce", "Almanca"],
  },
  "habibe-turkay": {
    role: "İcra ve İflas Birimi",
    bio: [
      "2014 yılından bu yana büromuz bünyesinde çalışan Habibe Türkay, icra ve iflas hukuku konusunda çalışmalarda bulunmaktadır.",
    ],
    focus: ["İcra ve İflas Hukuku"],
  },
  "perihan-altunsoy": {
    role: "Yönetici Asistanı",
    bio: [
      "2013 yılından bu yana büromuz bünyesinde çalışmakta olan Perihan Altunsoy, yönetici asistanlığı görevini sürdürmektedir.",
    ],
  },
};
