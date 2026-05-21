"use client";

import * as React from "react";
import Link from "next/link";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#education", label: "Education" },
  { href: "#skinfast", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 hidden border-b border-border/60 bg-background/80 backdrop-blur md:block">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-6 md:px-8">
        <Link
          href="#hero"
          className="font-mono text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          yasin.patel
        </Link>
        <ul className="flex items-center gap-1">
          {links.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
