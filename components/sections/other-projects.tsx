import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/section";
import { ProjectRow } from "@/components/project-row";
import { projects } from "@/content/projects";

export function OtherProjects() {
  return (
    <Section id="other-projects" eyebrow="02b" title="Other projects" className="pt-0 md:pt-0">
      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <div key={project.title}>
            {idx > 0 && <Separator />}
            <ProjectRow project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
}
