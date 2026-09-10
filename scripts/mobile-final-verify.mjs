import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
const require = createRequire(
  path.join(process.env.V2_TOOL_MODULES, "package.json"),
);
const { chromium } = require("playwright");
const base = process.env.MOBILE_AUDIT_URL || "http://localhost:3010";
const out = path.resolve("output/v2-experience/mobile-final");
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];
const routes = [
  "/",
  "/services",
  "/services/web-development",
  "/services/app-development",
  "/services/seo",
  "/services/performance-marketing",
  "/work",
  "/work/aashishlabs-studio",
  "/work/local-services-growth-system",
  "/work/founder-launch-platform",
  "/contact",
];
try {
  for (const width of [375, 390, 430])
    for (const theme of ["dark", "light"])
      for (const reducedMotion of ["no-preference", "reduce"]) {
        const context = await browser.newContext({
          viewport: { width, height: 844 },
          hasTouch: true,
          isMobile: true,
          reducedMotion,
        });
        await context.addInitScript(
          (t) => localStorage.setItem("aashishlabs-theme", t),
          theme,
        );
        const page = await context.newPage();
        const errors = [];
        page.on("pageerror", (e) => errors.push(e.message));
        for (const route of routes) {
          await page.goto(base + route, { waitUntil: "networkidle" });
          await page.evaluate(() => document.fonts.ready);
          assert.equal(await page.locator("h1").count(), 1, route + " h1");
          const overflow = await page.evaluate(() =>
            [...document.querySelectorAll("main *")]
              .filter((e) => {
                const r = e.getBoundingClientRect();
                return (
                  r.width &&
                  (r.left < -1 || r.right > innerWidth + 1) &&
                  !e.closest('[class*="track"], [aria-hidden="true"]')
                );
              })
              .map((e) => ({
                tag: e.tagName,
                cls: e.className,
                text: e.textContent.slice(0, 50),
              })),
          );
          assert.deepEqual(overflow, [], `${width} ${theme} ${route} overflow`);
          assert.ok(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
            route + " document overflow",
          );
          if (route === "/") {
            assert.equal(
              await page
                .locator('.mobile-action-bar[data-visible="true"]')
                .count(),
              0,
            );
            const preview = await page
              .locator("#experience-demo-mobile")
              .boundingBox();
            assert.ok(
              preview.y + preview.height < 844,
              "preview in first viewport",
            );
            for (const label of ["Product", "Growth", "Website"]) {
              const control = page.getByRole("button", {
                name: label,
                exact: true,
              });
              await control.click();
              assert.equal(await control.getAttribute("aria-pressed"), "true");
              assert.equal(
                await page
                  .locator("#experience-demo-mobile")
                  .getAttribute("data-view"),
                label.toLowerCase(),
              );
            }
            await page.screenshot({
              path: path.join(
                out,
                `hero-${width}-${theme}-${reducedMotion}.png`,
              ),
            });
            const cards = page.locator(".mobile-work-card");
            await cards.first().scrollIntoViewIfNeeded();
            const track = cards.first().locator("..");
            const reveal = await cards.nth(1).evaluate((e) => {
              const r = e.getBoundingClientRect();
              return (innerWidth - r.left) / r.width;
            });
            assert.ok(
              reveal >= 0.09 && reveal <= 0.17,
              `next card reveal ${reveal}`,
            );
            await page
              .getByRole("button", { name: /Show Local Services/ })
              .click();
            await page.waitForTimeout(450);
            assert.equal(
              await page
                .getByRole("button", { name: /Show Local Services/ })
                .getAttribute("aria-current"),
              "true",
            );
            await track.evaluate((e) =>
              e.scrollTo({ left: 0, behavior: "instant" }),
            );
            await page.waitForTimeout(100);
            assert.equal(
              await page
                .getByRole("button", { name: "Show AashishLabs", exact: true })
                .getAttribute("aria-current"),
              "true",
            );
            const box = await track.boundingBox();
            const touch = await context.newCDPSession(page);
            const swipeY = Math.max(110, Math.min(600, box.y + 80));
            await touch.send("Input.dispatchTouchEvent", {
              type: "touchStart",
              touchPoints: [{ x: width - 45, y: swipeY }],
            });
            for (let x = width - 65; x >= 45; x -= 25)
              await touch.send("Input.dispatchTouchEvent", {
                type: "touchMove",
                touchPoints: [{ x, y: swipeY }],
              });
            await touch.send("Input.dispatchTouchEvent", {
              type: "touchEnd",
              touchPoints: [],
            });
            await page.waitForTimeout(500);
            assert.ok(
              (await track.evaluate((e) => e.scrollLeft)) > 100,
              "native touch swipe",
            );
            await touch.detach();
            await track.evaluate((e) =>
              e.scrollTo({ left: 0, behavior: "instant" }),
            );
            await page.waitForTimeout(100);
            await page.locator("#work").screenshot({
              path: path.join(
                out,
                `work-${width}-${theme}-${reducedMotion}.png`,
              ),
            });
            const why = page.locator(".why-summary").first();
            await why.click();
            await page.waitForTimeout(300);
            assert.ok(await why.evaluate((e) => e.parentElement.open));
            await why.press("Enter");
            for (const title of [
              "02 Design",
              "03 Build",
              "04 Launch",
              "05 Grow",
              "01 Discover",
            ]) {
              const step = page.getByRole("button", {
                name: title,
                exact: true,
              });
              await step.click();
              await page.waitForTimeout(320);
              assert.equal(
                await page
                  .locator('.process-trigger[aria-expanded="true"]')
                  .count(),
                1,
              );
              assert.equal(await page.locator(".process-panel").count(), 1);
              assert.ok(
                (await page.locator(".process-panel").innerText()).includes(
                  "WHAT YOU LEAVE WITH",
                ),
              );
            }
            await page.locator(".process-mobile").screenshot({
              path: path.join(
                out,
                `process-${width}-${theme}-${reducedMotion}.png`,
              ),
            });
            let sawFloatingCta = false;
            const contactTop = await page
              .locator("#contact")
              .evaluate(
                (element) =>
                  element.getBoundingClientRect().top + window.scrollY,
              );
            for (let scrollY = 760; scrollY < contactTop - 500; scrollY += 30) {
              await page.evaluate(
                (top) => window.scrollTo({ top, behavior: "instant" }),
                scrollY,
              );
              await page.waitForTimeout(30);
              const actionBar = page.locator(
                '.mobile-action-bar[data-visible="true"]',
              );
              if (!(await actionBar.count())) continue;
              sawFloatingCta = true;
              const overlap = await actionBar
                .locator("a")
                .evaluate((action) => {
                  const actionRect = action.getBoundingClientRect();
                  return Array.from(
                    document.querySelectorAll(
                      "main h1, main h2, main h3, main p, main li, main summary, main button, main input, main textarea, main select, main a",
                    ),
                  ).some((target) => {
                    const rect = target.getBoundingClientRect();
                    return (
                      rect.width > 0 &&
                      rect.height > 0 &&
                      rect.right >= actionRect.left - 10 &&
                      rect.left <= actionRect.right + 10 &&
                      rect.bottom >= actionRect.top - 10 &&
                      rect.top <= actionRect.bottom + 10
                    );
                  });
                });
              assert.equal(
                overlap,
                false,
                "floating CTA must not cover content or controls",
              );
            }
            assert.ok(
              sawFloatingCta,
              "floating CTA appears in open space past hero",
            );
            await page.locator("#contact").scrollIntoViewIfNeeded();
            await page.waitForTimeout(200);
            assert.equal(
              await page
                .locator('.mobile-action-bar[data-visible="true"]')
                .count(),
              0,
              "CTA hidden at contact",
            );
            await page.locator("footer").scrollIntoViewIfNeeded();
            await page.waitForTimeout(200);
            assert.equal(
              await page
                .locator('.mobile-action-bar[data-visible="true"]')
                .count(),
              0,
            );
            await page.getByRole("button", { name: "Open navigation" }).click();
            await page.waitForTimeout(250);
            const dialog = page.getByRole("dialog");
            assert.ok(await dialog.isVisible());
            await dialog.getByRole("button", { name: /Switch to/ }).click();
            await dialog.getByRole("button", { name: /Switch to/ }).click();
            await dialog.screenshot({
              path: path.join(
                out,
                `menu-${width}-${theme}-${reducedMotion}.png`,
              ),
            });
            await page.keyboard.press("Escape");
            await page.waitForTimeout(200);
            assert.equal(await dialog.count(), 0);
            assert.ok(
              await page
                .getByRole("button", { name: "Open navigation" })
                .evaluate((e) => e === document.activeElement),
            );
            if (reducedMotion === "reduce")
              assert.equal(
                await page.evaluate(
                  () =>
                    document
                      .getAnimations()
                      .filter((a) => a.playState === "running").length,
                ),
                0,
                "reduced motion",
              );
          }
          for (
            let y = 0;
            y < (await page.evaluate(() => document.body.scrollHeight));
            y += 650
          ) {
            await page.evaluate(
              (y) => window.scrollTo({ top: y, behavior: "instant" }),
              y,
            );
          }
          await page.evaluate(() => {
            document.activeElement?.blur();
            window.scrollTo({ top: 0, behavior: "instant" });
          });
          if (width === 390 && reducedMotion === "reduce")
            await page.screenshot({
              path: path.join(
                out,
                `${route.replaceAll("/", "_") || "home"}-${theme}.png`,
              ),
              fullPage: true,
            });
          results.push({
            width,
            theme,
            reducedMotion,
            route,
            status: "passed",
          });
        }
        assert.deepEqual(errors, []);
        await context.close();
        console.log(`Passed ${width} ${theme} ${reducedMotion}`);
      }
  await writeFile(
    path.join(out, "verification.json"),
    JSON.stringify(results, null, 2),
  );
} finally {
  await browser.close();
}
