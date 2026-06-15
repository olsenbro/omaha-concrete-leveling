import {
  BulletList,
  ProcessSteps,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Mudjacking Omaha | Patio & Pool Deck Leveling",
  description:
    "Sunken patio or pool deck in Omaha? Mudjacking and foam jacking restore level surfaces without demolition. Fast, affordable. Free estimate.",
  canonical: "/patio-leveling",
});

const patioSteps = [
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
];

const patioFaqs = [
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
];

export default function PatioLevelingPage() {
  return (
    <ServicePageTemplate
      h1="Patio & Pool Deck Leveling in Omaha, Nebraska"
      breadcrumbs={[
        { label: "Services", href: "/mudjacking" },
        { label: "Patio Leveling" },
      ]}
      serviceSlug="patio-leveling"
      intro={[
        "A sunken patio or tilting pool deck doesn't just look bad — it creates drainage problems, trip hazards, and gaps that worsen every freeze-thaw cycle. Replacing a patio means days of demolition, forming, and curing, plus the cost of removing furniture, grills, and landscaping. Patio leveling restores a flat, safe surface in hours, without tearing out a single slab.",
        "Patio and pool deck leveling is available throughout Omaha and the greater metro area from local specialists in our network. Whether your patio has settled toward the house, your pool deck has developed trip edges, or individual slabs have separated at the joints, a local pro can lift them back to grade — usually the same week you call.",
      ]}
      schema={{
        name: "Patio & Pool Deck Leveling",
        description:
          "Patio and pool deck leveling in Omaha, Nebraska. Mudjacking and foam jacking to restore level outdoor surfaces without demolition.",
      }}
      faqs={patioFaqs}
      faqTitle="Patio Leveling FAQ"
      ctaHeading="Ready to Get a Free Estimate?"
    >
      <ServiceSection title="Why Patios and Pool Decks Sink in Omaha">
        <p>
          Omaha&apos;s expansive clay soil and aggressive freeze-thaw cycles make patios and pool
          decks especially vulnerable to settlement. Unlike driveways, patios often lack the compacted
          base that roadways receive — and water management around the slab is frequently overlooked
          during construction.
        </p>
        <BulletList
          items={[
            "Clay soil expansion and contraction creates voids beneath patio slabs",
            "Freeze-thaw cycles from November through March accelerate cracking and tilting",
            "Tree root growth and decay shifts soil under patio edges and corners",
            "Downspout runoff erodes soil on the house-side edge, tilting the slab inward",
            "Pool deck settlement from plumbing leaks or improper backfill during construction",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Safety & Drainage — Why Leveling Matters" className="bg-neutral">
        <p>
          A patio that tilts toward your house is more than a cosmetic issue. Water that pools
          against the foundation seeps into basement walls, contributes to foundation cracks, and
          promotes mold in crawl spaces. In Omaha&apos;s clay soil, even small amounts of repeated
          water exposure at the foundation line can cause significant structural problems over time.
        </p>
        <p>
          Trip edges between settled pool deck sections are a liability risk — especially for
          children and elderly guests. Leveling eliminates these hazards and restores a continuous,
          safe walking surface around your pool and outdoor living area.
        </p>
      </ServiceSection>

      <ServiceSection title="The Patio Leveling Process">
        <ProcessSteps steps={patioSteps} />
      </ServiceSection>

      <ServiceSection title="Patio Leveling Cost in Omaha" className="bg-neutral">
        <p>
          Patio and pool deck leveling in Omaha typically costs $600–$2,000 for residential projects.
          Small patios under 200 square feet often fall in the $600–$1,000 range. Larger multi-section
          patios or pool decks with significant settlement may run $1,200–$2,000. Full patio
          replacement — including demolition, base prep, and new concrete — typically runs
          $3,000–$8,000+ and takes a week or more.
        </p>
        <p>
          Pricing varies by contractor — request a free estimate to get an accurate quote for your
          project. You&apos;ll receive a written quote before any work begins, with no pressure and
          no obligation.
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
