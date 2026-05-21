import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectRow({ project }: { project: Project }) {
  const content = (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto] md:gap-6">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-base font-medium">{project.title}</h3>
          {project.href && (
            <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
          )}
        </div>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {project.stack.join(" · ")}
        </p>
        <p className="mt-3 text-sm text-foreground/90 leading-relaxed max-w-2xl">
          {project.summary}
        </p>
      </div>
      <p className="font-mono text-xs text-muted-foreground md:pt-1 md:text-right shrink-0">
        {project.date}
      </p>
    </div>
  );

  if (project.href) {
    return (
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block py-6 transition-colors"
      >
        {content}
      </Link>
    );
  }
  return <div className="py-6">{content}</div>;
}
