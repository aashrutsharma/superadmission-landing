"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import LineSidebar from "./LineSidebar";
import { useViewMode } from "@/lib/view-mode";
import { PiTextAa, PiPlus, PiMinus, PiTranslate, PiMarkdownLogo } from "react-icons/pi";

export interface TOCItem {
  id: string;
  label: string;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Research", href: "/research" },
  { label: "Docs ↗", href: "https://docs.superadmission.com", external: true },
  { label: "Console ↗", href: "https://superadmission.com", external: true },
];

const tocByRoute: Record<string, TOCItem[]> = {
  "/": [
    { id: "mission", label: "Mission" },
    { id: "what-we-do", label: "What we do" },
    { id: "what-are-we-building", label: "What we are building" },
    { id: "in-production", label: "In production" },
    { id: "questions", label: "Questions" },
    { id: "writing", label: "Writing" },
    { id: "careers", label: "Get in touch" },
  ],
  "/product": [
    { id: "dashboard", label: "Dashboard" },
    { id: "assistant", label: "Admissions Assistant" },
    { id: "spot-round", label: "Digital Spot Round" },
    { id: "repository", label: "College Repository" },
  ],
  "/research": [
    { id: "benchmarks", label: "Ecosystem" },
    { id: "guidance-gaps", label: "Guidance gaps" },
    { id: "students", label: "Students" },
    { id: "growth", label: "Growth projections" },
    { id: "reservations", label: "Reservations" },
    { id: "seat-wastage", label: "Seat wastage" },
    { id: "institutions", label: "Institutions" },
    { id: "accessibility", label: "Accessibility" },
    { id: "sources", label: "Sources" },
  ],
  "/blog": [],
  "/changelog": [],
  "/pricing": [],
};

const AGENT_SLIDER_ICONS = [
  { id: "markdown", type: "phosphor" as const },
  { id: "claude", type: "image" as const, src: "/images/Claude_AI_symbol.svg.webp", alt: "Claude" },
  { id: "chatgpt", type: "image" as const, src: "/images/ChatGPT-Logo.svg.webp", alt: "ChatGPT" },
  { id: "gemini", type: "image" as const, src: "/images/google-gemini-icon.svg", alt: "Gemini" },
  { id: "grok", type: "image" as const, src: "/images/grok-ai-icon.webp", alt: "Grok" },
];

interface SidebarProps {
  tocItems?: TOCItem[];
}

export default function Sidebar({ tocItems: customTocItems }: SidebarProps = {}) {
  const pathname = usePathname();
  const { mode, setMode } = useViewMode();
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [dynamicToc, setDynamicToc] = useState<TOCItem[] | null>(null);

  // Zoom control state
  const [zoom, setZoom] = useState(100);

  // Language state
  const [lang, setLang] = useState<"en" | "hi">("en");

  // Agent slider icon state
  const [agentIconIndex, setAgentIconIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAgentIconIndex((prev) => (prev + 1) % AGENT_SLIDER_ICONS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      // Apply zoom to documentElement smoothly
      document.documentElement.style.zoom = `${zoom}%`;
    }
  }, [zoom]);

  useEffect(() => {
    if (pathname.startsWith("/blog/") && pathname !== "/blog") {
      const timer = setTimeout(() => {
        const headings = Array.from(document.querySelectorAll("article h2, article h3"));
        if (headings.length > 0) {
          const items: TOCItem[] = headings.map((h, i) => {
            if (!h.id) {
              h.id = `heading-${i}-${(h.textContent || "").toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            }
            return {
              id: h.id,
              label: h.textContent || `Section ${i + 1}`,
            };
          });
          setDynamicToc(items);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setDynamicToc(null), 0);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const tocItems = useMemo(
    () => customTocItems ?? dynamicToc ?? tocByRoute[pathname] ?? [],
    [customTocItems, dynamicToc, pathname]
  );

  useEffect(() => {
    if (tocItems.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = tocItems.map((item) => document.getElementById(item.id));

      let currentIdx = 0;
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (!el) continue;
        const top = el.offsetTop - 140;
        if (scrollY >= top) {
          currentIdx = i;
        }
      }
      setActiveSectionIndex(currentIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const handleTocClick = (_index: number, item: TOCItem | string) => {
    const id = typeof item === "string" ? item : item.id;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="w-[265px] min-w-[265px] h-screen sticky top-0 self-start bg-white overflow-y-auto flex flex-col justify-between px-8 pt-9 pb-8 select-none shrink-0 z-30">
      <div>
        {/* Brand: Wordmark cleanly left-aligned with subtle breathing space */}
        <Link href="/" className="inline-flex items-center justify-start self-start mb-6 mt-1 no-underline -ml-1">
          <Image
            src="/images/Superadmission_New Wordmark_Device.svg"
            alt="Superadmission"
            width={160}
            height={24}
            className="h-[22px] w-auto object-contain object-left"
            style={{ objectPosition: "left center" }}
            priority
          />
        </Link>

        {/* Segmented Mode Pill: [ For Everyone | Animated AI Icon Slider + Agent ] */}
        <div className="inline-flex items-center p-0.5 bg-[#f4f4f5] border border-gray-200/60 rounded-[4px] w-fit mb-6">
          <button
            onClick={() => setMode("everyone")}
            className={`px-2.5 py-0.5 text-[11.5px] font-medium rounded-[3px] transition-all cursor-pointer ${
              mode === "everyone"
                ? "bg-white text-gray-900 shadow-2xs"
                : "text-gray-500 hover:text-gray-900 bg-transparent"
            }`}
          >
            For Everyone
          </button>
          <button
            onClick={() => setMode("agent")}
            className={`flex items-center gap-1.5 px-2.5 py-0.5 text-[11.5px] font-medium rounded-[3px] transition-all cursor-pointer ${
              mode === "agent"
                ? "bg-white text-gray-900 shadow-2xs"
                : "text-gray-500 hover:text-gray-900 bg-transparent"
            }`}
          >
            {/* Extremely smooth & seamless rotating icon slider */}
            <div className="w-3.5 h-3.5 relative flex items-center justify-center shrink-0 overflow-hidden">
              {AGENT_SLIDER_ICONS.map((icon, idx) => (
                <div
                  key={icon.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out transform ${
                    idx === agentIconIndex
                      ? "opacity-100 translate-y-0 scale-100"
                      : idx < agentIconIndex
                      ? "opacity-0 -translate-y-2 scale-90 pointer-events-none"
                      : "opacity-0 translate-y-2 scale-90 pointer-events-none"
                  }`}
                >
                  {icon.type === "phosphor" ? (
                    <PiMarkdownLogo className="w-3.5 h-3.5 text-current shrink-0" />
                  ) : (
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={14}
                      height={14}
                      unoptimized
                      className="w-3.5 h-3.5 object-contain shrink-0"
                    />
                  )}
                </div>
              ))}
            </div>
            <span>Agent</span>
          </button>
        </div>

        {/* Main Nav links */}
        <nav className="flex flex-col gap-0.5 mb-6">
          {navLinks.map((link) => {
            const isActive = !link.external && (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)));
            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-500 hover:text-gray-900 text-[13px] py-1 font-normal transition-colors leading-normal"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center text-[13px] py-1 transition-colors relative leading-normal ${
                  isActive ? "text-[#111] font-medium" : "text-gray-500 hover:text-gray-900 font-normal"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#9e790d] rounded-[1px] absolute -left-3.5 top-1/2 -translate-y-1/2" />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ON THIS PAGE Section with LineSidebar (active in For Everyone mode) */}
        {tocItems.length > 0 && mode === "everyone" && (
          <div className="mt-1 pt-4 border-t border-dashed border-gray-200/80">
            <p className="text-[11.5px] font-normal text-gray-400 mb-2">
              On this page
            </p>
            <div className="pl-0.5">
              <LineSidebar
                items={tocItems}
                activeIndex={activeSectionIndex}
                onItemClick={handleTocClick}
                accentColor="#9e790d"
                textColor="#71717a"
                markerColor="#e4e4e7"
                showIndex={false}
                showMarker={true}
                markerLength={22}
                markerGap={6}
                itemGap={12}
                fontSize={0.76}
              />
            </div>
          </div>
        )}
      </div>

      {/* TOOLS TOOLBAR: Separator below On this page, Zoom (TextAa with plus & minus) + Separator + Translate & Hindi */}
      <div className="mt-6 pt-4 border-t border-dashed border-gray-200/80">
        <div className="flex items-center justify-between text-gray-500">
          {/* Zoom controls: Text-Aa U+E6EE + plus U+E3D4 & minus */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setZoom(100)}
              title="Reset Zoom (100%)"
              className="p-1 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer rounded-xs"
            >
              <PiTextAa className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-0.5 bg-gray-50/90 border border-gray-200/70 rounded-[3px] px-1 py-0.5">
              <button
                type="button"
                onClick={() => setZoom((prev) => Math.max(80, prev - 5))}
                title="Zoom Out"
                className="text-gray-400 hover:text-gray-900 p-0.5 transition-colors cursor-pointer"
              >
                <PiMinus className="w-2.5 h-2.5" />
              </button>
              <span className="text-[10px] font-mono text-gray-600 px-0.5 select-none min-w-[28px] text-center font-medium">
                {zoom}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((prev) => Math.min(130, prev + 5))}
                title="Zoom In"
                className="text-gray-400 hover:text-gray-900 p-0.5 transition-colors cursor-pointer"
              >
                <PiPlus className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          {/* Short vertical separator */}
          <div className="w-px h-3.5 bg-gray-200/90" />

          {/* Language controls: Translate U+E4A2 (English default) & Hindi (letter-hindi-a-svgrepo-com) */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setLang("en")}
              title="English (Default)"
              className={`p-1 transition-colors cursor-pointer rounded-xs flex items-center justify-center ${
                lang === "en" ? "text-gray-900 font-semibold" : "text-gray-400 hover:text-gray-900"
              }`}
            >
              <PiTranslate className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setLang("hi")}
              title="Hindi"
              className={`p-1 transition-colors cursor-pointer rounded-xs flex items-center justify-center ${
                lang === "hi" ? "text-gray-900 opacity-100" : "text-gray-400 hover:text-gray-900 opacity-70"
              }`}
            >
              <Image
                src="/images/letter-hindi-a-svgrepo-com.svg"
                alt="Hindi"
                width={14}
                height={14}
                unoptimized
                className="w-3.5 h-3.5 object-contain grayscale"
              />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
