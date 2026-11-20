"use client";

import Image from "next/image";

export default function PublicBenchmarkBar() {
  const bars = [
    { label: "Legacy NIC", heightPct: 46 },
    { label: "State Portals", heightPct: 58 },
    { label: "Manual Spot", heightPct: 69 },
    { label: "Superadmission", heightPct: 98, isSuperadmission: true },
    { label: "Commercial ERP", heightPct: 52 },
  ];

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-3 h-[130px] pt-4 px-2 border-b border-gray-100 pb-2">
        {bars.map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
            <div
              className={`w-full max-w-[48px] rounded-t-sm transition-all relative flex flex-col items-center justify-start pt-2 ${
                bar.isSuperadmission ? "bg-[#2563eb]" : "bg-[#f1f5f9]"
              }`}
              style={{ height: `${bar.heightPct}%` }}
            >
              {bar.isSuperadmission && (
                <div className="w-3.5 h-3.5 relative">
                  <Image
                    src="/images/Superadmission_Icon_New.png"
                    alt="Superadmission"
                    width={14}
                    height={14}
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
