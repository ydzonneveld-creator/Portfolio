import Image from "next/image";
import type { Project } from "@/data/projects";
import { CornerFrame } from "./CornerFrame";

export function ProjectSection({ project, reversed }: { project: Project; reversed?: boolean }) {
  const [lead, ...rest] = project.images;

  return (
    <section
      id={project.slug}
      className="scroll-mt-24 border-t border-wood-soft/40 px-6 py-24 lg:px-24 lg:py-32"
    >
      <div
        className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="max-w-md">
          <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-wide text-wood">
            <span>{project.index}</span>
            <span>{project.type}</span>
            <span>&middot;</span>
            <span>{project.year}</span>
          </div>

          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium text-stone sm:text-4xl">
            {project.title}
          </h2>
          <p className="mt-2 text-lg text-stone-dim italic">{project.tagline}</p>

          <dl className="mt-6 flex flex-col gap-1 font-mono text-xs text-wood-soft">
            <div className="flex gap-2">
              <dt className="uppercase">Focus</dt>
              <dd className="text-stone-dim">{project.tag}</dd>
            </div>
            {project.partner ? (
              <div className="flex gap-2">
                <dt className="uppercase">With</dt>
                <dd className="text-stone-dim">{project.partner}</dd>
              </div>
            ) : null}
          </dl>

          <div className="mt-8 flex flex-col gap-4 text-[15px] leading-relaxed text-stone-dim">
            {project.summary.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-signal pl-4 text-base leading-relaxed text-stone">
            {project.outcome}
          </p>
        </div>

        <div className="flex flex-col gap-14">
          <CornerFrame tag={project.tag}>
            <div className="relative aspect-[4/3] w-full bg-base-2">
              <Image
                src={lead.src}
                alt={lead.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </CornerFrame>

          {rest.length ? (
            <div className={`grid gap-6 ${rest.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {rest.map((image) => (
                <CornerFrame key={image.src}>
                  <div className="relative aspect-[4/3] w-full bg-base-2">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </CornerFrame>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
