"use client";

// Generates the authentic pixel/dot-matrix bar chart from Supermemory screenshot 3
export default function PixelSparkline() {
  // 26 columns of vertical dot bars of varying heights
  const heights = [
    3, 5, 2, 4, 7, 3, 6, 8, 4, 5, 9, 6, 4, 7, 10, 5, 8, 6, 9, 11, 7, 8, 12, 9, 11, 14
  ];
  const maxBlocks = 14;

  return (
    <div className="flex items-end gap-[3px] h-[52px] w-full pt-2">
      {heights.map((h, colIdx) => (
        <div key={colIdx} className="flex-1 flex flex-col-reverse gap-[2px]">
          {Array.from({ length: maxBlocks }).map((_, blockIdx) => {
            const isFilled = blockIdx < h;
            return (
              <span
                key={blockIdx}
                className={`w-full h-[2.5px] rounded-[0.5px] transition-colors ${
                  isFilled
                    ? "bg-[#2563eb]"
                    : "bg-transparent"
                }`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
