import { Reveal } from "./Reveal";

const groups = [
  { label: "Programming", items: ["Python", "C++", "SQL", "JavaScript"] },
  { label: "Analytics", items: ["SQL", "Excel", "Tableau", "Power BI"] },
  { label: "AI & ML", items: ["LangChain", "FAISS", "Gemini API", "Machine Learning"] },
  { label: "Development", items: ["React", "Node.js", "Express.js", "MongoDB"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Streamlit"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            04 — Skills & Tools
          </div>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl tracking-tight text-ink">
            The <span className="italic text-primary">toolkit</span>.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div className="grid lg:grid-cols-[1fr_2.5fr] gap-6 py-7 group">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                  <h3 className="font-display text-2xl text-ink">{g.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="px-3.5 py-1.5 rounded-full text-sm border border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
