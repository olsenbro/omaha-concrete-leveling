import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const trustPoints = [
  "Local Omaha-area contractors only",
  "Free estimates — no obligation",
  "Fast response — typically same or next day",
  "Licensed and insured professionals",
];

export function TeamSection() {
  return (
    <section className="bg-neutral section-padding">
      <div className="container-narrow">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-[55%]">
            <Image
              src="/images/team-photo.png"
              alt="Omaha Mudjacking Pros team — local concrete leveling specialists serving the greater Omaha metro area"
              width={560}
              height={373}
              sizes="(max-width: 768px) 100vw, 560px"
              loading="lazy"
              className="w-full rounded-xl object-cover shadow-md"
            />
          </div>

          <div className="flex w-full flex-col justify-center lg:w-[45%]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Your Local Team
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Connecting You With Omaha&apos;s Best Concrete Leveling Specialists
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We help Omaha homeowners find trusted, local concrete leveling contractors — fast.
              Submit your project details and we&apos;ll connect you with a qualified specialist in
              Douglas County, Sarpy County, or the greater metro area who can assess your concrete
              and provide a free, no-obligation estimate.
            </p>

            <ul className="mt-6 space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-dark">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={3} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn-primary mt-8 w-fit">
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
