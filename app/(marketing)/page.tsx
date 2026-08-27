import { MainLayout } from "@/components/layout/main-layout";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeCta } from "@/components/sections/home-cta";
import { Outcomes } from "@/components/sections/outcomes";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WorkPreview } from "@/components/sections/work-preview";
import { WhyAashishLabs } from "@/components/sections/why-aashishlabs";

export default function HomePage() {
  return (
    <MainLayout>
      <main>
        <HomeHero />
        <TrustStrip />
        <section className="container py-20">
          <SectionHeading
            eyebrow="What we do"
            title="One agency for building, launching and growing digitally."
            description="Strategy, experience design, technology and marketing work better when they share the same direction. Our services take your business from idea or friction point to a focused digital solution."
          />
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </section>
        <WhyAashishLabs />
        <section className="container py-20">
          <SectionHeading
            eyebrow="What changes"
            title="Not just a polished launch. A stronger digital business system."
            description="Every engagement is shaped around clearer customer journeys, meaningful action and better information for future decisions."
          />
          <div className="mt-10">
            <Outcomes />
          </div>
        </section>
        <section id="process" className="container py-20">
          <SectionHeading
            eyebrow="How we work"
            title="A focused path from business challenge to measurable improvement."
            description="A clear five-stage process keeps decisions connected to your audience, priorities and desired outcomes."
          />
          <div className="mt-10">
            <ProcessTimeline />
          </div>
        </section>
        <section className="container py-20">
          <SectionHeading
            eyebrow="Selected builds"
            title="Ideas made tangible through strategy, design and technology."
            description="A selection of internal concepts demonstrating how we approach practical business challenges. Client work and verified results will be added as publishing permissions become available."
          />
          <div className="mt-10">
            <WorkPreview />
          </div>
        </section>
        <HomeCta />
      </main>
    </MainLayout>
  );
}
