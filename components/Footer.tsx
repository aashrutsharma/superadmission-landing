"use client";

import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaLinkedin, FaReddit, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full pt-12 pb-10 mt-12 text-sm border-t border-gray-200/80">
      {/* Upper Footer: Brand on Left, Generous Gap, 3 Link Columns on Right */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 mb-12">
        {/* Brand Column */}
        <div className="max-w-[210px] shrink-0">
          <Link href="/" className="inline-flex items-center mb-3 no-underline">
            <Image
              src="/images/Fairhold Corporation Logo.svg"
              alt="Fairhold Corporation"
              width={160}
              height={30}
              className="h-[22px] w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-[11px] text-gray-500 leading-relaxed mb-3 font-normal">
            The unified digital public infrastructure for Indian academic admissions.
          </p>
          <span className="text-[10px] font-mono font-medium text-gray-400 tracking-wider uppercase">
            NEW DELHI
          </span>
        </div>

        {/* Right 3 Navigation Columns */}
        <div className="grid grid-cols-3 gap-8 sm:gap-12 md:gap-14 flex-1 max-w-[420px]">
          {/* Column 1: PRODUCT */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono font-medium text-gray-400 tracking-wider uppercase mb-0.5">
              PRODUCT
            </span>
            <Link href="/product" className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline">
              Product
            </Link>
            <Link href="/pricing" className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline">
              Pricing
            </Link>
            <Link href="/changelog" className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline">
              Changelog
            </Link>
            <Link href="/research" className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline">
              vs Legacy NIC
            </Link>
            <a
              href="https://docs.superadmission.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline"
            >
              Docs ↗
            </a>
            <a
              href="https://superadmission.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline"
            >
              Console ↗
            </a>
          </div>

          {/* Column 2: COMPANY */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono font-medium text-gray-400 tracking-wider uppercase mb-0.5">
              COMPANY
            </span>
            <Link href="/product" className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline">
              About
            </Link>
            <Link href="/blog" className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline">
              Blog
            </Link>
            <Link href="/cms" className="text-xs text-[#2563eb] hover:underline font-medium no-underline">
              CMS Portal ↗
            </Link>
            <Link href="/research" className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline">
              Research
            </Link>
            <a
              href="mailto:careers@superadmission.com"
              className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline"
            >
              Careers ↗
            </a>
            <a
              href="mailto:contact@superadmission.com"
              className="text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline"
            >
              Talk to sales ↗
            </a>
          </div>

          {/* Column 3: FOLLOW US ON */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-mono font-medium text-gray-400 tracking-wider uppercase mb-0.5">
              FOLLOW US ON
            </span>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline"
            >
              <FaXTwitter className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition-colors shrink-0" />
              <span>X</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline"
            >
              <FaLinkedin className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition-colors shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline"
            >
              <FaReddit className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition-colors shrink-0" />
              <span>Reddit</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors no-underline"
            >
              <FaYoutube className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition-colors shrink-0" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-normal">
        <div className="flex items-center gap-3.5 flex-wrap">
          <span>&copy; 2026 superadmission</span>
          <a href="https://docs.superadmission.com/superadmission/trust-and-security" target="_blank" className="hover:text-gray-700 transition-colors">
            Privacy
          </a>
          <a href="https://docs.superadmission.com" target="_blank" className="hover:text-gray-700 transition-colors">
            Terms
          </a>
          <a href="https://docs.superadmission.com/superadmission/trust-and-security" target="_blank" className="hover:text-gray-700 transition-colors">
            Security
          </a>
          <a href="mailto:security@superadmission.com" className="hover:text-gray-700 transition-colors">
            Responsible disclosure
          </a>
          <span className="hover:text-gray-700 transition-colors cursor-pointer">
            Cookie settings
          </span>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-500 font-medium font-mono text-[11px]">All systems operational</span>
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-gray-700 transition-colors flex items-center gap-0.5 cursor-pointer bg-transparent border-none text-gray-400 text-xs font-medium"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
