import { notFound } from "next/navigation";
import { venues } from "@/entities/venue";
import { VenuePage } from "@/widgets/VenuePage";

const venue = venues.find((v) => v.slug === "metmash");

export default function MetmashPage() {
  if (!venue) notFound();
  return <VenuePage venue={venue} />;
}
