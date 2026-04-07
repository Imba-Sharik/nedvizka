"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Venue } from "../model/venues";

function CardImage({ card }: { card: Venue }) {
  const hoverRef = useRef<HTMLImageElement>(null);

  return (
    <a
      href={card.href}
      data-cursor-label="Подробнее"
      className="block relative overflow-hidden rounded-[9px] lg:cursor-none"
      style={{ aspectRatio: "1 / 1" }}
    >
      <div data-card-img className="absolute inset-0">
        <Image
          src={card.src}
          alt={card.alt}
          fill
          priority

          className="object-cover"
        />
        <img
          ref={hoverRef}
          src={card.hoverSrc}
          alt={card.alt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
            pointerEvents: "none",
          }}
        />
      </div>
    </a>
  );
}

export function VenueCard({ card }: { card: Venue }) {
  return (
    <div data-card>
      <CardImage card={card} />

      <div
        data-card-meta
        className="flex items-start justify-between mt-4.25"
      >
        <div>
          <span
            className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white"
            style={{
              fontSize: "clamp(18px,1.2vw,24px)",
              lineHeight: "1.3",
            }}
          >
            {card.name}
          </span>
          <p
            className="mt-3 font-sans font-medium text-black dark:text-white opacity-[0.37] line-clamp-2"
            style={{
              fontSize: "clamp(13px,0.75vw,15px)",
              lineHeight: "1.33",
              maxWidth: "70%",
            }}
          >
            {card.description}
          </p>
        </div>

        <span className="font-sans text-[14px] font-medium leading-4.75 text-white bg-[rgba(10,25,143,0.68)] dark:bg-[#D8D8D8] dark:text-black rounded-[7px] px-2 py-0.5 whitespace-nowrap self-start">
          {card.area}
        </span>
      </div>
    </div>
  );
}
