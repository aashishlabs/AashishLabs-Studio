import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { ProjectPreview } from "@/components/sections/project-preview";
import { Button } from "@/components/ui/button";
import { getWorkBySlug, getWorkItems } from "@/lib/content/repository";

type WorkDetailProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return getWorkItems().map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: WorkDetailProps): Promise<Metadata> {
  const item = getWorkBySlug((await params).slug);
  return item ? { title: item.seo.title, description: item.seo.description, alternates: { canonical: `/work/${item.slug}` } } : {};
}
export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const item = getWorkBySlug((await params).slug);
  if (!item) notFound();
  const concept = item.projectType === "Concept Build";
  return (
    <MainLayout><main className="container py-12 md:py-16">
      <Link href="/work" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-muted-foreground"><ArrowLeft size={16} aria-hidden="true" />All work</Link>
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div><span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{item.projectType}</span>
          <p className="mt-5 text-sm text-muted-foreground">{item.category}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">{item.title}</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground">{item.summary}</p>
          {item.technologies && <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-2">{item.technologies.map(tech=><li key={tech} className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">{tech}</li>)}</ul>}
        </div>
        <div className="overflow-hidden rounded-xl border border-border"><ProjectPreview variant={item.preview} /><p className="bg-card p-3 text-xs leading-5 text-muted-foreground">{concept ? "Illustrative interface study. This is a concept, not a client delivery or measured result." : "Illustrative preview of our own studio website. Explore the working experience from the home page."}</p></div>
      </div>
      <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
        <section><h2 className="font-display text-2xl font-semibold">{concept ? "The question" : "The challenge"}</h2><p className="mt-4 text-base leading-7 text-muted-foreground">{item.problem}</p></section>
        <section><h2 className="font-display text-2xl font-semibold">{concept ? "Proposed approach" : "What we built"}</h2><p className="mt-4 text-base leading-7 text-muted-foreground">{item.solution}</p></section>
        <section><h2 className="font-display text-2xl font-semibold">{concept ? "Intended outcome" : "Delivery"}</h2><p className="mt-4 text-base leading-7 text-muted-foreground">{item.outcome}</p></section>
        <section><h2 className="font-display text-2xl font-semibold">{concept ? "Planning status" : "Included in the build"}</h2><ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-6 text-muted-foreground">{item.metrics.map(metric=><li key={metric}>{metric}</li>)}</ul></section>
      </div>
      <div className="mt-12 rounded-xl border border-border bg-card/60 p-6 md:flex md:items-center md:justify-between md:gap-6"><p className="font-display text-xl font-semibold">Have a similar challenge in mind?</p><Button asChild className="mt-4 md:mt-0"><Link href="/contact">Discuss your project<ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link></Button></div>
    </main></MainLayout>
  );
}
