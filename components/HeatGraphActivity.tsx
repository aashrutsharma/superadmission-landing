"use client";

import { useMemo } from "react";
import * as HeatGraph from "heat-graph";

// Color schema aligned with primary #9e790d (Ochre / Gold theme)
const COLOR_SCALE = [
  "#f4f4f5", // level 0: neutral light gray
  "#f7f0d9", // level 1: subtle pale gold
  "#edd48f", // level 2: warm light amber
  "#cfa129", // level 3: rich ochre gold
  "#9e790d", // level 4: primary deep gold
];

// Precomputed deterministic dataset spanning 18 weeks (126 days)
// Designed to look like realistic admission application spikes and steady activity
const SEED_COUNTS = [
  0, 1, 2, 0, 1, 3, 2,
  1, 0, 2, 3, 4, 1, 2,
  0, 2, 1, 3, 4, 2, 3,
  1, 1, 0, 2, 3, 4, 1,
  2, 3, 1, 4, 3, 2, 4,
  0, 1, 3, 2, 4, 1, 3,
  2, 0, 1, 3, 2, 4, 2,
  1, 2, 3, 4, 3, 2, 1,
  0, 1, 2, 4, 3, 4, 2,
  3, 2, 1, 0, 3, 4, 3,
  2, 4, 3, 1, 2, 4, 1,
  3, 2, 4, 1, 0, 3, 2,
  1, 3, 4, 2, 3, 4, 3,
  2, 1, 3, 4, 2, 3, 4,
  3, 4, 2, 3, 4, 1, 2,
  4, 3, 2, 4, 3, 4, 3,
  2, 3, 4, 3, 4, 2, 4,
  3, 4, 4, 3, 4, 4, 4,
];

export default function HeatGraphActivity() {
  const data: HeatGraph.DataPoint[] = useMemo(() => {
    // Generate dates starting from a deterministic base
    const baseDate = new Date("2026-07-01T00:00:00Z");
    return SEED_COUNTS.map((count, index) => {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + index);
      return {
        date: d.toISOString().slice(0, 10),
        count,
      };
    });
  }, []);

  return (
    <div className="w-full pt-2 overflow-hidden select-none">
      <style jsx>{`
        @keyframes subtleHeatGrowth {
          0%, 100% {
            transform: scaleX(1);
          }
          45% {
            transform: scaleX(1.025);
          }
          60% {
            transform: scaleX(1.028);
          }
          85% {
            transform: scaleX(1.008);
          }
        }
        @keyframes pulseLeadingEdge {
          0%, 100% {
            opacity: 0.85;
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 3px rgba(158, 121, 13, 0.45));
          }
        }
        .heat-illusion-container {
          transform-origin: left center;
          animation: subtleHeatGrowth 6.5s ease-in-out infinite;
        }
        .leading-edge-pulse {
          animation: pulseLeadingEdge 3.2s ease-in-out infinite;
        }
      `}</style>

      <div className="heat-illusion-container w-full">
        <HeatGraph.Root
          data={data}
          weekStart="monday"
          colorScale={COLOR_SCALE}
          className="w-full"
        >
          <HeatGraph.Grid className="gap-[2.5px] w-full">
            {({ cell }) => {
              // Highlight the last 2 leading columns with the subtle living glow illusion
              const isLeadingColumn = cell.column >= 16;
              return (
                <HeatGraph.Cell
                  className={`w-full aspect-square rounded-[1.5px] transition-all duration-300 ${
                    isLeadingColumn ? "leading-edge-pulse" : ""
                  }`}
                  style={{
                    minWidth: "6px",
                    minHeight: "6px",
                  }}
                />
              );
            }}
          </HeatGraph.Grid>
        </HeatGraph.Root>
      </div>
    </div>
  );
}
