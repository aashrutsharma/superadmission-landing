"use client";

import Link from "next/link";
import HeatGraphActivity from "./HeatGraphActivity";
import PublicBenchmarkBar from "./PublicBenchmarkBar";
import BenchmarkLineChart from "./BenchmarkLineChart";
import SuperadmissionWordmark from "./SuperadmissionWordmark";

export default function ProductionGrid() {
  return (
    <div className="flex flex-col gap-3.5 w-full">
      {/* Top 2 Cards: Latency & Independent Benchmarks */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
        {/* Card A: Today vs One day */}
        <div className="md:col-span-8 border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between shadow-2xs">
          <div>
            <h3 className="text-[14px] font-medium text-gray-900 tracking-tight">Today vs One day</h3>
            <p className="text-[11px] font-mono text-gray-400 mt-0.5 mb-3 tracking-wider">
              Per applicant / admission cycle
            </p>

            {/* Clean shadcn-style separator table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-2.5 px-0 font-mono text-[11px] font-medium text-gray-400 tracking-wider">
                      Parameter
                    </th>
                    <th className="py-2.5 px-3 text-center sm:text-right font-mono text-[11px] font-medium text-gray-400 tracking-wider">
                      Today
                    </th>
                    <th className="py-2.5 px-0 text-right">
                      <SuperadmissionWordmark className="h-[12px] w-auto ml-auto text-[#9e790d] inline-block align-middle" />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="transition-colors hover:bg-gray-50/40">
                    <td className="py-3 px-0 text-[13px] text-gray-800 font-normal">
                      Platforms used
                    </td>
                    <td className="py-3 px-3 text-center sm:text-right font-mono text-[13px] text-gray-500">
                      4–6
                    </td>
                    <td className="py-3 px-0 text-right font-mono text-[13.5px] font-semibold text-[#9e790d]">
                      1
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-gray-50/40">
                    <td className="py-3 px-0 text-[13px] text-gray-800 font-normal">
                      Document Uploads
                    </td>
                    <td className="py-3 px-3 text-center sm:text-right font-mono text-[13px] text-gray-500">
                      4–6 times
                    </td>
                    <td className="py-3 px-0 text-right text-[13px] font-medium text-[#9e790d]">
                      Fetched once from DigiLocker
                    </td>
                  </tr>
                </tbody>
              </table>
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
          Estimated Processing Time per Applicant
        </h3>
        <BenchmarkLineChart />
      </div>
    </div>
  );
}
