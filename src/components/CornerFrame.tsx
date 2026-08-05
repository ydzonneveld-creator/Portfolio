"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const BRACKET = 22;

type Corner = {
  key: string;
  h: CSSProperties;
  v: CSSProperties;
  hOrigin: string;
  vOrigin: string;
};

const corners: Corner[] = [
  {
    key: "tl",
    h: { top: 0, left: 0, width: BRACKET, height: 2 },
    v: { top: 0, left: 0, width: 2, height: BRACKET },
    hOrigin: "left",
    vOrigin: "top",
  },
  {
    key: "tr",
    h: { top: 0, right: 0, width: BRACKET, height: 2 },
    v: { top: 0, right: 0, width: 2, height: BRACKET },
    hOrigin: "right",
    vOrigin: "top",
  },
  {
    key: "bl",
    h: { bottom: 0, left: 0, width: BRACKET, height: 2 },
    v: { bottom: 0, left: 0, width: 2, height: BRACKET },
    hOrigin: "left",
    vOrigin: "bottom",
  },
  {
    key: "br",
    h: { bottom: 0, right: 0, width: BRACKET, height: 2 },
    v: { bottom: 0, right: 0, width: 2, height: BRACKET },
    hOrigin: "right",
    vOrigin: "bottom",
  },
];

export function CornerFrame({
  children,
  tag,
}: {
  children: ReactNode;
  tag?: string;
}) {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative overflow-hidden">{children}</div>

      {corners.map(({ key, h, v, hOrigin, vOrigin }) => (
        <span key={key} aria-hidden="true">
          <motion.span
            className="absolute bg-signal"
            style={{ ...h, transformOrigin: hOrigin }}
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.span
            className="absolute bg-signal"
            style={{ ...v, transformOrigin: vOrigin }}
            variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
        </span>
      ))}

      {tag ? (
        <motion.span
          variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute -bottom-7 left-0 font-mono text-[11px] uppercase tracking-wide text-stone-dim"
        >
          {tag}
        </motion.span>
      ) : null}
    </motion.div>
  );
}
