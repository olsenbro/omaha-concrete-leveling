export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "about",
    title: "About Concrete Leveling & Mudjacking",
    items: [
      {
        question: "What is mudjacking and how does it work?",
        answer:
          "Mudjacking is a concrete lifting technique where a slurry of soil, water, and Portland cement is pumped through small holes drilled in a sunken slab. The mixture fills voids beneath the concrete and builds hydraulic pressure that gradually raises the slab back to its original grade. Once the slab is level, the access holes are patched with cement. The whole process typically takes 2–4 hours for a residential job, and you can walk on the surface within 24 hours.",
      },
      {
        question: "What is foam jacking (PolyJacking)?",
        answer:
          "Foam jacking — also called polyjacking or polyurethane concrete lifting — injects a high-density expanding foam through dime-sized holes drilled in the slab. The foam expands to fill voids and lifts the concrete with precision, curing in about 15 minutes. It's waterproof, adds virtually no weight to the soil below, and is ideal for projects where fast return to service or minimal hole visibility matters. Local contractors use commercial-grade polyurethane systems rated for Nebraska's climate.",
      },
      {
        question: "What's the difference between mudjacking and foam jacking?",
        answer:
          "Both methods lift sunken concrete without replacement — the difference is the material and speed. Mudjacking uses a heavier soil-cement slurry through 1.5–2 inch holes and cures in about 24 hours. Foam jacking uses lightweight expanding polyurethane through smaller holes and cures in 15 minutes. Mudjacking is typically more affordable for large slabs; foam jacking costs a bit more but offers waterproof performance and faster turnaround. Your contractor will recommend the right method during your free estimate.",
      },
      {
        question: "Can concrete leveling fix all sunken slabs?",
        answer:
          "Leveling works best on structurally sound slabs that have settled due to soil movement — not on concrete that's crumbling, shattered, or severely heaved. If your slab is intact but uneven, with visible sinking but no major structural damage, leveling is almost always the right call. Concrete broken into many pieces, actively deteriorating, or heaved more than a few inches by tree roots usually needs replacement instead. A reputable contractor will give you an honest assessment during the estimate — they won't sell you leveling if replacement is the better option.",
      },
      {
        question: "Is concrete leveling a permanent solution?",
        answer:
          "Mudjacking and foam jacking are long-lasting repairs, not temporary patches. Properly done mudjacking typically lasts 8–10 years or more; foam jacking often lasts longer due to its water resistance. Most local contractors back qualifying work with a 5-year warranty. Longevity depends on addressing the underlying cause — if poor drainage or erosion continues unchecked, the same slab may settle again over time. Your contractor will flag drainage issues during the estimate and recommend fixes that extend the life of the repair.",
      },
      {
        question: "Does leveled concrete look the same as before?",
        answer:
          "In most cases, yes — from a normal viewing distance, a leveled slab looks essentially the same as it did when it was originally poured, just flat and even again. The access holes used for injection will be patched and are visible on close inspection, but they blend well and weather over time. Existing surface cracks may remain visible, though they won't worsen once the slab is properly supported underneath. Most homeowners are surprised by how natural the finished result looks.",
      },
    ],
  },
  {
    id: "cost",
    title: "Cost & Pricing",
    items: [
      {
        question: "How much does mudjacking cost in Omaha?",
        answer:
          "Most residential mudjacking jobs in the Omaha area typically range from $600 to $2,500 depending on the number of slabs, their size, and how far they've settled. Smaller jobs — a single sidewalk panel or one driveway section — often cost $400–$800. Larger driveways with multiple settled panels typically run $1,500–$2,500. That's generally 50–70% less than full tear-out and repour, which commonly runs $4,000–$12,000+ for the same project.",
      },
      {
        question: "How much does foam jacking cost?",
        answer:
          "Foam jacking in Omaha typically runs $800 to $3,000 for residential projects — roughly 15–30% more than mudjacking for comparable work. Small patio or sidewalk panels often fall in the $800–$1,200 range, while larger driveways or multi-slab jobs may reach $2,000–$3,000. The premium reflects faster cure times, smaller access holes, and waterproof performance. Even at the higher end, foam jacking remains far less expensive than full replacement.",
      },
      {
        question: "Is concrete leveling worth it vs. full replacement?",
        answer:
          "For structurally sound slabs that have simply settled, leveling is almost always the smarter investment. You get a level surface in hours instead of days, with minimal mess and no demolition debris. Replacement makes sense when the slab is crumbling, broken into many pieces, or heaved beyond what lifting can correct. For a typical two-car driveway, leveling costs $1,000–$2,000 vs. $6,000–$10,000+ for replacement — and you can use your driveway the same day with foam jacking.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes — every project starts with a free, no-obligation on-site estimate. A local contractor visits your property, measures settling depth, assesses slab condition, and provides a written quote before any work begins. There's no pressure and no hidden fees. If leveling isn't the right solution for your slab, a reputable contractor will tell you honestly and explain why replacement might be the better option.",
      },
      {
        question: "Does insurance cover mudjacking or concrete leveling?",
        answer:
          "Homeowners insurance rarely covers mudjacking or concrete leveling because normal soil settlement is considered wear and tear, not a sudden covered event. There are exceptions — if settling was caused by a burst pipe, a covered water event, or similar sudden damage, your policy may apply. Check with your insurance agent about your specific situation. Your contractor can provide documentation of the work if a claim is involved.",
      },
      {
        question: "Are there discounts for multiple slabs?",
        answer:
          "Yes — many local contractors offer pricing breaks for larger jobs where multiple slabs are leveled in a single visit. More panels in one trip reduces setup and mobilization costs. If you have a driveway, sidewalk, and patio that all need attention, bundling them into one appointment is the most cost-effective approach. Ask about multi-slab pricing when you request your estimate.",
      },
    ],
  },
  {
    id: "process",
    title: "The Process & Timing",
    items: [
      {
        question: "How long does concrete leveling take?",
        answer:
          "Most residential concrete leveling jobs are completed in 2–4 hours from start to finish. A single sidewalk panel might take 45 minutes; a full driveway with three or four settled sections typically takes 2–3 hours. Most local contractors in the Omaha area schedule within the same week you call. Larger commercial projects may take a full day, but residential work is almost always done in a single visit.",
      },
      {
        question: "How soon can I walk or drive on leveled concrete?",
        answer:
          "It depends on the method. With foam jacking, the polyurethane cures in approximately 15 minutes — you can walk on it immediately and drive on it the same day. With mudjacking, contractors recommend waiting 24 hours before walking on the surface and 24–48 hours before driving vehicles on it. Your contractor will give you specific guidance based on your project before leaving the job site.",
      },
      {
        question: "How many holes do you drill, and how big are they?",
        answer:
          "For mudjacking, contractors typically drill 1.5–2 inch holes spaced every 4–6 feet across the sunken area — a standard driveway panel might need 4–8 holes. For foam jacking, holes are about ⅝ inch (dime-sized) and spaced similarly. The number depends on slab size, thickness, and how much lift is needed. Holes are placed strategically to achieve even lifting while minimizing visibility of the patches.",
      },
      {
        question: "Will the patch holes be noticeable?",
        answer:
          "Patch holes will be visible on close inspection but blend well from a normal viewing distance. Mudjacking patches are slightly larger and more visible than foam jacking patches due to the bigger hole size. Over time, weathering helps patches fade and blend with the surrounding concrete. Most homeowners find the patches far less noticeable than the sunken, uneven slab they replaced.",
      },
      {
        question: "Can you work in cold weather?",
        answer:
          "Mudjacking and foam jacking can be performed when temperatures are above 35°F, which covers most of the Nebraska work season from early spring through late fall. Nebraska's freeze-thaw cycles actually accelerate concrete settling, so late fall and early spring are popular times to address sinking slabs before winter makes the problem worse. Your contractor will advise on timing if weather conditions might affect cure time or material performance.",
      },
      {
        question: "Do I need to be home during the work?",
        answer:
          "You don't need to be home the entire time, but the contractor does need access to the work area and a brief walkthrough before starting. They'll confirm the scope, discuss any drainage concerns, and review the plan with you. Most homeowners leave once work has started and return to a level slab a few hours later. The contractor will call you when the job is complete and walk you through the result if you're available.",
      },
    ],
  },
  {
    id: "nebraska",
    title: "Nebraska-Specific",
    items: [
      {
        question: "Why does concrete settle so much in Omaha?",
        answer:
          "Omaha sits on expansive clay soil that shrinks during dry periods and swells when saturated — creating constant movement beneath concrete slabs. Many homes were built on fill soil that wasn't compacted to modern standards, leading to gradual settlement over the first decade after construction. Add Nebraska's aggressive freeze-thaw cycles, and you have conditions that cause concrete to sink faster here than in many other parts of the country. It's a common problem, not a sign of poor construction.",
      },
      {
        question: "Does the freeze-thaw cycle cause concrete to sink?",
        answer:
          "Freeze-thaw cycles contribute to settling indirectly. When water in the soil freezes, it expands and can create voids as it thaws and drains away. Repeated cycles from November through March erode soil beneath slabs and widen gaps at control joints. The slab itself doesn't freeze and sink — the soil below it does. This is why settlement often worsens noticeably after a hard winter and why spring is one of the busiest seasons for concrete leveling in Omaha.",
      },
      {
        question: "Can tree roots cause concrete to sink or does it cause heaving?",
        answer:
          "Tree roots cause both, depending on the situation. Large roots growing beneath a slab can lift one edge while the other settles — creating a trip hazard with a raised and lowered side simultaneously. Roots that decay after a tree is removed leave voids that cause the slab above to sink. Roots growing along the edge of a driveway can push slabs upward (heaving) or undermine adjacent panels (settling). Leveling addresses settlement; severe heaving from large roots may require slab replacement.",
      },
      {
        question: "Are homeowners liable for uneven sidewalks in Omaha?",
        answer:
          "Yes — in most Nebraska municipalities, including Omaha, property owners are responsible for maintaining sidewalks adjacent to their property. If a pedestrian trips on an uneven panel and is injured, the property owner may face liability, especially if the hazard was known or previously flagged. The City of Omaha and surrounding communities periodically inspect sidewalks and issue correction notices. Leveling a sunken panel takes hours and costs a fraction of replacement — and it eliminates the liability exposure.",
      },
      {
        question: "What areas of Omaha do you serve?",
        answer:
          "Our referral network covers the entire greater Omaha metro, including Douglas County, Sarpy County, and across the Missouri River into Council Bluffs, Iowa. That covers Omaha, Bellevue, Papillion, La Vista, Ralston, Millard, Elkhorn, Gretna, Bennington, Chalco, Carter Lake, and Council Bluffs. Most local contractors schedule within the same week throughout the metro. Visit our Areas Served page for city-specific details, or call us — we'll confirm coverage for your address right away.",
      },
    ],
  },
];

/** Flat list of all FAQ items for schema generation */
export const allFaqItems: FaqItem[] = faqCategories.flatMap((cat) => cat.items);

export function buildFaqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export const fullFaqPageSchema = buildFaqPageSchema(allFaqItems);
