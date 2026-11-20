"use client";

import Link from "next/link";
import { ShieldCheck, Lock, Award } from "lucide-react";

export default function EnterpriseSecurity() {
  return (
    <div className="w-full my-10">
      <div className="mb-5">
        <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
          Enterprise security.
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-4 font-normal">
          Superadmission is fully compliant with the Digital Personal Data Protection (DPDP) Act 2023, ISO 27001 certified, and integrated with sovereign India Stack standards. We sign your SLAs and DPAs, and deploy air-gapped where student data cannot leave government premises.
        </p>
      </div>

      {/* 3 Badges with crisp 4px corners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white flex flex-col items-center justify-center text-center h-[110px] shadow-2xs">
          <ShieldCheck className="w-7 h-7 text-[#2563eb] mb-2 stroke-[1.5]" />
          <span className="text-[11px] font-semibold text-gray-900 tracking-wider uppercase">DPDP ACT 2023</span>
          <span className="text-[9px] font-mono text-gray-400">COMPLIANT</span>
        </div>

        <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white flex flex-col items-center justify-center text-center h-[110px] shadow-2xs">
          <Award className="w-7 h-7 text-gray-800 mb-2 stroke-[1.5]" />
          <span className="text-[11px] font-semibold text-gray-900 tracking-wider uppercase">ISO 27001</span>
          <span className="text-[9px] font-mono text-gray-400">CERTIFIED SYSTEM</span>
        </div>

        <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white flex flex-col items-center justify-center text-center h-[110px] shadow-2xs">
          <Lock className="w-7 h-7 text-[#2563eb] mb-2 stroke-[1.5]" />
          <span className="text-[11px] font-semibold text-gray-900 tracking-wider uppercase">INDIA STACK</span>
          <span className="text-[9px] font-mono text-gray-400">APAAR / DIGILOCKER</span>
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-5 text-xs font-medium">
        <Link href="https://docs.superadmission.com/superadmission/trust-and-security" target="_blank" className="text-gray-900 hover:text-[#2563eb] transition-colors no-underline">
          Security and compliance ↗
        </Link>
        <Link href="https://docs.superadmission.com" target="_blank" className="text-gray-900 hover:text-[#2563eb] transition-colors no-underline">
          Trust center ↗
        </Link>
        <Link href="https://docs.superadmission.com" target="_blank" className="text-gray-900 hover:text-[#2563eb] transition-colors no-underline">
          Self-hosting in the docs ↗
        </Link>
      </div>
    </div>
  );
}
