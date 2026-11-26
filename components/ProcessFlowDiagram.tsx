"use client";

import { FileText, Award, Layers, Database, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ProcessFlowDiagram() {
  return (
    <div className="w-full my-8">
      {/* Outer Diagram Canvas */}
      <div className="border border-gray-200 rounded-[4px] px-4 sm:px-6 py-4 sm:py-5 bg-white relative overflow-hidden shadow-2xs">
        {/* Dotted Blueprint Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(#71717a 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* CSS Animation for Flowing Lines */}
        <style jsx>{`
          @keyframes flowForward {
            from {
              stroke-dashoffset: 24;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          .animate-flow {
            stroke-dasharray: 4 4;
            animation: flowForward 1.2s linear infinite;
          }
          .animate-flow-fast {
            stroke-dasharray: 3 3;
            animation: flowForward 0.8s linear infinite;
          }
        `}</style>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-3 w-full">
          {/* LEFT COLUMN: RAW DATA SOURCES */}
          <div className="flex flex-col items-center md:items-start gap-2.5 w-full md:w-auto flex-shrink-0">
            <span className="text-[11px] text-gray-500 font-normal">
              Student Inputs
            </span>

            {/* Source Node 1: Documents */}
            <div className="flex items-center gap-2 px-2.5 py-2 bg-white border border-gray-200/90 rounded-[4px] shadow-2xs w-[124px]">
              <FileText className="w-3.5 h-3.5 text-gray-700 stroke-[1.5] flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10.5px] font-medium text-gray-800 leading-tight">
                  Docs / APAAR
                </span>
                <span className="text-[8.5px] text-gray-400 font-normal">
                  Pre-verified records
                </span>
              </div>
            </div>

            {/* Source Node 2: Ranks */}
            <div className="flex items-center gap-2 px-2.5 py-2 bg-white border border-gray-200/90 rounded-[4px] shadow-2xs w-[124px]">
              <Award className="w-3.5 h-3.5 text-gray-700 stroke-[1.5] flex-shrink-0" />
              <span className="text-[10.5px] font-medium text-gray-800">
                Ranks / CET
              </span>
            </div>

            {/* Source Node 3: Choices */}
            <div className="flex items-center gap-2 px-2.5 py-2 bg-white border border-gray-200/90 rounded-[4px] shadow-2xs w-[124px]">
              <Layers className="w-3.5 h-3.5 text-gray-700 stroke-[1.5] flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10.5px] font-medium text-gray-800 leading-tight">
                  Choices
                </span>
                <span className="text-[8.5px] text-gray-400 font-normal">
                  Submitted on Dashboard
                </span>
              </div>
            </div>
          </div>

          {/* CONNECTOR SVG: Flow from Raw Data to Engine */}
          <div className="hidden md:block w-7 sm:w-8 h-28 relative flex-shrink-0">
            <svg width="32" height="112" viewBox="0 0 32 112" fill="none" className="w-full h-full">
              {/* Path from Docs */}
              <path d="M0 18 C16 18, 16 56, 32 56" stroke="#9e790d" strokeWidth="1.5" className="animate-flow" />
              {/* Path from Ranks */}
              <path d="M0 56 L32 56" stroke="#9e790d" strokeWidth="1.5" className="animate-flow" />
              {/* Path from Choices */}
              <path d="M0 94 C16 94, 16 56, 32 56" stroke="#9e790d" strokeWidth="1.5" className="animate-flow" />
            </svg>
          </div>

          {/* CENTER BOX: SUPERADMISSION ENGINE */}
          <div className="border border-dashed border-gray-300 rounded-[4px] p-2.5 sm:p-3 bg-gray-50/60 flex flex-col items-center relative w-full md:w-auto flex-shrink-0">
            <span className="text-[10.5px] text-gray-500 font-normal mb-2 self-start">
              Supradmission Engine
            </span>

            <div className="flex items-center gap-2">
              {/* Gold Core Block: Allocation Engine */}
              <div className="w-[56px] h-13 bg-[#9e790d] rounded-[4px] flex flex-col items-center justify-center text-white shadow-sm p-1 text-center flex-shrink-0">
                {/* 3x3 Grid Dots */}
                <div className="grid grid-cols-3 gap-0.5 mb-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} className="w-0.5 h-0.5 bg-white rounded-full opacity-90" />
                  ))}
                </div>
                <span className="text-[8px] font-semibold text-white leading-tight">
                  Allocation Engine
                </span>
              </div>

              {/* Internal Flow Arrow */}
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="text-[8px] text-gray-500 mb-0.5 whitespace-nowrap">
                  Apply Rules
                </span>
                <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
                  <path d="M0 5 H20" stroke="#9e790d" strokeWidth="1.5" className="animate-flow-fast" />
                  <polygon points="18,2.5 24,5 18,7.5" fill="#9e790d" />
                </svg>
              </div>

              {/* Database Node: Seat Matrix */}
              <div className="flex flex-col items-center justify-center w-[52px] h-13 bg-white border border-gray-200 rounded-[4px] p-1 shadow-2xs text-center flex-shrink-0">
                <Database className="w-3.5 h-3.5 text-gray-700 stroke-[1.5] mb-1" />
                <span className="text-[8px] font-medium text-gray-700 leading-tight">
                  Seat Matrix
                </span>
              </div>
            </div>
          </div>

          {/* CONNECTOR SVG: Flow from Engine to Student Context */}
          <div className="hidden md:block w-7 sm:w-8 h-28 relative flex-shrink-0">
            <svg width="32" height="112" viewBox="0 0 32 112" fill="none" className="w-full h-full">
              <path d="M0 56 L32 56" stroke="#9e790d" strokeWidth="1.5" className="animate-flow" />
              <polygon points="26,53 32,56 26,59" fill="#9e790d" />
            </svg>
          </div>

          {/* RIGHT COLUMN: RECONCILED ALLOCATION CONTEXT */}
          <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto flex-shrink-0">
            <span className="text-[11px] text-gray-500 font-normal">
              Seat Allocation
            </span>

            <div className="flex flex-col items-center justify-center p-2.5 bg-white border border-gray-200/90 rounded-[4px] shadow-2xs w-[124px] text-center">
              <ShieldCheck className="w-4 h-4 text-[#9e790d] stroke-[1.5] mb-1" />
              <span className="text-[11px] font-semibold text-gray-950">
                Student Dashboard
              </span>
              <span className="text-[9px] text-emerald-600 mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5" /> Verified Seat Allotted
              </span>
            </div>

            {/* Badges of Target Counsellings */}
            <div className="grid grid-cols-2 gap-1 w-[124px]">
              {["JoSAA", "JAC Delhi", "CSAB", "State CET"].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-mono text-gray-500 bg-gray-100/90 text-center py-0.5 rounded-[2px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Figure 1 Caption */}
      <p className="text-xs text-gray-500 leading-relaxed mt-2.5 font-normal">
        <span className="font-medium text-gray-700">Figure 1.</span> Verified credentials, exam ranks, and student choices enter Supradmission. The allocation engine checks eligibility and reservation rules against Manifest’s verified seat matrix, delivering confirmed seat allotments directly to the student’s Dashboard across participating counselling bodies.
      </p>
    </div>
  );
}
