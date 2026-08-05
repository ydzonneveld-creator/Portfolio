"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

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

function barHeight(progress: number, start: number, end: number) {
  if (progress < start) return 0;
  if (progress > end) return 100;
  return ((progress - start) / (end - start)) * 100;
}

export function ProcessTimeline() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.94, 1.02]);

  return (
    <section id="intro" ref={ref} className="relative scroll-mt-24" style={{ height: reduced ? "auto" : "170vh" }}>
      <div className="sticky top-0 flex min-h-dvh flex-col justify-center gap-14 px-6 py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-24">
        <div className="flex gap-6 lg:max-w-xs lg:flex-col lg:gap-0">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-graphite sm:h-36 sm:w-36">
            <Image src="/images/portrait/yoran.jpg" alt="Portrait of Yoran Zonneveld" fill sizes="144px" className="object-cover" />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-ink lg:mt-6">
              How I work
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-silver lg:max-w-none">
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

        <ol className="grid flex-1 gap-8 sm:grid-cols-2">
          {steps.map((step, i) => {
            const start = i / steps.length;
            const end = (i + 1) / steps.length;
            const height = reduced ? 100 : barHeight(progress, start, end);
            const isActive = height > 0;
            return (
              <li key={step.n} className="flex gap-4">
                <div className="relative w-px shrink-0 bg-graphite">
                  <motion.div
                    className="absolute inset-x-0 top-0 w-px bg-silver"
                    style={{ height: `${height}%` }}
                  />
                </div>
                <div className={`transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-40"}`}>
                  <span className="font-mono text-xs text-silver-dim">{step.n}</span>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-medium text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <motion.div
          className="hidden w-40 shrink-0 xl:block"
          style={{ scale: reduced ? 1 : imageScale }}
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-base-2">
            <Image
              src="/images/portrait/yoran.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="160px"
              className="object-cover grayscale"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
