import { Head } from "vite-react-ssg";
import type { ReactNode } from "react";
import {
  HTML_LANG,
  LANGS,
  META,
  MULTILINGUAL_PAGES,
  OG_IMAGE,
  OG_LOCALE,
  pageUrl,
  type Lang,
  type PageKey,
} from "./site";

/** The ONLY place page metadata is emitted. */
export const Seo = ({ page, lang, children }: { page: PageKey; lang: Lang; children?: ReactNode }) => {
  const meta = META[page][lang] ?? META[page].nl!;
  const url = pageUrl(page, lang);
  const multi = MULTILINGUAL_PAGES.includes(page);
  return (
    <Head>
      <html lang={HTML_LANG[lang]} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      {multi && LANGS.map((l) => <link key={l} rel="alternate" hrefLang={HTML_LANG[l]} href={pageUrl(page, l)} />)}
      {multi && <link rel="alternate" hrefLang="x-default" href={pageUrl(page, "nl")} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="REDFOXX" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {children}
    </Head>
  );
};
