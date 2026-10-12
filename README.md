# REDFOXX website

Marketing site for [REDFOXX](https://redfoxx.be): outbound and inbound sales management for technical B2B companies.
Built with Vite, React, TypeScript, Tailwind and shadcn/ui, pre-rendered with `vite-react-ssg`. Languages: NL (default), EN, FR.

```bash
npm ci
npm run dev      # local dev server
npm run lint && npx tsc --noEmit -p tsconfig.app.json && npm test
npm run build    # output in dist/
```

Deployment: `main` -> Hostinger (automatic). Work on branches and merge through pull requests; CI runs lint, types, tests and a build check.
See `CLAUDE.md` for conventions (routes, translations, SEO rules).
