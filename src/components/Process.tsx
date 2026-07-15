import { processSteps } from "@/data/process";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="bg-concrete-50 py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-5">How it works</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-steel-900 sm:text-4xl">
              A straightforward path from idea to installed.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-500">
              You don't need finished drawings or a fixed plan to get started.
              Most projects begin with a rough idea — we take it from there.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-steel-900/10 bg-steel-900/10 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 70}
              className="relative flex flex-col bg-concrete-50 p-6"
            >
              <span className="font-mono text-sm text-copper-500">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-steel-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-500">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10">
          <a href="#quote" className="btn-primary">
            Start with a conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
