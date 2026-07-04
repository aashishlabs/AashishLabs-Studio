# Codex Handoff

Project: AashishLabs Studio

Workspace:

```text
C:\Users\Lenovo\OneDrive\Documents\AashishLabs Studio
```

Current state:

- Phase 1 / V1 digital agency website has been scaffolded from the BRD/PRD/FSD.
- Stack: Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui-style primitives, Motion for React, Supabase structure, Resend structure, Cloudflare-compatible deployment docs.
- Framework versions are pinned in `package.json` to the locally verified patched set: Next.js `15.5.20`, React `19.2.7`, React DOM `19.2.7`, `@next/eslint-plugin-next` `15.5.20`, and `eslint-config-next` `15.5.20`.
- Local launcher: `dev.bat`
- Main content/config file: `content/site.ts`
- Lead form API: `app/api/leads/route.ts`
- Supabase migration: `supabase/migrations/0001_leads.sql`
- Setup docs: `README.md`
- Local `.env.local` has been created from `.env.example` with development defaults and blank secrets. It is ignored by git.
- The app no longer uses `next/font/google`; font variables are defined in `app/globals.css` with system fallbacks to avoid build-time external font fetches.

Validated on 2026-07-04:

```powershell
pnpm test
pnpm typecheck
pnpm run build
```

- Production server started successfully on `http://localhost:3001`.
- HTTP route probes returned `200` for `/`, `/services`, `/services/web-development`, `/work`, `/work/local-services-growth-system`, `/insights`, `/insights/website-before-ads`, `/contact`, `/privacy-policy`, `/terms-of-use`, `/sitemap.xml` and `/robots.txt`.

Known tooling note:

- `pnpm install --no-frozen-lockfile` relinks dependencies but exits nonzero under the current pnpm build-approval policy because build scripts are ignored for packages such as `esbuild` and `sharp`. The app still passes `pnpm test`, `pnpm typecheck` and `pnpm run build`.
- Do not run `next dev` and `next build` at the same time in this workspace; both write to `.next` and can produce stale or inconsistent build artifacts.

Known placeholders:

- Brand name, logo, domain, contact details.
- Case studies, testimonials, pricing, images and final copy.
- Supabase and Resend environment variables.
- GA4, Clarity and optional Turnstile IDs.

Recommended next work:

1. Review the local site in browser at `http://localhost:3001`.
2. Replace placeholder brand/contact details in `content/site.ts`.
3. Configure `.env.local` from `.env.example`.
4. Run Supabase migration and wire Resend.
5. Run final test/typecheck/build before deployment.
