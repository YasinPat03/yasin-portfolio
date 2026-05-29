import Link from "next/link";
import { Mail } from "lucide-react";
import { Section } from "@/components/section";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <Section id="contact" eyebrow="05" title="Get in touch">
      <p className="max-w-xl text-base text-foreground/90 leading-relaxed">
        Open to internships and full-time roles in software engineering. The
        fastest way to reach me is email.
      </p>

      <div className="mt-8 flex flex-col gap-3 text-sm">
        <Link
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
        >
          <Mail className="size-4 text-muted-foreground" />
          <span className="font-mono">{profile.email}</span>
        </Link>
        <Link
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
        >
          <GithubIcon className="size-4 text-muted-foreground" />
          <span className="font-mono">github.com/YasinPat03</span>
        </Link>
        <Link
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
        >
          <LinkedinIcon className="size-4 text-muted-foreground" />
          <span className="font-mono">linkedin.com/in/yasin</span>
        </Link>
      </div>

      <footer className="mt-16 border-t border-border pt-6 text-xs text-muted-foreground">
        Built with Next.js, shadcn/ui · deployed on Vercel
      </footer>
    </Section>
  );
}
