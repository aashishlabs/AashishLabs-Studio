import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function StudioIntroduction() {
  return (
    <section className="container hidden py-20 md:block">
      <div className="grid gap-8 overflow-hidden rounded-lg border border-primary/20 bg-card/70 p-8 shadow-glow md:grid-cols-[0.8fr_1.2fr] md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The studio
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
            {siteConfig.home.studio.title}
          </h2>
          <p className="mt-6 font-display text-lg font-semibold text-primary">
            {siteConfig.home.studio.principle}
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="space-y-4 text-base leading-7 text-muted-foreground md:text-lg">
            {siteConfig.home.studio.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                {siteConfig.home.studio.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
