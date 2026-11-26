"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import GerProjectionChart from "@/components/GerProjectionChart";
import ReservationFlowDiagram from "@/components/ReservationFlowDiagram";
import SeatWastageDonutChart from "@/components/SeatWastageDonutChart";
import InstitutionGrowthChart from "@/components/InstitutionGrowthChart";
import PublicBenchmarkBar from "@/components/PublicBenchmarkBar";
import { Sparkles, Languages, Sliders } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="mb-10">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          STATE OF ADMISSIONS
        </p>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-950 leading-tight mb-3">
          Open Socio-Academic overview of Indian Higher Education Admissions
        </h1>
        <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
          Data-backed studies and field insights examining how disorganised admission systems affect students, parents, and institutions across India.
        </p>
      </div>

      {/* SECTION 1: BENCHMARKS */}
      <section id="benchmarks" className="mb-12 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          ECOSYSTEM
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 mb-5">
          Numbers defining the admission authorities
        </h2>

        {/* 4 Stat Tiles with crisp 4px corners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200/90 rounded-[4px] divide-y sm:divide-y-0 sm:divide-x divide-gray-200/90 bg-white shadow-2xs relative">
          <div className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="text-3xl font-medium text-[#9e790d] tracking-tight">
                  64,756
                </span>
                <a
                  href="#source-aishe"
                  title="View citation in Sources"
                  className="text-gray-400 hover:text-[#9e790d] text-xs font-mono ml-0.5 inline-flex items-center no-underline transition-colors"
                >
                  ↓
                </a>
              </div>
              <h3 className="text-[13px] font-medium text-gray-950 mb-1 leading-snug">
                Registered institutions
              </h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
                1,289 universities, 48,246 colleges and 15,221 standalone institutions. AISHE 2023-24.
              </p>
            </div>
          </div>

          <div className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="text-3xl font-medium text-[#9e790d] tracking-tight whitespace-nowrap">
                  4.46 Cr
                </span>
              </div>
              <h3 className="text-[13px] font-medium text-gray-950 mb-1 leading-snug">
                Students enrolled
              </h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
                In higher education in 2022-23. AISHE.
              </p>
            </div>
          </div>

          <div className="p-5 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-medium text-[#9e790d] tracking-tight">
                    40+
                  </span>
                  <a
                    href="#source-authorities"
                    title="View citation in Sources"
                    className="text-gray-400 hover:text-[#9e790d] text-xs font-mono ml-0.5 inline-flex items-center no-underline transition-colors"
                  >
                    ↓
                  </a>
                </div>
                <span className="text-[10px] font-mono text-[#9e790d] bg-amber-50 border border-amber-200/80 px-1 py-0.2 rounded cursor-help">
                  ⓘ
                </span>
              </div>
              <h3 className="text-[13px] font-medium text-gray-950 mb-1 leading-snug">
                Counselling authorities
              </h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
                Central and state bodies that run seat allocation. [Estimated]
              </p>
            </div>

            {/* Hover Pop-up Card */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 hidden group-hover:block z-40 w-80 sm:w-[380px] max-w-[calc(100vw-2rem)] pointer-events-none">
              <div className="bg-[#9e790d] text-white rounded-[4px] p-3.5 text-[11.5px] leading-relaxed shadow-xl border border-[#84650a] animate-fadeIn font-normal">
                <div className="text-[10px] font-mono font-medium tracking-wider text-amber-200 uppercase mb-1.5 flex items-center gap-1.5">
                  <span>◈</span> CONSERVATIVE ESTIMATE
                </div>
                If you look up this figure on a search engine or AI tool today, you will often see estimates closer to 100+. Because there is no single official registry of every counselling body in India, we have intentionally used a conservative count representing only the major central and state authorities that handle the highest volume of student applications with certainty. Estimate for yourself the real complexity a student faces.
              </div>
            </div>
          </div>

          <div className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="text-3xl font-medium text-[#9e790d] tracking-tight">
                  1.5 Cr+
                </span>
                <a
                  href="#source-applications"
                  title="View citation in Sources"
                  className="text-gray-400 hover:text-[#9e790d] text-xs font-mono ml-0.5 inline-flex items-center no-underline transition-colors"
                >
                  ↓
                </a>
              </div>
              <h3 className="text-[13px] font-medium text-gray-950 mb-1 leading-snug">
                Applications each cycle
              </h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
                Across national and state entrance exams and counselling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 2: GUIDANCE & ACCESS GAPS (Replaces Evaluation Report) */}
      <section id="guidance-gaps" className="mb-12 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          ANALYSIS
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 mb-3">
          Guidance &amp; Access Gaps
        </h2>

        {/* Intro Paragraph */}
        <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal mb-6">
          While millions of students navigate higher education admissions every year, there is no national benchmark measuring how many receive reliable guidance. In the absence of an accessible public framework, an estimated 5,000 to 15,000+ domestic admission consultants{" "}
          <a
            href="#source-consultants"
            title="View citation in Sources"
            className="text-gray-400 hover:text-[#9e790d] text-xs font-mono inline-flex items-center no-underline transition-colors"
          >
            ↓
          </a>{" "}
          have stepped in to fill the void across NEET, JEE/JoSAA, CUET, and management-quota pathways.
        </p>

        {/* 3 Interactive Accordion / Tab Cards */}
        <div className="flex flex-col gap-2.5 mb-6">
          {/* Item 1 */}
          <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white shadow-2xs hover:border-gray-300 transition-colors">
            <h3 className="text-[14px] font-medium text-gray-950 mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9e790d]" />
              Local consultants and online mentors
            </h3>
            <p className="text-[12.5px] text-gray-600 leading-relaxed font-normal pl-3.5">
              Guidance ranges from local street-level consultancies and solo YouTube or Telegram mentors to large test-prep giants like Allen, Aakash, and Career Launcher running in-house counseling wings.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white shadow-2xs hover:border-gray-300 transition-colors">
            <h3 className="text-[14px] font-medium text-gray-950 mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9e790d]" />
              Seasonal and self-acceredited counsellors
            </h3>
            <p className="text-[12.5px] text-gray-600 leading-relaxed font-normal pl-3.5">
              A massive share of counseling runs purely as a seasonal hustle between May and September, often led by college students, coaching teachers, stationary shops,or local commission agents.
            </p>
          </div>

          {/* Item 3 */}
          <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white shadow-2xs hover:border-gray-300 transition-colors">
            <h3 className="text-[14px] font-medium text-gray-950 mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9e790d]" />
              Counselling referral services
            </h3>
            <p className="text-[12.5px] text-gray-600 leading-relaxed font-normal pl-3.5">
              Many platforms and directories blur the line between genuine student guidance and commercial interests by mixing counseling with test prep, or paid college lead-generation portals, meaning they steer students toward colleges that pay them commissions instead of acting in the best interest of students.
            </p>
          </div>
        </div>

        {/* Info Tip / Highlight Box */}
        <div className="border border-amber-200/80 bg-amber-50/60 rounded-[4px] p-4 sm:p-4.5 flex items-start gap-3 shadow-2xs">
          <div className="w-6 h-6 rounded-[3px] bg-[#9e790d] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="font-mono text-xs font-bold">!</span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#9e790d] font-semibold block mb-0.5">
              EQUITY CONSIDERATION
            </span>
            <p className="text-[13px] text-gray-800 leading-relaxed font-normal">
              When admission advice is either too expensive to afford, too informal to trust, or driven by lead-generation commissions from colleges, students end up making major decisions on incomplete or biased information. Families without the budget for private counsellors are left to piece together admission rules on their own, leaving them exposed to misinformation and avoidable mistakes. That is why a free, unbiased guidance system built strictly on verified data is essential for fair access to higher education.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 3: STUDENTS */}
      <section id="students" className="mb-12 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          STUDENTS
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 mb-1">
          Stress &amp; Mental Health Impact
        </h2>
        <p className="text-xs text-gray-500 font-normal mb-5">
          The impact of disorganised admission processes on students and families.
        </p>

        {/* 2 Mental Health / Stress Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
          {/* Item 1 */}
          <div className="border border-gray-200/90 rounded-[4px] p-4.5 bg-white shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[13.5px] font-medium text-gray-950">
                Competitive Exam Aspirants
              </h3>
              <a
                href="#source-stress"
                title="View citation in Sources"
                className="text-gray-400 hover:text-[#9e790d] text-xs font-mono inline-flex items-center no-underline transition-colors"
              >
                ↓
              </a>
            </div>
            <p className="text-[12.5px] text-gray-600 leading-relaxed font-normal">
              <strong className="text-gray-900 font-semibold">86.0%</strong> of competitive exam aspirants report high academic stress, <strong className="text-gray-900 font-semibold">87.0%</strong> report high parental pressure, and <strong className="text-gray-900 font-semibold">57.7%</strong> report low general well-being.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border border-gray-200/90 rounded-[4px] p-4.5 bg-white shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[13.5px] font-medium text-gray-950">
                Medical Entrance Aspirants
              </h3>
              <a
                href="#source-stress"
                title="View citation in Sources"
                className="text-gray-400 hover:text-[#9e790d] text-xs font-mono inline-flex items-center no-underline transition-colors"
              >
                ↓
              </a>
            </div>
            <p className="text-[12.5px] text-gray-600 leading-relaxed font-normal">
              <strong className="text-gray-900 font-semibold">63.8%</strong> of medical entrance aspirants report depressive symptoms, <strong className="text-gray-900 font-semibold">82.0%</strong> anxiety, and <strong className="text-gray-900 font-semibold">51.3%</strong> stress on{" "}
              <span className="group relative inline-block cursor-help border-b border-dotted border-gray-400 font-medium text-gray-900">
                DASS-21
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block w-72 p-2.5 bg-gray-950 text-white text-[11px] font-normal leading-relaxed rounded-[4px] shadow-xl z-30 pointer-events-none">
                  The Depression Anxiety Stress Scales – 21 (DASS-21) is 21-item self-report measure designed to assess the severity of general psychological distress and symptoms related to depression, anxiety, and stress in adults.
                </span>
              </span>.
            </p>
          </div>
        </div>

        {/* Descriptive Section */}
        <div className="space-y-3 text-[13.5px] text-gray-600 leading-relaxed font-normal">
          <p>
            These figures show that student distress does not stop once entrance exams end, it continues throughout the disorganized admission process. From our extensive first-hand interactions with applicants and parents, we have seen that an average student routinely juggles 3 to 4 separate portals simultenously, leaving both students and parents overwhelmed by tracking different deadlines, rules, and document formats.
          </p>
          <p>
            Alongside this mental strain comes a steady financial burden: families pay separate application fees on multiple portals, spend on travel and accommodation for physical verification and campus spot rounds, and often pay thousands of rupees to private counsellors simply out of fear of making a costly mistake. Yet despite how common this experience is, no nationwide benchmarks measure the total hours spent, travel costs incurred, or portal fatigue faced by applicants each year.
          </p>
          <p className="text-gray-900 font-medium">
            The absence of official data itself shows how desperately this space needs research and improvement. We are currently conducting in-house socio-academic research(to be published openly soon)to document these real-world costs and quantify the gaps.
          </p>
        </div>

        {/* Redirect small arrow component */}
        <div className="mt-4 pt-1">
          <Link
            href="https://docs.superadmission.com/superadmission/our-mission-and-vision"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-gray-900 hover:text-[#9e790d] transition-colors no-underline inline-flex items-center gap-1"
          >
            <span>Read our research</span>
            <span>↗</span>
          </Link>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 4: GROWTH */}
      <section id="growth" className="mb-12 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          GROWTH
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 mb-4">
          Student Growth Projections
        </h2>

        {/* Descriptive Text with Link */}
        <div className="space-y-3 mb-6 text-[13.5px] text-gray-600 leading-relaxed font-normal">
          <p>
            The National Education Policy (NEP) 2020 sets a target of reaching a 50% Gross Enrolment Ratio (GER) by 2035. According to official{" "}
            <a
              href="https://aishe.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563eb] hover:underline inline-flex items-center gap-0.5"
            >
              AISHE
            </a>{" "}
            data, India’s GER stood at 29.5% in 2022–23 and rose to 30% in 2023–24, with total active enrollment at 4.5 crore students. Reaching 50% means expanding total system capacity to roughly 7.5 to 8.0 crore students which means adding 3 to 3.5 crore more learners and requiring admission infrastructure to handle about 1.7 times today’s volume.
          </p>
          <p>
            In practical terms, that translates to roughly 2.3 to 2.7 crore fresh admissions every year and because each student applies across multiple counseling bodies and colleges, 7 to 10+ crore applications processed annually.
          </p>
        </div>

        {/* GER Projection Line Chart Component */}
        <GerProjectionChart />
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 5: RESERVATIONS */}
      <section id="reservations" className="mb-12 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          RESERVATIONS
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 mb-4">
          The state of admission system spanning diverse horizontal and vertical reservations.
        </h2>

        <div className="mb-6 text-[13.5px] text-gray-600 leading-relaxed font-normal">
          <p>
            Every seat allotment in India involves applying overlapping vertical categories, state domicile quotas, horizontal sub-quotas, and extra supernumerary pools simultaneously. The percentages, seat-conversion logic, and priority orders vary across counselling authorities and admission rounds and maintaining accuracy at scale demands a rule engine built specifically for these multi-layered matrices.
          </p>
        </div>

        {/* Reservation Flow Diagram */}
        <ReservationFlowDiagram />
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 6: SEAT WASTAGE */}
      <section id="seat-wastage" className="mb-12 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          SEAT WASTAGE
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 mb-2 flex items-baseline gap-1.5">
          <span>Seats Left Vacant Across Major Indian Counseling Systems</span>
          <a
            href="#source-vacancies"
            title="View citation in Sources"
            className="text-gray-400 hover:text-[#9e790d] text-xs font-mono inline-flex items-center no-underline transition-colors"
          >
            ↓
          </a>
        </h2>
        <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal mb-5">
          The real problem is not merely that thousands of college seats are left unallocated each year; instead that they remain vacant despite lakhs of eligible students finishing the admission cycle without a seat. Across major counsellings, disconnected timelines, late-round withdrawals, and in-person spot-round barriers stop open seats from reaching qualified candidates.
        </p>

        {/* 3 Donut Charts with Pull-Out Vacant Slice */}
        <SeatWastageDonutChart />
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 7: INSTITUTIONS */}
      <section id="institutions" className="mb-12 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          INSTITUTIONS
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 mb-2">
          Institution Growth Timeline
        </h2>
        <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal mb-4">
          Registered institutions rose from 51,534 in 2014-15 to 64,756 in 2023-24, an increase of about 25.7%. Universities grew by 69.6% and colleges by 25.3% over that period. Each new institution adds seats, rules and records for the system to track.
        </p>

        {/* Stacked Bar Chart */}
        <InstitutionGrowthChart />
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 8: ACCESSIBILITY */}
      <section id="accessibility" className="mb-12 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          ACCESSIBILITY
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 mb-3">
          What we are building for access
        </h2>

        {/* Same Bar Graph from Home Page */}
        <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white shadow-2xs mb-6 max-w-sm">
          <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Accessibility</h3>
          <p className="text-[12px] text-gray-500 font-normal mt-0.5 mb-2.5">
            For students of diverse backgrounds
          </p>
          <div className="text-3xl font-medium tracking-tight text-gray-900 mb-3">#1</div>
          <PublicBenchmarkBar />
        </div>

        <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal mb-5">
          We believe public-serving infrastructure must be both ambitious in scale and deeply human in design. As we continuously build and evolve Supradmission, our north star is clear: creating a public-serving admission ecosystem that is radically inclusive yet effortless to use. We are engineering foundational features:
        </p>

        {/* 3 Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="border border-gray-200/90 rounded-[4px] p-4.5 bg-white shadow-2xs">
            <div className="w-7 h-7 rounded-[3px] bg-amber-50/80 border border-amber-200/70 flex items-center justify-center text-[#9e790d] mb-3">
              <Sparkles className="w-3.5 h-3.5 stroke-[1.5]" />
            </div>
            <h3 className="text-[13.5px] font-medium text-gray-950 mb-1.5">
              Guidance for everyone
            </h3>
            <p className="text-[12px] text-gray-600 leading-relaxed font-normal">
              A free guidance assistant that gives step-by-step help to every applicant.
            </p>
          </div>

          <div className="border border-gray-200/90 rounded-[4px] p-4.5 bg-white shadow-2xs">
            <div className="w-7 h-7 rounded-[3px] bg-amber-50/80 border border-amber-200/70 flex items-center justify-center text-[#9e790d] mb-3">
              <Languages className="w-3.5 h-3.5 stroke-[1.5]" />
            </div>
            <h3 className="text-[13.5px] font-medium text-gray-950 mb-1.5">
              Regional languages
            </h3>
            <p className="text-[12px] text-gray-600 leading-relaxed font-normal">
              Support in regional languages, so students and families can apply with confidence and clarity.
            </p>
          </div>

          <div className="border border-gray-200/90 rounded-[4px] p-4.5 bg-white shadow-2xs">
            <div className="w-7 h-7 rounded-[3px] bg-amber-50/80 border border-amber-200/70 flex items-center justify-center text-[#9e790d] mb-3">
              <Sliders className="w-3.5 h-3.5 stroke-[1.5]" />
            </div>
            <h3 className="text-[13.5px] font-medium text-gray-950 mb-1.5">
              Accessibility settings
            </h3>
            <p className="text-[12px] text-gray-600 leading-relaxed font-normal">
              Light and dark modes, high-contrast views and adjustable text size.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 9: SOURCES */}
      <section id="sources" className="mb-12 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          SOURCES
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 mb-4">
          Data Sources &amp; Citations
        </h2>

        {/* Sources Table / Plain List in very small text */}
        <div className="border border-gray-200/90 rounded-[4px] overflow-hidden bg-white shadow-2xs text-[10px] sm:text-[10.5px] divide-y divide-gray-100">
          {/* Header */}
          <div className="grid grid-cols-12 gap-3 px-3.5 py-2 bg-gray-50/80 font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold">
            <div className="col-span-4 sm:col-span-3">Data</div>
            <div className="col-span-8 sm:col-span-9">Source &amp; Citation Details</div>
          </div>

          {/* Row 1: AISHE Counts */}
          <div id="source-aishe" className="grid grid-cols-12 gap-3 px-3.5 py-2.5 items-start scroll-mt-20">
            <div className="col-span-4 sm:col-span-3 font-medium text-gray-900 leading-snug">
              Institution counts, enrolment, GER
            </div>
            <div className="col-span-8 sm:col-span-9 text-gray-600 leading-relaxed">
              All India Survey on Higher Education (AISHE) 2023–24 (Ministry of Education, released July 8, 2026;{" "}
              <a
                href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2282525&reg=48&lang=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:underline break-all"
              >
                PIB Release ID 2282525
              </a>
              ). Reports 64,756 registered HEIs, 4.50 crore total enrolment, and 30.0% GER (up from 29.5% in 2022–23).
            </div>
          </div>

          {/* Row 2: MBBS Vacancy */}
          <div id="source-mbbs" className="grid grid-cols-12 gap-3 px-3.5 py-2.5 items-start bg-gray-50/30 scroll-mt-20">
            <div className="col-span-4 sm:col-span-3 font-medium text-gray-900 leading-snug">
              411 MBBS seats vacant after 2026 Special Stray Round
            </div>
            <div className="col-span-8 sm:col-span-9 text-gray-600 leading-relaxed">
              Medical Counselling Committee (MCC) NEET-UG 2026 Special Stray Vacancy Round Final Result (Nov 5, 2026: 537 allotted out of 948 matrix seats; 411 unfilled), corroborated by PTI, Careers360, and Medical Dialogues (MCC Seat Matrix &amp; Summary).
            </div>
          </div>

          {/* Row 3: Stress Percentages */}
          <div id="source-stress" className="grid grid-cols-12 gap-3 px-3.5 py-2.5 items-start scroll-mt-20">
            <div className="col-span-4 sm:col-span-3 font-medium text-gray-900 leading-snug">
              Stress percentages (68.5%, 75.5%, 86.0%/87.0%/57.7%, and 63.8%/82.0%/51.3%)
            </div>
            <div className="col-span-8 sm:col-span-9 text-gray-600 leading-relaxed space-y-1">
              <p>• <strong>68.5%</strong> moderate-to-severe academic stress (Undergraduates): NEP 2020 and Students&apos; Mental Health: A Study on Undergraduate College Students of Odisha, IJRTI (Vol. 11, Issue 8, Aug 2026).</p>
              <p>• <strong>75.5%</strong> pre-exam stress (NEET-UG): Thiriveedhi et al. (2023), A Study on the Assessment of Anxiety and Its Effects on Students Taking NEET-UG 2020, Cureus (n = 200, Westside Test Anxiety Scale).</p>
              <p>• <strong>86.0%</strong> high stress, <strong>87.0%</strong> parental pressure, <strong>57.7%</strong> low well-being: Manipal College of Nursing cross-sectional survey, Journal of Education and Health Promotion (Dec 2024; n = 570 PUC competitive exam aspirants in Udupi, Karnataka).</p>
              <p>• <strong>63.8%</strong> depression, <strong>82.0%</strong> anxiety, <strong>51.3%</strong> stress (DASS-21): Mishra et al. (2020),{" "}
              <a
                href="https://www.nepjol.info/index.php/JPAN/article/view/36283"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:underline"
              >
                Stress and Coping Among Students Preparing For Medical Entrance Examinations
              </a>
              , Journal of Psychiatrists&apos; Association of Nepal (n = 261, DASS-21).</p>
            </div>
          </div>

          {/* Row 4: Counselling Authorities */}
          <div id="source-authorities" className="grid grid-cols-12 gap-3 px-3.5 py-2.5 items-start bg-gray-50/30 scroll-mt-20">
            <div className="col-span-4 sm:col-span-3 font-medium text-gray-900 leading-snug">
              40+ counselling authorities
            </div>
            <div className="col-span-8 sm:col-span-9 text-gray-600 leading-relaxed space-y-1">
              <p><strong>National Centralized Authorities (8+):</strong> MCC (UG/PG Medical), AACCC (AYUSH), JoSAA, CSAB, CCMT, CCMN, COAP, CUET-participating Central Universities (DU CSAS, BHU, JNU, etc.).</p>
              <p><strong>State-Level Technical &amp; Medical Authorities (32+):</strong> State CET Cells / DTEs / DMEs across 28 States &amp; 8 UTs (e.g., Maharashtra State CET Cell, KEA Karnataka, TNEA &amp; TN Medical Selection, UP DGME &amp; UPTAC, WBJEEB, Rajasthan REAP &amp; RUHS, MP DTE, Gujarat ACPC, Haryana HSTES, Kerala CEE, Telangana TS EAPCET, AP EAPCET, Bihar BCECEB, Odisha OJEE, etc.).</p>
            </div>
          </div>

          {/* Row 5: 1.5 Cr+ Applications */}
          <div id="source-applications" className="grid grid-cols-12 gap-3 px-3.5 py-2.5 items-start scroll-mt-20">
            <div className="col-span-4 sm:col-span-3 font-medium text-gray-900 leading-snug">
              1.5 crore+ applications
            </div>
            <div className="col-span-8 sm:col-span-9 text-gray-600 leading-relaxed space-y-1">
              <p>Annual Entrance &amp; Counselling Application Volume (
              <a
                href="https://nta.ac.in/Download/Notice/Notice_20260506020002.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:underline"
              >
                NTA Press Releases
              </a>
              {" "}&amp; Exam Bodies):</p>
              <p>• NEET-UG 2026: ~22.80 lakh unique applicants.</p>
              <p>• CUET-UG 2026: ~15.69 lakh unique applicants (spanning ~67.56 lakh subject-test instances) + CUET-PG (~4.5+ lakh).</p>
              <p>• JEE Main 2026: ~16.0+ lakh applications across Sessions 1 &amp; 2.</p>
              <p>• State CETs, Management, Law &amp; University Portals: ~80–95+ lakh combined applications across MHT-CET (~7+ lakh), KCET, EAPCET, WBJEE, GATE, CAT, CLAT, and multi-portal university registrations—totaling 1.5 crore+ annual applications.</p>
            </div>
          </div>

          {/* Row 6: Cost of One Cycle */}
          <div id="source-costs" className="grid grid-cols-12 gap-3 px-3.5 py-2.5 items-start bg-gray-50/30 scroll-mt-20">
            <div className="col-span-4 sm:col-span-3 font-medium text-gray-900 leading-snug">
              Cost of one cycle (₹150 to ₹400 crore)
            </div>
            <div className="col-span-8 sm:col-span-9 text-gray-600 leading-relaxed">
              Bottom-Up Administrative &amp; Institutional Expenditure Estimate: Derived from{" "}
              <a
                href="https://indianexpress.com/article/education/ntas-income-doubles-in-5-years-reaches-rs-1117-crore-expenditure-tops-rs-1040-crore-neet-ug-cuet-jeemain-ugcnet-10799850/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:underline"
              >
                National Testing Agency (NTA) Parliament disclosures
              </a>
              {" "}(FY24 total expenditure of ₹1,040.96 crore across ~12 national exams, averaging ~₹60–₹85 crore per mega-exam cycle) combined with estimated portal hosting, NIC/cloud bandwidth, verification staffing, and helpline operations across 40+ national and state counselling bodies.
            </div>
          </div>

          {/* Row 7: Private Guidance Market */}
          <div id="source-consultants" className="grid grid-cols-12 gap-3 px-3.5 py-2.5 items-start scroll-mt-20">
            <div className="col-span-4 sm:col-span-3 font-medium text-gray-900 leading-snug">
              Private guidance market and prices
            </div>
            <div className="col-span-8 sm:col-span-9 text-gray-600 leading-relaxed">
              Bottom-Up Market &amp; Pricing Estimate: Based on an estimated 5,000–15,000+ fragmented operators (local consultancies, solo YouTube/Telegram mentors, test-prep counselling wings, and lead-gen portals) serving ~10–15% of competitive exam/admission applicants at typical package tiers ranging from ₹1,500–₹5,000 (basic choice-filling/alert plans) to ₹15,000–₹50,000+ (full-cycle medical/private quota handholding).
            </div>
          </div>

          {/* Row 8: Engineering and Central University Vacancy */}
          <div id="source-vacancies" className="grid grid-cols-12 gap-3 px-3.5 py-2.5 items-start bg-gray-50/30 scroll-mt-20">
            <div className="col-span-4 sm:col-span-3 font-medium text-gray-900 leading-snug">
              Engineering and central university vacancy
            </div>
            <div className="col-span-8 sm:col-span-9 text-gray-600 leading-relaxed space-y-1">
              <p>• <strong>Engineering Vacancies:</strong>{" "}
              <a
                href="https://www.aicte.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:underline"
              >
                AICTE Approved Intake &amp; Enrolment Dashboard
              </a>
              {" "}&amp; AICTE state-wise trend compilations (~30%–35% national B.Tech vacancy rate, with ~4.0–4.8 lakh seats remaining unfilled annually out of ~12–14.9 lakh sanctioned intake).</p>
              <p>• <strong>Central University Vacancies:</strong>{" "}
              <a
                href="https://admission.uod.ac.in/2025/userfiles/downloads/08082025_VacantSeats.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:underline"
              >
                University of Delhi UG CSAS Vacant Seat Matrices
              </a>
              {" "}(showing thousands of seats remaining open across colleges after Round 3, triggering Mid-Entry and multiple Spot Rounds).</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* FOOTER */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
