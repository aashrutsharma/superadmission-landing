"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// 8 Stages of admission
// Other portals average: 36.75 hrs vs Superadmission: 5.3 hrs
const DATA = [
  { step: "Reg", other: 24, superadmission: 4 },
  { step: "Doc Verif", other: 72, superadmission: 12 },
  { step: "Choice Lock", other: 12, superadmission: 4 },
  { step: "Round 1", other: 48, superadmission: 6 },
  { step: "Round 2", other: 36, superadmission: 6 },
  { step: "Seat Accept", other: 24, superadmission: 1.5 },
  { step: "Spot 1", other: 18, superadmission: 5 },
  { step: "Final Allot", other: 60, superadmission: 4 },
];

const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

export default function BenchmarkLineChart() {
  return (
    <div className="w-full">
      {/* Top Header Row with Metrics (Single filter / no tabs) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-[12px] font-normal text-gray-500 mb-1">
              average time per stage of admission
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">5.3 hrs</span>
              <span className="text-xs font-semibold text-[#9e790d]">
                86% more time efficient than other portals
              </span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
            <span className="text-gray-600 font-medium">Other portals</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9e790d]" />
            <span className="text-[#9e790d] font-semibold">Superadmission</span>
          </div>
        </div>
      </div>

      {/* Recharts Chart */}
      <div className="w-full h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" vertical={false} />
            <XAxis
              dataKey="step"
              tick={{ fontFamily: FONT, fontSize: 11, fill: "#9ca3af" }}
              axisLine={{ stroke: "#e5e7eb" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontFamily: FONT, fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              unit="h"
              domain={[0, 80]}
              label={{
                value: "time required per stage",
                angle: -90,
                position: "insideLeft",
                offset: 20,
                style: { fontFamily: FONT, fontSize: 10, fill: "#9ca3af" },
              }}
            />
            <Tooltip
              formatter={(value, name) => [
                `${value} hrs`,
                name === "other" ? "Other portals" : "Superadmission",
              ]}
              contentStyle={{
                fontFamily: FONT,
                fontSize: 12,
                borderRadius: 6,
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                backgroundColor: "#ffffff",
              }}
              labelStyle={{ fontWeight: 600, color: "#111", marginBottom: 4 }}
            />
            <Line
              type="monotone"
              dataKey="other"
              name="other"
              stroke="#94a3b8"
              strokeWidth={1.5}
              dot={{ r: 3, fill: "#94a3b8" }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="superadmission"
              name="superadmission"
              stroke="#9e790d"
              strokeWidth={2}
              dot={{ r: 3, fill: "#9e790d" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
