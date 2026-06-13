export function ConcreteTextureOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="concrete-diagonal"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="40" height="40" fill="none" />
            <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
            <line x1="10" y1="0" x2="10" y2="40" stroke="white" strokeWidth="0.5" opacity="0.5" />
            <line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="1" />
            <line x1="30" y1="0" x2="30" y2="40" stroke="white" strokeWidth="0.5" opacity="0.5" />
          </pattern>
          <pattern
            id="concrete-noise"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="0.8" fill="white" opacity="0.3" />
            <circle cx="6" cy="6" r="0.6" fill="white" opacity="0.2" />
            <circle cx="5" cy="1" r="0.5" fill="white" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#concrete-diagonal)" />
        <rect width="100%" height="100%" fill="url(#concrete-noise)" />
      </svg>
    </div>
  );
}
