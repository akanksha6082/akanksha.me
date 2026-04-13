"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#news", label: "News" },
  { href: "#events", label: "Events" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduced ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b border-[var(--border)]/60 bg-[var(--background)]/88 backdrop-blur-md transition-colors ${
        scrolled ? "shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)]" : ""
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-[var(--accent)]"
        >
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-[var(--muted)]">.dev</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 font-mono text-xs text-[var(--muted)] transition hover:bg-[var(--card)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex rounded-md border border-[var(--border)] p-2 text-[var(--foreground)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden"
        >
          <nav className="mx-auto flex max-w-5xl flex-col px-4 py-3" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 font-mono text-sm text-[var(--foreground)] hover:bg-[var(--card)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}
