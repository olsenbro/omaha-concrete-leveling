import Image from "next/image";
import { Check } from "lucide-react";

const beforePoints = [
  "Sunken slab with trip hazard",
  "Water pooling at garage",
  "Cracks worsening each season",
];

const afterPoints = [
  "Smooth, level surface",
  "Proper water drainage",
  "Safe same-day result",
];

export function BeforeAfterGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative grid grid-cols-2 gap-4">
        {/* Same Day badge */}
        <div
          className="absolute left-1/2 top-[100px] z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white/30 bg-accent text-center shadow-lg sm:top-[130px] lg:top-[150px]"
          aria-hidden="true"
        >
          <span className="text-[10px] font-bold uppercase leading-tight tracking-wide text-white">
            Same
            <br />
            Day
          </span>
        </div>

        {/* Before */}
        <div className="overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm">
          <span className="mb-3 block pt-4 text-center text-xs font-semibold uppercase tracking-wider text-white/70">
            Before
          </span>
          <Image
            src="/images/driveway-before.png"
            alt="Sunken and cracked concrete driveway before mudjacking repair in Omaha"
            width={400}
            height={225}
            sizes="(max-width: 1024px) 45vw, 200px"
            priority
            className="mx-4 h-[200px] w-[calc(100%-2rem)] rounded-lg object-cover lg:h-[225px]"
          />
          <ul className="space-y-1.5 px-4 py-3">
            {beforePoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-1.5 text-[11px] leading-snug text-red-200"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="overflow-hidden rounded-xl border-2 border-accent/40 bg-white/10 backdrop-blur-sm">
          <span className="mb-3 block pt-4 text-center text-xs font-semibold uppercase tracking-wider text-accent-light">
            After
          </span>
          <Image
            src="/images/driveway-after.png"
            alt="Level smooth concrete driveway after mudjacking repair in Omaha Nebraska"
            width={400}
            height={225}
            sizes="(max-width: 1024px) 45vw, 200px"
            className="mx-4 h-[200px] w-[calc(100%-2rem)] rounded-lg object-cover lg:h-[225px]"
          />
          <ul className="space-y-1.5 px-4 py-3">
            {afterPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-1.5 text-[11px] leading-snug text-green-200"
              >
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-green-400" strokeWidth={3} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
