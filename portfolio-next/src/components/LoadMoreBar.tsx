"use client";

type LoadMoreBarProps = {
  canLoadMore: boolean;
  canShowLess: boolean;
  onLoadMore: () => void;
  onShowLess: () => void;
};

export function LoadMoreBar({
  canLoadMore,
  canShowLess,
  onLoadMore,
  onShowLess,
}: LoadMoreBarProps) {
  if (!canLoadMore && !canShowLess) return null;

  const btnClass =
    "section-control inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]";

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
      {canLoadMore ? (
        <button type="button" className={btnClass} onClick={onLoadMore}>
          Load more
        </button>
      ) : null}
      {canShowLess ? (
        <button type="button" className={btnClass} onClick={onShowLess}>
          Show less
        </button>
      ) : null}
    </div>
  );
}
