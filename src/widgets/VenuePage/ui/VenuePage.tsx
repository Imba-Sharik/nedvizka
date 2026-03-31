import { VenueHero } from "@/widgets/VenueHero";
import { VenueAbout } from "@/widgets/VenueAbout";
import { VenueScheme } from "@/widgets/VenueScheme";
import { VenuePremises } from "@/widgets/VenuePremises";
import { VenueGallery } from "@/widgets/VenueGallery";
import { VenueAdvantages } from "@/widgets/VenueAdvantages";
import { VenueOtherLocations } from "@/widgets/VenueOtherLocations";
import { Quote } from "@/widgets/Quote";
import type { Venue } from "@/entities/venue";

interface VenuePageProps {
  venue: Venue;
}

export function VenuePage({ venue }: VenuePageProps) {
  const paragraphs = venue.fullDescription.split("\n\n");

  const advantageItems = venue.advantages.map((a, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: a.title,
    description: a.text,
  }));

  return (
    <main>
      <VenueHero
        title={venue.heroTitle}
        imageSrc={venue.src}
        address={venue.address}
      />
      <VenueAbout paragraphs={paragraphs} />
      <VenueScheme imageSrc="/metmash/scheme.jpeg" area={venue.area} />
      <VenuePremises venueName={venue.location} />
      <VenueAdvantages items={advantageItems} />
      {venue.gallery.length > 0 && <VenueGallery slides={venue.gallery} />}
      <VenueOtherLocations currentSlug={venue.slug} />
      <Quote />
    </main>
  );
}
