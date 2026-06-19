import { siteConfig } from "./site-config";
import { coreServices, getServicePath } from "./services";
import { neighborhoodAreas, getNeighborhoodPath } from "./neighborhoods";
import { blogPosts, getBlogPath } from "./blog-posts";

export type SiteRoute = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

/** Sitemap registry — exact priorities for SEO */
export const siteRoutes: SiteRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  ...coreServices.map((service) => ({
    path: getServicePath(service.slug),
    changeFrequency: "monthly" as const,
    priority: service.priority,
  })),
  ...neighborhoodAreas.map((area) => ({
    path: getNeighborhoodPath(area.slug),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  })),
  { path: "/concrete-leveling-cost", changeFrequency: "monthly", priority: 0.9 },
  { path: "/areas-served", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas-served/bellevue", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas-served/papillion", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas-served/elkhorn", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas-served/la-vista", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas-served/council-bluffs", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  ...blogPosts.map((post) => ({
    path: getBlogPath(post.slug),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  })),
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
];

export function getAbsoluteUrl(path: string): string {
  return `${siteConfig.schemaUrl}${path === "/" ? "" : path}`;
}
