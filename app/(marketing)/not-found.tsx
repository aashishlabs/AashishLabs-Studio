import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";

export default function MarketingNotFound() {
  return (
    <MainLayout>
      <main className="container flex min-h-[70vh] flex-col justify-center py-20">
        <h1 className="font-display text-5xl font-semibold md:text-7xl">Page not found</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          This content is not published yet, or the route has moved.
        </p>
        <Button asChild className="mt-8 w-fit">
          <Link href="/contact">Start a Project</Link>
        </Button>
      </main>
    </MainLayout>
  );
}
