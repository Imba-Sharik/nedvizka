import { Button } from "@/shared/ui";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight">Nedvizka</h1>
        <p className="text-muted-foreground text-lg">
          Платформа недвижимости
        </p>
        <Button size="lg">Начать</Button>
      </div>
    </div>
  );
}
