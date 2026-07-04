import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for lead capture and analytics disclosure."
};

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <main className="container max-w-3xl py-20">
        <h1 className="font-display text-5xl font-semibold">Privacy Policy</h1>
        <p className="mt-6 leading-8 text-muted-foreground">
          Placeholder privacy policy for {siteConfig.brand.name}. Replace with reviewed business details, retention policy,
          analytics disclosure, Supabase data handling and contact information before launch.
        </p>
      </main>
    </MainLayout>
  );
}
