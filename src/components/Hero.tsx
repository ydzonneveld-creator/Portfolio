import { SignatureHero } from "./SignatureHero";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-center gap-12 px-6 pt-28 pb-16 lg:flex-row lg:items-center lg:gap-8 lg:px-24 lg:pt-16">
      <div className="max-w-xl lg:flex-1">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-wood">
          Yoran Zonneveld &mdash; Industrial Design Engineer
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.05] tracking-tight text-stone sm:text-5xl lg:text-6xl">
          Design that survives contact with a{" "}
          <span className="text-signal">real prototype.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-dim">
          MSc Integrated Product Design at TU Delft, with an exchange at
          Politecnico di Milano. Five projects, one working method: sketch,
          model, build it, test it on someone who isn&rsquo;t you.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wide text-wood-soft">
          <span>MSc IPD, TU Delft &mdash; 2023&ndash;2026</span>
          <span>Exchange, Politecnico di Milano</span>
        </div>
      </div>

      <div className="w-full max-w-md lg:max-w-none lg:flex-1">
        <SignatureHero />
      </div>
    </section>
  );
}
