import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/content/site";

export function ProcessTimeline() {
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-white/10 bg-card/70 px-4 md:hidden">
        <Accordion type="single" collapsible>
          {siteConfig.home.process.map((step, index) => (
            <AccordionItem key={step.title} value={`process-${index + 1}`}>
              <AccordionTrigger className="py-4 text-base">
                <span className="flex items-center gap-3 text-left">
                  <span className="text-xs font-semibold text-primary">0{index + 1}</span>
                  <span>{step.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-6">
                <p>{step.description}</p>
                <p className="mt-3 border-t border-white/10 pt-3 text-foreground/80">
                  <span className="font-semibold text-primary">What you can expect: </span>
                  {step.outcome}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden gap-4 md:grid lg:grid-cols-5">
        {siteConfig.home.process.map((step, index) => (
          <div key={step.title} className="rounded-lg border border-white/10 bg-card/70 p-5">
            <span className="text-sm font-semibold text-primary">0{index + 1}</span>
            <p className="mt-3 font-display text-xl font-semibold">{step.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
            <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-foreground/80">
              <span className="font-semibold text-primary">What you can expect: </span>
              {step.outcome}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
