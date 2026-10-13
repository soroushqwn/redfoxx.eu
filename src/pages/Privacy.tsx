import { Fragment, type ReactNode } from "react";
import { Seo } from "@/seo/Seo";
import { Navbar } from "@/components/redfoxx/Navbar";
import { Footer } from "@/components/redfoxx/CTA";
import { useLang } from "@/i18n/LanguageContext";
import mdNl from "@/content/privacy.nl.md?raw";
import mdEn from "@/content/privacy.en.md?raw";
import mdFr from "@/content/privacy.fr.md?raw";

/** The privacy statement is plain markdown per language in src/content/. A test makes sure no placeholders ([...]) or draft banners ship. */
const CONTENT = { nl: mdNl, en: mdEn, fr: mdFr };
const TITLE = { nl: "Privacyverklaring REDFOXX", en: "REDFOXX Privacy Statement", fr: "Déclaration de confidentialité REDFOXX" };

const inline = (text: string): ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
  );

const cells = (line: string) => line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

const render = (source: string): ReactNode[] => {
  const lines = source.split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("# ")) { i++; continue; } // page title is rendered separately
    if (line.startsWith("## ")) {
      out.push(<h2 key={i} className="mt-10 font-display text-2xl font-semibold">{line.slice(3)}</h2>);
      i++;
    } else if (line.startsWith("### ")) {
      out.push(<h3 key={i} className="mt-6 font-display text-lg font-semibold">{line.slice(4)}</h3>);
      i++;
    } else if (line.startsWith("|")) {
      const rows: string[][] = [];
      const start = i;
      while (i < lines.length && lines[i].startsWith("|")) { rows.push(cells(lines[i])); i++; }
      const [head, , ...body] = rows;
      out.push(
        <div key={start} className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead><tr>{head.map((h, k) => <th key={k} className="border-b border-border px-3 py-2 font-semibold">{inline(h)}</th>)}</tr></thead>
            <tbody>{body.map((r, k) => <tr key={k}>{r.map((c, j) => <td key={j} className="border-b border-border px-3 py-2 align-top">{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      const start = i;
      while (i < lines.length && lines[i].startsWith("- ")) { items.push(lines[i].slice(2)); i++; }
      out.push(<ul key={start} className="mt-3 list-disc space-y-1 pl-6">{items.map((t, k) => <li key={k}>{inline(t)}</li>)}</ul>);
    } else {
      const start = i;
      const para: string[] = [];
      while (i < lines.length && lines[i].trim() && !/^(#|\||- )/.test(lines[i])) { para.push(lines[i]); i++; }
      out.push(<p key={start} className="mt-3">{inline(para.join(" "))}</p>);
    }
  }
  return out;
};

const Privacy = () => {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Seo page="privacy" lang={lang} />
      <Navbar />
      <article className="container max-w-3xl pt-32 pb-20 md:pt-40 leading-relaxed text-muted-foreground [&_strong]:text-foreground [&_h2]:text-foreground [&_h3]:text-foreground">
        <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">{TITLE[lang]}</h1>
        {render(CONTENT[lang])}
      </article>
      <Footer />
    </main>
  );
};

export default Privacy;
