import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NODE_ENV === "production" && !siteConfig.url.includes("localhost");

  return {
    rules: {
      userAgent: "*",
      allow: isProduction ? "/" : undefined,
      disallow: isProduction ? undefined : "/"
    },
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
