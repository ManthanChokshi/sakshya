"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("sakshya_theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark / light mode"
      className="w-8 h-8 rounded-lg bg-obsidian-800 border border-slate-700 flex items-center justify-center hover:border-forensic-cyan transition"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-slate-300" />
      ) : (
        <Moon className="w-4 h-4 text-slate-300" />
      )}
    </button>
  );
}
