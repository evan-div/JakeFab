import { SmartImage } from "./SmartImage";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="grain relative overflow-hidden bg-steel-900 py-20 text-concrete-50 md:py-28"
    >
      <div className="container-page relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Portrait / workshop image */}
        <div className="lg:col-span-5">
          <Reveal className="relative aspect-[4/5] w-full overflow-hidden bg-steel-950">
            {/* ▸ Replace with a real portrait or workshop photo of Jake. */}
            <SmartImage
              src="/projects/blackened-kitchen-hood/01.svg"
              alt="PLACEHOLDER — portrait or workshop photo of Jake Wall."
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Bio */}
        <div className="lg:col-span-7 lg:pl-4">
          <Reveal>
            <p className="eyebrow mb-5">About the maker</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Jake Wall — a local craftsman on Whidbey Island.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-concrete-100/80">
              Based in {site.city}, Jake builds custom metalwork for clients
              across {site.region}. The work spans fine interior details and
              rugged outdoor pieces, but the approach is the same either way:
              understand how something will be used, design it to fit, and build
              it to last.
              {" "}
              <span className="text-concrete-100/50">
                [PLACEHOLDER — add Jake's background, how he got into the trade,
                and what he most enjoys building.]
              </span>
            </p>
          </Reveal>

          <Reveal delay={140}>
            <blockquote className="mt-8 border-l-2 border-copper-500 pl-5 font-display text-xl font-medium leading-snug text-concrete-50">
              &ldquo;Bring me the idea that doesn't have an easy answer. That's
              the work I like best.&rdquo;
              <cite className="mt-2 block font-sans text-xs not-italic tracking-wide text-concrete-100/50">
                [PLACEHOLDER — confirm or replace this quote]
              </cite>
            </blockquote>
          </Reveal>

          <Reveal delay={200}>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-concrete-50/10 pt-8 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-label text-concrete-100/50">
                  Experience
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold">
                  [XX]
                  <span className="text-sm font-normal text-concrete-100/60">
                    {" "}
                    yrs
                  </span>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-label text-concrete-100/50">
                  Based in
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold">
                  {site.city}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-label text-concrete-100/50">
                  Works with
                </dt>
                <dd className="mt-1 text-sm leading-snug text-concrete-100/75">
                  Homeowners, designers, architects &amp; builders
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
