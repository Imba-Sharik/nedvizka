import { Container, Reveal } from "@/shared/ui";

interface VenueAboutProps {
  paragraphs: string[];
}

export function VenueAbout({ paragraphs }: VenueAboutProps) {
  return (
    <Container
      className="grid sm:section-cols sm:gap-5"
      style={{ paddingTop: "clamp(60px,7.15vw,103px)" }}
    >
      {/* Col 1–2 — пусто */}
      <div className="hidden sm:block sm:col-span-2" />

      {/* Col 3 — текст */}
      <Reveal className="sm:col-span-1">
        <div
          className="flex flex-col gap-6 font-(family-name:--font-pt-mono) font-normal text-black dark:text-white"
          style={{
            fontSize: "clamp(15px,1.32vw,19px)",
            lineHeight: "1.4",
            maxWidth: "clamp(260px,25.63vw,369px)",
          }}
        >
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
