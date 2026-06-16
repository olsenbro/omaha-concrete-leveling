import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import type { NeighborhoodArea } from "@/lib/neighborhoods";
import { getNeighborhoodBySlug, getNeighborhoodPath } from "@/lib/neighborhoods";
import { localBusinessSchema } from "@/lib/schema";
import { serviceLinks, siteConfig } from "@/lib/site-config";

type NeighborhoodPageTemplateProps = {
  area: NeighborhoodArea;
};

export function NeighborhoodPageTemplate({ area }: NeighborhoodPageTemplateProps) {
  return (
    <>
      <Script
        id={`local-business-${area.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: localBusinessSchema(area.cityName, area.state),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Areas Served", href: "/areas-served" },
          { label: area.cityName, href: `/areas-served/${area.citySlug}` },
          { label: area.name },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl">
            <p className="label-caps mb-4 text-accent-light">
              {area.cityName}, {area.stateName}
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              {area.h1}
            </h1>
            {area.intro.map((paragraph) => (
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
          {area.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Landmarks & ZIPs */}
      <section className="bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Landmarks &amp; ZIP Codes in {area.name}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Local contractors know {area.name} in {area.cityName} — including properties near{" "}
            {area.landmarks.slice(0, 2).join(" and ")} in ZIP{" "}
            {area.zipCodes.join(" and ")}. No street address needed for a free estimate.
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-primary">ZIP Codes</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {area.zipCodes.map((zip) => (
                  <li
                    key={zip}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm"
                  >
                    {zip}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-primary">Nearby Landmarks</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {area.landmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm"
                  >
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Concrete Services in {area.name}
          </h2>
          <p className="mt-4 text-lg text-muted">
            Mudjacking and foam jacking are available throughout {area.name} and greater{" "}
            {area.cityName} from local specialists in our network:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {serviceLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 rounded-lg bg-neutral px-5 py-4 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  {label}
                  <ArrowRight className="ml-auto h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nearby neighborhoods */}
      {area.nearbySlugs.length > 0 && (
        <section className="bg-neutral section-padding">
          <div className="container-narrow mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold">Nearby Neighborhoods</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {area.nearbySlugs.map((slug) => {
                const neighbor = getNeighborhoodBySlug(slug);
                if (!neighbor) return null;
                return (
                  <Link
                    key={slug}
                    href={getNeighborhoodPath(slug)}
                    className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                  >
                    {neighbor.name}
                  </Link>
                );
              })}
              <Link
                href={`/areas-served/${area.citySlug}`}
                className="rounded-full bg-primary/20 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/30"
              >
                All of {area.cityName}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="bg-accent section-padding text-dark">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Get Your Free {area.name} Concrete Leveling Estimate
          </h2>
          <p className="mt-4 text-lg text-dark/90">
            Local contractors serve {area.name}, {area.cityName}, {area.stateName} and the entire
            Omaha metro. Most jobs are completed within the same week.
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
