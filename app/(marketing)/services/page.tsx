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
          description="Each service template is content-configurable and ready for future CMS-backed publishing."
        />
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </main>
    </MainLayout>
  );
}
