"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import * as echarts from "echarts";

interface StageData {
  id: string;
  name: string;
  otherHrs: number;
  superadmissionHrs: number;
  description: string;
  metricComparison: string;
}

const STAGES: StageData[] = [
  {
    id: "reg",
    name: "Registration",
    otherHrs: 24.0,
    superadmissionHrs: 3.5,
    description: "Repeated manual entry across multiple portal forms vs one-click Aadhaar & DigiLocker pre-fill.",
    metricComparison: "85.4% faster onboarding",
  },
  {
    id: "doc_verif",
    name: "Documents Verification",
    otherHrs: 72.0,
    superadmissionHrs: 1.2,
    description: "Slow manual verification by institutional officers vs automated cryptographic DigiLocker pull.",
    metricComparison: "98.3% latency reduction",
  },
  {
    id: "choice_lock",
    name: "Choice Locking",
    otherHrs: 14.0,
    superadmissionHrs: 2.0,
    description: "Scattered priority order entry with frozen server windows vs unified single-view preference matrix.",
    metricComparison: "85.7% faster choice locking",
  },
  {
    id: "round_1",
    name: "Round 1",
    otherHrs: 48.0,
    superadmissionHrs: 6.0,
    description: "Multi-day delayed batch processing vs real-time deterministic Manifest allocation engine.",
    metricComparison: "87.5% faster allotment",
  },
  {
    id: "round_2",
    name: "Round 2",
    otherHrs: 36.0,
    superadmissionHrs: 6.0,
    description: "Manual vacancy reconciliations vs automated instant seat reconciliation & float reallocation.",
    metricComparison: "83.3% cycle compression",
  },
  {
    id: "seat_accept",
    name: "Seat Acceptance",
    otherHrs: 24.0,
    superadmissionHrs: 1.5,
    description: "In-person reporting center visits & payment lag vs instant escrow payment & digital verification.",
    metricComparison: "93.8% faster acceptance",
  },
  {
    id: "spot_round",
    name: "Spot Round",
    otherHrs: 18.0,
    superadmissionHrs: 4.0,
    description: "Opaque vacancy notifications on static PDFs vs real-time transparent vacancy radar & instant claim.",
    metricComparison: "77.8% vacancy turn-around",
  },
  {
    id: "final_allot",
    name: "Final Allotment",
    otherHrs: 58.0,
    superadmissionHrs: 4.0,
    description: "Offline institutional clearance queues vs tamper-proof verified digital admission credentials.",
    metricComparison: "93.1% clearance efficiency",
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
      const diff = (((s.otherHrs - s.superadmissionHrs) / s.otherHrs) * 100).toFixed(1);
      return {
        title: s.name,
        otherHrs: `${s.otherHrs} hrs`,
        superHrs: `${s.superadmissionHrs} hrs`,
        badge: `${diff}% faster`,
        desc: s.description,
        comparison: s.metricComparison,
      };
    }
    return {
      title: "Average Across All 8 Stages",
      otherHrs: "36.8 hrs",
      superHrs: "3.5 hrs",
      badge: "86% more time efficient",
      desc: "Comprehensive benchmark measuring applicant waiting time and manual queue delays across India's counselling pipeline.",
      comparison: "Aggregated statistical benchmark",
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

    const isFiltered = selectedStageIndex !== null;

    const option: echarts.EChartsOption = {
      backgroundColor: "transparent",
      animationDuration: 750,
      animationEasing: "cubicOut",
      grid: {
        top: 36,
        right: 18,
        bottom: 38,
        left: 42,
        containLabel: false,
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: "#ffffff",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: [10, 14],
        textStyle: {
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          color: "#111827",
        },
        extraCssText: "box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.08); border-radius: 6px;",
        formatter: (params: unknown) => {
          if (!Array.isArray(params) || params.length === 0) return "";
          const first = params[0] as { axisValue?: string; value?: number };
          const second = (params[1] ?? {}) as { value?: number };
          const stageName = first.axisValue ?? "";
          const otherVal = Number(first.value ?? 0);
          const superVal = Number(second.value ?? 0);
          const diffPct = otherVal > 0 ? (((otherVal - superVal) / otherVal) * 100).toFixed(0) : "0";

          return `
            <div style="font-weight: 600; font-size: 13px; color: #111; margin-bottom: 6px;">${stageName}</div>
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 20px; font-size: 12px; margin-bottom: 4px;">
              <span style="color: #64748b; display: flex; align-items: center; gap: 6px;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: #94a3b8; display: inline-block;"></span>
                Other portals:
              </span>
              <span style="font-weight: 600; font-family: monospace; color: #334155;">${otherVal} hrs</span>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 20px; font-size: 12px; margin-bottom: 6px;">
              <span style="color: #9e790d; display: flex; align-items: center; gap: 6px;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: #9e790d; display: inline-block;"></span>
                Superadmission:
              </span>
              <span style="font-weight: 700; font-family: monospace; color: #9e790d;">${superVal} hrs</span>
            </div>
            <div style="padding-top: 4px; border-top: 1px solid #f3f4f6; font-size: 11px; font-weight: 600; color: #9e790d;">
              ⚡ ${diffPct}% time saved
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
          color: (_value?: string | number, index?: number) => {
            if (isFiltered && selectedStageIndex === index) {
              return "#9e790d";
            }
            return "#9ca3af";
          },
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          fontWeight: 500,
          margin: 12,
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
          symbolSize: (_value: unknown, params: { dataIndex?: number } | unknown) => {
            const dataIndex = (params as { dataIndex?: number })?.dataIndex;
            return isFiltered && selectedStageIndex === dataIndex ? 9 : 5;
          },
          itemStyle: {
            color: "#94a3b8",
            borderColor: "#ffffff",
            borderWidth: 2,
          },
          lineStyle: {
            width: 2,
            color: "#94a3b8",
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(148, 163, 184, 0.22)" },
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
          symbolSize: (_value: unknown, params: { dataIndex?: number } | unknown) => {
            const dataIndex = (params as { dataIndex?: number })?.dataIndex;
            return isFiltered && selectedStageIndex === dataIndex ? 11 : 6;
          },
          itemStyle: {
            color: "#9e790d",
            borderColor: "#ffffff",
            borderWidth: 2,
            shadowColor: "rgba(158, 121, 13, 0.4)",
            shadowBlur: 6,
          },
          lineStyle: {
            width: 2.8,
            color: "#9e790d",
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(158, 121, 13, 0.3)" },
              { offset: 1, color: "rgba(158, 121, 13, 0.02)" },
            ]),
          },
          markPoint: isFiltered
            ? {
                data: [
                  {
                    name: stageNames[selectedStageIndex],
                    coord: [stageNames[selectedStageIndex], superadmissionData[selectedStageIndex]],
                    symbol: "pin",
                    symbolSize: 32,
                    itemStyle: {
                      color: "#9e790d",
                    },
                    label: {
                      show: true,
                      formatter: `${superadmissionData[selectedStageIndex]}h`,
                      fontSize: 10,
                      fontWeight: "bold",
                      color: "#ffffff",
                    },
                  },
                ],
              }
            : undefined,
        },
      ],
    };

    chart.setOption(option);

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <p className="text-[12px] font-normal text-gray-500 mb-0.5">
            {activeDetails.title}
          </p>
          <div className="flex items-baseline gap-2.5">
            <span className="text-2xl font-bold text-gray-900 tracking-tight font-mono">
              {activeDetails.superHrs}
            </span>
            <span className="text-xs font-semibold text-[#9e790d] bg-amber-50/90 border border-amber-200/80 px-2 py-0.5 rounded-[3px]">
              {activeDetails.badge}
            </span>
          </div>
          <p className="text-[12px] text-gray-600 mt-1.5 max-w-xl font-normal leading-relaxed">
            {activeDetails.desc}
          </p>
        </div>

        {/* Global Chart Legend */}
        <div className="flex items-center gap-4 text-xs font-medium self-start sm:self-auto shrink-0 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
            <span className="text-gray-600">Other portals: <strong className="font-mono text-gray-700">{activeDetails.otherHrs}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9e790d]" />
            <span className="text-[#9e790d] font-semibold">Superadmission: <strong className="font-mono text-[#9e790d]">{activeDetails.superHrs}</strong></span>
          </div>
        </div>
      </div>

      {/* Interactive Legend Stage Selector Buttons */}
      <div className="mb-4 pt-1">
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
            All Stages (Overview)
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
      <div className="w-full h-[260px] relative bg-white">
        <div ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
}
