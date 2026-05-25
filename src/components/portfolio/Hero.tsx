import portrait from "@/assets/ankush-portrait.jpg";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Globe } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-electric/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-emerald/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs text-muted-foreground mb-6">
            <span className="size-2 rounded-full bg-emerald animate-pulse" />
            Available for opportunities · Bangalore, IN
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Ankush Kumar
            <span className="block text-muted-foreground/60 text-3xl sm:text-4xl lg:text-5xl mt-2 font-normal">
              Software Engineer <span className="text-electric">/</span> SDE-2
            </span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Frontend specialist crafting <span className="text-foreground">intuitive, performant UIs</span>{" "}
            with React & TypeScript — backed by Python / FastAPI on the server and
            an <span className="text-emerald">expanding curiosity for AI agents</span>.
            Currently engineering at Cargill.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-electric text-primary-foreground font-medium hover:shadow-[0_0_40px_-5px_oklch(0.74_0.18_220/0.7)] transition-all"
            >
              View My Work
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-surface/50 hover:bg-surface transition-colors font-medium"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-electric transition-colors"><Github className="size-5" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-electric transition-colors"><Linkedin className="size-5" /></a>
            <a href="https://ankush.netlify.app/" target="_blank" rel="noreferrer" className="hover:text-electric transition-colors"><Globe className="size-5" /></a>
            <span className="text-xs ml-2">github · linkedin · portfolio</span>
          </div>
        </div>

        {/* RIGHT — portrait */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-br from-electric/40 via-transparent to-emerald/40 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-border bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <img
                src={portrait}
                alt="Ankush Kumar portrait"
                width={1024}
                height={1280}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-6 animate-float">
              <div className="px-4 py-2 rounded-full bg-electric text-primary-foreground text-xs font-semibold shadow-[var(--shadow-glow)]">
                React · TypeScript · Tailwind
              </div>
            </div>
            <div className="absolute -bottom-4 -right-2 animate-float" style={{ animationDelay: "1.2s" }}>
              <div className="px-4 py-2 rounded-full bg-emerald text-accent-foreground text-xs font-semibold shadow-[var(--shadow-emerald)]">
                Python · FastAPI · AI Agents
              </div>
            </div>
            <div className="absolute top-1/2 -right-8 animate-float" style={{ animationDelay: "0.6s" }}>
              <div className="size-16 rounded-full bg-surface-2 border border-border grid place-items-center text-xs font-mono text-emerald">
                90%↓
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        scroll
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
