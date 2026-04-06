import { venues } from "@/entities/venue";
import { VenuePage } from "@/widgets/VenuePage";

const venue = venues.find((v) => v.slug === "park-gorkogo")!;

export default function ParkGorkogoPage() {
  return <VenuePage venue={venue} />;
}
