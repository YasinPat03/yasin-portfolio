import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { education } from "@/content/education";

export function Education() {
  return (
    <Section id="education" eyebrow="01" title="Education">
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <Card key={item.school} size="sm">
            <CardContent>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium leading-snug">
                    {item.school}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.degree}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-xs text-muted-foreground">
                    {item.dateRange}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground/70">
                    {item.location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
