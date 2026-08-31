import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Campaign Landing Page",
  description: "Campaign landing page.",
  robots: { index: false, follow: false },
};

export default function CampaignPage() {
  notFound();
}
