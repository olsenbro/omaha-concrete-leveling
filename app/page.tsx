import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Check, Layers, Phone, Shovel, Star } from "lucide-react";
import { BeforeAfterGraphic } from "@/components/home/BeforeAfterGraphic";
import { ConcreteTextureOverlay } from "@/components/home/ConcreteTextureOverlay";
import { PhoneLink } from "@/components/PhoneLink";
import { homeFaqItems } from "@/lib/home-faq";
import { faqSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Mudjacking Omaha NE | Concrete Leveling & PolyJacking Experts",
  description:
    "Sunken driveway or sidewalk in Omaha? We level concrete fast — no replacement needed. Free estimates. Local experts serving Douglas & Sarpy County. Call (402) 555-0190.",
  canonical: "/",
});

const problemCards = [
  {
    emoji: "🚗",
    title: "Sunken Driveway",
    body: "Water pools, edges crack, and your car scrapes the dip every time. We lift it back to grade in a single visit.",
  },
  {
    emoji: "🚶",
    title: "Uneven Sidewalk",
    body: "Trip hazards put you at risk — and in Nebraska, property owners can be liable. We raise sunken slabs flush in hours.",
  },
  {
    emoji: "🏠",
    title: "Settling Patio or Pool Deck",
    body: "Gaps, cracks, and tilting slabs get worse every freeze-thaw cycle. Early leveling prevents full replacement.",
  },
];

const testimonials = [
  {
    quote:
      "Our driveway had a 3-inch drop at the garage entrance. I figured we were looking at $8,000 for new concrete. These guys lifted it in 90 minutes for a fraction of that. Incredible.",
    name: "Mike D.",
    area: "Elkhorn",
  },
  {
    quote:
      "The city sidewalk crew marked our panel as a trip hazard. We had 30 days to fix it. Called Omaha Mudjacking Pros on Monday, they were here Wednesday. Done before lunch.",
    name: "Sarah K.",
    area: "Papillion",
  },
  {
    quote:
      "Skeptical at first — didn't believe a little pump could lift my whole patio. Then I watched them do it. Six slabs, two hours, looks brand new. Should have done this 5 years ago.",
    name: "Dave R.",
    area: "Millard",
  },
];

const metroAreas = [
  "Omaha",
  "Bellevue",
  "Papillion",
  "La Vista",
  "Ralston",
  "Millard",
  "Elkhorn",
  "Gretna",
  "Bennington",
  "Chalco",
  "Council Bluffs IA",
  "Carter Lake IA",
];

const heroTrustBadges = [
  "No Concrete Removal",
  "Same-Day Service Available",
  "5-Year Warranty",
];

export default function HomePage() {
  return (
    <>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: faqSchema(
            homeFaqItems.map((item) => ({ q: item.question, a: item.answer })),
          ),
        }}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-primary text-white">
        <ConcreteTextureOverlay />
        <div className="container-narrow relative section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Omaha&apos;s Concrete Leveling Specialists
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl lg:text-[3.25rem]">
                Sunken Concrete? We&apos;ll Lift It — Without the Mess or the Cost of Replacement
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
                Driveways, sidewalks, patios, and garage floors leveled in hours — not days. Save up
                to 70% vs. full concrete replacement. Serving Omaha and the greater metro area.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-accent/90"
                >
                  Get a Free Estimate
                </Link>
                <Link
                  href="/mudjacking"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  See How It Works
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-y-2 text-sm text-white/90">
                {heroTrustBadges.map((badge, i) => (
                  <span key={badge} className="inline-flex items-center">
                    {i > 0 && (
                      <span className="mx-3 hidden text-white/30 sm:inline" aria-hidden="true">
                        |
                      </span>
                    )}
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-accent-light" strokeWidth={3} aria-hidden="true" />
                      {badge}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:col-span-2 lg:block">
              <BeforeAfterGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ── */}
      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Is Your Concrete Telling You Something?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            Settled, sunken, or uneven concrete isn&apos;t just an eyesore — it&apos;s a trip hazard,
            a liability risk, and often a sign of deeper soil problems. Most Omaha homeowners assume
            the only fix is a full tear-out and repour. It&apos;s not.
          </p>

          <div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
            {problemCards.map(({ emoji, title, body }) => (
              <article
                key={title}
                className="rounded-xl border border-primary/10 bg-neutral p-6 shadow-sm"
              >
                <span className="text-3xl" role="img" aria-label={title}>
                  {emoji}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-neutral section-padding">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              How Concrete Leveling Works in Omaha
            </h2>
            <p className="mt-4 text-lg text-muted">
              Two proven methods. One same-day result. No concrete removal required.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Mudjacking */}
            <article className="rounded-xl border border-primary/15 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shovel className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-primary">
                Mudjacking — The Proven Classic
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                We drill small holes in your sunken slab and pump a mixture of soil, water, and
                cement underneath. The slurry fills the void and lifts the concrete back to its
                original position. Holes are patched and nearly invisible. Best for: driveways,
                sidewalks, patio slabs, pool decks.
              </p>
              <p className="mt-6 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                Costs 50–70% less than replacement
              </p>
            </article>

            {/* Foam / PolyJacking */}
            <article className="rounded-xl border border-primary/15 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Layers className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-primary">
                Foam/PolyJacking — The Modern Method
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Expanding polyurethane foam is injected through dime-sized holes. It expands, fills
                the void, and lifts the slab with incredible precision. Cures in 15 minutes,
                waterproof, and won&apos;t wash out. Best for: precision leveling, areas with
                plumbing underneath, commercial applications.
              </p>
              <p className="mt-6 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                Cures in 15 minutes — drive on it same day
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            What Omaha Homeowners Are Saying
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map(({ quote, name, area }) => (
              <blockquote
                key={name}
                className="flex flex-col rounded-xl border border-primary/10 bg-neutral p-6 shadow-sm"
              >
                <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-dark">&ldquo;{quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-primary">
                  — {name}, {area}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="bg-primary/5 section-padding">
        <div className="container-narrow mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Serving the Greater Omaha Metro
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            We provide concrete leveling services throughout Douglas County, Sarpy County, and
            across the river into Council Bluffs, Iowa. Not sure if we serve your area? Call us.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {metroAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-accent section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Get Your Free Concrete Leveling Estimate
          </h2>
          <p className="mt-4 text-lg text-white/90">
            We&apos;ll assess your sunken concrete and give you an honest quote — usually 50–70%
            less than replacement. Most jobs completed same week.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <PhoneLink className="inline-flex items-center gap-3 rounded-lg bg-white px-10 py-4 text-lg font-bold text-accent shadow-lg transition-colors hover:bg-neutral">
              <Phone className="h-6 w-6" aria-hidden="true" />
              Call {siteConfig.phone} Now
            </PhoneLink>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-base font-semibold text-white underline-offset-4 hover:underline"
            >
              Or Request Online
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            Common Questions About Concrete Leveling in Omaha
          </h2>

          <div className="mt-10 space-y-3">
            {homeFaqItems.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-xl border border-primary/10 bg-neutral open:bg-white open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-bold text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                  {question}
                  <span
                    className="shrink-0 text-accent transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="border-t border-primary/10 px-6 pb-5 pt-2">
                  <p className="leading-relaxed text-muted">{answer}</p>
                </div>
              </details>
            ))}
          </div>

          <p className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-dark"
            >
              See All FAQs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
