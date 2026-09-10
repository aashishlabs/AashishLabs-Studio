"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/types/content";
import { ProjectPreview } from "@/components/sections/project-preview";
import styles from "./work-preview.module.css";

export function MobileWorkCarousel({ items }: { items: readonly WorkItem[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function updateActive() {
    const element = track.current;
    if (!element) return;
    const cards = Array.from(element.children) as HTMLElement[];
    const nearest = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(
          card.getBoundingClientRect().left -
            element.getBoundingClientRect().left -
            18,
        );
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );
    setActive(nearest.index);
  }

  function select(index: number) {
    const element = track.current;
    const card = element?.children[index] as HTMLElement | undefined;
    if (!element || !card) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    element.scrollTo({
      left:
        element.scrollLeft +
        card.getBoundingClientRect().left -
        element.getBoundingClientRect().left -
        18,
      behavior: reduced ? "auto" : "smooth",
    });
    setActive(index);
  }

  return (
    <div
      className={styles.mobileCarousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected work"
    >
      <div ref={track} className={styles.track} onScroll={updateActive}>
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className={`focus-ring mobile-work-card ${styles.mobileCard}`}
          >
            <ProjectPreview variant={item.preview} compact />
            <div className={styles.mobileContent}>
              <div className={styles.mobileMeta}>
                <span>{item.projectType}</span>
                <span>{item.category}</span>
              </div>
              <h3>
                {item.title}
                <ArrowUpRight size={19} aria-hidden="true" />
              </h3>
              <p>{item.summary}</p>
              <span className={styles.mobileCta}>
                {item.projectType === "Concept Build"
                  ? "Explore concept"
                  : "View case study"}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.carouselFooter}>
        <span aria-live="polite">
          0{active + 1} <i /> 0{items.length}
        </span>
        <div aria-label="Choose project">
          {items.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              className="focus-ring rounded-full"
              aria-label={`Show ${item.title}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => select(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
