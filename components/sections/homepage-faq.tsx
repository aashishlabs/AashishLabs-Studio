import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/content/site";

export function HomepageFaq() {
  return (
    <div className="rounded-lg border border-white/10 bg-card/60 px-6 md:px-8">
      <Accordion type="single" collapsible>
        {siteConfig.home.faq.map((item, index) => (
          <AccordionItem key={item.question} value={`question-${index + 1}`}>
            <AccordionTrigger className="py-5 text-base md:text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="max-w-3xl pb-5 text-base leading-7">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
