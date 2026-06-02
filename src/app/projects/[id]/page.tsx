"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";
import ProjectsHeader from "@/components/ProjectsHeader";
import { PROJECTS } from "@/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const nextIndex = String(((currentIndex + 1) % PROJECTS.length) + 1).padStart(
    2,
    "0",
  );

  return (
    <>
      <div className="relative min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300 overflow-x-hidden">
        {/* Shutter Opening Page Transition */}
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col">
          {/* Top Shutter */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{
              duration: 0.9,
              ease: [0.85, 0, 0.15, 1],
              delay: 0.15,
            }}
            className="h-1/2 w-full border-b border-white/5"
            style={{ backgroundColor: "var(--background-card, #1c1c1e)" }}
          />
          {/* Bottom Shutter */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{
              duration: 0.9,
              ease: [0.85, 0, 0.15, 1],
              delay: 0.15,
            }}
            className="h-1/2 w-full border-t border-white/5"
            style={{ backgroundColor: "var(--background-card, #1c1c1e)" }}
          />
        </div>

        <ProjectsHeader
          backLink="/projects"
          backLabel="← Back to Projects"
          isDarkHero={true}
        />

        {/* 2. Hero Section — matches main Hero.tsx layout */}
        <section
          className={`relative min-h-screen w-full flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden ${project.bgColor} text-white`}
        >
          {/* Full-bleed background: project mockup image with strong overlay */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
            <Image
              src={project.imageSrc}
              alt=""
              fill
              className="object-cover opacity-25 scale-105 "
              priority
            />
            {/* Gradient overlay — heavy at bottom so text is legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-black/30" />
            {/* Left vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
          </div>

          {/* Outlined watermark index number */}
          <div className="absolute right-4 md:right-16 bottom-1/4 font-syne font-extrabold text-[14vw] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] select-none pointer-events-none z-0">
            {String(currentIndex + 1).padStart(2, "0")}
          </div>

          {/* Center: Large typographic headline — mirrors Hero.tsx h1 */}
          <div className="flex-1 flex flex-col justify-end my-auto py-8 z-10">
            {/* Project type label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-white/60 text-[10px] md:text-[11px] font-bold mb-[20px] tracking-[0.14em] uppercase font-syne select-none"
            >
              {project.projectType}
            </motion.div>

            {/* Word-by-word slide-up — exactly as Hero.tsx */}
            <h1 className="font-inter font-extrabold text-[9.5vw] sm:text-[8.5vw] md:text-[5vw] leading-[1] md:leading-[1.1] tracking-tighter select-none text-white max-w-[70%]">
              {project.heroTitle2.split(" ").map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="inline-block overflow-hidden mr-[0.2em]"
                >
                  <motion.span
                    initial={{ y: "120%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.35 + wIdx * 0.045,
                      duration: 0.85,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block origin-bottom"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Live link / status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="mt-8"
            >
              {project.linkUrl !== "#" ? (
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200"
                >
                  {project.linkText}
                  <span>↗</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 border border-white/20 text-white/45 text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                  {project.linkText}
                </span>
              )}
            </motion.div>
          </div>

          {/* Bottom meta strip — 4-column bordered card matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: "easeOut" }}
            className="mt-auto w-full z-10"
          >
            <div className="w-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 overflow-hidden">
              {[
                { label: "Company", value: project.meta.split(" / ")[0] },
                {
                  label: "Year",
                  value: project.meta.split(" / ")[1] || project.meta,
                },
                { label: "Type", value: project.projectType },
                { label: "Role", value: project.role },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`flex flex-col gap-2 px-6 py-5 ${
                    i < 3 ? "border-r border-white/10" : ""
                  } ${i >= 2 ? "border-t border-white/10 md:border-t-0" : ""}`}
                >
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white/45 select-none">
                    {item.label}
                  </span>
                  <span className="text-sm md:text-[15px] font-bold text-white leading-snug">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator (right side) */}
          <div className="absolute right-2 sm:right-6 top-1/6  -translate-y-1/2 flex flex-col items-center gap-4 select-none pointer-events-none z-10 text-white/50">
            <div className="relative w-[1.2px] h-16 bg-white/20 overflow-hidden rounded-full">
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full"
              />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 rotate-90 origin-center translate-y-1 select-none">
              Scroll
            </span>
          </div>
        </section>

        {/* 3. Section 01: Problem Statement */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-border-custom/50">
          <div className="lg:col-span-7 flex flex-col justify-start">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-6 font-syne block">
              01 — Problem Statement
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-8">
              {project.problemTitle}
            </h2>
            <div className="text-muted text-sm md:text-base leading-relaxed space-y-6">
              <p>{project.problemDesc}</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="rounded-[2rem] border border-border-custom bg-card-bg p-8 md:p-12 w-full flex flex-col justify-between min-h-[280px] shadow-sm select-none">
              <div className="text-[10px] font-bold tracking-widest uppercase text-muted">
                Key Metric latency
              </div>
              <div className="font-inter font-extrabold text-[10vw] sm:text-[7vw] lg:text-[5vw] text-foreground tracking-tighter leading-none my-4">
                {project.problemMetric.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted max-w-[280px] leading-relaxed">
                {project.problemMetric.label}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Section 02: Hypothesis / Solution */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-border-custom/50">
          <div className="lg:col-span-7 flex flex-col justify-start">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-6 font-syne block">
              02 — Solution Framework
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-8">
              {project.solutionTitle}
            </h2>
            <div className="text-muted text-sm md:text-base leading-relaxed space-y-6">
              <p>{project.solutionDesc}</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="border-l-4 border-foreground/60 pl-6 py-2 w-full">
              <div className="text-[10px] font-bold tracking-widest uppercase text-muted mb-3 font-syne">
                The Hypothesis
              </div>
              <p className="font-inter font-semibold text-lg md:text-xl text-foreground leading-relaxed italic">
                &ldquo;{project.solutionHighlight}&rdquo;
              </p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted/60 mt-4 select-none">
                Engineering Core Principle
              </p>
            </div>
          </div>
        </section>

        {/* 5. Section 03: Key Features & Architectural Highlights */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-border-custom/50">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-6 font-syne block">
            03 — Key Features
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-12">
            Architectural Highlights
          </h2>

          <div className="flex flex-col divide-y divide-border-custom/50">
            {project.keyFeatures.map((feature, fIdx) => (
              <div
                key={fIdx}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 first:pt-0 last:pb-0 items-start"
              >
                <div className="col-span-1 md:col-span-2 text-xs font-bold font-syne text-muted/60">
                  {String(fIdx + 1).padStart(2, "0")}
                </div>
                <div className="col-span-1 md:col-span-4">
                  <h4 className="font-syne font-bold text-lg md:text-xl text-foreground leading-tight">
                    {feature.title}
                  </h4>
                </div>
                <div className="col-span-1 md:col-span-6 text-sm md:text-base text-muted leading-relaxed">
                  {feature.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Section 04: Results & Impact */}
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-border-custom/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-6 font-syne block">
              04 — Results & Impact
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-12">
              Measured outcomes.
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-custom border border-border-custom overflow-hidden">
              {project.outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="bg-background px-8 py-10 flex flex-col justify-between min-h-[200px]"
                >
                  <div className="font-[family-name:--font-inter] font-extrabold text-[2.2rem] md:text-[2.8rem] leading-none tracking-tighter text-foreground">
                    {outcome.value}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted mt-4 leading-snug">
                    {outcome.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Section 05: Next Project Loop */}
      </div>
      <Link
        href={`/projects/${nextProject.id}`}
        className="group block w-full hover:bg-card-bg/25 transition-colors duration-300 border-b border-border-custom/50"
      >
        <div className="py-24 px-6 md:px-12 max-w-9xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-muted font-syne block mb-3">
              Next Case Study
            </span>
            <h2 className="font-syne font-extrabold text-[8vw] sm:text-[6vw] lg:text-[4vw] leading-[1.05] tracking-tighter text-foreground group-hover:opacity-85 transition-opacity uppercase select-none max-w-[85%]">
              {nextProject.meta.split(" with ")[0]}
            </h2>
            <div className="text-xs font-bold text-muted uppercase tracking-widest mt-4">
              {nextIndex} — {nextProject.meta}
            </div>
          </div>

          <div className="flex items-center justify-center md:self-end">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
              <span className="text-2xl md:text-3xl transition-transform duration-300 ">
                ↗
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* 7. Footer */}
      <footer className="py-12 px-6 md:px-12 max-w-9xl mx-auto w-full flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-muted/60 select-none font-syne">
        <div>&copy; {new Date().getFullYear()} Prathmesh Jadhav</div>
        <div>Senior Full Stack Engineer</div>
      </footer>
    </>
  );
}
