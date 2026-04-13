"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/site";
import { FileText, Mail } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  const reduced = useReducedMotion();

  return (
    <motion.footer
      className="border-t border-[var(--border)] px-4 py-10 sm:px-6"
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.62, ease }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="section-tag">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="section-tag inline-flex items-center gap-2 hover:text-[var(--accent)]"
          >
            <IconGithub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="section-tag inline-flex items-center gap-2 hover:text-[var(--accent)]"
          >
            <IconLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="section-tag inline-flex items-center gap-2 hover:text-[var(--accent)]"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="section-tag inline-flex items-center gap-2 hover:text-[var(--accent)]"
          >
            <FileText className="h-4 w-4" />
            Résumé
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
