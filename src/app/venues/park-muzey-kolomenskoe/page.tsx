import { notFound } from "next/navigation";
import { venues } from "@/entities/venue";
import { VenuePage } from "@/widgets/VenuePage";

const venue = venues.find((v) => v.slug === "park-muzey-kolomenskoe");

export default function ParkMuzeyKolomenskoePage() {
  if (!venue) notFound();
  return <VenuePage venue={venue} />;
}
