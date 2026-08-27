import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/700.css";
import { AnalyticsEvents } from "@/components/analytics/analytics-events";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { siteConfig } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.brand.name}`
  },
  description: siteConfig.seo.defaultDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/aashishlabs-favicon-32.png", type: "image/png", sizes: "32x32" }
    ],
    apple: [{ url: "/brand/aashishlabs-app-icon-512.png", type: "image/png", sizes: "512x512" }]
  },
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.brand.name,
    images: [
      {
        url: "/brand/aashishlabs-social-1024.png",
        width: 1024,
        height: 1024,
        alt: "aashishlabs brand mark"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: ["/brand/aashishlabs-social-1024.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1628"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        <AnalyticsEvents />
        {children}
      </body>
    </html>
  );
}
