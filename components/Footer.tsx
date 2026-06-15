import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { footerQuickLinks, serviceAreas, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2E52] text-white">
      <div className="container-narrow section-padding grid gap-10 md:grid-cols-3">
        {/* Column 1 — Brand & contact */}
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
          <ul className="space-y-3">
            <li>
              <PhoneLink className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </PhoneLink>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h2 className="label-caps mb-4 text-gray-300">Quick Links</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1">
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
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow px-4 py-5 sm:px-6 lg:px-8">
          <p className="max-w-7xl pt-4 text-xs leading-relaxed text-white/50">
            Omaha Mudjacking Pros is a local lead generation and referral service connecting
            homeowners with licensed concrete leveling contractors in the greater Omaha area. We do
            not directly perform concrete leveling, mudjacking, or related services. All work is
            performed by independent licensed contractors. Pricing information on this site reflects
            typical market rates and is provided for informational purposes only. Actual pricing is
            determined by the contractor performing your project. Contractor licensing, insurance, and
            warranties should be verified directly with your service provider.
          </p>

          <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-4 text-center text-sm text-gray-300 sm:flex-row">
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
