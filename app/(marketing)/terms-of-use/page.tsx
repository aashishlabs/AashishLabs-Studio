import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use placeholder."
};

export default function TermsPage() {
  return (
    <MainLayout>
      <main className="container max-w-3xl py-20">
        <h1 className="font-display text-5xl font-semibold">Terms of Use</h1>
        <p className="mt-6 leading-8 text-muted-foreground">
          Placeholder terms for {siteConfig.brand.name}. Replace with approved legal copy before production launch.
        </p>
      </main>
    </MainLayout>
  );
}
