import { Bike, Trophy, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 max-w-7xl mx-auto px-6 lg:px-10">
      <SectionLabel num="01" label="About" />
      <div className="grid lg:grid-cols-12 gap-12 mt-10">
        <div className="lg:col-span-7">
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Frontend-first engineer, shipping <span className="text-gradient">clean, performant</span> interfaces.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a software engineer at <span className="text-foreground">Cargill Business Services</span>,
              specialising in <span className="text-electric">React, TypeScript and modern frontend
              architecture</span> — building enterprise UIs that stay fast at scale and a joy to extend.
            </p>
            <p>
              On the server side I'm comfortable with <span className="text-foreground">Python, FastAPI
              and PostgreSQL</span>, and I'm currently going deeper into{" "}
              <span className="text-emerald">AI — building agents with the OpenAI SDK</span> and wiring
              them into real product flows. I care about the unglamorous wins: fewer renders,
              smaller bundles, clearer abstractions.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <FactCard icon={<Code2 className="size-5" />} title="3+ years shipping" body="From SDE Intern to SDE-2 across ERP, internal tools, and AI platforms." />
          <FactCard icon={<Bike className="size-5" />} title="Long-distance rider" body="Weekends spent touring on the bike — Bangalore to wherever the road ends." accent="emerald" />
          <FactCard icon={<Trophy className="size-5" />} title="Court competitor" body="Badminton keeps the reflexes — and the competitive streak — sharp." />
        </div>
      </div>
    </section>
  );
}

function FactCard({
  icon, title, body, accent = "electric",
}: { icon: React.ReactNode; title: string; body: string; accent?: "electric" | "emerald" }) {
  const accentClass = accent === "electric" ? "text-electric bg-electric/10" : "text-emerald bg-emerald/10";
  return (
    <div className="group p-6 rounded-2xl border border-border bg-surface/60 hover:bg-surface transition-all hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <span className={`size-10 rounded-xl grid place-items-center ${accentClass}`}>{icon}</span>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{body}</p>
        </div>
      </div>
    </div>
  );
}

export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
      <span className="text-electric">{num}</span>
      <span className="h-px w-10 bg-border" />
      <span>{label}</span>
    </div>
  );
}
