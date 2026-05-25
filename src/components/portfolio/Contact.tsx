import { SectionLabel } from "./About";
import { Mail, Phone, ArrowUpRight, Github, Linkedin, Globe } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_sepuiqw";
const EMAILJS_TEMPLATE_ID = "template_v30vmi9";
const EMAILJS_PUBLIC_KEY = "oFmy3I7JgdpcnQAfS";

export function Contact() {
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent — I'll reply soon ✦");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again or email directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 max-w-7xl mx-auto px-6 lg:px-10">
      <SectionLabel num="04" label="Contact" />
      <div className="grid lg:grid-cols-12 gap-12 mt-10">
        <div className="lg:col-span-5">
          <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Let's <br /><span className="text-gradient">build</span> something.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Have a role, a project, or just want to nerd out about scalable frontends?
            The inbox is open.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:kumarankush1709@gmail.com" className="flex items-center gap-3 group">
              <span className="size-10 rounded-xl bg-electric/10 text-electric grid place-items-center"><Mail className="size-4" /></span>
              <span className="text-sm group-hover:text-electric transition-colors">kumarankush1709@gmail.com</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="size-10 rounded-xl bg-emerald/10 text-emerald grid place-items-center"><Phone className="size-4" /></span>
              <span className="text-sm text-muted-foreground">Available on request</span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {[
              { href: "https://github.com/", icon: <Github className="size-4" /> },
              { href: "https://linkedin.com/", icon: <Linkedin className="size-4" /> },
              { href: "https://ankush.netlify.app/", icon: <Globe className="size-4" /> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                 className="size-10 rounded-full border border-border bg-surface/60 hover:bg-electric hover:text-primary-foreground hover:border-electric transition-all grid place-items-center">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="lg:col-span-7 p-8 lg:p-10 rounded-3xl border border-border bg-surface/60 space-y-6">
          <Field label="Your name" name="full_name" placeholder="Jane Doe" />
          <Field label="Email address" name="email" type="email" placeholder="jane@company.com" />
          <Field label="Tell me about the project" name="message" textarea placeholder="What are you building?" />
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-electric text-primary-foreground font-medium hover:shadow-[0_0_40px_-5px_oklch(0.74_0.18_220/0.7)] transition-all disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send message"}
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </form>
      </div>

      <footer className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Ankush Kumar · Crafted in Bangalore</div>
        <div className="font-mono">v2.0 — built with intent</div>
      </footer>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, textarea = false,
}: { label: string; name: string; type?: string; placeholder?: string; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea
          name={name} placeholder={placeholder} rows={4} required
          className="mt-2 w-full bg-transparent border-b border-border focus:border-electric outline-none py-3 text-base resize-none transition-colors"
        />
      ) : (
        <input
          type={type} name={name} placeholder={placeholder} required
          className="mt-2 w-full bg-transparent border-b border-border focus:border-electric outline-none py-3 text-base transition-colors"
        />
      )}
    </label>
  );
}
