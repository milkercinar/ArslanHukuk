/**
 * Practice areas — English texts.
 *
 * These are translations of the Turkish source in `tr/practice-areas.ts`.
 * They describe the scope of each field of law in general, neutral terms and
 * make no claim about outcomes, success rates or years of experience. Where a
 * Turkish legal concept has no exact English equivalent, the Turkish term is
 * given in brackets rather than replaced by a loose approximation.
 */

import type { PracticeArea } from "../practice-areas";

export const practiceAreasEn: PracticeArea[] = [
  {
    id: "ticaret",
    slug: "commercial-and-international-trade-law",
    title: "Commercial and International Trade Law",
    category: "Corporate",
    excerpt:
      "From company formation and share transfers to commercial contracts and cross-border work.",
    intro:
      "While business is going well, nobody reads the contract. It gets read when things go wrong. So when we draft one, what we weigh most is what it will say on that day.",
    body: [
      "Company formation, share transfers, changes to shareholding structures, and general assembly and board procedures make up part of our daily work. The other part is commercial contracts: drafting them, negotiating with the other side, and pursuing the disputes that arise after signature.",
      "Once a transaction crosses a border, a few questions come to the front: which country's law applies, where a dispute will be resolved, how payment and delivery will be secured. Settling these at the contract stage costs far less than litigating them afterwards. We advise clients doing business in Türkiye and abroad on these matters in both Turkish and English.",
    ],
    services: [
      "Corporate law",
      "Drafting and negotiating commercial contracts",
      "International trade and contract law",
      "Commercial dispute resolution",
      "Recognition and enforcement of foreign judgments",
      "Competition law",
    ],
  },
  {
    id: "gayrimenkul",
    slug: "real-estate-and-lease-law",
    title: "Real Estate and Lease Law",
    category: "Corporate",
    excerpt:
      "Lease agreements, eviction, title disputes and property transfers.",
    intro:
      "Property is among the things people hold on to longest. A lease can stay with you for ten years, a title deed for a lifetime. A small gap at the outset comes back years later as a large problem.",
    body: [
      "On the lease side, the work we see most often is drafting the agreement, adapting the rent to current conditions, eviction, and collecting accrued rent. In commercial leases it is worth setting out each party's obligations in detail, because the argument there usually turns not on the rent but on alterations, service charges or assignment.",
      "On the ownership side we work on reviewing title records before a purchase, sale and transfer transactions, dissolution of co-ownership, and claims for the cancellation and registration of title.",
    ],
    services: [
      "Drafting lease agreements",
      "Eviction and recovery of unpaid rent",
      "Title cancellation and registration proceedings",
      "Property sale and transfer transactions",
      "Dissolution of co-ownership",
    ],
  },
  {
    id: "icra",
    slug: "enforcement-and-insolvency-law",
    title: "Enforcement and Insolvency Law",
    category: "Corporate",
    excerpt:
      "Debt recovery, enforcement proceedings, attachment and insolvency.",
    intro:
      "In this field the most expensive mistake is usually delay. Deadlines are short and the windows for objection are narrow; opening the wrong type of proceeding, or missing a single date, can turn a sound claim into one that cannot be collected.",
    body: [
      "Enforcement proceedings with and without a judgment, actions to annul or set aside an objection, attachment and sale procedures, and third-party title claims over attached assets are our day-to-day work here.",
      "When a debtor's financial position deteriorates, bankruptcy and composition with creditors (konkordato) come into play. Because the creditor's path and the debtor's path run in opposite directions, we set a different strategy from the outset depending on which side you are on.",
    ],
    services: [
      "Enforcement proceedings with and without a judgment",
      "Annulment and setting aside of objections",
      "Attachment and sale procedures",
      "Third-party title claims",
      "Bankruptcy and composition proceedings",
    ],
  },
  {
    id: "is",
    slug: "employment-and-social-security-law",
    title: "Employment and Social Security Law",
    category: "Corporate",
    excerpt:
      "From hiring to termination, from employee entitlements to workplace accident files.",
    intro:
      "In employment law the outcome is often decided by procedure rather than by who is in the right. Even a well-founded termination can be held invalid because notice was served incorrectly or the employee's defence was never taken.",
    body: [
      "On the employer side we work on drafting employment contracts and internal workplace regulations, and on running termination processes step by step. When a dispute arises, claims for severance and notice pay, overtime, annual leave and other employee entitlements come to the fore.",
      "Reinstatement claims, claims arising from workplace accidents and occupational illness, and disputes under social security legislation also fall within this area. In a large share of employment cases mediation is a mandatory step before court; we account for that stage from the start.",
    ],
    services: [
      "Employment contracts and workplace regulations",
      "Managing termination processes",
      "Employee entitlements and compensation claims",
      "Reinstatement proceedings",
      "Workplace accident and occupational illness disputes",
      "Social security disputes",
    ],
  },
  {
    id: "fikri",
    slug: "intellectual-property-law",
    title: "Intellectual and Industrial Property Law",
    shortTitle: "Intellectual Property",
    category: "Corporate",
    excerpt:
      "Trade mark and patent registration, oppositions, licensing and infringement.",
    intro:
      "A brand's value accumulates over years, but the limits of its protection are drawn on the day it is registered. An application filed in the wrong class is of no use once your mark has become well known.",
    body: [
      "We handle the preparation of trade mark and patent applications, class selection, opposition to publication, and the examination of oppositions. Alper Arslan of our office qualified as a Trade Mark and Patent Attorney before the Turkish Standards Institution in 2005.",
      "Where a registered right is infringed, the determination, cessation and prevention of the infringement and the compensation claims arising from it come into play. Where you want to exploit the right commercially, the work turns to licence and assignment agreements.",
    ],
    services: [
      "Trade mark and patent applications",
      "Opposition to publication and opposition proceedings",
      "Trade mark and patent assignments, licence agreements",
      "Determination and prevention of infringement",
      "Information technology law",
    ],
  },
  {
    id: "medeni",
    slug: "civil-law",
    title: "Civil Law",
    category: "Individual",
    excerpt:
      "Divorce, custody, maintenance, matrimonial property, guardianship and inheritance.",
    intro:
      "In these files the other side is rarely a stranger. How the process is conducted therefore matters as much as the outcome; a file that hardens unnecessarily can leave lasting damage behind even when it is won.",
    body: [
      "Uncontested and contested divorce, custody and contact arrangements, maintenance, and the division of property acquired during the marriage are the main subjects here. Where one party is abroad, or where there is a foreign court judgment, recognition and enforcement becomes part of the work as well.",
      "On the inheritance side we work on certificates of inheritance, determination and division of the estate, claims for abatement and for collusive transfers by the deceased where reserved shares are at stake, and disputes arising from wills and inheritance agreements. Guardianship and trusteeship matters also fall within this area.",
    ],
    services: [
      "Divorce and liquidation of the matrimonial property regime",
      "Custody, maintenance and contact",
      "Guardianship and trusteeship",
      "Division of estates, abatement and estate administration",
      "Recognition and enforcement of foreign judgments",
    ],
  },
  {
    id: "idare",
    slug: "administrative-and-tax-law",
    title: "Administrative and Tax Law",
    category: "Corporate",
    excerpt:
      "Objections to administrative acts, annulment proceedings and tax disputes.",
    intro:
      "In a letter from a public authority the most critical piece of information is often not the text but the date of service. The deadlines are short and there is no going back once they pass, so the right course has to be chosen on the first day.",
    body: [
      "Annulment of administrative acts, full remedy actions for loss caused by the administration, objections to administrative fines, and applications concerning public procurement are among our work in this area.",
      "On the tax side there are settlement, correction and litigation routes against assessments and penalties; which one to take usually depends on the amount and on how the audit is developing. Handling a tax audit correctly from the outset also determines the ground on which any later case will be argued. Seyit Arslan, the founder of the office, advises in this field.",
    ],
    services: [
      "Annulment and full remedy actions",
      "Objections to administrative fines",
      "Challenges to tax assessments and penalties",
      "Tax audits and settlement procedures",
      "Applications under public procurement legislation",
    ],
  },
  {
    id: "bankacilik",
    slug: "banking-and-finance-law",
    title: "Banking and Finance Law",
    category: "Corporate",
    excerpt:
      "Loan agreements, mortgages and pledges, suretyship and insurance matters.",
    intro:
      "In a lending relationship the real negotiation ends not at the interest rate but at the security. The type of security, and how it will be turned into cash, decides in advance where each side will stand if things go badly.",
    body: [
      "We work on reviewing loan agreements before signature, on establishing security — mortgages and pledges above all — and on disputes arising from suretyship. Suretyship is one of the subjects contested most often afterwards, particularly where the personal liability of company shareholders is concerned.",
      "Claims for debt and compensation arising from banking transactions, disputes over consumer loans, and claims under insurance law are also handled within this area.",
    ],
    services: [
      "Loan agreements and security structures",
      "Mortgage and pledge transactions",
      "Disputes arising from suretyship",
      "Consumer law disputes",
      "Insurance law",
    ],
  },
];
