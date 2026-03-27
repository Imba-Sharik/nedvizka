import Image from "next/image";
import { Container, Reveal } from "@/shared/ui";

interface VenueSchemeProps {
  imageSrc: string;
  area: string;
}

export function VenueScheme({ imageSrc, area }: VenueSchemeProps) {
  return (
    <Container
      className="grid sm:section-cols sm:gap-5 pt-20 sm:pt-65"
    >
      {/* Col 1 — title */}
      <Reveal className="sm:col-span-2">
        <h2
          className="font-(family-name:--font-pt-mono) font-normal uppercase text-black dark:text-white mb-5 sm:mb-13"
          style={{ fontSize: "clamp(24px,3.68vw,53px)", lineHeight: "1.2" }}
        >
          Схема площадки
        </h2>
      </Reveal>

      {/* Col 3 — area info */}
      <Reveal className="sm:col-span-1 mb-5 sm:mb-13">
        <div
          className="font-(family-name:--font-pt-mono) font-normal text-black dark:text-white"
          style={{
            fontSize: "clamp(15px,1.32vw,19px)",
            lineHeight: "1.4",
            maxWidth: "clamp(260px,25.63vw,369px)",
          }}
        >
          <p>Общая площадь инфраструктуры<br />{area}</p>
        </div>
      </Reveal>

      {/* Image — full width */}

      <Reveal className="sm:col-span-3">
        <div className="relative w-full rounded-[10px] overflow-hidden">
          <Image
            src={imageSrc}
            alt="Схема площадки"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </Reveal>
    </Container>
  );
}
