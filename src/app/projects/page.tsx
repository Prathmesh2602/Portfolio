"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectsHeader from "@/components/ProjectsHeader";
import { PROJECTS } from "@/data";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300 pb-24">
      <ProjectsHeader backLink="/" backLabel="← Back to Home" />

      {/* 2. Main Content */}
      <main className="flex-1 w-full max-w-9xl mx-auto pt-36 px-6 md:px-12 flex flex-col justify-start">
        {/* Title Block */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-muted font-syne block mb-3"
          >
            Archive
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="font-syne font-extrabold text-[10vw] sm:text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter text-foreground uppercase select-none"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-muted text-sm md:text-base max-w-[550px] leading-relaxed"
          >
            A comprehensive list of systems, B2B platforms, SaaS architectures,
            and experimental tools built throughout my career.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-12 md:gap-16">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-[2rem] border border-border-custom overflow-hidden bg-card-bg flex flex-col-reverse md:flex-row min-h-[480px] hover:border-foreground/20 transition-colors duration-300"
            >
              {/* Left Content Column */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between gap-10">
                {/* Top: Index, Meta & Status Badge */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-[11px] font-bold tracking-wider text-muted/60 uppercase font-syne">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase border border-border-custom px-3 py-1 rounded-full text-foreground/80 bg-card-bg/25 select-none">
                      {project.linkText}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-muted uppercase tracking-widest mb-4">
                    {project.meta}
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="font-syne font-bold text-2xl md:text-[2.2rem] leading-[1.1] tracking-tight text-foreground max-w-[90%] hover:opacity-80 transition-opacity">
                      {project.title}
                    </h3>
                  </Link>
                </div>

                {/* Middle: Badges / Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] md:text-[10px] font-bold tracking-wider uppercase border border-border-custom px-3.5 py-1.5 rounded-full text-muted select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom: Metrics */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border-custom/50">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <div className="font-inter text-[#5b5a57] font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight mb-1">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted leading-relaxed max-w-[150px]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Graphic/Mockup Column */}
              <div
                className={`flex-1 relative min-h-[350px] md:min-h-full overflow-hidden ${project.bgColor}`}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="absolute inset-0 block w-full h-full cursor-pointer z-10"
                >
                  <motion.div
                    variants={{
                      hover: { scale: 1.05 },
                    }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>

                  {/* Floating Action Link Button */}
                  <div className="absolute bottom-6 right-6 z-20">
                    <motion.div
                      variants={{
                        hover: { scale: 1.1 },
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="h-12 w-12 rounded-full border border-white/20 bg-black/25 backdrop-blur-sm flex items-center justify-center text-white text-lg font-light transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                    >
                      <motion.span
                        variants={{
                          hover: { rotate: 45 },
                        }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="select-none"
                      >
                        ↗
                      </motion.span>
                    </motion.div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 border-t border-border-custom"
        >
          {/* Domain tags row */}
          <div className="flex flex-wrap gap-2 pt-10 pb-12">
            {[
              "SaaS Infrastructure",
              "Industrial HRMS",
              "IoT & Embedded",
              "Real-time Systems",
              "Health-Tech",
              "Civic Governance",
              "Developer Tooling",
              "AI Pipelines",
            ].map((domain) => (
              <span
                key={domain}
                className="text-[9px] md:text-[10px] font-bold tracking-wider uppercase border border-border-custom px-3.5 py-1.5 rounded-full text-muted select-none"
              >
                {domain}
              </span>
            ))}
          </div>

          {/* Big statement + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 border-t border-border-custom pt-12">
            <div>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-muted font-syne block mb-5">
                More in the pipeline
              </span>
              <h2 className="font-syne font-extrabold text-[9vw] sm:text-[7vw] md:text-[4.5vw] leading-[0.95] tracking-tighter text-foreground uppercase select-none max-w-[18ch]">
                There&apos;s more
                <br />
                being built.
              </h2>
            </div>

            <div className="flex flex-col gap-6 lg:items-end lg:text-right max-w-[340px] lg:max-w-[300px] shrink-0">
              <p className="text-muted text-sm md:text-base leading-relaxed">
                If you&apos;re building in any of these domains — or have a hard
                problem that needs the full stack — let&apos;s talk.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border border-foreground/25 px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors duration-200 self-start lg:self-end"
              >
                Get in touch
                <span className="text-[10px] leading-none">↗</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
