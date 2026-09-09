"use client";

import { useRef } from "react";
import type { PointerEvent, PropsWithChildren } from "react";
import styles from "./hero-preview.module.css";

export function HeroBrandForm({ children }: PropsWithChildren) {
  const copyRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  function updatePointer(event: PointerEvent<HTMLDivElement>) {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      copyRef.current?.style.setProperty("--brand-form-x", `${x * 10}px`);
      copyRef.current?.style.setProperty("--brand-form-y", `${y * 8}px`);
    });
  }

  function resetPointer() {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      copyRef.current?.style.setProperty("--brand-form-x", "0px");
      copyRef.current?.style.setProperty("--brand-form-y", "0px");
    });
  }

  return (
    <div
      ref={copyRef}
      className={styles.copy}
      onPointerMove={updatePointer}
      onPointerLeave={resetPointer}
    >
      <div className={styles.brandForm} aria-hidden="true">
        <svg
          className={styles.brandFormSvg}
          viewBox="0 0 360 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="brand-form-indigo" x1="60" y1="255" x2="238" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--primary))" stopOpacity="0.16" />
              <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="brand-form-glass" x1="107" y1="37" x2="287" y2="238" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.2" />
              <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="brand-form-orange" x1="76" y1="236" x2="167" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--accent))" stopOpacity="0" />
              <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path className={styles.brandPlane} d="M77 246 157 39l92 155-89 53-83-1Z" fill="url(#brand-form-indigo)" />
          <path className={styles.brandPlaneGlass} d="m157 39 95 155 36-40-76-115-55 0Z" fill="url(#brand-form-glass)" />
          <path className={styles.brandStrokeOrange} d="M77 246 157 39" />
          <path className={styles.brandStroke} d="m279 246-67-170" />
          <path className={styles.brandStroke} d="m104 174 142 0" />
          <path className={styles.brandStrokeShort} d="m212 76 31-49" />
          <path className={styles.brandFacet} d="m104 174 56 73 86-73" />
          <circle className={styles.brandDot} cx="268" cy="34" r="10" />
        </svg>
      </div>
      {children}
    </div>
  );
}
