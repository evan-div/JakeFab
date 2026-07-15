import { capabilities } from "@/data/capabilities";
import { Reveal } from "./Reveal";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="grain relative overflow-hidden bg-steel-950 py-20 text-concrete-50 md:py-28"
    >
      <div className="container-page relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-5">Capabilities</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              A wide range of work, all built to order.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-concrete-100/70">
              These are the projects that come up most often — but the list
              isn't exhaustive. If it can be cut, welded, formed, or finished in
              metal, it's worth a conversation.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-concrete-50/10 bg-concrete-50/10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.title}
              delay={(i % 4) * 60}
              className="group relative bg-steel-950 p-7 transition-colors duration-300 hover:bg-steel-900"
            >
              <span className="font-mono text-xs text-copper-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-concrete-100/65">
                {cap.description}
              </p>
              <span
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-copper-500 transition-all duration-500 ease-premium group-hover:w-full"
                aria-hidden="true"
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-concrete-100/60">
            Don't see your project?{" "}
            <a
              href="#quote"
              className="font-medium text-copper-400 underline-offset-4 hover:underline"
            >
              Tell us what you have in mind
            </a>{" "}
            — most of the best work starts as something that isn't on a list.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
