import Footer from "@/components/Footer";

const pricingTiers = [
  {
    name: "Students",
    price: "Free",
    description: "For students navigating college admissions in India.",
    features: [
      "Full access to PraveshAI guidance",
      "Counselling status tracker",
      "Document checklist and verification status",
      "Manifest college search and comparison",
      "Live spot round status viewer",
      "No account required for basic search",
    ],
    cta: "Enter Playground ↗",
    ctaHref: "https://superadmission.com",
    highlight: false,
  },
  {
    name: "Institutions",
    price: "On request",
    description:
      "For degree-granting institutions joining the Superadmission network.",
    features: [
      "Verified seat matrix listing on Manifest",
      "Integration with Superadmission student verification",
      "Spot round participation for digitised allocation",
      "Admission data dashboard and reporting",
      "DigiLocker and APAAR document pull for verified applicants",
      "Dedicated onboarding and support",
    ],
    cta: "Contact us ↗",
    ctaHref: "mailto:institutions@superadmission.com",
    highlight: false,
  },
  {
    name: "Counselling Authorities",
    price: "On request",
    description:
      "For state and central counselling bodies adopting Superadmission infrastructure.",
    features: [
      "Full Digital Spot Round environment",
      "Shared student verification layer (Aadhaar + APAAR)",
      "Interoperable rank and document sharing with other bodies",
      "Real-time seat matrix and allocation engine",
      "Full audit trail with export",
      "Policy and legal compliance review included",
      "Dedicated implementation team",
    ],
    cta: "Contact us ↗",
    ctaHref: "mailto:authorities@superadmission.com",
    highlight: true,
  },
];

export default function PricingPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          PRICING
        </p>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-950 leading-tight mb-3">
          Free for students. Built to scale with institutions.
        </h1>
        <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
          Superadmission is free for every student, always. Institutional access is priced on the basis of integration complexity and scale.
        </p>
      </div>

      {/* Pricing tiers with crisp 4px corners */}
      <div className="flex flex-col gap-3.5 mb-12">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`border rounded-[4px] p-5 shadow-2xs ${
              tier.highlight
                ? "border-blue-200 bg-blue-50/50"
                : "border-gray-200/90 bg-white"
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-3.5">
              <div>
                <h2 className="text-[15px] font-medium text-gray-950 mb-0.5">
                  {tier.name}
                </h2>
                <p className="text-[13px] text-gray-600 font-normal">{tier.description}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p
                  className={`text-xl font-medium ${tier.highlight ? "text-[#9e790d]" : "text-gray-950"}`}
                >
                  {tier.price}
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-1.5 mb-5">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-xs text-gray-700"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                      tier.highlight ? "bg-[#9e790d]" : "bg-gray-400"
                    }`}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={tier.ctaHref}
              target={tier.ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={tier.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center text-xs font-semibold px-3.5 py-2 rounded-[3px] transition-colors no-underline uppercase tracking-wider ${
                tier.highlight
                  ? "bg-[#9e790d] text-white hover:bg-[#85660b] shadow-2xs"
                  : "border border-gray-200 text-gray-800 hover:bg-gray-50"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      {/* FAQ note with crisp 4px corners */}
      <div className="mb-12 p-5 bg-gray-50/70 rounded-[4px] border border-gray-200/90">
        <h3 className="text-[14px] font-medium text-gray-950 mb-1.5">
          Questions about pricing?
        </h3>
        <p className="text-[13px] text-gray-600 leading-relaxed mb-3 font-normal">
          Institutional and authority-level pricing depends on integration requirements, data volumes, and the number of counselling rounds. Write to us and we will respond within 2 working days.
        </p>
        <a
          href="mailto:hello@superadmission.com"
          className="text-xs text-[#2563eb] font-medium hover:underline"
        >
          hello@superadmission.com ↗
        </a>
      </div>

      <div className="border-t border-gray-100 pt-8">
        <Footer />
      </div>
    </div>
  );
}
