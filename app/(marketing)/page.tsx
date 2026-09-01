import { MainLayout } from "@/components/layout/main-layout";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeCta } from "@/components/sections/home-cta";
import { HomepageFaq } from "@/components/sections/homepage-faq";
import { Outcomes } from "@/components/sections/outcomes";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";
import { StudioIntroduction } from "@/components/sections/studio-introduction";
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
        <StudioIntroduction />
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
            title="A clear path from idea to launch."
            description="Every project is different, but the principles remain consistent: understand before building, validate important decisions early and launch with the foundations needed to learn."
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
        <section className="container py-20">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="A clearer start begins with better answers."
            description="What growing businesses commonly want to know before beginning a digital project with AashishLabs."
          />
          <div className="mt-10 max-w-4xl">
            <HomepageFaq />
          </div>
        </section>
        <HomeCta />
      </main>
    </MainLayout>
  );
}
