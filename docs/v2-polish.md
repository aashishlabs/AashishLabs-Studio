# V2 polish — 9 September 2026

The existing V2 design, content structure, brand palette and dependencies are preserved.
All changes remain on `feature/v2-experience-upgrade`; nothing is merged or deployed.

- `f1be758`: Hero selection now synchronizes the copy, visual, browser label,
  01–03 indicator and supporting message. Brief CSS transitions respect reduced
  motion. Selection is manual, with focus retained and a polite status announcement.
- `1b44df2`: Removed the light-theme image padding that reduced the painted logo.
  Header and footer now share the original dark-header responsive sizing. Both
  themes use the same SVG with viewBox `104 48 304 400`; no alternate asset or
  whitespace discrepancy exists. Geometric bounds are approximately 233 × 350
  inside that viewBox, excluding the thick rounded strokes.
- `a5ff888`: Slightly reduced homepage section padding and specifically reduced
  the combined Services → Why padding to 48px on desktop and mobile.
- This commit: Subtle service-card hover/press feedback and native disclosure /
  process-tab feedback. Movement is disabled for reduced motion, hover movement
  is limited to fine pointers, and focus rings/tap targets are preserved.

Validation: full lint, typecheck and production build passed. Chrome checks at
390px and 1440px in light and dark themes passed for every hero view, indicator,
supporting message, keyboard focus, disclosure interaction, process keyboard
selection and overflow. Desktop service hover moves only 2px. Reduced-motion
selection remains functional without running animations or card transforms.

Measured logo dimensions match between themes and between header/footer:
173.828 × 40px on mobile; 195.422 × 44px on desktop. Mark dimensions also match,
with zero theme-specific padding. Screenshots were visually inspected.

Reproduce with `scripts/v2-polish-verify.mjs` against the local production server,
using `V2_TOOL_MODULES` as described in the original V2 validation record.
Measurements are in `output/v2-experience/polish/verification.json`; ignored local
PNGs include all hero states and both logo placements in both themes.
