"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 py-2 transition-colors relative z-10";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const onThemeChange = (theme: "dark" | "light") => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button className={TOGGLE_CLASSES} onClick={() => onThemeChange("dark")}>
        <Sun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <button
        className={TOGGLE_CLASSES}
        onClick={() => {
          onThemeChange("light");
        }}
      >
        <Moon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>

      <div
        className={`absolute inset-0 z-0 flex ${
          theme === "dark" ? "justify-start" : "justify-end"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient_orange"
        />
      </div>
    </div>
  );
};
