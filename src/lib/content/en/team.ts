/**
 * Team — English texts.
 *
 * Translated from the Turkish source in `tr/team.ts`, which reproduces the
 * biographies published on arslanhukuk.com.tr. Nothing has been added that is
 * not in the source. The Turkish honorific "Av." is dropped in English, where
 * the role line already states that the person is an attorney; the sentences
 * are written without personal pronouns, as in the Turkish original.
 */

import type { TeamMemberText } from "../team";

export const teamTextEn: Record<string, TeamMemberText> = {
  "seyit-arslan": {
    role: "Founder",
    bio: [
      "Born in 1957, Seyit Arslan graduated from Istanbul University Faculty of Law and began practising in 1984 as a member of the Istanbul Bar Association, founding Arslan Law Office in the same year.",
      "Seyit Arslan has advised, and continues to advise, leading individuals and institutions in Türkiye on commercial law, real estate and lease law, the law of obligations, and administrative and tax law.",
    ],
    education: ["Istanbul University Faculty of Law"],
    credentials: ["Founder of Arslan Law Office"],
    focus: [
      "Commercial Law",
      "Real Estate and Lease Law",
      "Law of Obligations",
      "Administrative and Tax Law",
    ],
  },
  "alper-arslan": {
    role: "Attorney, Trade Mark and Patent Attorney",
    bio: [
      "Born in 1981, Alper Arslan graduated from Istanbul University Faculty of Law, worked at leading international law firms in Türkiye, and joined Arslan Law Office in 2006.",
      "Alper Arslan also qualified as a Trade Mark and Patent Attorney before the Turkish Standards Institution in 2005, and has knowledge and experience in intellectual and industrial property law, international trade and contract law, insurance law, competition law, information technology law, recognition and enforcement of foreign judgments, and civil law matters such as divorce, custody, guardianship and inheritance.",
    ],
    education: ["Istanbul University Faculty of Law"],
    languages: ["English"],
    credentials: [
      "Trade Mark and Patent Attorney — Turkish Standards Institution, 2005",
    ],
    focus: [
      "Intellectual and Industrial Property Law",
      "International Trade and Contract Law",
      "Insurance Law",
      "Competition Law",
      "Information Technology Law",
      "Recognition and Enforcement",
      "Civil Law",
    ],
  },
  "polatkan-ermeydan": {
    role: "Attorney",
    bio: [
      "Born in 1962, Polatkan Ermeydan graduated from Istanbul University Faculty of Law in 1986.",
      "A member of the Istanbul Bar Association in practice since 1987, Polatkan Ermeydan serves as a court-appointed expert in employment law.",
      "Polatkan Ermeydan also has knowledge and experience in the law of obligations, enforcement and insolvency law, real estate and lease law, banking and finance law, and consumer law.",
    ],
    education: ["Istanbul University Faculty of Law, 1986"],
    languages: ["German"],
    credentials: ["Court-appointed expert in employment law"],
    focus: [
      "Employment Law",
      "Law of Obligations",
      "Enforcement and Insolvency Law",
      "Real Estate and Lease Law",
      "Banking and Finance Law",
      "Consumer Law",
    ],
  },
  "mehmet-cacan": {
    role: "Trainee Lawyer",
    bio: [
      "Mehmet Çaçan graduated from law school in 2014 and is completing the compulsory legal traineeship at our office.",
    ],
    education: ["Faculty of Law, 2014"],
    languages: ["English", "German"],
  },
  "habibe-turkay": {
    role: "Enforcement and Insolvency Unit",
    bio: [
      "Habibe Türkay has worked at our office since 2014, on enforcement and insolvency matters.",
    ],
    focus: ["Enforcement and Insolvency Law"],
  },
  "perihan-altunsoy": {
    role: "Executive Assistant",
    bio: [
      "Perihan Altunsoy has worked at our office since 2013 and serves as executive assistant.",
    ],
  },
};
