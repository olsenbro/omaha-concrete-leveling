import Link from "next/link";
import Script from "next/script";
import { Mail, Phone } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { footerQuickLinks, serviceAreas, siteConfig } from "@/lib/site-config";
import { localBusinessSchema } from "@/lib/schema";

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
          <p className="text-sm leading-relaxed text-white/80">
            Omaha&apos;s trusted concrete leveling experts. Serving the greater metro area since{" "}
            {siteConfig.foundedYear}.
          </p>
          <ul className="space-y-3">
            <li>
              <PhoneLink className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </PhoneLink>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h2 className="label-caps mb-4 text-white/60">Quick Links</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1">
            {footerQuickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/90 transition-colors hover:text-accent-light"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Service Areas */}
        <div>
          <h2 className="label-caps mb-4 text-white/60">Service Areas</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {serviceAreas.map((area) => (
              <li key={area} className="text-sm text-white/90">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow flex flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-white/60 sm:flex-row sm:px-6 lg:px-8">
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

      <Script
        id="footer-local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: localBusinessSchema() }}
      />
    </footer>
  );
}
