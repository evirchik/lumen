import { About } from "@/widgets/about/about";
import { Cases } from "@/widgets/cases/cases";
import { Hero } from "@/widgets/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cases />
      <About />
    </main>
  );
}
