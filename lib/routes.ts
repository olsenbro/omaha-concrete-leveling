import { siteConfig } from "./site-config";

export type SiteRoute = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

/** Sitemap registry — exact priorities for SEO */
export const siteRoutes: SiteRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/mudjacking", changeFrequency: "monthly", priority: 0.9 },
  { path: "/foam-jacking", changeFrequency: "monthly", priority: 0.9 },
  { path: "/driveway-leveling", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sidewalk-repair", changeFrequency: "monthly", priority: 0.8 },
  { path: "/patio-leveling", changeFrequency: "monthly", priority: 0.8 },
  { path: "/garage-floor-leveling", changeFrequency: "monthly", priority: 0.8 },
  { path: "/concrete-leveling-cost", changeFrequency: "monthly", priority: 0.9 },
  { path: "/areas-served", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas-served/bellevue", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas-served/papillion", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas-served/elkhorn", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas-served/la-vista", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas-served/council-bluffs", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
];

export function getAbsoluteUrl(path: string): string {
  return `${siteConfig.schemaUrl}${path === "/" ? "" : path}`;
}
