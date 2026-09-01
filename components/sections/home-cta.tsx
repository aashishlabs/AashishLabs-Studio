import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function HomeCta() {
  return (
    <section className="container py-12 md:py-20">
      <div className="overflow-hidden rounded-lg border border-primary/25 bg-card/80 p-6 shadow-glow md:p-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary md:text-sm">Start with clarity</p>
          <h2 className="mt-3 font-display text-[1.75rem] font-semibold md:mt-4 md:text-5xl">{siteConfig.home.finalCta.title}</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground md:mt-5 md:text-lg md:leading-7">
            {siteConfig.home.finalCta.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
            <Button asChild size="lg" className="h-11 px-4 text-sm md:h-12 md:px-6 md:text-base">
              <Link href="/contact">
                {siteConfig.home.finalCta.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-11 px-4 text-sm md:h-12 md:px-6 md:text-base">
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
