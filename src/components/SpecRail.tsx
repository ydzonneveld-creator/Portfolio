"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";

const sections = [
  { id: "intro", label: "Approach", index: "00" },
  ...projects.map((p) => ({ id: p.slug, label: p.title.replace(/^the /i, ""), index: p.index })),
  { id: "skills", label: "Tools", index: "06" },
  { id: "contact", label: "Contact", index: "07" },
];

export function SpecRail() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-0 top-0 z-40 hidden h-dvh w-14 flex-col items-center justify-center border-r border-graphite lg:flex xl:w-16"
    >
      <ul className="flex flex-col gap-5">
        {sections.map((section) => {
          const isActive = section.id === active;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="group flex flex-col items-center gap-1 font-mono text-[10px] tracking-wide"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`h-6 w-px transition-colors ${isActive ? "bg-silver" : "bg-graphite group-hover:bg-silver-dim"}`}
                />
                <span className={isActive ? "text-ink" : "text-silver-dim/70 group-hover:text-silver-dim"}>
                  {section.index}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
