import type { Metadata } from "next";
import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Thank You",
    description: "Your request has been received. We'll be in touch shortly.",
    canonical: "/thank-you",
  }),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="section-padding bg-neutral">
      <div className="container-narrow mx-auto max-w-xl text-center">
        <h1 className="font-display text-4xl font-extrabold text-primary">Thank You!</h1>
        <p className="mt-4 text-lg text-muted">
          Your request has been received. A local contractor will follow up as soon as possible.
        </p>
        <p className="mt-4 text-sm text-muted">
          Need a faster response? Call{" "}
          <PhoneLink className="font-semibold text-primary hover:underline" />
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Submit another request
        </Link>
      </div>
    </section>
  );
}
