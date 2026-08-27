import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid min-h-[calc(100svh-4.5rem)] items-center gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.13em] text-primary sm:text-xs sm:tracking-[0.18em]">
            <Sparkles className="h-3.5 w-3.5" />
            {siteConfig.brand.tagline}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-7xl">
            {siteConfig.home.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{siteConfig.home.hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                {siteConfig.home.hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">{siteConfig.home.hero.secondaryCta}</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-card p-4 shadow-glow">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--primary)/0.18),transparent_38%,hsl(var(--accent)/0.12))]" />
            <div className="relative grid h-full grid-rows-[auto_1fr_auto] gap-4">
              <div className="flex items-center justify-between rounded-md border border-white/10 bg-background/70 p-3">
                <span className="text-xs font-medium text-muted-foreground">Connected Digital System</span>
                <span className="rounded-full bg-primary/15 px-2 py-1 text-xs font-semibold text-primary">Built as one</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {siteConfig.home.hero.preview.map((item) => (
                  <div key={item.title} className="rounded-md border border-white/10 bg-background/60 p-4">
                    <div className="mb-4 h-2 w-10 rounded-full bg-primary/70" />
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-md border border-white/10 bg-background/70 p-3 text-sm text-muted-foreground">
                Web and product first. Growth foundations included from day one.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
