import Image from "next/image";
import { Container } from "@/shared/ui";

const images: { src: string; alt: string; col: string; row: number }[] = [
  { src: "/gallery/gallery1.png", alt: "Interior 1", col: "md:col-start-3", row: 1 },
  { src: "/gallery/gallery2.png", alt: "Interior 2", col: "md:col-start-4", row: 1 },
  { src: "/gallery/gallery3.png", alt: "Interior 3", col: "md:col-start-1", row: 2 },
  { src: "/gallery/gallery4.png", alt: "Interior 4", col: "md:col-start-2", row: 2 },
  { src: "/gallery/gallery5.png", alt: "Interior 5", col: "md:col-start-2", row: 3 },
];

export function Gallery() {
  return (
    <section className="mt-9">
      <Container className="py-20 lg:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map(({ src, alt, col, row }) => (
            <div
              key={src}
              className={`relative aspect-square rounded-[9px] overflow-hidden ${col}`}
              style={{ gridRow: `${row}` }}
            >
              <Image src={src} alt={alt} fill className="object-cover" unoptimized sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
