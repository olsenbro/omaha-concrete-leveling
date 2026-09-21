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
    slug: "concrete-repair-omaha",
    title: "Concrete Repair in Omaha: Should You Lift It, Patch It, or Replace It?",
    description:
      "A straight guide to concrete repair in Omaha, NE — how to tell whether a sunken or cracked slab can be lifted, when patching is enough, and when replacement is the honest answer.",
    publishedDate: "2026-09-21",
    sections: [
      {
        paragraphs: [
          "Most concrete repair questions in Omaha come down to one decision: can this slab be saved, or is it past saving? That single question decides whether you are looking at a few hours of work or a multi-day tear-out, and homeowners are often quoted both for the same driveway.",
          "This guide is written to help you tell the difference before anyone gives you a number. Omaha Mudjacking Pros connects homeowners across Douglas County, Sarpy County, and Council Bluffs with local contractors — and the honest answer is sometimes that lifting is not the right call. Knowing which situation you are in is what stops you overpaying.",
        ],
      },
      {
        heading: "First: Is the Slab Sunken, or Is It Broken?",
        paragraphs: [
          "This is the distinction that matters most, and it is easy to check yourself. A sunken slab has dropped as a unit — the concrete itself is still sound, but the soil beneath it compacted or washed out, leaving a void. You will usually see a clean height difference at a joint, a driveway that dips where it meets the garage, or a patio that has tilted back toward the house. Run your eye along the surface: if the panel is intact and simply sitting too low, it is a candidate for lifting.",
          "A broken slab is a different problem. Wide cracks with crumbling edges, spalling where the surface flakes away, exposed aggregate, rebar showing through, or a panel fractured into several pieces that move independently — these are signs the concrete has lost structural integrity. Lifting a slab that is already failing will not repair it, and a contractor who offers to is not doing you a favour.",
          "Plenty of Omaha driveways show both at once: a sound panel that has settled next to a panel that is genuinely shot. A good assessment treats them separately rather than pricing the whole driveway as one job.",
        ],
      },
      {
        heading: "When Lifting Is the Right Repair",
        paragraphs: [
          "Concrete leveling — whether mudjacking or polyurethane foam — works when the slab is structurally sound and the problem is underneath it. The contractor drills small holes, fills the void beneath, and raises the concrete back to grade. Because the original slab stays in place, it is dramatically faster than replacement and the surface is usually usable the same day or the next.",
          "Good candidates in this market are settled driveway aprons, sidewalk panels that have created a trip hedge, patios draining the wrong way, garage floors that have dropped at one corner, and pool decks. These are the everyday jobs, and they are common in Omaha for a specific reason covered below.",
          "Lifting also preserves something replacement cannot: a matched surface. A newly poured panel will not match twenty-year-old concrete in colour or texture, and that difference does not fade.",
        ],
      },
      {
        heading: "When Replacement Is the Honest Answer",
        paragraphs: [
          "Replacement is the right call when the concrete has failed rather than simply moved. If a panel is broken into multiple independently-moving pieces, if the surface has spalled deeply enough to expose aggregate across a wide area, if rebar is visible and rusting, or if the slab was poured too thin for what it is now carrying, lifting it will only relocate the problem.",
          "Severe or accelerating cracking matters too. Hairline surface cracks are normal in Nebraska concrete and are not a reason to replace anything. Cracks you can fit a finger into, that have displaced vertically, or that have visibly widened over a season are telling you something structural is happening underneath.",
          "There is also a judgement call about age and remaining life. Lifting concrete that is close to the end of its service life can be good value if it buys you several more years — or false economy if the slab fails anyway the following winter. A contractor willing to say \"this one is not worth lifting\" is worth listening to.",
        ],
      },
      {
        heading: "When Patching or Sealing Is Enough",
        paragraphs: [
          "Not every concrete problem needs lifting or replacing. Narrow cracks in an otherwise level, sound slab are usually a maintenance job: clean them out, fill them with a flexible sealant, and keep water from getting underneath. In Omaha that matters more than it sounds, because water in a crack is the beginning of the next problem.",
          "Joint sealing falls into the same category. The joints between panels are designed to move, and when the sealant in them fails, meltwater runs straight into the soil beneath your slab — which is exactly how a sound driveway becomes a sunken one. Resealing joints is inexpensive and prevents a much larger job later.",
          "If someone quotes you a full replacement for what is visibly a sealing job, get a second opinion.",
        ],
      },
      {
        heading: "Why Omaha Concrete Sinks in the First Place",
        paragraphs: [
          "Eastern Nebraska sits on deep wind-deposited loess soil. Loess drains well but is prone to consolidating when it gets saturated and then dries — it loses volume, and whatever is sitting on top of it drops. That is the single most common reason for settled concrete across the metro, and it is why lifting is so often the correct repair here: the concrete is fine, the ground moved.",
          "Freeze-thaw cycling compounds it. Omaha crosses the freezing point repeatedly through winter rather than staying frozen, and each cycle works water into cracks and joints, expands it, and opens the gap slightly further. Surface damage in this market is usually a story about water and temperature rather than about bad concrete.",
          "Drainage is the third factor and the one homeowners can actually control. Downspouts discharging next to a slab, negative grade running back toward the house, and failed joint sealant all concentrate water exactly where it does the most harm. Fixing the drainage is what stops the same slab settling again after it has been lifted.",
        ],
      },
      {
        heading: "What Actually Drives the Price of a Repair",
        paragraphs: [
          "Rather than quote a figure that cannot account for your slab, here is what a contractor is actually pricing. The size of the area being lifted is the starting point, measured in square footage. How far the slab needs to rise matters — a half-inch correction and a four-inch correction are not the same job. Access matters: a back patio reached through a narrow gate takes longer than a driveway a truck can park on.",
          "Method affects price too. Polyurethane foam typically costs more per square foot than traditional mudjacking but cures in minutes and weighs far less, which matters on weaker soils. The honest comparison between the two is covered in our mudjacking versus polyjacking guide.",
          "Finally, the condition of the slab changes the scope. If joints need resealing or cracks need filling as part of the work, that is additional. Any quote worth comparing should break these out as line items rather than giving you a single number — that is what lets you put two bids side by side and see what is actually different about them.",
        ],
      },
      {
        heading: "Getting a Straight Assessment",
        paragraphs: [
          "Ask the contractor to tell you which category your slab falls into and why — lift, patch, or replace — before any price is discussed. Ask them to point at what they are seeing. A settled-but-sound panel and a failing one look different, and someone who works on Omaha concrete every day can show you the difference in about a minute.",
          "Ask what happens if the void is larger than expected once they start, and how that is priced. Ask whether drainage is contributing, and what they would do about it — because lifting a slab without addressing the water that undermined it is a repair with a short shelf life.",
          "If you want a second opinion on a quote you already hold, that is a reasonable thing to ask for, and a good contractor will not be offended by it.",
        ],
      },
    ],
  },
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
