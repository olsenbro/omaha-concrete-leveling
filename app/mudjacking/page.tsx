import {
  BulletList,
  ProcessSteps,
  ServiceComparisonTable,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Mudjacking Omaha NE | Concrete Lifting & Leveling Experts",
  description:
    "Professional mudjacking in Omaha. Local contractors pump slurry beneath sunken slabs to lift driveways, sidewalks, and patios. Costs 50–70% less than replacement. Free estimates.",
  canonical: "/mudjacking",
});

const mudjackingSteps = [
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
];

const mudjackingFaqs = [
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
];

export default function MudjackingPage() {
  return (
    <ServicePageTemplate
      h1="Mudjacking in Omaha, Nebraska"
      breadcrumbs={[
        { label: "Services", href: "/mudjacking" },
        { label: "Mudjacking" },
      ]}
      serviceSlug="mudjacking"
      intro={[
        "Mudjacking is a proven concrete lifting technique that restores sunken slabs without tear-out or replacement. A slurry of soil, water, and Portland cement is pumped through small holes drilled in the sunken concrete slab. As the mixture fills the void beneath, hydraulic pressure lifts the slab back to its original grade. Once the slab is level, the access holes are patched and the job is complete.",
        "As the original concrete leveling method — used successfully for more than 80 years — mudjacking remains the go-to solution for larger residential slabs in Omaha. It's cost-effective, minimally invasive, and ideal for driveways, sidewalks, patios, and garage floors where substantial lifting is needed and budget matters.",
      ]}
      schema={{
        name: "Mudjacking",
        description:
          "Professional mudjacking services in Omaha, Nebraska. Soil-cement slurry pumped beneath sunken slabs to lift driveways, sidewalks, patios, and garage floors.",
      }}
      faqs={mudjackingFaqs}
      faqTitle="Mudjacking FAQ"
      ctaHeading="Ready to Get a Free Estimate?"
    >
      <ServiceSection title="What Can Be Mudjacked?">
        <p>
          Nearly any structurally sound concrete slab that has settled due to soil movement can be
          mudjacked. If your concrete is intact but uneven, mudjacking is almost always worth
          exploring before committing to a full replacement.
        </p>
        <BulletList
          items={[
            "Driveways",
            "Garage aprons",
            "Sidewalks and walkways",
            "Patio slabs",
            "Pool decks",
            "Steps and stoops",
            "Basement floors",
            "Commercial slabs",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="The Mudjacking Process — Step by Step" className="bg-neutral">
        <ProcessSteps steps={mudjackingSteps} />
      </ServiceSection>

      <ServiceSection title="Mudjacking Cost in Omaha">
        <p>
          Typical mudjacking costs in the Omaha area range from $600 to $2,500 for residential
          projects. Smaller jobs (one or two panels) often run $400–$800. Larger driveways with
          multiple settled slabs may run $1,500–$2,500. This compares favorably to full
          replacement, which typically runs $4,000–$12,000+ depending on size. When you request an
          estimate, your local pro will provide a written quote before any work begins.
        </p>
        <ServiceComparisonTable
          headers={["Solution", "Average Cost", "Time to Complete", "Mess Level"]}
          rows={[
            ["Mudjacking", "$600–$2,500", "2–4 hours", "Minimal"],
            ["PolyJacking", "$800–$3,000", "1–3 hours", "Minimal"],
            ["Full Replacement", "$4,000–$12,000+", "3–7 days", "Major"],
          ]}
        />
      </ServiceSection>
    </ServicePageTemplate>
  );
}
