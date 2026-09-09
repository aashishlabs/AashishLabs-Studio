# V2 experience upgrade — validation record

Date: 9 September 2026. Project: `E:\Projects\AashishLabs\AashishLabs Studio`.

All work is on `feature/v2-experience-upgrade`. The original `main` remains at
`454dcf0`. Nothing was merged, pushed or deployed. Existing website routes,
brand assets, palette, typography, tagline, lead API and deployment configuration
are preserved. No application dependencies were added or changed.

## Delivered experience

The homepage now follows Hero → Capability Strip → Selected Work → Services →
Why AashishLabs → Process → Compact FAQ → Contact.

- The hero names the offering and audience and features a browser-style demo
  with selectable Website, Product and Growth views. Motion is limited to a short
  entrance, view transitions and subtle pointer response on desktop. There is no
  autoplay, continuous animation, scroll-jacking or new animation library.
- Selected Work features the working studio website as an **Internal Project**
  and a clearly labelled **Concept Build**. The Work page retains all three
  entries. Illustrative interface previews are HTML/CSS, not client screenshots.
  Detail pages distinguish delivered features from proposed approaches and
  intended outcomes. No client names, metrics or commercial results were invented.
- Service names, concise benefits and Explore actions appear on mobile as well
  as desktop. Mobile uses compact rows; larger screens use cards.
- Why/Studio/Outcomes are consolidated with native disclosure. All nine FAQ
  answers remain present in the server-rendered HTML and accessible by disclosure.
- Process uses Discover → Design → Build → Launch → Grow, with keyboard-operable
  tabs and one explanation at a time. Native disclosures preserve the remaining
  explanations without JavaScript.
- Accessibility improvements include skip navigation, sticky-header offsets,
  safe-area spacing, a scrollable mobile drawer, 44px close control, focus return,
  footer tap targets, a semantic logo label, and H1s on the Services, Work and
  Insights index pages. Reduced motion disables motion and smooth scrolling.

## Reversible implementation stages

| Stage | Commit | Checks at stage |
| --- | --- | --- |
| Homepage simplification | `4502574` | Lint, production build and TypeScript |
| Hero + motion | `c9ab860` | Lint, typecheck, production build, six visual captures |
| Selected Work | `945cf0a` | Targeted lint, production build, new static work route |
| Services + Process | `eb61cbf` | Targeted lint, production build |
| Mobile + accessibility | `a19fc39` | Lint, production build, viewport and interaction checks |
| Final validation | This commit | Formatting, mobile compaction, full lint, types, production build, tests, browser regression, final captures and Lighthouse |

The last stage includes final mobile spacing and copy refinements found necessary
by measurement. Formatting expands the earlier implementation into normal
Prettier-formatted source. Prefer reverting later dependent stages before earlier
ones when rolling back.

## Before / after

The baseline was captured from the unchanged production build before website
edits. Both sets use local `next build` + `next start`, Chrome, default dark and
explicit light themes, 1× device scale, and collapsed disclosures. Screenshots
include full-page and initial-viewport captures.

| Viewport | Baseline page height | Final page height | Reduction |
| --- | ---: | ---: | ---: |
| Desktop 1440 × 1000 | 6,861 px | 4,441 px | 35.3% |
| Tablet 820 × 1180 | 8,305 px | 5,466 px | 34.2% |
| Mobile 390 × 844 | 6,042 px | 5,900 px | 2.4% |

Mobile is slightly shorter while exposing both featured projects, the capability
strip and every service benefit that the previous version partly hid. Desktop
and tablet gain the largest reduction from consolidation and the compact process.

Measured script transfer: 258,388 → 259,128 bytes (about +0.3%). Resource transfer
including CSS and route prefetching was 321,361 → 337,680 bytes on desktop, and
312,348 → approximately 311,009 bytes on mobile. These are browser resource measurements, not
an isolated bundle analyzer or a claim about all network conditions.

All six final capture combinations returned HTTP 200, with no browser exceptions
or horizontal overflow. Measured CLS was 0 on mobile and below 0.001 in every
capture.

### Lighthouse 13.4.1

| Metric | Baseline mobile | Final mobile | Final desktop |
| --- | ---: | ---: | ---: |
| Performance | 65 | 95 | 100 |
| Accessibility | 96 | 100 | 100 |
| Best Practices | 100 | 100 | 100 |
| SEO | 66 | 66 | 66 |
| LCP | 3.8 s | 2.9 s | 0.62 s |
| Total Blocking Time | 1,240 ms | 70 ms | 0 ms |

These are single local lab runs, not field Core Web Vitals or a controlled
multi-run benchmark. Host load, caching, browser launch and server warm-up can
affect scores. Final mobile LCP is still above the 2.5 s good threshold in this
simulated run, despite the improved overall score.

The SEO score reflects the existing `app/robots.ts` rule that deliberately blocks
localhost. This protection was not removed to improve a local score. Production
crawlability must be assessed on the configured production origin if deployment
is later authorized.

Lighthouse still reports an unscored label/name diagnostic on the stylized logo's
dotless-i lettering. The link exposes the correct `aashishlabs home` accessible
name and the logo has an image role. Visual lettering was preserved. Framework
unused/legacy JavaScript and rendering diagnostics also remain; a score of 100
does not mean full WCAG conformance or zero optimization opportunities.

## Regression coverage

- `npm run lint`, `npm run typecheck`, `npm run build`: passed.
- `npm run test`: all four existing lead tests passed.
- Chrome checks at 320, 390, 820 and 1440 px, in both themes: passed.
- Hero view selection, 44px demo controls, visible service benefits and both
  featured project links: passed.
- Process mouse/tap selection, arrow keys, Home and End, single visible panel:
  passed.
- All nine FAQ answers, mobile navigation open/close, Escape focus return, skip
  link and work anchor clearance: passed.
- Reduced-motion mode: no running animation, visible headline, automatic rather
  than smooth scrolling. JavaScript-disabled content and process disclosures:
  passed.
- Fourteen inner routes: HTTP 200, one H1, title present, no mobile horizontal
  overflow. These include all services, all work entries, contact, insights and
  legal pages.

Contact rendering and existing lead validation were checked. Live form delivery,
email, WhatsApp, external analytics and deployed Cloudflare behavior were not
exercised. No real enquiry was submitted.

## Artifacts and reproduction

Measurements and scripts are versioned. Large PNGs and full Lighthouse HTML/JSON
reports stay in the local workspace and are ignored by Git:

- `output/v2-experience/baseline/`: original six full-page and six viewport PNGs,
  `metrics.json`, and the Lighthouse mobile report and compact summary.
- `output/v2-experience/final/`: corresponding final PNGs, demo-state screenshots,
  `metrics.json`, `verification.json`, desktop/mobile Lighthouse reports and summary.
- `scripts/v2-capture.mjs`: viewport/theme screenshots and browser measurements.
- `scripts/v2-verify.mjs`: responsive, keyboard, no-JavaScript and route checks.
- `scripts/v2-lighthouse.mjs`: Lighthouse using a managed Chrome process.

Use `npm run build` and `npm run start -- --port 3000`. Set `V2_TOOL_MODULES` to a
tool-only Node modules directory containing Playwright, and `V2_LIGHTHOUSE_MODULE`
to the Lighthouse package directory, then run the relevant script with Node.
`V2_URL` optionally overrides `http://localhost:3000`. These tool dependencies
are deliberately outside the application package manifest.

The bundled pnpm wrapper attempted automatic dependency reconciliation, so
validation used npm's existing scripts. No reinstall or lockfile change was made.
The original Lighthouse CLI saved its baseline reports but hit a Windows temporary
profile cleanup error. The final runner uses Playwright's managed Chrome lifecycle
to avoid that issue. Local builds required access to the existing Wrangler registry
and logs; no deployment command was run.

For future content edits, add concise `homeBenefit` copy to each service. Project
entries carry an explicit project type, preview variant, problem, solution,
outcome and optional verified technologies. Keep concept outcomes aspirational
and client work labelled separately when publishing permission is available.
