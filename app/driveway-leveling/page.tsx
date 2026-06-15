import {
  BulletList,
  ProcessSteps,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Mudjacking Omaha | Driveway Leveling Without Replacement",
  description:
    "Sunken driveway in Omaha? Local specialists lift and level settled driveway slabs in hours — no tear-out, no mess. Save thousands vs. replacement. Free estimate.",
  canonical: "/driveway-leveling",
});

const drivewaySteps = [
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
];

const drivewayFaqs = [
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
];

export default function DrivewayLevelingPage() {
  return (
    <ServicePageTemplate
      h1="Driveway Leveling in Omaha — Lift, Don't Replace"
      breadcrumbs={[
        { label: "Services", href: "/mudjacking" },
        { label: "Driveway Leveling" },
      ]}
      serviceSlug="driveway-leveling"
      intro={[
        "A sunken driveway isn't just annoying — it scrapes your car, pools water toward your garage, and gets worse every Nebraska winter. Most Omaha homeowners assume a settled driveway means a $6,000–$10,000 tear-out and repour. In most cases, it doesn't. Driveway leveling lifts settled panels back to grade in a single visit, without demolition, without days of curing, and at a fraction of the cost.",
        "Whether your driveway has dropped at the garage apron, developed a trip edge at the sidewalk, or sagged in the middle from soil settlement, local mudjacking and foam jacking specialists can restore a level, safe surface — usually the same week you call.",
      ]}
      schema={{
        name: "Driveway Leveling",
        description:
          "Driveway leveling and sunken slab repair in Omaha, Nebraska. Lift settled driveway panels without full replacement using mudjacking or foam jacking.",
      }}
      faqs={drivewayFaqs}
      faqTitle="Driveway Leveling FAQ"
      ctaHeading="Ready to Get a Free Estimate?"
    >
      <ServiceSection title="Why Driveways Sink in Nebraska">
        <p>
          Omaha sits on expansive clay soil that shrinks in drought and swells when saturated. Combined
          with harsh freeze-thaw cycles from November through March, this creates constant movement
          beneath your driveway&apos;s base. Over time, voids form under the slab and gravity does the
          rest.
        </p>
        <BulletList
          items={[
            "Freeze-thaw cycles heave and settle soil beneath the slab each winter",
            "Expansive clay soil in Douglas and Sarpy County compacts unevenly over time",
            "Tree roots near the driveway edge create voids as they grow and decay",
            "Poor compaction during original construction leads to gradual settling",
            "Water erosion from downspouts or grading issues washes out the base",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Signs Your Driveway Needs Leveling" className="bg-neutral">
        <BulletList
          items={[
            "Water pools in low spots or runs toward your garage instead of the street",
            "Your car scrapes the bottom of the driveway dip when entering or exiting",
            "Visible gaps or height differences between driveway panels at control joints",
            "Cracks widening at the garage apron or where the driveway meets the sidewalk",
            "One panel sits noticeably lower than adjacent panels or the street curb",
          ]}
        />
        <p className="mt-4">
          If you notice any of these signs, addressing the settlement early prevents further cracking
          and structural damage. Waiting typically means a bigger lift — and a higher repair bill.
        </p>
      </ServiceSection>

      <ServiceSection title="The Driveway Leveling Process">
        <ProcessSteps steps={drivewaySteps} />
      </ServiceSection>

      <ServiceSection title="Driveway Leveling Cost in Omaha" className="bg-neutral">
        <p>
          Typical driveway leveling in Omaha runs $600–$2,500 for residential projects. Smaller jobs
          — a single sunken panel at the garage entrance — often cost $400–$800. Larger driveways
          with three or more settled sections may reach $1,500–$2,500. Compare that to full
          replacement at $4,000–$12,000+, plus 3–7 days of demolition, forming, pouring, and curing.
        </p>
        <p>
          Pricing varies by contractor — request a free estimate to get an accurate quote for your
          project. You&apos;ll know exactly what the job costs before any holes are drilled.
        </p>
      </ServiceSection>

      <ServiceSection title="Before & After — What to Expect">
        <p>
          Most Omaha homeowners are surprised by how dramatic the difference is. A driveway that
          scraped the bottom of every vehicle becomes a smooth, level surface in a few hours. Water
          drains properly again. The trip edge at the sidewalk disappears. Curb appeal improves
          instantly — and you saved thousands compared to replacement.
        </p>
        <p>
          One Elkhorn homeowner had a 3-inch drop at the garage entrance that made pulling in feel
          like climbing a ramp. A local contractor mudjacked the two affected panels in 90 minutes.
          Total cost: a fraction of the $8,000 replacement quote they&apos;d received. That&apos;s
          the kind of result driveway leveling delivers.
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
