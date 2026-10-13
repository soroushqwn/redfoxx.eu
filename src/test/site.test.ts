import { describe, expect, it } from "vitest";
import { ALL_ROUTES, LANGS, META, MULTILINGUAL_PAGES, buildSitemap, pagePath, parsePath } from "@/seo/site";
import { translations } from "@/i18n/translations";

describe("routes and metadata", () => {
  it("every pre-rendered route has a title and description in its own language", () => {
    for (const { page, lang } of ALL_ROUTES) {
      const meta = META[page][lang];
      expect(meta, `${page}/${lang}`).toBeDefined();
      expect(meta!.title.length).toBeLessThanOrEqual(65);
      expect(meta!.description.length).toBeLessThanOrEqual(160);
    }
  });

  it("multilingual pages exist in every language", () => {
    for (const page of MULTILINGUAL_PAGES) {
      for (const lang of LANGS) {
        expect(ALL_ROUTES.some((r) => r.page === page && r.lang === lang)).toBe(true);
      }
    }
  });

  it("parsePath is the inverse of pagePath", () => {
    for (const { page, lang, path } of ALL_ROUTES) {
      expect(parsePath(path)).toEqual({ lang, page });
      expect(parsePath(pagePath(page, lang))).toEqual({ lang, page });
    }
  });

  it("sitemap lists every route exactly once", () => {
    const xml = buildSitemap("2026-01-01");
    expect(xml.match(/<loc>/g)?.length).toBe(ALL_ROUTES.length);
  });
});

describe("hidden privacy draft", () => {
  it("is not in the sitemap until it is approved", () => {
    expect(ALL_ROUTES.some((r) => r.page === "privacy")).toBe(false);
    expect(buildSitemap("2026-01-01")).not.toContain("/privacy");
  });
});

describe("translations", () => {
  const shape = (v: unknown): unknown =>
    Array.isArray(v) ? v.map(shape) : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, shape(x)])) : typeof v;

  it("nl, en and fr have identical structure", () => {
    expect(shape(translations.nl)).toEqual(shape(translations.en));
    expect(shape(translations.fr)).toEqual(shape(translations.en));
  });

  it("no empty strings (except the intentionally blank table corner cell)", () => {
    const empty: string[] = [];
    const walk = (v: unknown, path: string) => {
      if (typeof v === "string") {
        if (v.trim() === "") empty.push(path);
      }
      else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
      else if (v && typeof v === "object") Object.entries(v).forEach(([k, x]) => walk(x, `${path}.${k}`));
    };
    LANGS.forEach((l) => walk(translations[l], l));
    expect(empty.filter((p) => !p.endsWith("comparison.headers[0]"))).toEqual([]);
  });
});
