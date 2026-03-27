"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Reveal } from "@/shared/ui";
import { VenueCard, venues } from "@/entities/venue";

gsap.registerPlugin(ScrollTrigger);

export function VenueOtherLocations({ currentSlug }: { currentSlug: string }) {
  const gridRef = useRef<HTMLDivElement>(null);

  const otherVenues = venues.filter((v) => v.slug !== currentSlug);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = el.querySelectorAll<HTMLElement>("[data-card]");

    gsap.set(cards, { opacity: 0, y: 150 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    });

    tl.to(cards, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "expo.out",
      stagger: 0,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return (
    <Container className="pt-20 sm:pt-49 pb-20 sm:pb-49">
      <Reveal>
        <h2
          className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white mb-5 sm:mb-13"
          style={{ fontSize: "clamp(24px,3.68vw,53px)", lineHeight: "1.2" }}
        >
          Другие локации
        </h2>
      </Reveal>
      <div ref={gridRef} className="grid grid-cols-1 sm:section-cols gap-5">
        {otherVenues.map((card) => (
          <VenueCard key={card.slug} card={card} />
        ))}
      </div>
    </Container>
  );
}
