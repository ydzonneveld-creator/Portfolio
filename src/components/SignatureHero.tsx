"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

const HEX_POINTS = [
  [470, 300],
  [385, 152.8],
  [215, 152.8],
  [130, 300],
  [215, 447.2],
  [385, 447.2],
];

const HEX_PATH = `M${HEX_POINTS.map((p) => p.join(",")).join(" L")} Z`;

export function SignatureHero() {
  const reduced = useReducedMotion();
  const [drawn, setDrawn] = useState(reduced);

  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      <motion.div
        className="absolute inset-[12%]"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: drawn ? 1 : 0, scale: drawn ? 1 : 0.94 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <Image
          src="/images/hive/hero.jpg"
          alt="the Hive bluetooth speaker, a hexagonal housing prototype, shown in full"
          fill
          sizes="(min-width: 1024px) 560px, 90vw"
          className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          priority
        />
      </motion.div>

      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <line
          x1={60}
          y1={300}
          x2={540}
          y2={300}
          stroke="var(--color-graphite)"
          strokeWidth={1}
          strokeDasharray="2 6"
        />
        <line
          x1={300}
          y1={60}
          x2={300}
          y2={540}
          stroke="var(--color-graphite)"
          strokeWidth={1}
          strokeDasharray="2 6"
        />

        <motion.path
          d={HEX_PATH}
          fill="none"
          stroke="var(--color-silver)"
          strokeWidth={2}
          initial={{ pathLength: 0, opacity: 1 }}
          animate={
            reduced
              ? { pathLength: 1, opacity: 0.6 }
              : { pathLength: 1, opacity: drawn ? 0.5 : 1 }
          }
          transition={{ pathLength: { duration: 1.6, ease: "easeInOut" }, opacity: { duration: 0.8, delay: 1.6 } }}
          onAnimationComplete={() => setDrawn(true)}
        />

        <line x1={130} y1={500} x2={470} y2={500} stroke="var(--color-silver-dim)" strokeWidth={1} />
        <line x1={130} y1={492} x2={130} y2={508} stroke="var(--color-silver-dim)" strokeWidth={1} />
        <line x1={470} y1={492} x2={470} y2={508} stroke="var(--color-silver-dim)" strokeWidth={1} />
        <text x={300} y={524} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-silver-dim)">
          SECTION A&ndash;A
        </text>

        <circle cx={300} cy={300} r={14} fill="none" stroke="var(--color-silver-dim)" strokeWidth={1.5} />
        <line x1={314} y1={300} x2={385} y2={230} stroke="var(--color-silver-dim)" strokeWidth={1} />
        <text x={392} y={226} fontFamily="var(--font-mono)" fontSize={13} fill="var(--color-silver-dim)">
          DETAIL
        </text>
      </svg>
    </div>
  );
}
