import Footer from "@/components/Footer";
import { CHANGELOG_ENTRIES } from "@/lib/content";

export default function ChangelogPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          CHANGELOG
        </p>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-950 leading-tight mb-3">
          What&apos;s new in Superadmission
        </h1>
        <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
          Every protocol and product update to the Superadmission platform, in reverse chronological order.
        </p>
      </div>

      {/* Changelog entries */}
      <div className="flex flex-col">
        {CHANGELOG_ENTRIES.map((entry, index) => (
          <div key={entry.version}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-6">
              {/* Version + date column */}
              <div className="flex-shrink-0 sm:w-[110px]">
                <span className="text-[11px] font-mono font-medium text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded-[2px]">
                  {entry.version}
                </span>
                <p className="text-[11px] font-mono text-gray-400 mt-1.5">{entry.date}</p>
              </div>

              {/* Content column */}
              <div className="flex-1 min-w-0">
                <h2 className="text-[15px] font-medium text-gray-950 mb-3">
                  {entry.title}
                </h2>
                <ul className="flex flex-col gap-1.5">
                  {entry.changes.map((change) => (
                    <li
                      key={change}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-1.5" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {index < CHANGELOG_ENTRIES.length - 1 && (
              <div className="border-t border-gray-100" />
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-8 mt-6">
        <Footer />
      </div>
    </div>
  );
}
