import { Check, Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import { getWebPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Get a Free Concrete Leveling Estimate | Omaha, NE",
  description:
    "Request a free concrete leveling estimate in Omaha. We'll assess your sunken driveway, sidewalk, or patio and give you an honest quote — usually same week.",
  canonical: "/contact",
});

const CONTACT_EMAIL = "info@omahaconcretelveling.com";

const trustPoints = [
  "Free written estimates",
  "No obligation",
  "Same-week scheduling",
  "5-year warranty on all work",
];

const testimonials = [
  {
    quote:
      "Called on Monday, they were at my house Wednesday. Driveway lifted in 90 minutes — couldn't believe how fast.",
    name: "Mike D., Elkhorn",
  },
  {
    quote:
      "Honest quote, no upselling. They told me exactly what I needed and what it would cost before they started.",
    name: "Sarah K., Papillion",
  },
  {
    quote:
      "Saved us thousands vs. what the replacement contractor quoted. Patio looks brand new.",
    name: "Dave R., Millard",
  },
];

const pageSchema = getWebPageSchema(
  "/contact",
  "Get a Free Concrete Leveling Estimate",
  "Request a free concrete leveling estimate in Omaha, NE.",
);

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={pageSchema} />

      <Breadcrumbs items={[{ label: "Contact" }]} />

      {/* Hero */}
      <section className="bg-primary text-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <p className="label-caps mb-4 text-accent-light">Contact</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
            Get Your Free Concrete Leveling Estimate
          </h1>
          <p className="mt-5 text-lg text-white/90">
            No pressure. No obligation. Just an honest assessment and a written quote.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="section-padding bg-neutral">
        <div className="container-narrow grid gap-12 lg:grid-cols-2">
          {/* Left — Form */}
          <ContactForm />

          {/* Right — Contact info + trust */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <p className="label-caps text-muted">Call or Text</p>
              <PhoneLink className="mt-2 inline-flex items-center gap-3 font-display text-3xl font-bold text-accent transition-colors hover:text-accent-light sm:text-4xl">
                <Phone className="h-8 w-8 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </PhoneLink>
              <p className="mt-3 text-sm text-muted">
                Fastest way to schedule your free on-site estimate.
              </p>
            </div>

            {/* Email & hours */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-3 text-dark transition-colors hover:text-primary"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    Monday–Saturday: 7:00 AM – 6:00 PM
                    <br />
                    Sunday: By appointment
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    Douglas County, Sarpy County, Pottawattamie County IA
                  </span>
                </li>
              </ul>
            </div>

            {/* Trust block */}
            <div className="rounded-xl bg-primary p-8 text-white shadow-sm">
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-medium">
                    <Check className="h-5 w-5 shrink-0 text-accent-light" strokeWidth={3} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map(({ quote, name }) => (
                <blockquote
                  key={name}
                  className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex gap-0.5 text-accent" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-dark">&ldquo;{quote}&rdquo;</p>
                  <footer className="mt-2 text-xs font-semibold text-primary">— {name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
