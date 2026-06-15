import Script from "next/script";
import {
  ProcessSteps,
  ServiceComparisonTable,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/seo";
import { howToSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Mudjacking Omaha Cost Guide | 2025 Concrete Leveling Prices",
  description:
    "How much does concrete leveling cost in Omaha? Mudjacking runs $600–$2,500. Foam jacking $800–$3,000. Full guide with cost factors, comparisons, and free estimate.",
  canonical: "/concrete-leveling-cost",
});

const howToSteps = [
  { name: "Request a free estimate", text: "Call or contact us online for a no-obligation estimate." },
  { name: "On-site assessment", text: "A local contractor visits and assesses the slab, void, and settling depth." },
  { name: "Receive written quote", text: "Your pro provides a written, itemized quote before work begins." },
  { name: "Schedule and complete work", text: "Most jobs are completed within the same week, in 2–4 hours." },
];

const costFactors = [
  {
    title: "Number of slabs and total square footage",
    description:
      "More panels means more drilling, more material, and more labor. A single sidewalk panel costs far less than a full driveway with six settled sections.",
  },
  {
    title: "Severity of settling",
    description:
      "A 1-inch drop requires less lifting material than a 4-inch drop. Severe settlement may also require additional injection points and more time on site.",
  },
  {
    title: "Access difficulty",
    description:
      "Tight corners, landscaping, retaining walls, and fences can limit equipment placement and increase labor time — especially on backyard patios and side-yard walkways.",
  },
  {
    title: "Mudjacking vs. foam jacking material",
    description:
      "Mudjacking uses an affordable soil-cement slurry. Foam jacking uses polyurethane that costs more per volume but cures faster and is waterproof — a trade-off worth considering for pool decks and garage floors.",
  },
  {
    title: "Additional drainage work recommended",
    description:
      "If poor drainage caused the settlement, a contractor may recommend downspout extensions or grading adjustments alongside leveling. This adds modest cost upfront but extends the life of the repair significantly.",
  },
];

const quoteSteps = [
  {
    title: "Request a free estimate",
    description:
      "Call (402) 749-8050 or fill out our online contact form. Describe the sunken area and we'll connect you with a local pro for an on-site visit — usually within the same week.",
  },
  {
    title: "Inspector assesses your slab",
    description:
      "The contractor measures settling depth, evaluates slab thickness, estimates void size beneath the concrete, and identifies the likely cause of settlement.",
  },
  {
    title: "Receive a written quote",
    description:
      "You get a clear, itemized quote before any work begins. No obligation, no pressure — and an honest recommendation if leveling isn't the right solution.",
  },
];

const costFaqs = [
  {
    question: "Is concrete leveling cheaper than replacement in Omaha?",
    answer:
      "Yes, in almost every case. Concrete leveling typically runs 50–70% less than full tear-out and repour. For a standard two-car driveway, you might pay $1,000–$2,000 for leveling vs. $6,000–$10,000 for replacement.",
  },
  {
    question: "Does insurance cover mudjacking?",
    answer:
      "Homeowners insurance rarely covers mudjacking unless the settling was caused by a sudden covered event (like a burst pipe). Normal soil settlement is considered wear and tear. Check your policy.",
  },
  {
    question: "Are there any situations where leveling won't work?",
    answer:
      "Yes. Concrete that is severely cracked, crumbling, or heaved by tree roots usually needs replacement. A reputable contractor will give you an honest assessment — they won't sell you leveling if your slab needs replacement.",
  },
  {
    question: "How long will the repair last?",
    answer:
      "Most mudjacking repairs last 8–10 years. Foam jacking often lasts longer due to its water-resistance. Proper drainage maintenance extends both.",
  },
  {
    question: "Can I get multiple slabs done for a discount?",
    answer:
      "Yes — many local contractors offer pricing breaks for larger jobs. More slabs in a single visit reduces the per-slab cost.",
  },
];

export default function ConcreteLevelingCostPage() {
  return (
    <>
      <Script
        id="howto-concrete-leveling"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: howToSchema("How to Get Concrete Leveling in Omaha", howToSteps),
        }}
      />

      <ServicePageTemplate
        h1="How Much Does Concrete Leveling Cost in Omaha? (2025 Guide)"
        breadcrumbs={[{ label: "Cost Guide" }]}
        intro={[
          "If you've got a sunken driveway, uneven patio, or a sidewalk panel that's become a trip hazard, you're probably wondering what it costs to fix — and whether it's worth it vs. just replacing the concrete. Good news: concrete leveling (whether mudjacking or foam jacking) almost always costs a fraction of full replacement.",
          "Here's an honest breakdown of what you'll pay in the Omaha area in 2025 — including mudjacking and foam jacking price ranges by project type, the factors that affect your quote, and how leveling compares to tear-out and repour.",
        ]}
        faqs={costFaqs}
        faqTitle="Concrete Leveling Cost FAQ"
        ctaHeading="Get Your Free Omaha Mudjacking Estimate"
        ctaBody="Connect with a local Omaha concrete leveling specialist who will assess your project and provide an honest, no-obligation quote."
      >
        <ServiceSection title="Concrete Leveling Cost Summary — Omaha, NE">
          <div className="mb-6 rounded-lg border-l-4 border-accent bg-[#FFF8F0] p-4">
            <p className="font-semibold text-dark">📋 About These Estimates</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              The price ranges on this page reflect typical costs from local Omaha-area concrete
              leveling contractors based on publicly available market data. Actual pricing varies by
              contractor, project size, and site conditions. We recommend requesting at least one
              free estimate to get accurate pricing for your specific project.
            </p>
          </div>
          <p>
            These ranges reflect typical 2025 pricing for residential projects in Douglas County,
            Sarpy County, and the greater Omaha metro. Your exact quote depends on slab count, lift
            depth, and access — but this table gives you a realistic starting point.
          </p>
          <ServiceComparisonTable
            headers={["Project Type", "Mudjacking Cost", "Foam Jacking Cost"]}
            rows={[
              ["Single sidewalk panel", "$200–$400", "$300–$500"],
              ["Driveway (2-car, partial settling)", "$800–$1,500", "$1,000–$2,000"],
              ["Driveway (full resettlement)", "$1,500–$2,500", "$2,000–$3,000"],
              ["Patio (small, 1–2 slabs)", "$400–$800", "$500–$1,000"],
              ["Patio (large, 4–6 slabs)", "$1,000–$2,000", "$1,500–$2,500"],
              ["Garage floor (full)", "$800–$2,000", "$1,200–$2,500"],
              ["Pool deck", "$1,000–$2,500", "$1,500–$3,000"],
            ]}
          />
        </ServiceSection>

        <ServiceSection title="What Affects the Cost of Mudjacking in Omaha?" className="bg-neutral">
          <ProcessSteps steps={costFactors} />
        </ServiceSection>

        <ServiceSection title="Concrete Leveling vs. Replacement — True Cost Comparison">
          <p>
            The sticker price of replacement hides days of demolition mess, lost garage or driveway
            access, and a full week of curing before you can use the surface again. Leveling gets
            you a level slab in hours — with minimal disruption and a warranty that covers the work.
          </p>
          <ServiceComparisonTable
            headers={["", "Leveling", "Full Replacement"]}
            rows={[
              ["Average cost", "$600–$2,500", "$4,000–$12,000+"],
              ["Time to complete", "2–4 hours", "3–7 days"],
              ["Curing time", "15 min – 24 hrs", "5–7 days"],
              ["Concrete removal", "Not required", "Required"],
              ["Mess", "Minimal", "Major"],
              ["Warranty", "5 years typical", "Depends on contractor"],
            ]}
          />
          <p className="mt-6 font-medium text-dark">
            Our recommendation: if your slab is structurally sound — no major crumbling, no severe
            root heave, and the concrete is intact but uneven — leveling is almost always the
            smarter investment. Choose replacement when the slab is broken into multiple pieces,
            actively deteriorating, or heaved beyond what lifting can correct. A reputable contractor
            will tell you honestly which category yours falls into during the free estimate.
          </p>
        </ServiceSection>

        <ServiceSection title="Is Concrete Leveling Worth It in Nebraska?" className="bg-neutral">
          <p>
            Nebraska&apos;s climate is hard on concrete. Freeze-thaw cycles from late fall through
            early spring cause soil to expand and contract repeatedly, creating voids beneath slabs
            that lead to settling year after year. Omaha&apos;s expansive clay soil compounds the
            problem — shrinking in drought, swelling when saturated, and shifting constantly
            underneath your driveway, patio, and sidewalk.
          </p>
          <p>
            Leveling is worth it when the underlying slab is sound and the settlement is due to
            normal soil movement. However, if poor drainage, downspout runoff, or erosion continues
            unchecked, the same slab may settle again over time. That&apos;s why reputable contractors
            assess the cause during every estimate — not just the symptom.
          </p>
          <p>
            Addressing root causes like rerouting downspouts away from the foundation, improving
            grading, or fixing gutter overflow extends the life of any leveling repair by years. A
            $200 drainage fix can protect a $1,500 mudjacking job — and your contractor will flag
            those opportunities during the on-site assessment.
          </p>
        </ServiceSection>

        <ServiceSection title="How to Get an Accurate Quote in Omaha">
          <ProcessSteps steps={quoteSteps} />
        </ServiceSection>
      </ServicePageTemplate>
    </>
  );
}
