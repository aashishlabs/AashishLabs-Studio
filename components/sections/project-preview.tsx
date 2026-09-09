import { ArrowUpRight, Layers } from "lucide-react";
import type { WorkItem } from "@/types/content";
import styles from "./project-preview.module.css";

export function ProjectPreview({ variant }: { variant: WorkItem["preview"] }) {
  return (
    <div className={`${styles.preview} ${styles[variant]}`} aria-hidden="true">
      <div className={styles.window}>
        <div className={styles.chrome}>
          <span>● ● ●</span>
          <span>
            {variant === "studio"
              ? "aashishlabs / experience"
              : "Interface study · concept"}
          </span>
          <ArrowUpRight size={12} />
        </div>
        {variant === "studio" ? (
          <div className={styles.studioPage}>
            <span className={styles.brand}>aashishlabs</span>
            <div className={styles.studioContent}>
              <div>
                <small>STRATEGY · DESIGN · TECHNOLOGY · GROWTH</small>
                <p>
                  Websites &amp;
                  <br />
                  digital products.
                </p>
                <span className={styles.line}>Built to move you forward.</span>
                <span className={styles.cta}>Discuss your project ↗</span>
              </div>
              <div className={styles.art}>
                <Layers strokeWidth={1} />
                <span>
                  Thoughtfully
                  <br />
                  connected.
                </span>
              </div>
            </div>
          </div>
        ) : variant === "local" ? (
          <div className={styles.localPage}>
            <span className={styles.conceptLabel}>
              LOCAL SERVICES / CONCEPT
            </span>
            <div className={styles.localContent}>
              <div>
                <p>
                  Local expertise.
                  <br />A clearer next step.
                </p>
                <span>Find the right service. Start a conversation.</span>
                <i>Explore services ↗</i>
              </div>
              <div className={styles.serviceList}>
                {[
                  "Find a service",
                  "Understand the offer",
                  "Make an enquiry",
                ].map((label, index) => (
                  <div key={label}>
                    <small>0{index + 1}</small>
                    {label}
                    <ArrowUpRight size={12} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.founderPage}>
            <span className={styles.conceptLabel}>
              FOUNDER PLATFORM / CONCEPT
            </span>
            <p>
              From idea
              <br />
              to first release.
            </p>
            <div className={styles.release}>
              {[
                "Define the MVP",
                "Prototype the flow",
                "Prepare to launch",
              ].map((label, index) => (
                <div key={label}>
                  <small>0{index + 1}</small>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
