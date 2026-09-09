import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { HeroPreview } from "@/components/sections/hero-preview";
import { HeroBrandForm } from "@/components/sections/hero-brand-form";
import styles from "./hero-preview.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.heroGrid}`}>
        <HeroBrandForm>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" />
            {siteConfig.brand.tagline}
          </p>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.titleGradient}>Digital experiences</span>{" "}
            &amp; products.
            <br />
            <span className={styles.supportingTitle}>
              {siteConfig.home.hero.supportingTitle}
            </span>
          </h1>
          <p className={styles.description}>
            {siteConfig.home.hero.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                {siteConfig.home.hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#work">
                {siteConfig.home.hero.secondaryCta}
                <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            Independent digital partner in India. Built for ambitious
            businesses.
          </p>
        </HeroBrandForm>
        <HeroPreview />
      </div>
    </section>
  );
}
