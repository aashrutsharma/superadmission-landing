"use client";

import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  type?: "praveshai" | "manifest" | "spot";
}

export default function FeatureCard({ icon, title, description, type = "praveshai" }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 py-3">
      {/* Primary Ochre Square with Vector Illustration and Crisp 4px Corners */}
      <div className="w-12 h-12 rounded-[4px] bg-[#9e790d] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
        {icon ? (
          icon
        ) : type === "praveshai" ? (
          // Concentric circular flow
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" opacity="0.4" strokeDasharray="2 2" />
            <circle cx="12" cy="12" r="5" strokeWidth="1.8" />
            <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : type === "manifest" ? (
          // Mesh / graph geometry
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" opacity="0.5" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            <line x1="12" y1="2" x2="12" y2="12" />
            <line x1="22" y1="15.5" x2="12" y2="12" />
            <line x1="2" y1="15.5" x2="12" y2="12" />
          </svg>
        ) : (
          // Node network / reconciliation matrix
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="1.5" />
            <rect x="8.5" y="14" width="7" height="7" rx="1" strokeWidth="1.5" />
            <path d="M6.5 10v2a2 2 0 002 2h7a2 2 0 002-2v-2" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="14" x2="12" y2="10" strokeWidth="1.5" />
          </svg>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-medium text-gray-900 tracking-tight mb-1">
          {title}
        </h3>
        <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
