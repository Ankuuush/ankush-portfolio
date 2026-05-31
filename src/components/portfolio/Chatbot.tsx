import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Configure your backend endpoint here (or set VITE_CHATBOT_API_URL)
const API_URL = import.meta.env.VITE_API_URL as string;

const STORAGE_KEY = "ankush_chatbot_history";

type Message = { role: "user" | "assistant"; content: string };

const INTRO: Message = {
  role: "assistant",
  content: "Hey! I'm Ankush's AI assistant. Ask me anything about his work, skills, or experience.",
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return [INTRO];
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw) as Message[];
    } catch {
      /* ignore error */
    }
    return [INTRO];
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* ignore error */
    }
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const history = messages.filter((m) => m !== INTRO || messages.length > 1);
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/get-chatbot-response`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { reply: string };
      setMessages([...next, { role: "assistant", content: data.reply ?? "(no reply)" }]);
    } catch (err) {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "Sorry — I couldn't reach the server. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full",
          "flex items-center justify-center text-primary-foreground",
          "shadow-[--shadow-glow] transition-all duration-300 hover:scale-110",
          "animate-pulse-ring hover:cursor-pointer",
        )}
        style={{ background: "var(--gradient-primary)" }}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm",
          "origin-bottom-right transition-all duration-300",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <div className="flex h-128 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[--shadow-card] backdrop-blur">
          {/* Header */}
          <div
            className="flex items-center gap-3 border-b border-border px-4 py-3"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background/20">
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="font-display text-sm font-semibold text-primary-foreground">
                Ask about Ankush
              </p>
              <p className="text-xs text-primary-foreground/80">AI assistant · online</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                    m.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-secondary text-secondary-foreground",
                  )}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-secondary px-3.5 py-2 text-sm text-muted-foreground">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Thinking…
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="border-t border-border bg-background/40 p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Ask me anything…"
                className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-ring"
              />
              <Button
                size="icon"
                onClick={send}
                disabled={!input.trim() || loading}
                className="h-9 w-9 shrink-0 rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
