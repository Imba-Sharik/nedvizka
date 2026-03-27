"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/shared/ui/carousel";
import { Container, Reveal } from "@/shared/ui";

interface VenueGalleryProps {
  slides: string[];
}

export function VenueGallery({ slides }: VenueGalleryProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Container className="pt-20 sm:pt-49">
      <Reveal>
        <h2
          className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white mb-5 sm:mb-13"
          style={{ fontSize: "clamp(24px,3.68vw,53px)", lineHeight: "1.2" }}
        >
          Фотогалерея
        </h2>
      </Reveal>
      <Reveal>
        <Carousel opts={{ loop: true }} setApi={setApi}>
          <div className="relative overflow-hidden rounded-[10px]">
            <CarouselContent className="ml-0">
              {slides.map((src, i) => (
                <CarouselItem key={i} className="pl-0">
                  <div className="relative w-full aspect-1867/1702 lg:aspect-1867/851">
                    <Image
                      src={src}
                      alt={`Slide ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 14L6 9L11 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4L12 9L7 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className="rounded-full"
                  style={{
                    width: 7,
                    height: 7,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    opacity: i === current ? 1 : 0.34,
                  }}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </Reveal>
    </Container>
  );
}
