import { SectionLabel } from "./About";
import { GraduationCap } from "lucide-react";

const roles = [
  {
    period: "Apr 2026 — Present",
    title: "Software Development Engineer",
    company: "Cargill Business Services",
    points: [
      "Leading frontend architecture for next-gen enterprise platforms.",
      "Integrated Azure SSO across internal product suite.",
    ],
  },
  {
    period: "Oct 2024 — Mar 2026",
    title: "Associate SDE — ERP",
    company: "Cargill Business Services",
    points: [
      "Drove ERP modernization initiatives end-to-end.",
      "Improved load times by 50% through chunking & lazy strategies.",
    ],
  },
  {
    period: "Aug 2023 — Sept 2024",
    title: "Associate Software Engineer",
    company: "Cargill Business Services",
    points: [
      "Reduced person-detection response time by 90% using TensorFlow.",
      "Shipped real-time vision pipelines into production.",
    ],
  },
  {
    period: "Feb 2023 — Aug 2023",
    title: "SDE Intern",
    company: "Cargill Business Services",
    points: ["Built internal tooling, learned the production muscle."],
  },
];

const skills = {
  "Frontend (specialty)": ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS", "Tailwind CSS"],
  Backend: ["Python", "FastAPI", "PostgreSQL"],
  "AI (learning)": ["OpenAI SDK", "AI Agents", "LLM Integration"],
  "Cloud & Tools": ["Azure", "AWS S3", "AWS EC2", "Firebase", "Apache ECharts"],
};

export function Experience() {
  return (
    <section id="experience" className="relative py-28 max-w-7xl mx-auto px-6 lg:px-10">
      <SectionLabel num="02" label="Experience & Skills" />
      <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold tracking-tight">
        A timeline of <span className="text-electric">building</span>.
      </h2>

      <div className="grid lg:grid-cols-12 gap-12 mt-14">
        {/* Timeline */}
        <ol className="lg:col-span-7 relative border-l border-border ml-3">
          {roles.map((r, i) => (
            <li key={i} className="pl-8 pb-10 relative group">
              <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full bg-electric ring-4 ring-background animate-pulse-ring" />
              <div className="text-xs font-mono text-muted-foreground">{r.period}</div>
              <h3 className="mt-1 text-xl font-semibold">{r.title}</h3>
              <div className="text-sm text-emerald">{r.company}</div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-electric">▸</span>
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="pl-8 relative">
            <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full bg-emerald ring-4 ring-background" />
            <div className="text-xs font-mono text-muted-foreground">2019 — 2023</div>
            <h3 className="mt-1 text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="size-5 text-emerald" /> B.E., Information Science
            </h3>
            <div className="text-sm text-muted-foreground">
              Acharya Institute of Technology · CGPA 8.44 / 10
            </div>
          </li>
        </ol>

        {/* Skills */}
        <div className="lg:col-span-5 space-y-6">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="p-6 rounded-2xl border border-border bg-surface/60">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                {cat}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-sm rounded-full border border-border bg-surface-2 hover:border-electric hover:text-electric transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
