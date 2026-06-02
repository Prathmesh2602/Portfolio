"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

interface HeaderProps {
  onNavClick: (id: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled((prevScrolled) => {
        if (currentScrollY > 60) return true;
        if (currentScrollY < 20) return false;
        return prevScrolled;
      });
    };

    if (window.scrollY > 60) setScrolled(true);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center">
      <motion.div
        // 1. Animate specific properties smoothly based on state
        initial={{
          width: "100%",
          maxWidth: "1920px",
          y: -80, // replaces mt-4
          paddingTop: "32px", // py-3 vs py-8
          paddingBottom: "32px",
          borderRadius: "0px",
        }}
        animate={{
          width: scrolled ? "90%" : "100%",
          maxWidth: scrolled ? "1024px" : "1920px",
          y: scrolled ? 16 : 0, // replaces mt-4
          paddingTop: scrolled ? "12px" : "32px", // py-3 vs py-8
          paddingBottom: scrolled ? "12px" : "32px",
          borderRadius: scrolled ? "9999px" : "0px",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        // 2. Keep constant base classes that don't change
        className={`
          flex items-center justify-between px-6 md:px-12 pointer-events-auto transition-colors duration-300
          ${
            scrolled
              ? "bg-background/80 backdrop-blur-md premium-shadow"
              : "bg-transparent"
          }
        `}
      >
        {/* Nav Logo */}
        <a
          href="#"
          className="font-syne font-extrabold text-[15px] md:text-base tracking-tight hover:opacity-80 transition-opacity text-foreground select-none"
        >
          Prathmesh.dev
        </a>

        {/* Links + Theme Toggle */}
        <nav className="flex items-center gap-6 md:gap-10">
          <ul className="hidden md:flex items-center gap-6 md:gap-8">
            {["work", "about", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => onNavClick(item)}
                  className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-muted hover:text-foreground cursor-pointer transition-colors duration-200"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </nav>
      </motion.div>
    </header>
  );
}
