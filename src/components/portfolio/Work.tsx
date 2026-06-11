import { ArrowUpRight, FileText, Github, Globe, LayoutDashboard } from "lucide-react";
import { Reveal } from "./Reveal";

type Project = {
  title: string;
  description: string;
  tech: string[];
  highlight: string;
  category: string;
  github?: string;
  live?: string;
  dashboard?: string;
  article?: string;
  large?: boolean;
  visual: "data" | "shield" | "ai" | "stack" | "chart" | "mail";
};

const projects: Project[] = [
  {
    title: "Google Data Analytics Capstone Project",
    description:
      "Performed end-to-end data analysis involving data collection, cleaning, transformation, exploratory analysis, visualization, and business insight generation. Developed SQL queries for data extraction, aggregation, filtering, and trend analysis. Identified customer behavior patterns and actionable business insights through analytical reporting.",
    tech: ["SQL", "Excel", "Data Analytics"],
    highlight: "End-to-end data analysis",
    category: "Data Analytics",
    github: "https://github.com/2084sakshi/google-captsone-project/blob/main/README.md",
    article: "https://medium.com/@sakshiraorane.2005/phase-5-act-turning-insights-into-action-final-step-of-the-google-data-analytics-capstone-fb3cefce2b59",
    visual: "data",
  },
  {
    title: "Road Accident Analysis Dashboard",
    description:
      "Developed an interactive Power BI dashboard analyzing accident trends, casualty statistics, severity patterns, vehicle involvement, road conditions, and geographical distributions. Built KPI-driven reports and analytical visualizations to support data-driven decision making.",
    tech: ["Power BI", "Excel"],
    highlight: "Interactive Power BI dashboard",
    category: "Data Analytics",
    github: "https://github.com/2084sakshi/data-analysis/blob/main/road-accident-analysis/README.md",
    dashboard: "https://2084sakshi.github.io/data-analysis/",
    visual: "chart",
  },
  {
    title: "EV Sales Analysis Dashboard",
    description:
      "Built a business intelligence dashboard analyzing EV sales performance, market growth, regional adoption, market share, and manufacturer trends. Created KPI reports and DAX measures to evaluate year-over-year growth and business performance.",
    tech: ["Power BI", "Excel", "DAX"],
    highlight: "Business intelligence dashboard",
    category: "Data Analytics",
    github: "https://github.com/2084sakshi/data-analysis/blob/main/Vehicles%20_Sales%20Analysis/README.md",
    dashboard: "https://2084sakshi.github.io/data-analysis/",
    visual: "chart",
  },
  {
    title: "MedConnect360",
    description:
      "Built a full-stack doctor-patient appointment management platform featuring authentication, appointment booking, patient management, doctor workflows, and REST APIs.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    highlight: "Full-stack MERN platform",
    category: "Software Engineering",
    visual: "stack",
  },
  {
    title: "Email-GPT",
    description:
      "Developed an AI-powered email generation platform that creates customized emails based on user requirements, tone, subject, and content preferences.",
    tech: ["Python", "Flask", "Generative AI"],
    highlight: "AI-powered email generation",
    category: "Software Engineering",
    visual: "mail",
  },
  {
    title: "Prep.AI",
    description:
      "Developed an AI-powered platform using LLMs, FAISS, and LangChain for resume analysis and interview preparation. Generates ATS feedback, resume improvement recommendations, and personalized interview guidance.",
    tech: ["Python", "Gemini API", "FAISS", "LangChain", "Streamlit"],
    highlight: "AI interview preparation",
    category: "Generative AI",
    github: "https://github.com/2084sakshi/prep.ai",
    live: "https://prepai.streamlit.app/",
    visual: "ai",
  },
  {
    title: "Network Intrusion Detection and Prevention System",
    description:
      "Developed a full-stack cybersecurity platform capable of monitoring network traffic, detecting malicious activities, classifying threats, generating alerts, maintaining security logs, and visualizing network events through real-time dashboards.",
    tech: ["Python", "Flask", "SQLite", "Machine Learning", "Cybersecurity", "React"],
    highlight: "Cybersecurity + ML platform",
    category: "Cybersecurity",
    visual: "shield",
  },
];

function Visual({ kind }: { kind: Project["visual"] }) {
  if (kind === "data") {
    return (
      <svg viewBox="0 0 400 160" className="w-full h-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.45 0.18 295)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.45 0.18 295)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,130 L40,110 L80,120 L120,85 L160,95 L200,60 L240,70 L280,40 L320,55 L360,25 L400,35 L400,160 L0,160 Z"
          fill="url(#g1)"
        />
        <path
          d="M0,130 L40,110 L80,120 L120,85 L160,95 L200,60 L240,70 L280,40 L320,55 L360,25 L400,35"
          fill="none"
          stroke="oklch(0.32 0.14 268)"
          strokeWidth="2"
        />
        {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
          <circle key={x} cx={x} cy={[110,120,85,95,60,70,40,55,25][i]} r="3" fill="oklch(0.32 0.14 268)" />
        ))}
      </svg>
    );
  }
  if (kind === "chart") {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full">
        <g stroke="oklch(0.32 0.14 268)" strokeOpacity="0.15" strokeWidth="1">
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1="20" y1={30 + i * 25} x2="180" y2={30 + i * 25} />
          ))}
        </g>
        <rect x="30" y="80" width="28" height="50" rx="3" fill="oklch(0.45 0.18 295)" fillOpacity="0.5" />
        <rect x="66" y="55" width="28" height="75" rx="3" fill="oklch(0.32 0.14 268)" fillOpacity="0.25" />
        <rect x="102" y="40" width="28" height="90" rx="3" fill="oklch(0.45 0.18 295)" fillOpacity="0.5" />
        <rect x="138" y="65" width="28" height="65" rx="3" fill="oklch(0.32 0.14 268)" fillOpacity="0.25" />
      </svg>
    );
  }
  if (kind === "shield") {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full">
        <g stroke="oklch(0.32 0.14 268)" strokeWidth="1.2" fill="none" opacity="0.6">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="0" y1={i * 20} x2="200" y2={i * 20} />
          ))}
        </g>
        <path
          d="M100 25 L150 45 L150 90 Q150 120 100 135 Q50 120 50 90 L50 45 Z"
          fill="oklch(0.32 0.14 268 / 0.08)"
          stroke="oklch(0.32 0.14 268)"
          strokeWidth="1.5"
        />
        <path d="M85 85 L97 100 L120 70" stroke="oklch(0.45 0.18 295)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "ai") {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full">
        {[
          [40, 40], [40, 80], [40, 120],
          [100, 30], [100, 70], [100, 110], [100, 140],
          [160, 60], [160, 100],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill={i % 3 === 0 ? "oklch(0.45 0.18 295)" : "oklch(0.32 0.14 268)"} />
        ))}
        <g stroke="oklch(0.32 0.14 268)" strokeOpacity="0.3" strokeWidth="1">
          {[40, 80, 120].flatMap((y1) =>
            [30, 70, 110, 140].map((y2) => <line key={`${y1}-${y2}`} x1="40" y1={y1} x2="100" y2={y2} />)
          )}
          {[30, 70, 110, 140].flatMap((y1) =>
            [60, 100].map((y2) => <line key={`b-${y1}-${y2}`} x1="100" y1={y1} x2="160" y2={y2} />)
          )}
        </g>
      </svg>
    );
  }
  if (kind === "mail") {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full">
        <rect x="35" y="35" width="130" height="90" rx="8" fill="none" stroke="oklch(0.32 0.14 268)" strokeWidth="1.5" />
        <path d="M35 45 L100 85 L165 45" stroke="oklch(0.32 0.14 268)" strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="95" r="4" fill="oklch(0.45 0.18 295)" />
        <path d="M85 95 Q100 110 115 95" stroke="oklch(0.45 0.18 295)" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {[20, 50, 80, 110].map((y, i) => (
        <rect key={y} x={30 + i * 4} y={y} width={140 - i * 8} height="22" rx="4"
          fill="oklch(0.32 0.14 268)" fillOpacity={0.08 + i * 0.04}
          stroke="oklch(0.32 0.14 268)" strokeOpacity="0.3" strokeWidth="1" />
      ))}
    </svg>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className={`group relative rounded-3xl border border-border bg-card overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-40px_oklch(0.32_0.14_268/0.3)] ${p.large ? "md:col-span-2 md:row-span-2" : ""}`}>
      <div className={`grid ${p.large ? "lg:grid-cols-[1.1fr_1fr]" : "grid-rows-[auto_1fr]"} h-full`}>
        <div className={`relative bg-gradient-to-br from-muted/60 to-surface ${p.large ? "min-h-[280px]" : "h-44"} p-8 flex items-center justify-center border-b lg:border-b-0 ${p.large ? "lg:border-r" : ""} border-border overflow-hidden`}>
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-wider text-muted-foreground">
            {p.highlight}
          </div>
          <div className="w-full max-w-[320px] transition-transform duration-700 group-hover:scale-105">
            <Visual kind={p.visual} />
          </div>
        </div>
        <div className="p-7 lg:p-9 flex flex-col">
          <h3 className={`font-display tracking-tight text-ink ${p.large ? "text-4xl" : "text-2xl"}`}>
            {p.title}
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
            {p.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-border text-foreground/70">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-7 flex items-center gap-3">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors">
                <Github className="h-4 w-4" /> Code
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors">
                <Globe className="h-4 w-4" /> Live
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                04 — Featured Work
              </div>
              <h2 className="mt-4 font-display text-5xl lg:text-6xl tracking-tight text-ink">
                Selected <span className="italic text-primary">projects</span>.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              A small collection of things I've built — from analytics dashboards
              to AI agents.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5 auto-rows-fr">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className={p.large ? "md:col-span-2 md:row-span-2" : ""}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
