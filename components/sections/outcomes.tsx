import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function Outcomes() {
  return (
    <div className="grid gap-3 md:grid-cols-3 md:gap-4">
      {siteConfig.home.outcomes.map((outcome) => (
        <Card key={outcome.title} className="bg-card/70">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-lg md:text-xl">{outcome.title}</CardTitle>
            <CardDescription className="leading-5 md:leading-6">{outcome.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
