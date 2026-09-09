import { siteConfig } from "@/content/site";

export function TrustStrip() {
  return (
    <section
      aria-label="Our approach"
      className="border-y border-border bg-secondary/20 py-5"
    >
      <ul className="container grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-medium leading-5 text-muted-foreground lg:grid-cols-4">
        {siteConfig.home.trust.map((item) => (
          <li key={item} className="flex items-center gap-2 lg:justify-center">
            <span
              className="h-1 w-1 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
