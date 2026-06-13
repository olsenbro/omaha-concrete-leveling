import {
  BulletList,
  ProcessSteps,
  ServiceComparisonTable,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Garage Floor Leveling Omaha NE | Sunken Slab Repair",
  description:
    "Sunken or uneven garage floor in Omaha? We lift and level settled garage slabs without full replacement. Call for a free estimate — (402) 555-0190.",
  canonical: "/garage-floor-leveling",
});

const garageSteps = [
  {
    title: "Inspect settlement pattern",
    description:
      "We identify where the slab has dropped — common spots include the garage apron, center channels, and areas near the garage door where compaction is weakest.",
  },
  {
    title: "Check drainage and cracks",
    description:
      "We assess whether water pools toward the center drain or foundation walls, and whether cracks indicate structural issues or simple settlement.",
  },
  {
    title: "Drill and lift",
    description:
      "Access holes are drilled and lifting material is injected beneath the sunken areas, raising the slab gradually while monitoring level.",
  },
  {
    title: "Restore pitch and finish",
    description:
      "We confirm proper slope toward the floor drain, patch holes, and clean up. Most garage floor jobs are done in 2–4 hours.",
  },
];

const garageFaqs = [
  {
    question: "Why is my garage floor sinking in the middle?",
    answer:
      "Garage floors often settle in the center because the soil beneath wasn't fully compacted during construction, and the weight of vehicles compresses the base over time. Water that enters through the garage door and pools in low spots accelerates the problem by eroding soil beneath the slab.",
  },
  {
    question: "Can you level a garage floor with items still inside?",
    answer:
      "We need clear access to the sunken areas for drilling and injection. You don't need to empty the entire garage — just move items away from the work zone. We'll let you know exactly how much space we need during the estimate.",
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
];

export default function GarageFloorLevelingPage() {
  return (
    <ServicePageTemplate
      h1="Garage Floor Leveling in Omaha, Nebraska"
      breadcrumbs={[
        { label: "Services", href: "/mudjacking" },
        { label: "Garage Floor Leveling" },
      ]}
      serviceSlug="garage-floor-leveling"
      intro={[
        "A sunken or uneven garage floor is one of the most frustrating concrete problems Omaha homeowners deal with — and one of the most unnecessary to replace. Low spots pool water every time it rains, cracks widen at the garage apron, and the floor feels like it's tilting every time you pull in. Garage floor leveling lifts the settled slab back to grade without demolition, without weeks of curing, and at a fraction of replacement cost.",
        "Our crew levels single-car, two-car, and oversized garage floors throughout the Omaha metro using mudjacking and foam jacking. Most jobs are completed in a single morning, and you can park in your garage the same day.",
      ]}
      schema={{
        name: "Garage Floor Leveling",
        description:
          "Garage floor leveling and sunken slab repair in Omaha, Nebraska. Lift settled garage floors without full replacement using mudjacking or foam jacking.",
      }}
      faqs={garageFaqs}
      faqTitle="Garage Floor Leveling FAQ"
      ctaHeading="Ready to Get a Free Estimate?"
    >
      <ServiceSection title="Common Causes of Garage Floor Settling">
        <p>
          Garage floors bear more concentrated weight than almost any other residential slab — and
          they&apos;re often built on the least-prepared base on the property. Understanding why
          your floor sank helps us choose the right lifting method and advise on preventing
          re-settlement.
        </p>
        <BulletList
          items={[
            "Insufficient soil compaction during original construction",
            "Vehicle weight compressing the base over years of daily use",
            "Water entering through the garage door and eroding soil beneath the slab",
            "Plumbing leaks under the slab creating voids (foam jacking is ideal here)",
            "Freeze-thaw cycles affecting the garage apron where the slab meets the driveway",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Water Drainage Problems" className="bg-neutral">
        <p>
          A garage floor that&apos;s settled in the center or near the walls loses its designed
          pitch toward the floor drain. Instead of flowing to the drain, water pools in low spots —
          accelerating further settlement, promoting efflorescence and salt damage, and creating
          slippery conditions in winter. Leveling restores the original slope so water drains
          properly again.
        </p>
        <p>
          If your garage floor has both settlement and active drainage issues, we&apos;ll address
          the leveling first and advise on simple grading or downspout adjustments to protect the
          repair long-term.
        </p>
      </ServiceSection>

      <ServiceSection title="The Garage Floor Leveling Process">
        <ProcessSteps steps={garageSteps} />
      </ServiceSection>

      <ServiceSection title="Garage Floor Leveling vs. Replacement" className="bg-neutral">
        <p>
          Full garage floor replacement means jackhammering the existing slab, hauling away debris,
          re-compacting the base, forming, pouring, and waiting 7–14 days before driving on it.
          Total cost: $3,000–$6,000+ for a typical two-car garage. Leveling achieves the same
          functional result — a flat, properly pitched floor — in hours for $800–$2,500.
        </p>
        <ServiceComparisonTable
          headers={["", "Leveling", "Full Replacement"]}
          rows={[
            ["Average cost", "$800–$2,500", "$3,000–$6,000+"],
            ["Time to complete", "2–4 hours", "3–7 days"],
            ["Can use garage same day", "Yes (foam) / Next day (mudjack)", "No — 7–14 days cure"],
            ["Demolition required", "None", "Full tear-out"],
            ["Disruption", "Minimal", "Major"],
          ]}
        />
      </ServiceSection>
    </ServicePageTemplate>
  );
}
