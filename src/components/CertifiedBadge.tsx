export function CertifiedBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-copper-500/50 bg-copper-500/10 py-1.5 pl-3 pr-4 ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0 text-copper-500"
      >
        <path
          d="M12 2l2.4 1.7 2.9-.3 1 2.7 2.5 1.5-.7 2.8.7 2.8-2.5 1.5-1 2.7-2.9-.3L12 19l-2.4-1.7-2.9.3-1-2.7-2.5-1.5.7-2.8-.7-2.8 2.5-1.5 1-2.7 2.9.3L12 2z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 12.2l2.2 2.2 4.3-4.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-mono text-xs uppercase tracking-label text-copper-600">
        WABO Certified Welder
      </span>
      {/* Subtle shine sweep — decorative only, hidden under reduced motion. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer motion-reduce:hidden"
      />
    </span>
  );
}
