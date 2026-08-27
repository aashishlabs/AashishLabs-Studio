import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/content/site";

export function WhyAashishLabs() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Why AashishLabs"
        title={siteConfig.home.difference.title}
        description={siteConfig.home.difference.description}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {siteConfig.home.difference.items.map((item) => (
          <Card key={item.title} className="bg-card/70">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
