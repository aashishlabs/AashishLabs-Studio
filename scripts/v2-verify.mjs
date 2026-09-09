import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const require = createRequire(
  path.join(process.env.V2_TOOL_MODULES, "package.json"),
);
const { chromium } = require("playwright");
const browser = await chromium.launch({ channel: "chrome", headless: true });
const base = process.env.V2_URL || "http://localhost:3000";
const output = path.resolve("output/v2-experience/final");
await mkdir(output, { recursive: true });
const results = [];
try {
  for (const width of [320, 390, 820, 1440]) {
    for (const theme of ["dark", "light"]) {
      const context = await browser.newContext({
        viewport: { width, height: 900 },
        hasTouch: width < 1024,
      });
      await context.addInitScript(
        (theme) => localStorage.setItem("aashishlabs-theme", theme),
        theme,
      );
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto(base, { waitUntil: "networkidle" });
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(await page.locator("main > section").count(), 8);
      assert.deepEqual(
        await page
          .locator("main > section")
          .evaluateAll((nodes) => nodes.map((n) => n.id)),
        ["", "", "work", "services", "studio", "process", "faq", "contact"],
      );
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      );
      for (const label of ["Product", "Growth", "Website"]) {
        const control = page.getByRole("button", { name: label, exact: true });
        await control.click();
        assert.equal(await control.getAttribute("aria-pressed"), "true");
        assert.ok(await page.locator("#experience-demo").isVisible());
        assert.ok(
          await control.evaluate((e) => e.getBoundingClientRect().height >= 44),
        );
      }
      await page.getByRole("button", { name: "Product", exact: true }).click();
      assert.ok(
        await page
          .getByText("Shape the experience", { exact: true })
          .isVisible(),
      );
      await page.screenshot({
        path: path.join(output, `product-${width}-${theme}.png`),
      });
      await page.getByRole("button", { name: "Growth", exact: true }).click();
      assert.ok(
        await page
          .getByText("Learn from behaviour. Refine the experience.")
          .isVisible(),
      );
      for (const card of await page.locator("#services .service-link").all()) {
        assert.ok(await card.locator("h3").isVisible());
        assert.ok(await card.locator("p").isVisible());
        assert.ok(
          await card.getByText("Explore", { exact: false }).isVisible(),
        );
      }
      assert.equal(await page.locator("#work .project-link").count(), 2);
      for (const link of await page.locator("#work .project-link").all())
        assert.ok(await link.isVisible());
      const discover = page.getByRole("tab", {
        name: "01 Discover",
        exact: true,
      });
      await discover.click();
      await discover.press("ArrowRight");
      assert.equal(
        await page
          .getByRole("tab", { name: "02 Design", exact: true })
          .getAttribute("aria-selected"),
        "true",
      );
      await page.keyboard.press("End");
      assert.equal(
        await page
          .getByRole("tab", { name: "05 Grow", exact: true })
          .getAttribute("aria-selected"),
        "true",
      );
      await page.keyboard.press("Home");
      assert.equal(await discover.getAttribute("aria-selected"), "true");
      for (const tab of await page.getByRole("tab").all()) await tab.click();
      assert.equal(await page.getByRole("tabpanel").count(), 1);
      await page
        .locator("#faq > div > details")
        .last()
        .locator(":scope > summary")
        .click();
      assert.equal(await page.locator("#faq details details").count(), 6);
      for (const detail of await page
        .locator("#faq details")
        .filter({ has: page.locator(":scope > p") })
        .all()) {
        await detail.locator(":scope > summary").click();
        assert.ok(await detail.locator(":scope > p").isVisible());
      }
      if (width < 1024) {
        const trigger = page.getByRole("button", { name: "Open navigation" });
        await trigger.click();
        assert.ok(await page.getByRole("dialog").isVisible());
        const close = page.getByRole("button", { name: "Close", exact: true });
        assert.ok(
          await close.evaluate((e) => e.getBoundingClientRect().width >= 44),
        );
        await page.keyboard.press("Escape");
        assert.equal(await page.getByRole("dialog").count(), 0);
        await page.waitForFunction(
          () =>
            document.activeElement?.getAttribute("aria-label") ===
            "Open navigation",
        );
        assert.ok(await trigger.evaluate((e) => e === document.activeElement));
      }
      await page.goto(base, { waitUntil: "networkidle" });
      await page.keyboard.press("Tab");
      assert.equal(
        await page.evaluate(() => document.activeElement.textContent),
        "Skip to content",
      );
      await page.keyboard.press("Enter");
      assert.equal(
        await page.evaluate(() => document.activeElement.id),
        "main-content",
      );
      await page
        .getByRole("link", { name: "Explore the Work", exact: true })
        .click();
      await page.waitForTimeout(700);
      assert.ok(
        await page
          .locator("#work")
          .evaluate((e) => e.getBoundingClientRect().top >= 80),
      );
      assert.deepEqual(errors, []);
      results.push({
        width,
        theme,
        status: "passed",
        checks: [
          "section order",
          "hero controls",
          "service benefits",
          "project visibility",
          "process keyboard",
          "all FAQ answers",
          "navigation and focus",
          "skip link",
          "anchor offset",
          "no overflow",
          "no page errors",
        ],
      });
      await context.close();
    }
  }
  const reduced = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  const reducedPage = await reduced.newPage();
  await reducedPage.goto(base, { waitUntil: "networkidle" });
  assert.equal(
    await reducedPage
      .locator("html")
      .evaluate((e) => getComputedStyle(e).scrollBehavior),
    "auto",
  );
  assert.equal(
    await reducedPage
      .locator("h1")
      .evaluate((e) => getComputedStyle(e).opacity),
    "1",
  );
  assert.equal(
    await reducedPage.evaluate(
      () =>
        document.getAnimations().filter((a) => a.playState === "running")
          .length,
    ),
    0,
  );
  results.push({ mode: "reduced-motion", status: "passed" });
  await reduced.close();
  const nojs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const nojsPage = await nojs.newPage();
  await nojsPage.goto(base);
  assert.ok(await nojsPage.locator("h1").isVisible());
  assert.equal(await nojsPage.locator("#process noscript details").count(), 4);
  const fallback = nojsPage.locator("#process noscript details").last();
  await fallback.locator("summary").click();
  assert.ok(await fallback.locator("p").first().isVisible());
  assert.equal(await nojsPage.locator("#faq details p").count(), 9);
  results.push({ mode: "javascript-disabled", status: "passed" });
  await nojs.close();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  for (const route of [
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
    "/insights",
    "/insights/website-before-ads",
    "/privacy-policy",
    "/terms-of-use",
  ]) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
    });
    assert.equal(response.status(), 200, route);
    assert.equal(await page.locator("h1").count(), 1, route);
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      route + " overflow",
    );
    assert.ok(await page.title(), route);
    results.push({ route, status: "passed" });
  }
  await context.close();
  await writeFile(
    path.join(output, "verification.json"),
    JSON.stringify(results, null, 2),
  );
  console.log(JSON.stringify(results, null, 2));
} finally {
  await browser.close();
}
