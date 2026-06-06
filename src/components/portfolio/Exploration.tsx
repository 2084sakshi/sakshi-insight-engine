import { BarChart3, Brain, Code2, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Transforming raw data into actionable insights using SQL, Tableau, Excel, and analytical thinking.",
    tools: ["SQL", "Tableau", "Excel", "Power BI"],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Building intelligent applications using LLMs, vector databases, retrieval systems, and modern AI workflows.",
    tools: ["LangChain", "Gemini", "FAISS", "RAG"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Exploring network security, intrusion detection, threat analysis, and intelligent defense systems.",
    tools: ["NIDS", "ML Defense", "Threat Analysis"],
  },
  {
    icon: Code2,
    title: "Software Engineering",
    desc: "Developing scalable applications and solving real-world problems through software systems.",
    tools: ["React", "Node.js", "MongoDB", "APIs"],
  },
];

export function Exploration() {
  return (
    <section id="exploration" className="relative py-32 lg:py-40 bg-surface border-y border-border">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            01 — Areas of Exploration
          </div>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl tracking-tight text-ink">
            Four disciplines.{" "}
            <span className="italic text-primary">One mindset.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group relative h-full rounded-3xl border border-border bg-card p-8 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_30px_60px_-30px_oklch(0.32_0.14_268/0.25)] hover:-translate-y-1">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(600px circle at 50% 0%, oklch(0.45 0.18 295 / 0.06), transparent 50%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 grid place-items-center rounded-2xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-ink tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                  <div className="mt-6 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {c.tools.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
