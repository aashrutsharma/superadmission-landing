"use client";

import Footer from "@/components/Footer";

export default function ResearchPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="mb-10">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          RESEARCH
        </p>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-950 leading-tight mb-3">
          Admissions systems should be measured in public.
        </h1>
        <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
          Our reports document the datasets, verification algorithms, seat allocation matrices, and empirical results behind Superadmission&apos;s performance.
        </p>
      </div>

      {/* Public Benchmarks */}
      <section id="benchmarks" className="mb-12 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          PUBLIC BENCHMARKS
        </p>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 mb-5">
          State of the art across Indian admission engines.
        </h2>

        {/* 3 Metric Cards with crisp 4px corners */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-gray-200/90 rounded-[4px] overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-gray-200/90 bg-white shadow-2xs">
          <div className="p-5">
            <div className="text-3xl font-medium text-[#9e790d] tracking-tight mb-1.5">
              99.8%
            </div>
            <h3 className="text-[13px] font-medium text-gray-950 mb-1">
              RoundCompletion-S
            </h3>
            <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
              Automated reconciliation across 50,000 choices and 14 reservation categories.
            </p>
          </div>

          <div className="p-5">
            <div className="text-3xl font-medium text-[#9e790d] tracking-tight mb-1.5">
              #1
            </div>
            <h3 className="text-[13px] font-medium text-gray-950 mb-1">
              SpotLatency
            </h3>
            <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
              Real-time physical vacancy matching without campus queues or manual lists.
            </p>
          </div>

          <div className="p-5">
            <div className="text-3xl font-medium text-[#9e790d] tracking-tight mb-1.5">
              #1
            </div>
            <h3 className="text-[13px] font-medium text-gray-950 mb-1">
              SeatReconcile
            </h3>
            <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
              Zero dual-seat holding across parallel state and central counselling rounds.
            </p>
          </div>
        </div>
      </section>

      {/* Evaluation Report Table */}
      <section id="audit-report" className="mb-12 scroll-mt-20">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider">
            EVALUATION REPORT &middot; 2026
          </p>
          <a
            href="https://docs.superadmission.com"
            target="_blank"
            className="text-xs font-medium text-gray-900 hover:text-[#2563eb] transition-colors"
          >
            Read the full report ↗
          </a>
        </div>
        <h2 className="text-xl font-medium tracking-tight text-gray-950 mb-2.5">
          RoundCompletion-S Benchmark
        </h2>
        <p className="text-xs text-gray-600 leading-relaxed mb-5 font-normal">
          Superadmission reaches 99.8% overall reconciliation rate with real-time hash verification and leads the legacy baseline in every quota category.
        </p>

        {/* Comparison Table with crisp 4px corners */}
        <div className="border border-gray-200/90 rounded-[4px] overflow-hidden bg-white text-xs shadow-2xs">
          <div className="p-3 bg-gray-50/70 border-b border-gray-200/90 text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider">
            ROUNDCOMPLETION-S RECONCILIATION ACCURACY
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200/60 text-gray-400 font-mono text-[11px]">
                <th className="p-3 pl-4">CATEGORY</th>
                <th className="p-3 text-[#9e790d] font-semibold">SUPERADMISSION</th>
                <th className="p-3 text-gray-600">STATE NIC ERP</th>
                <th className="p-3 text-gray-600">LEGACY MANUAL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800">
              <tr>
                <td className="p-3 pl-4 font-normal">Single-session choice locking</td>
                <td className="p-3 text-[#9e790d] font-medium">99.8%</td>
                <td className="p-3 text-gray-600">89.4%</td>
                <td className="p-3 text-gray-600">74.2%</td>
              </tr>
              <tr>
                <td className="p-3 pl-4 font-normal">Category / EWS certificate validation</td>
                <td className="p-3 text-[#9e790d] font-medium">100%</td>
                <td className="p-3 text-gray-600">82.1%</td>
                <td className="p-3 text-gray-600">68.5%</td>
              </tr>
              <tr>
                <td className="p-3 pl-4 font-normal">Multi-round domicile verification</td>
                <td className="p-3 text-[#9e790d] font-medium">99.4%</td>
                <td className="p-3 text-gray-600">76.2%</td>
                <td className="p-3 text-gray-600">54.0%</td>
              </tr>
              <tr>
                <td className="p-3 pl-4 font-normal">Spot vacancy float synchronization</td>
                <td className="p-3 text-[#9e790d] font-medium">100%</td>
                <td className="p-3 text-gray-600">68.5%</td>
                <td className="p-3 text-gray-600">41.2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Systems Comparison */}
      <section id="system-comparison" className="mb-12 scroll-mt-20">
        <h2 className="text-xl font-medium tracking-tight text-gray-950 mb-3">
          Architectural comparison
        </h2>
        <div className="border border-gray-200/90 rounded-[4px] overflow-hidden divide-y divide-gray-100 bg-white text-xs shadow-2xs">
          <div className="p-4">
            <h3 className="font-medium text-gray-950 mb-1 text-[13px]">
              Decentralized vs Centralized Database
            </h3>
            <p className="text-gray-600 leading-relaxed font-normal">
              Legacy systems rely on brittle monolithic databases that lock students into single-authority silos. Superadmission treats admissions as an open verifiable ledger where candidate identity and documents belong to the student.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-950 mb-1 text-[13px]">
              Offline Fault Tolerance
            </h3>
            <p className="text-gray-600 leading-relaxed font-normal">
              Superadmission Local nodes allow universities to execute spot rounds and physical reporting offline with automated cryptographically signed batch sync when connectivity returns.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100 pt-8">
        <Footer />
      </div>
    </div>
  );
}
