import { siteConfig } from "@/content/site";

export function ProcessTimeline() {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {siteConfig.home.process.map((step, index) => (
        <div key={step} className="rounded-lg border border-white/10 bg-card/70 p-5">
          <span className="text-sm font-semibold text-primary">0{index + 1}</span>
          <p className="mt-3 font-display text-xl font-semibold">{step}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Placeholder process copy configurable from content.</p>
        </div>
      ))}
    </div>
  );
}
