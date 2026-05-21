import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="04" title="Technical Skills">
      <dl className="flex flex-col gap-6">
        {skills.map((group) => (
          <div key={group.label} className="grid grid-cols-1 gap-2 md:grid-cols-[180px_1fr] md:gap-6">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground pt-1">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary" className="font-mono">
                  {item}
                </Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
