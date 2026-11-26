"use client";

import { useState } from "react";

interface StreamData {
  id: string;
  title: string;
  authority: string[];
  applicants: {
    total: string;
    allotted: string;
    unallocated: string;
    unallocatedPct: number;
    allottedPct: number;
  };
  seats: {
    total: string;
    filled: string;
    vacant: string;
    vacantPct: number;
    filledPct: number;
    visualVacantPct?: number; // for visual clarity on <1% case
  };
  defaultSummary: string;
  centerLabel: string;
  centerSub: string;
}

const STREAMS: StreamData[] = [
  {
    id: "engineering",
    title: "Engineering",
    authority: ["AICTE &", "State CETs"],
    applicants: {
      total: "15.38 Lakh JEE Main appeared (+ State CETs)",
      allotted: "~10–11 Lakh Allotted",
      unallocated: "~4–5+ Lakh Left Without a Seat",
      allottedPct: 68.3,
      unallocatedPct: 31.7,
    },
    seats: {
      total: "~14.5 Lakh Total Intake",
      filled: "~72% Filled",
      vacant: "3–5 Lakh (~28%) Left Empty",
      filledPct: 72,
      vacantPct: 28,
    },
    defaultSummary: "3–5 Lakh seats left empty while ~4–5+ Lakh applicants left without a seat.",
    centerLabel: "28%",
    centerSub: "VACANT",
  },
  {
    id: "mbbs",
    title: "MBBS",
    authority: ["MCC NEET-UG 2026"],
    applicants: {
      total: "11.21 Lakh Qualified (out of 20 Lakh appeared)",
      allotted: "~1.15 Lakh Allotted",
      unallocated: "~10.06 Lakh Left Without a Seat",
      allottedPct: 10.3,
      unallocatedPct: 89.7,
    },
    seats: {
      total: "~1.15+ Lakh Total Intake",
      filled: ">99% Filled",
      vacant: "411 Seats Left Empty (after Special Stray Round)",
      filledPct: 99.64,
      vacantPct: 0.36,
      visualVacantPct: 10, // clear visible wedge
    },
    defaultSummary: "411 coveted MBBS seats empty while >10 Lakh qualified aspirants left unallocated.",
    centerLabel: "411",
    centerSub: "EMPTY",
  },
  {
    id: "cuet",
    title: "Central Universities",
    authority: ["DU CSAS /", "CUET-UG"],
    applicants: {
      total: "2.06 Lakh Preferences Submitted (out of 2.73L on DU CSAS)",
      allotted: "~66,000 Allotted",
      unallocated: "~1.40 Lakh Left Without a Seat",
      allottedPct: 32,
      unallocatedPct: 68,
    },
    seats: {
      total: "~70,000 UG Intake at DU",
      filled: "~94% Filled",
      vacant: "3,000–5,000 (~6%) Left Empty",
      filledPct: 94,
      vacantPct: 6,
      visualVacantPct: 12, // clear visible wedge
    },
    defaultSummary: "3,000–5,000 seats left vacant across DU colleges despite 1.4 Lakh applicants left without a seat.",
    centerLabel: "~6%",
    centerSub: "VACANT",
  },
];

// Helper to calculate polar coordinates (0 deg is top / 12 o'clock)
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

// Generate SVG donut arc path
function describeArc(
  x: number,
  y: number,
  radius: number,
  innerRadius: number,
  startAngle: number,
  endAngle: number
): string {
  const clampedEnd = endAngle >= startAngle + 360 ? startAngle + 359.99 : endAngle;
  const start = polarToCartesian(x, y, radius, clampedEnd);
  const end = polarToCartesian(x, y, radius, startAngle);
  const innerStart = polarToCartesian(x, y, innerRadius, clampedEnd);
  const innerEnd = polarToCartesian(x, y, innerRadius, startAngle);

  const arcSweep = clampedEnd - startAngle <= 180 ? "0" : "1";

  return [
    `M ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${arcSweep} 0 ${end.x} ${end.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${arcSweep} 1 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

// Compute radial pullout translation along the bisector angle
function getPullOutOffset(startAngle: number, endAngle: number, distance: number = 6) {
  const midAngle = (startAngle + endAngle) / 2;
  const midRad = ((midAngle - 90) * Math.PI) / 180.0;
  return {
    dx: distance * Math.cos(midRad),
    dy: distance * Math.sin(midRad),
  };
}

export default function SeatWastageDonutChart() {
  const [hoveredDetail, setHoveredDetail] = useState<{
    streamId: string;
    badge: string;
    badgeColor: "amber" | "rose" | "slate";
    text: string;
  } | null>(null);

  // Concentric Radii (shared across both rings, centered exactly at 90, 90)
  const CX = 90;
  const CY = 90;
  // Outer Ring (Applicants)
  const R_OUT_MAX = 80;
  const R_OUT_MIN = 66;
  // Inner Ring (Seats)
  const R_IN_MAX = 62;
  const R_IN_MIN = 48;
  // Center Hole: R = 44

  return (
    <div className="w-full my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {STREAMS.map((s) => {
          // --- Ring 1 (Outer): Applicants Track ---
          // Base: Allotted (0 to allottedAngle). Unallocated: (allottedAngle to 360)
          const appAllottedAngle = (s.applicants.allottedPct / 100) * 360;
          const appPull = getPullOutOffset(appAllottedAngle, 360, 5.5);

          // --- Ring 2 (Inner): Seats Matrix Track ---
          // Base: Filled (0 to filledAngle). Vacant: (filledAngle to 360)
          const vacantVisualPct = s.seats.visualVacantPct ?? s.seats.vacantPct;
          const seatFilledAngle = 360 - (vacantVisualPct / 100) * 360;
          const seatPull = getPullOutOffset(seatFilledAngle, 360, 5);

          const isStreamHovered = hoveredDetail?.streamId === s.id;

          return (
            <div
              key={s.id}
              className="border border-gray-200/90 rounded-[4px] p-4 sm:p-4.5 bg-white flex flex-col justify-between shadow-2xs hover:border-gray-300 transition-colors"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-1 min-h-[30px]">
                  <h4 className="text-[14px] font-medium text-gray-950 tracking-tight shrink-0">
                    {s.title}
                  </h4>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-medium text-right leading-tight shrink-0">
                    {s.authority.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Concentric Dual-Ring Chart */}
              <div className="flex flex-col items-center justify-center my-3 relative">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  className="overflow-visible select-none"
                >
                  <defs>
                    <filter id={`shadow-${s.id}`} x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.1" />
                    </filter>
                  </defs>

                  {/* ─── RING 1 (OUTER): APPLICANTS TRACK ─── */}
                  {/* Base Arc: Allotted Candidates (Perfect concentric shared center CX, CY) */}
                  <path
                    d={describeArc(CX, CY, R_OUT_MAX, R_OUT_MIN, 0, appAllottedAngle)}
                    fill="rgba(51, 65, 85, 0.22)"
                    stroke="#64748b"
                    strokeWidth="1.2"
                    className="cursor-pointer transition-opacity hover:opacity-80"
                    onMouseEnter={() =>
                      setHoveredDetail({
                        streamId: s.id,
                        badge: "ALLOTTED APPLICANTS",
                        badgeColor: "slate",
                        text: `${s.applicants.allotted} (${Math.round(s.applicants.allottedPct)}%) of ${s.applicants.total}.`,
                      })
                    }
                    onMouseLeave={() => setHoveredDetail(null)}
                  />

                  {/* Highlighted Wedge: Left Without a Seat (Concentric with prominent radial thickness) */}
                  <path
                    d={describeArc(CX, CY, R_OUT_MAX + 3, R_OUT_MIN, appAllottedAngle, 360)}
                    fill="rgba(244, 63, 94, 0.35)"
                    stroke="#e11d48"
                    strokeWidth="1.3"
                    filter={`url(#shadow-${s.id})`}
                    className="cursor-pointer transition-transform hover:scale-[1.02] origin-center"
                    onMouseEnter={() =>
                      setHoveredDetail({
                        streamId: s.id,
                        badge: "UNALLOCATED APPLICANTS",
                        badgeColor: "rose",
                        text: `${s.applicants.unallocated} (${Math.round(s.applicants.unallocatedPct)}%) left without an admission.`,
                      })
                    }
                    onMouseLeave={() => setHoveredDetail(null)}
                  />

                  {/* ─── RING 2 (INNER): SEATS MATRIX TRACK ─── */}
                  {/* Base Arc: Filled Seats (Perfect concentric shared center CX, CY) */}
                  <path
                    d={describeArc(CX, CY, R_IN_MAX, R_IN_MIN, 0, seatFilledAngle)}
                    fill="rgba(203, 213, 225, 0.3)"
                    stroke="#cbd5e1"
                    strokeWidth="1.2"
                    className="cursor-pointer transition-opacity hover:opacity-80"
                    onMouseEnter={() =>
                      setHoveredDetail({
                        streamId: s.id,
                        badge: "FILLED SEATS",
                        badgeColor: "slate",
                        text: `${s.seats.filled} of total intake (${s.seats.total}).`,
                      })
                    }
                    onMouseLeave={() => setHoveredDetail(null)}
                  />

                  {/* Highlighted Wedge: Left Empty / Vacant (Concentric with prominent radial depth) */}
                  <path
                    d={describeArc(CX, CY, R_IN_MAX, R_IN_MIN - 3, seatFilledAngle, 360)}
                    fill="rgba(245, 158, 11, 0.45)"
                    stroke="#d97706"
                    strokeWidth="1.3"
                    filter={`url(#shadow-${s.id})`}
                    className="cursor-pointer transition-transform hover:scale-[1.02] origin-center"
                    onMouseEnter={() =>
                      setHoveredDetail({
                        streamId: s.id,
                        badge: "EMPTY SEATS",
                        badgeColor: "amber",
                        text: `${s.seats.vacant} went unfilled in this cycle.`,
                      })
                    }
                    onMouseLeave={() => setHoveredDetail(null)}
                  />

                  {/* Center Core Badge */}
                  <circle cx={CX} cy={CY} r={42} fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                  <text
                    x={CX}
                    y={CY - 2}
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="monospace"
                    fill="#9e790d"
                  >
                    {s.centerLabel}
                  </text>
                  <text
                    x={CX}
                    y={CY + 11}
                    textAnchor="middle"
                    fontSize="8"
                    fontWeight="600"
                    fill="#64748b"
                    fontFamily="sans-serif"
                    letterSpacing="0.05em"
                  >
                    {s.centerSub}
                  </text>
                </svg>

                {/* Legend with pastel transparent swatches matching Sankey */}
                <div className="flex items-center justify-center gap-4 text-[10px] mt-2 text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-rose-100/90 border border-rose-400/80" />
                    <span>Outer: Unallocated Applicants</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-100/90 border border-amber-400/80" />
                    <span>Inner: Empty Seats</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Detail Callout Bar on Hover (Like Sankey Diagram) */}
              <div className="mt-2 pt-2.5 border-t border-gray-100 min-h-[58px] flex items-center">
                {isStreamHovered && hoveredDetail ? (
                  <div className="flex flex-col gap-1 text-[11px] leading-tight animate-fadeIn">
                    <span
                      className={`w-fit font-mono text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-[2px] ${
                        hoveredDetail.badgeColor === "amber"
                          ? "bg-amber-50 text-[#9e790d] border border-amber-200"
                          : hoveredDetail.badgeColor === "rose"
                          ? "bg-rose-50 text-rose-700 border border-rose-200"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {hoveredDetail.badge}
                    </span>
                    <span className="text-gray-800 font-medium">
                      {hoveredDetail.text}
                    </span>
                  </div>
                ) : (
                  <p className="text-[11px] text-gray-500 leading-relaxed font-normal">
                    {s.defaultSummary}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Interactive Hint */}
      <p className="text-[10px] font-mono text-gray-400 mt-2.5 text-center uppercase tracking-wider">
        Hover over inner (seats) or outer (applicants) ring segments to inspect admissions breakdown
      </p>
    </div>
  );
}
