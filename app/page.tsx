"use client";

import { useState } from "react";
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
import { ChevronDown } from "lucide-react";

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

  // If Agent mode is active, display the raw, clean, copiable MDX view (Screenshot 2)
  if (mode === "agent") {
    return <AgentMarkdownView content={SUPERADMISSION_MDX} />;
  }

  // "For Everyone" Rich Interactive View
  return (
    <div className="w-full">
      {/* Hero Video Banner: Extended from pill height down to Mission */}
      <div className="w-full rounded-[6px] border border-gray-200/90 relative overflow-hidden mb-10 shadow-sm bg-neutral-950">
        {/* Natural Video Background (True colors & vibrancy) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/videos/bg_superadmission.webm" type="video/webm" />
        </video>

        {/* Minimal Natural Scrim to protect text while preserving the video's authentic look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none" />

        {/* Hero Content overlaid on Video */}
        <div className="relative z-10 p-7 sm:p-9 flex flex-col justify-between min-h-[420px] sm:min-h-[460px]">
          {/* Top: Announcement Pill */}
          <div className="w-fit">
            <AnnouncementPill
              variant="glass"
              text="Introducing Superadmission"
              href="https://docs.superadmission.com/superadmission/our-mission-and-vision"
              linkLabel="Read the post ↗"
            />
          </div>

          {/* Bottom: Heading, Subtitle & Founders CTA */}
          <div className="mt-auto pt-10">
            <h1 className="text-[30px] sm:text-[34px] md:text-[36px] font-medium tracking-tight text-white leading-[1.2] mb-3 max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              Building Digital Public Infrastructure for the world&apos;s largest admissions ecosystem.
            </h1>
            <p className="text-[14px] text-white/90 leading-relaxed mb-6 font-normal max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]">
              Available for students, institutions, and counselling authorities.
            </p>

            {/* CTA: Crisp White Talk to Founders Button + Email text */}
            <div className="flex items-center gap-3.5 flex-wrap">
              <a
                href="https://cal.com/superadmission"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-[#0a0a0a] text-xs font-semibold px-4 py-2.5 rounded-[3px] transition-all no-underline uppercase tracking-wider shadow-md hover:shadow-lg cursor-pointer"
              >
                TALK TO FOUNDERS ↗
              </a>
              <span className="text-xs text-white/90 font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]">
                or write us at{" "}
                <a
                  href="mailto:office@superadmission.com"
                  className="text-white underline underline-offset-2 hover:text-white/80 font-medium transition-colors"
                >
                  office@superadmission.com
                </a>
              </span>
            </div>
          </div>
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
