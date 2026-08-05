"use client";

import { motion } from "framer-motion";

const cv = [
  {
    label: "Education",
    items: [
      "MSc Integrated Product Design, TU Delft — 2023–2026",
      "Exchange, Politecnico di Milano — 2025",
      "BSc Industrial Design Engineering, TU Delft — 2019–2022",
    ],
  },
  {
    label: "Experience",
    items: [
      "Product Development, Jelt Design — 2024–2025",
      "Marketing & Communication, TU Delft Science Centre — 2024–2025",
      "TOC (technical support committee), Studievereniging ID — 2022–2023",
    ],
  },
  {
    label: "Languages",
    items: ["Dutch — native", "English — proficient", "French & Spanish — intermediate"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-graphite px-6 py-24 lg:px-24 lg:py-32">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} transition={{ staggerChildren: 0.1 }}>
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex items-baseline justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-ink">
            Let&rsquo;s talk
          </h2>
          <span className="font-mono text-xs uppercase tracking-wide text-silver-dim">07</span>
        </motion.div>

        <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-6 max-w-lg text-lg leading-relaxed text-silver">
          I&rsquo;m looking for a design role where prototypes get built, not
          just rendered. If that&rsquo;s what you&rsquo;re hiring for, I&rsquo;d
          like to hear from you.
        </motion.p>

        <motion.a
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          href="mailto:y.d.zonneveld@student.tudelft.nl"
          className="text-gradient-luxury mt-8 inline-block break-all font-[family-name:var(--font-display)] text-xl font-medium underline decoration-graphite underline-offset-8 hover:decoration-silver sm:text-2xl md:text-3xl"
        >
          y.d.zonneveld@student.tudelft.nl
        </motion.a>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-10 border-t border-graphite pt-12 sm:grid-cols-3"
        >
          {cv.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-silver-dim">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-silver">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-16 font-mono text-[11px] uppercase tracking-wide text-silver-dim">
          Yoran Zonneveld &mdash; Delft, NL
        </motion.p>
      </motion.div>
    </footer>
  );
}
