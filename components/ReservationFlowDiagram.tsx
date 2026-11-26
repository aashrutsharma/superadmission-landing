"use client";

import { useState } from "react";

// --- Layout Coordinates & Dimensions ---
const W = 760;
const H = 430;

// Nodes data definition for Sankey
interface Node {
  id: string;
  stage: number;
  label: string;
  sublabel?: string;
  pct?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  border: string;
  textColor: string;
  description: string;
}

const NODES: Node[] = [
  // STAGE 0: SEAT POOL (x: 24, w: 84)
  {
    id: "pool-base",
    stage: 0,
    label: "Seat Pool",
    sublabel: "Base Intake",
    pct: "100%",
    x: 24,
    y: 44,
    w: 84,
    h: 250,
    color: "#f8fafc",
    border: "#94a3b8",
    textColor: "#0f172a",
    description: "100% total sanctioned capacity across central and state institutions before horizontal reservation slices.",
  },
  {
    id: "pool-super",
    stage: 0,
    label: "Supernumerary",
    sublabel: "Added Intake",
    pct: "+20–25%",
    x: 24,
    y: 320,
    w: 84,
    h: 68,
    color: "#ecfdf5",
    border: "#10b981",
    textColor: "#065f46",
    description: "Additional seats created over and above sanctioned intake for gender parity and special welfare quotas.",
  },

  // STAGE 1: VERTICAL CONSTITUTIONAL CATEGORIES (x: 215, w: 96)
  {
    id: "vert-open",
    stage: 1,
    label: "Open (General)",
    pct: "40.5%",
    x: 215,
    y: 44,
    w: 96,
    h: 101,
    color: "#ffffff",
    border: "#94a3b8",
    textColor: "#1e293b",
    description: "Open to all candidates purely based on exam rank without any caste or reservation prerequisites.",
  },
  {
    id: "vert-obc",
    stage: 1,
    label: "OBC-NCL",
    pct: "27.0%",
    x: 215,
    y: 153,
    w: 96,
    h: 67,
    color: "#fffbeb",
    border: "#d97706",
    textColor: "#92400e",
    description: "Other Backward Classes (Non-Creamy Layer) statutory 27% constitutional reservation.",
  },
  {
    id: "vert-sc",
    stage: 1,
    label: "SC",
    pct: "15.0%",
    x: 215,
    y: 227,
    w: 96,
    h: 38,
    color: "#fffbeb",
    border: "#d97706",
    textColor: "#92400e",
    description: "Scheduled Castes statutory 15% constitutional reservation.",
  },
  {
    id: "vert-ews",
    stage: 1,
    label: "GEN-EWS",
    pct: "10.0%",
    x: 215,
    y: 272,
    w: 96,
    h: 25,
    color: "#fffbeb",
    border: "#d97706",
    textColor: "#92400e",
    description: "General Economically Weaker Section 10% income-bracket reservation.",
  },
  {
    id: "vert-st",
    stage: 1,
    label: "ST",
    pct: "7.5%",
    x: 215,
    y: 303,
    w: 96,
    h: 19,
    color: "#fffbeb",
    border: "#d97706",
    textColor: "#92400e",
    description: "Scheduled Tribes statutory 7.5% constitutional reservation.",
  },
  {
    id: "vert-super",
    stage: 1,
    label: "Supernumerary",
    pct: "+Extra",
    x: 215,
    y: 332,
    w: 96,
    h: 56,
    color: "#ecfdf5",
    border: "#10b981",
    textColor: "#065f46",
    description: "Earmarked supernumerary stream flowing parallel to constitutional allocations.",
  },

  // STAGE 2: QUOTAS & DOMICILE (x: 430, w: 98)
  {
    id: "quota-ai",
    stage: 2,
    label: "All India Quota",
    sublabel: "AI / OS Pool",
    pct: "50%",
    x: 430,
    y: 44,
    w: 98,
    h: 121,
    color: "#eff6ff",
    border: "#3b82f6",
    textColor: "#1e40af",
    description: "All India / Other State seat allocation open to applicants nationwide irrespective of domicile.",
  },
  {
    id: "quota-hs",
    stage: 2,
    label: "Home State",
    sublabel: "HS Domicile",
    pct: "50%",
    x: 430,
    y: 173,
    w: 98,
    h: 121,
    color: "#eff6ff",
    border: "#3b82f6",
    textColor: "#1e40af",
    description: "Home State quota reserved for students qualifying from the host state (e.g., NITs, State engineering colleges).",
  },
  {
    id: "quota-super",
    stage: 2,
    label: "Special Quotas",
    pct: "Earmarked",
    x: 430,
    y: 324,
    w: 98,
    h: 64,
    color: "#ecfdf5",
    border: "#10b981",
    textColor: "#065f46",
    description: "Institutional supernumerary conduits protecting regional and gender representation targets.",
  },

  // STAGE 3: HORIZONTAL & SUPERNUMERARY (x: 636, w: 104)
  {
    id: "horiz-merit",
    stage: 3,
    label: "Merit (Base)",
    pct: "95%",
    x: 636,
    y: 44,
    w: 104,
    h: 216,
    color: "#f8fafc",
    border: "#64748b",
    textColor: "#0f172a",
    description: "Primary allocated merit seats within each vertical and quota partition.",
  },
  {
    id: "horiz-pwd",
    stage: 3,
    label: "PwD (5%)",
    pct: "5% Horizontal",
    x: 636,
    y: 268,
    w: 104,
    h: 24,
    color: "#eff6ff",
    border: "#2563eb",
    textColor: "#1e40af",
    description: "5% horizontal reservation carved out across every vertical category (Open-PwD, OBC-PwD, SC-PwD, ST-PwD, EWS-PwD).",
  },
  {
    id: "horiz-cw",
    stage: 3,
    label: "Defence / CW",
    pct: "Priorities I–IX",
    x: 636,
    y: 298,
    w: 104,
    h: 24,
    color: "#eff6ff",
    border: "#2563eb",
    textColor: "#1e40af",
    description: "Horizontal reservation for Children and Widows of Armed Forces personnel across tiers.",
  },
  {
    id: "super-female",
    stage: 3,
    label: "Female (FSS)",
    pct: "20% Target",
    x: 636,
    y: 328,
    w: 104,
    h: 34,
    color: "#ecfdf5",
    border: "#059669",
    textColor: "#064e3b",
    description: "Female Supernumerary Seats added over base intake to ensure 20% female enrollment without shrinking open seats.",
  },
  {
    id: "super-km",
    stage: 3,
    label: "KM / NRI",
    pct: "Special Quota",
    x: 636,
    y: 368,
    w: 104,
    h: 26,
    color: "#ecfdf5",
    border: "#059669",
    textColor: "#064e3b",
    description: "Earmarked supernumerary seats for Kashmiri Migrants, Kashmiri Pandits, and Institutional/NRI admissions.",
  },
];

// Sankey smooth ribbon generator
function generateSankeyRibbon(
  x0: number,
  y0Top: number,
  y0Bottom: number,
  x1: number,
  y1Top: number,
  y1Bottom: number
): string {
  const curvature = 0.48;
  const xi = x0 + (x1 - x0) * curvature;
  const xo = x1 - (x1 - x0) * curvature;

  return [
    `M ${x0} ${y0Top}`,
    `C ${xi} ${y0Top}, ${xo} ${y1Top}, ${x1} ${y1Top}`,
    `L ${x1} ${y1Bottom}`,
    `C ${xo} ${y1Bottom}, ${xi} ${y0Bottom}, ${x0} ${y0Bottom}`,
    `Z`,
  ].join(" ");
}

interface Link {
  id: string;
  source: string;
  target: string;
  path: string;
  color: string;
  description: string;
}

export default function ReservationFlowDiagram() {
  const [activeItem, setActiveItem] = useState<{
    title: string;
    description: string;
    pct?: string;
  } | null>(null);

  // Ribbons connecting Stage 0 -> Stage 1
  const LINKS_S0_S1: Link[] = [
    {
      id: "l-pool-open",
      source: "pool-base",
      target: "vert-open",
      path: generateSankeyRibbon(108, 44, 145, 215, 44, 145),
      color: "#94a3b8",
      description: "40.5% of total sanctioned intake allocated to Unreserved / Open Merit.",
    },
    {
      id: "l-pool-obc",
      source: "pool-base",
      target: "vert-obc",
      path: generateSankeyRibbon(108, 145, 212, 215, 153, 220),
      color: "#d97706",
      description: "27.0% statutory allocation for Other Backward Classes (Non-Creamy Layer).",
    },
    {
      id: "l-pool-sc",
      source: "pool-base",
      target: "vert-sc",
      path: generateSankeyRibbon(108, 212, 250, 215, 227, 265),
      color: "#d97706",
      description: "15.0% statutory allocation for Scheduled Castes.",
    },
    {
      id: "l-pool-ews",
      source: "pool-base",
      target: "vert-ews",
      path: generateSankeyRibbon(108, 250, 275, 215, 272, 297),
      color: "#d97706",
      description: "10.0% statutory allocation for General Economically Weaker Section.",
    },
    {
      id: "l-pool-st",
      source: "pool-base",
      target: "vert-st",
      path: generateSankeyRibbon(108, 275, 294, 215, 303, 322),
      color: "#d97706",
      description: "7.5% statutory allocation for Scheduled Tribes.",
    },
    {
      id: "l-super-stream",
      source: "pool-super",
      target: "vert-super",
      path: generateSankeyRibbon(108, 320, 388, 215, 332, 388),
      color: "#10b981",
      description: "Supernumerary seats generated over sanctioned intake for representation equity.",
    },
  ];

  // Ribbons connecting Stage 1 (Vertical) -> Stage 2 (Quota / Domicile)
  // Each category splits ~50% into All India and ~50% into Home State
  const LINKS_S1_S2: Link[] = [
    // Open -> AI & HS
    {
      id: "l-open-ai",
      source: "vert-open",
      target: "quota-ai",
      path: generateSankeyRibbon(311, 44, 94, 430, 44, 94),
      color: "#94a3b8",
      description: "50% of Open seats routed to All India (AI / Other State) pool.",
    },
    {
      id: "l-open-hs",
      source: "vert-open",
      target: "quota-hs",
      path: generateSankeyRibbon(311, 94, 145, 430, 173, 223),
      color: "#94a3b8",
      description: "50% of Open seats routed to Home State domicile quota.",
    },
    // OBC -> AI & HS
    {
      id: "l-obc-ai",
      source: "vert-obc",
      target: "quota-ai",
      path: generateSankeyRibbon(311, 153, 186, 430, 94, 127),
      color: "#d97706",
      description: "OBC-NCL seats divided into All India quota.",
    },
    {
      id: "l-obc-hs",
      source: "vert-obc",
      target: "quota-hs",
      path: generateSankeyRibbon(311, 186, 220, 430, 223, 256),
      color: "#d97706",
      description: "OBC-NCL seats divided into Home State domicile quota.",
    },
    // SC -> AI & HS
    {
      id: "l-sc-ai",
      source: "vert-sc",
      target: "quota-ai",
      path: generateSankeyRibbon(311, 227, 246, 430, 127, 146),
      color: "#d97706",
      description: "SC seats divided into All India quota.",
    },
    {
      id: "l-sc-hs",
      source: "vert-sc",
      target: "quota-hs",
      path: generateSankeyRibbon(311, 246, 265, 430, 256, 275),
      color: "#d97706",
      description: "SC seats divided into Home State quota.",
    },
    // EWS -> AI & HS
    {
      id: "l-ews-ai",
      source: "vert-ews",
      target: "quota-ai",
      path: generateSankeyRibbon(311, 272, 284, 430, 146, 158),
      color: "#d97706",
      description: "GEN-EWS seats divided into All India quota.",
    },
    {
      id: "l-ews-hs",
      source: "vert-ews",
      target: "quota-hs",
      path: generateSankeyRibbon(311, 284, 297, 430, 275, 287),
      color: "#d97706",
      description: "GEN-EWS seats divided into Home State quota.",
    },
    // ST -> AI & HS
    {
      id: "l-st-ai",
      source: "vert-st",
      target: "quota-ai",
      path: generateSankeyRibbon(311, 303, 312, 430, 158, 165),
      color: "#d97706",
      description: "ST seats divided into All India quota.",
    },
    {
      id: "l-st-hs",
      source: "vert-st",
      target: "quota-hs",
      path: generateSankeyRibbon(311, 312, 322, 430, 287, 294),
      color: "#d97706",
      description: "ST seats divided into Home State quota.",
    },
    // Supernumerary -> Special Quotas
    {
      id: "l-super-special",
      source: "vert-super",
      target: "quota-super",
      path: generateSankeyRibbon(311, 332, 388, 430, 324, 388),
      color: "#10b981",
      description: "Supernumerary conduit flowing into specialized quota bodies.",
    },
  ];

  // Ribbons connecting Stage 2 (Quota) -> Stage 3 (Horizontal & Final)
  const LINKS_S2_S3: Link[] = [
    // All India -> Merit (Base) & PwD / CW
    {
      id: "l-ai-merit",
      source: "quota-ai",
      target: "horiz-merit",
      path: generateSankeyRibbon(528, 44, 155, 636, 44, 150),
      color: "#3b82f6",
      description: "Base merit allocation in All India pool after horizontal deductions.",
    },
    {
      id: "l-ai-pwd",
      source: "quota-ai",
      target: "horiz-pwd",
      path: generateSankeyRibbon(528, 155, 162, 636, 268, 278),
      color: "#2563eb",
      description: "5% horizontal slice carved from All India categories for PwD / PwBD candidates.",
    },
    {
      id: "l-ai-cw",
      source: "quota-ai",
      target: "horiz-cw",
      path: generateSankeyRibbon(528, 162, 165, 636, 298, 306),
      color: "#6366f1",
      description: "Defence / CW horizontal reservation quota slice.",
    },

    // Home State -> Merit (Base) & PwD / CW
    {
      id: "l-hs-merit",
      source: "quota-hs",
      target: "horiz-merit",
      path: generateSankeyRibbon(528, 173, 284, 636, 150, 260),
      color: "#3b82f6",
      description: "Base merit allocation in Home State pool after horizontal deductions.",
    },
    {
      id: "l-hs-pwd",
      source: "quota-hs",
      target: "horiz-pwd",
      path: generateSankeyRibbon(528, 284, 291, 636, 278, 290),
      color: "#2563eb",
      description: "5% horizontal slice carved from Home State categories for PwD / PwBD candidates.",
    },
    {
      id: "l-hs-cw",
      source: "quota-hs",
      target: "horiz-cw",
      path: generateSankeyRibbon(528, 291, 294, 636, 306, 318),
      color: "#6366f1",
      description: "Defence / CW horizontal reservation quota slice from Home State pool.",
    },

    // Special Quotas -> Female Supernumerary & KM/Pandits
    {
      id: "l-super-female",
      source: "quota-super",
      target: "super-female",
      path: generateSankeyRibbon(528, 324, 362, 636, 328, 362),
      color: "#059669",
      description: "Female Supernumerary Seats allocated to achieve 20% gender target.",
    },
    {
      id: "l-super-km",
      source: "quota-super",
      target: "super-km",
      path: generateSankeyRibbon(528, 362, 388, 636, 368, 394),
      color: "#059669",
      description: "Kashmiri Migrants, Pandits, and Institutional direct seats.",
    },
  ];

  const ALL_LINKS = [...LINKS_S0_S1, ...LINKS_S1_S2, ...LINKS_S2_S3];

  return (
    <div className="w-full my-6">
      {/* Outer Card — matches DPI blueprint aesthetic */}
      <div className="border border-gray-200 rounded-[4px] p-4 sm:p-5 bg-white relative overflow-hidden shadow-2xs">
        {/* Subtle Blueprint Dot Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "radial-gradient(#71717a 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Top Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100">
          <span className="text-[11.5px] font-mono uppercase tracking-wider text-gray-800 font-semibold">
            Multi-Layer Allocation Matrix
          </span>

          <div className="flex items-center gap-3.5 text-[11px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-400" /> Vertical
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-blue-500" /> Quota / Horizontal
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500" /> Supernumerary
            </span>
          </div>
        </div>

        {/* Sankey Flow Canvas */}
        <div className="relative z-10 overflow-x-auto">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto"
            style={{ minWidth: 620 }}
          >
            {/* Column Stage Headers */}
            <g fontSize={9} fontFamily="monospace" fill="#94a3b8" letterSpacing="0.06em">
              <text x={24} y={26}>01 • SEAT POOL</text>
              <text x={215} y={26}>02 • VERTICAL CATEGORIES</text>
              <text x={430} y={26}>03 • QUOTAS & DOMICILE</text>
              <text x={640} y={26}>04 • ALLOCATED POOLS</text>
            </g>

            {/* FLOW RIBBONS */}
            <g className="sankey-links">
              {ALL_LINKS.map((link) => (
                <path
                  key={link.id}
                  d={link.path}
                  fill={link.color}
                  fillOpacity={0.24}
                  stroke={link.color}
                  strokeWidth={0.8}
                  strokeOpacity={0.4}
                  className="transition-all duration-200 cursor-pointer hover:fill-opacity-65"
                  onMouseEnter={() =>
                    setActiveItem({
                      title: link.id.replace("l-", "").replace(/-/g, " → ").toUpperCase(),
                      description: link.description,
                    })
                  }
                  onMouseLeave={() => setActiveItem(null)}
                />
              ))}
            </g>

            {/* SANKEY NODES */}
            <g className="sankey-nodes">
              {NODES.map((node) => (
                <g
                  key={node.id}
                  className="cursor-pointer transition-transform duration-150"
                  onMouseEnter={() =>
                    setActiveItem({
                      title: `${node.label} ${node.pct ? `(${node.pct})` : ""}`,
                      description: node.description,
                      pct: node.pct,
                    })
                  }
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {/* Node Rectangle */}
                  <rect
                    x={node.x}
                    y={node.y}
                    width={node.w}
                    height={node.h}
                    rx={3}
                    fill={node.color}
                    stroke={node.border}
                    strokeWidth={1.3}
                    className="hover:stroke-gray-950 transition-colors shadow-2xs"
                  />

                  {/* Node Text & Percentages */}
                  {node.h >= 50 && (
                    <>
                      <text
                        x={node.x + node.w / 2}
                        y={node.y + node.h / 2 - (node.sublabel ? 10 : 4)}
                        textAnchor="middle"
                        fontSize={9.5}
                        fontWeight="600"
                        fill={node.textColor}
                      >
                        {node.label}
                      </text>
                      {node.sublabel && (
                        <text
                          x={node.x + node.w / 2}
                          y={node.y + node.h / 2 + 3}
                          textAnchor="middle"
                          fontSize={8}
                          fill="#64748b"
                        >
                          {node.sublabel}
                        </text>
                      )}
                      {node.pct && (
                        <text
                          x={node.x + node.w / 2}
                          y={node.y + node.h / 2 + (node.sublabel ? 17 : 12)}
                          textAnchor="middle"
                          fontSize={11}
                          fontWeight="700"
                          fontFamily="monospace"
                          fill={node.textColor}
                        >
                          {node.pct}
                        </text>
                      )}
                    </>
                  )}

                  {node.h < 50 && (
                    <text
                      x={node.x + node.w / 2}
                      y={node.y + node.h / 2 + 3.5}
                      textAnchor="middle"
                      fontSize={8.5}
                      fontWeight="600"
                      fill={node.textColor}
                    >
                      {node.label}
                    </text>
                  )}
                </g>
              ))}
            </g>
          </svg>
        </div>

        {/* Dynamic Detail Callout Bar on Hover */}
        <div className="relative z-10 mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs min-h-[38px]">
          {activeItem ? (
            <div className="flex items-center gap-2 text-gray-900 animate-fadeIn">
              <span className="font-mono text-[10.5px] uppercase tracking-wider font-semibold text-[#9e790d] bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-[3px]">
                {activeItem.title}
              </span>
              <span className="text-gray-600 font-normal leading-tight">
                {activeItem.description}
              </span>
            </div>
          ) : (
            <span className="text-[11px] text-gray-400 font-normal italic flex items-center gap-1.5">
              <span>ⓘ</span> Hover over nodes or flowing ribbons to inspect allocation percentages and constitutional rules.
            </span>
          )}
        </div>
      </div>

      {/* Caption under the chart */}
      <p className="text-[11.5px] text-gray-500 font-normal mt-2.5 leading-relaxed">
        Illustration shown using the central government. Individual states set their own reservation percentages.
      </p>
    </div>
  );
}
