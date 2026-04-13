"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import { useReducedMotion } from "framer-motion";

const POOL =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar(): string {
  return POOL[Math.floor(Math.random() * POOL.length)] ?? "x";
}

function fillRandom(s: string): string {
  return s
    .split("")
    .map((c) => {
      if (c === " ") return " ";
      if (/[a-zA-Z0-9]/.test(c)) return randomChar();
      return c;
    })
    .join("");
}

export function ScrambleRevealHeading({
  text,
  as = "h2",
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const Tag = as as "h1" | "h2";
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  const [out, setOut] = useState(text);
  const [started, setStarted] = useState(false);
  const ranRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);

  useEffect(() => {
    if (!reduced) return;
    const t = setTimeout(() => {
      setOut(text);
      setStarted(true);
    }, 0);
    return () => clearTimeout(t);
  }, [reduced, text]);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !ranRef.current) {
          ranRef.current = true;
          queueMicrotask(() => {
            setOut(fillRandom(text));
            setStarted(true);
          });
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, text]);

  useEffect(() => {
    if (!started || reduced) return;

    const clearAll = () => {
      timersRef.current.forEach(clearTimeout);
      intervalsRef.current.forEach(clearInterval);
      timersRef.current = [];
      intervalsRef.current = [];
    };

    const chars = text.split("");
    let cancelled = false;

    const step = (i: number) => {
      if (cancelled || i >= chars.length) {
        if (!cancelled) setOut(text);
        return;
      }
      const ch = chars[i];
      if (ch === " ") {
        setOut((prev) => prev.slice(0, i) + " " + prev.slice(i + 1));
        timersRef.current.push(setTimeout(() => step(i + 1), 10));
        return;
      }
      if (!/[a-zA-Z0-9]/.test(ch)) {
        setOut((prev) => prev.slice(0, i) + ch + prev.slice(i + 1));
        timersRef.current.push(setTimeout(() => step(i + 1), 11));
        return;
      }

      const maxTicks = 1 + Math.floor(Math.random() * 2);
      let ticks = 0;
      const iv = setInterval(() => {
        ticks += 1;
        setOut((prev) => {
          const arr = prev.split("");
          arr[i] = randomChar();
          return arr.join("");
        });
        if (ticks >= maxTicks) {
          clearInterval(iv);
          intervalsRef.current = intervalsRef.current.filter((x) => x !== iv);
          setOut((prev) => {
            const arr = prev.split("");
            arr[i] = ch;
            return arr.join("");
          });
          timersRef.current.push(setTimeout(() => step(i + 1), 14));
        }
      }, 30);
      intervalsRef.current.push(iv);
    };

    step(0);

    return () => {
      cancelled = true;
      clearAll();
    };
  }, [started, text, reduced]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {out}
    </Tag>
  );
}
