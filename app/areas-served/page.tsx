import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { hubAreaCards } from "@/lib/areas-served";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Concrete Leveling Near Me | Omaha Metro Service Area",
  description:
    "We provide concrete leveling and mudjacking throughout the Omaha metro — Douglas County, Sarpy County, and Council Bluffs, IA. See all service areas.",
  canonical: "/areas-served",
});

export default function AreasServedPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Areas Served" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="label-caps mb-4 text-accent-light">Service Areas</p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              Concrete Leveling in the Greater Omaha Metro Area
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              We provide mudjacking, foam jacking, and concrete leveling throughout Douglas County,
              Sarpy County, and across the Missouri River into Council Bluffs, Iowa. Select your
              city below to learn about local services, pricing, and scheduling.
            </p>
            <PhoneLink className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent/90">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {siteConfig.phone}
            </PhoneLink>
          </div>
        </div>
      </section>

      {/* City grid */}
      <section className="section-padding bg-neutral">
        <div className="container-narrow">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            Cities We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
            Click a city for local service details, pricing, and scheduling information.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hubAreaCards.map((area) =>
              area.hasPage && area.slug ? (
                <Link
                  key={area.slug}
                  href={`/areas-served/${area.slug}`}
                  className="group rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary group-hover:text-primary-dark">
                        {area.name}, {area.state}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                        View local services
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <article
                  key={area.name}
                  className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">
                        {area.name}, {area.state}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
                      <Link
                        href="/contact"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                      >
                        Request service
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold">Counties &amp; Regions Covered</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Douglas County, NE",
              "Sarpy County, NE",
              "Pottawattamie County, IA",
              "Council Bluffs, IA",
              "Carter Lake, IA",
            ].map((region) => (
              <span
                key={region}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white"
              >
                {region}
              </span>
            ))}
          </div>
          <p className="mt-8 text-lg text-muted">
            Not sure if we serve your area? Call{" "}
            <PhoneLink className="font-semibold text-primary hover:underline" /> — we&apos;ll let
            you know right away.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Schedule Service in Your Area
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Free on-site estimates throughout the Omaha metro. Most jobs completed same week.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <PhoneLink className="inline-flex items-center gap-3 rounded-lg bg-white px-10 py-4 text-lg font-bold text-accent shadow-lg transition-colors hover:bg-neutral">
              <Phone className="h-6 w-6" aria-hidden="true" />
              Call {siteConfig.phone} Now
            </PhoneLink>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-base font-semibold text-white underline-offset-4 hover:underline"
            >
              Request Online
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
