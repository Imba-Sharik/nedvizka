import { Hero, HeroLines } from "@/widgets/Hero";
import { Cards } from "@/widgets/Cards";
import { About } from "@/widgets/About";
import { Slider } from "@/widgets/Slider";
import { Premises } from "@/widgets/Premises";
// import { Gallery } from "@/widgets/Gallery";

export default function Home() {
  return (
    <main className="relative">
      {/* <div className="absolute inset-0 -translate-y-[140px] min-[650px]:translate-y-0 overflow-clip min-[1450px]:overflow-visible pointer-events-none z-10">
        <HeroLines />
      </div> */}
      <Hero />
      <Cards />
      <About />
      <Slider />
      <Premises limit={10} />
      {/* <Gallery /> */}
    </main>
  );
}
