"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Container } from "@/shared/ui";
import { VenueCard, venues } from "@/entities/venue";

export function Cards() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = el.querySelectorAll<HTMLElement>("[data-card]");

    gsap.set(cards, { opacity: 0, y: 150 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "expo.out",
      stagger: 0,
    });
  }, []);

  return (
    <Container className="relative z-20 pb-20 sm:pb-49">
      <div ref={gridRef} className="grid grid-cols-1 sm:section-cols gap-5">
        {venues.map((card) => (
          <VenueCard key={card.slug} card={card} />
        ))}
      </div>
    </Container>
  );
}
