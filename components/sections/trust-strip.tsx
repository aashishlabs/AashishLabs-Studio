import { siteConfig } from "@/content/site";

export function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-secondary/20 py-3 md:py-5">
      <div className="container grid grid-cols-2 gap-2 text-xs font-medium leading-5 text-muted-foreground md:gap-3 md:text-sm lg:grid-cols-4">
        {siteConfig.home.trust.map((item) => (
          <div key={item} className="flex min-h-12 items-center justify-center rounded-md border border-white/10 bg-background/40 px-2 py-2 text-center md:px-4 md:py-3">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
