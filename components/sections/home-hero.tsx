import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { HeroPreview } from "@/components/sections/hero-preview";
import styles from "./hero-preview.module.css";

export function HomeHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-title"
      data-mobile-action-guard
    >
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.copy}>
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
          <div className={styles.heroActions}>
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
          <p className={styles.trustNote}>
            Independent digital partner in India. Built for ambitious
            businesses.
          </p>
        </div>
        <HeroPreview />
      </div>
    </section>
  );
}
