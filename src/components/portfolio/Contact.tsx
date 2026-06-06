import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

const links = [
  { label: "Email", value: "sakshiraorane.2005@gmail.com", href: "mailto:sakshiraorane.2005@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/2084sakshi", href: "https://www.linkedin.com/in/2084sakshi", icon: Linkedin },
  { label: "GitHub", value: "github.com/2084sakshi", href: "https://github.com/2084sakshi", icon: Github },
  { label: "LeetCode", value: "leetcode.com/u/user7765Wi", href: "https://leetcode.com/u/user7765Wi/", icon: ArrowUpRight },
];

export function Contact() {
  return (
    <section id="contact" className="relative pt-32 lg:pt-40 pb-12">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            08 — Contact
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.02] tracking-tight text-ink text-balance max-w-5xl">
            Let's build something{" "}
            <span className="italic text-primary">meaningful</span> through data,
            technology, and innovation.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 grid md:grid-cols-2 gap-3 max-w-3xl">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <l.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {l.label}
                    </div>
                    <div className="text-sm text-foreground truncate">{l.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-24 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-display text-base">S</span>
            <div>
              <div className="text-sm font-medium">Sakshi Vinayak Raorane</div>
              <div className="text-xs text-muted-foreground">Curious. Persistent. Reflective.</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Designed & built with care.
          </div>
        </div>
      </div>
    </section>
  );
}
