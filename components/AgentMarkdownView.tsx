"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface AgentMarkdownViewProps {
  content: string;
}

export default function AgentMarkdownView({ content }: AgentMarkdownViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative font-mono text-[13px] leading-[1.65] text-[#18181b] max-w-[640px] pt-4 pb-20 select-text">
      {/* Sticky / Top Copy Button */}
      <div className="sticky top-6 z-20 flex justify-end mb-4">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-[3px] text-xs font-mono text-gray-700 hover:text-black hover:border-gray-400 transition-all shadow-xs cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied MDX" : "Copy MDX"}</span>
        </button>
      </div>

      {/* Raw Markdown Output */}
      <pre className="whitespace-pre-wrap break-words font-mono text-[13px] text-[#18181b] bg-transparent border-none p-0 m-0">
        {content}
      </pre>
    </div>
  );
}
