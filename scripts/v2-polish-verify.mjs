import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
const require = createRequire(
  path.join(process.env.V2_TOOL_MODULES, "package.json"),
);
const { chromium } = require("playwright");
const browser = await chromium.launch({ channel: "chrome", headless: true });
const output = path.resolve("output/v2-experience/polish");
await mkdir(output, { recursive: true });
const results = [];
const views = [
  [
    "Website",
    "website",
    "01 — 03",
    "A clear story. An obvious next step.",
    "Make room",
  ],
  ["Product", "product", "02 — 03", "Less friction. More flow.", "headspace"],
  [
    "Growth",
    "growth",
    "03 — 03",
    "Every touchpoint, connected.",
    "Not a dead end",
  ],
];
try {
  for (const width of [390, 1440]) {
    const dimensions = [];
    for (const theme of ["dark", "light"]) {
      const context = await browser.newContext({
        viewport: { width, height: width === 390 ? 844 : 1000 },
        hasTouch: width === 390,
      });
      await context.addInitScript(
        (theme) => localStorage.setItem("aashishlabs-theme", theme),
        theme,
      );
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      const logos = [];
      for (const location of ["header", "footer"]) {
        const logo = page
          .locator(location)
          .getByRole("img", { name: "aashishlabs", exact: true });
        logos.push(
          await logo.evaluate((e) => {
            const r = e.getBoundingClientRect(),
              mark = e.querySelector("img"),
              m = mark.getBoundingClientRect(),
              style = getComputedStyle(mark);
            return {
              width: r.width,
              height: r.height,
              markWidth: m.width,
              markHeight: m.height,
              padding: style.padding,
              source: mark.getAttribute("src"),
            };
          }),
        );
        await logo.screenshot({
          path: path.join(output, `logo-${location}-${width}-${theme}.png`),
        });
      }
      assert.deepEqual(logos[0], logos[1], "header/footer sizes must match");
      assert.equal(logos[0].padding, "0px");
      dimensions.push(logos[0]);
      const asset = await page.evaluate(async () => {
        const source = await (
          await fetch("/brand/aashishlabs-mark-dark.svg")
        ).text();
        const svg = new DOMParser().parseFromString(
          source,
          "image/svg+xml",
        ).documentElement;
        svg.style.position = "absolute";
        svg.style.visibility = "hidden";
        document.body.append(svg);
        const b = svg.getBBox(),
          v = svg.viewBox.baseVal;
        const result = {
          viewBox: { x: v.x, y: v.y, width: v.width, height: v.height },
          contentBounds: { x: b.x, y: b.y, width: b.width, height: b.height },
        };
        svg.remove();
        return result;
      });
      assert.equal(asset.viewBox.width, 304);
      assert.equal(asset.viewBox.height, 400);
      assert.ok(
        // getBBox excludes the thick round strokes extending beyond these paths.
        asset.contentBounds.width > asset.viewBox.width * 0.7 &&
          asset.contentBounds.height > asset.viewBox.height * 0.7,
        "cropped asset should not contain excessive whitespace",
      );
      for (const [label, id, index, caption, copy] of views) {
        const button = page.getByRole("button", { name: label, exact: true });
        await button.press("Enter");
        assert.equal(await button.getAttribute("aria-pressed"), "true");
        assert.equal(
          await page.locator("#experience-demo").getAttribute("data-view"),
          id,
        );
        assert.equal(
          (await page.locator("[data-demo-index]").innerText()).trim(),
          index,
        );
        assert.ok(
          (await page.getByRole("status").innerText()).includes(caption),
        );
        assert.ok(
          (await page.locator("#experience-demo").innerText()).includes(copy),
        );
        assert.ok(
          await button.evaluate((e) => e === document.activeElement),
          "focus stays on selected control",
        );
        await page.waitForTimeout(300);
        await page
          .locator("[data-demo-index]")
          .locator("..")
          .locator("..")
          .screenshot({
            path: path.join(output, `hero-${width}-${theme}-${id}.png`),
          });
      }
      const gap = await page.evaluate(
        () =>
          parseFloat(
            getComputedStyle(document.querySelector("#services")).paddingBottom,
          ) +
          parseFloat(
            getComputedStyle(document.querySelector("#studio")).paddingTop,
          ),
      );
      assert.equal(gap, 48);
      if (width === 1440) {
        const service = page.locator(".service-link").first();
        await service.hover();
        await page.waitForTimeout(220);
        assert.equal(
          await service.evaluate(
            (e) => new DOMMatrix(getComputedStyle(e).transform).m42,
          ),
          -2,
        );
      }
      const summary = page.locator("#studio summary").first();
      await summary.press("Enter");
      assert.ok(await summary.evaluate((e) => e.parentElement.open));
      await summary.press("Enter");
      await page
        .getByRole("tab", { name: "01 Discover", exact: true })
        .press("ArrowRight");
      assert.equal(
        await page
          .getByRole("tab", { name: "02 Design", exact: true })
          .getAttribute("aria-selected"),
        "true",
      );
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      );
      assert.deepEqual(errors, []);
      results.push({
        width,
        theme,
        logos,
        asset,
        servicesStudioGap: gap,
        status: "passed",
      });
      await context.close();
    }
    assert.deepEqual(
      dimensions[0],
      dimensions[1],
      "light/dark logo sizes must match",
    );
  }
  const reduced = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  const page = await reduced.newPage();
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Growth", exact: true }).click();
  assert.equal(
    await page.locator("#experience-demo").getAttribute("data-view"),
    "growth",
  );
  assert.equal(
    await page.evaluate(
      () =>
        document.getAnimations().filter((a) => a.playState === "running")
          .length,
    ),
    0,
  );
  assert.equal(
    await page
      .locator(".service-link")
      .first()
      .evaluate((e) => getComputedStyle(e).transform),
    "none",
  );
  results.push({ reducedMotion: "passed" });
  await reduced.close();
  await writeFile(
    path.join(output, "verification.json"),
    JSON.stringify(results, null, 2),
  );
  console.log(JSON.stringify(results, null, 2));
} finally {
  await browser.close();
}
