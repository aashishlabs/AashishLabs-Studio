import Link from "next/link";
import { ArrowUpRight, Globe2, Layers, Search, MousePointer2 } from "lucide-react";
import { services } from "@/content/site";

const icons = { "web-development": Globe2, "app-development": Layers, seo: Search, "performance-marketing": MousePointer2 };

export function ServicesGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {services.map(service => {
        const Icon = icons[service.slug as keyof typeof icons] ?? Layers;
        return (
          <Link key={service.slug} href={`/services/${service.slug}`} className="focus-ring service-link group flex h-full flex-col rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/50 hover:bg-card/80">
            <div className="flex items-center justify-between"><Icon className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden="true" /><ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" /></div>
            <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{service.title}</h3>
            <p className="mb-5 mt-3 text-sm leading-6 text-muted-foreground">{service.homeBenefit}</p>
            <span className="mt-auto text-sm font-semibold text-primary">Explore<span className="sr-only"> {service.title}</span></span>
          </Link>
        );
      })}
    </div>
  );
}
