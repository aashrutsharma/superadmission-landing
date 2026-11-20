"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DATA_ALL = [
  { step: "Reg", manual: 1.45, superadmission: 0.28 },
  { step: "Doc Verif", manual: 1.82, superadmission: 0.35 },
  { step: "Choice Lock", manual: 0.72, superadmission: 0.18 },
  { step: "Round 1", manual: 1.25, superadmission: 0.42 },
  { step: "Round 2", manual: 0.88, superadmission: 0.31 },
  { step: "Seat Accept", manual: 1.12, superadmission: 0.22 },
  { step: "Spot 1", manual: 1.62, superadmission: 0.36 },
  { step: "Final Allot", manual: 0.94, superadmission: 0.19 },
];

const DATA_JOSAA = [
  { step: "Reg", manual: 1.60, superadmission: 0.24 },
  { step: "Doc Verif", manual: 1.95, superadmission: 0.32 },
  { step: "Choice Lock", manual: 0.85, superadmission: 0.15 },
  { step: "Round 1", manual: 1.40, superadmission: 0.38 },
  { step: "Round 2", manual: 0.95, superadmission: 0.28 },
  { step: "Seat Accept", manual: 1.20, superadmission: 0.20 },
  { step: "Spot 1", manual: 1.75, superadmission: 0.30 },
  { step: "Final Allot", manual: 1.05, superadmission: 0.16 },
];

const DATA_STATE = [
  { step: "Reg", manual: 1.30, superadmission: 0.30 },
  { step: "Doc Verif", manual: 1.70, superadmission: 0.38 },
  { step: "Choice Lock", manual: 0.65, superadmission: 0.20 },
  { step: "Round 1", manual: 1.15, superadmission: 0.44 },
  { step: "Round 2", manual: 0.80, superadmission: 0.33 },
  { step: "Seat Accept", manual: 1.05, superadmission: 0.25 },
  { step: "Spot 1", manual: 1.50, superadmission: 0.40 },
  { step: "Final Allot", manual: 0.85, superadmission: 0.22 },
];

const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

export default function BenchmarkLineChart() {
  const [activeTab, setActiveTab] = useState<"all" | "josaa" | "state">("all");

  const currentData =
    activeTab === "all" ? DATA_ALL : activeTab === "josaa" ? DATA_JOSAA : DATA_STATE;

  return (
    <div className="w-full">
      {/* Top Header Row with Metrics and Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">
              COST PER ALLOCATION
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">₹ 14.20</span>
              <span className="text-xs font-semibold text-[#2563eb]">78% cheaper</span>
            </div>
          </div>
          <div className="border-l border-gray-100 pl-8">
            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">
              ROUNDS COMPLETED ON TIME
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">99.8%</span>
              <span className="text-xs font-semibold text-[#2563eb]">up from 68%</span>
            </div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="inline-flex items-center p-0.5 bg-[#f4f4f5] border border-gray-200/60 rounded-md">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900 bg-transparent"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("josaa")}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${
              activeTab === "josaa"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900 bg-transparent"
            }`}
          >
            JoSAA / CSAB
          </button>
          <button
            onClick={() => setActiveTab("state")}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${
              activeTab === "state"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900 bg-transparent"
            }`}
          >
            State Councils
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
          <span className="text-gray-600 font-medium">Legacy Manual Portals</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
          <span className="text-[#2563eb] font-semibold">Superadmission Protocol</span>
        </div>
      </div>

      {/* Recharts Chart */}
      <div className="w-full h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={currentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
              unit="M"
              domain={[0, 2.2]}
            />
            <Tooltip
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
              dataKey="manual"
              name="Legacy Manual"
              stroke="#94a3b8"
              strokeWidth={1.5}
              dot={{ r: 3, fill: "#94a3b8" }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="superadmission"
              name="Superadmission"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ r: 3, fill: "#2563eb" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
