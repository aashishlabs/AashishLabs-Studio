import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getWorkBySlug, getWorkItems } from "@/lib/content/repository";

type WorkDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorkItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: WorkDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return {};
  return { title: item.seo.title, description: item.seo.description };
}

export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();

  return (
    <MainLayout>
      <main className="container py-20">
        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">{item.projectType}</span>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold md:text-7xl">{item.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{item.summary}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card className="bg-card/70">
            <CardHeader>
              <CardTitle>Outcome</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{item.outcome}</CardContent>
          </Card>
          <Card className="bg-card/70">
            <CardHeader>
              <CardTitle>Evidence status</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {item.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </MainLayout>
  );
}
