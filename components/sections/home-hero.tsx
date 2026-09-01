import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid items-center gap-8 py-10 md:min-h-[calc(100svh-4.5rem)] md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:py-24">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.13em] text-primary sm:text-xs sm:tracking-[0.18em]">
            <Sparkles className="h-3.5 w-3.5" />
            {siteConfig.brand.tagline}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-7xl">
            {siteConfig.home.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:mt-6 md:text-lg md:leading-8">{siteConfig.home.hero.description}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
            <Button asChild size="lg" className="h-11 px-4 text-sm md:h-12 md:px-6 md:text-base">
              <Link href="/contact">
                {siteConfig.home.hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-11 px-4 text-sm md:h-12 md:px-6 md:text-base">
              <Link href="/services">{siteConfig.home.hero.secondaryCta}</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-card p-3 shadow-glow md:aspect-[4/3] md:p-4">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--primary)/0.18),transparent_38%,hsl(var(--accent)/0.12))]" />
            <div className="relative grid h-full grid-rows-[auto_1fr_auto] gap-2 md:gap-4">
              <div className="flex items-center justify-between rounded-md border border-white/10 bg-background/70 p-2.5 md:p-3">
                <span className="text-xs font-medium text-muted-foreground">Connected Digital System</span>
                <span className="rounded-full bg-primary/15 px-2 py-1 text-xs font-semibold text-primary">Built as one</span>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {siteConfig.home.hero.preview.map((item) => (
                  <div key={item.title} className="rounded-md border border-white/10 bg-background/60 p-3 md:p-4">
                    <div className="mb-2 h-1.5 w-8 rounded-full bg-primary/70 md:mb-4 md:h-2 md:w-10" />
                    <p className="text-xs font-semibold md:text-sm">{item.title}</p>
                    <p className="mt-2 hidden text-xs leading-5 text-muted-foreground md:block">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-md border border-white/10 bg-background/70 p-2.5 text-xs leading-5 text-muted-foreground md:p-3 md:text-sm">
                Web and product first. Growth foundations included from day one.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
