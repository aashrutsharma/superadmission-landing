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
                {item.answer.includes("office@superadmission.com") ? (
                  <>
                    {item.answer.split("office@superadmission.com")[0]}
                    <a
                      href="mailto:office@superadmission.com"
                      className="text-[#2563eb] hover:underline font-medium"
                    >
                      office@superadmission.com
                    </a>
                    {item.answer.split("office@superadmission.com")[1]}
                  </>
                ) : (
                  item.answer
                )}
              </p>
              {item.link && (
                <div className="mt-2.5">
                  <Link
                    href={item.link.href}
                    className="text-xs font-medium text-[#2563eb] hover:underline transition-colors inline-flex items-center gap-1 no-underline"
                  >
                    <span>{item.link.text}</span>
                    <span>↗</span>
                  </Link>
                </div>
              )}
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
                className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-[#0a0a0a] text-xs font-semibold px-4 py-2 rounded-[4px] transition-all no-underline shadow-sm hover:shadow cursor-pointer"
              >
                Talk to Founders ↗
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
            Superadmission is a nationwide project to bring 40+ counselling authorities along with 58,000+ degree granting institutions/colleges and universities on a single centralised platform.
          </p>
          <p className="text-gray-950 font-medium text-[16px] mt-1">
            We are reimagining how India gets into college.
          </p>
          <p>
            Executing our vision through an innovative framework/architecture that will make the admission ecosystem effortless and efficient for both students and authorities, although this requires ample dismantling and reconfiguration of current processes; we firmly believe the path to 50% Gross Enrollment Ratio (GER) and equitable opportunity requires a world class technical backing.
          </p>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 2: WHAT WE DO */}
      <section id="what-we-do" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl font-medium tracking-tight text-gray-950 mb-2">
          What real problem is this even solving ?
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-6 font-normal">
          India’s higher education ecosystem serves over 4.5 crore students across a disorganised network of authorities, institutions, and portals. Rather than acting as a catalyst for opportunity, this complexity often creates unnecessary barriers.
        </p>
        <div className="flex flex-col gap-1.5">
          <FeatureCard
            type="rules"
            title="Confusing Portals and Hard-to-Follow Rules Hold Students Back"
            description="Because structured guidance is hard to find, students who struggle with admission rules and portals often miss out on seats they deserve."
          />
          <FeatureCard
            type="workforce"
            title="Systems Depend on Human workforce"
            description="Because existing platforms require scanned document upload, institutions rely on slow, manual verification and round-the-clock human intervention."
          />
          <FeatureCard
            type="notifications"
            title="Students Manually Track Each Website for New Notifications"
            description="Counseling alerts and round schedules are buried on cluttered websites rather than sent directly, forcing applicants to manually check multiple portals daily or risk missing an opportunity."
          />
          <FeatureCard
            type="traffic"
            title="System Slowdowns During Peak Traffic"
            description="Existing platforms at times slow down or become unresponsive when thousands of students access them at once, leading to temporary outages and lost unsaved changes."
          />
          <FeatureCard
            type="forms"
            title="Repetitive Forms Across Scattered Portals"
            description="The admission journey is split across multiple portals, forcing fresh high school graduates into exhausting, repetitive data entry and document uploads."
          />
        </div>

        <p className="text-[14px] text-gray-700 mt-6 leading-relaxed font-normal">
          Despite these deep-rooted challenges, India is ambitiously targeting a 50% GER under NEP 2020, a milestone that will nearly double the number of higher education applicants. If today’s fragmented systems already struggle under current demand, how will they withstand twice the load? That is why building a unified, accessible, and efficient admission ecosystem is not just possible but essential.
        </p>

        <div className="mt-4">
          <Link href="/product" className="text-xs font-medium text-gray-900 hover:text-[#2563eb] transition-colors no-underline">
            Read more about the specifics ↗
          </Link>
        </div>
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION: WHAT ARE WE BUILDING? */}
      <section id="what-are-we-building" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl font-medium tracking-tight text-gray-950 mb-2">
          What are we building?
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-4 font-normal">
          The complexity of India’s admissions extends beyond a simple software problem, which is why we are building a single, unified ecosystem that brings different counseling bodies together under one roof, putting students at the center of the journey. Our framework is being designed to offer a single sign-on linked with Aadhaar or APAAR ID that works across participating counseling bodies and institutions, using India Stack and existing DPIs to fetch pre-verified records automatically, alongside a free AI-enabled personalized guidance agent and one shared dashboard to track progress across entrance exams, counseling rounds, and universities.
        </p>

        <div className="mb-6">
          <Link
            href="/product"
            className="text-xs font-medium text-[#2563eb] hover:underline transition-colors no-underline inline-flex items-center gap-1"
          >
            see our Product Page →
          </Link>
        </div>

        {/* Figure 1. Updated Process Flow Diagram */}
        <ProcessFlowDiagram />
      </section>

      <div className="border-t border-gray-100 my-10" />

      {/* SECTION 3: IN PRODUCTION */}
      <section id="in-production" className="mb-14 scroll-mt-20">
        <p className="text-[12px] font-normal text-gray-500 mb-2">
          In production
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-950 leading-tight mb-7">
          Our aim is a world-class admission infrastructure for India.
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

      {/* SECTION 6: JOIN US */}
      <section id="careers" className="mb-14 scroll-mt-20">
        <p className="text-[11px] font-mono text-[#9e790d] font-medium uppercase tracking-wider mb-2">
          Join us
        </p>
        <h2 className="text-2xl font-medium tracking-tight text-gray-950 mb-3">
          A system this large cannot be reimagined in isolation.
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-4 max-w-xl font-normal">
          We&apos;re building towards a more efficient admissions ecosystem. We recognise that this undertaking extends beyond technology. It will require institutional participation, administrative alignment, policy considerations, regulatory cooperation and sustained government support. If you&apos;re an institution, counselling authority, researcher, technologist or someone interested in the future of higher education admissions, we&apos;d like to hear from you.
        </p>
        <a
          href="mailto:office@superadmission.com"
          className="text-xs font-medium text-[#2563eb] hover:underline transition-colors inline-flex items-center gap-1 no-underline"
        >
          Connect with us ↗
        </a>
      </section>

      <div className="border-t border-gray-100" />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
