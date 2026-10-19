"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

type Theme = "light" | "dark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  // null until mounted, so server and client render the same markup.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function toggleTheme() {
    const next: Theme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  const themeLabel = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme ? themeLabel : "Toggle theme"}
      className="grid h-10 w-10 place-items-center border border-line text-fg transition-colors hover:bg-sunken"
    >
      {theme === "dark" ? <Sun size={18} aria-hidden /> : theme === "light" ? <Moon size={18} aria-hidden /> : null}
    </button>
  );

  return (
    <MotionConfig reducedMotion="user">
      <header className="surface-transition sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="font-serif text-xl font-medium tracking-tight">
            Kalidhasan A
          </a>

          <ul className="hidden items-center gap-7 text-sm md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "true" : undefined}
                  className={`border-b py-1 transition-colors ${
                    active === l.id ? "border-accent text-fg" : "border-transparent text-muted hover:text-fg"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden items-center gap-2 border border-line px-3 py-2 text-sm transition-colors hover:bg-sunken md:inline-flex"
            >
              <Download size={15} aria-hidden /> Resume
            </a>
            {themeButton}
            <button
              type="button"
              className="grid h-10 w-10 place-items-center border border-line md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-bg px-5 py-6 md:hidden"
            >
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.id} className="border-b border-line">
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className={`block py-4 font-serif text-2xl ${active === l.id ? "text-accent" : ""}`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-6">
                  <a
                    href={profile.resumeUrl}
                    download
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 bg-fg px-5 py-3 text-sm font-medium text-bg"
                  >
                    <Download size={16} aria-hidden /> Download resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  );
}
