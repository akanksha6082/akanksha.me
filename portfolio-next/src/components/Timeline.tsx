"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Vertical timeline shell — same pattern as Recent events. */
export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative space-y-10 border-l border-[var(--border)] pl-8">
      {children}
    </ol>
  );
}

export function TimelineItem({
  children,
  index = 0,
}: {
  children: ReactNode;
  /** Stagger order in the list (0 = first). */
  index?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <li className="relative">
      <motion.div
        className="relative"
        initial={reduced ? false : { opacity: 0, y: 28 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
        transition={{
          duration: 0.7,
          ease,
          delay: reduced ? 0 : index * 0.14,
        }}
      >
        <span
          className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-[var(--background)]"
          aria-hidden
        />
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
          {children}
        </div>
      </motion.div>
    </li>
  );
}
