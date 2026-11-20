"use client";

import Image from "next/image";

export default function ProductionCTA() {
  return (
    <div className="w-full rounded-[4px] overflow-hidden relative my-10 p-7 md:p-8 bg-gradient-to-br from-[#0c1e3d] via-[#102a5c] to-[#0a1931] text-white shadow-md">
      {/* Subtle dotted background grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#93c5fd 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-[500px]">
        <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-2.5">
          Running admissions in production?
        </h3>
        <p className="text-xs md:text-[13px] text-blue-100/80 leading-relaxed mb-5 font-normal">
          If your university, state council, or central authority already manages seat allocations, you should be running on the engine the benchmarks and numbers above describe. Any board, any university, through our API, portal, and sandbox.
        </p>

        <a
          href="https://superadmission.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#0f2756] hover:bg-blue-50 text-xs font-semibold px-4 py-2.5 rounded-[3px] transition-all shadow-xs no-underline uppercase tracking-wider"
        >
          <div className="w-3.5 h-3.5 relative flex-shrink-0">
            <Image
              src="/images/Superadmission_Icon_New.png"
              alt="Superadmission"
              width={14}
              height={14}
              className="object-contain"
            />
          </div>
          Enter Playground
        </a>
      </div>
    </div>
  );
}
