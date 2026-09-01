import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/content/site";

export function HomepageFaq() {
  return (
    <>
      <div className="rounded-lg border border-white/10 bg-card/60 px-4 md:hidden">
        <Accordion type="single" collapsible>
          {siteConfig.home.faq.slice(0, 4).map((item, index) => (
            <AccordionItem key={item.question} value={`question-${index + 1}`}>
              <AccordionTrigger className="py-4 text-sm">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <details className="group border-b">
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-sm py-4 text-sm font-semibold text-primary [&::-webkit-details-marker]:hidden">
            View {siteConfig.home.faq.length - 4} more questions
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <Accordion type="single" collapsible>
            {siteConfig.home.faq.slice(4).map((item, index) => (
              <AccordionItem key={item.question} value={`more-question-${index + 1}`}>
                <AccordionTrigger className="py-4 text-sm">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </details>
      </div>

      <div className="hidden rounded-lg border border-white/10 bg-card/60 px-8 md:block">
        <Accordion type="single" collapsible>
          {siteConfig.home.faq.map((item, index) => (
            <AccordionItem key={item.question} value={`question-${index + 1}`}>
              <AccordionTrigger className="py-5 text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl pb-5 text-base leading-7">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
