import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function HomeCta() {
  return (
    <section className="container py-20">
      <div className="overflow-hidden rounded-lg border border-primary/25 bg-card/80 p-8 shadow-glow md:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Start with clarity</p>
          <h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">{siteConfig.home.finalCta.title}</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            {siteConfig.home.finalCta.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                {siteConfig.home.finalCta.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                {siteConfig.home.finalCta.secondaryCta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
