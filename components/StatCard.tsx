interface StatCardProps {
  number: string;
  label: string;
  subLabel?: string;
}

export default function StatCard({ number, label, subLabel }: StatCardProps) {
  return (
    <div className="flex flex-col gap-1 p-6 border border-gray-100 rounded-xl bg-white">
      <span className="text-5xl font-bold text-blue-600 tracking-tight leading-none">
        {number}
      </span>
      <span className="text-sm font-semibold text-[#111] mt-2">{label}</span>
      {subLabel && (
        <span className="text-xs text-gray-400">{subLabel}</span>
      )}
    </div>
  );
}
