import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { PhoneLink } from "@/components/PhoneLink";
import { faqCategories } from "@/lib/faq-page-data";
import { buildPageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Concrete Leveling FAQs | Omaha Mudjacking Questions Answered",
  description:
    "Everything you want to know about concrete leveling, mudjacking, and foam jacking in Omaha. Honest answers from local experts.",
  canonical: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: faqSchema(
            faqCategories.flatMap((c) => c.items.map((i) => ({ q: i.question, a: i.answer }))),
          ),
        }}
      />

      <Breadcrumbs items={[{ label: "FAQ" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="label-caps mb-4 text-accent-light">FAQ</p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              Frequently Asked Questions About Concrete Leveling in Omaha
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Honest answers about mudjacking, foam jacking, costs, timing, and what to expect —
              from the local experts who do this work every day across the Omaha metro.
            </p>
            <PhoneLink className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent/90">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Still have questions? Call {siteConfig.phone}
            </PhoneLink>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <FaqAccordion categories={faqCategories} />
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold">Explore More</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/concrete-leveling-cost" className="btn-secondary text-sm">
              2025 Cost Guide
            </Link>
            <Link href="/mudjacking" className="btn-secondary text-sm">
              Mudjacking Services
            </Link>
            <Link href="/foam-jacking" className="btn-secondary text-sm">
              Foam Jacking Services
            </Link>
            <Link href="/areas-served" className="btn-secondary text-sm">
              Areas Served
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready for a Free Estimate?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            We&apos;ll assess your sunken concrete and give you an honest quote — no obligation,
            no pressure.
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
