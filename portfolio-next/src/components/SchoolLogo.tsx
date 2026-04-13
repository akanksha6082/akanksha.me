"use client";

import { useMemo, useState } from "react";
import { GraduationCap } from "lucide-react";

function initialsFromSchool(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter((w) => !/^(of|the|in|&|and)$/i.test(w));
  if (parts.length >= 2) {
    const a = parts[0]?.[0];
    const b = parts[1]?.[0];
    if (a && b) return (a + b).toUpperCase();
  }
  const one = parts[0] ?? name;
  return one.slice(0, 2).toUpperCase();
}

export function SchoolLogo({
  schoolName,
  logoPath,
  logoSize = "default",
}: {
  schoolName: string;
  logoPath?: string;
  logoSize?: "default" | "wide";
}) {
  const [failed, setFailed] = useState(false);
  const src = logoPath?.trim();
  const showPhoto = Boolean(src) && !failed;
  const initials = useMemo(() => initialsFromSchool(schoolName), [schoolName]);

  const sizeClass =
    logoSize === "wide"
      ? "h-28 w-32 rounded-2xl sm:h-32 sm:w-36 md:h-36 md:w-40"
      : "h-28 w-28 rounded-2xl sm:h-32 sm:w-32 md:h-36 md:w-36";

  const padClass = showPhoto ? "p-0" : "p-2.5 sm:p-3";

  return (
    <div
      className={`relative shrink-0 overflow-hidden border border-[var(--border)] bg-[var(--background)]/80 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] ${sizeClass} ${padClass}`}
      {...(showPhoto
        ? {}
        : { role: "img" as const, "aria-label": `${schoolName} logo` })}
    >
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src!}
          alt=""
          className="h-full w-full object-fill"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[var(--accent)]/12 via-[var(--card)] to-[var(--accent-2)]/10">
          <GraduationCap
            className="mb-1 h-9 w-9 text-[var(--muted)]/45 sm:h-10 sm:w-10 md:h-11 md:w-11"
            strokeWidth={1.25}
            aria-hidden
          />
          <span className="font-mono text-sm font-semibold tracking-tight text-[var(--accent)] sm:text-base md:text-lg">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
