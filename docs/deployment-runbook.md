# Deployment Runbook

## Cloudflare Pages / Workers-Compatible Path

1. Create the Cloudflare project and connect the repository.
2. Add all variables from `.env.example` in the Cloudflare dashboard.
3. Use Node.js 20+.
4. Build command:

```bash
pnpm install --frozen-lockfile
pnpm deploy:cloudflare
```

5. Confirm `/api/health`, `/sitemap.xml`, `/robots.txt`, `/contact` and one service page after deploy.

## Rollback

Use Cloudflare deployment history to promote the last known-good deployment. Confirm lead submissions are not retried blindly; inspect Supabase before reprocessing notifications.
