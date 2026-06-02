"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    label: "Frontend",
    color: "bg-[#1a3a2b]",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    label: "Backend",
    color: "bg-[#2b1f3d]",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "Redis",
      "BullMQ",
    ],
  },
  {
    label: "Databases",
    color: "bg-[#122238]",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Prisma ORM",
      "Mongoose",
      "Redis Cache",
    ],
  },
  {
    label: "AI & Cloud",
    color: "bg-[#3c1b30]",
    skills: [
      "Gemini AI",
      "OpenAI APIs",
      "AWS S3",
      "AWS EC2",
      "Firebase",
      "Vercel",
    ],
  },
  {
    label: "DevOps & Tools",
    color: "bg-[#0e2d2e]",
    skills: [
      "Docker",
      "Git & GitHub",
      "CI/CD Pipelines",
      "Nginx",
      "PM2",
      "Postman",
    ],
  },
  {
    label: "Architecture",
    color: "bg-[#6c2813]",
    skills: [
      "Microservices",
      "Event-Driven Design",
      "Multi-Tenancy",
      "API Gateway",
      "Data Modeling",
      "System Design",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: i * 0.05,
    },
  }),
};

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 border-t border-border-custom"
    >
      <div className="px-6 md:px-12 w-full max-w-9xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-muted font-syne block mb-3"
          >
            Technical Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
            className="font-syne font-extrabold text-[12vw] sm:text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter text-foreground uppercase select-none"
          >
            Skills
          </motion.h2>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          className="w-full h-px bg-border-custom mt-6 mb-14"
        />

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              variants={itemVariants}
              className="group rounded-[1.5rem] border border-border-custom bg-card-bg overflow-hidden flex flex-col hover:border-foreground/20 transition-colors duration-300"
            >
              {/* Category Color Bar */}
              <div className={`h-1.5 w-full ${cat.color} opacity-80`} />

              <div className="p-7 flex flex-col gap-5 flex-1">
                {/* Category Label */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted font-syne">
                    {cat.label}
                  </span>
                  <span className="text-[10px] font-bold text-muted/50 font-syne">
                    {String(catIdx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span
                      key={skill}
                      custom={sIdx}
                      variants={tagVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block text-[10px] md:text-[11px] font-bold tracking-wide uppercase border border-border-custom px-3.5 py-1.5 rounded-full text-foreground/80 bg-background/50 select-none cursor-default hover:border-foreground/40 hover:text-foreground transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          className="mt-14 pt-10 border-t border-border-custom/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p className="text-muted text-sm max-w-[560px] leading-relaxed">
            Constantly picking up new tools. Currently exploring{" "}
            <span className="text-foreground font-semibold">LangChain</span>,{" "}
            <span className="text-foreground font-semibold">tRPC</span>, and{" "}
            <span className="text-foreground font-semibold">
              Kubernetes deployments
            </span>{" "}
            for distributed production workloads.
          </p>
          <a
            href="https://github.com/Prathmesh2602"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-custom bg-card-bg text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 select-none whitespace-nowrap"
          >
            View GitHub <span className="text-xs">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
