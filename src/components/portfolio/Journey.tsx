import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const entries = [
  {
    year: "2022",
    title: "The Beginning",
    body: "Started Bachelor of Technology in Electronics and Computer Science at VESIT. Built strong foundations in programming, problem solving, and technology.",
  },
  {
    year: "2023",
    title: "Discovering Data",
    body: "Explored data analytics and visualization. Completed the Tata Forage Data Visualization Virtual Internship. Developed an interest in transforming data into business insights.",
  },
  {
    year: "2024",
    title: "Building Systems",
    body: "Expanded into software development and full-stack technologies. Worked on practical projects involving databases, APIs, and user-centric systems.",
  },
  {
    year: "2025",
    title: "Shipping in Production",
    body: "Backend Development Internship at Zymo. Worked on backend functionality, API integration, SEO optimization, and system workflows. Built AI and machine learning projects.",
  },
  {
    year: "2026",
    title: "Intelligent Systems",
    body: "Focused on data analytics, AI applications, cybersecurity, and placement preparation. Continuously building projects and exploring intelligent systems.",
  },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 70%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">02 — Journey</div>
            <h2 className="mt-4 font-display text-5xl lg:text-6xl tracking-tight text-ink">
              A path shaped by <span className="italic text-primary">curiosity</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Every year added a new lens — from foundational engineering, to
              data-driven thinking, to building intelligent systems that solve
              real problems.
            </p>
          </div>

          <div ref={ref} className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-primary to-accent origin-top"
            />

            <div className="space-y-16">
              {entries.map((e, i) => (
                <motion.div
                  key={e.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-2 grid place-items-center">
                    <div className="h-4 w-4 rounded-full bg-background border-2 border-primary" />
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl text-primary">{e.year}</span>
                    <span className="text-sm font-medium tracking-wide text-muted-foreground">
                      {e.title}
                    </span>
                  </div>
                  <p className="mt-3 text-foreground/80 leading-relaxed max-w-xl">
                    {e.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
