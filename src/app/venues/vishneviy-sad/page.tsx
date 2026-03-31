import { venues } from "@/entities/venue";
import { VenuePage } from "@/widgets/VenuePage";

const venue = venues.find((v) => v.slug === "vishneviy-sad")!;

export default function VishneviySadPage() {
  return <VenuePage venue={venue} />;
}
