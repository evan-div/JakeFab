import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Skilled fabrication",
    body: "Clean welds, tight tolerances, and finishes that hold up — the fundamentals done right.",
  },
  {
    title: "Creative problem-solving",
    body: "When there's no off-the-shelf answer, we work out how to make it possible.",
  },
  {
    title: "Collaboration",
    body: "We work alongside homeowners, designers, and builders to get the details right.",
  },
  {
    title: "Durable by design",
    body: "Materials and construction chosen for how a piece is actually used — and the weather it lives in.",
  },
];

export function ValueProp() {
  return (
    <section id="intro" className="bg-concrete-50 py-20 md:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-5">No two projects alike</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-steel-900 sm:text-4xl">
              A metalsmith who can make nearly anything — designed for the way
              you'll use it.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-steel-500">
              Every job starts with a conversation, not a catalog. Some clients
              arrive with finished drawings; most bring a photo, a measurement,
              or a rough idea. Either way, the work is designed and built from
              scratch to fit the space, the budget, and the goal.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-steel-900/10 bg-steel-900/10 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal
                key={pillar.title}
                delay={i * 70}
                className="bg-concrete-50 p-7 transition-colors duration-300 hover:bg-concrete-100"
              >
                <h3 className="font-display text-lg font-semibold text-steel-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-500">
                  {pillar.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
