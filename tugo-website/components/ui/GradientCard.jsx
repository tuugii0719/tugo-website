"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * GradientCard — dark-theme adaptation for Wild Mongolia with Tugi.
 * Adapted from a light-mode shadcn-style component: removed cva + cn,
 * inlined variants as plain maps, and rebuilt the gradients on top of
 * the night/sand palette so it sits inside the existing site design.
 *
 * Props:
 *   gradient    — "amber" | "rose" | "emerald" | "sky" (color tone)
 *   badgeText   — kicker copy above the title
 *   badgeColor  — hex for the dot inside the badge
 *   title       — card heading
 *   description — body text
 *   ctaText     — link label (optional)
 *   ctaHref     — link target (optional)
 *   Icon        — lucide-react icon component, used as a soft decorative shape
 */

const gradientMap = {
  amber:   "bg-gradient-to-br from-amber-500/12 via-amber-700/5 to-night-900",
  rose:    "bg-gradient-to-br from-rose-500/12 via-rose-700/5 to-night-900",
  emerald: "bg-gradient-to-br from-emerald-500/12 via-emerald-700/5 to-night-900",
  sky:     "bg-gradient-to-br from-sky-500/12 via-sky-700/5 to-night-900",
  violet:  "bg-gradient-to-br from-violet-500/12 via-violet-700/5 to-night-900",
  teal:    "bg-gradient-to-br from-teal-500/12 via-teal-700/5 to-night-900",
};

const accentBorderMap = {
  amber:   "border-l-amber-400/70 hover:border-l-amber-300",
  rose:    "border-l-rose-400/70 hover:border-l-rose-300",
  emerald: "border-l-emerald-400/70 hover:border-l-emerald-300",
  sky:     "border-l-sky-400/70 hover:border-l-sky-300",
  violet:  "border-l-violet-400/70 hover:border-l-violet-300",
  teal:    "border-l-teal-400/70 hover:border-l-teal-300",
};

const iconColorMap = {
  amber:   "text-amber-200",
  rose:    "text-rose-200",
  emerald: "text-emerald-200",
  sky:     "text-sky-200",
  violet:  "text-violet-200",
  teal:    "text-teal-200",
};

export function GradientCard({
  className = "",
  gradient = "amber",
  badgeText,
  badgeColor,
  title,
  description,
  ctaText,
  ctaHref,
  Icon,
}) {
  const cardAnim = { rest: { y: 0 }, hover: { y: -5 } };
  const iconAnim = {
    rest:  { scale: 1,    rotate: 0,  opacity: 0.10 },
    hover: { scale: 1.12, rotate: 8,  opacity: 0.18 },
  };

  return (
    <motion.div
      variants={cardAnim}
      initial="rest"
      whileHover="hover"
      animate="rest"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <div
        className={`
          relative flex h-full flex-col justify-between overflow-hidden rounded-2xl
          border border-sand-800/40 border-l-2 ${accentBorderMap[gradient] || ""}
          ${gradientMap[gradient] || ""}
          p-8 md:p-9
          transition-shadow duration-300
          hover:shadow-2xl hover:shadow-black/40
          ${className}
        `}
      >
        {/* Decorative oversized icon, bottom-right, low opacity, rotates on hover */}
        {Icon && (
          <motion.div
            variants={iconAnim}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="absolute -right-6 -bottom-6 pointer-events-none select-none"
            aria-hidden="true"
          >
            <Icon
              className={`${iconColorMap[gradient] || "text-sand-200"} w-44 h-44 md:w-56 md:h-56`}
              strokeWidth={1}
            />
          </motion.div>
        )}

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Badge */}
          {badgeText && (
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-sand-800/40 bg-night-950/60 px-3 py-1 text-[11px] tracking-[0.12em] uppercase font-medium text-sand-200 backdrop-blur-sm">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: badgeColor }}
              />
              {badgeText}
            </div>
          )}

          {/* Title + description */}
          <div className="flex-grow">
            <h3 className="mb-3 font-display text-2xl md:text-3xl leading-snug text-sand-100">
              {title}
            </h3>
            <p className="max-w-md text-[15px] leading-relaxed text-sand-300">
              {description}
            </p>
          </div>

          {/* CTA */}
          {ctaText && ctaHref && (
            <Link
              href={ctaHref}
              className="group mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-sand-100 hover:text-sand-300 transition-colors"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
