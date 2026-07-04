# Content Editing Guide

Phase 1 seed content lives in `content/site.ts`.

Update these exports:

- `siteConfig` for brand, navigation, contact, SEO, homepage and footer copy.
- `services` for service cards and `/services/[slug]` pages.
- `workItems` for `/work` and `/work/[slug]` pages.
- `insights` for `/insights` and `/insights/[slug]` pages.

Do not edit presentational components for copy changes. The repository adapter in `lib/content/repository.ts` is the future replacement point for Supabase or another CMS.
