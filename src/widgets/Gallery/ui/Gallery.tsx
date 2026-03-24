import Image from "next/image";
import { Container } from "@/shared/ui";

const images: { src: string; alt: string; cls: string }[] = [
  { src: "/gallery/gallery1.png", alt: "Interior 1", cls: "md:col-start-3 md:[grid-row:1]" },
  { src: "/gallery/gallery2.png", alt: "Interior 2", cls: "md:col-start-4 md:[grid-row:1]" },
  { src: "/gallery/gallery3.png", alt: "Interior 3", cls: "md:col-start-1 md:[grid-row:2]" },
  { src: "/gallery/gallery4.png", alt: "Interior 4", cls: "md:col-start-2 md:[grid-row:2]" },
  { src: "/gallery/gallery5.png", alt: "Interior 5", cls: "md:col-start-2 md:[grid-row:3]" },
];

export function Gallery() {
  return (
    <section style={{ marginTop: 'clamp(20px, 2.5vw, 36px)' }}>
      <Container style={{ paddingTop: 'clamp(80px, 8.9vw, 128px)', paddingBottom: 'clamp(80px, 8.9vw, 128px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map(({ src, alt, cls }) => (
            <div
              key={src}
              className={`relative aspect-square rounded-[9px] overflow-hidden ${cls}`}
            >
              <Image src={src} alt={alt} fill className="object-cover" unoptimized sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
