import Image from "next/image";
import { Container } from "@/shared/ui";

const cards = [
  {
    src: "/images/Mask3.png",
    alt: "Метмаш",
    name: "МЕТМАШ",
    area: "20000 м²",
    description: "Тщательно спроектированные пространства для брендов",
    descriptionWidth: 247,
  },
  {
    src: "/images/Mask2.png",
    alt: "Парк-музей Коломенское",
    name: "ПАРК-МУЗЕЙ КОЛОМЕНСКОЕ",
    area: "20000 м²",
    description: "Тщательно спроектированные пространства для брендов",
    descriptionWidth: 247,
  },
  {
    src: "/images/Mask.png",
    alt: "ДК Серп и Молот",
    name: "ДК СЕРП И МОЛОТ",
    area: "20000 м²",
    description: "Тщательно спроектированные пространства для брендов, которые ценят атмосферу",
    descriptionWidth: 367,
  },
];

export function Cards() {
  return (
    <Container className="relative z-20 pb-20 lg:pb-32">
      <div className="flex flex-col gap-5 lg:flex-row">
        {cards.map((card) => (
          <div key={card.src} style={{ flex: 1 }}>
            {/* Image */}
            <div
              className="relative overflow-hidden rounded-[9px] bg-[rgba(216,216,216,1)]"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                unoptimized
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Meta row */}
            <div className="flex items-start justify-between mt-4.25">
              {/* Title + description */}
              <div>
                <span className="font-(family-name:--font-pt-mono) text-[24px] leading-7.25 font-normal uppercase text-black dark:text-white">
                  {card.name}
                </span>
                <p
                  className="mt-3 font-sans text-[15px] font-medium leading-4.75 text-black dark:text-white opacity-[0.37]"
                  style={{ maxWidth: card.descriptionWidth }}
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
