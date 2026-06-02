"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "SaaS Architecture",
  "Next.js & React",
  "AWS Cloud Integration",
  "Multi-tenant Backends",
  "REST & WebSockets",
  "System Design",
  "Operations ERP",
  "Database Optimization",
  "AI Pipeline Integration",
  "CI/CD & DevOps",
  "Distributed Systems",
  "PostgreSQL & Redis",
  "MERN Stack Development",
  "Full-Stack Security",
];

export default function Ticker() {
  // Concat list to ensure seamless endless looping
  const displayItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="marquee-wrap ticker-entrance select-none w-full border-y border-border-custom bg-transparent py-4 relative overflow-hidden">
      <div className="marquee-track flex items-center">
        {displayItems.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center gap-16 px-8 whitespace-nowrap"
          >
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase text-muted font-syne">
              {item}
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold text-foreground/20 font-sans">
              +
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
