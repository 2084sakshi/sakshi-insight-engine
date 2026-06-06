import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Journey } from "@/components/portfolio/Journey";
import { Exploration } from "@/components/portfolio/Exploration";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakshi Vinayak Raorane — Curious Engineer. Analytical Thinker." },
      { name: "description", content: "Final-year ECS student at VESIT turning complex problems into actionable insights through data, AI, and software." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Journey />
      <Exploration />
      <Work />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
