import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Layers, Phone, Shovel, Star } from "lucide-react";
import { BeforeAfterGraphic } from "@/components/home/BeforeAfterGraphic";
import { BlogSection } from "@/components/home/BlogSection";
import { ConcreteTextureOverlay } from "@/components/home/ConcreteTextureOverlay";
import { TeamSection } from "@/components/home/TeamSection";
import { PhoneLink } from "@/components/PhoneLink";
import { homeFaqItems } from "@/lib/home-faq";
import { HOME_PAGE_META_DESCRIPTION } from "@/lib/home-page";
import { buildPageMetadata } from "@/lib/seo";
import { getKeywordsForPage } from "@/lib/keyword-targets";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Mudjacking Omaha NE | Concrete Leveling & PolyJacking Experts",
  description: HOME_PAGE_META_DESCRIPTION,
  canonical: "/",
  keywords: getKeywordsForPage("/"),
});

const problemCards = [
  {
    emoji: "🚗",
    title: "Sunken Driveway",
    body: "Water pools, edges crack, and your car scrapes the dip every time. A local pro can lift it back to grade in a single visit.",
  },
  {
    emoji: "🚶",
    title: "Uneven Sidewalk",
    body: "Trip hazards put you at risk — and in Nebraska, property owners can be liable. Sunken slabs can be raised flush in hours.",
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
      {/* ── HERO ── */}
      <section className="relative overflow-hidden text-white">
        <ConcreteTextureOverlay />
        <div className="container-narrow relative section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Omaha&apos;s Concrete Leveling Specialists
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-balance text-white sm:text-5xl lg:text-[3.25rem]">
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
                  href="/services/mudjacking"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary"
                >
                  See How It Works
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-y-2 text-sm text-white">
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

            <div className="lg:col-span-2">
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

          <figure className="mx-auto mt-12 max-w-5xl">
            <Image
              src="/images/mudjacking-process.png"
              alt="Professional mudjacking contractor lifting concrete driveway slab in Omaha Nebraska"
              width={896}
              height={448}
              sizes="(max-width: 768px) 100vw, 896px"
              loading="lazy"
              className="mb-8 w-full rounded-xl object-cover"
            />
            <figcaption className="mt-2 text-center text-sm italic text-muted">
              Local pros use professional-grade mudjacking equipment to lift and level concrete
              slabs throughout the Omaha metro.
            </figcaption>
          </figure>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mudjacking */}
            <article className="rounded-xl border border-primary/15 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shovel className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-primary">
                Mudjacking — The Proven Classic
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Small holes are drilled in your sunken slab and a mixture of soil, water, and cement
                is pumped underneath. The slurry fills the void and lifts the concrete back to its
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

      <TeamSection />

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            What Omaha Homeowners Are Saying About Local Concrete Leveling
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
            Local concrete leveling specialists serve homeowners throughout Douglas County, Sarpy
            County, and across the river into Council Bluffs, Iowa. Not sure if there&apos;s a
            contractor in your area? Call us and we&apos;ll connect you.
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

      <BlogSection />

      {/* ── FAQ (crawlable for AEO) ── */}
      <section id="faq" className="bg-white section-padding" aria-labelledby="home-faq-heading">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 id="home-faq-heading" className="text-center font-display text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions About Concrete Leveling in Omaha
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
            Direct answers to the questions Omaha homeowners ask most about mudjacking, foam jacking,
            and concrete leveling costs.
          </p>

          <div className="mt-10 space-y-3">
            {homeFaqItems.map(({ question, answer }) => (
              <article
                key={question}
                className="rounded-xl border border-primary/10 bg-neutral"
              >
                <h3 className="px-6 py-5 font-display text-base font-bold text-primary">
                  {question}
                </h3>
                <p className="border-t border-primary/10 px-6 pb-5 pt-2 leading-relaxed text-muted">
                  {answer}
                </p>
              </article>
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

      {/* ── CTA BANNER ── */}
      <section className="bg-accent section-padding text-dark">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Get Your Free Concrete Leveling Estimate
          </h2>
          <p className="mt-4 text-lg text-dark/90">
            Connect with a local Omaha concrete leveling specialist who will assess your project and
            provide an honest, no-obligation quote. Most jobs in the area are completed within the
            same week.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <PhoneLink className="inline-flex items-center gap-3 rounded-lg bg-white px-10 py-4 text-lg font-bold text-accent shadow-lg transition-colors hover:bg-neutral">
              <Phone className="h-6 w-6" aria-hidden="true" />
              Call {siteConfig.phone} Now
            </PhoneLink>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-base font-semibold text-dark underline-offset-4 hover:underline"
            >
              Or Request Online
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
