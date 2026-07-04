import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layout/main-layout";
import { getInsightBySlug, getInsights } from "@/lib/content/repository";

type InsightDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getInsights().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: InsightDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  return { title: insight.seo.title, description: insight.seo.description };
}

export default async function InsightDetailPage({ params }: InsightDetailProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  return (
    <MainLayout>
      <article className="container max-w-3xl py-20">
        <p className="text-sm font-semibold text-primary">{insight.category} · {insight.readTime}</p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl">{insight.title}</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{insight.excerpt}</p>
        <div className="mt-10 rounded-lg border border-white/10 bg-card/70 p-6 text-muted-foreground">
          Placeholder article body. Replace this with CMS-managed content before public content launch.
        </div>
      </article>
    </MainLayout>
  );
}
