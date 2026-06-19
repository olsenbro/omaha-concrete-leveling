export type BlogPostSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  sections: BlogPostSection[];
};

export function getBlogPath(slug: string): string {
  return `/blog/${slug}`;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mudjacking-vs-polyjacking-omaha",
    title: "Mudjacking vs. Polyjacking in Omaha: Which Method Is Right for Your Project?",
    description:
      "Compare mudjacking and polyjacking (foam jacking) for Omaha concrete leveling — cost, cure times, best use cases, and how both hold up in Nebraska freeze-thaw cycles.",
    publishedDate: "2026-03-12",
    sections: [
      {
        paragraphs: [
          "If you have sunken concrete in Omaha — a driveway that dips at the garage, a sidewalk panel that catches your toe, or a patio that drains the wrong direction — you have two proven options for lifting it back into place without tearing anything out. Mudjacking and polyjacking (also called foam jacking or polyurethane lifting) both fill the void beneath your slab and raise it to grade. Both work well in Nebraska. The right choice depends on your project, your timeline, and your budget.",
          "Omaha Mudjacking Pros connects homeowners across Douglas County, Sarpy County, and Council Bluffs with local contractors who perform both methods every day. Here is an honest comparison so you can walk into your free estimate knowing what to ask.",
        ],
      },
      {
        heading: "How Mudjacking Works",
        paragraphs: [
          "Mudjacking is the original concrete leveling method, and it remains the most cost-effective option for most residential jobs in the Omaha metro. A contractor drills small holes — typically 1 to 2 inches — through your sunken slab, then pumps a slurry of soil, water, and cement underneath. That mixture fills the void created when soil compacted or washed away, and hydraulic pressure lifts the concrete back to its original height.",
          "Once the slab is level, the holes are patched with concrete and blend in within weeks. The process takes a few hours for most driveways and patios. You can usually walk on the surface within 24 hours. Mudjacking has been used on Nebraska homes for decades, and contractors in our network have lifted thousands of slabs across Benson, Millard, Elkhorn, and Papillion using this approach.",
        ],
      },
      {
        heading: "How Polyjacking (Foam Jacking) Works",
        paragraphs: [
          "Polyjacking uses expanding polyurethane foam instead of a cement slurry. The contractor drills dime-sized holes, injects the two-part foam, and watches the slab rise with precision as the material expands. The foam cures in about 15 minutes, which means you can drive on a foam-jacked driveway the same day.",
          "Polyurethane is waterproof, so it will not wash out from groundwater or spring runoff — a real consideration for patio slabs near downspouts and pool decks in Omaha's clay-heavy soils. The holes are smaller and less visible after patching. The trade-off is cost: foam jacking typically runs 20–40% more than mudjacking for the same square footage.",
        ],
      },
      {
        heading: "Cost Comparison in the Omaha Metro",
        paragraphs: [
          "For a typical residential mudjacking job in Omaha — a sunken driveway section or a few sidewalk panels — expect $600 to $2,500 depending on slab count, size, and how far the concrete has dropped. Foam jacking for the same project usually falls in the $800 to $3,000 range.",
          "That price gap matters on large flat areas like full driveways and wide patios, where mudjacking's lower material cost adds up. On smaller, precision jobs — a single garage approach slab, a section of pool deck, or concrete over a utility line — the extra cost of foam jacking is often worth it for the faster cure time and smaller drill holes. Your contractor will recommend the method that fits your specific slab during a free on-site estimate.",
        ],
      },
      {
        heading: "Cure Times and Daily Life",
        paragraphs: [
          "If you need to use your driveway tomorrow morning, foam jacking is the clear winner — cure time is 15 minutes, and most contractors say you can drive on it within an hour. Mudjacking requires a 24-hour cure before foot traffic and 48 to 72 hours before vehicle weight on driveways.",
          "For a backyard patio you rarely use or a side-yard sidewalk, that waiting period may not matter at all. For a busy two-car driveway in midtown Omaha where street parking is a headache, same-day use is a genuine advantage. Talk to your contractor about your schedule — most jobs in the metro are completed in a single visit lasting two to four hours regardless of method.",
        ],
      },
      {
        heading: "Best Use Cases for Each Method",
        paragraphs: [
          "Mudjacking excels on large, straightforward slabs: full driveways, wide patio sections, pool decks, and commercial warehouse floors. It is the go-to choice when cost is the primary concern and a 24-hour cure window is acceptable. Contractors throughout Bellevue, La Vista, and Gretna use mudjacking on the majority of their residential calls.",
          "Polyjacking is the better fit when precision matters — lifting one corner of a slab without stressing adjacent sections, working near plumbing or electrical lines, or leveling concrete in tight spaces where equipment access is limited. It is also preferred for slabs that sit below grade where water collects, because the closed-cell foam will not erode over time. Commercial property managers in Omaha often specify foam for loading docks and ADA ramp corrections where downtime is measured in minutes, not days.",
        ],
      },
      {
        heading: "Both Methods Handle Nebraska Freeze-Thaw Cycles",
        paragraphs: [
          "Omaha sits on heavy clay soil that expands when wet and contracts when dry. Add 40 to 50 freeze-thaw cycles every winter — water seeping under your slab, freezing, expanding, and creating voids — and you get the settlement pattern every local homeowner recognizes. Both mudjacking and polyjacking address the symptom by refilling those voids and restoring proper pitch for drainage.",
          "Neither method stops future settlement if the underlying drainage problem is not fixed. Reputable contractors in our network will flag gutter downspouts dumping next to your foundation or negative grade toward the house. Addressing drainage alongside leveling is what makes either repair last through Nebraska winters. Most jobs carry a five-year warranty regardless of method.",
          "The bottom line: if your concrete is structurally sound and has simply settled, both methods lift it back without the mess or cost of replacement. A local pro will give you a straight answer on which one fits your project.",
        ],
      },
    ],
  },
  {
    slug: "concrete-leveling-cost-omaha",
    title: "How Much Does Concrete Leveling Cost in Omaha in 2026?",
    description:
      "2026 concrete leveling prices in Omaha by project type — driveways, sidewalks, patios — plus cost factors and why leveling runs 50–70% less than full replacement.",
    publishedDate: "2026-04-18",
    sections: [
      {
        paragraphs: [
          "One of the first questions Omaha homeowners ask when they notice a sunken driveway or uneven sidewalk is simple: how much is this going to cost? The honest answer is that it depends on the project — but concrete leveling is almost always a fraction of what full replacement would run. In 2026, most residential mudjacking and foam jacking jobs in the Omaha metro fall between $600 and $2,500, with smaller repairs starting lower and large multi-slab projects reaching the upper end.",
          "Omaha Mudjacking Pros connects you with local contractors who provide free, no-obligation estimates. Pricing is confirmed on-site after a pro assesses your specific slabs. The ranges below reflect typical market rates across Douglas County, Sarpy County, and Council Bluffs — not a quote for your project.",
        ],
      },
      {
        heading: "Typical Price Ranges by Project Type",
        paragraphs: [
          "Driveway leveling is the most common call we get in the Omaha metro. Most homeowners are dealing with one or two settled sections near the garage apron or along the street edge — not the entire driveway. For a standard two-car driveway with moderate settling (1 to 3 inches), expect $600 to $1,500 for mudjacking. If the full driveway has multiple sunken panels or severe drop (4 inches or more), costs can reach $1,500 to $2,500. Foam jacking adds roughly 20–40% to those figures.",
          "Sidewalk repair is typically the most affordable project type. A single settled panel — the kind the city flags as a trip hazard — usually runs $300 to $800 depending on panel size and settling depth. Multi-panel walks along the front of a house in Papillion, Ralston, or midtown Omaha might reach $800 to $1,200. Because sidewalk panels are smaller and lighter, they require less material and less time on site.",
          "Patio and pool deck leveling covers a wide range because patio sizes vary dramatically. A small 10-by-12-foot patio with one or two settled corners might cost $500 to $900. A large backyard entertaining area with multiple sunken sections — common in Millard and Elkhorn homes built in the 1990s and 2000s — can run $1,200 to $2,000 or more. Pool decks often specify foam jacking because of the waterproof cure and precision around coping and plumbing lines.",
        ],
      },
      {
        heading: "What Affects Your Concrete Leveling Cost",
        paragraphs: [
          "The number of slabs and total square footage is the biggest cost driver. More panels means more drill points, more lifting material, and more labor. Settling severity matters too — lifting a slab four inches back to flush requires more material than a one-inch correction.",
          "Access difficulty plays a role in Omaha yards with retaining walls, tight side gates, or mature landscaping. The choice between mudjacking and foam jacking also affects material cost: cement slurry is cheaper per cubic foot, while polyurethane costs more but cures faster in wet conditions.",
        ],
      },
      {
        heading: "Why Leveling Costs 50–70% Less Than Replacement",
        paragraphs: [
          "Full concrete replacement means demolition, hauling, forming, pouring, finishing, and a seven- to 14-day cure before you can drive or walk on the new surface. For a standard two-car driveway in Omaha, replacement typically runs $6,000 to $10,000 — sometimes more if the old slab is thick or access is difficult.",
          "Concrete leveling skips all of that. Your existing slab stays in place. The crew drills small holes, pumps material underneath, lifts the concrete, patches the holes, and leaves — usually in two to four hours. Material and labor costs are a fraction of a full pour. There is no dumpster, no rebar, no waiting for the concrete truck, and no risk of new concrete not matching the older sections on your property.",
          "For a driveway that might cost $8,000 to replace, leveling often comes in at $1,200 to $2,000. That is real money saved — and the result is a level surface that drains properly and eliminates trip hazards. The catch: leveling only works when the concrete itself is still structurally sound. Crumbling, shattered, or severely cracked slabs need replacement. A reputable contractor will tell you which category your project falls into during the free estimate.",
        ],
      },
      {
        heading: "2026 Pricing Context in the Omaha Metro",
        paragraphs: [
          "Material and fuel costs have stabilized compared to the spikes of 2022 and 2023, but skilled labor remains in demand across Douglas and Sarpy counties. Most contractors in our network have held pricing relatively steady heading into 2026, with modest increases of 3–5% over 2025 rates for foam jacking materials.",
          "Free estimates remain standard across the Omaha metro. Be wary of quotes given over the phone without an inspection — settling depth and void size cannot be assessed from a photo alone. When comparing bids, make sure you are comparing the same method, scope, and warranty terms.",
        ],
      },
      {
        heading: "When Leveling Is Not the Cheapest Option Long-Term",
        paragraphs: [
          "Concrete broken into multiple pieces, with severe alligator cracking, or heaved by tree roots may need replacement instead. An honest contractor will tell you when leveling is throwing good money at bad concrete — and that straight recommendation is worth more than the lowest bid.",
        ],
      },
    ],
  },
  {
    slug: "why-concrete-sinks-omaha-nebraska",
    title: "Omaha's Freeze-Thaw Problem: Why Concrete Sinks and What to Do About It",
    description:
      "Why concrete sinks in Omaha — Nebraska clay soil, freeze-thaw cycles, Douglas County drainage patterns — and when leveling vs. replacement is the right fix.",
    publishedDate: "2026-05-22",
    sections: [
      {
        paragraphs: [
          "Walk through any Omaha neighborhood in spring and you will see the same problem repeating itself: driveway slabs that have dropped at the garage, sidewalk panels that no longer line up, patio corners that tilt toward the house. It is not bad luck, and it is not poor construction — at least not always. It is geology, weather, and drainage working together the way they have in eastern Nebraska for centuries.",
          "Understanding why your concrete sank is the first step toward fixing it the right way. Omaha Mudjacking Pros connects homeowners across Douglas County, Sarpy County, and Council Bluffs with local contractors who see these patterns every day. Here is what is happening under your slab — and what you can do about it.",
        ],
      },
      {
        heading: "Nebraska's Clay Soil Is the Starting Point",
        paragraphs: [
          "The Omaha metro sits on thick deposits of clay and silty clay left behind by ancient glacial meltwater and the Missouri River floodplain. Clay holds water when it is wet and shrinks when it dries. That expansion and contraction cycle — happening constantly beneath your concrete — is the root cause of most settlement in our area.",
          "When clay gets wet, it swells and pushes upward. When it dries out during a hot Nebraska summer, it shrinks and pulls away from the underside of your slab, creating voids. Concrete is strong in compression but has nothing to hold it up when the soil beneath it disappears. Gravity does the rest. Homes in Elkhorn, Gretna, Bennington, and west Omaha see this pattern on newer lots where fill soil was not fully compacted before the slab was poured. Older neighborhoods in Dundee, Benson, and south Omaha see it on slabs that have simply had decades of seasonal cycles underneath them.",
        ],
      },
      {
        heading: "Freeze-Thaw Cycles Make It Worse",
        paragraphs: [
          "Omaha averages 40 to 50 freeze-thaw cycles per winter — days where temperatures cross the freezing point and back. Each cycle is a mini demolition event under your driveway. Water seeps into cracks, joints, and the gap between soil and slab. It freezes at 32 degrees, expands by about 9%, and pushes against the concrete from below. When it thaws, the ice becomes water again and drains away, leaving a slightly larger void than before.",
          "Repeat that process dozens of times between November and March, year after year, and even a properly poured slab will start to drop. This is why settlement problems show up so predictably in March and April — the cumulative effect of an entire winter's freeze-thaw activity becomes visible once the snow melts. Douglas County's clay-heavy soil holds moisture longer than sandy soils would, which means the freeze-thaw damage is concentrated and persistent.",
          "Spring runoff adds another layer. When snow melts quickly — common in Nebraska when a warm front follows a heavy snow — water flows across your driveway and patio, soaks into the soil at the edges, and accelerates erosion beneath the slab. If your downspouts discharge right next to the driveway or patio, you are feeding the problem directly.",
        ],
      },
      {
        heading: "Douglas County Drainage Patterns and Local Context",
        paragraphs: [
          "Douglas County's relatively flat terrain means water does not always drain away from structures the way it would on a slope. In Millard, Papillion, and La Vista, subdivisions were graded decades ago with minimal fall — and that grade has settled along with everything else.",
          "Council Bluffs and Carter Lake sit on similar Missouri River floodplain soil, with a higher water table near the river. Omaha's mature tree canopy sends root systems under sidewalks and driveways, creating channels for water to flow beneath slabs and accelerating erosion.",
        ],
      },
      {
        heading: "Seasonal Patterns Omaha Homeowners Should Watch For",
        paragraphs: [
          "Settlement is not always gradual. Many homeowners report that a driveway was fine in October and noticeably sunk by April — the cumulative effect of a full winter's freeze-thaw activity. Check your concrete in late March through May and again in late September before the ground freezes.",
          "Look for water pooling on driveways, gaps between the driveway and garage floor, and patio sections that tilt toward the house foundation. Catching settlement early — when the drop is an inch or less — makes leveling faster, cheaper, and more effective.",
        ],
      },
      {
        heading: "When Leveling Is the Right Call",
        paragraphs: [
          "Concrete that has simply settled — dropped due to soil compaction, erosion, or freeze-thaw voids — is an excellent candidate for mudjacking or foam jacking. The slab itself is still in one piece, the surface is not crumbling, and lifting it back to grade restores drainage and eliminates trip hazards. Most sunken driveways, sidewalk panels, and patio sections in the Omaha metro fall into this category.",
          "Leveling costs 50–70% less than replacement, takes a few hours instead of a week, and you keep your existing concrete — which already matches the color and texture of adjacent sections. For a typical residential job, that means $600 to $2,500 instead of $6,000 to $10,000 for a new driveway. Local contractors in our network can assess your slab and confirm whether leveling is appropriate during a free on-site visit.",
        ],
      },
      {
        heading: "When Replacement Is the Better Option",
        paragraphs: [
          "Not every slab can be lifted. Crumbling concrete, severe structural cracking, or tree root heave requires removal and replacement. Slabs that have been leveled before and settled again may have drainage problems that need more than another injection. Get an estimate — the inspection itself will clarify whether your concrete is a lifting candidate or a replacement job.",
        ],
      },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getBlogPostWordCount(post: BlogPost): number {
  return post.sections.reduce(
    (total, section) =>
      total +
      section.paragraphs.reduce((sum, p) => sum + p.split(/\s+/).filter(Boolean).length, 0),
    0,
  );
}
