export const siteConfig = {
  name: "Omaha Concrete Leveling",
  tagline: "Professional Concrete Leveling & Mudjacking in Omaha, NE",
  description:
    "Trusted local experts for concrete leveling, mudjacking, and slab repair in Omaha, Nebraska. Free estimates, same-week service, and results that last.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://omaha-concrete-leveling.vercel.app",
  schemaUrl: "https://omahaconcretelveling.com",
  phone: "(402) 555-0190",
  phoneHref: "tel:+14025550190",
  email: "info@omahaconcreteleveling.com",
  foundedYear: 2008,
  address: {
    street: "Omaha, NE",
    city: "Omaha",
    state: "NE",
    zip: "68102",
    country: "US",
  },
  serviceArea: "Omaha, Council Bluffs, Papillion, Bellevue, and surrounding areas",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
} as const;

export const serviceLinks = [
  { href: "/mudjacking", label: "Mudjacking" },
  { href: "/foam-jacking", label: "Foam/PolyJacking" },
  { href: "/driveway-leveling", label: "Driveway Leveling" },
  { href: "/sidewalk-repair", label: "Sidewalk Repair" },
  { href: "/patio-leveling", label: "Patio Leveling" },
  { href: "/garage-floor-leveling", label: "Garage Floor Leveling" },
] as const;

export const mainNavLinks = [
  { href: "/concrete-leveling-cost", label: "Cost Guide" },
  { href: "/areas-served", label: "Areas Served" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerQuickLinks = [
  { href: "/", label: "Home" },
  { href: "/mudjacking", label: "Mudjacking" },
  { href: "/foam-jacking", label: "PolyJacking" },
  { href: "/driveway-leveling", label: "Driveway Leveling" },
  { href: "/sidewalk-repair", label: "Sidewalk Repair" },
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
