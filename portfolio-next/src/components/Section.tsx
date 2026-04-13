"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrambleRevealHeading } from "@/components/ScrambleRevealHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();

  const block = reduced
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.68, ease },
        },
      };

  return (
    <motion.section
      id={id}
      className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--background)]/35 px-4 py-16 backdrop-blur-[1px] sm:px-6 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : 0.16,
            delayChildren: reduced ? 0 : 0.04,
          },
        },
      }}
    >
      <div className="mx-auto min-w-0 max-w-5xl">
        <motion.div variants={block}>
          <ScrambleRevealHeading
            text={title}
            as="h2"
            className="section-heading"
          />
        </motion.div>
        <motion.div className="mt-8" variants={block}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
