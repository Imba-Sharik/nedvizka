import { VenueHero } from "@/widgets/VenueHero";
import { VenueAbout } from "@/widgets/VenueAbout";
import { VenueOtherLocations } from "@/widgets/VenueOtherLocations";
import { Quote } from "@/widgets/Quote";

export default function MetmashPage() {
  return (
    <main>
      <VenueHero
        title={["МЕТМАШ X", "НОВЫЙ ГОЛЛИВУД"]}
        imageSrc="/metmash/hero-image.png"
        address="Москва, Рязанский проспект д.8А"
      />
      {/* <VenueAbout
        paragraphs={[
          "Центр культуры и предпринимательства новой волны.",
          "Первое столичное междисциплинарное пространство между бизнесом, наукой, гастрономией, музыкой, культурой и искусством.",
        ]}
      />
      <VenueOtherLocations currentSlug="metmash" /> */}
      <Quote />
    </main>
  );
}
