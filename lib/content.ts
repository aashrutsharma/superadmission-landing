// Content constants for the Superadmission landing site

export interface FAQItem {
  question: string;
  answer: string;
  link?: {
    text: string;
    href: string;
  };
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
      "Superadmission is a nationwide project to build an admission infrastructure by bringing 40+ counselling authorities along with 58,000+ degree granting institutions/colleges and universities on a single centralised platform. The aim is to make admission process simple, clear and efficient for students and authorities.",
  },
  {
    question: "What is admission infrastructure?",
    answer:
      "Admission infrastructure is the shared digital base that connects everyone involved in admissions. It will include one student identity, verified documents, a trusted record of institutions and seats, and dashboard to track progress across counselling processes. India has other digital public infrastructure for identity, documents and academic records, such as Aadhaar, DigiLocker and APAAR. It does not have a shared infrastructure for admissions yet.",
  },
  {
    question: "Is Superadmission affiliated with the government?",
    answer:
      "Superadmission is an independent initiative and is not affiliated with any government body right now. However, because admissions in India are run by government authorities, we aim to build this in collaboration with them. If you work at a counselling body, government department, or institution, reach out at office@superadmission.com—we would be glad for your input and any contribution.",
  },
  {
    question: "What is counselling?",
    answer:
      "In Indian higher education, counselling is the formal seat-allocation process that matches your entrance exam rank or score to a college seat. After exam results are declared, you register on a counselling portal, upload your documents, and submit your preferred list of colleges and courses. An allocation system then evaluates every applicant's rank, category rules, and available seats to assign each eligible candidate a seat. India does not have a single national counselling body instead there are up to 40+ major counselling authorities across the country.",
    link: {
      text: "Read our guide: What is Counselling?",
      href: "/blog/what-is-counselling",
    },
  },
  {
    question: "Where is the Superadmission College Repository?",
    answer:
      "The Superadmission College Repository is currently under development and not live yet. It is being built as a record of India's all degree-granting higher education institutions covering universities, colleges, and standalone institutions with structured profiles on courses, fees, cutoffs, rankings, facilities and much more sourced directly from official and verified resources.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-admissions-in-india-actually-work",
    title: "How Admissions in India Actually Work",
    author: "Unnati Vijay - Founder",
    date: "2 Nov 2026",
    readTime: "6 min read",
    excerpt:
      "A student cannot apply directly to a college in India. She must take an exam, go through counselling, and then complete admission. Here is how the full journey works.",
  },
  {
    slug: "education-policy-and-digital-india",
    title: "Education Policy and Digital India",
    author: "Unnati Vijay - Founder",
    date: "26 Nov 2026",
    readTime: "6 min read",
    excerpt:
      "The big plan for education in India and the digital tools that connect students to colleges. Covers NEP 2020, Aadhaar, DigiLocker, APAAR, the Academic Bank of Credits, DPDP and the IndiaAI Mission.",
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
