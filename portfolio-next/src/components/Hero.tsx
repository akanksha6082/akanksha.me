"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { rotatingCaptions, profile } from "@/data/site";
import { IconGithub, IconInstagram, IconLinkedin } from "@/components/BrandIcons";
import { ProfileAvatar } from "@/components/ProfileAvatar";

export function Hero() {
  // Deterministic on server + first client paint — avoids hydration mismatch from Math.random().
  const [caption, setCaption] = useState(() => rotatingCaptions[0] ?? "");

  useEffect(() => {
    const first = window.setTimeout(() => {
      setCaption(pickRandom(rotatingCaptions));
    }, 0);
    const id = window.setInterval(() => {
      setCaption(pickRandom(rotatingCaptions));
    }, 3600);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--border)] px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:flex-row md:items-start md:gap-12">
          <motion.div
            className="w-full shrink-0 md:w-auto"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProfileAvatar />
          </motion.div>
          <div className="min-w-0 flex-1 text-center md:text-left">
            <motion.p
              className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.4 }}
            >
              Portfolio
            </motion.p>
            <motion.h1
              className="mt-3 break-words font-sans text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {profile.name}
            </motion.h1>
            <motion.p
              className="mt-2 max-w-2xl text-base text-[var(--muted)] sm:text-lg"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {profile.title}
            </motion.p>
            <motion.div
              key={caption}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-6 flex min-h-[3rem] justify-center md:min-h-0 md:justify-start"
            >
              <div className="max-w-2xl border-t-2 border-[var(--accent)]/70 pt-3 text-center md:border-l-2 md:border-t-0 md:pl-4 md:pt-0 md:text-left">
                <p className="text-pretty bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text font-mono text-[0.8125rem] font-medium leading-relaxed tracking-[0.02em] text-transparent sm:text-sm">
                  {caption}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <SocialIcon href={profile.social.github} label="GitHub">
                <IconGithub className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={profile.social.linkedin} label="LinkedIn">
                <IconLinkedin className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={profile.social.instagram} label="Instagram">
                <IconInstagram className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={`mailto:${profile.email}`} label="Email">
                <Mail className="h-5 w-5" />
              </SocialIcon>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 font-mono text-sm text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FileText className="h-4 w-4" />
                Résumé
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function pickRandom(messages: string[]): string {
  return messages[Math.floor(Math.random() * messages.length)] ?? "";
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {children}
    </a>
  );
}
