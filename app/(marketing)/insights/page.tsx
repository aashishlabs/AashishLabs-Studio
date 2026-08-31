import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getInsights } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical notes on websites, digital products, SEO and measurable growth for emerging businesses.",
};

export default function InsightsPage() {
  return (
    <MainLayout>
      <main className="container py-20">
        <SectionHeading
          eyebrow="Insights"
          title="Growth notes and launch thinking"
          description="Practical thinking for startups, SMEs and MSMEs making decisions about websites, products, search and growth."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {getInsights().map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="focus-ring rounded-lg"
            >
              <Card className="h-full bg-card/70 transition hover:border-primary/50">
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {insight.category}
                  </p>
                  <CardTitle>{insight.title}</CardTitle>
                  <CardDescription>{insight.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </MainLayout>
  );
}
