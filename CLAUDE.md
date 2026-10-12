# REDFOXX website

Marketing site for REDFOXX (Belgian sales service company: outbound + inbound management for technical B2B).
Live domain: https://redfoxx.be (canonical, no www). The repo is called `redfoxx.eu`.

## Stack and commands
Vite + React + TypeScript + Tailwind + shadcn/ui, pre-rendered with `vite-react-ssg`.

- `npm ci` - install
- `npm run dev` - dev server
- `npm run lint` / `npx tsc --noEmit -p tsconfig.app.json` / `npm test` - checks (CI runs all of them)
- `npm run build` - production build into `dist/` (never commit `dist/`)

## How the site is deployed (important)
GitHub `main` -> Hostinger **auto-deploys**. Anything merged to `main` goes live.
Lovable (lovable.dev, project "Redfoxx Refresh") also commits to `main`.

- Work on a branch and open a pull request. Do not push to `main` directly.
- Pull `main` before starting; do not edit the same files in Lovable and Claude at the same time.
- Before merging: CI green and look at the build output.

## Languages and routes
Three languages as separate pre-rendered URLs: NL (default, `/`), EN (`/en/`), FR (`/fr/`).
Pages: home, `/outbound`, `/inbound` (all three languages) and `/jobs` (Dutch only).
- Language comes from the URL, never from localStorage.
- All page URLs, titles and descriptions live in `src/seo/site.ts` (single source of truth, also used by the sitemap).
- All copy lives in `src/i18n/translations.ts`; nl/en/fr must keep identical structure (a test enforces it).
- Adding a page: add the route in `src/routes.tsx`, a `PageKey` + `META` entry in `src/seo/site.ts`, and (if indexable) it is picked up by the sitemap automatically. Update `public/llms.txt`.

## SEO rules
- Page metadata is emitted ONLY by `<Seo>` (`src/seo/Seo.tsx`) and `src/seo/StructuredData.tsx`. Never add title/meta/canonical/JSON-LD to `index.html`.
- Every page: one `<title>`, one description, one self-referencing canonical, hreflang for multilingual pages.
- `public/.htaccess` is required on Hostinger (clean URLs, 404, HTTPS, www redirect). Keep it.
- Don't invent facts, numbers, case studies, prices or response-time guarantees in copy. Pricing stays vague ("no fixed packages").
- Decided by the owner: the real prospect names in the hero cards stay; French is a plus (not required) for the vacancy; the vacancy has no posting date, so there is deliberately no JobPosting structured data (Google requires a date).
- Still open (ask the owner, don't guess): the "guaranteed 5:1 ROI" / "pay-per-demo" claims.

## Style
Match the surrounding code. Dutch copy uses "jullie/jouw" for the company; French uses "vous".
