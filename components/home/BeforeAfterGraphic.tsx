import { Check } from "lucide-react";

export function BeforeAfterGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="grid grid-cols-2 gap-4">
        {/* Before */}
        <div className="rounded-xl border-2 border-white/20 bg-white/10 p-4 backdrop-blur-sm">
          <span className="mb-3 block text-center text-xs font-semibold uppercase tracking-wider text-white/70">
            Before
          </span>
          <svg viewBox="0 0 120 100" className="mx-auto w-full" fill="none">
            {/* House */}
            <rect x="35" y="30" width="50" height="35" fill="#0F2E52" rx="2" />
            <polygon points="30,30 60,12 90,30" fill="#0F2E52" />
            <rect x="52" y="48" width="16" height="17" fill="#1B4F8A" rx="1" />
            {/* Uneven driveway */}
            <path
              d="M10 78 L50 72 L90 80 L110 76 L110 95 L10 95 Z"
              fill="#6B7280"
              stroke="#4B5563"
              strokeWidth="1"
            />
            <path
              d="M10 78 L50 72 L90 80"
              stroke="#E8730A"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            {/* Gap indicator */}
            <line x1="50" y1="72" x2="50" y2="95" stroke="#E8730A" strokeWidth="1.5" strokeDasharray="3 2" />
          </svg>
        </div>

        {/* After */}
        <div className="rounded-xl border-2 border-accent/40 bg-white/10 p-4 backdrop-blur-sm">
          <span className="mb-3 block text-center text-xs font-semibold uppercase tracking-wider text-accent-light">
            After
          </span>
          <svg viewBox="0 0 120 100" className="mx-auto w-full" fill="none">
            {/* House */}
            <rect x="35" y="30" width="50" height="35" fill="#0F2E52" rx="2" />
            <polygon points="30,30 60,12 90,30" fill="#0F2E52" />
            <rect x="52" y="48" width="16" height="17" fill="#1B4F8A" rx="1" />
            {/* Level driveway */}
            <rect x="10" y="78" width="100" height="17" fill="#9CA3AF" rx="1" />
            <rect x="10" y="78" width="100" height="3" fill="#D1D5DB" rx="1" />
            {/* Checkmark badge */}
            <circle cx="95" cy="22" r="12" fill="#E8730A" />
            <path
              d="M89 22 L93 26 L101 18"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="mt-2 flex items-center justify-center gap-1 text-accent-light">
            <Check className="h-4 w-4" strokeWidth={3} />
            <span className="text-xs font-semibold">Level &amp; Safe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
