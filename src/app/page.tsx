import { Hero, HeroGradient } from "@/widgets/Hero";
import { Cards } from "@/widgets/Cards";
import { About } from "@/widgets/About";
import { Slider } from "@/widgets/Slider";
import { Premises } from "@/widgets/Premises";
import { Gallery } from "@/widgets/Gallery";
import { Quote } from "@/widgets/Quote";

export default function Home() {
  return (
    <main className="relative">
      <HeroGradient />
      <Hero />
      <Cards />
      <About />
      <Slider />
      <Premises limit={10} />
      <Gallery />
      <Quote />
    </main>
  );
}
