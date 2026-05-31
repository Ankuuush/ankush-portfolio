import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Toaster } from "@/components/ui/sonner";
import { Chatbot } from "@/components/portfolio/Chatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ankush Kumar — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ankush Kumar — SDE-2 building scalable frontend architectures, AI-integrated apps, and full-stack systems from Bangalore.",
      },
      { property: "og:title", content: "Ankush Kumar — Software Engineer" },
      {
        property: "og:description",
        content:
          "Scalable frontends, AI-driven solutions, full-stack engineering. Currently SDE-2 at Cargill.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Chatbot />
      <Toaster theme="dark" />
    </div>
  );
}
