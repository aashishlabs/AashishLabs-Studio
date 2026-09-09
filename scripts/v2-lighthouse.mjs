// Reuse Playwright's Chrome process to avoid Lighthouse's Windows temp-profile cleanup issue.
import { createRequire } from "node:module";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
const require = createRequire(
  path.join(process.env.V2_TOOL_MODULES, "package.json"),
);
const { chromium } = require("playwright");
const { default: lighthouse } = await import(
  pathToFileURL(path.join(process.env.V2_LIGHTHOUSE_MODULE, "core/index.js"))
);
const { default: desktopConfig } = await import(
  pathToFileURL(
    path.join(
      process.env.V2_LIGHTHOUSE_MODULE,
      "core/config/desktop-config.js",
    ),
  )
);
const output = path.resolve(process.argv[2] || "output/v2-experience/final");
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--remote-debugging-port=9333"],
});
const summaries = [];
try {
  for (const preset of ["mobile", "desktop"]) {
    const result = await lighthouse(
      process.env.V2_URL || "http://localhost:3000",
      {
        port: 9333,
        logLevel: "error",
        output: ["html", "json"],
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
      },
      preset === "desktop" ? desktopConfig : undefined,
    );
    await writeFile(
      path.join(output, `lighthouse-${preset}.report.html`),
      result.report[0],
    );
    await writeFile(
      path.join(output, `lighthouse-${preset}.report.json`),
      result.report[1],
    );
    summaries.push({
      preset,
      version: result.lhr.lighthouseVersion,
      scores: Object.fromEntries(
        Object.entries(result.lhr.categories).map(([k, v]) => [k, v.score]),
      ),
      metrics: Object.fromEntries(
        [
          "first-contentful-paint",
          "largest-contentful-paint",
          "total-blocking-time",
          "cumulative-layout-shift",
          "speed-index",
        ].map((id) => [id, result.lhr.audits[id].numericValue]),
      ),
      failedAudits: Object.entries(result.lhr.audits)
        .filter(([, v]) => v.score !== null && v.score < 0.9)
        .map(([id, v]) => ({ id, title: v.title, value: v.displayValue })),
    });
  }
} finally {
  await browser.close();
}
await writeFile(
  path.join(output, "lighthouse-summary.json"),
  JSON.stringify(summaries, null, 2),
);
console.log(JSON.stringify(summaries, null, 2));
