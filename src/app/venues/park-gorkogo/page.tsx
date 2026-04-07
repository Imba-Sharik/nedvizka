import { notFound } from "next/navigation";
import { venues } from "@/entities/venue";
import { VenuePage } from "@/widgets/VenuePage";

const venue = venues.find((v) => v.slug === "park-gorkogo");

export default function ParkGorkogoPage() {
  if (!venue) notFound();
  return <VenuePage venue={venue} />;
}
