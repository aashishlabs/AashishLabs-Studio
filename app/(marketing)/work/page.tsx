import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { SectionHeading } from "@/components/sections/section-heading";
import { WorkPreview } from "@/components/sections/work-preview";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore AashishLabs internal projects and clearly labelled concepts for websites, digital products and growth systems.",
};

export default function WorkPage() {
  return (
    <MainLayout>
      <main className="container py-20">
        <SectionHeading
          eyebrow="Work"
          title="How we think through digital challenges"
          description="Internal projects are our own working builds. Concept builds are explorations with intended outcomes. Client projects will be labelled separately when work is available to publish."
        />
        <div className="mt-10">
          <WorkPreview />
        </div>
      </main>
    </MainLayout>
  );
}
