"use client";

import { FileText, Award, Layers, Database, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ProcessFlowDiagram() {
  return (
    <div className="w-full my-8">
      {/* Outer Diagram Canvas */}
      <div className="border border-gray-200 rounded-[4px] p-6 sm:p-8 bg-white relative overflow-hidden shadow-2xs">
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

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* LEFT COLUMN: RAW DATA SOURCES */}
          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
              RAW DATA
            </span>

            {/* Source Node 1: Documents */}
            <div className="flex items-center gap-2.5 px-3 py-2 bg-white border border-gray-200/90 rounded-[4px] shadow-2xs w-[130px]">
              <FileText className="w-4 h-4 text-gray-700 stroke-[1.5]" />
              <span className="text-[11px] font-mono font-medium text-gray-800 tracking-wider">
                DOCS / APAAR
              </span>
            </div>

            {/* Source Node 2: Ranks */}
            <div className="flex items-center gap-2.5 px-3 py-2 bg-white border border-gray-200/90 rounded-[4px] shadow-2xs w-[130px]">
              <Award className="w-4 h-4 text-gray-700 stroke-[1.5]" />
              <span className="text-[11px] font-mono font-medium text-gray-800 tracking-wider">
                RANKS / CET
              </span>
            </div>

            {/* Source Node 3: Choices */}
            <div className="flex items-center gap-2.5 px-3 py-2 bg-white border border-gray-200/90 rounded-[4px] shadow-2xs w-[130px]">
              <Layers className="w-4 h-4 text-gray-700 stroke-[1.5]" />
              <span className="text-[11px] font-mono font-medium text-gray-800 tracking-wider">
                CHOICES
              </span>
            </div>
          </div>

          {/* CONNECTOR SVG: Flow from Raw Data to Engine */}
          <div className="hidden md:block w-16 h-28 relative">
            <svg width="64" height="112" viewBox="0 0 64 112" fill="none" className="w-full h-full">
              {/* Path from Docs */}
              <path d="M0 18 C32 18, 32 56, 64 56" stroke="#2563eb" strokeWidth="1.5" className="animate-flow" />
              {/* Path from Ranks */}
              <path d="M0 56 L64 56" stroke="#2563eb" strokeWidth="1.5" className="animate-flow" />
              {/* Path from Choices */}
              <path d="M0 94 C32 94, 32 56, 64 56" stroke="#2563eb" strokeWidth="1.5" className="animate-flow" />
            </svg>
          </div>

          {/* CENTER BOX: SUPERADMISSION ENGINE */}
          <div className="border border-dashed border-gray-300 rounded-[4px] p-4 bg-gray-50/60 flex flex-col items-center relative w-full md:w-auto">
            <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase mb-3 self-start">
              SUPERADMISSION PROTOCOL
            </span>

            <div className="flex items-center gap-4">
              {/* Blue Core Block: PraveshAI Core */}
              <div className="w-14 h-14 bg-[#2563eb] rounded-[4px] flex flex-col items-center justify-center text-white shadow-sm p-1">
                {/* 3x3 Grid Dots */}
                <div className="grid grid-cols-3 gap-1 mb-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} className="w-1 h-1 bg-white rounded-full opacity-90" />
                  ))}
                </div>
                <span className="text-[8px] font-mono font-semibold tracking-wider text-white">
                  PRAVESH-1
                </span>
              </div>

              {/* Internal Flow Arrow */}
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-mono text-gray-400 mb-0.5 tracking-wider">
                  RECONCILE
                </span>
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                  <path d="M0 6 H36" stroke="#2563eb" strokeWidth="1.5" className="animate-flow-fast" />
                  <polygon points="34,3 40,6 34,9" fill="#2563eb" />
                </svg>
              </div>

              {/* Database Node: Seat Matrix V26 */}
              <div className="flex flex-col items-center justify-center w-14 h-14 bg-white border border-gray-200 rounded-[4px] p-1 shadow-2xs">
                <Database className="w-4 h-4 text-gray-700 stroke-[1.5] mb-1" />
                <span className="text-[8px] font-mono font-medium text-gray-700 tracking-tight">
                  SEAT DB V26
                </span>
              </div>
            </div>
          </div>

          {/* CONNECTOR SVG: Flow from Engine to Student Context */}
          <div className="hidden md:block w-16 h-28 relative">
            <svg width="64" height="112" viewBox="0 0 64 112" fill="none" className="w-full h-full">
              <path d="M0 56 L64 56" stroke="#2563eb" strokeWidth="1.5" className="animate-flow" />
              <polygon points="58,53 64,56 58,59" fill="#2563eb" />
            </svg>
          </div>

          {/* RIGHT COLUMN: RECONCILED ALLOCATION CONTEXT */}
          <div className="flex flex-col items-center md:items-start gap-2.5 w-full md:w-auto">
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
              ALLOCATE VIA PROTOCOL
            </span>

            <div className="flex flex-col items-center justify-center p-3.5 bg-white border border-gray-200/90 rounded-[4px] shadow-2xs w-[140px] text-center">
              <ShieldCheck className="w-5 h-5 text-[#2563eb] stroke-[1.5] mb-1" />
              <span className="text-[11px] font-mono font-semibold text-gray-900 tracking-wider">
                STUDENT CONTEXT
              </span>
              <span className="text-[9px] text-emerald-600 font-mono mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5" /> VERIFIED SEAT
              </span>
            </div>

            {/* Badges of Target Counsellings */}
            <div className="flex items-center gap-1.5 flex-wrap justify-center pt-1">
              {["JoSAA", "JAC Delhi", "CSAB", "State CET"].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-mono text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-[2px]"
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
        <span className="font-medium text-gray-700">Figure 1.</span> Raw documents, ranks, and choice matrices enter Superadmission. PraveshAI verifies and reconciles eligibility against the admission matrix, and seats are cryptographically allocated directly into the student context across all integrated counselling bodies.
      </p>
    </div>
  );
}
