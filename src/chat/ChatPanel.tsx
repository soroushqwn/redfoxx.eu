import { FormEvent, useEffect, useRef, useState } from "react";
import { CalendarCheck, Send, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CALENDLY_URL, CHAT_ENDPOINT, MAX_CHARS, MAX_USER_MESSAGES, WHATSAPP_NUMBER } from "./config";

type Msg = { role: "user" | "assistant"; content: string };
type Booking = { name?: string; email?: string };

const bookingUrl = ({ name, email }: Booking) => {
  const q = new URLSearchParams();
  if (name) q.set("name", name);
  if (email) q.set("email", email);
  const s = q.toString();
  return s ? `${CALENDLY_URL}?${s}` : CALENDLY_URL;
};

const ChatPanel = ({ onClose }: { onClose: () => void }) => {
  const { lang, t } = useLang();
  const c = t.chat;
  const [messages, setMessages] = useState<Msg[]>([]);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const [errorCode, setErrorCode] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const userCount = messages.filter((m) => m.role === "user").length;
  const limitReached = userCount >= MAX_USER_MESSAGES;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, busy, booking]);

  const send = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy || limitReached) return;
    const next: Msg[] = [...messages, { role: "user", content: text.slice(0, MAX_CHARS) }];
    setMessages(next);
    setInput("");
    setBusy(true);
    setFailed(false);
    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, lang, website: honeypot }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(`${res.status} ${body?.error ?? ""}`.trim());
      }
      const data: { reply: string; actions?: { type: string; name?: string; email?: string }[] } = await res.json();
      if (!data.reply) throw new Error("empty");
      setMessages([...next, { role: "assistant", content: data.reply }]);
      const b = data.actions?.find((a) => a.type === "booking");
      if (b) setBooking({ name: b.name, email: b.email });
    } catch (err) {
      setErrorCode(err instanceof Error ? err.message : "");
      setFailed(true);
      // Drop the unanswered question so the history stays user/assistant alternating.
      setMessages(next.slice(0, -1));
      setInput(text);
    } finally {
      setBusy(false);
    }
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(c.whatsappText)}`;

  return (
    <div
      role="dialog"
      aria-label={c.title}
      className="fixed inset-x-2 bottom-2 z-50 flex max-h-[min(36rem,calc(100dvh-1rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-[24rem]"
    >
      <header className="flex items-start justify-between gap-3 border-b border-border bg-card px-4 py-3">
        <div>
          <p className="font-display text-base font-semibold">{c.title}</p>
          <p className="text-xs text-muted-foreground">{c.subtitle}</p>
        </div>
        <button type="button" onClick={onClose} aria-label={c.close} className="rounded-md p-1 text-muted-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm" role="log" aria-live="polite">
        <p className="rounded-xl bg-card px-3 py-2 text-foreground">{c.welcome}</p>
        <p className="text-xs text-muted-foreground">{c.disclaimer}</p>
        {messages.map((m, i) => (
          <p
            key={i}
            className={
              m.role === "user"
                ? "ml-8 whitespace-pre-wrap rounded-xl bg-primary px-3 py-2 text-primary-foreground"
                : "mr-8 whitespace-pre-wrap rounded-xl bg-card px-3 py-2 text-foreground"
            }
          >
            {m.content}
          </p>
        ))}
        {busy && <p className="text-xs text-muted-foreground">{c.thinking}</p>}
        {booking && (
          <a
            href={bookingUrl(booking)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground hover:opacity-90"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            {c.book}
          </a>
        )}
        {(failed || limitReached) && (
          <p role="alert" className="rounded-xl border border-border px-3 py-2 text-foreground">
            {limitReached ? c.limit : c.error}
            {/* Only when previewing with ?chat=1: helps whoever tests it. */}
            {!limitReached && errorCode && new URLSearchParams(window.location.search).has("chat") && (
              <span className="mt-1 block text-xs text-muted-foreground">({errorCode})</span>
            )}
          </p>
        )}
        <div ref={endRef} />
      </div>

      <div className="border-t border-border px-4 pt-2 text-xs">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
          {c.whatsapp}
        </a>
      </div>
      <form onSubmit={send} className="flex items-end gap-2 px-4 pb-3 pt-2">
        {/* Honeypot: invisible to people, bots fill it in. */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="absolute -left-[9999px] h-0 w-0 opacity-0" />
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              e.currentTarget.form?.requestSubmit();
            }
          }}
          rows={1}
          maxLength={MAX_CHARS}
          placeholder={c.placeholder}
          aria-label={c.placeholder}
          disabled={limitReached}
          className="max-h-28 min-h-[2.5rem] flex-1 resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        />
        <button type="submit" disabled={busy || !input.trim() || limitReached} aria-label={c.send} className="rounded-lg bg-primary p-2.5 text-primary-foreground disabled:opacity-50">
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

export default ChatPanel;
