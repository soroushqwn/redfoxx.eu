// Single source of truth for pages, URLs and per-page metadata.
// Imported by the app (Seo component, language switcher) AND by vite.config.ts (sitemap).
// Keep this file free of JSX / path aliases.

export const SITE_URL = "https://redfoxx.be";
export const OG_IMAGE = `${SITE_URL}/android-chrome-512x512.png`;

/** Date used in the JobPosting structured data. Update it when the vacancy is (re)published. */
export const JOB_DATE_POSTED = "2026-10-12";

export type Lang = "nl" | "en" | "fr";
export const LANGS: Lang[] = ["nl", "en", "fr"];

export const HTML_LANG: Record<Lang, string> = { nl: "nl-BE", en: "en", fr: "fr-BE" };
export const OG_LOCALE: Record<Lang, string> = { nl: "nl_BE", en: "en_GB", fr: "fr_BE" };

export type PageKey = "home" | "outbound" | "inbound" | "jobs";

/** Pages that exist in all three languages (get hreflang alternates). */
export const MULTILINGUAL_PAGES: PageKey[] = ["home", "outbound", "inbound"];

const SLUG: Record<PageKey, string> = { home: "", outbound: "outbound", inbound: "inbound", jobs: "jobs" };

/** Router path, e.g. "/", "/outbound", "/en/", "/fr/inbound". */
export const pagePath = (page: PageKey, lang: Lang = "nl"): string => {
  const prefix = lang === "nl" ? "" : `/${lang}`;
  const slug = SLUG[page];
  if (!slug) return `${prefix}/`;
  return `${prefix}/${slug}`;
};

export const pageUrl = (page: PageKey, lang: Lang = "nl") => `${SITE_URL}${pagePath(page, lang)}`;

/** Resolve a pathname to its page + language. */
export const parsePath = (pathname: string): { lang: Lang; page: PageKey | null } => {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const m = clean.match(/^\/(en|fr)(\/.*)?$/);
  const lang: Lang = m ? (m[1] as Lang) : "nl";
  const rest = (m ? m[2] : clean) || "/";
  const entry = (Object.keys(SLUG) as PageKey[]).find((k) => `/${SLUG[k]}` === rest || (SLUG[k] === "" && rest === "/"));
  return { lang, page: entry ?? null };
};

type Meta = { title: string; description: string };

export const META: Record<PageKey, Partial<Record<Lang, Meta>>> = {
  home: {
    nl: {
      title: "REDFOXX | Outbound & inbound sales voor technische B2B",
      description:
        "REDFOXX neemt je outbound en inbound sales uit handen: nieuwe prospects zoeken en binnenkomende leads snel opvolgen. Voor technische B2B-bedrijven in België.",
    },
    en: {
      title: "REDFOXX | Outbound & inbound sales for technical B2B",
      description:
        "REDFOXX takes outbound and inbound sales off your hands: finding new prospects and following up incoming leads fast. For technical B2B companies in Belgium.",
    },
    fr: {
      title: "REDFOXX | Ventes outbound & inbound pour le B2B technique",
      description:
        "REDFOXX prend en charge vos ventes outbound et inbound : prospection de nouveaux clients et suivi rapide des leads entrants. Pour le B2B technique en Belgique.",
    },
  },
  outbound: {
    nl: {
      title: "Outbound sales uitbesteden | REDFOXX",
      description:
        "Meer gekwalificeerde afspraken met technische B2B-prospects via telefoon, e-mail en LinkedIn. REDFOXX zet je outbound op en voert het uit.",
    },
    en: {
      title: "Outsource outbound sales | REDFOXX",
      description:
        "More qualified meetings with technical B2B prospects via phone, email and LinkedIn. REDFOXX sets up your outbound and runs it for you.",
    },
    fr: {
      title: "Externaliser vos ventes outbound | REDFOXX",
      description:
        "Plus de rendez-vous qualifiés avec des prospects B2B techniques par téléphone, e-mail et LinkedIn. REDFOXX met en place et exécute votre outbound.",
    },
  },
  inbound: {
    nl: {
      title: "Inbound lead management uitbesteden | REDFOXX",
      description:
        "Leads blijven te lang liggen? REDFOXX volgt prijsaanvragen, downloads en vragen snel op, kwalificeert en plant demo's in jouw agenda.",
    },
    en: {
      title: "Outsource inbound lead management | REDFOXX",
      description:
        "Leads sitting too long? REDFOXX follows up price requests, downloads and questions fast, qualifies them and books demos in your calendar.",
    },
    fr: {
      title: "Externaliser la gestion des leads inbound | REDFOXX",
      description:
        "Vos leads attendent trop longtemps ? REDFOXX traite rapidement demandes de prix, téléchargements et questions, qualifie et planifie des démos.",
    },
  },
  jobs: {
    nl: {
      title: "Business Development Representative (BDR) — Jobs bij REDFOXX",
      description:
        "REDFOXX zoekt een Business Development Representative (BDR) voor B2B outbound sales in Aarschot. Cold calling, e-mail en LinkedIn voor technische B2B-klanten.",
    },
  },
};

/** Every pre-rendered, indexable route. Used for SSG and sitemap generation. */
export const ALL_ROUTES: { page: PageKey; lang: Lang; path: string }[] = [
  ...MULTILINGUAL_PAGES.flatMap((page) => LANGS.map((lang) => ({ page, lang, path: pagePath(page, lang) }))),
  { page: "jobs", lang: "nl", path: pagePath("jobs", "nl") },
];

export const buildSitemap = (lastmod: string) => {
  const urls = ALL_ROUTES.map(({ page, lang }) => {
    const alts = MULTILINGUAL_PAGES.includes(page)
      ? [
          ...LANGS.map(
            (l) => `    <xhtml:link rel="alternate" hreflang="${HTML_LANG[l]}" href="${pageUrl(page, l)}"/>`,
          ),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(page, "nl")}"/>`,
        ].join("\n")
      : "";
    return `  <url>\n    <loc>${pageUrl(page, lang)}</loc>\n    <lastmod>${lastmod}</lastmod>${alts ? `\n${alts}` : ""}\n  </url>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
};
