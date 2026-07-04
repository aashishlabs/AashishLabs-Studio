import { MainLayout } from "@/components/layout/main-layout";
import { HomeHero } from "@/components/sections/home-hero";
import { Outcomes } from "@/components/sections/outcomes";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WorkPreview } from "@/components/sections/work-preview";

export default function HomePage() {
  return (
    <MainLayout>
      <main>
        <HomeHero />
        <TrustStrip />
        <section className="container py-20">
          <SectionHeading
            eyebrow="Services"
            title="Core launch services"
            description="Four configurable V1 service pages aligned to the BRD: web, app/PWA, SEO and performance marketing."
          />
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </section>
        <section className="container py-20">
          <SectionHeading
            eyebrow="Outcomes"
            title="Built for trust, leads and scale"
            description="The experience is designed to feel premium without sacrificing speed, accessibility or future content growth."
          />
          <div className="mt-10">
            <Outcomes />
          </div>
        </section>
        <section id="process" className="container py-20">
          <SectionHeading
            eyebrow="Process"
            title="A simple path from idea to measurable growth"
            description="A configurable process timeline for discovery, design, build, launch and growth."
          />
          <div className="mt-10">
            <ProcessTimeline />
          </div>
        </section>
        <section className="container py-20">
          <SectionHeading
            eyebrow="Selected work"
            title="Proof placeholders without fictional claims"
            description="Concept builds are labelled clearly until verified client case studies are available."
          />
          <div className="mt-10">
            <WorkPreview />
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
