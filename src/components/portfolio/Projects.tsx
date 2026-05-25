import { SectionLabel } from "./About";
import { ArrowUpRight, Award, Code, Trophy } from "lucide-react";

const projects = [
  {
    title: "College Placement Portal",
    tag: "Full-Stack · 90% automation",
    desc: "End-to-end placement management platform that automated 90% of the previously manual placement workflow — from student profiles to recruiter pipelines.",
    stack: ["React", "Node.js", "Firebase"],
    accent: "electric",
  },
  {
    title: "AgriSync AI Portal",
    tag: "AI · IoT · Supply chain",
    desc: "Agricultural intelligence tool combining storm simulation, IoT sensor ingestion, and AI-driven yield predictions to optimize the agri supply chain.",
    stack: ["Next.js", "FastAPI", "TensorFlow", "IoT"],
    accent: "emerald",
  },
];

const achievements = [
  { icon: <Trophy />, label: "Google Kick Start 2022", sub: "Global ranked" },
  { icon: <Code />, label: "Google Hash Code 2022", sub: "Team finalist" },
  { icon: <Award />, label: "Google Code Jam 2022", sub: "Qualified rounds" },
  { icon: <Trophy />, label: "CodeChef — 1622", sub: "Competitive rating" },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 max-w-7xl mx-auto px-6 lg:px-10">
      <SectionLabel num="03" label="Projects & Achievements" />
      <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold tracking-tight">
        Selected <span className="text-gradient">work</span>.
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-14">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative p-8 rounded-3xl border border-border bg-surface/60 overflow-hidden hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity ${
                p.accent === "electric" ? "bg-electric/30" : "bg-emerald/30"
              }`}
            />
            <div className="relative">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{p.tag}</div>
              <h3 className="mt-3 text-2xl font-display font-bold flex items-center gap-2">
                {p.title}
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-electric group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs font-mono rounded-md bg-surface-2 border border-border">{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Achievements */}
      <div className="mt-16">
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">// Achievements</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a) => (
            <div key={a.label} className="p-5 rounded-2xl border border-border bg-surface/40 hover:border-emerald/50 transition-colors">
              <div className="size-10 rounded-lg grid place-items-center bg-emerald/10 text-emerald mb-3">
                {a.icon}
              </div>
              <div className="font-semibold text-sm">{a.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{a.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
