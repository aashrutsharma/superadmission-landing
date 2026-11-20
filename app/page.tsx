"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementPill from "@/components/AnnouncementPill";
import FeatureCard from "@/components/FeatureCard";
import ProcessFlowDiagram from "@/components/ProcessFlowDiagram";
import ProductionGrid from "@/components/ProductionGrid";
import RunsEverywhere from "@/components/RunsEverywhere";
import EnterpriseSecurity from "@/components/EnterpriseSecurity";
import ProductionCTA from "@/components/ProductionCTA";
import Footer from "@/components/Footer";
import AgentMarkdownView from "@/components/AgentMarkdownView";
import { FAQ_ITEMS, BLOG_POSTS } from "@/lib/content";
import { SUPERADMISSION_MDX } from "@/lib/page-mdx";
import { useViewMode } from "@/lib/view-mode";
import { ChevronDown, Copy, Check } from "lucide-react";

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col border-t border-gray-100">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="border-b border-gray-100">
          <button
            className="flex items-center justify-between w-full py-3.5 text-left gap-4 cursor-pointer bg-transparent border-none"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-[14px] font-medium text-gray-900">
              {item.question}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="pb-3.5">
              <p className="text-[13px] text-gray-600 leading-relaxed font-normal">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const { mode } = useViewMode();
  const [copied, setCopied] = useState(false);

  const copyPrompt = () => {
    navigator.clipboard.writeText("npx @superadmission/cli init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If Agent mode is active, display the raw, clean, copiable MDX view (Screenshot 2)
  if (mode === "agent") {
    return <AgentMarkdownView content={SUPERADMISSION_MDX} />;
  }

  // "For Everyone" Rich Interactive View (Screenshot 1)
  return (
    <div className="w-full">
      {/* 1. Announcement Pill */}
      <div className="mb-6">
        <AnnouncementPill
          text="Introducing Superadmission"
          href="https://docs.superadmission.com/superadmission/our-mission-and-vision"
          linkLabel="Read the post ↗"
        />
      </div>

      {/* 2. Hero Headline (Font-Medium, Not Bold, exactly like Screenshot 1) */}
      <div className="mb-7">
        <h1 className="text-[36px] sm:text-[38px] font-medium tracking-tight text-[#0a0a0a] leading-[1.18] mb-3.5">
          superadmission is building the default engine for unified academic admissions.
        </h1>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-5 font-normal">
          Available for students, institutions, and counselling authorities.
        </p>

        {/* CTA Buttons (Crisp 3px corners) */}
        <div className="flex items-center gap-2.5 flex-wrap mb-3.5">
          <a
            href="https://superadmission.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2563eb] text-white hover:bg-blue-700 text-xs font-semibold px-3.5 py-2 rounded-[3px] transition-colors no-underline uppercase tracking-wider shadow-2xs"
          >
            <div className="w-3.5 h-3.5 relative">
              <Image
                src="/images/Superadmission_Icon_New.png"
                alt="Superadmission"
                width={14}
                height={14}
                className="object-contain"
              />
            </div>
            BUILD WITH SUPERADMISSION
          </a>
          <a
            href="mailto:contact@superadmission.com"
            className="inline-flex items-center gap-1.5 bg-[#f4f4f5] hover:bg-gray-200 text-gray-800 text-xs font-semibold px-3.5 py-2 rounded-[3px] transition-colors no-underline uppercase tracking-wider"
          >
            TALK TO SALES ↗
          </a>
        </div>

        {/* Quick CLI Box with Copy */}
        <div className="flex items-center justify-between border border-gray-200/90 rounded-[3px] px-3 py-1.5 bg-gray-50/50 max-w-sm mb-6">
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
            COPY SETUP PROMPT
          </span>
          <button
            onClick={copyPrompt}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="text-[11px] font-mono">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        {/* Works With Logos */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider">
            WORKS WITH
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {["DigiLocker", "Aadhaar", "APAAR", "NTA", "Digital India", "MeitY"].map(
              (partner) => (
                <span
                  key={partner}
                  className="text-[11px] text-gray-600 border border-gray-200/80 rounded-full px-2.5 py-0.5 bg-white font-medium shadow-2xs"
                >
                  {partner}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Hero Visual / Atmospheric Banner (Crisp 4px corners) */}
      <div className="w-full h-64 rounded-[4px] bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center p-6 mb-10 border border-gray-200 relative overflow-hidden text-center shadow-inner">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#60a5fa 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10">
          <span className="text-[10px] font-mono font-medium text-blue-300 uppercase tracking-widest bg-blue-950/70 border border-blue-400/30 px-2.5 py-0.5 rounded-[2px] mb-2 inline-block">
            DPI PROTOCOL LAYER
          </span>
          <h2 className="text-lg md:text-xl font-medium text-white tracking-tight mt-1 mb-1.5">
            Superadmission Architecture
          </h2>
          <p className="text-[11px] text-blue-200/70 max-w-xs mx-auto">
            [Banner Placeholder &mdash; Image will be added here]
          </p>
        </div>
      </div>

      {/* SECTION 1: MISSION */}
      <section id="mission" className="mb-14 scroll-mt-20">
        <div className="flex flex-col gap-3.5 text-[14px] text-gray-700 leading-relaxed font-normal">
          <p>
            The path to a fair higher education ecosystem is to scale{" "}
            <a
              href="https://docs.superadmission.com/superadmission/what-is-superadmission"
              target="_blank"
              className="text-[#2563eb] font-medium underline underline-offset-2 no-underline hover:underline"
            >
              in-context verified admissions
            </a>{" "}
            that work with <strong className="font-semibold text-gray-900">any state council, any central authority</strong>, and across all varieties of reservation matrices. As entrance exams multiply and counselling processes fragment into 600+ disparate portals, student eligibility and seat allocation should be separated from ad-hoc software and be universally interoperable.
          </p>
          <p className="text-gray-950 font-medium text-[16px] mt-1">
            Admission fragmentation is no longer a constraint.
          </p>
          <p>
            Entrance tests scale on paper and test centers, but traditional portals fail to adapt in real time to round vacancies and duplicate seat blocking.
          </p>
          <p>
            We build all the hard infrastructure parts of a scalable admission system, from automated document hash verification via DigiLocker and APAAR to live algorithmic seat reconciliation during spot rounds.
          </p>
        </div>

        {/* Figure 1. Animated Flowing Line Diagram (Screenshot 4) */}
        <ProcessFlowDiagram />
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 2: WHAT WE DO */}
      <section id="what-we-do" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl font-medium tracking-tight text-gray-950 mb-5">
          What we do
        </h2>
        <div className="flex flex-col gap-1.5">
          <FeatureCard
            type="praveshai"
            title="Thinking and guidance that stays with the student."
            description="PraveshAI analyses candidate rank, domicile, category, and eligibility rules across 600+ counselling authorities in real time. It answers cutoffs, simulates multi-round choices, and generates pre-verified application dossiers directly from the student profile."
          />
          <FeatureCard
            type="manifest"
            title="Every degree-granting seat, verified."
            description="A neutral, real-time repository of every approved college, program, fee structure, and historical cutoff in India. Zero sponsored placements, zero algorithmic bias, powered by open institutional audits."
          />
          <FeatureCard
            type="spot"
            title="The hard infrastructure, done."
            description="Live algorithmic seat reconciliation and digital spot rounds that eliminate 18-hour physical campus queues. Seats update in real time with end-to-end cryptographic audit trails."
          />
        </div>

        <p className="text-xs text-gray-500 mt-5 leading-relaxed font-normal">
          Scale and Enterprise include advanced seat matrix reconciliation with real-time audit. Free and Candidate tiers keep standard document verification.{" "}
          <a href="https://docs.superadmission.com" target="_blank" className="text-[#2563eb] hover:underline">
            Explore document support.
          </a>
        </p>

        <div className="mt-3.5">
          <Link href="/product" className="text-xs font-medium text-gray-900 hover:text-[#2563eb] transition-colors no-underline">
            Read more about the specifics ↗
          </Link>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 3: IN PRODUCTION */}
      <section id="in-production" className="mb-14 scroll-mt-20">
        <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider mb-2">
          IN PRODUCTION
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-950 leading-tight mb-7">
          Our <span className="font-semibold text-gray-950">promise</span> is the most reliable admissions infrastructure for India: the kind students <span className="font-semibold text-gray-950">feel</span>, not just the kind that tops a benchmark.
        </h2>

        {/* Real Production Cards & Real Recharts Graphs (Screenshot 3) */}
        <ProductionGrid />

        {/* Runs everywhere 3 Architecture Cards (Screenshot 4) */}
        <RunsEverywhere />

        {/* Enterprise Security 3 Badges (Screenshot 4) */}
        <EnterpriseSecurity />

        {/* Blue Production Callout Card */}
        <ProductionCTA />
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 4: QUESTIONS */}
      <section id="questions" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl font-medium tracking-tight text-gray-950 mb-5">
          Questions
        </h2>
        <FAQAccordion />
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 5: WRITING */}
      <section id="writing" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl font-medium tracking-tight text-gray-950 mb-5">
          Writing
        </h2>
        <div className="border border-gray-200/90 rounded-[4px] overflow-hidden divide-y divide-gray-100 bg-white">
          {BLOG_POSTS.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-center gap-3.5 p-3.5 hover:bg-gray-50/70 transition-colors no-underline group"
            >
              <span className="text-xs text-gray-400 font-medium group-hover:text-[#2563eb] transition-colors flex-shrink-0">
                ↗
              </span>
              <span className="text-xs font-mono text-gray-400 flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors flex-1 min-w-0 truncate">
                {post.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-3.5">
          <Link href="/blog" className="text-xs font-medium text-gray-900 hover:text-[#2563eb] transition-colors no-underline">
            Read the blog ↗
          </Link>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 6: CAREERS */}
      <section id="careers" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl font-medium tracking-tight text-gray-950 mb-2.5">
          Careers
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-4 max-w-lg font-normal">
          We&apos;re a small, dedicated team based in New Delhi and Bengaluru, building the admissions infrastructure layer for every council, university, and candidate in India. If that is the problem you want to spend the next few years on, we would like to hear from you.
        </p>
        <a
          href="mailto:careers@superadmission.com"
          className="text-xs font-medium text-gray-900 hover:text-[#2563eb] transition-colors inline-flex items-center gap-1"
        >
          See open roles ↗
        </a>
      </section>

      <div className="border-t border-gray-100" />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
