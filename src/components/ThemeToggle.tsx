"use client";

import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  forceWhite?: boolean;
}

export default function ThemeToggle({ forceWhite = false }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div 
        className={`
          w-20 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold uppercase tracking-widest opacity-50 select-none
          ${forceWhite ? "border-white/25 text-white/50 bg-transparent" : "border-border-custom text-muted bg-transparent"}
        `}
      >
        Theme
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border transition-all duration-200 text-[10px] font-bold uppercase tracking-widest select-none cursor-pointer
        ${
          forceWhite
            ? "border-white/20 hover:bg-white/10 text-white"
            : "border-border-custom hover:bg-card-bg text-foreground"
        }
      `}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className="flex items-center justify-center">
        {theme === "light" ? (
          // Moon Icon
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.38 5.38 0 0 1-4.4 2.26 5.4 5.4 0 0 1-4.14-9.5A9 9 0 0 0 12 3z" />
          </svg>
        ) : (
          // Sun Icon
          <svg className="w-3 h-3 stroke-current stroke-2.5 fill-none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
      </span>
      <span>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}
