import { Container, Reveal } from "@/shared/ui";

export function Quote() {
  return (
    <section>
      <Container style={{ paddingBottom: 'clamp(80px, 8.9vw, 128px)' }}>
        {/* Divider */}
        <div
          className="w-full"
          style={{ height: "1px", borderTop: "1px solid rgba(151,151,151,1)", opacity: 0.41 }}
        />
        <div className="flex flex-col sm:section-cols sm:gap-5 pt-7">
          {/* Col 1 — label */}
          <Reveal className="sm:col-span-1">
            <p className="font-sans text-[14px] font-medium text-black dark:text-white">
              VSF
            </p>
          </Reveal>

          {/* Spacer — col 2 */}
          <div className="hidden sm:block sm:col-span-1" />

          {/* Col 3 — quote text */}
          <Reveal delay={0.2} className="mt-6 sm:mt-0 sm:col-span-1">
            <p
              className="font-sans font-normal text-black dark:text-white"
              style={{ fontSize: "clamp(13px,1.25vw,18px)", lineHeight: "1.33" }}
            >
              Not quite glass. Not quite resin. Liquid glass is a rare, optical-grade material with the
              clarity of crystal and the flow of molten light.
            </p>
            <p
              className="font-sans font-normal text-black dark:text-white mt-6"
              style={{ fontSize: "clamp(13px,1.25vw,18px)", lineHeight: "1.33" }}
            >
              It&apos;s cool to the touch, yet seems to glow from within — bending light, color, and
              shadow in ever-changing ways.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
