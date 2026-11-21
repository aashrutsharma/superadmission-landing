"use client";

import Link from "next/link";

interface AnnouncementPillProps {
  text: string;
  href: string;
  linkLabel?: string;
  variant?: "default" | "glass";
}

export default function AnnouncementPill({
  text,
  href,
  linkLabel = "Read the post ↗",
  variant = "default",
}: AnnouncementPillProps) {
  const isGlass = variant === "glass";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[4px] px-2.5 py-1 text-xs transition-colors ${
        isGlass
          ? "border border-white/20 bg-black/40 text-white/90 backdrop-blur-md shadow-sm"
          : "border border-gray-200/90 bg-white text-gray-600 shadow-2xs"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
      <span className={`font-normal ${isGlass ? "text-white/90" : "text-gray-700"}`}>
        {text}
      </span>
      <span className={isGlass ? "text-white/30 font-normal" : "text-gray-300 font-normal"}>
        |
      </span>
      {href.startsWith("http") ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-medium transition-colors no-underline ${
            isGlass ? "text-white hover:text-amber-300" : "text-gray-900 hover:text-[#2563eb]"
          }`}
        >
          {linkLabel}
        </a>
      ) : (
        <Link
          href={href}
          className={`font-medium transition-colors no-underline ${
            isGlass ? "text-white hover:text-amber-300" : "text-gray-900 hover:text-[#2563eb]"
          }`}
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
