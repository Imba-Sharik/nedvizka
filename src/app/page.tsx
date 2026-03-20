import { Header } from "@/widgets/header";

export default function Home() {
  return (
    <main className="relative w-full max-w-480 mx-auto min-h-screen">
      <Header />

      {/* Gradient blur */}
      <div className="absolute top-30 left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <div className="gradient-blur" />
      </div>
    </main>
  );
}
