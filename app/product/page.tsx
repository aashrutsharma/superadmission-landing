"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

interface InstitutionItem {
  id: string;
  name: string;
  count: number;
  countFormatted: string;
  share: number;
  color: string;
  fill: string;
  border: string;
  description: string;
}

const REPOSITORY_DATA: InstitutionItem[] = [
  {
    id: "affiliated",
    name: "Affiliated colleges",
    count: 52509,
    countFormatted: "52,509",
    share: 71.9,
    color: "#60a5fa",
    fill: "rgba(59, 130, 246, 0.22)",
    border: "rgba(59, 130, 246, 0.5)",
    description: "Colleges affiliated with state and central universities conducting undergraduate and postgraduate programs.",
  },
  {
    id: "standalone",
    name: "Standalone institutions",
    count: 16671,
    countFormatted: "16,671",
    share: 22.8,
    color: "#fbbf24",
    fill: "rgba(245, 158, 11, 0.22)",
    border: "rgba(245, 158, 11, 0.5)",
    description: "Polytechnics, teacher training, paramedical, and autonomous research institutes across India.",
  },
  {
    id: "constituent",
    name: "Constituent colleges",
    count: 2467,
    countFormatted: "2,467",
    share: 3.4,
    color: "#34d399",
    fill: "rgba(16, 185, 129, 0.22)",
    border: "rgba(16, 185, 129, 0.5)",
    description: "Colleges maintained directly by university systems with integrated academic governance.",
  },
  {
    id: "universities",
    name: "Universities",
    count: 1362,
    countFormatted: "1,362",
    share: 1.9,
    color: "#a78bfa",
    fill: "rgba(139, 92, 246, 0.22)",
    border: "rgba(139, 92, 246, 0.5)",
    description: "Central, State Public, State Private, Deemed, and Institutes of National Importance (IITs, NITs, AIIMS, IIMs).",
  },
];

const TOTAL_INSTITUTIONS = 73009;

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState<InstitutionItem | null>(null);

  return (
    <div className="w-full">
      {/* ─── HEADER ─── */}
      <div className="mb-12">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          PRODUCT
        </p>
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-950 leading-tight mb-3">
          Reimagining How students get into college
        </h1>
        <p className="text-[14px] text-gray-600 leading-relaxed font-normal max-w-3xl">
          Explore 70,000+ higher education institutions, compare verified programs, and manage all admission counselling applications across supported authorities. Superadmission combines a national college data repository, profile-aware AI assistance, document management, choice filling, and seat-allocation tracking in one platform.
        </p>
      </div>

      {/* ─── SECTION 1: DASHBOARD ─── */}
      <section id="dashboard" className="mb-14 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          SUPERADMISSION DASHBOARD
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 leading-tight mb-2.5">
          The NewGen Admission Suite
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed font-normal mb-6">
          Superadmission brings supported counselling streams into one student workspace. From the dashboard, students can review admission stage cards, check recent activity, open their documents, and continue to choice filling.
        </p>

        {/* Feature List */}
        <div className="space-y-4 mb-6">
          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Single Sign On (SSO):</strong>{" "}
            Students sign in using their Aadhaar-linked identity. Superadmission identifies eligible supported counselling streams and displays them in the counselling switcher bar, so students can move between their counselling workspaces from one place. During onboarding, students give DigiLocker permission once to fetch available documents issued and verified by the relevant authorities. Those documents are then available for the counselling processes that require them.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Counselling Switcher:</strong>{" "}
            After Aadhaar-based sign-in, eligible supported counselling streams appear in the counselling switcher bar. Students can select a stream to view its admission stages, requirements, activity, documents, and saved choices. The streams shown depend on the student’s eligibility and the counselling services connected to Superadmission.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Fetch verified documents from DigiLocker:</strong>{" "}
            During onboarding, students give DigiLocker permission to fetch their available documents. Superadmission can then access documents issued by participating authorities, such as academic records and exam documents, for use in eligible counselling processes. Students give this permission once during onboarding, subject to the documents and issuer services available through DigiLocker.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Track admission stages:</strong>{" "}
            Admission stage cards show the student’s current progress in the selected counselling process. Status changes as the student completes steps. Depending on the stream and current stage, cards can include registration, document verification, choice filling, seat allotment, seat acceptance, and reporting.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Activity history:</strong>{" "}
            Activity History lists important actions and updates across the student’s counselling streams. Each entry shows what happened, the related institution or counselling body, its timestamp, and a unique commit code. Open an entry for details such as its source, time spent, and update log. Related actions can link to a receipt, choice list, or assistant conversation. Students can also export the activity history to PDF.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">All documents:</strong>{" "}
            All Documents organizes identity documents, academic records, exam scorecards, and counselling certificates. Select a document to view its issuer, details, verification status, and activity history. Available actions depend on the document.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Fill and organize college choices:</strong>{" "}
            Choice Filling shows colleges and programs available for the selected counselling stream alongside the student’s ranked preference list. Search and filter the options, add programs, reorder choices, and download the list. Changes autosave.
          </div>
        </div>

        {/* CTA Link Button */}
        <div className="mt-5 mb-2">
          <Link
            href="https://superadmission.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] text-xs font-medium text-gray-900 bg-gray-50 border border-gray-300 hover:border-gray-900 hover:bg-gray-100 transition-colors shadow-2xs no-underline"
          >
            <span>Try the Playground</span>
            <span className="text-[#9e790d]">→</span>
          </Link>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* ─── SECTION 2: ADMISSIONS INTELLIGENCE ASSISTANT ─── */}
      <section id="assistant" className="mb-14 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          ADMISSIONS INTELLIGENCE ASSISTANT
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 leading-tight mb-2.5">
          Guidance for every step of college counselling
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-6 font-normal">
          The Admissions Intelligence Assistant helps students understand their options across supported college counselling streams. It uses relevant student profile details to provide guidance.
        </p>

        {/* Assistant Core Capabilities */}
        <div className="space-y-4 mb-8">
          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Profile-Aware Admissions Guidance:</strong>{" "}
            The assistant uses available details such as exam scores, rank, category, domicile, active counselling stream, and saved preferences to explain eligibility, compare options, and identify possible next steps. Its responses can reflect updates in the student’s workspace and the latest information available to Superadmission.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Seat Allocation Simulation & Scenario Analysis:</strong>{" "}
            The assistant works with Superadmission’s seat allocation simulator to explain possible allotments by counselling round, including the provisional seat, applicable fee, and higher preferences that may remain in reach. It can also compare scenarios involving a different rank, choice order, or Float, Slide, and Freeze decision.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Draft choice lists:</strong>{" "}
            Based on the student’s profile, priorities, and relevant counselling data, the assistant can prepare a suggested choice list for review. Students can download the draft and discuss it with family before deciding whether to enter those preferences in the Choice Filling workspace. The draft does not change the saved choice list.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">OCR and Intelligent Document Processing (IDP):</strong>{" "}
            Students can upload scorecards, certificates, college brochures or seat matrices for analysis. OCR extracts text and relevant data from these documents, while IDP classifies, structures and interprets the extracted information to identify required fields, verify certificate dates, compare details with available cutoff data and flag missing, inconsistent or potentially incorrect information for review.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Document and rule guidance:</strong>{" "}
            The assistant can use document statuses and available counselling information to explain requirements such as eligibility, quotas, certificate rules, and verification steps. It can identify missing or unclear details for the student to check.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Email drafting with connected services:</strong>{" "}
            The assistant can prepare emails about document verification, pending certificates, fee reconciliation, quota mapping, or portal issues. With the student’s permission, it can use connected services such as Gmail to prepare a draft for review. The student reviews and sends the email.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Calendar and task planning:</strong>{" "}
            With permission to use connected services, the assistant can help organize counselling deadlines and next steps in Google Calendar or Microsoft To Do. Students review the proposed dates or tasks and authorize any changes before they are added.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Student-controlled actions:</strong>{" "}
            The assistant can suggest updates to a choice list and other workspace actions. It explains the proposed change and waits for the student’s approval. Clearing or deleting preferences requires PIN confirmation.
          </div>
        </div>

        {/* Sub-section: How Built Differently Than General AI */}
        <div className="p-5 rounded-[4px] border border-gray-200/90 bg-gray-50/50">
          <h3 className="text-[15px] font-medium text-gray-950 mb-2 tracking-tight">
            How Superadmission AI Assistance Is Built Differently Than General AI
          </h3>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-4 font-normal">
            General-purpose chatbots are built to answer anything on the internet and often guess when information is incomplete. We are architecting AI assistance as a purpose-built, domain-locked admission agent using specialised LLMs, verified data sources, structured knowledge bases and controlled AI workflows:
          </p>

          <div className="space-y-3.5">
            <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
              <strong className="text-gray-950 font-semibold">Answers Based Only on Verified Data:</strong>{" "}
              Unlike general-purpose LLMs that may hallucinate cutoffs, eligibility criteria or admission requirements, or rely on outdated web scrapes, our AI assistant retrieves information directly from verified databases and official admission sources. Through structured data retrieval and source-grounded responses, it delivers reliable guidance on college profiles, seat matrices, fee structures, cutoffs, eligibility criteria and counselling updates.
            </div>

            <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
              <strong className="text-gray-950 font-semibold">Zero Unauthorized Actions:</strong>{" "}
              The AI assistant never acts without permission. Whether updating a calendar, drafting an email, organising college preferences or tracking admission deadlines, its AI workflows operate with explicit permission controls and human-in-the-loop approval, waiting for student consent before executing any action through connected tools or integrations.
            </div>

            <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
              <strong className="text-gray-950 font-semibold">100% Domain-Locked to Education:</strong>{" "}
              Engineered with strict system-level guardrails, domain-specific prompting and controlled response boundaries, the AI assistant is restricted to higher education, college admissions and counselling-related queries, keeping the experience focused, safe and distraction-free.
            </div>

            <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
              <strong className="text-gray-950 font-semibold">Trained on Indian Reservation & Counselling Rules:</strong>{" "}
              Purpose-trained to understand India&apos;s complex admission and reservation frameworks, including vertical and horizontal reservations, category-wise seat allocation, reservation rosters, domicile requirements, state vs. All India Quota, institutional quotas, seat conversion rules, merit lists, rank-based allotment, choice filling and locking, multi-round counselling, sliding, upgradation, float and freeze options, and stray vacancy rounds. This domain-specific rule understanding helps address admission scenarios that general-purpose LLMs routinely misinterpret.
            </div>

            <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
              <strong className="text-gray-950 font-semibold">Unbiased Advice With Clear Reasoning:</strong>{" "}
              Free from paid college promotions, sponsored rankings or lead-generation incentives, every AI-generated suggestion is based strictly on students&apos; merit, entrance exam ranks, category, eligibility, preferences and verified admission rules. Recommendations consider previous-year closing ranks, category-wise cutoffs, seat availability, college preferences and counselling patterns, with clear reasoning behind every suggestion rather than opaque AI-generated rankings or promotional recommendations.
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* ─── SECTION 3: DIGITAL SPOT ROUND ─── */}
      <section id="spot-round" className="mb-14 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          DIGITAL SPOT ROUND
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 leading-tight mb-2.5">
          Spot rounds that run entirely online
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-5 font-normal">
          A fully digital system for conducting spot rounds across college counselling processes, with online participation, live seat availability, real-time allotment tracking and timestamped admission records.
        </p>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-5 font-normal">
          Spot rounds fill seats that remain vacant after regular counselling ends. However, most spot rounds still require physical attendance at college campuses, forcing students to travel across cities with original documents and Demand Drafts (DDs) just to participate. We are working towards eliminating this dependency on physical reporting.
        </p>

        <h3 className="text-[15px] font-medium text-gray-950 mb-3 tracking-tight">
          What Digital Spot Round offers
        </h3>

        {/* ─── BLURRED SECTION ─── */}
        <div className="relative overflow-hidden rounded-[4px] border border-gray-200/90 bg-gray-50/70 p-5 sm:p-6 my-5 select-none">
          {/* Blurred Content */}
          <div className="filter blur-[4.5px] opacity-40 pointer-events-none space-y-4">
            <div className="space-y-2 text-[14px] text-gray-600 leading-relaxed font-normal">
              <p>
                <strong className="font-semibold text-gray-950">Live Seat Matrix:</strong>{" "}
                Automatic updates to vacant seats, category-wise availability and allotments throughout the spot round.
              </p>
              <p>
                <strong className="font-semibold text-gray-950">Real-Time Applicant Tracking:</strong>{" "}
                Live queue position, application status, eligibility and allotment updates through a student dashboard.
              </p>
              <p>
                <strong className="font-semibold text-gray-950">Timestamped Audit Log:</strong>{" "}
                Time-recorded allocation decisions, status changes and admission confirmations for complete traceability.
              </p>
              <p>
                <strong className="font-semibold text-gray-950">Remote Participation:</strong>{" "}
                Online registration, document verification, applicant participation and seat acceptance without mandatory physical reporting.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <h4 className="font-medium text-gray-950 text-[14px] mb-1.5">
                Our Work Towards Implementation
              </h4>
              <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal">
                We are extensively researching how fully digital spot rounds can be implemented across different state, national and institutional counselling systems. This includes studying variations in counselling regulations, reservation policies, vacancy reporting, applicant eligibility, merit-based prioritisation, seat allocation, payment confirmation and admission validation.
              </p>
              <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal mt-2">
                Our work involves developing a common operational framework that can accommodate different counselling rules without compromising the requirements of individual authorities. We are also examining the regulatory changes, institutional coordination, government integrations and administrative support necessary to implement this system at scale.
              </p>
              <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal mt-2">
                The objective is to make digital spot rounds viable across India&apos;s wider admission ecosystem, rather than restricting the solution to a few examinations or individual counselling authorities.
              </p>
            </div>
          </div>

          {/* Overlay Pill */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <div className="px-3.5 py-1.5 rounded-[4px] bg-white/95 border border-gray-300 shadow-2xs text-xs font-medium text-gray-700 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>In Active Research &amp; Regulatory Formulation</span>
            </div>
          </div>
        </div>

        {/* Post-Blur Explanatory Copy - Highlighted with a light warm hue */}
        <div className="mt-5 p-4 sm:p-5 rounded-[4px] bg-[#faf8f5] border border-amber-200/70 text-[14px] leading-relaxed space-y-3.5 shadow-2xs">
          <p className="text-gray-800">
            Our team is working extensively on the research, regulatory frameworks, counselling-specific rules and technical architecture required to make fully digital spot rounds possible across India&apos;s diverse admission systems. We are studying the operational differences between counselling authorities and working towards an adaptable, scalable framework that can reduce geographical barriers and drastically minimise avoidable seat wastage.
          </p>
          <p className="text-gray-800">
            This is a long-term infrastructure initiative, and we are committed to taking it from concept to implementation through sustained research, engineering and institutional collaboration.
          </p>
          <p className="text-gray-950 font-medium pt-0.5">
            If you think you can help us in any way, we&apos;d be truly grateful to have your support.
          </p>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* ─── SECTION 4: SUPERADMISSION COLLEGE REPOSITORY ─── */}
      <section id="repository" className="mb-14 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          SUPERADMISSION COLLEGE REPOSITORY
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 leading-tight mb-2.5">
          Superadmission College Repository
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-6 font-normal">
          The information and database layer of Superadmission, a cumulative, open-source repository of all degree-granting higher education institutions in India, bringing institutional information, admission data and academic details together on one accessible platform.
        </p>

        {/* ─── GRAPH: INSTITUTIONAL REPOSITORY CAPACITY BREAKDOWN ─── */}
        <div className="border border-gray-200/90 rounded-[4px] p-4 sm:p-5 bg-white relative overflow-hidden shadow-2xs mb-8">
          {/* Top Metric Bar - Left Aligned */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 pb-3 border-b border-gray-100 text-left">
            <div className="text-left">
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl font-semibold text-gray-950 tracking-tight text-left">
                  {TOTAL_INSTITUTIONS.toLocaleString()}
                </span>
                <span className="text-[13px] font-medium text-gray-900 text-left">
                  Total Higher Education Institutions
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1 text-left">
                National Institutional Index &bull; All degree-granting institutions structured across 80+ verifiable data fields
              </p>
            </div>
          </div>

          {/* Proportional Capacity Segmented Bar */}
          <div className="mb-4">
            <div className="h-4 w-full flex rounded-[3px] overflow-hidden border border-gray-200 p-0.5 bg-gray-50/70 gap-0.5">
              {REPOSITORY_DATA.map((cat) => (
                <div
                  key={cat.id}
                  style={{
                    width: `${cat.share}%`,
                    backgroundColor: cat.color,
                    opacity: activeCategory && activeCategory.id !== cat.id ? 0.35 : 0.75,
                  }}
                  className="h-full rounded-[2px] transition-all duration-150 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveCategory(cat)}
                  onMouseLeave={() => setActiveCategory(null)}
                />
              ))}
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400 mt-1.5 px-0.5">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100% (73,009 Total)</span>
            </div>
          </div>

          {/* 4 Cards Matching the Uploaded Image Data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {REPOSITORY_DATA.map((cat) => {
              const isHovered = activeCategory?.id === cat.id;
              return (
                <div
                  key={cat.id}
                  className={`p-3.5 rounded-[4px] border transition-all cursor-pointer ${
                    isHovered
                      ? "border-gray-400 bg-gray-50/80 shadow-2xs"
                      : "border-gray-200/80 bg-white hover:border-gray-300"
                  }`}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="w-3.5 h-3.5 rounded-[3px] shrink-0 border"
                      style={{
                        backgroundColor: cat.fill,
                        borderColor: cat.border,
                      }}
                    />
                    <h4 className="text-[13.5px] font-medium text-gray-900 tracking-tight leading-tight">
                      {cat.name}
                    </h4>
                  </div>

                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-xl font-semibold text-gray-950 tracking-tight">
                      {cat.countFormatted}
                    </span>
                    <span className="text-xs text-gray-500">
                      {cat.share}%
                    </span>
                  </div>

                  <p className="text-[12.5px] text-gray-500 mt-2 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dynamic Inspection Ribbon on Hover */}
          <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center justify-between min-h-[34px] text-xs">
            {activeCategory ? (
              <div className="flex items-center gap-2 text-gray-900 animate-fadeIn">
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-[3px] border"
                  style={{
                    backgroundColor: activeCategory.fill,
                    borderColor: activeCategory.border,
                    color: activeCategory.color,
                  }}
                >
                  {activeCategory.name}: {activeCategory.countFormatted} ({activeCategory.share}%)
                </span>
                <span className="text-gray-600 font-normal leading-tight">
                  {activeCategory.description}
                </span>
              </div>
            ) : (
              <span className="text-xs text-gray-400 font-normal italic flex items-center gap-1.5">
                <span>ⓘ</span> Hover over institution categories to view operational classification and intake scope.
              </span>
            )}
          </div>
        </div>

        {/* Repository Core Features */}
        <div className="space-y-4">
          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Institutional Profiles:</strong>{" "}
            Each college profile will contain 80+ structured data fields covering institutional overview, admissions, courses and fees, cutoffs, placements, faculty, infrastructure, hostels, scholarships, rankings, accreditation, photo galleries, contact details and FAQs. Information will be sourced strictly from official government databases and directly from the institutions themselves, with an emphasis on verification, accuracy and regular updates.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Centralised Admission Rules:</strong>{" "}
            Critical admission information currently scattered across individual college websites, government portals and counselling authorities will be consolidated into a structured and accessible repository. This includes eligibility criteria, reservation regulations, institutional admission policies, category-wise requirements, course-specific rules and other institutional business rules relevant to the admission process.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Independent &amp; Unbiased Information:</strong>{" "}
            The repository will not accept paid rankings, sponsored placements or lead-generation commissions. Institutional information, including fees, accreditation, placement records and other relevant details, will be presented transparently, without paid visibility or promotional influence, allowing students and families to make informed comparisons and decisions.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">Verified Data Layer for AI Assistance:</strong>{" "}
            The repository will also serve as the underlying institutional knowledge base for the Superadmission AI assistant. Its structured and verified data will support information retrieval, college comparisons, eligibility checks and admission recommendations, ensuring that AI-generated guidance is grounded in reliable institutional information rather than unverified web content.
          </div>

          <div className="text-[14px] text-gray-600 leading-relaxed font-normal">
            <strong className="font-semibold text-gray-950">AI &amp; Agent-Accessible Infrastructure:</strong>{" "}
            The repository will be structured to be AI-readable and agent-friendly, allowing authorised AI agents, search systems and automated research tools to discover, access, retrieve and process institutional information through structured data formats and machine-readable content. This will make institutional information easier to index, compare and retrieve programmatically, extending its accessibility beyond conventional website browsing.
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* ─── FOOTER ─── */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
