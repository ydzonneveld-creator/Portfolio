"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const BRACKET = 22;

type Corner = {
  key: string;
  h: CSSProperties;
  v: CSSProperties;
  hOrigin: string;
  vOrigin: string;
};

const corners: Corner[] = [
  { key: "tl", h: { top: 0, left: 0, width: BRACKET, height: 2 }, v: { top: 0, left: 0, width: 2, height: BRACKET }, hOrigin: "left", vOrigin: "top" },
  { key: "tr", h: { top: 0, right: 0, width: BRACKET, height: 2 }, v: { top: 0, right: 0, width: 2, height: BRACKET }, hOrigin: "right", vOrigin: "top" },
  { key: "bl", h: { bottom: 0, left: 0, width: BRACKET, height: 2 }, v: { bottom: 0, left: 0, width: 2, height: BRACKET }, hOrigin: "left", vOrigin: "bottom" },
  { key: "br", h: { bottom: 0, right: 0, width: BRACKET, height: 2 }, v: { bottom: 0, right: 0, width: 2, height: BRACKET }, hOrigin: "right", vOrigin: "bottom" },
];

export function ImageReveal({
  src,
  alt,
  width,
  height,
  tag,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  tag?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="relative overflow-hidden bg-base-2">
        <motion.div
          variants={{
            hidden: { filter: "grayscale(1) brightness(0.75)", opacity: 0, scale: 1.02 },
            visible: { filter: "grayscale(0) brightness(1)", opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="block h-auto w-full"
            priority={priority}
          />
        </motion.div>
      </div>

      {corners.map(({ key, h, v, hOrigin, vOrigin }) => (
        <span key={key} aria-hidden="true">
          <motion.span
            className="absolute bg-silver"
            style={{ ...h, transformOrigin: hOrigin }}
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.span
            className="absolute bg-silver"
            style={{ ...v, transformOrigin: vOrigin }}
            variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </span>
      ))}

      {tag ? (
        <motion.span
          variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute -bottom-7 left-0 font-mono text-[11px] uppercase tracking-wide text-silver-dim"
        >
          {tag}
        </motion.span>
      ) : null}
    </motion.div>
  );
}
