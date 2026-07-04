import type { Metadata } from "next";
import { Suspense } from "react";
import { LeadForm } from "@/components/forms/lead-form";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project enquiry or contact the agency through direct channels."
};

export default function ContactPage() {
  return (
    <MainLayout>
      <main className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h1 className="font-display text-5xl font-semibold md:text-7xl">Start a project</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Share a few details and the configured business inbox will receive a lead notification after storage succeeds.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground">
              <a href={siteConfig.contact.whatsappUrl} className="hover:text-foreground">WhatsApp: {siteConfig.contact.phone}</a>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">Email: {siteConfig.contact.email}</a>
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-foreground">Call: {siteConfig.contact.phone}</a>
            </div>
          </div>
          <Card className="bg-card/80">
            <CardContent className="p-5 md:p-6">
              <Suspense fallback={<p className="text-sm text-muted-foreground">Loading form...</p>}>
                <LeadForm />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </main>
    </MainLayout>
  );
}
