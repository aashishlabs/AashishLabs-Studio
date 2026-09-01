import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore launch services for web development, app/PWA development, SEO and performance marketing."
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <main className="container py-20">
        <SectionHeading
          eyebrow="Services"
          title="Digital systems for launch and growth"
          description="Start with the capability your business needs most. We can combine strategy, design, technology and growth support into a focused scope that fits your stage and priorities."
        />
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </main>
    </MainLayout>
  );
}
