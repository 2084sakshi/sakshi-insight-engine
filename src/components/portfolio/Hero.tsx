import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-60 pointer-events-none" />
      <div
        className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle, oklch(0.45 0.18 295 / 0.18) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle, oklch(0.32 0.14 268 / 0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl w-full px-5 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            Available for opportunities · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[clamp(2.6rem,6vw,5.25rem)] leading-[1.02] tracking-tight text-balance text-ink"
          >
            Turning complex problems into{" "}
            <span className="italic text-primary">actionable insights</span>{" "}
            through data and technology.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Final-year Electronics and Computer Science student at VESIT —
            passionate about data analytics, artificial intelligence, cybersecurity,
            and building solutions that create meaningful impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >

            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-primary transition-colors"
            >
              View Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={resumeAsset.url}
              download="Sakshi_Raorane_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-foreground/40 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-14 flex items-center gap-8 text-xs text-muted-foreground"
          >
            <div>
              <div className="font-display text-2xl text-foreground">5.6M+</div>
              <div className="mt-1 uppercase tracking-wider">Records analyzed</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">4+</div>
              <div className="mt-1 uppercase tracking-wider">Shipped projects</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">VESIT</div>
              <div className="mt-1 uppercase tracking-wider">B.Tech ECS</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-border bg-card overflow-hidden">
              <img
                src={heroIllustration}
                alt="Editorial illustration of Sakshi Raorane combining data, AI, and software."
                width={1024}
                height={1024}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto"
              />

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -left-4 top-12 rounded-2xl bg-card border border-border p-3 shadow-[0_10px_40px_-20px_oklch(0.32_0.14_268/0.4)]"
          >
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Now learning</div>
            <div className="text-sm font-medium mt-0.5">Vector Databases</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="absolute -right-4 bottom-16 rounded-2xl bg-card border border-border p-3 shadow-[0_10px_40px_-20px_oklch(0.32_0.14_268/0.4)]"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <div className="text-xs font-medium">Building Prep.AI</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs flex flex-col items-center gap-2">
        <span className="uppercase tracking-[0.2em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.div>
      </div>
    </section>
  );
}
