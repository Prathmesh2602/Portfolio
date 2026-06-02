"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[94.5vh] sm:min-h-screen w-full max-w-9xl mx-auto px-6 md:px-12 flex flex-col justify-between pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
      {/* Top: Role Subtitle */}

      {/* Center: Typographic Headline */}
      <div className="flex-1 flex flex-col justify-end my-auto  py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-muted text-[10px] md:text-[11px] font-bold mb-[20px] tracking-[0.14em] tracking-widest uppercase font-syne select-none"
        >
          Senior Full Stack Engineer
        </motion.div>
        <h1 className="font-syne font-extrabold text-[10.4vw] sm:text-[11vw] md:text-[9.5vw] leading-[1] md:leading-[0.8]  tracking-tighter  select-none">
          {/* Slide up animation for name lines */}
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block text-foreground origin-bottom"
            >
              Prathmesh
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1 mt-1 md:mt-2">
            <motion.span
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block text-foreground origin-bottom"
            >
              Jadhav
            </motion.span>
          </span>
        </h1>
      </div>

      {/* Bottom: Bio & Badges */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-auto w-full z-10">
        {/* Bio text (Bottom Left) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-muted  max-w-[320px] md:max-w-[400px] leading-relaxed"
        >
          Pune raised, India based. Four+ years of experience building scalable
          Ecommerce, SaaS, HRMS, and B2B platforms.
        </motion.p>

        {/* Badges (Bottom Right) & Mobile Scroll Indicator */}
        <div className="flex items-end justify-between gap-6 w-full md:w-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.6,
                },
              },
            }}
            className="flex flex-col gap-2 items-start md:items-end max-w-[450px]"
          >
            {/* Availability Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-custom bg-card-bg text-xs font-semibold select-none"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold tracking-wider uppercase text-foreground">
                Available for work
              </span>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-border-custom bg-card-bg text-[11px] font-bold tracking-wider uppercase text-muted select-none"
            >
              Pune, India
            </motion.div>

            {/* Specialties Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-border-custom bg-card-bg text-[11px] font-bold tracking-wider uppercase text-muted select-none"
            >
              SaaS & Distributed Systems
            </motion.div>
          </motion.div>

          {/* Mobile/Tablet Scroll Indicator */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="lg:hidden flex flex-col items-center gap-4 select-none pointer-events-none pb-2 mr-2 mb-2"
          >
            <div className="relative w-[1.2px] h-10 bg-border-custom overflow-hidden rounded-full">
              <motion.div
                animate={{
                  y: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="absolute top-0 left-0 w-full h-1/2 bg-[#ff3e00] rounded-full"
              />
            </div>
            <span className="text-[9px] font-bold tracking-widest uppercase text-muted rotate-90 origin-center translate-y-1 select-none">
              Scroll
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (Right side relative to container) */}
      <div className="absolute right-5 top-1/6 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 select-none mr-2 pointer-events-none">
        <div className="relative w-[1.2px] h-16 bg-border-custom overflow-hidden rounded-full">
          <motion.div
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#ff3e00] rounded-full"
          />
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-muted rotate-90 origin-center translate-y-1 select-none">
          Scroll
        </span>
      </div>
    </section>
  );
}
