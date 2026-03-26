"use client";

import { useRef, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

const COLUMNS = 5;
const DURATION = 0.3;
const STAGGER = 0.06;
const EASE = "expo.inOut";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  return (
    <>
      {/* Progress bar — grows from 0 to ~400px */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 h-1 z-100 pointer-events-none bg-black origin-left"
        style={{ width: 0 }}
      />

      {/* Column overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[99] flex pointer-events-none"
      >
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <div
            key={i}
            className="flex-1 bg-black origin-top scale-y-0"
            data-col={i}
          />
        ))}
      </div>

      <TransitionLinks
        overlayRef={overlayRef}
        progressRef={progressRef}
        isAnimating={isAnimating}
      >
        {children}
      </TransitionLinks>
    </>
  );
}

function TransitionLinks({
  children,
  overlayRef,
  progressRef,
  isAnimating,
}: {
  children: React.ReactNode;
  overlayRef: React.RefObject<HTMLDivElement | null>;
  progressRef: React.RefObject<HTMLDivElement | null>;
  isAnimating: React.MutableRefObject<boolean>;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const resumeRef = useRef<(() => void) | null>(null);

  // Resume timeline when Next.js finishes navigation (pathname changed)
  useEffect(() => {
    if (resumeRef.current) {
      const resume = resumeRef.current;
      resumeRef.current = null;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          resume();
        });
      });
    }
  }, [pathname]);

  const animateTransition = useCallback(
    (href: string) => {
      if (isAnimating.current || href === pathname) return;
      isAnimating.current = true;

      const columns = overlayRef.current?.querySelectorAll("[data-col]");
      const progress = progressRef.current;
      if (!columns || !progress) return;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      // 1. Bar grows: fast → slow → fast (loading feel)
      tl.set(progress, { width: 0 });
      tl.to(progress, { width: 200, duration: 0.3, ease: "sine.out" });
      tl.to(progress, { width: 300, duration: 0.35, ease: "sine.inOut" });
      tl.to(progress, { width: 400, duration: 0.25, ease: "sine.in" });

      // 2. Columns cover screen (staircase up)
      tl.fromTo(
        columns,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: DURATION,
          stagger: STAGGER,
          ease: EASE,
          transformOrigin: "top",
        }
      );

      // 3. Navigate when covered, pause until pathname changes (new page rendered)
      tl.call(() => {
        tl.pause();
        window.scrollTo(0, 0);
        resumeRef.current = () => tl.resume();
        router.push(href);
      });

      // 4. Columns reveal (staircase down)
      tl.to(columns, {
        scaleY: 0,
        duration: DURATION,
        stagger: STAGGER,
        ease: EASE,
        transformOrigin: "top",
      });

      // 5. Reset progress bar
      tl.set(progress, { width: 0 });
    },
    [router, pathname, overlayRef, progressRef, isAnimating]
  );

  // Intercept all link clicks globally (including portals like DropdownMenu)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) return;

      e.preventDefault();
      animateTransition(href);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [animateTransition]);

  return <>{children}</>;
}
