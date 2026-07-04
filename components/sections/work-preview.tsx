import Link from "next/link";
import { workItems } from "@/content/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WorkPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {workItems.map((item) => (
        <Link key={item.slug} href={`/work/${item.slug}`} className="focus-ring rounded-lg">
          <Card className="h-full bg-card/70 transition hover:border-primary/50">
            <CardHeader>
              <div className="mb-3 w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                {item.projectType}
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.summary}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{item.outcome}</CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
