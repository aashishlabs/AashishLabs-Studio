import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore launch services for web development, app/PWA development, SEO and performance marketing.",
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <main className="container page-section">
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="AI, digital transformation and software services"
          description="Start with the capability your business needs most. We connect AI, automation, software, product and technology consulting, and growth services in a focused scope shaped around your priorities."
        />
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </main>
    </MainLayout>
  );
}
