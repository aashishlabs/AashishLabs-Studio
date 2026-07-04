# AashishLabs Studio

Phase 1 / V1 implementation for a premium, mobile-first digital agency website based on `Digital_Agency_Website_BRD_PRD_FSD_v1.0.docx`.

## Stack

- Next.js App Router, React, TypeScript
- Tailwind CSS with shadcn/ui-style primitives
- Motion for React
- Supabase for lead storage
- Resend for lead notifications
- GA4 and Microsoft Clarity placeholders
- Cloudflare Pages / Workers-compatible deployment path using OpenNext for Cloudflare

## Local Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

```bash
pnpm build
pnpm typecheck
pnpm test
pnpm preview:cloudflare
pnpm deploy:cloudflare
```

## Environment Variables

See `.env.example`. Never expose server-only values to the browser.

Required launch values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `LEAD_NOTIFICATION_TO`

Optional placeholders:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_CLARITY_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `TURNSTILE_SECRET_KEY`
- `CRM_WEBHOOK_URL`
- `CRM_WEBHOOK_SECRET`
- `SENTRY_DSN`

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/migrations/0001_leads.sql` in the SQL editor or through the Supabase CLI.
3. Confirm RLS is enabled on `public.lead`.
4. Use the service-role key only as `SUPABASE_SERVICE_ROLE_KEY` in server environments.
5. Public visitors should not have direct table read access.

## Resend Setup

1. Create a Resend API key.
2. Add `RESEND_API_KEY`.
3. Add `LEAD_NOTIFICATION_TO`.
4. Replace the placeholder sender `onboarding@resend.dev` with a verified domain before production.

## Cloudflare Deployment

This project includes an OpenNext Cloudflare-compatible path.

```bash
pnpm install --frozen-lockfile
pnpm deploy:cloudflare
```

Add environment variables in Cloudflare before deployment. Validate `/api/health`, `/contact`, `/sitemap.xml`, `/robots.txt` and a service page after deploy.

## Content Management

All public copy and placeholders live in `content/site.ts`. The adapter boundary is `lib/content/repository.ts`, which can later be replaced with Supabase or another CMS without rewriting page components.

## Testing and Validation

```bash
pnpm test
pnpm typecheck
pnpm build
```

## Sprint Status

- Sprint 0: Foundation complete.
- Sprint 1: Core website experience complete.
- Sprint 2: Conversion system complete.
- Sprint 3: SEO, analytics, legal and deployment docs complete.

## Known Launch Placeholders

- Final brand name, logo, domain and visual assets.
- Verified case studies, testimonials, metrics and pricing.
- Reviewed privacy policy and terms.
- Production analytics IDs and consent-management decision.
- Production Turnstile widget wiring if bot protection is enabled.
