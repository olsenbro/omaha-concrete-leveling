import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms of Service | Omaha Mudjacking Pros",
  description:
    "Terms of service for Omaha Mudjacking Pros, a local lead generation and referral service for concrete leveling in the greater Omaha area.",
  canonical: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-primary-dark text-white section-padding">
        <div className="container-narrow">
          <p className="label-caps mb-3 text-accent-light">Legal</p>
          <h1 className="font-display text-4xl font-extrabold sm:text-display-sm">Terms of Service</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-muted">
            Omaha Mudjacking Pros is a local lead generation and referral service connecting
            homeowners with licensed concrete leveling contractors in the greater Omaha area. We do
            not directly perform concrete leveling, mudjacking, or related services. All work is
            performed by independent licensed contractors. Pricing information on this site reflects
            typical market rates and is provided for informational purposes only. Actual pricing is
            determined by the contractor performing your project. Contractor licensing, insurance, and
            warranties should be verified directly with your service provider.
          </p>
        </div>
      </section>
    </>
  );
}
