"use client";

import Link from "next/link";

export default function RunsEverywhere() {
  return (
    <div className="w-full my-10">
      <div className="mb-5">
        <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
          superadmission runs everywhere, even in air-gapped environments.
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-2.5 font-normal">
          We build all the critical infrastructure ourselves. Which means we can deploy it wherever state and university data lives.
        </p>
        <Link
          href="https://docs.superadmission.com"
          target="_blank"
          className="text-xs font-medium text-gray-900 hover:text-[#2563eb] transition-colors inline-flex items-center gap-1"
        >
          Talk to us for your deployment requirements ↗
        </Link>
      </div>

      {/* 3 Architecture Cards with crisp 4px corners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Card 001 */}
        <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white flex flex-col justify-between h-[230px] shadow-2xs">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-900">In state data center</span>
              <span className="text-[10px] font-mono text-gray-400">001</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
              Scale and Government, air-gapped on Enterprise
            </p>
          </div>
          {/* SVG Dotted Server Illustration */}
          <div className="w-full flex justify-center py-2">
            <svg width="74" height="84" viewBox="0 0 84 96" fill="none" className="text-[#9e790d]">
              <rect x="12" y="8" width="60" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <rect x="12" y="38" width="60" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <rect x="12" y="68" width="60" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="24" cy="18" r="2.5" fill="currentColor" />
              <circle cx="34" cy="18" r="2.5" fill="currentColor" opacity="0.6" />
              <circle cx="24" cy="48" r="2.5" fill="currentColor" />
              <circle cx="34" cy="48" r="2.5" fill="currentColor" opacity="0.6" />
              <circle cx="24" cy="78" r="2.5" fill="currentColor" />
              <circle cx="34" cy="78" r="2.5" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        </div>

        {/* Card 002 */}
        <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white flex flex-col justify-between h-[230px] shadow-2xs">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-900">In your sovereign VPC</span>
              <span className="text-[10px] font-mono text-gray-400">002</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
              Scale and Enterprise on NIC & Cloud
            </p>
          </div>
          {/* SVG Dotted Cloud Illustration */}
          <div className="w-full flex justify-center py-2">
            <svg width="84" height="84" viewBox="0 0 96 96" fill="none" className="text-[#9e790d]">
              <path
                d="M24 64C17.3726 64 12 58.6274 12 52C12 45.8565 16.6124 40.7937 22.5858 40.0964C24.4756 29.7431 33.4862 22 44.4 22C56.6047 22 66.604 31.4284 67.4332 43.4357C74.3414 44.5765 79.6 50.5644 79.6 57.8C79.6 65.8634 73.0634 72.4 65 72.4L24 72.4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <circle cx="44" cy="48" r="3" fill="currentColor" />
              <circle cx="56" cy="48" r="3" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        </div>

        {/* Card 003 */}
        <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white flex flex-col justify-between h-[230px] shadow-2xs">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-900">On campus node</span>
              <span className="text-[10px] font-mono text-gray-400">003</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
              Superadmission Local: free for spot rounds
            </p>
          </div>
          {/* SVG Dotted Laptop Illustration */}
          <div className="w-full flex justify-center py-2">
            <svg width="84" height="84" viewBox="0 0 96 96" fill="none" className="text-[#9e790d]">
              <rect x="20" y="24" width="56" height="38" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M12 68H84L76 74H20L12 68Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
              <line x1="42" y1="42" x2="54" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
