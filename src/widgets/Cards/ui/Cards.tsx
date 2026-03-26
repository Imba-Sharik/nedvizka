"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/shared/ui";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    src: "/images/Mask3.png",
    hoverSrc: "/images/Mask6.jpg",
    alt: "Метмаш",
    name: "МЕТМАШ",
    href: "/venues/metmash",
    area: "20000 м²",
    description: "Тщательно спроектированные пространства для брендов",
    descriptionWidth: 247,
  },
  {
    src: "/images/Mask2.png",
    hoverSrc: "/images/Mask5.jpg",
    alt: "Парк-музей Коломенское",
    name: "ПАРК-МУЗЕЙ КОЛОМЕНСКОЕ",
    href: "/venues/park-muzey-kolomenskoe",
    area: "20000 м²",
    description: "Тщательно спроектированные пространства для брендов",
    descriptionWidth: 247,
  },
  {
    src: "/images/Mask.png",
    hoverSrc: "/images/Mask4.jpg",
    alt: "ДК Серп и Молот",
    name: "ДК СЕРП И МОЛОТ",
    href: "/venues/dk-serp-i-molot",
    area: "20000 м²",
    description: "Тщательно спроектированные пространства для брендов, которые ценят атмосферу",
    descriptionWidth: 367,
  },
];

function CardImage({ card }: { card: (typeof cards)[number]; }) {
  const hoverRef = useRef<HTMLImageElement>(null);

  const handleEnter = () => {
    gsap.set(hoverRef.current, { opacity: 1 });
  };

  const handleLeave = () => {
    gsap.set(hoverRef.current, { opacity: 0 });
  };

  return (
    <a
      href={card.href}
      data-cursor-label="Подробнее"
      className="block relative overflow-hidden rounded-[9px] lg:cursor-none"
      style={{ aspectRatio: "1 / 1" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div data-card-img className="absolute inset-0">
        <Image
          src={card.src}
          alt={card.alt}
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <img
          ref={hoverRef}
          src={card.hoverSrc}
          alt={card.alt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0, pointerEvents: "none" }}
        />
      </div>
    </a>
  );
}

export function Cards() {
  const gridRef = useRef<HTMLDivElement>(null);

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
    <Container className="relative z-20 pb-20 sm:pb-49">
      <div ref={gridRef} className="grid grid-cols-1 sm:section-cols gap-5">
        {cards.map((card) => (
          <div key={card.src} data-card>
            {/* Image */}
            <CardImage card={card} />

            {/* Meta row */}
            <div data-card-meta className="flex items-start justify-between mt-4.25">
              {/* Title + description */}
              <div>
                <span className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white" style={{ fontSize: "clamp(18px,1.2vw,24px)", lineHeight: "1.3" }}>
                  {card.name}
                </span>
                <p
                  className="mt-3 font-sans font-medium text-black dark:text-white opacity-[0.37]"
                  style={{ fontSize: "clamp(13px,0.75vw,15px)", lineHeight: "1.33", maxWidth: `clamp(${Math.round(card.descriptionWidth * 0.6)}px,${(card.descriptionWidth / 2000 * 100).toFixed(2)}vw,${card.descriptionWidth}px)` }}
                >
                  {card.description}
                </p>
              </div>

              {/* Badge */}
              <span className="font-sans text-[14px] font-medium leading-4.75 text-white bg-[rgba(10,25,143,0.68)] rounded-[7px] px-2 py-0.5 whitespace-nowrap self-start">
                {card.area}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
