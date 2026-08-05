"use client";

import { motion } from "framer-motion";
import { SignatureHero } from "./SignatureHero";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-center gap-12 px-6 pt-28 pb-16 lg:flex-row lg:items-center lg:gap-8 lg:px-24 lg:pt-16">
      <motion.div
        className="max-w-xl lg:flex-1"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-silver-dim"
        >
          Yoran Zonneveld &mdash; Industrial Design Engineer
        </motion.p>
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mt-6 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          Design that survives contact with a{" "}
          <span className="text-gradient-luxury">real prototype.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-md text-lg leading-relaxed text-silver"
        >
          MSc Integrated Product Design at TU Delft, with an exchange at
          Politecnico di Milano. Five projects, one working method: sketch,
          model, build it, test it on someone who isn&rsquo;t you.
        </motion.p>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wide text-silver-dim"
        >
          <span>MSc IPD, TU Delft &mdash; 2023&ndash;2026</span>
          <span>Exchange, Politecnico di Milano</span>
        </motion.div>
      </motion.div>

      <div className="w-full max-w-md lg:max-w-none lg:flex-1">
        <SignatureHero />
      </div>
    </section>
  );
}
