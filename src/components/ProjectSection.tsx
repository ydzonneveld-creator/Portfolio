"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ImageReveal } from "./ImageReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectSection({ project, reversed, priority }: { project: Project; reversed?: boolean; priority?: boolean }) {
  const [lead, ...rest] = project.images;

  return (
    <section
      id={project.slug}
      className="scroll-mt-24 border-t border-graphite px-6 py-24 lg:px-24 lg:py-32"
    >
      <div
        className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <motion.div
          className="max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-wide text-silver-dim">
            <span>{project.index}</span>
            <span>{project.type}</span>
            <span>&middot;</span>
            <span>{project.year}</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium text-ink sm:text-4xl"
          >
            {project.title}
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-2 text-lg italic text-silver">
            {project.tagline}
          </motion.p>

          <motion.dl variants={fadeUp} transition={{ duration: 0.6 }} className="mt-6 flex flex-col gap-1 font-mono text-xs text-silver-dim">
            <div className="flex gap-2">
              <dt className="uppercase">Focus</dt>
              <dd>{project.tag}</dd>
            </div>
            {project.partner ? (
              <div className="flex gap-2">
                <dt className="uppercase">With</dt>
                <dd>{project.partner}</dd>
              </div>
            ) : null}
          </motion.dl>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 flex flex-col gap-4 text-[15px] leading-relaxed text-silver">
            {project.summary.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 border-l-2 pl-4 text-base leading-relaxed text-ink"
            style={{ borderColor: "var(--color-silver)" }}
          >
            {project.outcome}
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-16">
          <ImageReveal src={lead.src} alt={lead.alt} width={lead.width} height={lead.height} tag={project.tag} priority={priority} />

          {rest.length ? (
            <div className={`grid gap-10 ${rest.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {rest.map((image) => (
                <ImageReveal key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
