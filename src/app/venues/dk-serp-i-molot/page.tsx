import { notFound } from "next/navigation";
import { venues } from "@/entities/venue";
import { VenuePage } from "@/widgets/VenuePage";

const venue = venues.find((v) => v.slug === "dk-serp-i-molot");

export default function DkSerpIMolotPage() {
  if (!venue) notFound();
  return <VenuePage venue={venue} />;
}
