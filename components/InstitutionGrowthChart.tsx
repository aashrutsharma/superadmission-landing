"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DATA = [
  {
    year: "2014-15",
    universities: 760,
    colleges: 38498,
    standalone: 12276,
    total: 51534,
  },
  {
    year: "2018-19",
    universities: 993,
    colleges: 39931,
    standalone: 10725,
    total: 51649,
  },
  {
    year: "2022-23",
    displayYear: "2022-23*",
    universities: 1213,
    colleges: 46624,
    standalone: 12543,
    total: 60380,
  },
  {
    year: "2023-24",
    universities: 1289,
    colleges: 48246,
    standalone: 15221,
    total: 64756,
  },
];

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200/90 rounded-[4px] p-3 shadow-md text-xs">
        <div className="font-mono text-[11px] text-gray-500 mb-1.5 font-semibold">
          Academic Year: {data.displayYear || data.year}
        </div>
        <div className="space-y-1 mb-2">
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-gray-600">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-100/90 border border-amber-500/80" /> Universities:
            </span>
            <span className="font-mono font-medium text-gray-900">
              {data.universities.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-gray-600">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-blue-100/90 border border-blue-500/80" /> Colleges:
            </span>
            <span className="font-mono font-medium text-gray-900">
              {data.colleges.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-gray-600">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-100/90 border border-emerald-500/80" /> Standalone:
            </span>
            <span className="font-mono font-medium text-gray-900">
              {data.standalone.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="pt-1.5 border-t border-gray-100 flex items-center justify-between font-semibold text-gray-950">
          <span>Total Institutions:</span>
          <span className="font-mono text-[#9e790d]">{data.total.toLocaleString()}</span>
        </div>
      </div>
    );
  }
  return null;
}

export default function InstitutionGrowthChart() {
  return (
    <div className="border border-gray-200/90 rounded-[4px] p-4 sm:p-5 bg-white shadow-2xs my-6">
      {/* Header & Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-gray-100">
        <div>
          <h4 className="text-[13.5px] font-medium text-gray-950 tracking-tight">
            Registered Higher Education Institutions (HEIs)
          </h4>
          <p className="text-[11.5px] text-gray-500 font-normal mt-0.5">
            2014-15 to 2023-24 breakdown by institution category
          </p>
        </div>

        {/* Legend with pastel transparent swatches matching Sankey */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-100/90 border border-amber-500/80" />
            <span className="text-[11px] text-gray-600 font-medium">Universities</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-blue-100/90 border border-blue-500/80" />
            <span className="text-[11px] text-gray-600 font-medium">Colleges</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-100/90 border border-emerald-500/80" />
            <span className="text-[11px] text-gray-600 font-medium">Standalone</span>
          </div>
        </div>
      </div>

      {/* Stacked Bar Chart with soft pastel translucent fills and delicate borders */}
      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={DATA} margin={{ top: 25, right: 25, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fill: "#64748b", fontSize: 11, fontFamily: "var(--font-geist-mono), monospace" }}
              axisLine={{ stroke: "#e2e8f0" }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 75000]}
              ticks={[20000, 40000, 60000]}
              tick={{ fill: "#64748b", fontSize: 11, fontFamily: "var(--font-geist-mono), monospace" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* Stacked Layers: Soft Pastel Blue (Colleges), Soft Pastel Emerald (Standalone), Pastel Amber (Universities) */}
            <Bar
              dataKey="colleges"
              stackId="a"
              fill="rgba(59, 130, 246, 0.38)"
              stroke="#3b82f6"
              strokeWidth={1}
              name="Colleges"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="standalone"
              stackId="a"
              fill="rgba(16, 185, 129, 0.38)"
              stroke="#10b981"
              strokeWidth={1}
              name="Standalone"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="universities"
              stackId="a"
              fill="rgba(245, 158, 11, 0.5)"
              stroke="#d97706"
              strokeWidth={1}
              name="Universities"
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footnote */}
      <p className="text-[10px] text-gray-400 mt-2 font-normal leading-normal">
        Source: AISHE. Growth is measured against 2014-15. *2022-23 data is provisional.
      </p>
    </div>
  );
}
