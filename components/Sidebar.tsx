"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import LineSidebar from "./LineSidebar";
import { useViewMode } from "@/lib/view-mode";

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
    { id: "careers", label: "Join us" },
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

interface SidebarProps {
  tocItems?: TOCItem[];
}

export default function Sidebar({ tocItems: customTocItems }: SidebarProps = {}) {
  const pathname = usePathname();
  const { mode, setMode } = useViewMode();
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [dynamicToc, setDynamicToc] = useState<TOCItem[] | null>(null);

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
      setDynamicToc(null);
    }
  }, [pathname]);

  const tocItems = customTocItems ?? dynamicToc ?? tocByRoute[pathname] ?? [];

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

  const handleTocClick = (index: number, item: any) => {
    const id = typeof item === "string" ? item : item.id;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="w-[265px] min-w-[265px] h-screen sticky top-0 self-start bg-white overflow-y-auto flex flex-col px-8 pt-9 pb-8 select-none shrink-0 z-30">
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

      {/* Segmented Mode Pill: [ For Everyone | Agent ] */}
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
          className={`px-2.5 py-0.5 text-[11.5px] font-medium rounded-[3px] transition-all cursor-pointer ${
            mode === "agent"
              ? "bg-white text-gray-900 shadow-2xs"
              : "text-gray-500 hover:text-gray-900 bg-transparent"
          }`}
        >
          Agent
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
    </aside>
  );
}
