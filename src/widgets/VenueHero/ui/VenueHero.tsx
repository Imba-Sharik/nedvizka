"use client";

import Image from "next/image";
import { Reveal } from "@/shared/ui";

interface VenueHeroProps {
  title: string[];
  imageSrc: string;
  address?: string;
  ctaText?: string;
}

export function VenueHero({ title, imageSrc, address, ctaText = "Подобрать площадь" }: VenueHeroProps) {
  return (
    <section className="relative w-full -mt-19.25 overflow-hidden bg-black" style={{ height: "clamp(500px, 45.42vw, 872px)", borderBottomLeftRadius: "clamp(14px, 1.46vw, 28px)", borderBottomRightRadius: "clamp(14px, 1.46vw, 28px)" }}>
      <Image
        src={imageSrc}
        alt={title[0]}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
        style={{ objectPosition: "center bottom" }}
        onLoad={() => window.dispatchEvent(new Event("page:ready"))}
      />

      {/* Top gradient for header readability */}
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Mobile: bottom */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 px-4 lg:hidden">
        <Reveal distance={150} duration={2}>
          {address && (
            <p className="font-sans font-medium text-white" style={{ opacity: 0.58, fontSize: 13, marginBottom: 16 }}>
              {address}
            </p>
          )}
          <h1
            className="font-(family-name:--font-pt-mono) font-normal uppercase text-white"
            style={{ fontSize: 32, lineHeight: "1.35", marginBottom: 20 }}
          >
            {title.map((line, i) => (
              <span key={i}>{line}{i < title.length - 1 && <br />}</span>
            ))}
          </h1>
          <a
            href="#premises"
            className="relative overflow-hidden rounded-[7px] inline-flex items-center justify-center font-sans font-medium text-white no-underline"
            style={{ height: 39, padding: "0 18px", fontSize: 13, whiteSpace: "nowrap" }}
            onClick={(e) => { e.preventDefault(); document.getElementById("premises")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(255,255,255,0.19)", backdropFilter: "blur(22px)", WebkitBackdropFilter: "blur(22px)" }}
            />
            <span className="relative">{ctaText}</span>
          </a>
        </Reveal>
      </div>

      {/* Desktop: 3rd column, top: 513px */}
      <div
        className="hidden lg:grid absolute left-0 right-0 px-6.5 section-cols gap-5"
        style={{ top: "57.65%" }}
      >
        <div className="col-span-2" />
        <Reveal distance={150} duration={2} className="col-span-1">
          {address && (
            <p className="font-sans font-medium text-white" style={{ opacity: 0.58, fontSize: "clamp(10px, 0.73vw, 14px)", marginBottom: "clamp(16px, 1.46vw, 28px)" }}>
              {address}
            </p>
          )}
          <h1
            className="font-(family-name:--font-pt-mono) font-medium uppercase text-white"
            style={{ fontSize: "clamp(20px, 2.76vw, 53px)", lineHeight: "1.1", marginBottom: "clamp(16px, 1.46vw, 28px)" }}
          >
            {title.map((line, i) => (
              <span key={i}>{line}{i < title.length - 1 && <br />}</span>
            ))}
          </h1>
          <a
            href="#premises"
            className="relative overflow-hidden rounded-[7px] inline-flex items-center justify-center font-sans font-medium text-white no-underline"
            style={{ height: "clamp(24px, 2.03vw, 39px)", padding: "0 clamp(12px, 1.15vw, 22px)", fontSize: "clamp(10px, 0.73vw, 14px)", whiteSpace: "nowrap" }}
            onClick={(e) => { e.preventDefault(); document.getElementById("premises")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(255,255,255,0.19)", backdropFilter: "blur(22px)", WebkitBackdropFilter: "blur(22px)" }}
            />
            <span className="relative">{ctaText}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
