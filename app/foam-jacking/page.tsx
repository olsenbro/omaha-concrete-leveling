import {
  BulletList,
  ServiceComparisonTable,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Mudjacking Omaha | Foam Jacking & PolyJacking",
  description:
    "PolyJacking in Omaha — lightweight expanding foam lifts sunken concrete in minutes. Cures in 15 min, waterproof, and precise. Call for a free estimate.",
  canonical: "/foam-jacking",
});

const foamFaqs = [
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
];

export default function FoamJackingPage() {
  return (
    <ServicePageTemplate
      h1="Foam Jacking (PolyJacking) in Omaha, Nebraska"
      breadcrumbs={[
        { label: "Services", href: "/mudjacking" },
        { label: "Foam/PolyJacking" },
      ]}
      serviceSlug="foam-jacking"
      intro={[
        "Foam jacking — also called polyjacking or polyurethane concrete lifting — is the modern alternative to traditional mudjacking. Instead of pumping a heavy soil-cement slurry, technicians drill golf-ball-sized access holes and inject high-density expanding polyurethane foam beneath the sunken slab. The foam expands to fill voids, exerting upward pressure that lifts the concrete back to grade in minutes.",
        "Once injected, the foam cures in approximately 15 minutes. It's waterproof, won't erode with groundwater, and adds virtually no weight to the soil below — making it an excellent choice for precision leveling, areas near plumbing or utilities, and projects where same-day return to service matters.",
      ]}
      schema={{
        name: "Foam Jacking (PolyJacking)",
        description:
          "Polyurethane foam injection concrete lifting in Omaha, Nebraska. Fast-curing, waterproof slab leveling for driveways, patios, pool decks, and commercial applications.",
      }}
      faqs={foamFaqs}
      faqTitle="Foam Jacking FAQ"
      ctaHeading="Ready to Get a Free Estimate?"
    >
      <ServiceSection title="Foam Jacking vs. Mudjacking — Which Is Right for You?">
        <p>
          Both methods lift sunken concrete without replacement — the difference is in the material,
          speed, and precision. Mudjacking uses a heavier soil-cement slurry and is typically the
          most budget-friendly option for large residential slabs. Foam jacking uses lightweight
          polyurethane that cures in minutes, creates smaller holes, and offers waterproof
          performance — ideal when precision, aesthetics, or fast turnaround are priorities.
        </p>
        <p>
          During your free estimate, we&apos;ll assess your specific situation and recommend the
          method that delivers the best long-term result for your property and budget. Many Omaha
          homeowners choose foam jacking for pool decks and garage floors, and mudjacking for large
          driveways where cost savings matter most.
        </p>
        <ServiceComparisonTable
          headers={["", "Mudjacking", "Foam Jacking"]}
          rows={[
            ["Material", "Soil-cement slurry", "Expanding polyurethane foam"],
            ["Hole size", "1.5–2 inches", "~⅝ inch (dime-sized)"],
            ["Cure time", "24 hours", "15 minutes"],
            ["Weight added", "Heavy", "Nearly weightless"],
            ["Waterproof", "No", "Yes"],
            ["Best for", "Large slabs, budget projects", "Precision, plumbing-sensitive areas"],
            ["Average cost", "$600–$2,500", "$800–$3,000"],
          ]}
        />
      </ServiceSection>

      <ServiceSection title="When We Recommend Foam Jacking" className="bg-neutral">
        <p>
          Foam jacking isn&apos;t always necessary — but in these situations, it&apos;s often the
          clear winner over traditional mudjacking or full replacement:
        </p>
        <BulletList
          items={[
            "Areas near plumbing or utilities where less invasive drilling is important",
            "Precision leveling required — uneven slabs with multiple elevation changes",
            "Project needs same-day return to service (driveways, commercial entrances)",
            "Waterproofing is important — pool decks, basement slabs, areas with poor drainage",
            "Smaller access holes desired for aesthetics on visible patio or walkway surfaces",
          ]}
        />
        <p className="mt-4">
          Our Omaha crew uses commercial-grade polyurethane systems rated for Nebraska&apos;s
          freeze-thaw cycles. Every foam jacking job includes a written estimate, a 5-year warranty,
          and a post-job walkthrough so you know exactly what to expect.
        </p>
      </ServiceSection>

      <ServiceSection title="Foam Jacking Cost in Omaha">
        <p>
          Foam jacking in the Omaha metro typically runs $800 to $3,000 for residential projects,
          depending on slab size, lift depth, and access. Small patio or sidewalk panels often fall
          in the $800–$1,200 range, while larger driveways or multi-slab jobs may reach $2,000–$3,000.
          Even at the higher end, foam jacking remains 50–70% less expensive than full concrete
          replacement — and you&apos;re back on your slab the same day.
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
