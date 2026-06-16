const DEFAULT_SITE_URL = "https://mudjackingomaha.com";

function resolvePublicSiteUrl(value: string | undefined): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : DEFAULT_SITE_URL;
}

export const siteConfig = {
  name: "Omaha Mudjacking Pros",
  tagline: "Professional Concrete Leveling & Mudjacking in Omaha, NE",
  description:
    "Connect with trusted local concrete leveling and mudjacking specialists in Omaha, Nebraska. Free estimates, same-week service referrals, and results that last.",
  url: resolvePublicSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  schemaUrl: resolvePublicSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  phone: "(402) 749-8050",
  phoneHref: "tel:+14027498050",
  email: "info@mudjackingomaha.com",
  foundedYear: 2008,
  address: {
    street: "Omaha, NE",
    city: "Omaha",
    state: "NE",
    zip: "68102",
    country: "US",
  },
  geo: {
    latitude: 41.2565,
    longitude: -95.9345,
  },
  serviceArea: "Omaha, Council Bluffs, Papillion, Bellevue, and surrounding areas",
  gaId: process.env.NEXT_PUBLIC_GA_ID?.trim() || "G-WJN1M8CZCC",
} as const;

export const serviceLinks = [
  { href: "/services/mudjacking", label: "Mudjacking" },
  { href: "/services/foam-jacking", label: "Foam/PolyJacking" },
  { href: "/services/driveway-leveling", label: "Driveway Leveling" },
  { href: "/services/sidewalk-repair", label: "Sidewalk Repair" },
  { href: "/services/patio-leveling", label: "Patio Leveling" },
  { href: "/services/garage-floor-leveling", label: "Garage Floor Leveling" },
] as const;

export const mainNavLinks = [
  { href: "/concrete-leveling-cost", label: "Cost Guide" },
  { href: "/areas-served", label: "Areas Served" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerQuickLinks = [
  { href: "/", label: "Home" },
  { href: "/services/mudjacking", label: "Mudjacking" },
  { href: "/services/foam-jacking", label: "PolyJacking" },
  { href: "/services/driveway-leveling", label: "Driveway Leveling" },
  { href: "/services/sidewalk-repair", label: "Sidewalk Repair" },
  { href: "/concrete-leveling-cost", label: "Cost Guide" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceAreas = [
  "Omaha",
  "Bellevue",
  "Papillion",
  "La Vista",
  "Ralston",
  "Millard",
  "Elkhorn",
  "Gretna",
  "Bennington",
  "Council Bluffs IA",
] as const;

/** @deprecated Use mainNavLinks — kept for backward compatibility */
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
