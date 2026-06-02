"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


import { PROJECTS } from "@/data";

export default function WorkSection() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section id="work" className="py-24 mt-16 px-6 md:px-12 w-full max-w-9xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <motion.span
           initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }} className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-muted font-syne block mb-3">
          Selected Projects
        </motion.span>
       <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="font-syne font-extrabold text-[12vw] sm:text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter text-foreground uppercase select-none"
          >
            Work
          </motion.h2>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-12 md:gap-16">
        {featuredProjects.map((project, idx) => (
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
              {/* Top: Index & Meta */}
              <div>
                <div className="text-[11px] font-bold tracking-wider text-muted/60 uppercase mb-4 font-syne">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="text-xs font-bold text-muted uppercase tracking-widest mb-4">
                  {project.meta} / {project.time}
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
                    <div className="font-inter text-[#5b5a57] font-extrabold text-2xl md:text-3xl lg:text-4xl  tracking-tight mb-1">
                      {metric.value}
                    </div>
                    <div className="text-[10px]  font-semibold uppercase tracking-wider text-muted leading-relaxed max-w-[150px]">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Graphic/Mockup Column */}
            <div className={`flex-1 relative min-h-[350px] md:min-h-full overflow-hidden ${project.bgColor}`}>
              <Link
                href={`/projects/${project.id}`}
                className="absolute inset-0 block w-full h-full cursor-pointer z-10"
              >
                <motion.div
                  variants={{
                    hover: { scale: 1.05 }
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
                    priority={idx === 0}
                  />
                </motion.div>

                {/* Floating Action Link Button */}
                <div className="absolute bottom-6 right-6 z-20">
                  <motion.div 
                    variants={{
                      hover: { scale: 1.1 }
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="h-12 w-12 rounded-full border border-white/20 bg-black/25 backdrop-blur-sm flex items-center justify-center text-white text-lg font-light transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                  >
                    <motion.span 
                      variants={{
                        hover: { rotate: 45 }
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

      {/* Divider */}
      <div className="w-full h-[1px] bg-border-custom/50 mt-16 mb-10" />

      {/* Looking For More Callout */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-4">
        <div>
          <h4 className=" font-bold text-foreground text-sm uppercase tracking-wider mb-2 select-none">
            Looking for more?
          </h4>
          <p className="text-muted text-xs  max-w-[640px] leading-relaxed">
            More work and side projects are available on my dedicated projects page, including experimental AI tools, enterprise integrations, and database optimizations.
          </p>
        </div>
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-custom bg-card-bg text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 select-none whitespace-nowrap"
          >
            View Projects <span className="text-xs">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
