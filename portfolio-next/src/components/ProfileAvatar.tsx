"use client";

import { useMemo, useState } from "react";
import { User } from "lucide-react";
import { profile, profileImagePath } from "@/data/site";

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function ProfileAvatar() {
  const [failed, setFailed] = useState(false);
  const src = profileImagePath?.trim();
  const showPhoto = Boolean(src) && !failed;

  const initials = useMemo(() => initialsFromName(profile.name), []);

  return (
    <div className="relative w-full shrink-0 md:w-56">
      <div
        className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_0_0_1px_rgba(34,211,238,0.12)] md:aspect-auto md:h-56 md:w-56"
        {...(showPhoto
          ? {}
          : { role: "img" as const, "aria-label": "Profile photo placeholder" })}
      >
        {showPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src!}
            alt={`${profile.name} — profile photo`}
            className="absolute inset-0 h-full w-full object-cover object-center"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[var(--accent)]/15 via-[var(--card)] to-[var(--accent-2)]/10">
            <User
              className="mb-1 h-11 w-11 text-[var(--muted)] opacity-40 sm:h-14 sm:w-14"
              strokeWidth={1.25}
            />
            <span className="font-mono text-xl font-semibold tracking-tight text-[var(--accent)] sm:text-2xl">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
