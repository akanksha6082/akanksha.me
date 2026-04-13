"use client";

import { useState } from "react";
import { Section } from "./Section";
import { LoadMoreBar } from "./LoadMoreBar";
import { recentEvents } from "@/data/site";
import { Calendar, MapPin, Sparkles } from "lucide-react";

const EVENTS_INITIAL = 2;
const EVENTS_STEP = 2;

/** Character budget before “show more” (word-boundary trim). */
const EVENT_BODY_PREVIEW_MAX = 240;

function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const i = slice.lastIndexOf(" ");
  return i > 40 ? slice.slice(0, i) : slice.trimEnd();
}

function EventCover({
  src,
  title,
  objectPosition = "center",
}: {
  src: string;
  title: string;
  objectPosition?: "top" | "center";
}) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="relative mx-auto h-40 w-full min-w-0 max-w-full overflow-hidden rounded-md border border-[var(--border)]/50 bg-[var(--bg)] shadow-sm md:mx-0 md:h-40 md:w-[13rem] md:max-w-none md:shrink-0">
      {imgOk ? (
        // eslint-disable-next-line @next/next/no-img-element -- static public assets; avoids Image 404 noise
        <img
          src={encodeURI(src)}
          alt=""
          className={`h-full w-full object-cover${objectPosition === "top" ? " object-top" : ""}`}
          onError={() => setImgOk(false)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent-2)]/10 px-2 text-center font-mono text-[10px] leading-tight text-[var(--muted)] sm:text-xs">
          {title}
        </div>
      )}
    </div>
  );
}

function EventDescription({ body }: { body: string }) {
  const [expanded, setExpanded] = useState(false);
  const needsMore = body.length > EVENT_BODY_PREVIEW_MAX;
  const preview = needsMore ? truncateAtWord(body, EVENT_BODY_PREVIEW_MAX) : body;

  const toggleBtn = (
    <button
      type="button"
      className="inline cursor-pointer border-0 bg-transparent p-0 align-baseline font-mono text-sm font-medium tracking-wide text-[var(--accent)] underline decoration-[var(--border)] underline-offset-2 transition hover:text-[var(--foreground)] hover:decoration-[var(--accent)]/50"
      aria-expanded={expanded}
      aria-label={expanded ? "Show less" : "Show more"}
      onClick={() => setExpanded((v) => !v)}
    >
      {expanded ? "show less" : "show more"}
    </button>
  );

  return (
    <div className="relative mt-3 min-w-0 flex-1">
      <p className="section-body break-words [overflow-wrap:anywhere]">
        {!needsMore ? (
          body
        ) : !expanded ? (
          <>
            {preview}
            … {toggleBtn}
          </>
        ) : (
          <>
            {body} {toggleBtn}
          </>
        )}
      </p>
    </div>
  );
}

export function Events() {
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(EVENTS_INITIAL, recentEvents.length),
  );

  const visible = recentEvents.slice(0, visibleCount);
  const canLoadMore = visibleCount < recentEvents.length;
  const canShowLess = visibleCount > EVENTS_INITIAL;

  return (
    <Section id="events" title="Recent Events">
      <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2">
        {visible.map((ev) => (
          <article
            key={ev.id}
            className="group relative flex min-w-0 max-w-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition duration-300 hover:border-[var(--accent)]/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_18px_40px_-22px_rgba(0,0,0,0.5)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(34,211,238,0.05)_0%,transparent_55%,rgba(192,132,252,0.04)_100%)] opacity-90 transition group-hover:opacity-100" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--accent)]/[0.06] blur-2xl transition group-hover:bg-[var(--accent)]/[0.1]" />
            <div className="pointer-events-none absolute left-0 top-0 z-[1] h-1 w-full bg-gradient-to-r from-[var(--accent)]/50 via-[var(--accent-2)]/30 to-transparent opacity-80" />

            <div className="relative z-[1] flex min-w-0 flex-1 flex-col p-4 sm:p-5">
              <div className="flex min-w-0 flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-4">
                <div className="min-w-0 w-full flex-1">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[var(--border)]/90 bg-[var(--background)]/60 text-[var(--accent)] shadow-sm">
                      <Sparkles className="h-4 w-4" aria-hidden />
                    </span>
                    <h3 className="section-card-title min-w-0 leading-snug">{ev.title}</h3>
                  </div>
                  <div className="section-meta relative mt-3.5 flex min-w-0 flex-wrap gap-2">
                    <span className="inline-flex max-w-full min-w-0 items-center gap-1.5 break-words rounded-lg border border-[var(--border)]/80 bg-[var(--background)]/50 px-2.5 py-1">
                      <Calendar className="h-3 w-3 text-[var(--accent)]/80" />
                      {ev.date}
                    </span>
                    {ev.location ? (
                      <span className="inline-flex max-w-full min-w-0 items-center gap-1.5 break-words rounded-lg border border-[var(--border)]/80 bg-[var(--background)]/50 px-2.5 py-1">
                        <MapPin className="h-3 w-3 text-[var(--accent-2)]/85" />
                        {ev.location}
                      </span>
                    ) : null}
                  </div>
                </div>
                {ev.image ? (
                  <div className="flex w-full min-w-0 justify-center md:w-auto md:shrink-0 md:justify-end">
                    <EventCover
                      src={ev.image}
                      title={ev.title}
                      objectPosition={ev.imageObjectPosition ?? "center"}
                    />
                  </div>
                ) : null}
              </div>
              <EventDescription body={ev.body} />
              {ev.links?.length ? (
                <div className="relative mt-4 flex min-w-0 flex-wrap gap-2 border-t border-[var(--border)]/70 pt-4">
                  {ev.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="section-pill-link max-w-full min-w-0 break-words"
                    >
                      {l.label}
                      <span className="ml-1 opacity-60" aria-hidden>
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <LoadMoreBar
        canLoadMore={canLoadMore}
        canShowLess={canShowLess}
        onLoadMore={() =>
          setVisibleCount((c) =>
            Math.min(c + EVENTS_STEP, recentEvents.length),
          )
        }
        onShowLess={() => setVisibleCount(EVENTS_INITIAL)}
      />
    </Section>
  );
}
