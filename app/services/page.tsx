import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SchemaScript } from "@/components/SchemaScript";
import { PhoneLink } from "@/components/PhoneLink";
import { createPageMetadata } from "@/lib/seo";
import { getServiceSchema, getWebPageSchema } from "@/lib/schema";
import { coreServices, getServicePath } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Mudjacking Omaha | Concrete Leveling Services",
  description:
    "Full-service concrete leveling, mudjacking, driveway repair, and commercial slab stabilization in Omaha, Nebraska.",
  path: "/services",
});

const pageSchema = [
  getWebPageSchema(
    "/services",
    "Mudjacking Omaha | Concrete Leveling Services",
    "Full-service concrete leveling and mudjacking in Omaha, NE.",
  ),
  ...coreServices.map((service) =>
    getServiceSchema(service.schema.name, service.schema.description),
  ),
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
            From residential driveways to commercial warehouse floors, our network connects you with
            professional mudjacking and concrete leveling specialists backed by local expertise.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral">
        <div className="container-narrow">
          <div className="grid gap-6 sm:grid-cols-2">
            {coreServices.map((service) => (
              <Link
                key={service.slug}
                href={getServicePath(service.slug)}
                className="group rounded-xl border border-primary/10 bg-white p-8 shadow-sm transition-all hover:border-primary hover:shadow-md"
              >
                <h2 className="font-display text-2xl font-bold text-primary group-hover:text-primary-dark">
                  {service.label}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent section-padding text-dark">
        <div className="container-narrow text-center">
          <h2 className="font-display text-2xl font-bold">Not Sure Which Service You Need?</h2>
          <p className="mx-auto mt-3 max-w-lg text-dark/90">
            Call for a free on-site assessment. A local specialist will recommend the right solution
            for your property.
          </p>
          <PhoneLink className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-accent">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {siteConfig.phone}
          </PhoneLink>
        </div>
      </section>
    </>
  );
}
