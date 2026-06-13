import { siteConfig } from "./site-config";

export type SchemaObject = Record<string, unknown>;

/** Serialize schema for dangerouslySetInnerHTML in next/script */
export function schemaToScriptHtml(schema: SchemaObject): string {
  return JSON.stringify(schema);
}

export function localBusinessSchema(city?: string, state?: string): string {
  return schemaToScriptHtml({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description:
      "Professional concrete leveling, mudjacking, and foam jacking services in Omaha, Nebraska and surrounding areas.",
    telephone: siteConfig.phone,
    url: siteConfig.schemaUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: city ?? siteConfig.address.city,
      addressRegion: state ?? siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [
      "Omaha",
      "Bellevue",
      "Papillion",
      "La Vista",
      "Ralston",
      "Millard",
      "Elkhorn",
      "Gretna",
      "Bennington",
      "Council Bluffs",
    ],
    serviceType: [
      "Concrete Leveling",
      "Mudjacking",
      "PolyJacking",
      "Driveway Repair",
      "Sidewalk Repair",
    ],
    priceRange: "$$",
  });
}

export function faqSchema(questions: { q: string; a: string }[]): string {
  return schemaToScriptHtml({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  });
}

export function serviceSchema(name: string, description: string, url: string): string {
  return schemaToScriptHtml({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.schemaUrl,
    },
    areaServed: siteConfig.serviceArea,
  });
}

export function howToSchema(
  name: string,
  steps: { name: string; text: string }[],
): string {
  return schemaToScriptHtml({
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map(({ name: stepName, text }) => ({
      "@type": "HowToStep",
      name: stepName,
      text,
    })),
  });
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
): string {
  return schemaToScriptHtml({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

// Legacy helpers — prefer named functions above
export function getOrganizationSchema(): SchemaObject {
  return JSON.parse(localBusinessSchema()) as SchemaObject;
}

export function getWebSiteSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.schemaUrl}/#website`,
    url: siteConfig.schemaUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.schemaUrl}/#organization` },
  };
}

export function getWebPageSchema(path: string, title: string, description: string): SchemaObject {
  const url = `${siteConfig.schemaUrl}${path === "/" ? "" : path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${siteConfig.schemaUrl}/#website` },
  };
}

export function getServiceSchema(name: string, description: string): SchemaObject {
  return JSON.parse(serviceSchema(name, description, siteConfig.schemaUrl)) as SchemaObject;
}

export function combineSchemas(...schemas: SchemaObject[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map(({ "@context": _ctx, ...rest }) => {
      void _ctx;
      return rest;
    }),
  };
}
