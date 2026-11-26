"use client";

import Link from "next/link";
import HeatGraphActivity from "./HeatGraphActivity";
import PublicBenchmarkBar from "./PublicBenchmarkBar";
import BenchmarkLineChart from "./BenchmarkLineChart";

export default function ProductionGrid() {
  return (
    <div className="flex flex-col gap-3.5 w-full">
      {/* Top 2 Cards: Latency & Independent Benchmarks */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
        {/* Card A: Today vs One day (Expanded to 8 cols so Superadmission column & DigiLocker never cut off) */}
        <div className="md:col-span-8 border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between shadow-2xs">
          <div>
            <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Today vs One day</h3>
            <p className="text-[11px] font-mono text-gray-400 mt-0.5 mb-3.5 uppercase tracking-wider">
              PER CANDIDATE, ACROSS ONE ADMISSION CYCLE
            </p>

            <div className="border border-gray-100 rounded-[4px] bg-gray-50/40 divide-y divide-gray-100 text-xs">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-2 px-3.5 py-2 bg-gray-100/60 font-mono text-[10px] sm:text-[10.5px] text-gray-500 uppercase tracking-normal sm:tracking-wider">
                <span className="col-span-4 font-medium">Metric</span>
                <span className="col-span-2 text-center sm:text-right font-medium">Today</span>
                <span className="col-span-6 text-right font-semibold text-[#9e790d]">
                  Superadmission
                </span>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-12 gap-2 px-3.5 py-2.5 items-center bg-white">
                <span className="col-span-4 text-gray-700 font-medium leading-tight">Platforms used</span>
                <span className="col-span-2 text-center sm:text-right font-mono text-sm text-gray-600">4–6</span>
                <div className="col-span-6 text-right">
                  <span className="inline-flex items-center justify-center font-mono font-bold text-xs bg-amber-50 text-[#9e790d] border border-amber-200/80 px-2 py-0.5 rounded-[3px]">
                    1
                  </span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-12 gap-2 px-3.5 py-2.5 items-center bg-white">
                <span className="col-span-4 text-gray-700 font-medium leading-tight">Document Uploads</span>
                <span className="col-span-2 text-center sm:text-right font-mono text-xs text-gray-600">4–6 times</span>
                <div className="col-span-6 text-right leading-tight">
                  <span className="inline-block text-[11px] font-medium text-[#9e790d] bg-amber-50/70 border border-amber-200/70 px-2.5 py-1 rounded-[3px] text-right">
                    Fetched once <br />
                    from DigiLocker
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Independent Benchmarks (Shortened to 4 cols) */}
        <div className="md:col-span-4 border border-gray-200/90 rounded-[4px] p-4.5 bg-white flex flex-col justify-between shadow-2xs">
          <div>
            <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Independent benchmarks</h3>
            <p className="text-[11.5px] text-gray-500 font-normal mt-0.5 mb-2.5">
              National Admissions Audit, 2026
            </p>
            <p className="text-[12px] text-gray-700 leading-relaxed font-normal">
              &ldquo;Superadmission <mark className="bg-amber-100/80 text-[#9e790d] px-1 py-0.5 rounded-[2px] font-medium">performs best overall</mark>, achieving round reconciliation completion rate of 99.82% and vacancy discrepancy rate of 0.08%.&rdquo;
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mt-4 pt-3 border-t border-gray-100 text-[11.5px] font-medium">
            <Link href="/research" className="text-gray-900 hover:text-[#2563eb] transition-colors no-underline">
              Read the audit ↗
            </Link>
            <Link href="/research" className="text-gray-500 hover:text-gray-900 transition-colors no-underline">
              How we compare ↗
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Row: Applications + Institutions (Left) & Public Benchmarks (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* Left Column: Stacked Tokens & Organizations */}
        <div className="flex flex-col gap-3.5">
          {/* Card C: Application Processed */}
          <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between shadow-2xs">
            <div>
              <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Application Processed</h3>
              <p className="text-[12px] text-gray-500 font-normal mt-0.5 mb-2.5">
                Per admission cycle
              </p>
              <div className="text-3xl font-medium tracking-tight text-gray-900 mb-1">1.5 Crore +</div>
            </div>
            <HeatGraphActivity />
          </div>

          {/* Card E: Institutions & Authorities */}
          <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white shadow-2xs">
            <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Institutions & Authorities</h3>
            <p className="text-[12px] text-gray-500 font-normal mt-0.5 mb-2.5">
              Across 28 states & union territories
            </p>
            <div className="text-3xl font-medium tracking-tight text-gray-900">58,000+</div>
          </div>
        </div>

        {/* Right Column: Card D Accessibility */}
        <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between shadow-2xs">
          <div>
            <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Accessibility</h3>
            <p className="text-[12px] text-gray-500 font-normal mt-0.5 mb-2.5">
              For students of diverse backgrounds
            </p>
            <div className="text-3xl font-medium tracking-tight text-gray-900 mb-3">#1</div>
            <PublicBenchmarkBar />
          </div>
          <div className="mt-3.5 pt-3 border-t border-gray-100">
            <Link href="/research" className="text-xs font-medium text-gray-900 hover:text-[#2563eb] transition-colors no-underline">
              See the research ↗
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Full-Width Card: Benchmarks panel */}
      <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white shadow-2xs">
        <h3 className="text-[14px] font-medium text-gray-900 tracking-tight mb-4">
          Predicted Scope : Time per allocation
        </h3>
        <BenchmarkLineChart />
      </div>
    </div>
  );
}
