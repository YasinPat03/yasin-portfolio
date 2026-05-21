import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { SkinfastCard } from "@/components/skinfast-card";
import { GithubIcon } from "@/components/icons";
import { skinfast } from "@/content/skinfast";

export function SkinFast() {
  return (
    <Section id="skinfast" eyebrow="02 · centerpiece" title={skinfast.title}>
      <p className="font-mono text-xs text-muted-foreground mb-6">
        {skinfast.eyebrow}
      </p>

      <p className="max-w-2xl text-base md:text-lg leading-relaxed text-foreground/90">
        {skinfast.narrative}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skinfast.stack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-mono">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-10">
        <SkinfastCard
          poster={skinfast.poster}
          video={skinfast.video}
          href={skinfast.liveUrl ?? skinfast.githubUrl}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <Link href={skinfast.githubUrl} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="size-4" />
            GitHub
          </Link>
        </Button>
        {skinfast.liveUrl && (
          <Button asChild>
            <Link href={skinfast.liveUrl} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="size-4" />
              skinfast.app
            </Link>
          </Button>
        )}
      </div>

      <div className="mt-16 space-y-12">
        {skinfast.sections.map((section) => (
          <article key={section.heading} className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-primary/80">
              {section.heading}
            </p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight">
              {section.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">
              {section.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
