import { homeFaqItems } from "./home-faq";
import { HOME_PAGE_META_DESCRIPTION } from "./home-page";
import { homeHowToName, homeHowToSteps } from "./home-howto";
import { coreServices, getServicePath } from "./services";
import { siteConfig } from "./site-config";

const HOME_AREA_SERVED = [
  "Omaha NE",
  "Bellevue NE",
  "Papillion NE",
  "La Vista NE",
  "Ralston NE",
  "Millard NE",
  "Elkhorn NE",
  "Gretna NE",
  "Bennington NE",
  "Council Bluffs IA",
] as const;

export type SchemaObject = Record<string, unknown>;

/** Serialize schema for dangerouslySetInnerHTML in next/script */
export function schemaToScriptHtml(schema: SchemaObject): string {
  return JSON.stringify(schema);
}

export function getLocalBusinessSchema(city?: string, state?: string): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.schemaUrl}/#organization`,
    name: siteConfig.name,
    description:
      "Professional concrete leveling, mudjacking, and foam jacking services in Omaha, Nebraska and surrounding areas.",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.schemaUrl,
    foundingDate: String(siteConfig.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: city ?? siteConfig.address.city,
      addressRegion: state ?? siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapEmbedUrl,
    image: `${siteConfig.schemaUrl}/icon-512.png`,
    areaServed: [
      { "@type": "City", name: "Omaha", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Bellevue", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Papillion", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "La Vista", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Ralston", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Millard", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Elkhorn", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Gretna", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Bennington", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Council Bluffs", containedInPlace: { "@type": "State", name: "Iowa" } },
    ],
    serviceType: [
      "Concrete Leveling",
      "Mudjacking",
      "PolyJacking",
      "Driveway Repair",
      "Sidewalk Repair",
    ],
    priceRange: "$$",
  };
}

export function localBusinessSchema(city?: string, state?: string): string {
  return schemaToScriptHtml(getLocalBusinessSchema(city, state));
}

/** Homepage LocalBusiness JSON-LD — exact fields for rich results on /. */
export function getHomeLocalBusinessSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Omaha Mudjacking Pros",
    url: "https://www.mudjackingomaha.com",
    telephone: "+14027498050",
    email: "info@mudjackingomaha.com",
    description: HOME_PAGE_META_DESCRIPTION,
    areaServed: [...HOME_AREA_SERVED],
    serviceType: "Concrete Leveling and Mudjacking",
    priceRange: "$$",
    image: "https://mudjackingomaha.com/icon-512.png",
    openingHours: "Mo-Sa 07:00-18:00",
  };
}

/** Homepage FAQPage JSON-LD — first four homepage FAQs with full answer text. */
export function getHomeFAQPageSchema(): SchemaObject {
  const questions = homeFaqItems.slice(0, 4).map(({ question, answer }) => ({
    q: question,
    a: answer,
  }));
  return getFAQPageSchema(questions);
}

export function getArticleSchema({
  title,
  description,
  path,
  publishedDate,
  modifiedDate,
}: {
  title: string;
  description: string;
  path: string;
  publishedDate: string;
  modifiedDate?: string;
}): SchemaObject {
  const url = `${siteConfig.schemaUrl}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    datePublished: publishedDate,
    dateModified: modifiedDate ?? publishedDate,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.schemaUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.schemaUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.schemaUrl}/icon-512.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: `${siteConfig.schemaUrl}/icon-512.png`,
  };
}

export function getFAQPageSchema(questions: { q: string; a: string }[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.schemaUrl}/#faq`,
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function faqSchema(questions: { q: string; a: string }[]): string {
  return schemaToScriptHtml(getFAQPageSchema(questions));
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

export function getHowToSchema(
  name: string,
  steps: { name: string; text: string }[],
): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${siteConfig.schemaUrl}/#howto`,
    name,
    step: steps.map(({ name: stepName, text }, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: stepName,
      text,
    })),
  };
}

export function howToSchema(
  name: string,
  steps: { name: string; text: string }[],
): string {
  return schemaToScriptHtml(getHowToSchema(name, steps));
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
  return getLocalBusinessSchema();
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

/** Core services as Service schema for homepage rich results. */
export function getHomeServiceSchemas(): SchemaObject[] {
  return coreServices.slice(0, 4).map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.schemaUrl}${getServicePath(service.slug)}#service`,
    name: service.schema.name,
    description: service.schema.description,
    url: `${siteConfig.schemaUrl}${getServicePath(service.slug)}`,
    provider: { "@id": `${siteConfig.schemaUrl}/#organization` },
    areaServed: [
      { "@type": "City", name: "Omaha", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Bellevue", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Papillion", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Council Bluffs", containedInPlace: { "@type": "State", name: "Iowa" } },
    ],
  }));
}

/** Single JSON-LD graph for the homepage — FAQ, Service, HowTo, and WebPage. */
export function getHomePageSchemaGraph(): SchemaObject {
  const faqQuestions = homeFaqItems.map((item) => ({
    q: item.question,
    a: item.answer,
  }));

  return combineSchemas(
    getWebPageSchema(
      "/",
      "Mudjacking Omaha NE | Concrete Leveling & PolyJacking Experts",
      siteConfig.description,
    ),
    getFAQPageSchema(faqQuestions),
    getHowToSchema(
      homeHowToName,
      homeHowToSteps.map((step) => ({ name: step.name, text: step.text })),
    ),
    ...getHomeServiceSchemas(),
  );
}
