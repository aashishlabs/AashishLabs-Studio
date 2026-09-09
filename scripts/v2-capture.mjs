// Run against a local production server. Browser tooling stays outside app dependencies.
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
const require = createRequire(
  path.join(process.env.V2_TOOL_MODULES, "package.json"),
);
const { chromium } = require("playwright");
const destination = path.resolve(
  process.argv[2] || "output/v2-experience/baseline",
);
await mkdir(destination, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];
for (const [device, width, height] of [
  ["desktop", 1440, 1000],
  ["tablet", 820, 1180],
  ["mobile", 390, 844],
]) {
  for (const theme of ["dark", "light"]) {
    const context = await browser.newContext({
      viewport: { width, height },
      deviceScaleFactor: 1,
      isMobile: device === "mobile",
      hasTouch: device !== "desktop",
    });
    await context.addInitScript((theme) => {
      localStorage.setItem("aashishlabs-theme", theme);
      window.__v2 = { lcp: 0, cls: 0, longTasks: 0 };
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) window.__v2.lcp = e.startTime;
      }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver((list) => {
        for (const e of list.getEntries())
          if (!e.hadRecentInput) window.__v2.cls += e.value;
      }).observe({ type: "layout-shift", buffered: true });
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) window.__v2.longTasks += e.duration;
      }).observe({ type: "longtask", buffered: true });
    }, theme);
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    const response = await page.goto(
      process.env.V2_URL || "http://localhost:3000",
      { waitUntil: "networkidle" },
    );
    await page.waitForTimeout(800);
    await page.screenshot({
      path: path.join(destination, `${device}-${theme}-viewport.png`),
    });
    const metrics = await page.evaluate(() => ({
      ...window.__v2,
      pageHeight: document.documentElement.scrollHeight,
      viewportWidth: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      h1: [...document.querySelectorAll("h1")].map((e) => e.textContent),
      headings: [...document.querySelectorAll("h2")]
        .filter((e) => e.getClientRects().length)
        .map((e) => e.textContent),
      resources: performance
        .getEntriesByType("resource")
        .reduce((sum, e) => sum + e.transferSize, 0),
      scripts: performance
        .getEntriesByType("resource")
        .filter((e) => e.initiatorType === "script")
        .reduce((sum, e) => sum + e.transferSize, 0),
      navigation: performance.getEntriesByType("navigation")[0].toJSON(),
    }));
    for (let y = 0; y < metrics.pageHeight; y += height * 0.75) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(100);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);
    await page.screenshot({
      path: path.join(destination, `${device}-${theme}-full.png`),
      fullPage: true,
    });
    results.push({
      device,
      theme,
      status: response.status(),
      errors,
      ...metrics,
    });
    await context.close();
  }
}
await browser.close();
await writeFile(
  path.join(destination, "metrics.json"),
  JSON.stringify(results, null, 2),
);
console.log(
  JSON.stringify(
    results.map(
      ({
        device,
        theme,
        status,
        errors,
        lcp,
        cls,
        pageHeight,
        viewportWidth,
        documentWidth,
        resources,
        scripts,
      }) => ({
        device,
        theme,
        status,
        errors,
        lcp,
        cls,
        pageHeight,
        viewportWidth,
        documentWidth,
        resources,
        scripts,
      }),
    ),
    null,
    2,
  ),
);
