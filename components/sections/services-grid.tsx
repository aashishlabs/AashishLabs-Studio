import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/content/site";

export function ServicesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <Link key={service.slug} href={`/services/${service.slug}`} className="focus-ring group rounded-lg">
          <Card className="h-full bg-card/70 transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription>{service.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="inline-flex items-center text-sm font-semibold text-primary">
                View service <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
