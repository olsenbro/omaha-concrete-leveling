import type { CityArea } from "./areas-served";
import { cityAreas, getCityBySlug } from "./areas-served";
import { siteConfig } from "./site-config";

export type NeighborhoodArea = {
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  state: "NE" | "IA";
  stateName: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  body: string[];
  zipCodes: string[];
  landmarks: string[];
  nearbySlugs: string[];
};

type NeighborhoodInput = {
  name: string;
  zipCodes: string[];
  landmarks: string[];
  intro: string[];
  body: string[];
  nearby?: string[];
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function createNeighborhood(city: CityArea, input: NeighborhoodInput): NeighborhoodArea {
  const slug = slugify(
    input.name.toLowerCase().includes(city.name.toLowerCase())
      ? input.name
      : `${input.name} ${city.slug}`,
  );

  return {
    slug,
    name: input.name,
    citySlug: city.slug,
    cityName: city.name,
    state: city.state,
    stateName: city.stateName,
    title: `Mudjacking ${input.name} ${city.state} | Concrete Leveling ${city.name}`,
    description: `Concrete leveling and mudjacking in ${input.name}, ${city.name} ${city.state}. Serving ZIP ${input.zipCodes.join(", ")} near ${input.landmarks[0]}. Free estimate — (402) 749-8050.`,
    h1: `Concrete Leveling in ${input.name}, ${city.name}`,
    intro: input.intro,
    body: input.body,
    zipCodes: input.zipCodes,
    landmarks: input.landmarks,
    nearbySlugs: (input.nearby ?? []).map((name) =>
      slugify(
        name.toLowerCase().includes(city.name.toLowerCase()) ? name : `${name} ${city.slug}`,
      ),
    ),
  };
}

const neighborhoodConfigs: Record<string, NeighborhoodInput[]> = {
  bellevue: [
    {
      name: "Olde Towne Bellevue",
      zipCodes: ["68005"],
      landmarks: ["Olde Towne Bellevue", "Sarpy County Museum", "Fontenelle Bank"],
      nearby: ["Fort Crook", "Wolf Creek", "La Platte"],
      intro: [
        "Homes near Olde Towne Bellevue and the historic Main Street corridor in ZIP 68005 often sit on decades-old slabs poured before modern compaction standards. Tree-lined blocks between the Sarpy County Museum and Fontenelle Bank see sidewalk panels settle and garage aprons dip as clay soils shift through Nebraska freeze-thaw cycles.",
        "Whether your property is steps from Olde Towne's historic district or along the residential streets radiating from Mission Avenue, sunken concrete doesn't require tear-out. Local mudjacking and foam jacking crews lift driveways, walkways, and patio slabs throughout 68005 — usually in a single visit.",
      ],
      body: [
        "Olde Towne Bellevue's housing stock dates back generations, and so do many of its concrete surfaces. Older driveways and sidewalk panels near the Sarpy County Museum and Fontenelle Bank were often poured on bases that weren't compacted to today's standards. Vehicle weight, groundwater movement, and seasonal soil expansion create voids beneath slabs — producing the familiar trip edge at the sidewalk and the garage apron dip that scrapes low cars.",
        "Properties in ZIP 68005 benefit from contractors who know Bellevue's oldest neighborhoods. Mudjacking fills voids with a soil-cement slurry and lifts slabs back to grade in hours. Foam jacking works well for precision sidewalk repairs near historic facades where smaller access holes matter for curb appeal.",
        "Typical Olde Towne Bellevue jobs run $600–$2,200 depending on slab count and lift depth. Single sidewalk panels near Main Street often cost $300–$500. Driveways with two or three settled sections range from $900–$1,800 — far less than the $5,000–$9,000+ typical for full replacement in Sarpy County.",
      ],
    },
    {
      name: "Fort Crook",
      zipCodes: ["68123"],
      landmarks: ["Offutt Air Force Base", "Fort Crook Road", "Haworth Park"],
      nearby: ["Offutt AFB Housing", "Olde Towne Bellevue", "Twin Creek"],
      intro: [
        "Fort Crook area homes along Fort Crook Road in ZIP 68123 — near Offutt Air Force Base and Haworth Park — commonly experience driveway and sidewalk settlement from mid-century construction on clay-heavy Sarpy County soil. Military housing turnover and decades of vehicle traffic accelerate compaction beneath garage aprons and walkway panels.",
        "From neighborhoods south of Offutt to residential streets connecting toward Twin Creek, local contractors level sunken slabs without the cost and disruption of replacement. Same-week estimates are available throughout the Fort Crook corridor.",
      ],
      body: [
        "The Fort Crook corridor in 68123 includes some of Bellevue's most settlement-prone housing — mid-century slabs poured quickly during base-area expansion often sit on incompletely compacted fill. Freeze-thaw cycles from November through March widen control joints and deepen dips at driveway approaches near Fort Crook Road.",
        "Proximity to Offutt Air Force Base and Haworth Park means varied housing ages and slab conditions on the same block. Contractors regularly level driveways, garage floors, and sidewalk panels throughout the area, addressing trip hazards before they become liability issues under Nebraska property owner sidewalk rules.",
        "Fort Crook area residential leveling typically costs $600–$2,200. A sunken garage apron near Offutt often runs $400–$900. Multi-panel driveways range $900–$1,800. Local pros provide written quotes before any work begins.",
      ],
    },
    {
      name: "Fontenelle Hills",
      zipCodes: ["68157"],
      landmarks: ["Fontenelle Forest", "Haworth Park", "Bellevue Medical Center"],
      nearby: ["Tregaron", "La Platte", "Twin Creek"],
      intro: [
        "Fontenelle Hills homeowners in ZIP 68157 live among some of Bellevue's most tree-covered terrain — near Fontenelle Forest and Haworth Park — and that greenery contributes directly to concrete settlement. Mature root systems beneath driveways and sidewalk panels create voids, uneven lifting, and trip edges that worsen each freeze-thaw season.",
        "Whether you're off Bellevue Boulevard or in the residential hills between Fontenelle Forest and the Bellevue Medical Center, local mudjacking crews restore level driveways, patios, and walkways without disturbing the mature landscaping that defines this neighborhood.",
      ],
      body: [
        "Fontenelle Hills' rolling terrain and dense tree cover in 68157 make it one of Bellevue's most scenic — and most settlement-prone — areas. Root intrusion from oaks and maples near Fontenelle Forest pushes slabs up on one side while adjacent sections settle, creating classic trip hazards flagged during municipal inspections.",
        "Clay soils throughout ZIP 68157 shrink in dry summers and swell when spring rains saturate the ground near Haworth Park and the Missouri River bluffs. Downspout runoff on hillside properties accelerates erosion beneath patio slabs on the house-side edge — a problem that tilts concrete toward foundations if left unaddressed.",
        "Fontenelle Hills projects typically run $700–$2,300 due to larger lot sizes and tree-root complications. Sidewalk panels cost $300–$600 each. Driveway leveling ranges $900–$2,000. Foam jacking's small holes are popular here for visible walkway repairs.",
      ],
    },
    {
      name: "Twin Creek",
      zipCodes: ["68123"],
      landmarks: ["Twin Creek Shopping Area", "Highway 370", "Offutt Air Force Base"],
      nearby: ["Fort Crook", "Wolf Creek", "Offutt AFB Housing"],
      intro: [
        "Twin Creek's mix of retail along the Twin Creek Shopping Area and surrounding residential streets in ZIP 68123 creates steady concrete repair demand — from settled parking aprons to driveway panels that dropped after construction on freshly graded Sarpy County soil. Highway 370 corridor properties see both compaction settling and heavy clay movement.",
        "Homeowners near Target, Walmart, and the Twin Creek retail hub call local contractors when garage aprons dip, sidewalk panels separate at control joints, or patio slabs tilt toward the foundation. Mudjacking and foam jacking resolve these issues in hours, not days.",
      ],
      body: [
        "Twin Creek developed rapidly along the Highway 370 corridor, and many slabs in 68123 were poured before fill soil fully consolidated. Within five to ten years of construction, voids form beneath driveway panels — especially at garage entrances where vehicle weight concentrates.",
        "Residential streets west of the Twin Creek Shopping Area share the same expansive clay soils affecting all of Bellevue. Freeze-thaw heave near Offutt Air Force Base drainage patterns adds seasonal stress to sidewalk panels along collector streets.",
        "Twin Creek residential jobs typically cost $600–$2,200. Single sidewalk panels run $300–$500. Two-car driveways with partial settlement range $900–$1,600. Most work completes in one morning.",
      ],
    },
    {
      name: "Wolf Creek",
      zipCodes: ["68123"],
      landmarks: ["Wolf Creek Shopping Area", "Twin Creek", "Offutt Air Force Base"],
      nearby: ["Twin Creek", "Fort Crook", "Olde Towne Bellevue"],
      intro: [
        "Wolf Creek homeowners in ZIP 68123 — near the Wolf Creek Shopping Area and the growing retail corridor connecting toward Twin Creek — deal with concrete settlement common to Bellevue's newer commercial-adjacent subdivisions. Driveways poured on graded fill settle unevenly within the first decade after construction.",
        "From residential streets behind the Wolf Creek retail center to neighborhoods connecting toward Offutt Air Force Base, local specialists lift sunken driveways, garage floors, and sidewalk panels back to grade without tear-out or lengthy curing waits.",
      ],
      body: [
        "Wolf Creek's position between major Bellevue retail corridors means heavy construction traffic during development compacted some areas unevenly. Slabs in 68123 that looked perfect at closing often develop a noticeable garage apron dip within three to five years.",
        "Expansive clay under Wolf Creek responds to Nebraska's freeze-thaw cycles with annual heave and settlement. Control joints widen, trip edges form at sidewalk panels, and water begins pooling on driveways sloped incorrectly toward garage doors.",
        "Wolf Creek leveling typically runs $600–$2,000 for residential projects. Contractors serve ZIP 68123 with same-week scheduling and free on-site estimates.",
      ],
    },
    {
      name: "La Platte",
      zipCodes: ["68123"],
      landmarks: ["Missouri River", "La Platte Bottoms", "Haworth Park"],
      nearby: ["Fontenelle Hills", "Fort Crook", "Tregaron"],
      intro: [
        "La Platte area properties in ZIP 68123 sit on Bellevue's southern edge near the Missouri River and La Platte Bottoms — where groundwater fluctuations and alluvial soil composition accelerate concrete settlement beneath driveways, garage floors, and sidewalk panels. Haworth Park's riverfront terrain reflects the soil challenges homeowners face nearby.",
        "Rural-residential lots and established homes along the La Platte corridor experience settlement patterns distinct from Bellevue's upland neighborhoods. Local contractors understand river-valley soil behavior and level slabs without the cost of full replacement.",
      ],
      body: [
        "La Platte's proximity to the Missouri River in 68123 means seasonal water table changes affect soil stability under concrete. Alluvial deposits compress unevenly under slab weight — particularly on properties with drainage directed toward the river valley.",
        "Homes near La Platte Bottoms often have longer driveways and larger garage aprons exposed to more soil movement than compact urban lots. Freeze-thaw cycles hit river-adjacent properties hard from November through March.",
        "La Platte area jobs range $700–$2,400 depending on slab size and access. Long driveways and multi-panel jobs are common. Written estimates are provided before work begins.",
      ],
    },
    {
      name: "Offutt AFB Housing",
      zipCodes: ["68113", "68123"],
      landmarks: ["Offutt Air Force Base", "Fort Crook Road", "Bellevue Medical Center"],
      nearby: ["Fort Crook", "Twin Creek", "Wolf Creek"],
      intro: [
        "Offutt AFB Housing area properties in ZIP 68113 and 68123 surround Offutt Air Force Base along Fort Crook Road — where mid-century and military-adjacent construction on clay soils produces steady driveway, sidewalk, and patio settlement. Frequent housing turnover means new residents often inherit sunken slabs from years of compaction.",
        "Whether you're in base-adjacent housing or civilian neighborhoods bordering Offutt, local mudjacking crews level settled concrete fast — important for meeting move-out standards and eliminating trip hazards before they become liability issues.",
      ],
      body: [
        "Offutt area housing in 68113 and 68123 was built across multiple decades with varying compaction standards. Slabs from the 1960s–1980s surrounding Offutt Air Force Base are especially prone to garage apron settlement and sidewalk trip edges.",
        "Military families and civilian homeowners alike benefit from fast turnaround — most Offutt area jobs complete in 2–4 hours. Foam jacking allows same-day garage access; mudjacking typically requires 24 hours before parking vehicles.",
        "Offutt AFB Housing area leveling costs $600–$2,200 for typical residential projects. Single sidewalk panels run $300–$500. Local contractors provide free estimates throughout ZIP 68113 and 68123.",
      ],
    },
    {
      name: "Tregaron",
      zipCodes: ["68157"],
      landmarks: ["Fontenelle Forest", "Bellevue Medical Center", "Highway 370"],
      nearby: ["Fontenelle Hills", "La Platte", "Twin Creek"],
      intro: [
        "Tregaron's established residential streets in ZIP 68157 — between Fontenelle Forest and the Bellevue Medical Center — feature mature landscaping and decades-old concrete that settles as tree roots and clay soils interact beneath driveways and sidewalk panels. Larger lots mean longer driveways with more panels exposed to independent settlement.",
        "Homeowners in Tregaron call local contractors when multi-panel driveways develop dips, patio slabs tilt toward the foundation, or sidewalk trip edges appear near Fontenelle Forest trail access points. Leveling restores safety and curb appeal in hours.",
      ],
      body: [
        "Tregaron developed as an upscale Bellevue subdivision with generous lot sizes in 68157. Extended driveways with three or more panels settle at different rates as soil compacts under each section — producing the garage entrance dip that scrapes vehicles.",
        "Tree root intrusion from mature plantings near Fontenelle Forest sends roots beneath adjacent concrete. Foam jacking's dime-sized holes are preferred for visible sidewalk repairs in Tregaron where aesthetics matter to HOA-conscious homeowners.",
        "Tregaron projects typically run $800–$2,400 due to larger slab footprints. Patio leveling costs $700–$2,000. Every job starts with a free assessment and written quote.",
      ],
    },
  ],
  papillion: [
    {
      name: "Shadow Lake",
      zipCodes: ["68046"],
      landmarks: ["Shadow Lake", "SumTur Amphitheater", "Halleck Park"],
      nearby: ["Tara Hills", "Walnut Creek", "Papillion Landing"],
      intro: [
        "Shadow Lake homeowners in ZIP 68046 live around one of Papillion's signature water features — and the lake-adjacent soil conditions contribute to concrete settlement on nearby driveways, patio slabs, and sidewalk panels. Properties between Shadow Lake and Halleck Park experience moisture-driven soil movement that accelerates slab settling.",
        "From lakeside residences to streets connecting toward SumTur Amphitheater, local mudjacking and foam jacking crews lift sunken concrete throughout Shadow Lake without the disruption of replacement — same-week scheduling available.",
      ],
      body: [
        "Shadow Lake area soils in 68046 hold moisture differently than upland Papillion subdivisions. Seasonal saturation near the lake expands clay, then contraction during dry periods creates voids beneath slabs — especially on patio edges facing the water.",
        "Newer construction around Shadow Lake was often built on graded fill that continues compacting under driveway and garage slab weight for five to ten years after pour. The telltale garage apron dip appears well before the concrete's expected lifespan.",
        "Shadow Lake residential leveling runs $600–$2,200. Pool deck and patio work near the lake often uses foam jacking for waterproof performance. Free estimates available throughout ZIP 68046.",
      ],
    },
    {
      name: "Tara Hills",
      zipCodes: ["68046"],
      landmarks: ["Halleck Park", "Papillion Creek Trail", "SumTur Amphitheater"],
      nearby: ["Shadow Lake", "Eagle Ridge", "Carriage Hills"],
      intro: [
        "Tara Hills in ZIP 68046 is one of Papillion's established hillside neighborhoods — where graded lots near Halleck Park and the Papillion Creek Trail expose driveways and walkways to erosion-driven settlement. Downspout runoff on sloped lots erodes soil beneath patio slabs on the house-side edge.",
        "Homeowners in Tara Hills contact local contractors when driveway panels settle at different elevations, sidewalk trip edges form near Papillion Creek Trail access, or garage floors develop center-channel pooling. Mudjacking resolves these in a single visit.",
      ],
      body: [
        "Tara Hills' topography in 68046 directs water toward foundations on improperly graded lots — tilting patio slabs inward and undermining driveway bases near the Papillion Creek corridor. Addressing settlement early prevents foundation-adjacent water damage.",
        "Established trees along Tara Hills streets send roots beneath sidewalk panels, creating uneven lifting that Sarpy County municipalities flag during inspections. Leveling eliminates trip hazards at a fraction of replacement cost.",
        "Tara Hills jobs typically cost $600–$2,100. Sidewalk panels run $300–$500 each. Driveways with two settled sections range $900–$1,600.",
      ],
    },
    {
      name: "Walnut Creek",
      zipCodes: ["68133"],
      landmarks: ["Walnut Creek", "Papio Bay Aquatic Center", "Werner Park"],
      nearby: ["Shadow Lake", "Copper Ridge", "Summerfield"],
      intro: [
        "Walnut Creek area homes in ZIP 68133 — near the Papio Bay Aquatic Center and Werner Park — sit in one of Papillion's fastest-growing corridors where compaction settling affects driveways poured on freshly graded Sarpy County soil. Newer slabs can drop within the first five years as fill consolidates under vehicle weight.",
        "Whether you're in Walnut Creek subdivisions or along streets connecting toward Werner Park, local contractors level sunken garage aprons, driveway panels, and sidewalk sections throughout 68133.",
      ],
      body: [
        "Walnut Creek's rapid development in 68133 means many driveways were poured before underlying fill fully settled. Void formation beneath garage aprons is the most common call from Walnut Creek homeowners — often appearing within three years of construction.",
        "Proximity to Werner Park and the Papio Bay Aquatic Center reflects the area's family-oriented housing stock with wide driveways and outdoor living spaces. Patio and pool deck settlement is common where downspout discharge erodes soil beneath slabs.",
        "Walnut Creek leveling costs $600–$2,200. Foam jacking is preferred for pool decks. Most residential jobs complete in 2–4 hours.",
      ],
    },
    {
      name: "Papillion Landing",
      zipCodes: ["68046"],
      landmarks: ["Papillion Landing", "SumTur Amphitheater", "Halleck Park"],
      nearby: ["Shadow Lake", "Tara Hills", "Eagle Ridge"],
      intro: [
        "Papillion Landing and surrounding streets in ZIP 68046 anchor downtown Papillion near SumTur Amphitheater and Halleck Park — where a mix of older commercial-adjacent slabs and established residential driveways settle on decades-old bases. Historic downtown concrete surfaces and nearby residential walkways both benefit from mudjacking.",
        "From homes walking distance to Papillion Landing events to residential streets radiating toward Halleck Park, local crews lift sunken driveways and sidewalk panels throughout downtown Papillion's 68046 core.",
      ],
      body: [
        "Papillion Landing's downtown character means varied slab ages on adjacent properties in 68046. Older sidewalk panels near the city center develop trip edges from tree roots and frost heave along established street trees.",
        "Residential streets surrounding downtown Papillion experience the same Sarpy County clay soil movement affecting all of Papillion. Garage apron settlement and driveway panel separation at control joints are the most frequent repair calls.",
        "Papillion Landing area jobs run $500–$2,000. Downtown sidewalk panels often cost $300–$500 each. Same-week scheduling is available.",
      ],
    },
    {
      name: "Eagle Ridge",
      zipCodes: ["68046"],
      landmarks: ["Eagle Ridge", "Halleck Park", "Papillion Creek Trail"],
      nearby: ["Tara Hills", "Carriage Hills", "Papillion Landing"],
      intro: [
        "Eagle Ridge subdivisions in ZIP 68046 feature family homes with wide driveways and outdoor living spaces near Halleck Park — where post-construction compaction settling drops driveway panels and tilts patio slabs within the first decade. Eagle Ridge's graded lots consolidate unevenly under the weight of two-car garage aprons.",
        "Local mudjacking specialists serve Eagle Ridge homeowners when sunken slabs scrape vehicles, pool decks develop trip edges, or sidewalk panels near the Papillion Creek Trail create liability exposure.",
      ],
      body: [
        "Eagle Ridge in 68046 represents Papillion's suburban growth pattern — concrete poured on fill that continues settling after homeowners move in. The garage entrance dip is the earliest warning sign on most Eagle Ridge driveways.",
        "Wide driveways with three or more panels settle independently as soil compacts at different rates beneath each section. Leveling individual panels costs far less than replacing an entire driveway.",
        "Eagle Ridge residential leveling typically costs $700–$2,200. Free on-site estimates include written quotes before any work begins.",
      ],
    },
    {
      name: "Carriage Hills",
      zipCodes: ["68046"],
      landmarks: ["Carriage Hills", "Halleck Park", "SumTur Amphitheater"],
      nearby: ["Eagle Ridge", "Tara Hills", "Copper Ridge"],
      intro: [
        "Carriage Hills in ZIP 68046 is an established Papillion neighborhood where mature landscaping and original driveway slabs — now decades old — settle as tree roots and clay soils interact beneath concrete. Properties near Halleck Park share the same freeze-thaw stress affecting all of Sarpy County.",
        "Carriage Hills homeowners call when driveway approaches drop, patio slabs near outdoor kitchens tilt, or sidewalk panels develop trip edges visible from the street. Mudjacking and foam jacking restore level surfaces in hours.",
      ],
      body: [
        "Carriage Hills' mature tree canopy in 68046 contributes to root-related slab movement on sidewalk panels and driveway edges. Settlement on one side combined with lifting on the other creates the classic trip-edge pattern.",
        "Original construction-era driveways in Carriage Hills often have deteriorating control joints that allow water penetration — accelerating freeze-thaw damage each Nebraska winter.",
        "Carriage Hills jobs range $600–$2,100. Sidewalk panels cost $300–$500. Most work is completed in a single visit.",
      ],
    },
    {
      name: "Summerfield",
      zipCodes: ["68138"],
      landmarks: ["Summerfield", "Highway 50", "Walnut Creek"],
      nearby: ["Walnut Creek", "Copper Ridge", "Eagle Ridge"],
      intro: [
        "Summerfield area homes in ZIP 68138 along the Highway 50 corridor represent Papillion's expanding western edge — where newly poured driveways on freshly graded soil develop settlement dips within years of construction. Summerfield's growing subdivisions are prime territory for compaction-related concrete problems.",
        "From Summerfield entrances off Highway 50 to connecting streets toward Walnut Creek, local contractors level sunken garage aprons, driveway panels, and patio slabs throughout 68138.",
      ],
      body: [
        "Summerfield's western Papillion location in 68138 means newer fill soil that hasn't finished consolidating. Driveway panels settle at the garage entrance first — where vehicle weight is concentrated during daily entry and exit.",
        "Expansive clay throughout ZIP 68138 responds to Nebraska drought and spring saturation cycles. Gaps at control joints widen annually until panels sit at visibly different elevations.",
        "Summerfield leveling typically costs $600–$2,200. Newer homes benefit from early intervention before settlement worsens. Free estimates available same week.",
      ],
    },
    {
      name: "Copper Ridge",
      zipCodes: ["68046"],
      landmarks: ["Copper Ridge", "Papillion Creek Trail", "Halleck Park"],
      nearby: ["Carriage Hills", "Eagle Ridge", "Summerfield"],
      intro: [
        "Copper Ridge subdivisions in ZIP 68046 feature newer construction where driveway and sidewalk settlement appears within the first five to ten years — classic compaction settling on Sarpy County fill soil. Properties near the Papillion Creek Trail and Halleck Park experience the same clay soil movement affecting all of Papillion.",
        "Copper Ridge homeowners contact local specialists when garage aprons drop, patio slabs tilt toward foundations, or sidewalk panels create trip hazards. Leveling costs a fraction of replacement and completes in hours.",
      ],
      body: [
        "Copper Ridge in 68046 was developed with the wide driveways and outdoor living spaces common to modern Papillion construction — meaning more square footage of concrete exposed to soil movement than older, compact lots.",
        "Downspout discharge on newer Copper Ridge homes erodes soil beneath patio slabs on the house-side edge — a silent problem until water pools against the foundation during heavy rain.",
        "Copper Ridge residential jobs run $600–$2,200. Early leveling prevents costlier lifts later. Written quotes provided before work begins.",
      ],
    },
  ],
  elkhorn: [
    {
      name: "Elkhorn Ridge",
      zipCodes: ["68022"],
      landmarks: ["Elkhorn Ridge Golf Club", "Elkhorn South High School", "Elkhorn Town Center"],
      nearby: ["Fire Ridge", "Sterling Ridge", "Quarry Oaks"],
      intro: [
        "Elkhorn Ridge in ZIP 68022 surrounds the Elkhorn Ridge Golf Club and Elkhorn South High School — where upscale homes with extended driveways and decorative concrete borders settle as clay soils compact under heavy slab footprints. Three-panel driveways near Elkhorn Town Center often develop independent settlement at each section.",
        "Elkhorn Ridge homeowners invest in curb appeal — and sunken driveway panels or tilted patio slabs undermine that quickly. Local mudjacking and foam jacking restore level surfaces without weeks of replacement disruption.",
      ],
      body: [
        "Elkhorn Ridge properties in 68022 feature among the metro's largest residential driveways. More panels mean more opportunities for differential settlement as soil compacts unevenly beneath each section.",
        "Mature landscaping near Elkhorn Ridge Golf Club sends tree roots beneath sidewalk panels and driveway edges. Foam jacking's small access holes preserve aesthetics on visible walkway surfaces.",
        "Elkhorn Ridge projects run $1,000–$2,500 due to larger slab sizes. Patio leveling costs $800–$2,000. Free on-site assessments include written quotes.",
      ],
    },
    {
      name: "West Dodge Corridor",
      zipCodes: ["68118"],
      landmarks: ["West Dodge Expressway", "Elkhorn Town Center", "Village Pointe"],
      nearby: ["West Maple", "Blue Sage", "Elkhorn Ridge"],
      intro: [
        "West Dodge Corridor properties in ZIP 68118 along the West Dodge Expressway and near Elkhorn Town Center experience commercial-adjacent settlement vibration and clay soil movement beneath driveways, garage aprons, and sidewalk panels. High-traffic corridor construction used varying compaction standards across different development phases.",
        "From residential streets paralleling West Dodge to neighborhoods connecting toward Village Pointe, local contractors level sunken slabs throughout the 68118 corridor — often same week you call.",
      ],
      body: [
        "West Dodge Corridor development in 68118 spans multiple decades and builders — creating inconsistent soil compaction beneath adjacent slabs. Neighboring driveways on the same street can show dramatically different settlement levels.",
        "Proximity to West Dodge Expressway means some properties experience additional soil vibration from traffic loads. Garage aprons and driveway approaches near the corridor settle faster than interior patio slabs.",
        "West Dodge Corridor leveling costs $800–$2,400. Commercial-adjacent residential slabs may need foam jacking for faster cure times. Free estimates throughout ZIP 68118.",
      ],
    },
    {
      name: "West Maple",
      zipCodes: ["68116"],
      landmarks: ["West Maple Road", "Elkhorn Valley Golf Course", "Elkhorn Town Center"],
      nearby: ["Blue Sage", "West Dodge Corridor", "Fire Ridge"],
      intro: [
        "West Maple area homes in ZIP 68116 along West Maple Road near Elkhorn Valley Golf Course sit on established Elkhorn terrain where decades-old driveways and mature street trees combine to produce root-related slab movement and garage apron settlement. Original Elkhorn construction-era concrete is now entering its settlement peak.",
        "West Maple homeowners call when driveway dips scrape low-clearance vehicles, sidewalk panels near Elkhorn Valley Golf Course access develop trip edges, or patio slabs tilt from downspout erosion.",
      ],
      body: [
        "West Maple's established character in 68116 means original driveways with multiple settled panels and deteriorating control joints. Tree root intrusion from mature oaks and maples along West Maple Road affects sidewalk panels on both sides.",
        "Elkhorn's expansive clay under ZIP 68116 creates seasonal heave that widens gaps at driveway control joints. Water enters cracks, freezes, and accelerates damage each winter.",
        "West Maple jobs typically run $900–$2,300. Sidewalk panels cost $300–$600. Most residential work completes in 2–4 hours.",
      ],
    },
    {
      name: "Fire Ridge",
      zipCodes: ["68022"],
      landmarks: ["Fire Ridge", "Elkhorn Ridge Golf Club", "Quarry Oaks"],
      nearby: ["Elkhorn Ridge", "Sterling Ridge", "Quarry Oaks"],
      intro: [
        "Fire Ridge in ZIP 68022 is a premier Elkhorn subdivision near Elkhorn Ridge Golf Club where large homes, wide driveways, and pool decks settle on west Omaha's expansive clay soils. Fire Ridge properties often have three or more driveway panels that settle independently — plus outdoor living slabs that tilt toward foundations from downspout runoff.",
        "Local contractors serve Fire Ridge when sunken pool deck sections create trip hazards, garage aprons drop two or more inches, or decorative driveway borders settle at different rates than adjacent panels.",
      ],
      body: [
        "Fire Ridge's premium construction in 68022 includes larger concrete footprints than most metro neighborhoods — exposing more slab area to soil movement. A 2-inch garage entrance drop is common within the first decade on Fire Ridge driveways.",
        "Pool decks and patio slabs near Fire Ridge's outdoor living areas benefit from foam jacking's waterproof performance and 15-minute cure time. Same-day use matters for busy Elkhorn families.",
        "Fire Ridge projects range $1,100–$2,500. Pool deck leveling runs $800–$2,200. Every job includes a post-completion walkthrough.",
      ],
    },
    {
      name: "Sterling Ridge",
      zipCodes: ["68022"],
      landmarks: ["Sterling Ridge", "Elkhorn Ridge Golf Club", "Elkhorn Town Center"],
      nearby: ["Fire Ridge", "Elkhorn Ridge", "Elk Run"],
      intro: [
        "Sterling Ridge homeowners in ZIP 68022 enjoy Elkhorn's tree-lined streets and generous lots — and the mature landscaping that defines Sterling Ridge also drives concrete settlement through root intrusion beneath driveways and sidewalk panels. Properties near Elkhorn Ridge Golf Club share west Omaha's challenging clay soil profile.",
        "Sterling Ridge residents contact local mudjacking specialists when multi-section driveways develop visible dips, patio slabs near outdoor kitchens tilt, or walkway trip edges appear near Elkhorn Town Center.",
      ],
      body: [
        "Sterling Ridge in 68022 features mature trees planted during original development — now sending root systems beneath adjacent concrete installed decades ago. Uneven lifting and settlement on opposite sides of sidewalk panels is the typical pattern.",
        "Wide Sterling Ridge driveways with decorative stamped borders settle at different rates than standard panels — requiring careful leveling to maintain uniform appearance after lifting.",
        "Sterling Ridge leveling costs $1,000–$2,400. Foam jacking preferred for visible patio and walkway repairs. Free written estimates.",
      ],
    },
    {
      name: "Elk Run",
      zipCodes: ["68135"],
      landmarks: ["Elk Run", "West Dodge Expressway", "Elkhorn Town Center"],
      nearby: ["Sterling Ridge", "Blue Sage", "Quarry Oaks"],
      intro: [
        "Elk Run subdivisions in ZIP 68135 south of the West Dodge Expressway combine newer construction with Elkhorn-area clay soils — producing compaction settling on driveways and garage aprons within the first five years. Elk Run's family-oriented layout features wide driveways with multiple panels exposed to differential settlement.",
        "From Elk Run entrances to streets connecting toward Elkhorn Town Center, local contractors level sunken slabs throughout 68135 without the cost and mess of full replacement.",
      ],
      body: [
        "Elk Run's newer construction in 68135 means fill soil still consolidating beneath recently poured slabs. The garage apron dip typically appears before any other visible settlement sign.",
        "ZIP 68135 shares Elkhorn's freeze-thaw exposure with clay soil expansion during spring rains. Control joint gaps widen each season until panels sit at noticeably different heights.",
        "Elk Run residential jobs run $700–$2,200. Early intervention on newer slabs prevents deeper settlement. Same-week estimates available.",
      ],
    },
    {
      name: "Blue Sage",
      zipCodes: ["68116"],
      landmarks: ["Blue Sage", "Elkhorn Valley Golf Course", "West Maple Road"],
      nearby: ["West Maple", "West Dodge Corridor", "Elk Run"],
      intro: [
        "Blue Sage in ZIP 68116 is an established Elkhorn neighborhood near Elkhorn Valley Golf Course where original driveways and sidewalk panels — now 15–25 years old — settle as soil completes its long compaction cycle beneath concrete poured during west Omaha's growth surge. Blue Sage's curved streets and cul-de-sacs feature varied lot drainage that accelerates patio slab tilting.",
        "Blue Sage homeowners call when water pools on driveways, sidewalk trip edges form near school walking routes, or garage floors develop center-channel low spots.",
      ],
      body: [
        "Blue Sage's development era in 68116 means many slabs are entering peak settlement years simultaneously across the neighborhood. Multiple neighbors on the same cul-de-sac often need leveling within the same season.",
        "Improper lot grading in Blue Sage directs downspout water beneath patio slabs on the house-side edge — tilting concrete toward foundations and creating basement-adjacent moisture risk.",
        "Blue Sage leveling typically costs $800–$2,200. Cul-de-sac neighbors often schedule together. Free on-site estimates.",
      ],
    },
    {
      name: "Quarry Oaks",
      zipCodes: ["68022"],
      landmarks: ["Quarry Oaks", "Elkhorn Ridge Golf Club", "Elkhorn Valley Golf Course"],
      nearby: ["Elkhorn Ridge", "Fire Ridge", "Sterling Ridge"],
      intro: [
        "Quarry Oaks in ZIP 68022 is among Elkhorn's most distinctive neighborhoods — built around dramatic terrain near Elkhorn Ridge Golf Club and Elkhorn Valley Golf Course where sloped lots, retaining walls, and elevated driveways experience erosion-driven settlement unique to hillside construction. Quarry Oaks properties face soil movement patterns different from flat-lot subdivisions.",
        "Quarry Oaks homeowners contact specialists when elevated driveway approaches settle at retaining wall junctions, patio slabs on sloped lots tilt downhill, or sidewalk panels near golf course access develop trip edges.",
      ],
      body: [
        "Quarry Oaks' terrain in 68022 means gravity and water runoff work together to erode soil beneath uphill-side patio edges and driveway sections near retaining walls. Settlement here often follows heavy rain events.",
        "Premium Quarry Oaks homes feature larger outdoor living surfaces — pool decks, patios, and extended driveways — with more concrete exposed to hillside soil movement than typical Elkhorn properties.",
        "Quarry Oaks projects run $1,000–$2,500 due to terrain complexity and larger slabs. Foam jacking preferred for pool decks. Written quotes before any work.",
      ],
    },
  ],
  "la-vista": [
    {
      name: "Meadows",
      zipCodes: ["68128"],
      landmarks: ["Meadows", "La Vista Community Center", "Veterans Memorial Park"],
      nearby: ["Spring Creek", "Centennial", "Park View"],
      intro: [
        "The Meadows subdivision in ZIP 68128 near La Vista Community Center and Veterans Memorial Park combines established residential streets with HOA-maintained standards that make visible concrete settlement a curb appeal issue — not just a safety concern. Meadows homeowners need level driveways and sidewalks that meet community appearance guidelines.",
        "Local mudjacking crews serve Meadows when driveway panels drop, sidewalk trip edges appear near Veterans Memorial Park walking routes, or patio slabs settle below HOA tolerance. Most jobs complete in hours.",
      ],
      body: [
        "Meadows in 68128 represents La Vista's core residential fabric — mix of housing ages with varying slab conditions. Older sections near La Vista Community Center have decades-old driveways with multiple settled panels.",
        "HOA compliance drives many Meadows repair calls. Visible settlement at driveway approaches and uneven sidewalk panels can trigger violation notices — mudjacking resolves these without replacement disruption.",
        "Meadows leveling costs $600–$2,100. HOA-conscious homeowners appreciate foam jacking's clean finish. Free estimates throughout ZIP 68128.",
      ],
    },
    {
      name: "Spring Creek",
      zipCodes: ["68128"],
      landmarks: ["Spring Creek", "La Vista Sports Complex", "Veterans Memorial Park"],
      nearby: ["Meadows", "Centennial", "Metro West"],
      intro: [
        "Spring Creek area homes in ZIP 68128 near La Vista Sports Complex and Veterans Memorial Park experience settlement on driveways and walkways bordering creek-adjacent green space — where moisture fluctuations in nearby soil accelerate void formation beneath concrete slabs. Spring Creek's family neighborhoods feature wide driveways that settle at garage entrances first.",
        "Spring Creek homeowners call local contractors when garage aprons dip, patio slabs near creek trails tilt, or sidewalk panels create trip hazards on routes to La Vista Sports Complex.",
      ],
      body: [
        "Spring Creek's proximity to natural drainage in 68128 means seasonal moisture changes affect soil stability under nearby slabs differently than upland La Vista properties. Patio edges facing green space settle faster.",
        "Newer Spring Creek construction on graded fill shows classic five-year compaction settling on driveways poured before soil fully consolidated.",
        "Spring Creek jobs run $600–$2,200. Sidewalk panels near park trails cost $300–$500 each.",
      ],
    },
    {
      name: "Centennial",
      zipCodes: ["68128"],
      landmarks: ["Centennial", "La Vista Community Center", "Werner Park"],
      nearby: ["Meadows", "Spring Creek", "Portal Village"],
      intro: [
        "Centennial neighborhood properties in ZIP 68128 — between La Vista Community Center and Werner Park — sit in established La Vista where original 1980s–1990s driveways and sidewalk panels now show decades of freeze-thaw damage and soil compaction. Centennial's mature street trees contribute root-related slab movement on walkway panels.",
        "Centennial homeowners contact local specialists when driveway control joints gape open, garage floors pool water in center channels, or patio slabs tilt toward foundations from years of downspout discharge.",
      ],
      body: [
        "Centennial's housing era in 68128 means many slabs are beyond their first settlement cycle — entering a phase where voids beneath panels cause accelerating drop each winter. Early intervention prevents deeper lifts.",
        "Tree-lined Centennial streets near Werner Park access routes see sidewalk trip edges from root heave — a liability concern under Nebraska property owner maintenance rules.",
        "Centennial leveling typically costs $600–$2,100. Multi-panel driveways range $900–$1,800.",
      ],
    },
    {
      name: "Metro West",
      zipCodes: ["68128"],
      landmarks: ["Metro West", "Giles Road", "La Vista Sports Complex"],
      nearby: ["Huntington Park", "Giles Road Area", "Spring Creek"],
      intro: [
        "Metro West in ZIP 68128 along the Giles Road corridor represents La Vista's western commercial-residential interface — where newer construction on freshly graded soil settles within years, and older slabs near La Vista Sports Complex show decades of Sarpy County clay movement. Metro West driveways and garage aprons are common early-settlement candidates.",
        "Metro West homeowners need fast turnaround when sunken slabs affect daily garage access or create visible trip edges on Giles Road area walking routes.",
      ],
      body: [
        "Metro West's location in 68128 along Giles Road means varied construction quality across different development phases. Adjacent properties can have dramatically different settlement levels on the same block.",
        "Commercial corridor vibration and heavy clay soil combine to accelerate garage apron settlement on Metro West properties nearest Giles Road.",
        "Metro West jobs cost $600–$2,200. Same-week scheduling available. Written quotes before work begins.",
      ],
    },
    {
      name: "Huntington Park",
      zipCodes: ["68128"],
      landmarks: ["Huntington Park", "La Vista Community Center", "Veterans Memorial Park"],
      nearby: ["Metro West", "Park View", "Meadows"],
      intro: [
        "Huntington Park subdivisions in ZIP 68128 near Veterans Memorial Park and La Vista Community Center feature family homes where driveway settlement and sidewalk trip edges develop as Sarpy County clay soils cycle through Nebraska freeze-thaw seasons. Huntington Park's HOA communities require maintained exteriors — including level concrete surfaces.",
        "Huntington Park residents call when visible driveway settlement affects curb appeal, patio slabs near park walking routes tilt, or garage aprons drop at the entrance.",
      ],
      body: [
        "Huntington Park in 68128 includes HOA-managed sections where uneven sidewalk panels and settled driveway approaches draw violation notices. Mudjacking resolves compliance issues in hours without replacement debris.",
        "Park-adjacent properties in Huntington Park experience foot traffic on nearby sidewalks — making trip hazard correction a priority for conscientious homeowners.",
        "Huntington Park leveling runs $600–$2,100. HOA-friendly results with minimal disruption. Free estimates.",
      ],
    },
    {
      name: "Portal Village",
      zipCodes: ["68128"],
      landmarks: ["Portal Elementary Area", "Portal Village", "La Vista Sports Complex"],
      nearby: ["Centennial", "Park View", "Meadows"],
      intro: [
        "Portal Village in ZIP 68128 near Portal Elementary and La Vista Sports Complex is a family-focused La Vista neighborhood where school-route sidewalk panels and driveway aprons settle on clay soils stressed by daily freeze-thaw cycles. Portal Village parents prioritize trip hazard removal on walkways used by children daily.",
        "Local contractors serve Portal Village when sidewalk panels along school routes develop trip edges, driveways settle at garage entrances, or patio slabs tilt from downspout erosion near Portal Elementary area homes.",
      ],
      body: [
        "Portal Village's school-adjacent location in 68128 makes sidewalk maintenance especially important. Trip edges on routes to Portal Elementary create liability exposure for adjacent property owners.",
        "Family-sized driveways in Portal Village settle at garage aprons first — where minivan and SUV weight concentrates during daily school drop-offs.",
        "Portal Village jobs typically cost $500–$2,000. Sidewalk panels along school routes often run $300–$500 each.",
      ],
    },
    {
      name: "Park View",
      zipCodes: ["68128"],
      landmarks: ["Park View", "Veterans Memorial Park", "La Vista Community Center"],
      nearby: ["Meadows", "Huntington Park", "Portal Village"],
      intro: [
        "Park View neighborhood homes in ZIP 68128 near Veterans Memorial Park and La Vista Community Center benefit from park-adjacent living — but also experience moisture-influenced soil movement beneath nearby driveways and patio slabs. Park View's established streets feature decades-old concrete entering peak settlement years.",
        "Park View homeowners contact local mudjacking crews when driveway panels near park access routes settle, walkway trip edges appear, or garage floors develop pooling in low spots.",
      ],
      body: [
        "Park View's established character in 68128 means original driveways with deteriorating expansion joints. Water penetration through open joints accelerates freeze-thaw damage each Nebraska winter.",
        "Green space adjacency in Park View creates slightly higher soil moisture than interior La Vista lots — influencing settlement rates on patio slabs facing Veterans Memorial Park.",
        "Park View leveling costs $600–$2,100. Most jobs complete in one visit.",
      ],
    },
    {
      name: "Giles Road Area",
      zipCodes: ["68128"],
      landmarks: ["Giles Road", "La Vista Sports Complex", "Metro West"],
      nearby: ["Metro West", "Huntington Park", "Spring Creek"],
      intro: [
        "Giles Road Area properties in ZIP 68128 along La Vista's primary east-west corridor experience commercial-adjacent settlement and clay soil movement beneath driveways, garage aprons, and sidewalk panels. Giles Road corridor homes near La Vista Sports Complex see both newer compaction settling and decades-old slab deterioration.",
        "From Giles Road frontage properties to connecting residential streets toward Metro West, local contractors level sunken concrete throughout the corridor — with same-week scheduling.",
      ],
      body: [
        "Giles Road Area development in 68128 spans multiple eras — creating inconsistent compaction beneath slabs on the same corridor. Properties nearest Giles Road experience additional vibration-related settlement.",
        "La Vista Sports Complex adjacency means heavy foot traffic on nearby sidewalk panels — making trip hazard correction a community safety priority in the Giles Road Area.",
        "Giles Road Area jobs run $600–$2,200. Corridor properties may need foam jacking for faster cure when garage access is critical.",
      ],
    },
  ],
  "council-bluffs": [
    {
      name: "Manawa",
      zipCodes: ["51501"],
      landmarks: ["Manawa", "Tom Hanafan River's Edge Park", "Bayliss Park"],
      nearby: ["Big Lake", "Bayliss Park", "East End"],
      intro: [
        "Manawa area homes in ZIP 51501 sit in Council Bluffs' premier lake district near Tom Hanafan River's Edge Park — where lake-adjacent moisture and Missouri River valley soils accelerate driveway and patio settlement. Manawa properties experience soil behavior distinct from upland Council Bluffs neighborhoods.",
        "Crossing the river doesn't add cost or delay — local contractors serve Manawa when sunken garage aprons, tilting patio slabs near the lake, or sidewalk trip edges appear throughout 51501.",
      ],
      body: [
        "Manawa's lake-adjacent terrain in 51501 holds moisture that expands clay soils seasonally, then contracts to create voids beneath slabs. Patio edges facing Manawa's water features settle faster than interior driveways.",
        "Council Bluffs' alluvial soil composition under Manawa compresses unevenly under concrete weight — particularly on properties with historically higher water tables near Tom Hanafan River's Edge Park.",
        "Manawa leveling costs $600–$2,200. Iowa-side pricing mirrors Omaha metro rates. Free estimates with written quotes.",
      ],
    },
    {
      name: "Big Lake",
      zipCodes: ["51501"],
      landmarks: ["Big Lake", "Tom Hanafan River's Edge Park", "Missouri River"],
      nearby: ["Manawa", "Bayliss Park", "West Broadway"],
      intro: [
        "Big Lake neighborhood properties in ZIP 51501 near the Missouri River and Tom Hanafan River's Edge Park face river-valley soil conditions that produce faster concrete settlement than west Omaha's compacted clay. Big Lake driveways and walkway panels settle as alluvial deposits compress under slab weight.",
        "Big Lake homeowners on the Iowa side of the metro call local contractors who regularly cross the Missouri River — leveling sunken slabs without finding a separate Iowa-only provider.",
      ],
      body: [
        "Big Lake's river-proximity in 51501 means groundwater fluctuations affect soil stability beneath concrete more dramatically than inland Council Bluffs neighborhoods. Seasonal saturation accelerates void formation.",
        "Historic and mid-century Big Lake homes have slabs poured on bases that weren't engineered for river-valley soil behavior — producing settlement within the first decade after construction.",
        "Big Lake jobs range $600–$2,200. Contractors serve Pottawattamie County with same-week scheduling.",
      ],
    },
    {
      name: "Bayliss Park",
      zipCodes: ["51501"],
      landmarks: ["Bayliss Park", "Lewis and Clark Monument", "RailsWest Railroad Museum"],
      nearby: ["Manawa", "East End", "West Broadway"],
      intro: [
        "Bayliss Park area properties in ZIP 51501 surround Council Bluffs' historic downtown green space near the Lewis and Clark Monument and RailsWest Railroad Museum — where century-old sidewalk panels and established residential driveways settle on Missouri River bluff soils. Bayliss Park's mix of historic and residential concrete creates varied repair needs.",
        "From downtown-adjacent homes to residential streets radiating from Bayliss Park, local mudjacking specialists level sunken slabs throughout Council Bluffs' 51501 core.",
      ],
      body: [
        "Bayliss Park's historic district in 51501 includes some of Council Bluffs' oldest concrete — sidewalk panels and driveway aprons that have settled through decades of freeze-thaw cycles on bluff-top soils.",
        "Residential streets surrounding Bayliss Park near the Lewis and Clark Monument experience the same alluvial soil compression affecting all of river-adjacent Council Bluffs.",
        "Bayliss Park area leveling costs $500–$2,100. Historic sidewalk panels often run $300–$600 each.",
      ],
    },
    {
      name: "West Broadway",
      zipCodes: ["51501"],
      landmarks: ["West Broadway", "Bayliss Park", "Mid-America Center"],
      nearby: ["Bayliss Park", "Mall of the Bluffs Area", "Big Lake"],
      intro: [
        "West Broadway corridor properties in ZIP 51501 connect Council Bluffs' downtown to its western commercial districts near the Mid-America Center — where commercial-adjacent vibration and mixed-era construction produce varied settlement on driveways, garage aprons, and sidewalk panels along West Broadway.",
        "West Broadway homeowners call when driveway approaches settle near commercial traffic, patio slabs tilt from drainage issues, or walkway trip edges appear on routes toward Bayliss Park.",
      ],
      body: [
        "West Broadway's corridor character in 51501 means properties experience heavier ambient vibration from traffic loads — accelerating settlement on driveway panels nearest the street.",
        "Mixed construction eras along West Broadway create inconsistent soil compaction. Adjacent slabs on the same block often show different settlement levels.",
        "West Broadway area jobs cost $600–$2,200. Free Iowa-side estimates with 5-year warranties on qualifying work.",
      ],
    },
    {
      name: "East End",
      zipCodes: ["51501"],
      landmarks: ["East End", "Bayliss Park", "Lewis and Clark Monument"],
      nearby: ["Bayliss Park", "Manawa", "South Omaha Bridge District"],
      intro: [
        "Council Bluffs' East End in ZIP 51501 near Bayliss Park and the Lewis and Clark Monument features established residential streets where decades-old driveways and sidewalk panels settle on Missouri River bluff soils. East End's working-class housing stock includes concrete from multiple construction eras with varying settlement patterns.",
        "East End homeowners contact local contractors when garage aprons drop, sidewalk trip edges create liability near Bayliss Park walking routes, or driveway panels separate at control joints.",
      ],
      body: [
        "East End's established housing in 51501 includes mid-century slabs entering peak settlement years. Control joints deteriorated over decades allow water penetration and freeze-thaw acceleration.",
        "Bluff-top soil conditions in the East End differ from river-bottom alluvial deposits — creating neighborhood-specific settlement behavior that local contractors understand.",
        "East End leveling typically costs $500–$2,000. Affordable mudjacking for budget-conscious homeowners.",
      ],
    },
    {
      name: "Mall of the Bluffs Area",
      zipCodes: ["51501"],
      landmarks: ["Mall of the Bluffs", "Mid-America Center", "I-29 Corridor"],
      nearby: ["West Broadway", "I-80 Corridor", "Bayliss Park"],
      intro: [
        "Mall of the Bluffs Area neighborhoods in ZIP 51501 near the Mid-America Center and I-29 corridor experience commercial-proximity settlement on driveways and walkways — plus newer residential construction on graded fill that compacts within the first decade. Mall area properties see both traffic-vibration settlement and standard clay soil movement.",
        "Homeowners near Mall of the Bluffs call local contractors when garage aprons settle, patio slabs tilt, or sidewalk panels develop trip edges on residential streets behind the commercial corridor.",
      ],
      body: [
        "Mall of the Bluffs Area development in 51501 includes residential subdivisions built on fill graded during commercial corridor expansion. Compaction settling appears on driveways within five years of construction.",
        "I-29 corridor proximity adds ambient vibration to nearby slabs — particularly driveway approaches and garage aprons on properties nearest the commercial zone.",
        "Mall area jobs run $600–$2,200. Same-week Iowa-side scheduling available.",
      ],
    },
    {
      name: "South Omaha Bridge District",
      zipCodes: ["51503"],
      landmarks: ["South Omaha Bridge", "Missouri River", "Tom Hanafan River's Edge Park"],
      nearby: ["I-80 Corridor", "Manawa", "East End"],
      intro: [
        "South Omaha Bridge District properties in ZIP 51503 sit at Council Bluffs' eastern edge near the Missouri River crossing — where bridge-adjacent vibration, river-valley soils, and mixed residential-commercial construction create unique settlement patterns on driveways and sidewalk panels.",
        "South Omaha Bridge District homeowners on the Iowa side benefit from contractors who serve both Nebraska and Iowa — leveling sunken slabs without separate providers for each state.",
      ],
      body: [
        "South Omaha Bridge District location in 51503 means river-valley alluvial soils with seasonal groundwater influence on slab stability. Settlement appears faster here than on Council Bluffs' western uplands.",
        "Bridge traffic vibration affects nearby residential slabs — especially driveway panels and garage aprons on properties closest to the Missouri River crossing.",
        "South Omaha Bridge District leveling costs $600–$2,200. Cross-river scheduling adds no premium.",
      ],
    },
    {
      name: "I-80 Corridor",
      zipCodes: ["51503"],
      landmarks: ["I-80 Corridor", "Mid-America Center", "Mall of the Bluffs"],
      nearby: ["Mall of the Bluffs Area", "South Omaha Bridge District", "West Broadway"],
      intro: [
        "I-80 Corridor neighborhoods in ZIP 51503 along Council Bluffs' southern commercial edge near the Mid-America Center combine newer construction on freshly graded soil with highway-adjacent vibration that accelerates driveway and garage apron settlement. I-80 Corridor properties in 51503 show compaction settling within the first five years.",
        "From residential streets paralleling I-80 to subdivisions connecting toward Mall of the Bluffs, local mudjacking crews level sunken slabs throughout the 51503 corridor.",
      ],
      body: [
        "I-80 Corridor development in 51503 represents Council Bluffs' newest residential growth — driveways poured on fill that continues consolidating under daily vehicle weight for years after homeowners move in.",
        "Highway-adjacent vibration adds settlement stress beyond standard clay soil movement. Garage aprons on I-80 Corridor properties nearest the interstate settle measurably faster.",
        "I-80 Corridor jobs range $600–$2,400. Newer construction benefits from early leveling before settlement deepens. Free Iowa-side estimates.",
      ],
    },
  ],
};

export const neighborhoodAreas: NeighborhoodArea[] = cityAreas.flatMap((city) =>
  (neighborhoodConfigs[city.slug] ?? []).map((config) => createNeighborhood(city, config)),
);

export function getNeighborhoodPath(slug: string): string {
  return `/areas/${slug}`;
}

export function getNeighborhoodBySlug(slug: string): NeighborhoodArea | undefined {
  return neighborhoodAreas.find((area) => area.slug === slug);
}

export function getNeighborhoodsByCity(citySlug: string): NeighborhoodArea[] {
  return neighborhoodAreas.filter((area) => area.citySlug === citySlug);
}

export function getNeighborhoodLocalBusinessSchema(area: NeighborhoodArea) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: `Professional concrete leveling, mudjacking, and foam jacking in ${area.name}, ${area.cityName}, ${area.stateName}.`,
    telephone: siteConfig.phone,
    url: `${siteConfig.schemaUrl}${getNeighborhoodPath(area.slug)}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.cityName,
      addressRegion: area.state,
      postalCode: area.zipCodes[0],
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: area.name,
      containedInPlace: {
        "@type": "City",
        name: area.cityName,
        containedInPlace: { "@type": "State", name: area.stateName },
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

/** Resolve neighborhood slug from city neighborhood name */
export function getNeighborhoodSlug(name: string, citySlug: string): string | null {
  const match = neighborhoodAreas.find(
    (area) => area.name === name && area.citySlug === citySlug,
  );
  return match?.slug ?? null;
}

export function getCityForNeighborhood(area: NeighborhoodArea) {
  return getCityBySlug(area.citySlug);
}
