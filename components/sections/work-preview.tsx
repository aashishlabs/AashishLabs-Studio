import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workItems } from "@/content/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WorkPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {workItems.map((item, index) => (
        <Link key={item.slug} href={`/work/${item.slug}`} className={`focus-ring rounded-lg ${index > 0 ? "hidden md:block" : ""}`}>
          <Card className="h-full bg-card/70 transition hover:border-primary/50">
            <CardHeader className="p-5 md:p-6">
              <div className="mb-2 w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent md:mb-3">
                {item.projectType}
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.summary}</CardDescription>
            </CardHeader>
            <CardContent className="px-5 pb-5 text-sm text-muted-foreground md:px-6 md:pb-6">{item.outcome}</CardContent>
          </Card>
        </Link>
      ))}
      <Link href="/work" className="focus-ring inline-flex items-center justify-center rounded-md py-2 text-sm font-semibold text-primary md:hidden">
        View all builds
        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
