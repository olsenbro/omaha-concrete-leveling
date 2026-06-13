import { siteConfig } from "./site-config";

export type CityArea = {
  slug: string;
  name: string;
  state: "NE" | "IA";
  stateName: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  body: string[];
  neighbors: string[];
};

export const cityAreas: CityArea[] = [
  {
    slug: "bellevue",
    name: "Bellevue",
    state: "NE",
    stateName: "Nebraska",
    title: "Mudjacking Bellevue NE | Concrete Leveling & Slab Repair",
    description:
      "Concrete leveling and mudjacking in Bellevue, Nebraska. Sunken driveways, sidewalks, and patios lifted fast. Free estimate — local Omaha metro experts.",
    h1: "Concrete Leveling in Bellevue, Nebraska",
    intro: [
      "Bellevue homeowners deal with concrete settlement more often than most people realize — and the city's geography explains why. Sitting on clay-heavy soils above the Missouri River flood plain, Bellevue's older neighborhoods near Fontenelle Forest and the Offutt Air Force Base housing areas see driveways, sidewalks, and patio slabs settle steadily through Nebraska's freeze-thaw cycles.",
      "Whether you live in an established area near Olde Towne Bellevue or a mid-century neighborhood off Fort Crook Road, sunken concrete doesn't have to mean a costly tear-out. Our Omaha metro crew provides mudjacking and foam jacking throughout Bellevue — lifting settled slabs back to grade in hours, not days.",
    ],
    body: [
      "Bellevue's housing stock spans decades, and so do its concrete problems. Older slabs poured in the 1960s and 1970s — common in neighborhoods surrounding Offutt AFB — often sit on bases that weren't compacted to modern standards. Over time, vehicle weight, groundwater movement, and seasonal soil expansion create voids beneath the concrete. The result is the familiar dip at the garage apron, the sidewalk panel that catches every toe, and the patio that tilts toward the foundation.",
      "The clay soils prevalent throughout Sarpy County are particularly unforgiving. They shrink during dry summers and swell when saturated in spring, exerting constant pressure on anything built above them. Bellevue's proximity to the Missouri River adds groundwater variability that accelerates erosion under slabs — especially on properties with downspouts discharging near the foundation or driveway edge.",
      "We regularly level driveways, garage floors, and sidewalk panels across Bellevue — from the established streets near Haworth Park to newer developments along Highway 370. Most residential jobs are completed in a single visit. A typical Bellevue driveway with two or three settled panels runs $800–$1,800 for mudjacking, compared to $5,000–$9,000+ for full replacement.",
      "If you've noticed water pooling on your driveway, a trip hazard on your sidewalk, or gaps widening between patio slabs, addressing it early prevents further cracking and liability exposure. Nebraska property owners are responsible for sidewalk maintenance — and Bellevue is no exception. We provide free on-site estimates with written quotes before any work begins.",
    ],
    neighbors: ["Papillion", "La Vista", "Omaha"],
  },
  {
    slug: "papillion",
    name: "Papillion",
    state: "NE",
    stateName: "Nebraska",
    title: "Mudjacking Papillion NE | Concrete Leveling Sarpy County",
    description:
      "Concrete leveling and mudjacking in Papillion, Nebraska. Sunken driveways, sidewalks, and patios in Sarpy County lifted fast. Free estimates from local experts.",
    h1: "Concrete Leveling in Papillion, Nebraska",
    intro: [
      "Papillion has grown faster than almost any city in the Omaha metro — and that rapid residential expansion comes with a common side effect: settling concrete. Newer subdivisions throughout Sarpy County are built on freshly graded soil that compacts unevenly over the first 5–10 years, causing driveways, garage aprons, and sidewalk panels to drop well before their expected lifespan.",
      "From Shadow Lake to Tara Hills and the neighborhoods surrounding Walnut Creek, Papillion homeowners call us when sunken slabs start scraping cars, pooling water, or creating trip hazards. We serve all of Papillion and greater Sarpy County with mudjacking and foam jacking — same-week scheduling and free estimates.",
    ],
    body: [
      "Compaction settling is the number-one cause of sunken concrete in Papillion's newer neighborhoods. When a subdivision is developed, fill soil is graded and concrete is poured — often before the base has fully settled. Within a few years, voids form beneath driveway panels and garage floors as the soil compresses under the weight of vehicles and the natural consolidation process completes. The telltale sign is a dip at the garage entrance or a driveway panel that sits lower than the street curb.",
      "Papillion's location in Sarpy County means the same expansive clay soils that affect Bellevue and La Vista are at work here too. Freeze-thaw cycles from November through March heave and settle the ground annually, widening gaps at control joints and accelerating the separation between adjacent slabs. Sidewalk panels along residential streets are especially vulnerable — and Sarpy County municipalities take trip hazard complaints seriously.",
      "Our crew works throughout Papillion's residential areas, from the established neighborhoods near Papillion Landing to the growing developments along Highway 50. We level driveways, patios, pool decks, garage floors, and sidewalk panels using mudjacking for budget-conscious projects and foam jacking when precision, fast cure times, or waterproof performance matter.",
      "Typical Papillion residential jobs range from $600–$2,200 depending on the number of slabs and lift depth. A single sunken sidewalk panel often costs $300–$500. A two-car driveway with partial settlement typically runs $900–$1,600. We provide written, no-obligation quotes and can usually schedule within the same week you call.",
    ],
    neighbors: ["Bellevue", "La Vista", "Elkhorn"],
  },
  {
    slug: "elkhorn",
    name: "Elkhorn",
    state: "NE",
    stateName: "Nebraska",
    title: "Mudjacking Elkhorn NE | Driveway & Sidewalk Leveling",
    description:
      "Concrete leveling in Elkhorn, Nebraska. Driveway, sidewalk, and patio mudjacking for upscale west Omaha neighborhoods. Free estimate — (402) 555-0190.",
    h1: "Concrete Leveling in Elkhorn, Nebraska",
    intro: [
      "Elkhorn's upscale neighborhoods feature larger homes, wider driveways, and tree-lined streets — and all three contribute to concrete settlement problems that are uniquely common in this part of the metro. From West Dodge corridor developments to the established streets near Elkhorn Ridge, we help homeowners restore level driveways, sidewalks, and patios without the cost and disruption of full replacement.",
      "Elkhorn's larger driveway footprints mean more square footage of concrete exposed to soil movement, vehicle weight, and freeze-thaw stress. Mature trees along residential streets send roots beneath sidewalk panels and driveway edges, creating voids and lifting or settling adjacent slabs. Our mudjacking and foam jacking services address these problems quickly — preserving the curb appeal Elkhorn homeowners invest in.",
    ],
    body: [
      "Driveway settlement is the most frequent call we receive from Elkhorn residents. Many homes in the area feature extended driveways with three or more panels, wide garage aprons, and decorative borders — all of which can settle independently as soil compacts at different rates. A 2-inch drop at the garage entrance isn't just inconvenient; it scrapes low-clearance vehicles and directs water toward the foundation with every rainfall.",
      "Tree root intrusion is a particular concern in Elkhorn's established neighborhoods. Mature oaks, maples, and ash trees planted along sidewalks decades ago now send root systems beneath adjacent concrete. This creates uneven lifting on one side and settlement on the other — producing the classic trip-edge hazard that Omaha-area municipalities flag during inspections. Foam jacking's smaller access holes make it especially popular for Elkhorn sidewalk repairs where aesthetics matter.",
      "We also level patio slabs, pool decks, and outdoor living areas common in Elkhorn's larger residential properties. These surfaces often settle on the house-side edge where downspout runoff erodes soil beneath the slab — a problem that worsens silently until water begins pooling against the foundation wall.",
      "Elkhorn projects tend toward the higher end of our residential pricing due to larger slab sizes: driveways typically run $1,200–$2,500, patio leveling $800–$2,000, and sidewalk panels $300–$600 each. Every job starts with a free on-site assessment and a written quote — no obligation, no pressure.",
    ],
    neighbors: ["Omaha", "Bennington", "Gretna"],
  },
  {
    slug: "la-vista",
    name: "La Vista",
    state: "NE",
    stateName: "Nebraska",
    title: "Mudjacking La Vista NE | Concrete Leveling & PolyJacking",
    description:
      "Concrete leveling and mudjacking in La Vista, Nebraska. Sunken driveways, sidewalks, and patios repaired fast. HOA-friendly results. Free estimate.",
    h1: "Concrete Leveling in La Vista, Nebraska",
    intro: [
      "La Vista sits at the crossroads of established Sarpy County neighborhoods and newer residential development — and both bring concrete settlement challenges. From the original neighborhoods near La Vista's city center to subdivisions along Giles Road and Harrison Street, homeowners here deal with sunken driveways, uneven sidewalks, and patio slabs that hurt curb appeal and create liability.",
      "Many La Vista properties fall under HOA guidelines that require maintained exteriors, including level sidewalks and driveways free of visible settlement. We help La Vista homeowners meet those standards quickly and affordably — lifting sunken concrete in hours with results that restore both safety and street-side appearance.",
    ],
    body: [
      "La Vista's mix of housing ages means we see the full range of settlement causes. Older homes near 84th Street and the original city grid often have decades-old driveways with multiple settled panels and deteriorating control joints. Newer subdivisions experience the compaction settling common throughout Sarpy County — driveways that looked perfect at closing develop noticeable dips within the first five years.",
      "HOA compliance is a practical concern for many La Vista residents. Uneven sidewalk panels, visible gaps at driveway approaches, and tilted patio slabs can trigger violation notices from community associations. Mudjacking and foam jacking resolve these issues without the weeks of disruption that replacement entails — no demolition debris, no curing wait, and no contractor trucks blocking neighbors' driveways for days.",
      "Trip hazards on La Vista sidewalks are both a safety and liability issue. Nebraska law holds property owners responsible for maintaining adjacent walkways. If a pedestrian trips on a raised or sunken panel outside your home, you may face liability — especially if the hazard was previously identified. Leveling the affected panel takes hours and costs a fraction of replacement.",
      "La Vista residential leveling typically costs $600–$2,200 depending on project scope. Single sidewalk panels run $300–$500. Driveways with two to four settled sections range from $900–$1,800. We provide free written estimates and same-week scheduling throughout La Vista and surrounding Sarpy County communities.",
    ],
    neighbors: ["Papillion", "Bellevue", "Ralston"],
  },
  {
    slug: "council-bluffs",
    name: "Council Bluffs",
    state: "IA",
    stateName: "Iowa",
    title: "Mudjacking Council Bluffs IA | Omaha Area Concrete Leveling",
    description:
      "Concrete leveling and mudjacking in Council Bluffs, Iowa. We serve both Nebraska and Iowa across the Missouri River. Sunken driveways and sidewalks lifted fast. Free estimate.",
    h1: "Concrete Leveling in Council Bluffs, Iowa",
    intro: [
      "Council Bluffs sits directly across the Missouri River from Omaha — and we serve both states from our metro-area operation. If you're an Iowa homeowner dealing with sunken driveways, uneven sidewalks, or settling patio slabs, you don't need to find a separate contractor. Our crew crosses the river regularly to level concrete throughout Council Bluffs, Carter Lake, and the surrounding Pottawattamie County area.",
      "Council Bluffs' location on the Missouri River flood plain creates soil conditions that are especially hard on concrete. Seasonal groundwater fluctuations, alluvial soil composition, and freeze-thaw cycles combine to accelerate settlement beneath driveways, garage floors, and sidewalk panels throughout the city.",
    ],
    body: [
      "The Missouri River flood plain soils under much of Council Bluffs are inherently less stable than the compacted clay found on higher ground in west Omaha. Alluvial deposits — layers of sand, silt, and clay deposited by centuries of river flooding — compress unevenly under the weight of concrete slabs. This is why Council Bluffs homeowners often notice settlement within the first decade after construction, particularly on properties closer to the river valley and in areas with historically higher water tables.",
      "Council Bluffs' housing stock ranges from historic neighborhoods near the downtown bluffs to mid-century developments in the city's western sections and newer construction along the I-80 corridor. Each era presents different concrete challenges: older slabs with deteriorated expansion joints, mid-century driveways with significant garage apron settlement, and newer construction experiencing post-compaction settling on freshly graded lots.",
      "We level driveways, sidewalks, patios, garage floors, and commercial slabs throughout Council Bluffs — from the Manawa area to Big Lake and the neighborhoods surrounding Bayliss Park. Mudjacking handles most residential projects cost-effectively, while foam jacking is preferred for pool decks, areas near utilities, and projects where same-day return to service is critical.",
      "Crossing the river doesn't add cost or delay to your project. Council Bluffs pricing mirrors our Omaha rates: sidewalk panels $300–$500, driveways $800–$2,200, and patio leveling $600–$2,000. We provide free on-site estimates on the Iowa side of the metro with the same written quotes and 5-year warranty we offer Nebraska customers.",
    ],
    neighbors: ["Omaha", "Carter Lake", "Bellevue"],
  },
];

/** Hub page card data — includes cities with detail pages plus additional service areas */
export const hubAreaCards = [
  ...cityAreas.map((city) => ({
    slug: city.slug,
    name: city.name,
    state: city.state,
    description: city.description.split(".")[0] + ".",
    hasPage: true,
  })),
  { slug: null, name: "Omaha", state: "NE" as const, description: "Douglas County — all neighborhoods and districts.", hasPage: false },
  { slug: null, name: "Ralston", state: "NE" as const, description: "Residential and commercial slab leveling.", hasPage: false },
  { slug: null, name: "Millard", state: "NE" as const, description: "Southwest Omaha neighborhoods and subdivisions.", hasPage: false },
  { slug: null, name: "Gretna", state: "NE" as const, description: "Growing Sarpy County community west of Papillion.", hasPage: false },
  { slug: null, name: "Bennington", state: "NE" as const, description: "Northwest metro residential and new construction.", hasPage: false },
];

export function getCityBySlug(slug: string): CityArea | undefined {
  return cityAreas.find((city) => city.slug === slug);
}

export function getCityLocalBusinessSchema(city: CityArea) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: `Professional concrete leveling, mudjacking, and foam jacking services in ${city.name}, ${city.stateName}.`,
    telephone: siteConfig.phone,
    url: `${siteConfig.schemaUrl}/areas-served/${city.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.stateName,
      },
    },
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

export function getNeighborSlug(name: string): string | null {
  const city = cityAreas.find((c) => c.name === name);
  return city?.slug ?? null;
}
