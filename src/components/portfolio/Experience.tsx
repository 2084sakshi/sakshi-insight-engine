import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 lg:py-40 bg-surface border-y border-border">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-[1fr_1.5fr] gap-16">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            03 — Experience
          </div>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl tracking-tight text-ink">
            Where I've <span className="italic text-primary">shipped</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Real teams. Real users. Real code in production.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group relative rounded-3xl border border-border bg-card p-8 lg:p-10 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_30px_60px_-30px_oklch(0.32_0.14_268/0.25)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center font-display text-lg">
                    Z
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Zymo</div>
                    <h3 className="font-display text-2xl text-ink leading-tight">
                      Backend Development Intern
                    </h3>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground tabular-nums">
                Jan 2025 — Apr 2025
              </div>
            </div>

            <ul className="mt-8 space-y-3.5">
              {[
                "Redesigned and redeveloped the company website end-to-end.",
                "Integrated third-party APIs into existing workflows.",
                "Improved performance and SEO across core pages.",
                "Owned backend logic and workflow design for new features.",
              ].map((h) => (
                <li key={h} className="flex items-start gap-3 text-foreground/85">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
