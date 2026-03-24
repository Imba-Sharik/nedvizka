"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/shared/ui/carousel";
import { Container } from "@/shared/ui";

const slides = [
  "/slider/slider.png",
  "/slider/slider1.png",
  "/slider/slider2.png",
  "/slider/slider3.jpg",
];

export function Slider() {
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
    <section style={{ marginTop: 'clamp(40px, 4.2vw, 60px)' }}>
      <Container>
        <Carousel opts={{ loop: true }} setApi={setApi}>
          <div className="relative overflow-hidden rounded-[10px]">
          <CarouselContent className="ml-0">
            {slides.map((src, i) => (
              <CarouselItem key={i} className="pl-0">
                <div className="relative w-full aspect-1867/851">
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
      </Container>
    </section>
  );
}
