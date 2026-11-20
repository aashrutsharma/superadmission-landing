// Content constants for the Superadmission landing site

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export interface Stat {
  number: string;
  label: string;
  subLabel?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Superadmission?",
    answer:
      "Superadmission is a proposed unified digital public infrastructure for Indian college admissions. It connects students, institutions, and counselling authorities through a shared protocol built on Aadhaar, DigiLocker, and APAAR.",
  },
  {
    question: "Who is Superadmission for?",
    answer:
      "Students navigating competitive counsellings, counselling authorities running admission rounds, institutions managing seat allocations, and policy makers working on India's higher education infrastructure.",
  },
  {
    question: "What is PraveshAI?",
    answer:
      "PraveshAI is the AI guidance layer of Superadmission. It helps students understand their options, compare colleges, check eligibility, and communicate with counselling authorities. It works from the student's verified profile.",
  },
  {
    question: "What is Manifest?",
    answer:
      "Manifest is a neutral, verified repository of every degree-granting institution in India. No paid listings, no sponsored placements. Just verified data: seats, branches, approval status, cutoffs, and fees.",
  },
  {
    question: "Is Superadmission affiliated with the government?",
    answer:
      "Superadmission is a proposed protocol aligned with India Stack, Digital India, and DPDP guidelines. It is not currently a government entity, but is designed for adoption by existing government counselling bodies.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "digital-spot-round",
    title: "How counselling authorities can run a fully digital spot round",
    author: "Superadmission Team",
    date: "Nov 2026",
    readTime: "6 min read",
    excerpt:
      "Spot rounds are notoriously manual. Here is a blueprint for running them entirely online, with real-time seat updates and a full audit trail.",
  },
  {
    slug: "apaar-and-admissions",
    title: "What APAAR means for college admissions in India",
    author: "Superadmission Team",
    date: "Oct 2026",
    readTime: "5 min read",
    excerpt:
      "APAAR is India's academic bank of credits. We explore what it means for the verification layer of competitive counsellings.",
  },
  {
    slug: "understanding-josaa",
    title: "Understanding JoSAA: how 50,000+ seats get allocated in 6 rounds",
    author: "Superadmission Team",
    date: "Sep 2026",
    readTime: "8 min read",
    excerpt:
      "JoSAA is one of the most complex seat allocation processes in the world. We break down how the algorithm works, and where it can be made more transparent.",
  },
];

export const STATS: Stat[] = [
  {
    number: "1.5L+",
    label: "Students served",
    subLabel: "Across all integrated counsellings",
  },
  {
    number: "12",
    label: "Counsellings integrated",
    subLabel: "Central and state bodies",
  },
  {
    number: "47",
    label: "Rounds digitized",
    subLabel: "Allocation rounds run on Superadmission",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "PraveshAI",
    description:
      "PraveshAI is the AI counsellor layer of Superadmission. It answers student questions about eligibility, cutoffs, college comparisons, and document requirements. It drafts emails to counselling authorities and pulls verified records directly from the student's Superadmission profile.",
  },
  {
    title: "Manifest",
    description:
      "Manifest is Superadmission's neutral college intelligence layer. It holds verified data on every degree-granting institution in India, including seats, branches, approval status, historical cutoffs, and fee structures. No paid listings. No sponsored placements.",
  },
  {
    title: "Digital Spot Round",
    description:
      "The Digital Spot Round environment lets counselling authorities run live allocation rounds online. Seats update in real time. Students see their status as decisions are made. Authorities get a full audit trail.",
  },
];

export const WORKS_WITH = [
  "DigiLocker",
  "Aadhaar",
  "APAAR",
  "NTA",
  "Digital India",
];

export const CHANGELOG_ENTRIES = [
  {
    version: "v0.9",
    date: "November 2026",
    title: "PraveshAI enters public beta",
    changes: [
      "PraveshAI is now available to students in the Superadmission playground",
      "College comparison now supports up to 10 institutions side by side",
      "Document checklist generation from student profile",
      "Manifest updated with 2026 NAAC accreditation data",
      "JoSAA round 7 data integrated",
    ],
  },
  {
    version: "v0.8",
    date: "October 2026",
    title: "Digital Spot Round pilot with JAC Delhi",
    changes: [
      "Digital Spot Round ran live with JAC Delhi for 8 rounds",
      "Real-time seat matrix updates for 42 participating institutions",
      "Audit trail export in PDF and JSON formats",
      "APAAR verification integrated into document check",
    ],
  },
  {
    version: "v0.7",
    date: "September 2026",
    title: "Manifest v1 launched",
    changes: [
      "Manifest goes live with data on 1,000+ institutions",
      "Seat matrix for JoSAA, JOSAA 2.0, JAC Delhi, and CSAB",
      "Historical cutoff data from 2018 onwards",
      "Branch-level fee structures added",
    ],
  },
];
