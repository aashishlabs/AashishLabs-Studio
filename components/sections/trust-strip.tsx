import { siteConfig } from "@/content/site";

export function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-secondary/20 py-5">
      <div className="container grid gap-3 text-sm font-medium text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.home.trust.map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-background/40 px-4 py-3 text-center">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
