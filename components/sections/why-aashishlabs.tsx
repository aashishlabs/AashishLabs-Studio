import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/content/site";

export function WhyAashishLabs() {
  return (
    <section id="studio" className="container py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Why AashishLabs"
            title="One studio. A connected approach."
            description="Strategy, design, technology and growth work together—so every decision has a business purpose."
          />
          <p className="mt-5 text-sm font-medium text-accent">
            {siteConfig.home.studio.principle}
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {siteConfig.home.difference.items.map((item) => (
            <details key={item.title} className="group">
              <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
                {item.title}
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </details>
          ))}
          <details className="group">
            <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
              More about the studio
              <ChevronDown
                className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="space-y-4 pb-5 text-sm leading-6 text-muted-foreground">
              {siteConfig.home.studio.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>{siteConfig.home.difference.description}</p>
              <ul className="space-y-3 border-t border-border pt-4">
                {siteConfig.home.outcomes.map((item) => (
                  <li key={item.title}>
                    <strong className="text-foreground">{item.title}. </strong>
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
