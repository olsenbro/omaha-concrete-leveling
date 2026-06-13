import { Phone } from "lucide-react";
import { SchemaScript } from "@/components/SchemaScript";
import { createPageMetadata } from "@/lib/seo";
import { getServiceSchema, getWebPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Mudjacking Omaha | Concrete Leveling Services",
  description:
    "Full-service concrete leveling, mudjacking, driveway repair, and commercial slab stabilization in Omaha, Nebraska.",
  path: "/services",
});

const services = [
  {
    name: "Concrete Leveling",
    description:
      "We lift and level sunken concrete slabs using precision injection techniques. Ideal for driveways, sidewalks, garage floors, and pool decks that have settled over time.",
    benefits: ["Eliminates trip hazards", "Restores drainage slope", "Same-day completion"],
  },
  {
    name: "Mudjacking",
    description:
      "Our mudjacking process fills voids beneath your slab with a high-strength grout mixture, raising the concrete back to its original position and preventing further settlement.",
    benefits: ["Cost-effective vs. replacement", "Minimal disruption", "Proven long-term results"],
  },
  {
    name: "Driveway Repair",
    description:
      "Uneven driveway panels create safety risks and water pooling. We level individual sections or entire driveways to restore a smooth, safe surface.",
    benefits: ["Improves curb appeal", "Prevents vehicle damage", "Extends slab lifespan"],
  },
  {
    name: "Patios & Walkways",
    description:
      "Settled patios and walkways are common in Omaha due to soil expansion and freeze-thaw cycles. We restore level surfaces for safer outdoor living.",
    benefits: ["Family-safe surfaces", "Better water runoff", "Quick turnaround"],
  },
  {
    name: "Commercial Slab Repair",
    description:
      "Warehouse floors, loading docks, and retail entrances require level surfaces for safety and operations. We work around your schedule to minimize downtime.",
    benefits: ["ADA compliance support", "Minimal business disruption", "Volume pricing available"],
  },
  {
    name: "Void Filling & Stabilization",
    description:
      "Before slabs crack or collapse further, we identify and fill subsurface voids caused by erosion, plumbing leaks, or poor compaction.",
    benefits: ["Prevents future cracking", "Structural stabilization", "Engineer-approved methods"],
  },
];

const pageSchema = [
  getWebPageSchema(
    "/services",
    "Mudjacking Omaha | Concrete Leveling Services",
    "Full-service concrete leveling and mudjacking in Omaha, NE.",
  ),
  ...services.map((s) => getServiceSchema(s.name, s.description)),
];

export default function ServicesPage() {
  return (
    <>
      <SchemaScript schema={pageSchema} />

      <section className="bg-primary-dark text-white section-padding">
        <div className="container-narrow">
          <p className="label-caps mb-3 text-accent-light">Our Services</p>
          <h1 className="font-display text-4xl font-extrabold sm:text-display-sm">
            Concrete Leveling Services in Omaha
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            From residential driveways to commercial warehouse floors, we deliver professional
            mudjacking and concrete leveling backed by local expertise.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral">
        <div className="container-narrow space-y-8">
          {services.map((service) => (
            <article
              key={service.name}
              className="rounded-xl border border-primary/10 bg-white p-8 shadow-sm"
            >
              <h2 className="font-display text-2xl font-bold text-primary">{service.name}</h2>
              <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-accent section-padding text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-2xl font-bold">Not Sure Which Service You Need?</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/90">
            Call for a free on-site assessment. We&apos;ll recommend the right solution for your
            property.
          </p>
          <a href={siteConfig.phoneHref} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-accent">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
