"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import * as echarts from "echarts";
import SuperadmissionWordmark from "@/components/SuperadmissionWordmark";

interface StageData {
  id: string;
  name: string;
  otherHrs: number;
  superadmissionHrs: number;
  description: string;
}

const STAGES: StageData[] = [
  {
    id: "reg",
    name: "Registration",
    otherHrs: 24.0,
    superadmissionHrs: 3.5,
    description: "DigiLocker auto-fill vs multi-portal manual form entry.",
  },
  {
    id: "doc_verif",
    name: "Documents Verification",
    otherHrs: 72.0,
    superadmissionHrs: 1.2,
    description: "Automated DPI verification vs offline physical desk queues.",
  },
  {
    id: "choice_lock",
    name: "Choice Locking",
    otherHrs: 14.0,
    superadmissionHrs: 2.0,
    description: "Single unified preference sheet vs disconnected portal lists.",
  },
  {
    id: "round_1",
    name: "Round 1",
    otherHrs: 48.0,
    superadmissionHrs: 6.0,
    description: "Deterministic real-time allocation vs multi-day batch delays.",
  },
  {
    id: "round_2",
    name: "Round 2",
    otherHrs: 36.0,
    superadmissionHrs: 6.0,
    description: "Instant seat reconciliation vs prolonged manual float rounds.",
  },
  {
    id: "seat_accept",
    name: "Seat Acceptance",
    otherHrs: 24.0,
    superadmissionHrs: 1.5,
    description: "Instant digital fee escrow vs offline center reporting.",
  },
  {
    id: "spot_round",
    name: "Spot Round",
    otherHrs: 18.0,
    superadmissionHrs: 4.0,
    description: "Live transparent seat radar vs static physical notice boards.",
  },
  {
    id: "final_allot",
    name: "Final Allotment",
    otherHrs: 58.0,
    superadmissionHrs: 4.0,
    description: "Cryptographically signed admission pass vs manual office verification.",
  },
];

export default function BenchmarkLineChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const [selectedStageIndex, setSelectedStageIndex] = useState<number | null>(null);

  // Active stage details or overall aggregate
  const activeDetails = useMemo(() => {
    if (selectedStageIndex !== null && STAGES[selectedStageIndex]) {
      const s = STAGES[selectedStageIndex];
      return {
        title: s.name,
        otherHrs: `${s.otherHrs} hrs`,
        superHrs: `${s.superadmissionHrs} hrs`,
        desc: s.description,
      };
    }
    return {
      title: "All Stages",
      otherHrs: "36.8 hrs avg",
      superHrs: "3.5 hrs avg",
      desc: "Total time required per candidate across a full admission cycle.",
    };
  }, [selectedStageIndex]);

  useEffect(() => {
    if (!chartRef.current) return;

    if (!chartInstance.current) {
      chartInstance.current = echarts.init(chartRef.current);
    }

    const chart = chartInstance.current;
    const stageNames = STAGES.map((s) => s.name);
    const otherData = STAGES.map((s) => s.otherHrs);
    const superadmissionData = STAGES.map((s) => s.superadmissionHrs);

    let option: echarts.EChartsOption;

    if (selectedStageIndex === null) {
      // 1. All Stages Overview (Smooth Comparative Line Curves)
      option = {
        backgroundColor: "transparent",
        animationDuration: 700,
        animationEasing: "cubicOut",
        grid: {
          top: 28,
          right: 20,
          bottom: 34,
          left: 36,
          containLabel: false,
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "#ffffff",
          borderColor: "#e5e7eb",
          borderWidth: 1,
          padding: [8, 12],
          textStyle: {
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: "#111827",
          },
          extraCssText: "box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.08); border-radius: 6px;",
          formatter: (params: unknown) => {
            if (!Array.isArray(params) || params.length === 0) return "";
            const first = params[0] as { axisValue?: string; value?: number };
            const second = (params[1] ?? {}) as { value?: number };
            const stageName = first.axisValue ?? "";
            const otherVal = Number(first.value ?? 0);
            const superVal = Number(second.value ?? 0);

            return `
              <div style="font-weight: 600; font-size: 12px; color: #111; margin-bottom: 5px;">${stageName}</div>
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; font-size: 11.5px; margin-bottom: 3px;">
                <span style="color: #64748b;">Other portals:</span>
                <span style="font-weight: 600; font-family: monospace; color: #334155;">${otherVal} hrs</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; font-size: 11.5px;">
                <span style="color: #9e790d; font-weight: 600;">Superadmission:</span>
                <span style="font-weight: 700; font-family: monospace; color: #9e790d;">${superVal} hrs</span>
              </div>
            `;
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: stageNames,
          axisLine: {
            lineStyle: {
              color: "#e5e7eb",
            },
          },
          axisTick: { show: false },
          axisLabel: {
            color: "#9ca3af",
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 500,
            margin: 10,
            formatter: (value: string) => {
              if (value.length > 11) {
                return value.slice(0, 9) + "…";
              }
              return value;
            },
          },
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 80,
          splitLine: {
            lineStyle: {
              color: "#f4f4f5",
              type: "dashed",
            },
          },
          axisLabel: {
            color: "#9ca3af",
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            formatter: "{value}h",
          },
        },
        series: [
          {
            name: "Other portals",
            type: "line",
            smooth: 0.35,
            data: otherData,
            symbol: "circle",
            symbolSize: 5,
            itemStyle: {
              color: "#94a3b8",
              borderColor: "#ffffff",
              borderWidth: 1.5,
            },
            lineStyle: {
              width: 2,
              color: "#94a3b8",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(148, 163, 184, 0.2)" },
                { offset: 1, color: "rgba(148, 163, 184, 0.01)" },
              ]),
            },
          },
          {
            name: "Superadmission",
            type: "line",
            smooth: 0.35,
            data: superadmissionData,
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              color: "#9e790d",
              borderColor: "#ffffff",
              borderWidth: 1.5,
              shadowColor: "rgba(158, 121, 13, 0.3)",
              shadowBlur: 4,
            },
            lineStyle: {
              width: 2.6,
              color: "#9e790d",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(158, 121, 13, 0.28)" },
                { offset: 1, color: "rgba(158, 121, 13, 0.02)" },
              ]),
            },
          },
        ],
      };
    } else {
      // 2. Stage-Specific Mutated View (Direct Side-by-Side Comparison of Time in That Stage)
      const stage = STAGES[selectedStageIndex];
      const maxVal = Math.max(stage.otherHrs, 10);
      const xUpper = Math.ceil((maxVal * 1.25) / 10) * 10;

      option = {
        backgroundColor: "transparent",
        animationDuration: 600,
        animationEasing: "cubicOut",
        grid: {
          top: 28,
          right: 56,
          bottom: 30,
          left: 110,
          containLabel: false,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" },
          backgroundColor: "#ffffff",
          borderColor: "#e5e7eb",
          borderWidth: 1,
          padding: [8, 12],
          textStyle: {
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: "#111827",
          },
          extraCssText: "box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.08); border-radius: 6px;",
          formatter: (params: unknown) => {
            if (!Array.isArray(params) || params.length === 0) return "";
            const item = params[0] as { name?: string; value?: number };
            return `
              <div style="font-weight: 600; font-size: 12px; color: #111; margin-bottom: 3px;">${stage.name}</div>
              <div style="font-size: 11.5px; color: #4b5563;">
                ${item.name}: <strong style="font-family: monospace; color: #111;">${item.value} hrs</strong>
              </div>
            `;
          },
        },
        xAxis: {
          type: "value",
          min: 0,
          max: xUpper,
          splitLine: {
            lineStyle: {
              color: "#f4f4f5",
              type: "dashed",
            },
          },
          axisLabel: {
            color: "#9ca3af",
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            formatter: "{value}h",
          },
        },
        yAxis: {
          type: "category",
          data: ["Superadmission", "Other portals"],
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "#e5e7eb",
            },
          },
          axisLabel: {
            color: (_val?: string | number, idx?: number) => {
              return idx === 0 ? "#9e790d" : "#64748b";
            },
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            margin: 12,
          },
        },
        series: [
          {
            name: stage.name,
            type: "bar",
            barWidth: 26,
            data: [
              {
                value: stage.superadmissionHrs,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    { offset: 0, color: "#9e790d" },
                    { offset: 1, color: "#c69b18" },
                  ]),
                  borderRadius: [0, 4, 4, 0],
                },
              },
              {
                value: stage.otherHrs,
                itemStyle: {
                  color: "#94a3b8",
                  borderRadius: [0, 4, 4, 0],
                },
              },
            ],
            label: {
              show: true,
              position: "right",
              formatter: "{c} hrs",
              fontFamily: "monospace",
              fontWeight: 600,
              fontSize: 11.5,
              color: "#334155",
              distance: 8,
            },
          },
        ],
      };
    }

    chart.setOption(option, true);

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedStageIndex]);

  return (
    <div className="w-full">
      {/* Top Header Metrics Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
        <div>
          <p className="text-[12px] font-normal text-gray-500 mb-0.5">
            {activeDetails.title}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900 tracking-tight font-mono">
              {activeDetails.superHrs}
            </span>
          </div>
          <p className="text-[12px] text-gray-600 mt-1 max-w-xl font-normal leading-relaxed">
            {activeDetails.desc}
          </p>
        </div>

        {/* Global Chart Legend with Logo Image and Wordmark */}
        <div className="flex items-center gap-4 text-xs font-medium self-start sm:self-auto shrink-0 pt-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0" />
            <span className="text-gray-600">
              Other portals: <strong className="font-mono text-gray-700">{activeDetails.otherHrs}</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/superadmission_for gold.png"
              alt="Superadmission"
              width={14}
              height={14}
              className="w-3.5 h-3.5 rounded-full object-contain inline-block shrink-0"
            />
            <SuperadmissionWordmark className="h-3.5 w-auto text-[#9e790d] inline-block" />
            <strong className="font-mono text-[#9e790d] ml-0.5">{activeDetails.superHrs}</strong>
          </div>
        </div>
      </div>

      {/* Interactive Legend Stage Selector Buttons */}
      <div className="mb-3.5 pt-1">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedStageIndex(null)}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-[3px] transition-all cursor-pointer border ${
              selectedStageIndex === null
                ? "bg-gray-950 text-white border-gray-950 font-medium shadow-2xs"
                : "bg-white text-gray-600 border-gray-200 hover:text-gray-950 hover:border-gray-300"
            }`}
          >
            All Stages
          </button>
          {STAGES.map((stage, idx) => {
            const isSelected = selectedStageIndex === idx;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedStageIndex(idx)}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-[3px] transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#9e790d] text-white border-[#9e790d] font-semibold shadow-2xs"
                    : "bg-white text-gray-600 border-gray-200 hover:text-gray-950 hover:border-gray-300 hover:bg-gray-50/70"
                }`}
              >
                {stage.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Apache ECharts Container */}
      <div className="w-full h-[250px] relative bg-white">
        <div ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
}
