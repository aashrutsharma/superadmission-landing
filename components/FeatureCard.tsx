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
    <div className="flex items-start gap-3.5 py-2.5">
      {/* Scoped CSS keyframe animations for smooth, slow, refined looping vectors */}
      <style jsx>{`
        @keyframes fcSlowSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fcGentlePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.06);
            opacity: 0.85;
          }
        }
        @keyframes fcGentleFloat1 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-1.8px);
          }
        }
        @keyframes fcGentleFloat2 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-1.8px);
          }
        }
        @keyframes fcBellChime {
          0%, 100% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(6deg);
          }
          30% {
            transform: rotate(-5deg);
          }
          45% {
            transform: rotate(3deg);
          }
          60% {
            transform: rotate(-1.5deg);
          }
          75% {
            transform: rotate(0deg);
          }
        }
        @keyframes fcDotPulse {
          0%, 100% {
            opacity: 0.45;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }
        @keyframes fcLedPulse {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes fcArrowShift {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(2.2px);
          }
        }
        @keyframes fcDocDrift {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(1.8px, -1.8px);
          }
        }
      `}</style>

      {/* Vector Icon brought out of the box, primary ochre color #9e790d, slightly larger (28x28) */}
      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#9e790d] mt-0.5">
        {icon ? (
          icon
        ) : type === "praveshai" || type === "rules" ? (
          // Concentric circular flow / compass / navigation guidance
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="overflow-visible">
            <circle
              cx="12"
              cy="12"
              r="9"
              opacity="0.45"
              strokeDasharray="2.5 2.5"
              style={{
                animation: "fcSlowSpin 22s linear infinite",
                transformOrigin: "12px 12px",
              }}
            />
            <g
              style={{
                animation: "fcGentlePulse 4.5s ease-in-out infinite",
                transformOrigin: "12px 12px",
              }}
            >
              <circle cx="12" cy="12" r="5" strokeWidth="1.8" />
              <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeWidth="1.6" strokeLinecap="round" />
            </g>
          </svg>
        ) : type === "manifest" || type === "workforce" ? (
          // Human verification / dual-user collaboration
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="overflow-visible">
            <g
              style={{
                animation: "fcGentleFloat1 4.5s ease-in-out infinite",
              }}
            >
              <circle cx="9" cy="8" r="3.5" strokeWidth="1.7" />
              <path d="M3 18.5C3 15.5 5.5 13.5 9 13.5C12.5 13.5 15 15.5 15 18.5" strokeWidth="1.6" strokeLinecap="round" />
            </g>
            <g
              style={{
                animation: "fcGentleFloat2 4.5s ease-in-out infinite",
                animationDelay: "2.25s",
              }}
            >
              <circle cx="16.5" cy="7.5" r="2.5" opacity="0.65" strokeWidth="1.5" />
              <path d="M16 13C18.2 13.3 20.5 14.7 20.5 17" opacity="0.65" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          </svg>
        ) : type === "spot" || type === "notifications" ? (
          // Notification bell / alert radar
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="overflow-visible">
            <g
              style={{
                animation: "fcBellChime 5.5s ease-in-out infinite",
                transformOrigin: "12px 3px",
              }}
            >
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.73 21a2 2 0 01-3.46 0" strokeWidth="1.7" strokeLinecap="round" />
            </g>
            <circle
              cx="18"
              cy="4"
              r="2.2"
              fill="currentColor"
              style={{
                animation: "fcDotPulse 3s ease-in-out infinite",
                transformOrigin: "18px 4px",
              }}
            />
          </svg>
        ) : type === "traffic" ? (
          // Server latency / traffic spike / activity wave
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="overflow-visible">
            <rect x="3" y="4" width="18" height="6" rx="1.5" strokeWidth="1.6" />
            <rect x="3" y="14" width="18" height="6" rx="1.5" strokeWidth="1.6" />
            <circle
              cx="6.5"
              cy="7"
              r="1.1"
              fill="currentColor"
              style={{
                animation: "fcLedPulse 2.8s ease-in-out infinite",
              }}
            />
            <circle
              cx="6.5"
              cy="17"
              r="1.1"
              fill="currentColor"
              style={{
                animation: "fcLedPulse 2.8s ease-in-out infinite",
                animationDelay: "1.4s",
              }}
            />
            <path d="M11 7h6M11 17h4" strokeWidth="1.6" strokeLinecap="round" />
            <g
              style={{
                animation: "fcArrowShift 3.2s ease-in-out infinite",
              }}
            >
              <path d="M17 14l3 3-3 3" opacity="0.85" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        ) : type === "forms" ? (
          // Scattered duplicate stacked documents / forms
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="overflow-visible">
            <rect x="4" y="3" width="11" height="14" rx="1.5" strokeWidth="1.6" />
            <path d="M8 7h3M8 10h4M8 13h2" strokeWidth="1.5" strokeLinecap="round" />
            <g
              style={{
                animation: "fcDocDrift 4.8s ease-in-out infinite",
              }}
            >
              <path
                d="M8 17v2a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5V8.5A1.5 1.5 0 0018.5 7H17"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.65"
                strokeDasharray="2.5 2.5"
              />
            </g>
          </svg>
        ) : (
          // Default node matrix
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="overflow-visible">
            <g
              style={{
                animation: "fcGentlePulse 4s ease-in-out infinite",
                transformOrigin: "12px 12px",
              }}
            >
              <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="1.6" />
              <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="1.6" />
              <rect x="8.5" y="14" width="7" height="7" rx="1" strokeWidth="1.6" />
              <path d="M6.5 10v2a2 2 0 002 2h7a2 2 0 002-2v-2" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="12" y1="14" x2="12" y2="10" strokeWidth="1.6" />
            </g>
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
