import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { SectionHeading } from "@/components/sections/section-heading";
import { WorkPreview } from "@/components/sections/work-preview";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore transparent AashishLabs studio concepts for websites, digital products, SEO and growth systems.",
};

export default function WorkPage() {
  return (
    <MainLayout>
      <main className="container py-20">
        <SectionHeading
          eyebrow="Work"
          title="How we think through digital challenges"
          description="These studio concepts demonstrate our approach without presenting unverified results as client work. Verified case studies will be added as the portfolio grows."
        />
        <div className="mt-10">
          <WorkPreview />
        </div>
      </main>
    </MainLayout>
  );
}
