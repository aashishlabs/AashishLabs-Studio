import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import type { FaqItem } from "@/types/content";

function Question({ item }: { item: FaqItem }) {
  return (
    <details className="group border-b border-border">
      <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 rounded-sm py-4 text-sm font-semibold md:text-base [&::-webkit-details-marker]:hidden">
        {item.question}<ChevronDown className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <p className="pb-5 text-sm leading-6 text-muted-foreground">{item.answer}</p>
    </details>
  );
}

export function HomepageFaq() {
  const visible = siteConfig.home.faq.slice(0, 3);
  const more = siteConfig.home.faq.slice(3);
  return (
    <div className="border-t border-border">
      {visible.map(item => <Question key={item.question} item={item} />)}
      {more.length > 0 && <details className="group/more">
        <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-sm font-semibold text-primary [&::-webkit-details-marker]:hidden">
          More questions ({more.length})<ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open/more:rotate-180" aria-hidden="true" />
        </summary>
        {more.map(item => <Question key={item.question} item={item} />)}
      </details>}
    </div>
  );
}
