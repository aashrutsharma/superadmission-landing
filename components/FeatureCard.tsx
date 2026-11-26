"use client";

import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  type?: "praveshai" | "manifest" | "spot" | "traffic" | "forms" | "notifications" | "workforce" | "rules";
}

export default function FeatureCard({ icon, title, description, type = "praveshai" }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 py-3">
      {/* Primary Ochre Rounded Square with Vector Illustration */}
      <div className="w-12 h-12 rounded-[10px] bg-[#9e790d] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
        {icon ? (
          icon
        ) : type === "praveshai" || type === "rules" ? (
          // Concentric circular flow / compass / navigation guidance
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" opacity="0.4" strokeDasharray="2 2" />
            <circle cx="12" cy="12" r="5" strokeWidth="1.8" />
            <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : type === "manifest" || type === "workforce" ? (
          // Human verification / dual-user collaboration
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="8" r="3.5" strokeWidth="1.6" />
            <path d="M3 18.5C3 15.5 5.5 13.5 9 13.5C12.5 13.5 15 15.5 15 18.5" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="16.5" cy="7.5" r="2.5" opacity="0.6" strokeWidth="1.4" />
            <path d="M16 13C18.2 13.3 20.5 14.7 20.5 17" opacity="0.6" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ) : type === "spot" || type === "notifications" ? (
          // Notification bell / alert radar
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.73 21a2 2 0 01-3.46 0" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="18" cy="4" r="2" fill="currentColor" />
          </svg>
        ) : type === "traffic" ? (
          // Server latency / traffic spike / activity wave
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="6" rx="1.5" strokeWidth="1.5" />
            <rect x="3" y="14" width="18" height="6" rx="1.5" strokeWidth="1.5" />
            <circle cx="6.5" cy="7" r="1" fill="currentColor" />
            <circle cx="6.5" cy="17" r="1" fill="currentColor" />
            <path d="M11 7h6M11 17h4" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17 14l3 3-3 3" opacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : type === "forms" ? (
          // Scattered duplicate stacked documents / forms
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="4" y="3" width="11" height="14" rx="1.5" strokeWidth="1.5" />
            <path d="M8 7h3M8 10h4M8 13h2" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M8 17v2a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5V8.5A1.5 1.5 0 0018.5 7H17" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" strokeDasharray="2 2" />
          </svg>
        ) : (
          // Default node matrix
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
        <h3 className="text-[15px] font-medium text-gray-950 tracking-tight mb-1">
          {title}
        </h3>
        <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
