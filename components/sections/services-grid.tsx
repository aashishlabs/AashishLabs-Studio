import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  Layers,
  Search,
  MousePointer2,
} from "lucide-react";
import { services } from "@/content/site";

const icons = {
  "web-development": Globe2,
  "app-development": Layers,
  seo: Search,
  "performance-marketing": MousePointer2,
};

export function ServicesGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => {
        const Icon = icons[service.slug as keyof typeof icons] ?? Layers;
        return (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="focus-ring service-link group grid h-full grid-cols-[1.25rem_1fr] gap-x-3 rounded-xl border border-border bg-card/40 p-4 transition-colors hover:border-primary/50 hover:bg-card/80 sm:flex sm:flex-col sm:p-5"
          >
            <div className="flex items-center justify-between pt-1 sm:pt-0">
              <Icon
                className="h-5 w-5 text-primary"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <ArrowUpRight
                className="hidden h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none sm:block"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-display text-base font-semibold leading-snug sm:mt-5 sm:text-lg">
              {service.title}
            </h3>
            <p className="col-start-2 mb-3 mt-2 text-sm leading-6 text-muted-foreground sm:mb-5 sm:mt-3">
              {service.homeBenefit}
            </p>
            <span className="col-start-2 mt-auto text-sm font-semibold text-primary">
              Explore<span className="sr-only"> {service.title}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
