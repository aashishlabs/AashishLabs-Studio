"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

type Step = { title: string; description: string; outcome: string };

export function ProcessSteps({ steps }: { steps: readonly Step[] }) {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % steps.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + steps.length) % steps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = steps.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  return (
    <div className="process-shell rounded-xl border border-border bg-card/40 p-2 sm:p-4 md:p-6">
      <div className="sm:hidden" aria-label="Project process">
        {steps.map((step, index) => {
          const isActive = index === active;
          return (
            <div
              key={step.title}
              className="border-b border-border last:border-b-0"
            >
              <button
                type="button"
                id={`${id}-mobile-trigger-${index}`}
                aria-expanded={isActive}
                aria-controls={`${id}-mobile-panel-${index}`}
                onClick={() => setActive(index)}
                className="focus-ring process-trigger flex min-h-16 w-full items-center gap-4 rounded-lg px-3 py-3 text-left"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold tracking-wider ${isActive ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background/60 text-muted-foreground"}`}
                >
                  0{index + 1}
                </span>
                <span className="font-display text-base font-semibold">
                  {step.title}
                </span>
                <ChevronDown
                  className={`ml-auto h-4 w-4 shrink-0 text-primary transition-transform duration-300 motion-reduce:transition-none ${isActive ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    id={`${id}-mobile-panel-${index}`}
                    role="region"
                    aria-labelledby={`${id}-mobile-trigger-${index}`}
                    initial={reducedMotion ? false : { height: 0 }}
                    animate={{ height: "auto" }}
                    exit={reducedMotion ? undefined : { height: 0 }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-5 pl-16">
                      <p className="text-[0.9375rem] leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                      <div className="mt-4 border-l-2 border-primary/60 pl-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          What you leave with
                        </p>
                        <p className="mt-2 text-[0.9375rem] leading-6">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div
        role="tablist"
        aria-label="Project process"
        className="relative hidden grid-cols-5 gap-1 border-b border-border pb-5 sm:grid md:gap-4"
      >
        {steps.map((step, index) => (
          <button
            key={step.title}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-controls={`${id}-panel-${index}`}
            aria-selected={index === active}
            tabIndex={index === active ? 0 : -1}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            onClick={() => setActive(index)}
            onKeyDown={(event) => navigate(event, index)}
            className={`focus-ring relative flex min-h-16 flex-col items-center justify-center gap-2 rounded-md px-0.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${index === active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
          >
            <span className="text-xs font-normal tracking-widest">
              0{index + 1}
            </span>
            {step.title}
          </button>
        ))}
      </div>
      <div className="hidden sm:block">
        {steps.map((step, index) => (
          <div
            key={step.title}
            role="tabpanel"
            id={`${id}-panel-${index}`}
            aria-labelledby={`${id}-tab-${index}`}
            hidden={index !== active}
            tabIndex={0}
            className="focus-ring mt-5 min-h-52 rounded-md sm:min-h-40 md:min-h-32"
          >
            <div className="grid gap-5 md:grid-cols-[1.2fr_1fr] md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {step.title}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <div className="border-t border-border pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  What you leave with
                </p>
                <p className="mt-3 text-[0.9375rem] leading-6">
                  {step.outcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <noscript>
        <div className="mt-6 space-y-4">
          {steps.slice(1).map((step) => (
            <details key={step.title}>
              <summary className="cursor-pointer py-3 font-semibold">
                {step.title}
              </summary>
              <p className="text-sm leading-6">{step.description}</p>
              <p className="mt-2 text-sm leading-6">{step.outcome}</p>
            </details>
          ))}
        </div>
      </noscript>
    </div>
  );
}
