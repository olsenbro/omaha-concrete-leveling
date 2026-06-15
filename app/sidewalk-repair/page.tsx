import {
  ProcessSteps,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Mudjacking Omaha | Sidewalk Leveling & Trip Hazard Repair",
  description:
    "Uneven sidewalk in Omaha? Local contractors raise sunken concrete slabs and eliminate trip hazards fast. Avoid liability. City compliance. Free estimate — (402) 749-8050.",
  canonical: "/sidewalk-repair",
});

const sidewalkSteps = [
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
];

const sidewalkFaqs = [
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
];

export default function SidewalkRepairPage() {
  return (
    <ServicePageTemplate
      h1="Sidewalk Leveling & Trip Hazard Repair in Omaha"
      breadcrumbs={[
        { label: "Services", href: "/mudjacking" },
        { label: "Sidewalk Repair" },
      ]}
      serviceSlug="sidewalk-repair"
      intro={[
        "Uneven sidewalk panels are one of the most common — and most overlooked — concrete problems in Omaha. A single sunken slab creates a trip hazard that puts pedestrians at risk and exposes property owners to liability. The good news: most sidewalk trip hazards can be eliminated in hours with mudjacking or foam jacking, without breaking up and replacing the concrete.",
        "Whether the city flagged your sidewalk, a neighbor tripped on a raised edge, or you've noticed a panel sinking toward your front steps, local Omaha contractors can raise it back to grade quickly and affordably.",
      ]}
      schema={{
        name: "Sidewalk Leveling & Trip Hazard Repair",
        description:
          "Sidewalk leveling and trip hazard repair in Omaha, Nebraska. Raise sunken sidewalk panels to eliminate liability and meet municipal compliance standards.",
      }}
      faqs={sidewalkFaqs}
      faqTitle="Sidewalk Repair FAQ"
      ctaHeading="Ready to Get a Free Estimate?"
    >
      <ServiceSection title="Nebraska Property Owner Liability for Sidewalk Trip Hazards">
        <p>
          Nebraska law places responsibility for sidewalk maintenance on the adjacent property owner
          in most municipalities, including Omaha. If a pedestrian trips on an uneven sidewalk panel
          and suffers an injury, the property owner may be held liable — especially if the hazard
          was known, reported, or previously flagged by the city.
        </p>
        <p>
          Trip hazards are defined differently by each municipality, but a height differential of
          ¾ inch or more between adjacent panels is the most commonly cited threshold. Even smaller
          gaps can be dangerous for elderly residents, children, and delivery workers. Proactive
          leveling is far less expensive than a liability claim or emergency replacement.
        </p>
      </ServiceSection>

      <ServiceSection title="Omaha Sidewalk Compliance & City Inspections" className="bg-neutral">
        <p>
          The City of Omaha and surrounding communities — including Papillion, Bellevue, La Vista,
          and Ralston — conduct periodic sidewalk inspections, particularly in older neighborhoods
          and commercial districts. When a trip hazard is identified, property owners receive a
          notice requiring correction within a set period, typically 30 days.
        </p>
        <p>
          Local contractors work with Omaha homeowners who receive these notices regularly. The
          leveling process eliminates the trip edge without the cost and disruption of panel
          replacement. Most jobs are completed in 1–3 hours, well within municipal deadlines. If
          you&apos;ve received a city notice, call us — we can usually connect you with a pro
          within the same week.
        </p>
      </ServiceSection>

      <ServiceSection title="The Sidewalk Leveling Process">
        <ProcessSteps steps={sidewalkSteps} />
      </ServiceSection>

      <ServiceSection title="Sidewalk Leveling Cost in Omaha" className="bg-neutral">
        <p>
          Sidewalk leveling is one of the most affordable concrete repair services in the Omaha area.
          Single panel lifts typically run $300–$600. Walkway sections with two to four settled
          panels generally cost $600–$1,200. Compared to panel replacement — which may require
          permits, demolition, and 3–5 days of curing at $800–$2,000+ per panel — leveling saves
          significant time and money.
        </p>
        <p>
          When you request an estimate, your local pro will assess the location and approximate size
          of the sunken panel — and can often provide a ballpark quote over the phone.
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
