"use client";

import { useEffect, useRef } from "react";

// ─── Toggle cursor here ───────────────────────────────────────────────────────
const ENABLED = true;
// ─────────────────────────────────────────────────────────────────────────────

const CLICKABLE = 'a, button, [role="button"], label, select, [tabindex]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ENABLED) return;

    const dot = dotRef.current!;

    const move = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(CLICKABLE)) {
        dot.style.width = "48px";
        dot.style.height = "48px";
      }
    };

    const onLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(CLICKABLE)) {
        dot.style.width = "12px";
        dot.style.height = "12px";
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  if (!ENABLED) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-9999 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
      style={{ width: 12, height: 12, transition: "width 0.2s ease, height 0.2s ease" }}
    />
  );
}
