import { venues } from "@/entities/venue";
import { VenuePage } from "@/widgets/VenuePage";

const venue = venues.find((v) => v.slug === "park-muzey-kolomenskoe")!;

export default function ParkMuzeyKolomenskoePage() {
  return <VenuePage venue={venue} />;
}
