import { SmartImage } from "./SmartImage";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-steel-950"
    >
      {/* Hero image — priority-loaded, fills the frame. Replace the source with
          a strong real project photo (landscape, high resolution). */}
      <SmartImage
        src="/projects/harbor-stair-railing/cover.svg"
        alt="PLACEHOLDER — feature photograph of a finished custom metalwork project."
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility scrim — kept off the center of the photo. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/55 to-steel-950/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-steel-950/70 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 pb-20 pt-32 md:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 flex items-center gap-3 animate-fade-in">
            <span className="h-px w-8 bg-copper-500" aria-hidden="true" />
            {site.city}, {site.state}
          </p>

          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-concrete-50 sm:text-5xl md:text-7xl">
            Custom metalwork,
            <br />
            <span className="text-copper-400">built around</span> your vision.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-concrete-100/85 sm:text-lg">
            Jake Wall designs and fabricates one-of-a-kind pieces for homes,
            businesses, and outdoor spaces — from railings and architectural
            features to kitchens, planters, and fully custom work. Bring an
            idea, a sketch, or a problem, and we build the solution.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#quote" className="btn-primary">
              Request a Quote
            </a>
            <a href="#work" className="btn-ghost-light">
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#intro"
        aria-label="Scroll to content"
        className="absolute bottom-6 right-5 z-10 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-label text-concrete-100/60 transition-colors hover:text-concrete-50 md:right-12 md:flex"
      >
        Scroll
        <span className="block h-8 w-px bg-concrete-100/40" aria-hidden="true" />
      </a>
    </section>
  );
}
