import { MainLayout } from "@/components/layout/main-layout";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeCta } from "@/components/sections/home-cta";
import { HomepageFaq } from "@/components/sections/homepage-faq";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WorkPreview } from "@/components/sections/work-preview";
import { WhyAashishLabs } from "@/components/sections/why-aashishlabs";

export default function HomePage() {
  return (
    <MainLayout>
      <main className="homepage">
        <HomeHero />
        <TrustStrip />
        <section id="work" className="container page-section">
          <SectionHeading
            eyebrow="Selected work"
            title="See the thinking. Explore the build."
            description="Working projects and clearly labelled concepts, with the thinking behind each."
          />
          <div className="mt-7 md:mt-9">
            <WorkPreview featured />
          </div>
        </section>
        <section id="services" className="container page-section">
          <SectionHeading
            eyebrow="What we build"
            title="Your next step, built with purpose."
            description="Websites, digital products, search and campaigns. Start with what your business needs now."
          />
          <div className="mt-7 md:mt-9">
            <ServicesGrid />
          </div>
        </section>
        <WhyAashishLabs />
        <section id="process" className="container page-section">
          <SectionHeading
            eyebrow="How we work"
            title="Clear steps. Shared direction."
            description="From the first conversation to what comes after launch. Explore each step."
          />
          <div className="mt-7 md:mt-9">
            <ProcessTimeline />
          </div>
        </section>
        <section
          id="faq"
          className="container page-section grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <SectionHeading
            eyebrow="A few good questions"
            title="Start with clarity."
            description="Scope, timelines, ownership and what happens next."
          />
          <HomepageFaq />
        </section>
        <HomeCta />
      </main>
    </MainLayout>
  );
}
