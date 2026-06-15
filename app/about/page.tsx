import Image from "next/image";
import { Phone } from "lucide-react";
import { SchemaScript } from "@/components/SchemaScript";
import { createPageMetadata } from "@/lib/seo";
import { getWebPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "About Omaha Mudjacking Pros",
  description:
    "Learn about Omaha Mudjacking Pros — locally owned mudjacking and concrete repair experts serving the greater Omaha metro area.",
  path: "/about",
});

const pageSchema = getWebPageSchema(
  "/about",
  "About Omaha Mudjacking Pros",
  "Locally owned concrete leveling experts serving Omaha, Nebraska.",
);

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={pageSchema} />

      <section className="bg-primary-dark text-white section-padding">
        <div className="container-narrow">
          <p className="label-caps mb-3 text-accent-light">About Us</p>
          <h1 className="font-display text-4xl font-extrabold sm:text-display-sm">
            Your Local Omaha Concrete Experts
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            We connect Omaha homeowners and businesses with experienced local concrete leveling
            specialists who help solve settlement problems quickly, affordably, and permanently.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/concrete-work.jpg"
              alt="Omaha Mudjacking Pros crew at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="prose prose-lg max-w-none text-muted">
            <h2 className="font-display text-2xl font-bold text-dark">Built on Local Trust</h2>
            <p>
              Omaha&apos;s clay soils and freeze-thaw cycles cause concrete to settle year after
              year. We&apos;ve seen it on driveways in Benson, patios in Millard, and warehouse
              floors across the metro — and we know how to fix it.
            </p>
            <p>
              Our approach is straightforward: honest assessments, transparent pricing, and
              workmanship we stand behind. No high-pressure sales, no unnecessary upsells — just
              quality concrete leveling done right the first time.
            </p>
            <p>
              Contractors in our network are trained in modern mudjacking and polyurethane lifting
              techniques, ensuring your project is completed safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral">
        <div className="container-narrow">
          <h2 className="font-display text-center text-3xl font-bold">Our Commitment to You</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Honest Estimates",
                body: "Free on-site evaluations with clear, upfront pricing before any work begins.",
              },
              {
                title: "Quality Workmanship",
                body: "Proven methods and premium materials for results that hold up to Nebraska weather.",
              },
              {
                title: "Local Accountability",
                body: "We live and work here — your satisfaction and referral mean everything to us.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary section-padding text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-2xl font-bold">Talk to a Local Expert Today</h2>
          <a href={siteConfig.phoneHref} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-white hover:bg-accent-light">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
