import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { workItems } from "@/content/site";
import { ProjectPreview } from "@/components/sections/project-preview";

export function WorkPreview({ featured = false }: { featured?: boolean }) {
  const items = featured ? workItems.slice(0, 2) : workItems;
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map(item => (
          <Link key={item.slug} href={`/work/${item.slug}`} className="focus-ring project-link group overflow-hidden rounded-xl border border-border bg-card/50 transition-colors hover:border-primary/50">
            <ProjectPreview variant={item.preview} />
            <div className="p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                <span className={`rounded-full px-2.5 py-1 font-semibold ${item.projectType === "Concept Build" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}`}>{item.projectType}</span>
                <span className="text-muted-foreground">{item.category}</span>
              </div>
              <h3 className="mt-4 flex items-start justify-between gap-4 font-display text-xl font-semibold md:text-2xl">{item.title}<ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" /></h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{item.projectType === "Concept Build" ? "Explore the concept" : "View case study"}<span className="sr-only">: {item.title}</span></p>
            </div>
          </Link>
        ))}
      </div>
      {featured && <Link href="/work" className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-primary">Explore all work<ArrowRight size={16} aria-hidden="true" /></Link>}
    </div>
  );
}
