import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Exploration } from "@/components/portfolio/Exploration";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakshi Vinayak Raorane — Curious Engineer. Analytical Thinker." },
      { name: "description", content: "Final-year ECS student at VESIT turning complex problems into actionable insights through data, AI, and software." },
      { property: "og:title", content: "Sakshi Vinayak Raorane — Portfolio" },
      { property: "og:description", content: "Curious engineer. Analytical thinker. Problem solver." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sakshi Vinayak Raorane — Portfolio" },
      { name: "twitter:description", content: "Curious engineer. Analytical thinker. Problem solver." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Exploration />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
