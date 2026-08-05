import { Hero } from "@/components/Hero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillsStrip } from "@/components/SkillsStrip";
import { SiteFooter } from "@/components/SiteFooter";
import { SpecRail } from "@/components/SpecRail";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <SpecRail />
      <main className="lg:pl-14 xl:pl-16">
        <Hero />
        <ProcessTimeline />
        {projects.map((project, i) => (
          <ProjectSection key={project.slug} project={project} reversed={i % 2 === 1} priority={i === 0} />
        ))}
        <SkillsStrip />
        <SiteFooter />
      </main>
    </>
  );
}
