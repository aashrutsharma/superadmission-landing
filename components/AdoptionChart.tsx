"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "Jan 2024", students: 0 },
  { month: "Apr 2024", students: 8000 },
  { month: "Jul 2024", students: 32000 },
  { month: "Oct 2024", students: 55000 },
  { month: "Jan 2025", students: 72000 },
  { month: "Apr 2025", students: 95000 },
  { month: "Jul 2025", students: 128000 },
  { month: "Oct 2025", students: 142000 },
  { month: "Jan 2026", students: 150000 },
];

const FONT = "Inter, ui-sans-serif, system-ui, sans-serif";

function formatStudents(value: number) {
  if (value >= 100000) return `${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return String(value);
}

export default function AdoptionChart() {
  return (
    <div className="w-full">
      <p className="text-xs tracking-widest text-gray-400 uppercase font-medium mb-4">
        Students Processed (2024 to 2026)
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart
          data={data}
          margin={{ top: 4, right: 8, left: -8, bottom: 4 }}
        >
          <defs>
            <linearGradient id="studentGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f1f5f9"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fontFamily: FONT, fontSize: 11, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
            interval={1}
          />
          <YAxis
            tickFormatter={formatStudents}
            tick={{ fontFamily: FONT, fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => [formatStudents(Number(value) || 0), "Students"]}
            contentStyle={{
              fontFamily: FONT,
              fontSize: 13,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
            labelStyle={{ fontWeight: 600, color: "#111" }}
            itemStyle={{ color: "#2563eb" }}
          />
          <Area
            type="monotone"
            dataKey="students"
            stroke="#2563eb"
            strokeWidth={2}
            fill="url(#studentGradient)"
            dot={false}
            activeDot={{ r: 4, fill: "#2563eb" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
