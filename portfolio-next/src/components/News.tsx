"use client";

import { useState } from "react";
import { Section } from "./Section";
import { LoadMoreBar } from "./LoadMoreBar";
import { newsItems } from "@/data/site";

const NEWS_INITIAL = 2;
const NEWS_STEP = 2;

export function News() {
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(NEWS_INITIAL, newsItems.length),
  );

  const visible = newsItems.slice(0, visibleCount);
  const canLoadMore = visibleCount < newsItems.length;
  const canShowLess = visibleCount > NEWS_INITIAL;

  return (
    <Section id="news" title="Recent News">
      <div className="relative">
        <ol className="flex flex-col">
          {visible.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className="mb-7 flex items-stretch gap-4 last:mb-0 sm:gap-6"
            >
              <div
                className="flex min-h-0 w-4 shrink-0 flex-col items-center pt-1 sm:w-5"
                aria-hidden
              >
                <span className="h-3 w-3 shrink-0 rounded-full border-2 border-[var(--background)] bg-gradient-to-br from-[var(--accent-2)] to-[var(--accent)] shadow-[0_0_14px_rgba(192,132,252,0.35)]" />
                {index < visible.length - 1 ? (
                  <span className="mt-2 w-px flex-1 bg-gradient-to-b from-[var(--border)] via-[var(--accent)]/25 to-[var(--border)]" />
                ) : null}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8">
                  <time className="section-meta-emphasis shrink-0 sm:w-[7.25rem] sm:pt-0.5">
                    {item.date}
                  </time>
                  <div className="min-w-0 min-h-0 sm:flex-1">
                    <p className="section-body-strong">{item.body}</p>
                    {item.links?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="section-link-subtle inline-flex items-center"
                          >
                            {l.label}
                            <span className="ml-0.5 opacity-60" aria-hidden>
                              ↗
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <LoadMoreBar
          canLoadMore={canLoadMore}
          canShowLess={canShowLess}
          onLoadMore={() =>
            setVisibleCount((c) =>
              Math.min(c + NEWS_STEP, newsItems.length),
            )
          }
          onShowLess={() => setVisibleCount(NEWS_INITIAL)}
        />
      </div>
    </Section>
  );
}
