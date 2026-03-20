import Image from "next/image";
import { Container } from "@/shared/ui";

const images = [
  { src: "/images/Mask3.png", alt: "ДК Серп и Молот" },
  { src: "/images/Mask2.png", alt: "Парк-музей Коломенское" },
  { src: "/images/Mask.png", alt: "Метмаш" },
];

export function Cards() {
  return (
    <Container className="relative z-20">
      <div className="flex flex-col gap-5 lg:flex-row">
        {images.map((img) => (
          <div
            key={img.src}
            style={{
              flex: 1,
              aspectRatio: "1 / 1",
              borderRadius: "9px",
              backgroundColor: "rgba(216, 216, 216, 1)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              unoptimized
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
