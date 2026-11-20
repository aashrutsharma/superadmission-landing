"use client";

import Link from "next/link";

interface AnnouncementPillProps {
  text: string;
  href: string;
  linkLabel?: string;
}

export default function AnnouncementPill({
  text,
  href,
  linkLabel = "Read the post ↗",
}: AnnouncementPillProps) {
  return (
    <div className="inline-flex items-center gap-2 border border-gray-200/90 rounded-[4px] px-2.5 py-1 text-xs bg-white text-gray-600 shadow-2xs">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
      <span className="font-normal text-gray-700">{text}</span>
      <span className="text-gray-300 font-normal">|</span>
      {href.startsWith("http") ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-900 hover:text-[#2563eb] transition-colors no-underline"
        >
          {linkLabel}
        </a>
      ) : (
        <Link
          href={href}
          className="font-medium text-gray-900 hover:text-[#2563eb] transition-colors no-underline"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
