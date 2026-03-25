"use client";

import { useRef, useEffect, type ReactNode, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  /** Animation direction */
  direction?: "up" | "down" | "left" | "right";
  /** Pixels to travel */
  distance?: number;
  /** Duration in seconds */
  duration?: number;
  /** Delay in seconds */
  delay?: number;
  /** Stagger children instead of animating container */
  stagger?: number;
  /** Trigger offset, e.g. "top 85%" */
  start?: string;
  /** Additional className */
  className?: string;
  /** Additional style */
  style?: CSSProperties;
  /** HTML tag */
  as?: keyof HTMLElementTagNameMap;
}

export function Reveal({
  children,
  direction = "up",
  distance = 40,
  duration = 1,
  delay = 0,
  stagger,
  start = "top 85%",
  className,
  style,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1 });
      if (stagger) gsap.set(el.children, { opacity: 1 });
      return;
    }

    const axis = direction === "left" || direction === "right" ? "x" : "y";
    const sign = direction === "down" || direction === "right" ? -1 : 1;
    const from = { [axis]: distance * sign, opacity: 0 };
    const to = {
      [axis]: 0,
      opacity: 1,
      duration,
      delay,
      ease: "expo.out",
      scrollTrigger: { trigger: el, start, once: true },
    };

    if (stagger && el.children.length > 0) {
      gsap.set(el.children, from);
      gsap.to(el.children, { ...to, stagger });
    } else {
      gsap.set(el, from);
      gsap.to(el, to);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [direction, distance, duration, delay, stagger, start]);

  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={className} style={{ ...style, opacity: stagger ? 1 : 0 }}>
      {children}
    </Component>
  );
}
