import type { MetadataRoute } from "next";
import { getInsights, getServices, getWorkItems } from "@/lib/content/repository";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const staticRoutes = ["", "/services", "/work", "/insights", "/contact", "/privacy-policy", "/terms-of-use", "/thank-you"];
  const serviceRoutes = getServices().map((service) => `/services/${service.slug}`);
  const workRoutes = getWorkItems().map((item) => `/work/${item.slug}`);
  const insightRoutes = getInsights().map((item) => `/insights/${item.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...insightRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
