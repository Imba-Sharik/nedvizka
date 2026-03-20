import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/Hero";
import { Cards } from "@/widgets/Cards";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden w-full max-w-480 mx-auto min-h-screen">
      <Header />
      <Hero />
      <Cards />
    </main>
  );
}
