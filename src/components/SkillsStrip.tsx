"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "CAD & parametric",
    items: ["Rhino + Grasshopper", "SolidWorks", "3D scanning"],
  },
  {
    label: "Fabrication",
    items: ["FDM & paste 3D printing", "Laser cutting", "Soft-goods sewing"],
  },
  {
    label: "Engineering & testing",
    items: ["FEA (shrinkage / warping)", "Injection-mold DFM", "D-QUEST & Sollerman testing"],
  },
  {
    label: "Communication",
    items: ["Sketching", "Rendering", "Stakeholder interviews"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SkillsStrip() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-graphite px-6 py-24 lg:px-24 lg:py-32">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-ink">
          Tools I reach for
        </h2>
        <span className="font-mono text-xs uppercase tracking-wide text-silver-dim">06</span>
      </div>

      <motion.div
        className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {groups.map((group) => (
          <motion.div key={group.label} variants={fadeUp} transition={{ duration: 0.6 }}>
            <h3 className="font-mono text-xs uppercase tracking-wide text-silver-dim">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-[15px] text-silver">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
