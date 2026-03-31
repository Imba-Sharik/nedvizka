import { venues } from "@/entities/venue";
import { VenuePage } from "@/widgets/VenuePage";

const venue = venues.find((v) => v.slug === "metmash")!;

export default function MetmashPage() {
  return <VenuePage venue={venue} />;
}
