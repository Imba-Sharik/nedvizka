import { Container, Reveal } from "@/shared/ui";

interface Advantage {
  number: string;
  title: string;
  description: string;
}

interface VenueAdvantagesProps {
  items: Advantage[];
}

export function VenueAdvantages({ items }: VenueAdvantagesProps) {
  return (
    <Container className="pt-20 sm:pt-49">
      {items.map((item, i) => (
        <Reveal key={i}>
          <div className="border-t border-black/14 dark:border-[#383838]" />
          <div
            className="grid sm:section-cols sm:gap-5 py-10 sm:py-14"
          >
            {/* Col 1 — number + title */}
            <div className="sm:col-span-1 flex justify-between">
              <span
                className="font-sans font-medium text-[14px] leading-[1.2] text-black dark:text-white shrink-0"
              >
                {item.number}
              </span>
              <span
                className="font-sans font-medium text-[14px] leading-[1.2] text-black dark:text-white text-right"
                style={{ maxWidth: 200 }}
              >
                {item.title}
              </span>
            </div>

            {/* Col 2 — empty */}
            <div className="hidden sm:block" />

            {/* Col 3 — description */}
            <div className="sm:col-span-1 mt-4 sm:mt-0">
              <p
                className="font-mono text-black dark:text-white"
                style={{
                  fontSize: "clamp(13px,1.11vw,16px)",
                  lineHeight: "1.5",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
      {/* Bottom divider */}
      <div className="border-t border-black/14 dark:border-[#383838]" />
    </Container>
  );
}
