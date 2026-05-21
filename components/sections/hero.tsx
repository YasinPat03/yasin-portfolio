"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/content/profile";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 8 };
  const animate = reduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section id="hero" className="scroll-mt-24 pt-20 pb-16 md:pt-32 md:pb-24">
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-4 font-mono text-sm md:text-base text-muted-foreground">
          {profile.tagline}
        </p>
        <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/90 leading-relaxed">
          {profile.bio}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/40"
          >
            <GithubIcon className="size-4" />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/40"
          >
            <LinkedinIcon className="size-4" />
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/40"
          >
            <Mail className="size-4" />
          </Link>
          <Link
            href={`tel:${profile.phone}`}
            aria-label="Phone"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/40"
          >
            <Phone className="size-4" />
          </Link>
          <Button asChild variant="outline" size="lg" className="ml-1">
            <a href={profile.cvPath} download>
              <Download className="size-4" />
              Download CV
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
