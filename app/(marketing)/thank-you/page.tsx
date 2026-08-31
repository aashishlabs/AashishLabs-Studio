import Link from "next/link";
import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Project enquiry confirmation.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <MainLayout>
      <main className="container flex min-h-[70vh] flex-col justify-center py-20">
        <h1 className="font-display text-5xl font-semibold md:text-7xl">
          Thanks. Your enquiry is in.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          We have received your project details and will review them shortly.
          Expect a reply by email or phone within one business day.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/services">Explore services</Link>
          </Button>
          <Button asChild variant="secondary">
            <a href={siteConfig.contact.whatsappUrl}>Message on WhatsApp</a>
          </Button>
        </div>
      </main>
    </MainLayout>
  );
}
