"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id: string;
  eyebrow?: string;
  title?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  className,
  children,
  ...rest
}: SectionProps) {
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? false : { opacity: 0, y: 8 };
  const whileInView = reduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 md:py-24", className)}
      {...rest}
    >
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {(eyebrow || title) && (
          <header className="mb-8 md:mb-10">
            {eyebrow && (
              <p className="font-mono text-xs uppercase tracking-widest text-primary/80">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </motion.div>
    </section>
  );
}
