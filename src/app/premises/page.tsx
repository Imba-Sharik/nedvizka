import { Premises } from "@/widgets/Premises";
import { Quote } from "@/widgets/Quote";

export const metadata = { title: "Доступные помещения" };

export default function PremisesPage() {
  return (
    <main>
      <Premises standalone />
      <Quote />
    </main>
  );
}
