import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/Hero";
import { Cards } from "@/widgets/Cards";
import { About } from "@/widgets/About";
import { Slider } from "@/widgets/Slider";
import { Premises } from "@/widgets/Premises";
import { Gallery } from "@/widgets/Gallery";
import { Quote } from "@/widgets/Quote";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden w-full max-w-480 mx-auto min-h-screen">
      <Header />
      <Hero />
      <Cards />
      <About />
      <Slider />
      <Premises />
      <Gallery />
      <Quote />
    </main>
  );
}
