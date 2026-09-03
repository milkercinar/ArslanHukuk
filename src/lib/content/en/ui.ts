/**
 * English texts.
 *
 * Translated from the Turkish source in `tr/ui.ts`, which reproduces the
 * firm's existing copy. The founding year, the founder and the description of
 * the practice are preserved. Nothing that cannot be verified from the source
 * — years of experience, awards, client numbers, success rates — has been
 * added. The registered trade name is Turkish; "Arslan Law Office" is used as
 * its readable English equivalent in prose and page titles.
 */

import type { Dictionary } from "@/lib/i18n/dictionary";
import { contact } from "../site";

const FIRM_EN = "Arslan Law Office";

export const dictionaryEn: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    practiceAreas: "Practice Areas",
    team: "Our Team",
    contact: "Contact",
  },

  legalNav: {
    dataProtection: "Data Protection Notice",
    privacy: "Privacy",
    cookies: "Cookie Policy",
  },

  common: {
    firmName: FIRM_EN,
    skipToContent: "Skip to content",
    mainMenuLabel: "Main menu",
    mobileMenuLabel: "Mobile menu",
    footerMenuLabel: "Footer menu",
    menuOpen: "Menu",
    menuClose: "Close",
    scrollHint: "Scroll",
    breadcrumbLabel: "Breadcrumb",
    heroRegionLabel: "Introduction",
    homeLinkLabel: (firmName) => `${firmName} — home`,
    portraitAlt: (name) => `Portrait of ${name}`,
    profile: "Profile",
    allTeam: "The whole team",
    allPracticeAreas: "All practice areas",
    languageLabel: "Language",
  },

  footer: {
    menuHeading: "Menu",
    contactHeading: "Contact",
    tagline:
      "We have practised law and advised clients in Istanbul since 1982.",
    fax: "Fax",
    rights: "All rights reserved.",
  },

  home: {
    heroHeadlineLines: [
      "Everyone is equal before the law.",
      "What makes the difference is a good lawyer.",
    ],
    heroSupport:
      "We have been in Istanbul since 1982. We advise individuals and companies doing business in Türkiye and abroad, and conduct their litigation and enforcement proceedings.",
    heroPrimaryCta: "Our practice areas",
    heroSecondaryCta: "Get in touch",

    introLabel: FIRM_EN,
    introStatementLines: [
      "A legal problem",
      "is never only",
      "a legal problem.",
    ],
    introParagraphs: [
      "Behind it there is usually the running of a company, the order of a family, or the savings of a lifetime. That is why, before we take on a file, we try to understand what actually matters to you.",
      "Seyit Arslan founded the office in 1982. Our team has grown since then and the fields we work in have widened. The way we work has stayed the same.",
    ],
    introLink: "About us",

    practiceHeading: "Our practice areas.",

    statementLabel: "Our office",
    statementLines: [
      "We were founded in Istanbul.",
      "Our work reaches beyond its borders.",
    ],
    statementBody:
      "We serve individuals and institutions operating in Türkiye and abroad, in Turkish and in English.",

    valuesLabel: "Our approach",
    valuesHeadingLines: ["The principles that", "shape how we work."],
    values: [
      {
        title: "Depth in one field",
        body: "Each of our lawyers has gone deep in a particular area of law. Your file goes to the person who works in that area; not everyone handles everything.",
      },
      {
        title: "Continuity",
        body: "We have been the same office since 1982. A file you open today can still be found in the same place years from now.",
      },
      {
        title: "Working in two languages",
        body: "We handle advice and correspondence in Turkish and in English. There is no interpreter between us and our clients abroad.",
      },
      {
        title: "Cross-border files",
        body: "The affairs of companies doing business abroad, and of people living abroad, are familiar ground for this office.",
      },
      {
        title: "Outside Istanbul",
        body: "For matters in other cities we work through the offices we have long worked with there. You do not need to find a separate lawyer.",
      },
    ],

    teamEyebrow: "Our team",
    teamHeading: "You know from the outset who is handling your file.",

    contactLabel: "Contact",
    contactHeadlineLines: ["Tell us,", "let us look at it together."],
    contactBody:
      "Let us hear what stage your file is at and what matters most to you. Then we will set out the routes ahead of you plainly.",
    contactCta: "Get in touch",
  },

  about: {
    eyebrow: "About us",
    headlineLines: ["Alongside justice", "since 1982."],
    officeLabel: "The office",
    paragraphs: [
      "Our office was founded in 1982 by Seyit Arslan. It has worked without interruption ever since.",
      "Today we are a team of lawyers, each specialised in a field of their own. We serve individuals and institutions operating in Türkiye and abroad, in Turkish and in English.",
      "We work across a wide range: from company and international trade law to enforcement and insolvency, from lease and real estate to banking and finance, from employment law to intellectual and industrial property, from administrative and tax law to civil law. Consumer and competition law are also among our fields. Each of our lawyers has gone deep in one of these areas, and files are distributed accordingly.",
      "Our base is Istanbul. Through the connections we have built with law offices in many cities across the country, however, we can follow your files outside Istanbul as well.",
    ],
    pillars: ["Expertise.", "Continuity.", "Access."],
    valuesLabel: "Our approach",
  },

  practiceAreas: {
    eyebrow: "Practice Areas",
    titleLines: ["Different fields,", "the same working", "discipline."],
    lead: "The headings below are the areas in which we advise corporate and individual clients and conduct litigation. In each of them there is a lawyer of ours who works on that subject.",
    disclaimer:
      "The descriptions here are for general information and do not take the place of legal advice. Every file is assessed on its own facts.",
    servicesLabel: "Related services",
    lawyersLabel: "Lawyers in this area",
    detailDisclaimer:
      "The information on this page is general and does not take the place of legal advice. If you have a concrete matter in hand, write to us and let us talk.",
    nextLabel: "Next area",
  },

  team: {
    eyebrow: "Our team",
    titleLines: ["You know who", "is handling", "your file."],
    lead: "In our office each lawyer works in a different field of law, and your file goes to the person who works in that field. We conduct advice and litigation in Turkish and in English.",
    lawyersHeading: "Attorneys",
    staffHeading: "Office team",
    factsLabel: "Details",
    emailLabel: "Email",
    focusLabel: "Areas of work",
    relatedLabel: "Related practice areas",
    factLabels: {
      barRegistration: "Bar registration no",
      admitted: "Called to the bar",
      joined: "Joined the office",
      education: "Education",
      credentials: "Titles and appointments",
      languages: "Languages",
      birthYear: "Year of birth",
    },
  },

  contact: {
    eyebrow: "Contact",
    titleLines: ["Reach", "our office."],
    lead: "Tell us briefly what the situation is and we will come back to you. If you would rather speak directly, our telephone numbers are below.",
    addressLabel: "Address",
    phoneLabel: "Telephone",
    faxLabel: "Fax",
    emailLabel: "Email",
    barLabel: "Bar",
    barValue: "Istanbul Bar Association",
    formLabel: "Send a message",
    formHeading: "Write to us.",
    formIntro:
      "A few sentences about what happened is enough. We will clarify the rest when we talk.",
  },

  form: {
    name: "Full name",
    email: "Email",
    phone: "Telephone",
    subject: "Subject",
    message: "Message",
    optional: "optional",
    errors: {
      name: "Please enter your first and last name.",
      email: "Please enter a valid email address.",
      phone: "The telephone number looks incomplete.",
      subject: "Please write a short subject line.",
      message: "Could you describe your message in a little more detail?",
      consent: "You need to tick the consent box to continue.",
    },
    consentBefore: "I have read the ",
    consentLink: "Data Protection Notice",
    consentAfter:
      " and consent to my personal data being processed as described in it.",
    submit: "Send message",
    submitting: "Sending",
    deliveryError:
      "The message could not be sent. Please try again, or email us directly.",
    sentLabel: "Thank you",
    sentHeading: "We have your message.",
    sentBody:
      "We will read it and come back to you. If the matter cannot wait, you can also call the office.",
    sentAgain: "Write another message",
    disclaimer:
      "Completing this form does not create an attorney–client relationship; a retainer arises only under a separately signed agreement. For that reason we suggest you do not put confidential information in the form. If the matter is subject to a deadline, call us without waiting.",
  },

  legal: {
    dataProtection: {
      eyebrow: "Data Protection",
      titleLines: ["Notice on the", "protection of", "personal data."],
      lead: `This notice has been prepared by ${FIRM_EN} under Turkish Law No. 6698 on the Protection of Personal Data ("KVKK").`,
      sections: [
        {
          heading: "Data controller",
          paragraphs: [
            `The data controller under the KVKK is ${FIRM_EN}. The office address is ${contact.address.full}; the telephone number is ${contact.phones[0].label}; the electronic mail address is ${contact.email}.`,
          ],
        },
        {
          heading: "Personal data processed",
          paragraphs: [
            "Only the data you send us through the contact form on this website is processed:",
          ],
          list: [
            "Identity data: first and last name",
            "Contact data: email address and, where given, telephone number",
            "Message content: the subject line and message text you send through the form",
          ],
        },
        {
          heading: "Purposes of processing",
          paragraphs: [
            "This data is processed in order to assess your request, to reply to you, and to conduct the ensuing correspondence. Your data is not used for marketing purposes.",
          ],
        },
        {
          heading: "Legal basis",
          paragraphs: [
            "Your personal data is processed under Article 5/2 of the KVKK, on the grounds that processing is necessary for the establishment, exercise or protection of a right and that processing is necessary for our legitimate interests, and on the basis of your explicit consent.",
          ],
        },
        {
          heading: "Transfers",
          paragraphs: [
            "Your personal data may be transferred, only to the extent the service requires, to competent public authorities for the purpose of meeting legal obligations and to the service providers that supply our website and email infrastructure. It is not otherwise shared with third parties and is never sold.",
          ],
        },
        {
          heading: "Retention period",
          paragraphs: [
            "Your data is retained for as long as the purpose of processing requires and for the retention periods prescribed by the applicable legislation; at the end of that period it is deleted, destroyed or anonymised.",
          ],
        },
        {
          heading: "Your rights as a data subject",
          paragraphs: [
            "Under Article 11 of the KVKK you have the right to learn whether your personal data is being processed; to request information if it has been processed; to learn the purpose of processing and whether the data is used in accordance with that purpose; to request the correction of incomplete or inaccurate data; to request its erasure or destruction; to request that these operations be notified to third parties to whom the data has been transferred; and to claim compensation for any loss you suffer.",
            `You can send your requests to ${contact.email}, or in writing to ${contact.address.full}.`,
          ],
        },
        {
          heading: "Attorney–client relationship",
          paragraphs: [
            "Completing the contact form and sending us a message does not create an attorney–client relationship. A retainer arises only under a written agreement drawn up separately. For that reason we suggest you do not include confidential or sensitive information in the form.",
          ],
        },
      ],
    },

    privacy: {
      eyebrow: "Privacy",
      titleLines: ["Privacy", "notice."],
      lead: "This notice explains what information is collected when you visit our website, and how it is used.",
      sections: [
        {
          heading: "Information collected",
          paragraphs: [
            "When you use our website simply to browse, you are not asked for any identifying information. Only when you complete the contact form is the information in that form sent to us.",
          ],
        },
        {
          heading: "Use of information",
          paragraphs: [
            "The information you send is used solely to respond to your request. It is not used for advertising or marketing, and is not sold to third parties.",
          ],
        },
        {
          heading: "Professional secrecy and confidentiality",
          paragraphs: [
            "The duty of professional secrecy that attaches to the practice of law applies to all information sent to our office. That said, messages sent through the form do not create an attorney–client relationship; we therefore suggest you share sensitive information in a direct conversation rather than through the form.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "Data sent through the website is transmitted over an encrypted connection. Even so, no transmission over the internet can be guaranteed to be absolutely secure.",
          ],
        },
        {
          heading: "External links",
          paragraphs: [
            "Where our site links to third-party sites, our office is not responsible for the content or the privacy practices of those sites.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `For questions about this notice you can write to ${contact.email} or reach the office on ${contact.phones[0].label}.`,
          ],
        },
      ],
    },

    cookies: {
      eyebrow: "Cookies",
      titleLines: ["Cookie", "policy."],
      lead: "This policy explains how cookies are used on our website.",
      sections: [
        {
          heading: "What is a cookie?",
          paragraphs: [
            "Cookies are small text files saved to your device through your browser when you visit a website. They are used to make the site work and to remember your preferences.",
          ],
        },
        {
          heading: "Cookies used on our site",
          paragraphs: [
            "Our website uses no cookies other than the strictly necessary ones required for it to work. No advertising, profiling or third-party tracking cookies are used.",
          ],
          list: [
            "Strictly necessary cookies: these make the site's basic functions work and cannot be switched off.",
          ],
        },
        {
          heading: "Managing cookies",
          paragraphs: [
            "You can delete or block cookies through your browser settings. If strictly necessary cookies are blocked, parts of the site may not work as expected.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "This policy may be updated if the technologies used on the site change. The current text is always published on this page.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `For questions about our use of cookies you can write to ${contact.email}.`,
          ],
        },
      ],
    },
  },

  notFound: {
    heading: "We could not find the page you were looking for.",
    body: "The address may have changed, or the page may have been removed. You can carry on from the links below.",
  },

  meta: {
    siteDescription:
      "Founded in 1982 and based in Istanbul, Arslan Law Office advises and represents clients in commercial, real estate, enforcement and insolvency, employment, intellectual property, civil, administrative and tax, and banking law.",
    siteDescriptionShort:
      "Legal advice and representation in Istanbul since 1982.",
    home: {
      title: `${FIRM_EN} | Istanbul`,
      description:
        "Founded in 1982 and based in Istanbul, Arslan Law Office advises and represents clients in commercial, real estate, enforcement and insolvency, employment, intellectual property, civil, administrative and tax, and banking law.",
    },
    about: {
      title: "About",
      description:
        "Founded in 1982 by Seyit Arslan and based in Istanbul, Arslan Law Office provides legal advice and representation in Turkish and English to individuals and institutions operating in Türkiye and abroad.",
      ogDescription:
        "The founding, practice areas and approach of Arslan Law Office, established in 1982.",
    },
    practiceAreas: {
      title: "Practice Areas",
      description:
        "We work in commercial and international trade, real estate and lease, enforcement and insolvency, employment and social security, intellectual property, civil, administrative and tax, and banking and finance law.",
      ogDescription:
        "The fields of law in which Arslan Law Office advises and conducts litigation.",
    },
    team: {
      title: "Our Team",
      description:
        "The attorneys and office team of Arslan Law Office. Each of our lawyers is specialised in a different field of law.",
      ogDescription: "The attorneys and office team of Arslan Law Office.",
    },
    contact: { title: "Contact" },
    dataProtection: {
      title: "Data Protection Notice",
      description: `${FIRM_EN} notice on the protection of personal data.`,
    },
    privacy: {
      title: "Privacy",
      description: `${FIRM_EN} website privacy notice.`,
    },
    cookies: {
      title: "Cookie Policy",
      description: `${FIRM_EN} website cookie policy.`,
    },
    notFound: { title: "Page not found" },
  },
};
