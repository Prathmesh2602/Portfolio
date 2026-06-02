"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  // Navigation scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300">
      
      {/* 1. Navigation Bar */}
      <Header onNavClick={scrollToSection} />

      {/* 2. Hero Section */}
      <Hero />

      {/* Ticker Section */}
      <Ticker />

      {/* 3. Work Section */}
      <WorkSection />
      
      <AboutSection />


      <ContactSection />
      
    </div>
  );
}
