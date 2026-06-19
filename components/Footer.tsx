import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { footerQuickLinks, serviceAreas, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  const { address } = siteConfig;

  return (
    <footer className="bg-[#0F2E52] text-white">
      <div className="container-narrow section-padding grid gap-10 lg:grid-cols-2 xl:grid-cols-4">
        {/* Column 1 — Brand & NAP */}
        <div className="space-y-5">
          <Link
            href="/"
            className="inline-block font-display text-xl font-bold leading-tight text-white"
            aria-label="Omaha Mudjacking Pros home"
          >
            Omaha Mudjacking{" "}
            <span className="relative inline-block">
              Pros
              <span
                className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-accent"
                aria-hidden="true"
              />
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-300">
            Connecting Omaha homeowners with trusted local concrete leveling specialists.
          </p>

          <div itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content={siteConfig.name} />
            <h2 className="label-caps mb-3 text-gray-300">Contact</h2>
            <address className="not-italic space-y-3 text-sm text-gray-300" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <span itemProp="streetAddress">{address.street}</span>
                  <br />
                  <span itemProp="addressLocality">{address.city}</span>,{" "}
                  <span itemProp="addressRegion">{address.state}</span>{" "}
                  <span itemProp="postalCode">{address.zip}</span>
                </span>
              </p>
              <p itemProp="telephone">
                <PhoneLink className="inline-flex items-center gap-2 font-semibold text-gray-300 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.phone}
                </PhoneLink>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  itemProp="email"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h2 className="label-caps mb-4 text-gray-300">Quick Links</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {footerQuickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Service Areas */}
        <div>
          <h2 className="label-caps mb-4 text-gray-300">Service Areas</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {serviceAreas.map((area) => (
              <li key={area} className="text-sm text-gray-300">
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Map */}
        <div>
          <h2 className="label-caps mb-4 text-gray-300">Service Area Map</h2>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Omaha Mudjacking Pros service area map — Omaha NE metro"
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="220"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-gray-400">
            Serving Douglas County, Sarpy County, and Council Bluffs, Iowa.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-300 sm:flex-row">
            <p>&copy; {year} Omaha Mudjacking Pros</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/sitemap.xml" className="transition-colors hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
