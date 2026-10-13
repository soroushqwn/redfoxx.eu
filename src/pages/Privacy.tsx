import { Fragment, type ReactNode } from "react";
import { Seo } from "@/seo/Seo";
import { Navbar } from "@/components/redfoxx/Navbar";
import { Footer } from "@/components/redfoxx/CTA";
import md from "@/content/privacy.nl.md?raw";

/**
 * HIDDEN DRAFT. The page is noindex, not in the sitemap and not linked anywhere until the lawyer
 * has approved the text. To update: replace src/content/privacy.nl.md (keep it free of internal notes).
 * [Text in square brackets] is highlighted on purpose: it still has to be filled in or verified.
 */

const inline = (text: string): ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*|\[[^\]]+\])/g).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("[")) return <mark key={i} className="rounded bg-primary/15 px-1 text-foreground">{part}</mark>;
    return <Fragment key={i}>{part}</Fragment>;
  });

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

const Privacy = () => (
  <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Seo page="privacy" lang="nl">
      <meta name="robots" content="noindex, nofollow" />
    </Seo>
    <Navbar />
    <article className="container max-w-3xl pt-32 pb-20 md:pt-40 leading-relaxed text-muted-foreground [&_strong]:text-foreground [&_h2]:text-foreground [&_h3]:text-foreground">
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Privacyverklaring REDFOXX</h1>
      {render(md)}
    </article>
    <Footer />
  </main>
);

export default Privacy;
