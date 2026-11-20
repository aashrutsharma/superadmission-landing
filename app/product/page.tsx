import Footer from "@/components/Footer";

const productSections = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "A student's journey, all in one place",
    description:
      "The Superadmission dashboard is a student's control centre. It surfaces their counselling status across every integrated process, tracks document submissions, shows upcoming deadlines, and links directly to PraveshAI for guidance. Everything a student needs to navigate admissions season is in one screen.",
    features: [
      "Live status across all integrated counsellings",
      "Document upload and verification status",
      "Deadline tracker with smart reminders",
      "Direct link to PraveshAI for personalised guidance",
    ],
  },
  {
    id: "praveshai",
    label: "PraveshAI",
    title: "The AI counsellor for every student",
    description:
      "PraveshAI is the guidance intelligence layer of Superadmission. It answers questions about eligibility, college comparisons, cutoff trends, document requirements, and counselling procedures. It can draft queries to counselling helpdesks, pull verified records from the student's profile, and explain complex rules in plain language.",
    features: [
      "Natural language answers to eligibility and cutoff questions",
      "College comparison across seats, fees, rankings, and location",
      "Document checklist generation from student's rank and category",
      "Email drafting to counselling authorities",
      "Multilingual: Hindi, English, and regional languages",
    ],
  },
  {
    id: "manifest",
    label: "Manifest",
    title: "Verified data on every institution in India",
    description:
      "Manifest is Superadmission's neutral college intelligence layer. It holds verified, structured data on every degree-granting institution in India. No paid listings, no promoted results, no sponsored placements. Just facts: seats, branches, approval status, historical cutoffs, fee structures, and accreditation.",
    features: [
      "1,000+ institutions with verified seat matrices",
      "Branch-level data: seats, fees, cutoffs from 2018 onwards",
      "NAAC and NBA accreditation status",
      "Approval status from AICTE, UGC, BCI, MCI, and state bodies",
      "Zero sponsored content. No paid promotions.",
    ],
  },
  {
    id: "spot-round",
    label: "Digital Spot Round",
    title: "Allocation rounds that run entirely online",
    description:
      "The Digital Spot Round environment enables counselling authorities to run live allocation rounds on a shared digital infrastructure. Seats update in real time as decisions are made. Students track their status on screen. Authorities get a full, exportable audit trail of every allocation decision.",
    features: [
      "Real-time seat matrix updates across all participating institutions",
      "Student-facing status view: live allocation status during the round",
      "Full audit trail: every decision timestamped and logged",
      "Export in PDF and JSON formats for records",
      "Runs on Aadhaar-authenticated authority credentials",
    ],
  },
  {
    id: "governance",
    label: "Governance",
    title: "Accountability at every layer",
    description:
      "Superadmission is designed around accountability. Student data is controlled by the student. Every access is logged. Every allocation is traceable. The protocol is built on India Stack primitives: Aadhaar for identity, DigiLocker for documents, and APAAR for academic credentials. No data is shared without student consent.",
    features: [
      "Student-controlled data: no sharing without explicit consent",
      "DPDP-compliant data handling",
      "Full access logs: who accessed what, and when",
      "Built on Aadhaar, DigiLocker, and APAAR",
      "Open protocol: counselling bodies can verify every decision",
    ],
  },
];

export default function ProductPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          PRODUCT
        </p>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-950 leading-tight mb-3">
          The full Superadmission platform
        </h1>
        <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
          Five interconnected layers that together make India&apos;s admissions system work for students, institutions, and counselling authorities.
        </p>
      </div>

      {/* Product sections */}
      {productSections.map((section, index) => (
        <div key={section.id}>
          <section id={section.id} className="mb-14 scroll-mt-20">
            <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-1.5">
              {section.label}
            </p>
            <h2 className="text-2xl font-medium tracking-tight text-gray-950 leading-tight mb-2.5">
              {section.title}
            </h2>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-5 font-normal">
              {section.description}
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-2 mb-6">
              {section.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-gray-700">
                  <span className="w-1.5 h-1.5 bg-[#2563eb] rounded-full flex-shrink-0 mt-1.5" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Image placeholder with crisp 4px corners */}
            <div className="w-full h-52 rounded-[4px] bg-gray-50 border border-gray-200/90 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-1">
                {section.label} SCREENSHOT
              </span>
              <p className="text-xs text-gray-400">[UI Placeholder &mdash; Image will be added here]</p>
            </div>
          </section>

          {index < productSections.length - 1 && (
            <div className="border-t border-gray-100 my-10" />
          )}
        </div>
      ))}

      <div className="border-t border-gray-100 pt-8">
        <Footer />
      </div>
    </div>
  );
}
