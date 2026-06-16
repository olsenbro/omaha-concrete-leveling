import type { CityArea } from "./areas-served";

export type KeywordIntent = "transactional" | "informational" | "commercial" | "navigational";

export type KeywordDifficulty = "low" | "medium" | "high";

export type SemrushKeyword = {
  keyword: string;
  intent: KeywordIntent;
  difficulty: KeywordDifficulty;
  rationale: string;
  pages: string[];
};

/** Primary Semrush keyword targets for the Omaha metro (source of truth). */
export const omahaKeywordTargets: SemrushKeyword[] = [
  {
    keyword: "concrete leveling Omaha NE",
    intent: "transactional",
    difficulty: "medium",
    rationale: "High-intent local service search with primary geographic target.",
    pages: ["/"],
  },
  {
    keyword: "mudjacking services Omaha",
    intent: "transactional",
    difficulty: "medium",
    rationale: "Direct brand-synonym search for local customers seeking immediate repairs.",
    pages: ["/", "/services/mudjacking"],
  },
  {
    keyword: "how much does concrete leveling cost in Omaha",
    intent: "informational",
    difficulty: "low",
    rationale: "Captures users in the consideration phase looking for local price benchmarks.",
    pages: ["/concrete-leveling-cost"],
  },
  {
    keyword: "driveway repair Omaha near me",
    intent: "transactional",
    difficulty: "high",
    rationale: "Broad intent keyword with high local competition and near-me geo-targeting.",
    pages: ["/services/driveway-leveling"],
  },
  {
    keyword: "mudjacking services near me",
    intent: "transactional",
    difficulty: "high",
    rationale: "Hyper-local intent using common industry terminology.",
    pages: ["/", "/services/mudjacking"],
  },
  {
    keyword: "how much does mudjacking cost in Omaha",
    intent: "commercial",
    difficulty: "low",
    rationale: "Pricing query that qualifies leads based on budget and location.",
    pages: ["/concrete-leveling-cost", "/services/mudjacking"],
  },
  {
    keyword: "polyurethane foam vs mudjacking Omaha",
    intent: "commercial",
    difficulty: "low",
    rationale: "Comparison search helping users decide on the specific leveling method.",
    pages: ["/services/foam-jacking", "/faq"],
  },
  {
    keyword: "driveway leveling Omaha Nebraska",
    intent: "transactional",
    difficulty: "medium",
    rationale: "Specific application-based local search.",
    pages: ["/services/driveway-leveling"],
  },
  {
    keyword: "best concrete repair companies in Omaha",
    intent: "commercial",
    difficulty: "high",
    rationale: "Search for authority and reviews within the local market.",
    pages: ["/", "/about"],
  },
  {
    keyword: "fix sunken concrete sidewalk Omaha",
    intent: "transactional",
    difficulty: "low",
    rationale: "Problem-solution oriented keyword indicating immediate need.",
    pages: ["/services/sidewalk-repair"],
  },
  {
    keyword: "is mudjacking worth it for pool decks",
    intent: "informational",
    difficulty: "low",
    rationale: "Long-tail specific use case research for high-value projects.",
    pages: ["/services/patio-leveling", "/faq"],
  },
  {
    keyword: "Omaha mudjacking pros reviews",
    intent: "navigational",
    difficulty: "low",
    rationale: "Branded search indicating the customer is late in the funnel.",
    pages: ["/", "/about"],
  },
  {
    keyword: "affordable concrete slab lifting Omaha",
    intent: "transactional",
    difficulty: "medium",
    rationale: "Focuses on budget-conscious customers looking for local options.",
    pages: ["/"],
  },
  {
    keyword: "how to fix a settled garage floor in Omaha",
    intent: "informational",
    difficulty: "low",
    rationale: "Natural language query that leads to professional service recommendations.",
    pages: ["/services/garage-floor-leveling", "/faq"],
  },
  {
    keyword: "residential concrete leveling Omaha",
    intent: "transactional",
    difficulty: "medium",
    rationale: "Filters out commercial or industrial intent for the business niche.",
    pages: ["/"],
  },
  {
    keyword: "emergency driveway repair Omaha",
    intent: "transactional",
    difficulty: "medium",
    rationale: "High-urgency search often used in mobile or voice search.",
    pages: ["/services/driveway-leveling"],
  },
  {
    keyword: "why is my porch sinking in Omaha",
    intent: "informational",
    difficulty: "low",
    rationale: "Captures users noticing early signs of soil erosion or settling.",
    pages: ["/faq", "/services/patio-leveling"],
  },
  {
    keyword: "mudjacking vs polyjacking price Omaha",
    intent: "commercial",
    difficulty: "medium",
    rationale: "Comparative search aimed at choosing the right technology.",
    pages: ["/concrete-leveling-cost", "/services/foam-jacking"],
  },
  {
    keyword: "concrete void filling Omaha NE",
    intent: "transactional",
    difficulty: "medium",
    rationale: "Technical term for specialized repair work under slabs.",
    pages: ["/services/mudjacking", "/services/foam-jacking"],
  },
  {
    keyword: "best way to lift a concrete patio",
    intent: "informational",
    difficulty: "medium",
    rationale: "AI-friendly natural language question that builds topical authority.",
    pages: ["/services/patio-leveling", "/faq"],
  },
  {
    keyword: "foundation settling concrete repair Omaha",
    intent: "transactional",
    difficulty: "high",
    rationale: "Keywords related to foundation issues often lead to higher ticket jobs.",
    pages: ["/"],
  },
  {
    keyword: "Omaha concrete leveling cost per square foot",
    intent: "commercial",
    difficulty: "low",
    rationale: "Specific data-driven query for users in the planning phase.",
    pages: ["/concrete-leveling-cost"],
  },
  {
    keyword: "concrete leveling for trip hazard removal Omaha",
    intent: "transactional",
    difficulty: "low",
    rationale: "Targeting safety-conscious homeowners or commercial property managers.",
    pages: ["/services/sidewalk-repair"],
  },
  {
    keyword: "best concrete lifting company in Omaha reviews",
    intent: "commercial",
    difficulty: "medium",
    rationale: "Users are comparing providers and looking for social proof/trust signals.",
    pages: ["/", "/about"],
  },
  {
    keyword: "sunken sidewalk repair Omaha cost",
    intent: "transactional",
    difficulty: "low",
    rationale: "Specific long-tail problem-based keyword targeting homeowners.",
    pages: ["/services/sidewalk-repair", "/concrete-leveling-cost"],
  },
  {
    keyword: "why is my concrete patio sinking in Omaha",
    intent: "informational",
    difficulty: "low",
    rationale: "Addresses regional soil issues common in Nebraska to build authority.",
    pages: ["/services/patio-leveling", "/faq"],
  },
  {
    keyword: "emergency pool deck leveling Omaha",
    intent: "transactional",
    difficulty: "low",
    rationale: "Niche service offering with high urgency for safety reasons.",
    pages: ["/services/patio-leveling"],
  },
  {
    keyword: "Omaha Mudjacking Pros phone number",
    intent: "navigational",
    difficulty: "low",
    rationale: "Direct brand search for users ready to contact the business.",
    pages: ["/", "/contact"],
  },
  {
    keyword: "is concrete leveling cheaper than replacement in Omaha",
    intent: "informational",
    difficulty: "low",
    rationale: "AI-friendly natural language question focusing on value proposition.",
    pages: ["/concrete-leveling-cost", "/faq"],
  },
  {
    keyword: "garage floor leveling companies Omaha",
    intent: "transactional",
    difficulty: "medium",
    rationale: "Specific residential service search for indoor concrete work.",
    pages: ["/services/garage-floor-leveling"],
  },
  {
    keyword: "fixing uneven walkway Omaha residential",
    intent: "transactional",
    difficulty: "low",
    rationale: "Targets the specific pain point of tripping hazards at home.",
    pages: ["/services/sidewalk-repair"],
  },
  {
    keyword: "local concrete slab jacking experts Nebraska",
    intent: "commercial",
    difficulty: "medium",
    rationale: "Wider regional search for specialized industrial/technical terminology.",
    pages: ["/", "/areas-served"],
  },
  {
    keyword: "can you level concrete in the winter in Omaha",
    intent: "informational",
    difficulty: "low",
    rationale: "Seasonal query relevant to the local Nebraska climate and construction cycles.",
    pages: ["/faq"],
  },
  {
    keyword: "foundation settling vs concrete sinking Omaha",
    intent: "informational",
    difficulty: "medium",
    rationale: "Helps users distinguish between minor leveling needs and expensive foundation repair.",
    pages: ["/faq"],
  },
  {
    keyword: "affordable mudjacking for small businesses Omaha",
    intent: "transactional",
    difficulty: "low",
    rationale: "B2B intent keyword targeting local commercial property managers.",
    pages: ["/services/mudjacking"],
  },
  {
    keyword: "who fixes sinking steps in Omaha",
    intent: "transactional",
    difficulty: "low",
    rationale: "Natural language query used in voice search for home repairs.",
    pages: ["/services/sidewalk-repair"],
  },
  {
    keyword: "Omaha mudjacking warranty and longevity",
    intent: "commercial",
    difficulty: "low",
    rationale: "Deep funnel query for users concerned about the lifespan of the repair.",
    pages: ["/faq", "/about"],
  },
];

/** Core niche + city templates used for location page keyword targets. */
const cityNicheKeywordTemplates: {
  template: string;
  intent: KeywordIntent;
  difficulty: KeywordDifficulty;
}[] = [
  { template: "concrete leveling {city} {state}", intent: "transactional", difficulty: "medium" },
  { template: "mudjacking {city} {state}", intent: "transactional", difficulty: "medium" },
  { template: "mudjacking services {city}", intent: "transactional", difficulty: "medium" },
  { template: "driveway leveling {city}", intent: "transactional", difficulty: "medium" },
  { template: "sunken sidewalk repair {city}", intent: "transactional", difficulty: "low" },
  { template: "concrete leveling {city} near me", intent: "transactional", difficulty: "high" },
  { template: "affordable mudjacking {city}", intent: "transactional", difficulty: "medium" },
  { template: "residential concrete leveling {city}", intent: "transactional", difficulty: "medium" },
  { template: "garage floor leveling {city}", intent: "transactional", difficulty: "medium" },
  { template: "patio leveling {city}", intent: "transactional", difficulty: "medium" },
];

export type CityKeywordTarget = {
  keyword: string;
  intent: KeywordIntent;
  difficulty: KeywordDifficulty;
  source: "city-niche" | "localized-omaha" | "neighbor";
};

function fillCityTemplate(template: string, city: CityArea): string {
  return template.replace("{city}", city.name).replace("{state}", city.state);
}

/** Replace Omaha-centric geo terms with a target city's name and state. */
export function localizeOmahaKeyword(keyword: string, city: CityArea): string {
  return keyword
    .replace(/Omaha NE/gi, `${city.name} ${city.state}`)
    .replace(/Omaha Nebraska/gi, `${city.name}, ${city.stateName}`)
    .replace(/Omaha/gi, city.name)
    .replace(/\bNebraska\b/g, city.stateName);
}

/** Top niche + city keywords and neighbor variants for a location page. */
export function getCityKeywordTargets(city: CityArea): CityKeywordTarget[] {
  const cityNiche: CityKeywordTarget[] = cityNicheKeywordTemplates.map(
    ({ template, intent, difficulty }) => ({
      keyword: fillCityTemplate(template, city),
      intent,
      difficulty,
      source: "city-niche",
    }),
  );

  const localizedOmaha: CityKeywordTarget[] = omahaKeywordTargets
    .filter(({ pages }) => pages.some((p) => p.startsWith("/areas-served") || p === "/"))
    .slice(0, 8)
    .map(({ keyword, intent, difficulty }) => ({
      keyword: localizeOmahaKeyword(keyword, city),
      intent,
      difficulty,
      source: "localized-omaha",
    }));

  const neighborKeywords: CityKeywordTarget[] = city.neighbors.flatMap((neighbor) => [
    {
      keyword: `concrete leveling ${neighbor}`,
      intent: "transactional" as const,
      difficulty: "medium" as const,
      source: "neighbor" as const,
    },
    {
      keyword: `mudjacking ${neighbor}`,
      intent: "transactional" as const,
      difficulty: "medium" as const,
      source: "neighbor" as const,
    },
  ]);

  const seen = new Set<string>();
  return [...cityNiche, ...localizedOmaha, ...neighborKeywords].filter(({ keyword }) => {
    const key = keyword.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Keyword strings mapped to a page path (for metadata). Pass `city` for location pages. */
export function getKeywordsForPage(path: string, city?: CityArea): string[] {
  if (city) {
    return getCityKeywordTargets(city).map(({ keyword }) => keyword);
  }

  const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;

  return omahaKeywordTargets
    .filter(({ pages }) => pages.includes(normalized))
    .map(({ keyword }) => keyword);
}
