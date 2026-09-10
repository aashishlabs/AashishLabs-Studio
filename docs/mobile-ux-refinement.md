# Mobile UX refinement verification

Mobile-only layout rules end at 768px. The committed homepage was captured in both themes at 769, 1024 and 1440px before comparison with this implementation. Page dimensions match at every width; five comparisons have no pixel differences above a 2/255 tolerance and the sixth differs in 66 pixels out of 4.37 million (rendering noise).

Implemented a compact interactive hero, a native snapping work carousel with project labels and full descriptions, scannable service rows, active accordion states, a single-expanded vertical process with animated connectors, mobile menu transitions and an accessible theme toggle. The contextual contact pill respects the hero, contact sections, footer, keyboard entry and safe-area padding. Service-detail typography and light-theme borders are scoped to mobile.

`mobile-final-verify.mjs` covers 375/390/430px × dark/light × normal/reduced motion across the homepage, service index and four details, work index and three details, and contact (132 route combinations). It checks overflow, one H1, first-viewport preview visibility, all preview modes, 9–17% next-card exposure, carousel controls and native touch swipes, process expansion, Why accordion, contact-pill visibility, menu focus return/theme control, runtime errors and reduced-motion animations. Screenshots are saved locally under `output/v2-experience/mobile-final` and ignored by Git.

Run with `V2_TOOL_MODULES` pointing to a Node package directory containing Playwright and `MOBILE_AUDIT_URL` pointing to the running site. Desktop comparison uses separate baseline/current servers on ports 3188/3010; run them from separate checkouts, outside the build output directory.

Checks: ESLint, TypeScript, production Next.js build, four existing lead tests, development and production mobile browser matrix. Browser coverage is Chromium with mobile touch emulation; physical-device Safari was not available.
