import { createRequire } from "node:module";
import path from "node:path";
import { writeFile } from "node:fs/promises";
const require = createRequire(
  path.join(process.env.V2_TOOL_MODULES, "package.json"),
);
const { chromium } = require("playwright");
const b = await chromium.launch({ channel: "chrome", headless: true });
const results = [];
for (const width of [769, 1024, 1440])
  for (const theme of ["dark", "light"])
    for (const [label, port] of [
      ["baseline", 3188],
      ["current", 3010],
    ]) {
      const c = await b.newContext({
        viewport: { width, height: 1000 },
        reducedMotion: "reduce",
      });
      await c.addInitScript(
        (t) => localStorage.setItem("aashishlabs-theme", t),
        theme,
      );
      const p = await c.newPage();
      await p.goto(`http://localhost:${port}`, { waitUntil: "networkidle" });
      await p.evaluate(() => document.fonts.ready);
      await p.screenshot({
        path: `output/v2-experience/mobile-final/desktop-${label}-${width}-${theme}.png`,
        fullPage: true,
      });
      results.push({
        width,
        theme,
        label,
        height: await p.evaluate(() => document.body.scrollHeight),
      });
      await c.close();
    }
await writeFile(
  "output/v2-experience/mobile-final/desktop-measurements.json",
  JSON.stringify(results, null, 2),
);
await b.close();
console.log(results);
