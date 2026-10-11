import { createContext, useContext, ReactNode } from "react";
import { translations, Lang, Translations } from "./translations";

type Ctx = { lang: Lang; t: Translations };

const LanguageContext = createContext<Ctx | null>(null);

/** Language comes from the URL (set per route group), never from localStorage. */
export const LanguageProvider = ({ lang, children }: { lang: Lang; children: ReactNode }) => (
  <LanguageContext.Provider value={{ lang, t: translations[lang] }}>{children}</LanguageContext.Provider>
);

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};
