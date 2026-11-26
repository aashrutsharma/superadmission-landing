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

const DATA = [
  { year: "2010–11", ger: 19.4, historical: 19.4, projected: null, note: "AISHE 2010-11" },
  { year: "2014–15", ger: 23.7, historical: 23.7, projected: null, note: "AISHE 2014-15" },
  { year: "2022–23", ger: 29.5, historical: 29.5, projected: null, note: "AISHE 2022-23" },
  { year: "2023–24", ger: 30.0, historical: 30.0, projected: 30.0, note: "AISHE 2023-24 (4.5 Cr)" },
  { year: "2035", ger: 50.0, historical: null, projected: 50.0, note: "NEP 2020 Target (7.5–8.0 Cr)" },
];

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isTarget = data.year === "2035";
    return (
      <div className="bg-white border border-gray-200/90 rounded-[4px] p-2.5 shadow-md text-xs">
        <div className="font-mono text-[10.5px] text-gray-500 mb-1">
          {isTarget ? "Target Year: 2035" : `Year: ${data.year}`}
        </div>
        <div className="flex items-center gap-1.5 font-medium text-gray-900">
          <span>Gross Enrolment Ratio:</span>
          <span className="font-semibold text-[#9e790d]">{data.ger}%</span>
          {isTarget && (
            <span className="text-[9.5px] bg-amber-50 text-[#9e790d] border border-amber-200 px-1 py-0.5 rounded-[2px] font-semibold">
              Target
            </span>
          )}
        </div>
        <div className="text-[10px] text-gray-400 mt-0.5">{data.note}</div>
      </div>
    );
  }
  return null;
}

export default function GerProjectionChart() {
  return (
    <div className="border border-gray-200/90 rounded-[4px] p-4 sm:p-5 bg-white shadow-2xs">
      {/* Header & Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-gray-100">
        <div>
          <h4 className="text-[13.5px] font-medium text-gray-950 tracking-tight">
            Gross Enrolment Ratio (GER) Growth & 2035 Projection
          </h4>
          <p className="text-[11.5px] text-gray-500 font-normal mt-0.5">
            Historical official AISHE records vs NEP 2020 target
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-[#9e790d]" />
            <span className="text-[11px] text-gray-600">Recorded GER</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 border-t-2 border-dashed border-[#9e790d]" />
            <span className="text-[11px] text-[#9e790d] font-medium">2035 Target (50%)</span>
          </div>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="w-full h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={DATA} margin={{ top: 25, right: 35, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fill: "#64748b", fontSize: 11, fontFamily: "var(--font-geist-mono), monospace" }}
              axisLine={{ stroke: "#e2e8f0" }}
              tickLine={false}
            />
            <YAxis
              domain={[15, 55]}
              ticks={[20, 30, 40, 50]}
              unit="%"
              tick={{ fill: "#64748b", fontSize: 11, fontFamily: "var(--font-geist-mono), monospace" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* Historical Recorded Line */}
            <Line
              type="monotone"
              dataKey="historical"
              stroke="#9e790d"
              strokeWidth={2}
              dot={{ r: 4, fill: "#9e790d", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#9e790d" }}
              isAnimationActive={false}
            />

            {/* Projected Line (Dotted from 2023-24 to 2035 Target) */}
            <Line
              type="monotone"
              dataKey="projected"
              stroke="#9e790d"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={(props: any) => {
                const { cx, cy, payload } = props;
                if (payload.year === "2035") {
                  return (
                    <g key="target-pill">
                      <circle cx={cx} cy={cy} r={5} fill="#9e790d" stroke="#ffffff" strokeWidth={2} />
                      <rect
                        x={cx - 36}
                        y={cy - 26}
                        width={72}
                        height={18}
                        rx={3}
                        fill="#9e790d"
                        className="shadow-sm"
                      />
                      <text
                        x={cx}
                        y={cy - 13}
                        fill="#ffffff"
                        fontSize={9.5}
                        fontWeight="600"
                        textAnchor="middle"
                      >
                        50% Target
                      </text>
                    </g>
                  );
                }
                return <circle key={cx} cx={cx} cy={cy} r={3.5} fill="#9e790d" />;
              }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Footnote in very small font */}
      <p className="text-[10px] text-gray-400 mt-2 font-normal leading-normal">
        A CII and Grant Thornton report cited in <em>The Tribune</em> estimates India will need capacity for about 8.61 crore students by 2035.
      </p>
    </div>
  );
}
