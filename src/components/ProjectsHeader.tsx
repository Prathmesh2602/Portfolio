"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

interface ProjectsHeaderProps {
  backLink: string;
  backLabel: string;
  isDarkHero?: boolean;
}

export default function ProjectsHeader({ backLink, backLabel, isDarkHero = false }: ProjectsHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [resolvedBack, setResolvedBack] = useState({ link: backLink, label: backLabel });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled((prev) => {
        if (currentScrollY > 60) return true;
        if (currentScrollY < 20) return false;
        return prev;
      });
    };

    if (window.scrollY > 60) setScrolled(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const referrer = document.referrer;
    const origin = window.location.origin;
    if (referrer === `${origin}/` || referrer === origin) {
      setResolvedBack({ link: "/", label: "← Back to Home" });
    } else if (referrer.includes("/projects")) {
      setResolvedBack({ link: "/projects", label: "← Back to Projects" });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center">
      <motion.div
        initial={{
          width: "100%",
          maxWidth: "1920px",
          y: -80,
          paddingTop: "32px",
          paddingBottom: "32px",
          borderRadius: "0px",
        }}
        animate={{
          width: scrolled ? "90%" : "100%",
          maxWidth: scrolled ? "1024px" : "1920px",
          y: scrolled ? 16 : 0,
          paddingTop: scrolled ? "12px" : "32px",
          paddingBottom: scrolled ? "12px" : "32px",
          borderRadius: scrolled ? "9999px" : "0px",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        className={`
          flex items-center justify-between px-6 md:px-12 pointer-events-auto transition-all duration-300
          ${
            scrolled
              ? "bg-background/80 backdrop-blur-md premium-shadow border border-border-custom"
              : "bg-transparent border-transparent"
          }
        `}
      >
        {/* Nav Logo */}
        <Link
          href="/"
          className={`
            font-syne font-extrabold text-[15px] md:text-base tracking-tight hover:opacity-80 transition-opacity uppercase select-none
            ${!scrolled && isDarkHero ? "text-white" : "text-foreground"}
          `}
        >
          Prathmesh.dev
        </Link>

        {/* Back Link & Theme Toggle */}
        <nav className="flex items-center gap-6">
          <Link
            href={resolvedBack.link}
            className={`
              hidden md:block text-[10px] md:text-[11px] font-bold tracking-widest uppercase hover:opacity-80 transition-all duration-200
              ${
                !scrolled && isDarkHero
                  ? "text-white/80 hover:text-white"
                  : "text-muted hover:text-foreground"
              }
            `}
          >
            {resolvedBack.label}
          </Link>
          <ThemeToggle forceWhite={!scrolled && isDarkHero} />
        </nav>
      </motion.div>
    </header>
  );
}
