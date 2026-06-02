"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:prathmeshjadhav1014@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prathmesh-jadhav-68a65b1b8/" },
  { label: "GitHub", href: "https://github.com/Prathmesh1014" },
  { label: "Resume", href: "https://drive.google.com/file/d/1-dhaylgTcf-Ydq-nFsgdA4CZwsl7zqrP/view?usp=sharing" },
];

// Accent color matching the reference (orange-red)
const ACCENT = "#ff4621";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    [],
  );

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    // Try mailto first — if no mail client, fallback to clipboard copy

    e.preventDefault();
    navigator.clipboard.writeText("prathmeshjadhav1014@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="border-t border-border-custom min-h-[80vh] flex flex-col"
    >
      <div className="px-6 md:px-12 w-full max-w-9xl mx-auto flex flex-col flex-1 py-16 md:py-20">
        {/* Label */}

        {/* Giant headline */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-[10px] md:text-[11px] font-bold tracking-[0.22em] uppercase text-muted font-syne block mb-8 md:mb-12"
          >
            Get in touch
          </motion.span>
          {/* Wrapper captures mouse for custom cursor */}
          <a
            href="mailto:prathmeshjadhav1014@gmail.com"
            aria-label="Send email"
            className="group block relative cursor-none"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
          >
            <h2 className="font-syne font-extrabold text-[10.4vw] sm:text-[11vw] md:text-[7vw] leading-[1] tracking-tighter select-none">
              {/* Line 1 — stays foreground color */}
              <span className="block overflow-hidden text-foreground">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{
                    delay: 0.2,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  Say hi!
                </motion.span>
              </span>

              {/* Line 2 — turns accent on hover */}
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{
                    delay: 0.32,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-3 md:gap-5 transition-colors duration-300"
                  style={{ color: hovered ? ACCENT : "var(--foreground)" }}
                >
                  <span>Let&apos;s talk</span>
                  {/* Arrow — slides on hover */}
                  <span className="inline-block leading-none transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-[0.75em] w-[0.75em]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </motion.span>
              </span>
            </h2>

            {/* Custom floating cursor pill */}
            <motion.div
              className="absolute pointer-events-none z-50 flex items-center gap-1.5 rounded-full px-4 py-2 font-bold text-[11px] tracking-wider uppercase text-white select-none font-syne"
              style={{
                backgroundColor: ACCENT,
                top: cursorPos.y,
                left: cursorPos.x,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                opacity: hovered ? 1 : 0,
                scale: hovered ? 1 : 0.6,
              }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white inline-block shrink-0" />
              {copied ? "Copied!" : "Say hi!"}
            </motion.div>
          </a>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          {/* Left: email + location */}
          <div className="flex flex-col gap-1">
            <a
              href="mailto:prathmeshjadhav1014@gmail.com"
              className="text-[13px] md:text-sm text-foreground hover:text-muted transition-colors duration-200 font-medium leading-snug"
            >
              prathmeshjadhav1014@gmail.com
            </a>
            <span className="text-[13px] md:text-sm text-muted font-medium leading-snug">
              Pune, India
            </span>
          </div>

          {/* Center: copyright (desktop) */}
          <div className="hidden md:block text-center">
            <span className="text-[11px] font-bold tracking-widest uppercase text-muted/60 select-none font-syne">
              © {new Date().getFullYear()} Prathmesh Jadhav
            </span>
          </div>

          {/* Right: social nav links */}
          <nav className="flex items-center gap-5 md:gap-7">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200 select-none"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Mobile copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="md:hidden mt-8 text-center"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-muted/60 select-none font-syne">
            © {new Date().getFullYear()} Prathmesh Jadhav · Senior Full Stack
            Developer
          </span>
        </motion.div>
      </div>
    </section>
  );
}
