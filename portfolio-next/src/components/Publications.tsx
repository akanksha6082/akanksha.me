import { Section } from "./Section";
import { publications } from "@/data/site";
import { BookOpen } from "lucide-react";

export function Publications() {
  return (
    <Section id="publications" title="Research Publications">
      <div className="space-y-8">
        {publications.map((pub) => (
          <article
            key={pub.id}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="section-card-title min-w-0 max-w-3xl">{pub.title}</h3>
              <span className="section-meta shrink-0">{pub.date}</span>
            </div>
            <p className="section-secondary-meta mt-2 flex items-start gap-2">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0" />
              {pub.venue}
            </p>
            <p className="section-body mt-4">
              <span className="section-label text-[var(--foreground)]">
                Abstract —{" "}
              </span>
              {pub.abstract}
            </p>
            {pub.link ? (
              <a
                href={pub.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="section-link mt-4 inline-flex"
              >
                {pub.link.label} ↗
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
