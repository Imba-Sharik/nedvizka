"use client";

import { useEffect, useRef } from "react";

// ─── Toggle cursor here ───────────────────────────────────────────────────────
const ENABLED = true;
// ─────────────────────────────────────────────────────────────────────────────

const CLICKABLE = 'a, button, [role="button"], label, select, [tabindex]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ENABLED) return;

    const dot = dotRef.current!;
    const label = labelRef.current!;

    const move = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const labelEl = target.closest<HTMLElement>("[data-cursor-label]");
      if (labelEl) {
        const from = e.relatedTarget as HTMLElement | null;
        if (from && labelEl.contains(from)) return;
        const text = labelEl.dataset.cursorLabel ?? "";
        label.textContent = text;
        dot.style.width = "60px";
        dot.style.height = "60px";
        dot.style.backgroundColor = "white";
        dot.style.mixBlendMode = "normal";
        label.style.opacity = "1";
        return;
      }
      if (target.closest(CLICKABLE)) {
        dot.style.width = "40px";
        dot.style.height = "40px";
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const labelEl = target.closest<HTMLElement>("[data-cursor-label]");
      if (labelEl) {
        const to = e.relatedTarget as HTMLElement | null;
        if (to && labelEl.contains(to)) return;
        label.style.opacity = "0";
        dot.style.width = "12px";
        dot.style.height = "12px";
        dot.style.backgroundColor = "white";
        dot.style.mixBlendMode = "difference";
        return;
      }
      if (target.closest(CLICKABLE)) {
        dot.style.width = "12px";
        dot.style.height = "12px";
      }
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-label]")) {
        label.style.opacity = "0";
        dot.style.width = "12px";
        dot.style.height = "12px";
        dot.style.backgroundColor = "white";
        dot.style.mixBlendMode = "difference";
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("click", onClick, true);
    };
  }, []);

  if (!ENABLED) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-9999 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference hidden lg:flex items-center justify-center"
      style={{ width: 12, height: 12, transition: "width 0.2s ease, height 0.2s ease" }}
    >
      <span
        ref={labelRef}
        className="text-black font-sans font-normal text-[10px] leading-none select-none whitespace-nowrap"
        style={{ opacity: 0, transition: "opacity 0.15s ease" }}
      />
    </div>
  );
}
