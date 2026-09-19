import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/content/site";

export function WhyAashishLabs() {
  return (
    <section id="studio" className="container page-section">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Why AashishLabs"
            title="One team. A connected approach."
            description="AI, automation, software, transformation and growth work together—so every technology decision has a business purpose."
          />
          <p className="mt-5 text-[0.9375rem] font-medium text-accent">
            {siteConfig.home.studio.principle}
          </p>
        </div>
        <div className="why-list divide-y divide-border border-y border-border">
          {siteConfig.home.difference.items.map((item, index) => (
            <details key={item.title} className="why-item group">
              <summary className="focus-ring why-summary flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
                <span className="why-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <span>{item.title}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 text-[0.9375rem] leading-6 text-muted-foreground">
                {item.description}
              </p>
            </details>
          ))}
          <details className="why-item group">
            <summary className="focus-ring why-summary flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
              <span className="why-index" aria-hidden="true">
                05
              </span>
              <span>More about AashishLabs</span>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="space-y-4 pb-5 text-[0.9375rem] leading-6 text-muted-foreground">
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
