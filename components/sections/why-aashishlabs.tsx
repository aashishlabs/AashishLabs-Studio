import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/content/site";

export function WhyAashishLabs() {
  return (
    <>
      <section className="container py-12 md:hidden">
        <SectionHeading
          eyebrow="Why AashishLabs"
          title={siteConfig.home.difference.title}
          description={siteConfig.home.difference.description}
        />
        <div className="mt-7 divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-card/70">
          {siteConfig.home.difference.items.map((item) => (
            <details key={item.title} className="group px-4">
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 font-display text-base font-semibold [&::-webkit-details-marker]:hidden">
                {item.title}
                <ChevronDown className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="pb-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </details>
          ))}
        </div>
        <details className="group mt-3 rounded-lg border border-primary/20 bg-card/70 p-4 shadow-glow">
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm [&::-webkit-details-marker]:hidden">
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-primary">The studio</span>
              <span className="mt-1 block font-display text-lg font-semibold">{siteConfig.home.studio.principle}</span>
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="mt-4 space-y-3 border-t border-white/10 pt-4 text-sm leading-6 text-muted-foreground">
            {siteConfig.home.studio.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button asChild size="sm" className="mt-5">
            <Link href="/contact">
              {siteConfig.home.studio.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </details>
      </section>

      <section className="container hidden py-20 md:block">
        <SectionHeading
          eyebrow="Why AashishLabs"
          title={siteConfig.home.difference.title}
          description={siteConfig.home.difference.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {siteConfig.home.difference.items.map((item) => (
            <Card key={item.title} className="bg-card/70">
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
