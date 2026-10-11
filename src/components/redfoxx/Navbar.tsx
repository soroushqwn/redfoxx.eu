import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoLockup from "@/assets/redfoxx-lockup.png";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { HTML_LANG, LANGS, MULTILINGUAL_PAGES, pagePath, parsePath } from "@/seo/site";

const LangToggle = ({
  lang,
  pathname,
  className = "",
}: {
  lang: Lang;
  pathname: string;
  className?: string;
}) => {
  const { page } = parsePath(pathname);
  const target = page && MULTILINGUAL_PAGES.includes(page) ? page : "home";
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-border bg-card/40 backdrop-blur p-0.5 ${className}`}
    >
      {LANGS.map((l) => (
        <a
          key={l}
          href={pagePath(target, l)}
          hrefLang={HTML_LANG[l]}
          className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-colors ${
            lang === l
              ? "bg-gradient-primary text-primary-foreground shadow-ember"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-current={lang === l ? "true" : undefined}
        >
          {l}
        </a>
      ))}
    </div>
  );
};

export const Navbar = () => {
  const { lang, t } = useLang();
  const { pathname } = useLocation();
  const home = pagePath("home", lang);
  const isHome = parsePath(pathname).page === "home";
  const homeHref = (href: string) => (isHome ? href : `${home}${href}`);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between gap-3">
        <Link to={home} className="flex items-center group">
          <img src={logoLockup} alt="REDFOXX Sales Solutions" className="h-10 md:h-11 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border bg-card/40 backdrop-blur px-1.5 py-1.5">
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={homeHref(l.href)}
              className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/jobs"
            className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
          >
            {t.nav.jobs}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <LangToggle lang={lang} pathname={pathname} className="hidden sm:inline-flex" />
          <a
            href={homeHref("#contact")}
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-ember hover:scale-[1.03] transition-transform"
          >
            {t.nav.bookCall}
          </a>
          <button
            aria-label={t.nav.menuLabel}
            className="lg:hidden rounded-lg border border-border p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden container mt-3 card-glass rounded-2xl p-3 flex flex-col">
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={homeHref(l.href)}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm hover:bg-secondary rounded-lg"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/jobs"
            onClick={() => setOpen(false)}
            className="px-4 py-3 text-sm hover:bg-secondary rounded-lg"
          >
            {t.nav.jobs}
          </Link>
          <div className="px-4 py-3 flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{t.nav.language}</span>
            <LangToggle lang={lang} pathname={pathname} />
          </div>
        </div>
      )}
    </header>
  );
};
