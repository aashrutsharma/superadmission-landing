"use client";

import Link from "next/link";
import PixelSparkline from "./PixelSparkline";
import PublicBenchmarkBar from "./PublicBenchmarkBar";
import BenchmarkLineChart from "./BenchmarkLineChart";

export default function ProductionGrid() {
  return (
    <div className="flex flex-col gap-3.5 w-full">
      {/* Top 2 Cards: Latency & Independent Benchmarks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* Card 1: Allocation Latency */}
        <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between shadow-2xs">
          <div>
            <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Allocation latency</h3>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-0.5 mb-5">
              PER CANDIDATE, ON PRODUCTION TRAFFIC
            </p>

            <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 font-mono mb-2">
              <span></span>
              <span className="text-right">SERVER</span>
              <span className="text-right">END TO END</span>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-3 items-baseline gap-2">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">ELIGIBILITY</span>
                <div className="text-right">
                  <span className="text-2xl font-normal text-gray-900 tracking-tight">142</span>
                  <span className="text-xs text-gray-400 ml-0.5 font-mono">ms</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-normal text-gray-900 tracking-tight">280</span>
                  <span className="text-xs text-gray-400 ml-0.5 font-mono">ms</span>
                </div>
              </div>

              <div className="grid grid-cols-3 items-baseline gap-2">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">ALLOCATION</span>
                <div className="text-right">
                  <span className="text-2xl font-normal text-gray-900 tracking-tight">118</span>
                  <span className="text-xs text-gray-400 ml-0.5 font-mono">ms</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-normal text-gray-900 tracking-tight">195</span>
                  <span className="text-xs text-gray-400 ml-0.5 font-mono">ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Independent Benchmarks */}
        <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between shadow-2xs">
          <div>
            <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Independent benchmarks</h3>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-0.5 mb-3.5">
              NATIONAL ADMISSIONS AUDIT, 2026
            </p>
            <p className="text-[13px] text-gray-700 leading-relaxed font-normal">
              &ldquo;Superadmission <mark className="bg-blue-100 text-[#2563eb] px-1 py-0.5 rounded-[2px] font-medium">performs best overall</mark>, achieving round reconciliation completion rate of 99.82% and the lowest vacancy discrepancy rate of 0.08%.&rdquo;
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5 pt-3.5 border-t border-gray-100 text-xs font-medium">
            <Link href="/research" className="text-gray-900 hover:text-[#2563eb] transition-colors no-underline">
              Read the audit ↗
            </Link>
            <Link href="/research" className="text-gray-500 hover:text-gray-900 transition-colors no-underline">
              How we compare to legacy ↗
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Row: Applications + Institutions (Left) & Public Benchmarks (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* Left Column: Stacked Tokens & Organizations */}
        <div className="flex flex-col gap-3.5">
          {/* Card 3: Applications processed */}
          <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between shadow-2xs">
            <div>
              <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Applications processed</h3>
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-0.5 mb-2.5">
                PER ADMISSION SEASON
              </p>
              <div className="text-3xl font-medium tracking-tight text-gray-900 mb-1">1.5M+</div>
            </div>
            <PixelSparkline />
          </div>

          {/* Card 4: Institutions & Authorities */}
          <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white shadow-2xs">
            <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Institutions & Authorities</h3>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-0.5 mb-2.5">
              ACROSS 28 STATES & UNION TERRITORIES
            </p>
            <div className="text-3xl font-medium tracking-tight text-gray-900">1,200+</div>
          </div>
        </div>

        {/* Right Column: Card 5 Public Benchmarks */}
        <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between shadow-2xs">
          <div>
            <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Public benchmarks</h3>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-0.5 mb-2.5">
              STATE OF THE ART ON JOINT SEAT ALLOCATION
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

      {/* Bottom Full-Width Card: Card 6 Our Benchmarks */}
      <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white shadow-2xs">
        <h3 className="text-[14px] font-medium text-gray-900 tracking-tight mb-4">Our benchmarks</h3>
        <BenchmarkLineChart />
      </div>
    </div>
  );
}
