"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "JAC Delhi", rounds: 8 },
  { name: "JoSAA", rounds: 7 },
  { name: "JoSAA 2.0", rounds: 3 },
  { name: "CSAB", rounds: 4 },
];

const FONT = "Inter, ui-sans-serif, system-ui, sans-serif";

export default function StatsChart() {
  return (
    <div className="w-full">
      <p className="text-xs tracking-widest text-gray-400 uppercase font-medium mb-4">
        Counselling Rounds Digitized
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{ top: 4, right: 8, left: -16, bottom: 4 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f1f5f9"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{ fontFamily: FONT, fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontFamily: FONT, fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
          />
          <Tooltip
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
          <Bar dataKey="rounds" radius={[4, 4, 0, 0]} maxBarSize={48}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 0 ? "#2563eb" : "#93c5fd"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
