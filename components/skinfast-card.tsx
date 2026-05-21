"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  poster: string;
  video?: string;
  href?: string;
  alt?: string;
};

export function SkinfastCard({ poster, video, href, alt = "SkinFast preview" }: Props) {
  const reduceMotion = useReducedMotion();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = React.useState(false);

  const hasVideo = Boolean(video) && !reduceMotion;

  const onEnter = React.useCallback(() => {
    if (!hasVideo) return;
    setHovered(true);
    const el = videoRef.current;
    if (el) {
      el.play().catch(() => {});
    }
  }, [hasVideo]);

  const onLeave = React.useCallback(() => {
    if (!hasVideo) return;
    setHovered(false);
    const el = videoRef.current;
    if (el) {
      el.pause();
    }
  }, [hasVideo]);

  const hoverAnim = reduceMotion
    ? undefined
    : { y: -4, scale: 1.005 };

  const card = (
    <motion.div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      whileHover={hoverAnim}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card",
        "aspect-[4/3] md:aspect-[16/9]",
        "shadow-lg shadow-black/20 transition-shadow duration-300",
        "hover:shadow-2xl hover:shadow-orange-500/10"
      )}
    >
      <Image
        src={poster}
        alt={alt}
        fill
        priority
        sizes="(min-width: 768px) 768px, 100vw"
        className={cn(
          "object-cover transition-opacity duration-300",
          hasVideo && hovered ? "opacity-0" : "opacity-100"
        )}
      />
      {hasVideo && video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className={cn(
            "absolute inset-0 hidden h-full w-full object-cover transition-opacity duration-300 md:block",
            hovered ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </Link>
    );
  }
  return card;
}
