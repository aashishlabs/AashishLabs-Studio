import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/main-layout";
import { SectionHeading } from "@/components/sections/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { getServiceBySlug, getServices } from "@/lib/content/repository";
import { siteConfig } from "@/content/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo.description,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.brand.name
    }
  };

  return (
    <MainLayout>
      <JsonLd data={jsonLd} />
      <main>
        <section className="container py-16 md:py-24">
          <Link href="/services" className="text-sm font-semibold text-primary">
            Services
          </Link>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight md:text-7xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{service.heroCopy}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={`/contact?service=${service.slug}`}>Discuss this service</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={siteConfig.contact.whatsappUrl}>WhatsApp</a>
            </Button>
          </div>
        </section>
        <section className="container py-16">
          <SectionHeading eyebrow="Outcomes" title="What this should improve" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <Card key={outcome} className="bg-card/70">
                <CardHeader>
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{outcome}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
        <section className="container grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Included" title="A practical scope shaped around your goals" />
            <div className="mt-8 grid gap-3">
              {service.includes.map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-card/70 p-4 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="FAQ" title="Service questions" />
            <Accordion type="single" collapsible className="mt-6">
              {service.faq.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="container py-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-3xl font-semibold">Ready to shape this into a lead engine?</h2>
                <p className="mt-2 max-w-2xl text-primary-foreground/80">
                  Tell us where you are today and what you want to improve. We will help turn it into a clear, practical plan for launch and growth.
                </p>
              </div>
              <Button asChild variant="secondary">
                <Link href={`/contact?service=${service.slug}`}>Start a Project</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </MainLayout>
  );
}
