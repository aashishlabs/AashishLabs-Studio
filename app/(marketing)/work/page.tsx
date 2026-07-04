import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { SectionHeading } from "@/components/sections/section-heading";
import { WorkPreview } from "@/components/sections/work-preview";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work and labelled concept builds for the digital agency website."
};

export default function WorkPage() {
  return (
    <MainLayout>
      <main className="container py-20">
        <SectionHeading
          eyebrow="Work"
          title="Selected concepts and future case studies"
          description="Placeholders are intentionally labelled until verified client proof is available."
        />
        <div className="mt-10">
          <WorkPreview />
        </div>
      </main>
    </MainLayout>
  );
}
