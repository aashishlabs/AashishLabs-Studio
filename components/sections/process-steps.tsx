"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

type Step = { title: string; description: string; outcome: string };

export function ProcessSteps({ steps }: { steps: readonly Step[] }) {
  const [active, setActive] = useState(0);
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
    <div className="rounded-xl border border-border bg-card/40 p-4 md:p-6">
      <div
        role="tablist"
        aria-label="Project process"
        className="relative grid grid-cols-5 gap-1 border-b border-border pb-5 md:gap-4"
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
            className={`focus-ring relative flex min-h-16 flex-col items-center justify-center gap-2 rounded-md px-0.5 py-2 text-[0.6875rem] font-semibold transition-colors sm:text-sm ${index === active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
          >
            <span className="text-[0.625rem] font-normal tracking-widest">
              0{index + 1}
            </span>
            {step.title}
          </button>
        ))}
      </div>
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
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
            <div className="border-t border-border pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                What you leave with
              </p>
              <p className="mt-3 text-sm leading-6">{step.outcome}</p>
            </div>
          </div>
        </div>
      ))}
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
