import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Campaign Landing Page",
  description: "Configurable campaign landing page placeholder for paid acquisition tests."
};

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <MainLayout>
      <main className="container py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Campaign · {slug}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold md:text-7xl">
          Focused landing page placeholder for a paid campaign offer.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          This route captures UTM-ready traffic and can use reduced navigation, offer-specific proof, FAQ and a compact form in Sprint 2.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={`/contact?campaign=${slug}`}>Claim the offer</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={siteConfig.contact.whatsappUrl}>WhatsApp</a>
          </Button>
        </div>
        <Card className="mt-12 bg-card/70">
          <CardContent className="grid gap-4 p-6 md:grid-cols-3">
            {["Benefit placeholder", "Proof placeholder", "FAQ placeholder"].map((item) => (
              <div key={item} className="rounded-md border border-white/10 p-4 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </MainLayout>
  );
}
