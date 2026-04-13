"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "./Section";
import { education } from "@/data/site";
import { GraduationCap, MapPin } from "lucide-react";
import { SchoolLogo } from "@/components/SchoolLogo";

const ease = [0.22, 1, 0.36, 1] as const;

export function Education() {
  const reduced = useReducedMotion();

  return (
    <Section id="education" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, index) => {
          const fromLeft = index % 2 === 0;
          const slideX = fromLeft ? -44 : 44;

          return (
            <motion.article
              key={e.school}
              className="flex flex-col gap-5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm sm:p-6"
              initial={reduced ? false : { opacity: 0, x: slideX }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.22, margin: "0px 0px -8% 0px" }}
              transition={{
                duration: 1.35,
                ease,
                delay: reduced ? 0 : index * 0.22,
              }}
            >
              <div className="flex min-w-0 flex-col items-stretch gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0 w-full flex-1">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[var(--border)]/90 bg-[var(--background)]/60 text-[var(--accent)] shadow-sm">
                      <GraduationCap className="h-4 w-4" aria-hidden />
                    </span>
                    <h3 className="section-card-title min-w-0">{e.school}</h3>
                  </div>
                  <p className="section-meta mt-2 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--accent-2)]" />
                    {e.location}
                  </p>
                  <p className="section-accent-line mt-3">{e.degree}</p>
                  <p className="section-meta mt-1">{e.years}</p>
                  {e.detail ? (
                    <p className="section-detail mt-2">{e.detail}</p>
                  ) : null}
                </div>
                <div className="flex shrink-0 justify-center sm:justify-end sm:self-start">
                  <SchoolLogo schoolName={e.school} logoPath={e.logoPath} logoSize={e.logoSize} />
                </div>
              </div>

              <div>
                <p className="section-label">Coursework</p>
                <ul className="mt-2 flex list-none flex-wrap gap-2 p-0">
                  {e.coursework.map((c) => (
                    <li
                      key={c}
                      className="section-tag rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 py-1"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
