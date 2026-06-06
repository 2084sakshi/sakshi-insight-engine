import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "journey", label: "Journey" },
  { id: "exploration", label: "Exploration" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "hero";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          className={`flex items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? "border-border bg-background/80 backdrop-blur-xl shadow-[0_2px_30px_-12px_oklch(0.32_0.14_268/0.18)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="grid place-items-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-display text-base">
              S
            </span>
            <span className="text-sm font-medium tracking-tight hidden sm:block">
              Sakshi Raorane
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-3 py-1.5 text-[13px] rounded-full transition-colors ${
                  active === s.id
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="text-[13px] font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
