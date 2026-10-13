import { lazy, Suspense, useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { CHAT_PUBLIC } from "./config";

// The panel (and its code) is only downloaded once the visitor opens the chat.
const ChatPanel = lazy(() => import("./ChatPanel"));

export const ChatWidget = () => {
  const { t } = useLang();
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);

  // Decided on the client only, so the pre-rendered HTML is identical for everyone.
  useEffect(() => {
    setEnabled(CHAT_PUBLIC || new URLSearchParams(window.location.search).get("chat") === "1");
  }, []);

  if (!enabled) return null;

  return (
    <>
      {open ? (
        <Suspense fallback={null}>
          <ChatPanel onClose={() => setOpen(false)} />
        </Suspense>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.chat.open}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          {t.chat.open}
        </button>
      )}
    </>
  );
};
