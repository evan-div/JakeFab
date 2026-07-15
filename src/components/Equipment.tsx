import { weldingProcesses, fabricationCapabilities } from "@/data/processes";
import { CertifiedBadge } from "./CertifiedBadge";
import { Reveal } from "./Reveal";

export function Equipment() {
  return (
    <section id="equipment" className="bg-concrete-50 py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-5">Shop &amp; process</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-steel-900 sm:text-4xl">
              The welding, machining, and design behind every piece.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-base leading-relaxed text-steel-500">
              Every project is modeled and engineered before it's built, then
              welded and machined with the process that fits the material and
              the finish.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-6">
            <CertifiedBadge />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow-muted mb-5">Welding &amp; cutting</p>
            </Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-steel-900/10 bg-steel-900/10 sm:grid-cols-2">
              {weldingProcesses.map((item, i) => (
                <Reveal
                  key={item.label}
                  delay={i * 60}
                  className="bg-concrete-50 p-6"
                >
                  <h3 className="font-display text-base font-semibold text-steel-900">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-500">
                    {item.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow-muted mb-5">Fabrication &amp; design</p>
            </Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-steel-900/10 bg-steel-900/10 sm:grid-cols-2">
              {fabricationCapabilities.map((item, i) => (
                <Reveal
                  key={item.label}
                  delay={i * 60}
                  className={`bg-concrete-50 p-6 ${
                    i === fabricationCapabilities.length - 1 &&
                    fabricationCapabilities.length % 2 === 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <h3 className="font-display text-base font-semibold text-steel-900">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-500">
                    {item.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
