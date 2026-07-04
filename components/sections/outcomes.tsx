import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function Outcomes() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {siteConfig.home.outcomes.map((outcome) => (
        <Card key={outcome.title} className="bg-card/70">
          <CardHeader>
            <CardTitle className="text-xl">{outcome.title}</CardTitle>
            <CardDescription>{outcome.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
