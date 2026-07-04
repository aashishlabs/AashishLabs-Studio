import { insights, services, workItems } from "@/content/site";

export function getServices() {
  return services;
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug) ?? null;
}

export function getWorkItems() {
  return workItems;
}

export function getWorkBySlug(slug: string) {
  return workItems.find((item) => item.slug === slug) ?? null;
}

export function getInsights() {
  return insights;
}

export function getInsightBySlug(slug: string) {
  return insights.find((item) => item.slug === slug) ?? null;
}
