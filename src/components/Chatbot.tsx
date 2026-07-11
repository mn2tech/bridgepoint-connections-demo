"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import {
  chatStarterQuestions,
  chatWelcomeMessage,
} from "@/lib/knowledge-base";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: chatWelcomeMessage },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const payload = (await response.json()) as {
        reply?: string;
        error?: string;
      };

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            payload.reply ??
            payload.error ??
            "I couldn't process that. Please email info@bridgepointconnections.org.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please email info@bridgepointconnections.org.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="fixed right-4 bottom-20 z-50 sm:right-6 sm:bottom-6">
      {open ? (
        <div
          className="mb-3 flex h-[min(34rem,70vh)] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-white shadow-[0_24px_80px_rgba(26,47,56,0.28)]"
          role="dialog"
          aria-label="Ask Phil assistant"
        >
          <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Ask Phil</p>
              <p className="text-xs text-white/65">Answers from verified site info</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chat-scroll flex-1 space-y-3 overflow-y-auto bg-paper px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    message.role === "user"
                      ? "bg-slate text-white"
                      : "border border-[var(--line)] bg-white text-ink"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {loading ? (
              <p className="text-xs text-muted">Thinking…</p>
            ) : null}
            <div ref={endRef} />
          </div>

          {messages.length <= 2 ? (
            <div className="flex flex-wrap gap-2 border-t border-[var(--line)] bg-white px-3 py-3">
              {chatStarterQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void sendMessage(question)}
                  className="rounded-full border border-[var(--line)] bg-mist px-3 py-1.5 text-left text-xs text-navy transition hover:border-slate-soft"
                >
                  {question}
                </button>
              ))}
            </div>
          ) : null}

          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-[var(--line)] bg-white p-3"
          >
            <label className="sr-only" htmlFor="chat-input">
              Ask a question
            </label>
            <input
              id="chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="input-field !min-h-11"
              placeholder="Ask about programs..."
              disabled={loading}
            />
            <button
              type="submit"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-navy transition hover:bg-gold-light disabled:opacity-60"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex h-14 items-center gap-2 rounded-full bg-gold px-4 text-navy shadow-[0_12px_40px_rgba(196,163,90,0.45)] transition hover:bg-gold-light"
        aria-expanded={open}
        aria-label={open ? "Close Ask Phil" : "Open Ask Phil"}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
        <span className="pr-1 text-sm font-semibold">
          {open ? "Close" : "Ask Phil"}
        </span>
      </button>
    </div>
  );
}
