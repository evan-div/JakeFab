import { site } from "@/data/site";
import { Reveal } from "./Reveal";

/**
 * Flexible trust-building band. Everything here is a clearly labeled
 * PLACEHOLDER. Do not present testimonials, partnerships, or credentials as
 * real until they are verified and you have permission to publish them.
 */
export function Trust() {
  return (
    <section className="bg-concrete-100 py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">Working together</p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-steel-900 sm:text-4xl">
            Residential and commercial, across the island and beyond.
          </h2>
        </Reveal>

        {/* Service area + availability */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-steel-900/10 bg-steel-900/10 md:grid-cols-3">
          <Reveal className="bg-concrete-50 p-7">
            <h3 className="font-display text-lg font-semibold text-steel-900">
              Service area
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-500">
              {site.serviceAreas.join(", ")}. Traveling farther for the right
              project — just ask.
            </p>
          </Reveal>
          <Reveal delay={70} className="bg-concrete-50 p-7">
            <h3 className="font-display text-lg font-semibold text-steel-900">
              Residential &amp; commercial
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-500">
              Homes, restaurants, hospitality, and commercial spaces — from a
              single handrail to a full architectural package.
            </p>
          </Reveal>
          <Reveal delay={140} className="bg-concrete-50 p-7">
            <h3 className="font-display text-lg font-semibold text-steel-900">
              Licensed &amp; insured
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-500">
              [PLACEHOLDER — add license number and insurance details once
              confirmed. Leave out until verified.]
            </p>
          </Reveal>
        </div>

        {/* Testimonials placeholder */}
        <div className="mt-12">
          <p className="eyebrow-muted mb-6">
            Client feedback — placeholders until real reviews are added
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2].map((n) => (
              <Reveal
                key={n}
                delay={n * 70}
                className="border border-steel-900/10 bg-concrete-50 p-7"
              >
                <p className="font-display text-lg leading-snug text-steel-700">
                  &ldquo;[PLACEHOLDER — add a real client testimonial here. Do
                  not publish invented reviews.]&rdquo;
                </p>
                <p className="mt-4 font-mono text-xs uppercase tracking-wide text-steel-400">
                  [Client name] · [Project type], [City]
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Partnerships placeholder */}
        <Reveal className="mt-12 border-t border-steel-900/10 pt-8">
          <p className="eyebrow-muted mb-5">
            Designer &amp; contractor partners
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-steel-500">
            [PLACEHOLDER — logos or names of architects, interior designers, and
            general contractors Jake regularly works with. Add with permission.]
          </p>
        </Reveal>
      </div>
    </section>
  );
}
