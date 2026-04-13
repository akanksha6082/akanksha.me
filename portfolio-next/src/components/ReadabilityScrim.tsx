/**
 * Sits above the particle canvas (z-1) and below page content (z-10).
 * Thin veil — keeps type readable while letting the network read through.
 */
export function ReadabilityScrim() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-[var(--background)]/28 via-[var(--background)]/16 to-[var(--background)]/24"
      aria-hidden
    />
  );
}
