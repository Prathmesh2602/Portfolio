"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    company: "Gadgetopia Technologies (Contract)",
    role: "Senior Full Stack Engineer",
    period: "2026 – Now",
  },
  {
    company: "Freedygo",
    role: "Full Stack Developer",
    period: "2023 – 2026",
  },
  {
    company: "Goanny Technologies",
    role: "Full Stack Developer",
    period: "2022 – 2023",
  },
];

const education = [
  {
    institution: "Savitribai Phule Pune University",
    degree: "B.Sc. Computer Science",
    period: "2019 – 2022",
  },
];

const skills = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Express.js",
  "React Native", "PostgreSQL", "MongoDB", "Redis", "AWS",
  "Docker", "NGINX", "GitHub Actions", "REST APIs", "WebSockets",
  "Tailwind CSS", "Redux Toolkit", "System Design", "SaaS Architecture",
  "Gemini AI", "OpenAI", "Microservices",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay: i * 0.08 },
  }),
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 border-t border-border-custom"
    >
      <div className=" px-6 md:px-12 w-full max-w-9xl mx-auto">
        <div className="mb-16">
          <motion.span
           initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-muted font-syne block mb-3"
          >
            My Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="font-syne font-extrabold text-[12vw] sm:text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter text-foreground uppercase select-none"
          >
            About
          </motion.h2>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="w-full h-px bg-border-custom mt-6 mb-12"
        />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24">
          {/* Left: Bio */}
          <div className="flex flex-col gap-8">
            <div className="space-y-5 text-[17px] leading-[1.75] text-foreground">
              {[
                <>
                  <span className="font-semibold">Senior full-stack engineer, 4+ years.</span>{" "}
                  I build platforms that run real businesses — HRMS, B2B marketplaces, ERP systems.
                  Everything I&apos;ve shipped is commercially live with paying customers.
                </>,
                <>
                  <span className="font-semibold">I design before I code.</span>{" "}
                  Data models, API contracts, and failure modes get worked out first.
                  Once the system is understood, the implementation follows cleanly.
                </>,
                <>
                  <span className="font-semibold">I work best with full ownership.</span>{" "}
                  Currently building two simultaneous platforms at Gadgetopia — moving fast,
                  without cutting corners on reliability or architecture.
                </>,
                <>
                  <span className="font-semibold">The work I&apos;m most proud of:</span>{" "}
                  a payroll engine automating statutory compliance for 60,000+ industrial field workers,
                  and an AI catalog pipeline that turned 3-day manual vendor onboarding into seconds.
                </>,
              ].map((content, i) => (
                <motion.p
                  key={i}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {content}
                </motion.p>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <a
                href="/Prathmesh_Jadhav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/25 px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                View Resume
                <span className="text-[10px] leading-none">↗</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Experience + Education */}
          <div className="flex flex-col gap-12">
            {/* Experience */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-5">
                Experience
              </p>
              <div>
                {experience.map((item, i) => (
                  <div
                    key={i}
                    className="border-t border-border-custom py-4 flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="font-semibold text-[15px] text-foreground leading-snug">
                        {item.company}
                      </p>
                      <p className="text-[13px] text-muted mt-0.5">
                        {item.role}
                      </p>
                    </div>
                    <p className="text-[13px] text-muted shrink-0 pt-0.5">
                      {item.period}
                    </p>
                  </div>
                ))}
                <div className="border-t border-border-custom" />
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-5">
                Education
              </p>
              <div>
                {education.map((item, i) => (
                  <div
                    key={i}
                    className="border-t border-border-custom py-4 flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="font-semibold text-[15px] text-foreground leading-snug">
                        {item.institution}
                      </p>
                      <p className="text-[13px] text-muted mt-0.5">
                        {item.degree}
                      </p>
                    </div>
                    <p className="text-[13px] text-muted shrink-0 pt-0.5">
                      {item.period}
                    </p>
                  </div>
                ))}
                <div className="border-t border-border-custom" />
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-5">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border-custom px-3 py-1.5 text-[12px] text-foreground rounded-full tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
