"use client";

import { useMemo } from "react";
import * as HeatGraph from "heat-graph";

// Deterministic 26-week graph heights (from 1 to 7 blocks high, rising toward right)
const GRAPH_HEIGHTS = [
  2, 3, 2, 4, 3, 5, 4, 3, 5, 6, 4, 5, 6, 5, 6, 4, 6, 5, 7, 6, 5, 7, 6, 7, 6, 7
];

const START_DATE = "2026-05-25"; // Monday
const END_DATE = "2026-11-22";   // Sunday (exactly 26 weeks)

export default function HeatGraphActivity() {
  // Generate deterministic data points spanning the 26 weeks
  const data: HeatGraph.DataPoint[] = useMemo(() => {
    const points: HeatGraph.DataPoint[] = [];
    const base = new Date(`${START_DATE}T00:00:00Z`);

    for (let col = 0; col < 26; col++) {
      const height = GRAPH_HEIGHTS[col];
      for (let row = 0; row < 7; row++) {
        const d = new Date(base);
        d.setUTCDate(base.getUTCDate() + col * 7 + row);
        const isFilled = (6 - row) < height;
        points.push({
          date: d.toISOString().slice(0, 10),
          count: isFilled ? (row + 1) : 0,
        });
      }
    }
    return points;
  }, []);

  return (
    <div className="w-full pt-3 overflow-hidden select-none">
      <style jsx>{`
        @keyframes subtleHeatGrowth {
          0%, 100% {
            transform: scaleX(1);
          }
          45% {
            transform: scaleX(1.02);
          }
          60% {
            transform: scaleX(1.025);
          }
          85% {
            transform: scaleX(1.008);
          }
        }
        @keyframes pulseLeadingEdge {
          0%, 100% {
            opacity: 0.9;
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            filter: brightness(1.15) drop-shadow(0 0 2.5px rgba(158, 121, 13, 0.5));
          }
        }
        .heat-illusion-container {
          transform-origin: left center;
          animation: subtleHeatGrowth 6.5s ease-in-out infinite;
        }
        .leading-edge-pulse {
          animation: pulseLeadingEdge 2.8s ease-in-out infinite;
        }
      `}</style>

      <div className="heat-illusion-container w-full">
        <HeatGraph.Root
          data={data}
          start={new Date(START_DATE)}
          end={new Date(END_DATE)}
          weekStart="monday"
          className="w-full"
        >
          <HeatGraph.Grid className="gap-[2.5px] w-full">
            {({ cell }) => {
              const height = GRAPH_HEIGHTS[cell.column % GRAPH_HEIGHTS.length];
              const isFilled = (6 - cell.row) < height;
              const isLeading = cell.column >= 24;

              return (
                <HeatGraph.Cell
                  className={`w-full aspect-square rounded-[2px] transition-all duration-300 ${
                    isLeading && isFilled ? "leading-edge-pulse" : ""
                  }`}
                  style={{
                    backgroundColor: isFilled ? "#9e790d" : "#e2e4ea",
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
