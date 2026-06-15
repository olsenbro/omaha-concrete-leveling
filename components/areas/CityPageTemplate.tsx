import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import type { CityArea } from "@/lib/areas-served";
import { getNeighborSlug } from "@/lib/areas-served";
import { localBusinessSchema } from "@/lib/schema";
import { serviceLinks, siteConfig } from "@/lib/site-config";

type CityPageTemplateProps = {
  city: CityArea;
};

export function CityPageTemplate({ city }: CityPageTemplateProps) {
  return (
    <>
      <Script
        id={`local-business-${city.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: localBusinessSchema(city.name, city.state),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Areas Served", href: "/areas-served" },
          { label: city.name },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl">
            <p className="label-caps mb-4 text-accent-light">Areas Served</p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              {city.h1}
            </h1>
            {city.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-5 text-lg leading-relaxed text-white/90">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PhoneLink className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent/90">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {siteConfig.phone}
              </PhoneLink>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          {city.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Concrete Services in {city.name}
          </h2>
          <p className="mt-4 text-lg text-muted">
            Concrete leveling services are available throughout {city.name} and surrounding
            communities from local specialists in our network:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {serviceLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 rounded-lg bg-white px-5 py-4 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  {label}
                  <ArrowRight className="ml-auto h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cost summary */}
      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Concrete Leveling Cost in {city.name}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Most residential concrete leveling projects in {city.name} run $600–$2,500 depending on
            the number of slabs, lift depth, and method used. Mudjacking typically costs $600–$2,200
            for driveways and patios; foam jacking runs $800–$3,000 for projects requiring fast cure
            times or waterproof performance. Single sidewalk panels often cost $300–$500. All
            options cost 50–70% less than full concrete replacement.{" "}
            <Link href="/concrete-leveling-cost" className="font-semibold text-primary hover:underline">
              See our full 2025 Omaha metro price guide →
            </Link>
          </p>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="bg-primary/5 section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Also Serving Nearby</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {city.neighbors.map((neighbor) => {
              const slug = getNeighborSlug(neighbor);
              return slug ? (
                <Link
                  key={neighbor}
                  href={`/areas-served/${slug}`}
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  {neighbor}
                </Link>
              ) : (
                <span
                  key={neighbor}
                  className="rounded-full bg-primary/20 px-5 py-2.5 text-sm font-medium text-primary"
                >
                  {neighbor}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent section-padding text-dark">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Get Your Free {city.name} Concrete Leveling Estimate
          </h2>
          <p className="mt-4 text-lg text-dark/90">
            Local contractors serve {city.name}, {city.stateName} and the entire Omaha metro. Most
            jobs in the area are completed within the same week.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <PhoneLink className="inline-flex items-center gap-3 rounded-lg bg-white px-10 py-4 text-lg font-bold text-accent shadow-lg transition-colors hover:bg-neutral">
              <Phone className="h-6 w-6" aria-hidden="true" />
              Call {siteConfig.phone} Now
            </PhoneLink>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-base font-semibold text-dark underline-offset-4 hover:underline"
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
