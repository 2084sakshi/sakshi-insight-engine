import { Award } from "lucide-react";
import { Reveal } from "./Reveal";

const certs = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    year: "2024",
  },
  {
    title: "Data Visualization Virtual Internship",
    issuer: "Tata · Forage",
    year: "2023",
  },
  {
    title: "Backend Development Internship",
    issuer: "Zymo",
    year: "2025",
  },
  {
    title: "AI / Machine Learning Projects",
    issuer: "Self-directed · Capstones",
    year: "2025",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 lg:py-40 bg-surface border-y border-border">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            07 — Certifications
          </div>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl tracking-tight text-ink">
            Continuous <span className="italic text-primary">learning</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300">
                <div className="h-11 w-11 rounded-xl bg-primary/8 text-primary grid place-items-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-medium text-ink leading-snug">{c.title}</h3>
                    <span className="text-xs text-muted-foreground tabular-nums">{c.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
