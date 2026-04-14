"use client";

import { useMemo, useRef, useState, type ReactNode } from "react";
import { Section } from "./Section";
import { allProjectTags, projects, type Project } from "@/data/site";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!tag) return projects;
    return projects.filter((p) => p.tags.includes(tag));
  }, [tag]);

  return (
    <Section id="projects" title="Projects">
      <p className="section-lead max-w-2xl">
        Filter by tag or scroll the grid, the UI updates automatically.
      </p>

      <div className="mt-6 flex min-w-0 flex-wrap gap-2">
        <FilterChip active={tag === null} onClick={() => setTag(null)}>
          All
        </FilterChip>
        {allProjectTags.map((t) => (
          <FilterChip key={t} active={tag === t} onClick={() => setTag(t)}>
            {t}
          </FilterChip>
        ))}
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((p) => (
          <li key={p.id}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="section-meta mt-8">No projects for this tag.</p>
      ) : null}
    </Section>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 font-mono text-xs transition ${
        active
          ? "border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)]"
          : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]/50 hover:text-[var(--foreground)]"
      }`}
    >
      {children}
    </button>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [imgOk, setImgOk] = useState(!!project.image);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playbackRate = project.videoPreview?.playbackRate ?? 1;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition hover:border-[var(--accent)]/40">
      <div className="relative aspect-[16/10] w-full bg-[var(--bg)]">
        {project.videoPreview ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={encodeURI(project.videoPreview.src)}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedMetadata={() => {
              if (videoRef.current) videoRef.current.playbackRate = playbackRate;
            }}
          />
        ) : project.pdfPreview ? (
          <iframe
            title={`${project.title} — PDF preview`}
            src={encodeURI(project.pdfPreview)}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        ) : project.image && imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element -- avoids Next Image 404 / "invalid image" logs when assets are missing from public/
          <img
            src={encodeURI(project.image)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="section-tag flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent-2)]/10">
            {project.title}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="section-card-title">{project.title}</h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="section-tag rounded bg-[var(--bg)] px-2 py-0.5 uppercase tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="section-body mt-3 flex-1">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.links.map((l) => (
            <a
              key={l.label + l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="section-pill-link gap-1 rounded-md hover:bg-[var(--bg)]"
            >
              {l.label}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
