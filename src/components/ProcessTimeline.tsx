import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Sketch",
    body: "Rough concepts on paper first — mechanisms and grips explored before anything opens in CAD.",
  },
  {
    n: "02",
    title: "Prototype",
    body: "Mid-fi builds that test one assumption at a time: a hard shell standing in for a socket, tape standing in for a seam.",
  },
  {
    n: "03",
    title: "Model",
    body: "Parametric CAD and FEA turn the working idea into a geometry that can actually be manufactured.",
  },
  {
    n: "04",
    title: "Test",
    body: "Real hands, real feedback — a D-QUEST questionnaire, a Sollerman hand test, or just an hour on a tennis court.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="intro" className="scroll-mt-24 px-6 py-24 lg:px-24 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-start">
        <div className="flex gap-6">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-wood-soft sm:h-36 sm:w-36">
            <Image
              src="/images/portrait/yoran.jpg"
              alt="Portrait of Yoran Zonneveld"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-stone">
              How I work
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-stone-dim">
              I like harmonizing sustainability, functionality and aesthetics
              — but I lean hardest on the technical side of that: sketching,
              3D-modelling and prototyping. Outside the studio, I spent three
              years on the TOC, ID&rsquo;s technical support committee, most
              recently designing the stage, sound and lighting for IO
              Festival 2023 &mdash; the largest student-run festival in
              Europe.
            </p>
          </div>
        </div>

        <ol className="grid gap-8 sm:grid-cols-2">
          {steps.map((step) => (
            <li key={step.n} className="border-l border-wood-soft pl-5">
              <span className="font-mono text-xs text-tick">{step.n}</span>
              <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-medium text-stone">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-dim">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
