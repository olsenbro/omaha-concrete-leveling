import type { ServiceFaq } from "@/components/service/ServicePageTemplate";

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceContentSection =
  | {
      type: "prose";
      title: string;
      paragraphs: string[];
      className?: string;
    }
  | {
      type: "bullet-list";
      title: string;
      intro?: string;
      outro?: string;
      items: string[];
      className?: string;
    }
  | {
      type: "process";
      title: string;
      steps: ServiceProcessStep[];
      className?: string;
    }
  | {
      type: "comparison";
      title: string;
      intro?: string;
      headers: string[];
      rows: string[][];
      className?: string;
    };

export type CoreService = {
  slug: string;
  label: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  faqTitle: string;
  faqs: ServiceFaq[];
  schema: { name: string; description: string };
  sections: ServiceContentSection[];
  priority: number;
};

export const coreServices: CoreService[] = [
  {
    slug: "mudjacking",
    label: "Mudjacking",
    title: "Mudjacking Omaha NE | Concrete Lifting & Leveling Experts",
    description:
      "Professional mudjacking in Omaha. Local contractors pump slurry beneath sunken slabs to lift driveways, sidewalks, and patios. Costs 50–70% less than replacement. Free estimates.",
    h1: "Mudjacking in Omaha, Nebraska",
    intro: [
      "Mudjacking is a proven concrete lifting technique that restores sunken slabs without tear-out or replacement. A slurry of soil, water, and Portland cement is pumped through small holes drilled in the sunken concrete slab. As the mixture fills the void beneath, hydraulic pressure lifts the slab back to its original grade. Once the slab is level, the access holes are patched and the job is complete.",
      "As the original concrete leveling method — used successfully for more than 80 years — mudjacking remains the go-to solution for larger residential slabs in Omaha. It's cost-effective, minimally invasive, and ideal for driveways, sidewalks, patios, and garage floors where substantial lifting is needed and budget matters.",
    ],
    faqTitle: "Mudjacking FAQ",
    faqs: [
      {
        question: "How long does mudjacking last?",
        answer:
          "Properly done mudjacking typically lasts 8–10 years or more. Longevity depends on the underlying soil conditions. Most local contractors offer a 5-year warranty on qualifying work.",
      },
      {
        question: "Will the patch holes be visible?",
        answer:
          "Patches will be visible on close inspection but blend well from a normal viewing distance. Over time, weathering helps them fade further.",
      },
      {
        question: "Can mudjacking fix my basement floor?",
        answer:
          "Yes — basement floors are excellent candidates for mudjacking as long as the slab is structurally sound and not crumbling.",
      },
      {
        question: "Does mudjacking work in winter?",
        answer:
          "Mudjacking can be performed in temperatures above 35°F. Nebraska's freeze-thaw cycles can accelerate concrete settling, making late fall and early spring popular times to address sinking slabs.",
      },
    ],
    schema: {
      name: "Mudjacking",
      description:
        "Professional mudjacking services in Omaha, Nebraska. Soil-cement slurry pumped beneath sunken slabs to lift driveways, sidewalks, patios, and garage floors.",
    },
    priority: 0.9,
    sections: [
      {
        type: "bullet-list",
        title: "What Can Be Mudjacked?",
        intro:
          "Nearly any structurally sound concrete slab that has settled due to soil movement can be mudjacked. If your concrete is intact but uneven, mudjacking is almost always worth exploring before committing to a full replacement.",
        items: [
          "Driveways",
          "Garage aprons",
          "Sidewalks and walkways",
          "Patio slabs",
          "Pool decks",
          "Steps and stoops",
          "Basement floors",
          "Commercial slabs",
        ],
      },
      {
        type: "process",
        title: "The Mudjacking Process — Step by Step",
        className: "bg-neutral",
        steps: [
          {
            title: "Free on-site assessment",
            description:
              "A contractor inspects the sunken area, measures the drop, and identifies what's causing the settlement — soil erosion, poor compaction, or drainage issues.",
          },
          {
            title: "Drill access holes",
            description:
              "Small 1.5–2 inch holes are drilled through the slab at strategic points to reach the void beneath the concrete.",
          },
          {
            title: "Pump the slurry",
            description:
              "A soil-cement mixture is pumped in under controlled pressure, filling voids and gradually lifting the slab from below.",
          },
          {
            title: "Monitor and level",
            description:
              "The slab is raised gradually, checking with a level to ensure proper pitch for drainage and a flush, even surface.",
          },
          {
            title: "Patch the holes",
            description:
              "Access holes are filled with cement patch and finished to blend with the existing slab as closely as possible.",
          },
          {
            title: "Clean up and done",
            description:
              "Your concrete is level and ready to use — most residential mudjacking jobs are completed in 2–4 hours.",
          },
        ],
      },
      {
        type: "comparison",
        title: "Mudjacking Cost in Omaha",
        intro:
          "Typical mudjacking costs in the Omaha area range from $600 to $2,500 for residential projects. Smaller jobs (one or two panels) often run $400–$800. Larger driveways with multiple settled slabs may run $1,500–$2,500. This compares favorably to full replacement, which typically runs $4,000–$12,000+ depending on size. When you request an estimate, your local pro will provide a written quote before any work begins.",
        headers: ["Solution", "Average Cost", "Time to Complete", "Mess Level"],
        rows: [
          ["Mudjacking", "$600–$2,500", "2–4 hours", "Minimal"],
          ["PolyJacking", "$800–$3,000", "1–3 hours", "Minimal"],
          ["Full Replacement", "$4,000–$12,000+", "3–7 days", "Major"],
        ],
      },
    ],
  },
  {
    slug: "foam-jacking",
    label: "Foam/PolyJacking",
    title: "Mudjacking Omaha | Foam Jacking & PolyJacking",
    description:
      "PolyJacking in Omaha — lightweight expanding foam lifts sunken concrete in minutes. Cures in 15 min, waterproof, and precise. Call for a free estimate.",
    h1: "Foam Jacking (PolyJacking) in Omaha, Nebraska",
    intro: [
      "Foam jacking — also called polyjacking or polyurethane concrete lifting — is the modern alternative to traditional mudjacking. Instead of pumping a heavy soil-cement slurry, technicians drill golf-ball-sized access holes and inject high-density expanding polyurethane foam beneath the sunken slab. The foam expands to fill voids, exerting upward pressure that lifts the concrete back to grade in minutes.",
      "Once injected, the foam cures in approximately 15 minutes. It's waterproof, won't erode with groundwater, and adds virtually no weight to the soil below — making it an excellent choice for precision leveling, areas near plumbing or utilities, and projects where same-day return to service matters.",
    ],
    faqTitle: "Foam Jacking FAQ",
    faqs: [
      {
        question: "How is foam jacking different from mudjacking?",
        answer:
          "Foam jacking uses lightweight expanding polyurethane instead of a heavy soil-cement slurry. Holes are smaller, cure time is 15 minutes instead of 24 hours, and the foam is waterproof — making it ideal for precision work and areas where added weight is a concern.",
      },
      {
        question: "Can I drive on foam-jacked concrete immediately?",
        answer:
          "Yes. Polyurethane foam cures in approximately 15 minutes, so you can walk on it right away and drive on it the same day — a major advantage over traditional mudjacking for busy driveways and commercial applications.",
      },
      {
        question: "Is foam jacking more expensive than mudjacking?",
        answer:
          "Foam jacking typically costs 15–30% more than mudjacking due to material costs. For most Omaha homeowners, the faster cure time, smaller holes, and waterproof properties justify the modest premium — especially on pool decks and garage floors.",
      },
      {
        question: "Will the foam wash out over time?",
        answer:
          "No. High-density polyurethane foam is waterproof and chemically stable. Unlike soil-based slurry, it won't erode with groundwater or freeze-thaw cycles — one reason it's preferred for pool decks, basement slabs, and areas with drainage challenges.",
      },
    ],
    schema: {
      name: "Foam Jacking (PolyJacking)",
      description:
        "Polyurethane foam injection concrete lifting in Omaha, Nebraska. Fast-curing, waterproof slab leveling for driveways, patios, pool decks, and commercial applications.",
    },
    priority: 0.9,
    sections: [
      {
        type: "comparison",
        title: "Foam Jacking vs. Mudjacking — Which Is Right for You?",
        intro:
          "Both methods lift sunken concrete without replacement — the difference is in the material, speed, and precision. Mudjacking uses a heavier soil-cement slurry and is typically the most budget-friendly option for large residential slabs. Foam jacking uses lightweight polyurethane that cures in minutes, creates smaller holes, and offers waterproof performance — ideal when precision, aesthetics, or fast turnaround are priorities.\n\nDuring your free estimate, a local contractor will assess your specific situation and recommend the method that delivers the best long-term result for your property and budget. Many Omaha homeowners choose foam jacking for pool decks and garage floors, and mudjacking for large driveways where cost savings matter most.",
        headers: ["", "Mudjacking", "Foam Jacking"],
        rows: [
          ["Material", "Soil-cement slurry", "Expanding polyurethane foam"],
          ["Hole size", "1.5–2 inches", "~⅝ inch (dime-sized)"],
          ["Cure time", "24 hours", "15 minutes"],
          ["Weight added", "Heavy", "Nearly weightless"],
          ["Waterproof", "No", "Yes"],
          ["Best for", "Large slabs, budget projects", "Precision, plumbing-sensitive areas"],
          ["Average cost", "$600–$2,500", "$800–$3,000"],
        ],
      },
      {
        type: "bullet-list",
        title: "When Foam Jacking Is Recommended",
        className: "bg-neutral",
        intro:
          "Foam jacking isn't always necessary — but in these situations, it's often the clear winner over traditional mudjacking or full replacement:",
        items: [
          "Areas near plumbing or utilities where less invasive drilling is important",
          "Precision leveling required — uneven slabs with multiple elevation changes",
          "Project needs same-day return to service (driveways, commercial entrances)",
          "Waterproofing is important — pool decks, basement slabs, areas with poor drainage",
          "Smaller access holes desired for aesthetics on visible patio or walkway surfaces",
        ],
      },
      {
        type: "prose",
        title: "Foam Jacking Cost in Omaha",
        paragraphs: [
          "Foam jacking in the Omaha metro typically runs $800 to $3,000 for residential projects, depending on slab size, lift depth, and access. Small patio or sidewalk panels often fall in the $800–$1,200 range, while larger driveways or multi-slab jobs may reach $2,000–$3,000. Even at the higher end, foam jacking remains 50–70% less expensive than full concrete replacement — and you're back on your slab the same day.",
          "Local Omaha contractors use commercial-grade polyurethane systems rated for Nebraska's freeze-thaw cycles. Every foam jacking job typically includes a written estimate, a 5-year warranty, and a post-job walkthrough so you know exactly what to expect.",
        ],
      },
    ],
  },
  {
    slug: "driveway-leveling",
    label: "Driveway Leveling",
    title: "Mudjacking Omaha | Driveway Leveling Without Replacement",
    description:
      "Sunken driveway in Omaha? Local specialists lift and level settled driveway slabs in hours — no tear-out, no mess. Save thousands vs. replacement. Free estimate.",
    h1: "Driveway Leveling in Omaha — Lift, Don't Replace",
    intro: [
      "A sunken driveway isn't just annoying — it scrapes your car, pools water toward your garage, and gets worse every Nebraska winter. Most Omaha homeowners assume a settled driveway means a $6,000–$10,000 tear-out and repour. In most cases, it doesn't. Driveway leveling lifts settled panels back to grade in a single visit, without demolition, without days of curing, and at a fraction of the cost.",
      "Whether your driveway has dropped at the garage apron, developed a trip edge at the sidewalk, or sagged in the middle from soil settlement, local mudjacking and foam jacking specialists can restore a level, safe surface — usually the same week you call.",
    ],
    faqTitle: "Driveway Leveling FAQ",
    faqs: [
      {
        question: "How much does driveway leveling cost in Omaha?",
        answer:
          "Most Omaha driveway leveling projects run $600–$2,500 depending on the number of settled panels and lift depth. A single sunken panel near the garage often costs $400–$800. Full driveways with multiple settled sections may run $1,500–$2,500 — still far less than the $4,000–$12,000+ typical for full replacement.",
      },
      {
        question: "Can you level just one panel of my driveway?",
        answer:
          "Yes. Driveways are poured in sections separated by control joints. If only one or two panels have settled, those specific sections can be lifted without disturbing the rest of the driveway.",
      },
      {
        question: "How long before I can park on my driveway?",
        answer:
          "With mudjacking, wait 24 hours before parking vehicles. With foam jacking, you can typically drive on the surface within 15–30 minutes of completion.",
      },
      {
        question: "Will leveling fix cracks in my driveway?",
        answer:
          "Leveling closes gaps between panels and stops further cracking caused by flexing on an uneven base. Existing surface cracks may remain visible but won't worsen once the slab is properly supported underneath.",
      },
    ],
    schema: {
      name: "Driveway Leveling",
      description:
        "Driveway leveling and sunken slab repair in Omaha, Nebraska. Lift settled driveway panels without full replacement using mudjacking or foam jacking.",
    },
    priority: 0.8,
    sections: [
      {
        type: "bullet-list",
        title: "Why Driveways Sink in Nebraska",
        intro:
          "Omaha sits on expansive clay soil that shrinks in drought and swells when saturated. Combined with harsh freeze-thaw cycles from November through March, this creates constant movement beneath your driveway's base. Over time, voids form under the slab and gravity does the rest.",
        items: [
          "Freeze-thaw cycles heave and settle soil beneath the slab each winter",
          "Expansive clay soil in Douglas and Sarpy County compacts unevenly over time",
          "Tree roots near the driveway edge create voids as they grow and decay",
          "Poor compaction during original construction leads to gradual settling",
          "Water erosion from downspouts or grading issues washes out the base",
        ],
      },
      {
        type: "bullet-list",
        title: "Signs Your Driveway Needs Leveling",
        className: "bg-neutral",
        items: [
          "Water pools in low spots or runs toward your garage instead of the street",
          "Your car scrapes the bottom of the driveway dip when entering or exiting",
          "Visible gaps or height differences between driveway panels at control joints",
          "Cracks widening at the garage apron or where the driveway meets the sidewalk",
          "One panel sits noticeably lower than adjacent panels or the street curb",
        ],
        outro:
          "If you notice any of these signs, addressing the settlement early prevents further cracking and structural damage. Waiting typically means a bigger lift — and a higher repair bill.",
      },
      {
        type: "process",
        title: "The Driveway Leveling Process",
        steps: [
          {
            title: "Inspect and measure",
            description:
              "The contractor walks your driveway, identifies settled panels, measures drop at the garage apron and street edge, and checks drainage pitch.",
          },
          {
            title: "Choose mudjacking or foam jacking",
            description:
              "Based on slab size, lift depth, and your timeline, the pro recommends the most cost-effective lifting method for your driveway.",
          },
          {
            title: "Drill and inject",
            description:
              "Access holes are drilled and lifting material is pumped beneath each settled panel, raising it gradually to match adjacent slabs.",
          },
          {
            title: "Verify pitch and finish",
            description:
              "Proper slope away from your garage and toward the street is confirmed, holes are patched, and the area is cleaned up — typically within 2–4 hours.",
          },
        ],
      },
      {
        type: "prose",
        title: "Driveway Leveling Cost in Omaha",
        className: "bg-neutral",
        paragraphs: [
          "Typical driveway leveling in Omaha runs $600–$2,500 for residential projects. Smaller jobs — a single sunken panel at the garage entrance — often cost $400–$800. Larger driveways with three or more settled sections may reach $1,500–$2,500. Compare that to full replacement at $4,000–$12,000+, plus 3–7 days of demolition, forming, pouring, and curing.",
          "Pricing varies by contractor — request a free estimate to get an accurate quote for your project. You'll know exactly what the job costs before any holes are drilled.",
        ],
      },
      {
        type: "prose",
        title: "Before & After — What to Expect",
        paragraphs: [
          "Most Omaha homeowners are surprised by how dramatic the difference is. A driveway that scraped the bottom of every vehicle becomes a smooth, level surface in a few hours. Water drains properly again. The trip edge at the sidewalk disappears. Curb appeal improves instantly — and you saved thousands compared to replacement.",
          "One Elkhorn homeowner had a 3-inch drop at the garage entrance that made pulling in feel like climbing a ramp. A local contractor mudjacked the two affected panels in 90 minutes. Total cost: a fraction of the $8,000 replacement quote they'd received. That's the kind of result driveway leveling delivers.",
        ],
      },
    ],
  },
  {
    slug: "sidewalk-repair",
    label: "Sidewalk Repair",
    title: "Mudjacking Omaha | Sidewalk Leveling & Trip Hazard Repair",
    description:
      "Uneven sidewalk in Omaha? Local contractors raise sunken concrete slabs and eliminate trip hazards fast. Avoid liability. City compliance. Free estimate — (402) 749-8050.",
    h1: "Sidewalk Leveling & Trip Hazard Repair in Omaha",
    intro: [
      "Uneven sidewalk panels are one of the most common — and most overlooked — concrete problems in Omaha. A single sunken slab creates a trip hazard that puts pedestrians at risk and exposes property owners to liability. The good news: most sidewalk trip hazards can be eliminated in hours with mudjacking or foam jacking, without breaking up and replacing the concrete.",
      "Whether the city flagged your sidewalk, a neighbor tripped on a raised edge, or you've noticed a panel sinking toward your front steps, local Omaha contractors can raise it back to grade quickly and affordably.",
    ],
    faqTitle: "Sidewalk Repair FAQ",
    faqs: [
      {
        question: "Am I liable if someone trips on my sidewalk in Omaha?",
        answer:
          "In Nebraska, property owners are generally responsible for maintaining sidewalks adjacent to their property. If a trip hazard causes an injury and you were aware of the defect — or failed to correct it after being notified — you may face liability. Leveling sunken panels promptly protects you and your neighbors.",
      },
      {
        question: "What if the city marked my sidewalk as a trip hazard?",
        answer:
          "Omaha and surrounding municipalities periodically inspect sidewalks and notify property owners of defects that must be corrected within a specified timeframe — often 30 days. We regularly help homeowners meet these deadlines. Most sidewalk leveling jobs are completed in a single morning.",
      },
      {
        question: "How much does sidewalk leveling cost?",
        answer:
          "Single-panel sidewalk leveling in Omaha typically runs $300–$600. Longer walkway sections with multiple settled panels may cost $600–$1,200. This is significantly less than removing and replacing sidewalk panels, which often requires permits and runs $800–$2,000+ per panel.",
      },
      {
        question: "Can you level a sidewalk without breaking the adjacent panel?",
        answer:
          "Yes. Mudjacking and foam jacking lift the sunken panel from beneath without disturbing adjacent slabs. Control joints remain intact and the surrounding concrete is unaffected.",
      },
    ],
    schema: {
      name: "Sidewalk Leveling & Trip Hazard Repair",
      description:
        "Sidewalk leveling and trip hazard repair in Omaha, Nebraska. Raise sunken sidewalk panels to eliminate liability and meet municipal compliance standards.",
    },
    priority: 0.8,
    sections: [
      {
        type: "prose",
        title: "Nebraska Property Owner Liability for Sidewalk Trip Hazards",
        paragraphs: [
          "Nebraska law places responsibility for sidewalk maintenance on the adjacent property owner in most municipalities, including Omaha. If a pedestrian trips on an uneven sidewalk panel and suffers an injury, the property owner may be held liable — especially if the hazard was known, reported, or previously flagged by the city.",
          "Trip hazards are defined differently by each municipality, but a height differential of ¾ inch or more between adjacent panels is the most commonly cited threshold. Even smaller gaps can be dangerous for elderly residents, children, and delivery workers. Proactive leveling is far less expensive than a liability claim or emergency replacement.",
        ],
      },
      {
        type: "prose",
        title: "Omaha Sidewalk Compliance & City Inspections",
        className: "bg-neutral",
        paragraphs: [
          "The City of Omaha and surrounding communities — including Papillion, Bellevue, La Vista, and Ralston — conduct periodic sidewalk inspections, particularly in older neighborhoods and commercial districts. When a trip hazard is identified, property owners receive a notice requiring correction within a set period, typically 30 days.",
          "Local contractors work with Omaha homeowners who receive these notices regularly. The leveling process eliminates the trip edge without the cost and disruption of panel replacement. Most jobs are completed in 1–3 hours, well within municipal deadlines. If you've received a city notice, call us — we can usually connect you with a pro within the same week.",
        ],
      },
      {
        type: "process",
        title: "The Sidewalk Leveling Process",
        steps: [
          {
            title: "Assess the hazard",
            description:
              "The height differential between panels is measured — Omaha and many municipalities flag gaps of ¾ inch or more as trip hazards requiring correction.",
          },
          {
            title: "Drill and lift",
            description:
              "Small access holes are drilled and lifting material is injected beneath the sunken panel, raising it flush with adjacent slabs.",
          },
          {
            title: "Verify compliance",
            description:
              "The panel is confirmed level and the trip edge is eliminated, meeting typical municipal sidewalk standards.",
          },
          {
            title: "Patch and clean up",
            description:
              "Holes are patched, the work area is cleaned, and your sidewalk is safe to walk on — usually within hours of starting.",
          },
        ],
      },
      {
        type: "prose",
        title: "Sidewalk Leveling Cost in Omaha",
        className: "bg-neutral",
        paragraphs: [
          "Sidewalk leveling is one of the most affordable concrete repair services in the Omaha area. Single panel lifts typically run $300–$600. Walkway sections with two to four settled panels generally cost $600–$1,200. Compared to panel replacement — which may require permits, demolition, and 3–5 days of curing at $800–$2,000+ per panel — leveling saves significant time and money.",
          "When you request an estimate, your local pro will assess the location and approximate size of the sunken panel — and can often provide a ballpark quote over the phone.",
        ],
      },
    ],
  },
  {
    slug: "patio-leveling",
    label: "Patio Leveling",
    title: "Mudjacking Omaha | Patio & Pool Deck Leveling",
    description:
      "Sunken patio or pool deck in Omaha? Mudjacking and foam jacking restore level surfaces without demolition. Fast, affordable. Free estimate.",
    h1: "Patio & Pool Deck Leveling in Omaha, Nebraska",
    intro: [
      "A sunken patio or tilting pool deck doesn't just look bad — it creates drainage problems, trip hazards, and gaps that worsen every freeze-thaw cycle. Replacing a patio means days of demolition, forming, and curing, plus the cost of removing furniture, grills, and landscaping. Patio leveling restores a flat, safe surface in hours, without tearing out a single slab.",
      "Patio and pool deck leveling is available throughout Omaha and the greater metro area from local specialists in our network. Whether your patio has settled toward the house, your pool deck has developed trip edges, or individual slabs have separated at the joints, a local pro can lift them back to grade — usually the same week you call.",
    ],
    faqTitle: "Patio Leveling FAQ",
    faqs: [
      {
        question: "Why is my patio sinking on one side?",
        answer:
          "Patios most commonly settle on the side nearest the house because downspout runoff, gutter overflow, or grading directs water under that edge. Over time, the soil erodes or compacts, and the slab tilts toward the foundation — a problem that should be corrected promptly.",
      },
      {
        question: "Can you level a pool deck without damaging the pool?",
        answer:
          "Yes. Both mudjacking and foam jacking lift the deck from above without any work inside the pool or on the pool structure. Foam jacking is often preferred for pool decks because it's waterproof and uses smaller access holes.",
      },
      {
        question: "How much does patio leveling cost in Omaha?",
        answer:
          "Patio leveling typically runs $600–$2,000 depending on size and lift depth. Small patios (100–200 sq ft) often cost $600–$1,000. Larger patios or multi-section pool decks may run $1,200–$2,000. Full patio replacement typically costs $3,000–$8,000+.",
      },
      {
        question: "Will leveling stop water from draining toward my house?",
        answer:
          "Yes — when done correctly. Contractors don't just lift the slab; they restore proper pitch so water drains away from your foundation. This is one of the most important benefits of patio leveling in Omaha's clay soil environment.",
      },
    ],
    schema: {
      name: "Patio & Pool Deck Leveling",
      description:
        "Patio and pool deck leveling in Omaha, Nebraska. Mudjacking and foam jacking to restore level outdoor surfaces without demolition.",
    },
    priority: 0.8,
    sections: [
      {
        type: "bullet-list",
        title: "Why Patios and Pool Decks Sink in Omaha",
        intro:
          "Omaha's expansive clay soil and aggressive freeze-thaw cycles make patios and pool decks especially vulnerable to settlement. Unlike driveways, patios often lack the compacted base that roadways receive — and water management around the slab is frequently overlooked during construction.",
        items: [
          "Clay soil expansion and contraction creates voids beneath patio slabs",
          "Freeze-thaw cycles from November through March accelerate cracking and tilting",
          "Tree root growth and decay shifts soil under patio edges and corners",
          "Downspout runoff erodes soil on the house-side edge, tilting the slab inward",
          "Pool deck settlement from plumbing leaks or improper backfill during construction",
        ],
      },
      {
        type: "prose",
        title: "Safety & Drainage — Why Leveling Matters",
        className: "bg-neutral",
        paragraphs: [
          "A patio that tilts toward your house is more than a cosmetic issue. Water that pools against the foundation seeps into basement walls, contributes to foundation cracks, and promotes mold in crawl spaces. In Omaha's clay soil, even small amounts of repeated water exposure at the foundation line can cause significant structural problems over time.",
          "Trip edges between settled pool deck sections are a liability risk — especially for children and elderly guests. Leveling eliminates these hazards and restores a continuous, safe walking surface around your pool and outdoor living area.",
        ],
      },
      {
        type: "process",
        title: "The Patio Leveling Process",
        steps: [
          {
            title: "Evaluate settlement and drainage",
            description:
              "The contractor inspects tilt direction, measures drop, and checks whether water drains toward your foundation — a common problem with settling patios.",
          },
          {
            title: "Select lifting method",
            description:
              "Pool decks and patios near plumbing often benefit from foam jacking. Larger open patio slabs may be ideal for mudjacking.",
          },
          {
            title: "Lift and level",
            description:
              "Material is injected beneath sunken sections, raising them gradually while monitoring pitch for proper water runoff.",
          },
          {
            title: "Finish and inspect",
            description:
              "Access holes are patched, the area is cleaned, and the contractor walks the surface with you to confirm the result.",
          },
        ],
      },
      {
        type: "prose",
        title: "Patio Leveling Cost in Omaha",
        className: "bg-neutral",
        paragraphs: [
          "Patio and pool deck leveling in Omaha typically costs $600–$2,000 for residential projects. Small patios under 200 square feet often fall in the $600–$1,000 range. Larger multi-section patios or pool decks with significant settlement may run $1,200–$2,000. Full patio replacement — including demolition, base prep, and new concrete — typically runs $3,000–$8,000+ and takes a week or more.",
          "Pricing varies by contractor — request a free estimate to get an accurate quote for your project. You'll receive a written quote before any work begins, with no pressure and no obligation.",
        ],
      },
    ],
  },
  {
    slug: "garage-floor-leveling",
    label: "Garage Floor Leveling",
    title: "Mudjacking Omaha | Garage Floor Leveling & Slab Repair",
    description:
      "Sunken or uneven garage floor in Omaha? Local specialists lift and level settled garage slabs without full replacement. Call for a free estimate — (402) 749-8050.",
    h1: "Garage Floor Leveling in Omaha, Nebraska",
    intro: [
      "A sunken or uneven garage floor is one of the most frustrating concrete problems Omaha homeowners deal with — and one of the most unnecessary to replace. Low spots pool water every time it rains, cracks widen at the garage apron, and the floor feels like it's tilting every time you pull in. Garage floor leveling lifts the settled slab back to grade without demolition, without weeks of curing, and at a fraction of replacement cost.",
      "Garage floor leveling is available throughout Omaha and the greater metro area from local specialists in our network. Local contractors level single-car, two-car, and oversized garage floors using mudjacking and foam jacking. Most jobs are completed in a single morning, and you can park in your garage the same day.",
    ],
    faqTitle: "Garage Floor Leveling FAQ",
    faqs: [
      {
        question: "Why is my garage floor sinking in the middle?",
        answer:
          "Garage floors often settle in the center because the soil beneath wasn't fully compacted during construction, and the weight of vehicles compresses the base over time. Water that enters through the garage door and pools in low spots accelerates the problem by eroding soil beneath the slab.",
      },
      {
        question: "Can you level a garage floor with items still inside?",
        answer:
          "We need clear access to the sunken areas for drilling and injection. You don't need to empty the entire garage — just move items away from the work zone. The contractor will let you know exactly how much space is needed during the estimate.",
      },
      {
        question: "How much does garage floor leveling cost?",
        answer:
          "Garage floor leveling in Omaha typically runs $800–$2,500 depending on garage size and the extent of settlement. A single-car garage with moderate sinking often costs $800–$1,500. Two-car garages with multiple low spots may run $1,500–$2,500. Full garage floor replacement typically costs $3,000–$6,000+.",
      },
      {
        question: "Will leveling fix water pooling on my garage floor?",
        answer:
          "Yes — restoring proper pitch toward the floor drain is a primary goal of garage floor leveling. Once the slab is level and sloped correctly, water drains as intended instead of pooling in low spots.",
      },
    ],
    schema: {
      name: "Garage Floor Leveling",
      description:
        "Garage floor leveling and sunken slab repair in Omaha, Nebraska. Lift settled garage floors without full replacement using mudjacking or foam jacking.",
    },
    priority: 0.8,
    sections: [
      {
        type: "bullet-list",
        title: "Common Causes of Garage Floor Settling",
        intro:
          "Garage floors bear more concentrated weight than almost any other residential slab — and they're often built on the least-prepared base on the property. Understanding why your floor sank helps the contractor choose the right lifting method and advise on preventing re-settlement.",
        items: [
          "Insufficient soil compaction during original construction",
          "Vehicle weight compressing the base over years of daily use",
          "Water entering through the garage door and eroding soil beneath the slab",
          "Plumbing leaks under the slab creating voids (foam jacking is ideal here)",
          "Freeze-thaw cycles affecting the garage apron where the slab meets the driveway",
        ],
      },
      {
        type: "prose",
        title: "Water Drainage Problems",
        className: "bg-neutral",
        paragraphs: [
          "A garage floor that's settled in the center or near the walls loses its designed pitch toward the floor drain. Instead of flowing to the drain, water pools in low spots — accelerating further settlement, promoting efflorescence and salt damage, and creating slippery conditions in winter. Leveling restores the original slope so water drains properly again.",
          "If your garage floor has both settlement and active drainage issues, the contractor will address the leveling first and advise on simple grading or downspout adjustments to protect the repair long-term.",
        ],
      },
      {
        type: "process",
        title: "The Garage Floor Leveling Process",
        steps: [
          {
            title: "Inspect settlement pattern",
            description:
              "The contractor identifies where the slab has dropped — common spots include the garage apron, center channels, and areas near the garage door where compaction is weakest.",
          },
          {
            title: "Check drainage and cracks",
            description:
              "Whether water pools toward the center drain or foundation walls is assessed, along with whether cracks indicate structural issues or simple settlement.",
          },
          {
            title: "Drill and lift",
            description:
              "Access holes are drilled and lifting material is injected beneath the sunken areas, raising the slab gradually while monitoring level.",
          },
          {
            title: "Restore pitch and finish",
            description:
              "Proper slope toward the floor drain is confirmed, holes are patched, and the area is cleaned up. Most garage floor jobs are done in 2–4 hours.",
          },
        ],
      },
      {
        type: "comparison",
        title: "Garage Floor Leveling vs. Replacement",
        className: "bg-neutral",
        intro:
          "Full garage floor replacement means jackhammering the existing slab, hauling away debris, re-compacting the base, forming, pouring, and waiting 7–14 days before driving on it. Total cost: $3,000–$6,000+ for a typical two-car garage. Leveling achieves the same functional result — a flat, properly pitched floor — in hours for $800–$2,500.",
        headers: ["", "Leveling", "Full Replacement"],
        rows: [
          ["Average cost", "$800–$2,500", "$3,000–$6,000+"],
          ["Time to complete", "2–4 hours", "3–7 days"],
          ["Can use garage same day", "Yes (foam) / Next day (mudjack)", "No — 7–14 days cure"],
          ["Demolition required", "None", "Full tear-out"],
          ["Disruption", "Minimal", "Major"],
        ],
      },
    ],
  },
];

export function getServicePath(slug: string): string {
  return `/services/${slug}`;
}

export function getServiceBySlug(slug: string): CoreService | undefined {
  return coreServices.find((service) => service.slug === slug);
}
