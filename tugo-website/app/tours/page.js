"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

// ============================================================================
// TOUR DATA — 2026 SEASON (Jun–Aug)
// Maximized revenue mix: short city tours + mid festivals + long expeditions,
// with 1–2 day rest buffers between tours.
// ============================================================================

// Each tour has:
//   id      — unique React key
//   slug    — URL destination (multiple departures can share one slug)
//   Tours are ordered so specific, shorter trips appear BEFORE long
//   windows like North & Central Loop so they take visual priority on
//   days where ranges overlap.
const tours = [
  {
    id: "terelj-jun",
    slug: "terelj-escape",
    title: "Terelj Escape",
    emoji: "🌲",
    dates: "June 4 – 6",
    days: 3,
    price: "$350",
    groupSize: "6–8",
    status: "available",
    description:
      "Any age. Season opener. Gorkhi-Terelj weekend — we base at a family ger camp and explore the park on our own rhythm. Turtle Rock, Aryabal Monastery, horseback through alpine meadows, hiking, khorkhog. Lots of free time to wander at your own pace.",
    highlights: ["Turtle Rock", "Aryabal Monastery", "Khorkhog", "Ger stay"],
    theme: "terelj",
    startMonth: 5,
    startDay: 4,
    endMonth: 5,
    endDay: 6,
  },
  {
    id: "southern-gobi",
    slug: "southern-gobi",
    title: "Southern Gobi + Central",
    emoji: "🏜️",
    dates: "June 8 – 18",
    days: 11,
    price: "$1,100",
    groupSize: "5–7",
    status: "available",
    description:
      "Eleven days through Umnugobi and central Mongolia — Yoliin Am ice canyon, desert nights, camels at Khongoriin Els, then central Mongolia on the way back with hot springs, horse riding, and hiking. The deeper version of the Gobi loop.",
    highlights: ["Yoliin Am", "Desert camp", "Khongoriin Els", "Hot springs", "Horse riding"],
    theme: "southern-gobi",
    startMonth: 5,
    startDay: 8,
    endMonth: 5,
    endDay: 18,
  },
  {
    id: "khagiin-khar-nuur",
    slug: "khagiin-khar-nuur",
    title: "Horse Trek · Khagiin Khar Nuur",
    emoji: "🐎",
    dates: "June 22 – 27",
    days: 6,
    price: "$700",
    groupSize: "5–7",
    status: "sold_out",
    description:
      "Starting from UB. Horseback into the Khan Khentii taiga to Khagiin Khar Nuur — the Pearl of the Taiga. Ger stays, tent camps, riding through forest and over Khavirga Pass, a night by the alpine lake.",
    highlights: ["Terelj ger", "Khavirga Pass", "Khagiin Khar Lake", "Chinggis statue"],
    theme: "khentii",
    startMonth: 5,
    startDay: 22,
    endMonth: 5,
    endDay: 27,
  },
  {
    id: "playtime",
    slug: "playtime",
    title: "Playtime Music Festival",
    emoji: "🎶",
    dates: "July 1 – 4",
    days: 4,
    price: "$650",
    groupSize: "6–8",
    status: "available",
    description:
      "Mongolia's biggest music festival — Molchat Doma, Kings of Convenience, DIIV, Stereolab, Hyukoh. Festival ticket, transfers, camping, and a filling breakfast each morning — all in. Lunch and dinner are on you (festival has stalls). Pre-party Wednesday, three days at Playtime Field.",
    highlights: ["Festival ticket inc.", "3-night camping", "Pre-party", "Filling breakfast"],
    theme: "playtime",
    startMonth: 6,
    startDay: 1,
    endMonth: 6,
    endDay: 4,
  },
  {
    id: "naadam",
    slug: "naadam",
    title: "Naadam Festival",
    emoji: "🏇",
    dates: "July 8 – 14",
    days: 7,
    price: "$700",
    groupSize: "5–7",
    status: "available",
    description:
      "Chill take on Naadam with deeper cultural immersion — local village Naadams, horse racing, wrestling, holiday foods and costumes, Zavkhan province, Terkhiin Tsagaan Nuur, Khorgo volcano, Tsenkher hot springs, nomadic family stays. Route bends with the festival schedule.",
    highlights: ["Horse racing", "Wrestling", "Zavkhan", "Terkh Lake", "Hot springs"],
    theme: "naadam",
    startMonth: 6,
    startDay: 8,
    endMonth: 6,
    endDay: 14,
  },
  {
    id: "terelj-jul",
    slug: "terelj-escape",
    title: "Terelj Escape",
    emoji: "🌲",
    dates: "July 16 – 18",
    days: 3,
    price: "$350",
    groupSize: "6–8",
    status: "available",
    description:
      "Second Terelj departure, right after Naadam. Same idea — family ger camp as base, Turtle Rock, Aryabal Monastery, horseback, hiking, khorkhog. Free time to explore the park at your own pace.",
    highlights: ["Turtle Rock", "Aryabal Monastery", "Khorkhog", "Ger stay"],
    theme: "terelj",
    startMonth: 6,
    startDay: 16,
    endMonth: 6,
    endDay: 18,
  },
  {
    id: "altai-aug",
    slug: "altai-tavan-bogd",
    title: "Altai Tavan Bogd",
    emoji: "🏔️",
    dates: "Aug 3 – 8",
    days: 6,
    price: "$900",
    groupSize: "5–7",
    status: "available",
    description:
      "Second Altai departure — same route, same everything included. Ölgii flight, Khoton Lake, eagle hunters, horseback to Baga Turgen waterfall, Potanin Glacier, petroglyphs. Co-hosted with a local Altai guide.",
    highlights: ["UB flight inc.", "Khoton Lake", "Kazakh eagles", "Potanin Glacier"],
    theme: "altai",
    startMonth: 7,
    startDay: 3,
    endMonth: 7,
    endDay: 8,
  },
  {
    id: "terelj-aug",
    slug: "terelj-escape",
    title: "Terelj Escape",
    emoji: "🌲",
    dates: "Aug 11 – 13",
    days: 3,
    price: "$350",
    groupSize: "6–8",
    status: "available",
    description:
      "Third Terelj weekend — end-of-summer departure. Same gentle setup — family ger camp as base, Turtle Rock, Aryabal Monastery, horseback, hiking, khorkhog. Plenty of free time to explore on your own.",
    highlights: ["Turtle Rock", "Aryabal Monastery", "Khorkhog", "Ger stay"],
    theme: "terelj",
    startMonth: 7,
    startDay: 11,
    endMonth: 7,
    endDay: 13,
  },
  {
    id: "gobi-glimpse",
    slug: "gobi-glimpse",
    title: "Gobi Glimpse + Central",
    emoji: "🌅",
    dates: "Aug 18 – 28",
    days: 11,
    price: "$1,100",
    groupSize: "5–7",
    status: "available",
    description:
      "The iconic southern Gobi loop, extended through central Mongolia — Umnugobi, Yoliin Am, desert camping, camels at Khongoriin Els, hot springs, horse riding, hiking on the return.",
    highlights: ["Yoliin Am", "Desert camp", "Khongoriin Els", "Hot springs", "Horse riding"],
    theme: "gobi",
    startMonth: 7,
    startDay: 18,
    endMonth: 7,
    endDay: 28,
  },
  {
    id: "north-central",
    slug: "north-central",
    title: "North & Central Loop",
    emoji: "🐪",
    dates: "July 21 – 31",
    days: 11,
    price: "$1,100",
    groupSize: "5–7",
    status: "available",
    description:
      "The northern route — Huuchin Bulgan ger camp, Khuvsgul Lake camping and hiking, the taiga, Zavkhan, hot springs, many lakes, a horse-riding day, and central Mongolia on the way home.",
    highlights: ["Bulgan ger camp", "Khuvsgul Lake", "Taiga", "Hot springs", "Horse day"],
    theme: "north-central",
    startMonth: 6,
    startDay: 21,
    endMonth: 6,
    endDay: 31,
  },
];

// ============================================================================
// THEME MAP — 10 distinct visual identities
// ============================================================================

const themeMap = {
  terelj: {
    bg: "bg-teal-500/25",
    bgHover: "group-hover:bg-teal-500/50",
    border: "border-teal-400/40",
    text: "text-teal-200",
    dot: "bg-teal-400",
    bar: "from-teal-500 to-teal-600",
    pattern: "terelj",
    short: "Forest Weekend",
  },
  khentii: {
    bg: "bg-lime-500/25",
    bgHover: "group-hover:bg-lime-500/50",
    border: "border-lime-400/40",
    text: "text-lime-200",
    dot: "bg-lime-400",
    bar: "from-lime-500 to-lime-600",
    pattern: "horse",
    short: "Taiga Horse Trek",
  },
  "southern-gobi": {
    bg: "bg-orange-500/30",
    bgHover: "group-hover:bg-orange-500/55",
    border: "border-orange-400/40",
    text: "text-orange-100",
    dot: "bg-orange-400",
    bar: "from-orange-500 to-orange-600",
    pattern: "dunes",
    short: "Fast Gobi Run",
  },
  playtime: {
    bg: "bg-emerald-500/25",
    bgHover: "group-hover:bg-emerald-500/50",
    border: "border-emerald-400/40",
    text: "text-emerald-200",
    dot: "bg-emerald-400",
    bar: "from-emerald-500 to-emerald-600",
    pattern: "feather",
    short: "Festival Meet-Up",
  },
  naadam: {
    bg: "bg-red-500/30",
    bgHover: "group-hover:bg-red-500/55",
    border: "border-red-400/50",
    text: "text-red-100",
    dot: "bg-red-400",
    bar: "from-red-500 to-red-600",
    pattern: "naadam",
    short: "Local Naadam",
  },
  "north-central": {
    bg: "bg-sky-500/25",
    bgHover: "group-hover:bg-sky-500/50",
    border: "border-sky-400/40",
    text: "text-sky-100",
    dot: "bg-sky-400",
    bar: "from-sky-500 to-sky-600",
    pattern: "loop",
    short: "Long North Route",
  },
  altai: {
    bg: "bg-indigo-500/30",
    bgHover: "group-hover:bg-indigo-500/55",
    border: "border-indigo-400/40",
    text: "text-indigo-100",
    dot: "bg-indigo-400",
    bar: "from-indigo-500 to-indigo-600",
    pattern: "peaks",
    short: "Western Heights",
  },
  gobi: {
    bg: "bg-amber-500/30",
    bgHover: "group-hover:bg-amber-500/55",
    border: "border-amber-400/40",
    text: "text-amber-100",
    dot: "bg-amber-400",
    bar: "from-amber-500 to-amber-600",
    pattern: "dunes",
    short: "Gobi + Central",
  },
};

// ============================================================================
// CELL DECORATIVE PATTERNS — 10 motifs, one per theme
// ============================================================================

function CellPattern({ type }) {
  const props = {
    className: "absolute inset-0 w-full h-full pointer-events-none",
    viewBox: "0 0 60 60",
    fill: "none",
    preserveAspectRatio: "none",
  };
  switch (type) {
    case "city":
      return (
        <svg {...props}>
          <rect x="12" y="36" width="6" height="18" fill="currentColor" opacity="0.28" />
          <rect x="20" y="30" width="6" height="24" fill="currentColor" opacity="0.22" />
          <rect x="28" y="40" width="6" height="14" fill="currentColor" opacity="0.3" />
          <rect x="36" y="32" width="6" height="22" fill="currentColor" opacity="0.22" />
          <rect x="44" y="38" width="5" height="16" fill="currentColor" opacity="0.28" />
        </svg>
      );
    case "horse":
      return (
        <svg {...props}>
          <path
            d="M14 42 Q 18 30, 26 28 L 32 26 L 34 20 L 38 22 L 40 25 Q 46 25, 46 33 L 44 40"
            stroke="currentColor"
            strokeWidth="1.1"
            opacity="0.5"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M18 42 L 18 48 M 24 40 L 24 47 M 40 42 L 40 48 M 44 42 L 44 48" stroke="currentColor" strokeWidth="0.7" opacity="0.4" strokeLinecap="round" />
          <path d="M10 52 Q 30 48, 50 52" stroke="currentColor" strokeWidth="0.6" opacity="0.3" fill="none" />
        </svg>
      );
    case "terelj":
      return (
        <svg {...props}>
          <path d="M10 50 L 14 32 L 18 50 Z" fill="currentColor" opacity="0.3" />
          <path d="M22 52 L 27 28 L 32 52 Z" fill="currentColor" opacity="0.35" />
          <path d="M38 52 L 43 36 L 48 52 Z" fill="currentColor" opacity="0.3" />
          <circle cx="45" cy="14" r="2" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case "lake":
      return (
        <svg {...props}>
          <path d="M0 46 Q 15 42, 30 46 T 60 46" stroke="currentColor" strokeWidth="1" opacity="0.45" fill="none" />
          <path d="M0 52 Q 20 48, 40 52 T 60 50" stroke="currentColor" strokeWidth="0.8" opacity="0.35" fill="none" />
          <path d="M0 56 Q 15 54, 30 56 T 60 56" stroke="currentColor" strokeWidth="0.6" opacity="0.28" fill="none" />
          <circle cx="45" cy="18" r="2.5" fill="currentColor" opacity="0.35" />
        </svg>
      );
    case "horse":
      return (
        <svg {...props}>
          <path
            d="M15 40 Q 18 32, 24 32 L 30 30 L 32 26 L 35 28 L 38 30 Q 44 30, 44 36 L 42 42"
            stroke="currentColor"
            strokeWidth="1.1"
            opacity="0.5"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M18 42 L 18 48 M 24 42 L 24 48 M 38 42 L 38 48 M 42 42 L 42 48" stroke="currentColor" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />
        </svg>
      );
    case "feather":
      return (
        <svg {...props}>
          <path d="M12 50 Q 28 28, 48 8" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" strokeLinecap="round" />
          <path d="M18 44 L 24 38 M 24 38 L 30 32 M 30 32 L 36 26 M 36 26 L 42 18" stroke="currentColor" strokeWidth="0.7" opacity="0.35" strokeLinecap="round" />
        </svg>
      );
    case "naadam":
      return (
        <svg {...props}>
          <path d="M6 44 Q 18 34, 30 40 T 54 36" stroke="currentColor" strokeWidth="1.1" opacity="0.5" fill="none" strokeLinecap="round" />
          <circle cx="32" cy="18" r="1.8" fill="currentColor" opacity="0.4" />
          <path d="M28 20 L 36 20" stroke="currentColor" strokeWidth="0.6" opacity="0.35" strokeLinecap="round" />
        </svg>
      );
    case "ancient":
      return (
        <svg {...props}>
          <path d="M14 48 L 14 32 L 22 28 L 30 32 L 30 48 Z" stroke="currentColor" strokeWidth="0.8" opacity="0.4" fill="currentColor" fillOpacity="0.15" />
          <path d="M34 48 L 34 36 L 44 32 L 44 48 Z" stroke="currentColor" strokeWidth="0.8" opacity="0.35" fill="currentColor" fillOpacity="0.12" />
          <circle cx="22" cy="18" r="1.5" fill="currentColor" opacity="0.35" />
        </svg>
      );
    case "loop":
      return (
        <svg {...props}>
          <path
            d="M12 30 Q 20 18, 30 24 Q 42 30, 48 22 Q 52 30, 44 38 Q 34 44, 24 40 Q 14 38, 12 30 Z"
            stroke="currentColor"
            strokeWidth="0.9"
            opacity="0.45"
            fill="none"
            strokeDasharray="2 2"
          />
          <circle cx="30" cy="30" r="1.2" fill="currentColor" opacity="0.4" />
        </svg>
      );
    case "peaks":
      return (
        <svg {...props}>
          <path d="M4 50 L 14 24 L 22 36 L 30 18 L 40 34 L 48 26 L 56 44 L 56 54 L 4 54 Z" fill="currentColor" opacity="0.28" />
          <path d="M26 22 L 30 18 L 34 24" stroke="white" strokeWidth="0.4" opacity="0.4" fill="none" />
          <circle cx="50" cy="12" r="0.6" fill="currentColor" opacity="0.4" />
          <circle cx="14" cy="14" r="0.5" fill="currentColor" opacity="0.35" />
        </svg>
      );
    case "dunes":
      return (
        <svg {...props}>
          <path d="M0 42 Q 15 32, 30 38 T 60 36 V60 H0 Z" fill="currentColor" opacity="0.22" />
          <path d="M0 50 Q 20 44, 40 48 T 60 46" stroke="currentColor" strokeWidth="0.7" opacity="0.35" fill="none" />
          <circle cx="48" cy="12" r="2.5" fill="currentColor" opacity="0.3" />
        </svg>
      );
    default:
      return null;
  }
}

// ============================================================================
// MONTH SETUP
// ============================================================================

const MONTHS = [
  { index: 5, name: "June", year: 2026, days: 30 },
  { index: 6, name: "July", year: 2026, days: 31 },
  { index: 7, name: "August", year: 2026, days: 31 },
];

const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

function getTourForDay(monthIndex, day) {
  for (const tour of tours) {
    const afterStart =
      monthIndex > tour.startMonth ||
      (monthIndex === tour.startMonth && day >= tour.startDay);
    const beforeEnd =
      monthIndex < tour.endMonth ||
      (monthIndex === tour.endMonth && day <= tour.endDay);
    if (afterStart && beforeEnd) return tour;
  }
  return null;
}

// ============================================================================
// DAY CELL
// ============================================================================

function DayCell({ monthIndex, day, isEmpty, onHover, onLeave, hoveredId, dayOfWeek }) {
  if (isEmpty) {
    return <div className="aspect-square" />;
  }

  const tour = getTourForDay(monthIndex, day);

  if (!tour) {
    return (
      <div className="aspect-square flex items-center justify-center rounded-lg hover:bg-sand-900/15 transition-colors">
        <span className="text-sand-600 text-xs md:text-sm tabular-nums">{day}</span>
      </div>
    );
  }

  const theme = themeMap[tour.theme];
  const status = statusConfig[tour.status];
  const isFirstDay = monthIndex === tour.startMonth && day === tour.startDay;
  const isLastDay = monthIndex === tour.endMonth && day === tour.endDay;
  const isHovered = hoveredId === tour.id;
  const isAnchor = isFirstDay; // popover renders only on the first cell of the tour
  const isDimmed = hoveredId && hoveredId !== tour.id;
  const isSoldOut = tour.status === "sold_out";

  const roundLeft = isFirstDay || dayOfWeek === 0;
  const roundRight = isLastDay || dayOfWeek === 6;

  const roundingClass = [
    roundLeft ? "rounded-l-xl" : "",
    roundRight ? "rounded-r-xl" : "",
  ].join(" ");

  // Horizontal alignment of the popover relative to the cell.
  // Sunday (col 0) and Monday (col 1) cells: anchor LEFT so popover doesn't overflow off the left edge.
  // Friday (col 5) and Saturday (col 6): anchor RIGHT.
  // Middle: center.
  let popoverAlign = "left-1/2 -translate-x-1/2";
  if (dayOfWeek <= 1) popoverAlign = "left-0 translate-x-0";
  else if (dayOfWeek >= 5) popoverAlign = "right-0 translate-x-0 left-auto";

  return (
    <div className="relative aspect-square">
      <Link
        href={`/tours/${tour.slug}`}
        onMouseEnter={() => onHover(tour.id)}
        onMouseLeave={onLeave}
        aria-label={`${tour.title} · ${tour.dates}`}
        className={`
          relative w-full h-full flex flex-col items-center justify-center
          border ${theme.border} ${theme.bg} ${theme.bgHover} ${roundingClass}
          transition-all duration-300 ease-out group cursor-pointer overflow-hidden
          ${isHovered ? "scale-[1.1] z-20 shadow-lg shadow-black/40" : ""}
          ${isDimmed ? "opacity-25" : "opacity-100"}
          ${isSoldOut ? "ring-1 ring-red-500/30" : ""}
        `}
      >
      <div className={`${theme.text} absolute inset-0 pointer-events-none opacity-80`}>
        <CellPattern type={theme.pattern} />
      </div>

      {/* Left-edge accent stripe marks the first day of a tour span */}
      {isFirstDay && (
        <span className={`absolute left-0 top-1 bottom-1 w-[3px] rounded-full ${theme.dot}`} />
      )}

      <span
        className={`relative z-10 tabular-nums font-medium ${theme.text} ${
          isFirstDay ? "text-sm md:text-base font-bold" : "text-xs md:text-sm"
        }`}
      >
        {day}
      </span>

      {isFirstDay && (
        <span className="absolute top-0.5 right-1 md:top-1 md:right-1.5 text-[11px] md:text-sm leading-none">
          {tour.emoji}
        </span>
      )}

      {/* Status indicator on first day only — colored ring around a small dot */}
      {isFirstDay && status && tour.status !== "available" && (
        <span
          className={`absolute bottom-1 left-1 px-1 py-px text-[8px] uppercase tracking-wider leading-none rounded ${status.cls}`}
          title={status.label}
        >
          {tour.status === "sold_out" ? "✕" : "!"}
        </span>
      )}

      {isFirstDay && tour.status === "available" && (
        <span className={`absolute bottom-1 left-1 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${theme.dot} animate-pulse`} />
      )}

      {isLastDay && !isFirstDay && (
        <span className="absolute bottom-0.5 right-1 text-[8px] md:text-[10px] uppercase tracking-wider text-sand-500 opacity-70">
          end
        </span>
      )}
      </Link>

      {/* Popover renders inside the cell, only on the FIRST day of the tour, only when hovered */}
      <AnimatePresence>
        {isHovered && isAnchor && (
          <div
            className={`absolute top-full mt-2 z-50 ${popoverAlign}`}
            onMouseEnter={() => onHover(tour.id)}
            onMouseLeave={onLeave}
          >
            <TourPopover
              tour={tour}
              onMouseEnter={() => onHover(tour.id)}
              onMouseLeave={onLeave}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// STATUS CONFIG (shared between popover + legend)
// ============================================================================

const statusConfig = {
  available: { cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30", label: "Spots Available", short: "Available" },
  limited:   { cls: "bg-amber-500/15 text-amber-300 border-amber-500/30",       label: "Limited Spots",   short: "Limited" },
  sold_out:  { cls: "bg-red-500/15 text-red-300 border-red-500/30",             label: "Fully Booked",    short: "Fully Booked" },
};

// ============================================================================
// TOOLTIP POPOVER
// ============================================================================

function TourPopover({ tour, onMouseEnter, onMouseLeave }) {
  const theme = themeMap[tour.theme];
  const s = statusConfig[tour.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.96 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="pointer-events-auto absolute z-50"
    >
      <Link
        href={`/tours/${tour.slug}`}
        className="block bg-night-900/95 backdrop-blur-lg border border-sand-800/50 hover:border-sand-700/70 rounded-2xl shadow-2xl overflow-hidden w-[320px] max-w-[92vw] transition-colors"
      >
        <div className={`h-1 bg-gradient-to-r ${theme.bar}`} />
        <div className="p-5">
          <p className={`text-[10px] tracking-[0.18em] uppercase mb-1.5 ${theme.text}`}>
            {theme.short}
          </p>
          <h3 className="font-display text-xl text-sand-100 leading-tight mb-2">
            <span className="mr-2">{tour.emoji}</span>
            {tour.title}
          </h3>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className={`text-xs font-medium ${theme.text}`}>{tour.dates}</span>
            <span className="text-sand-700 text-xs">·</span>
            <span className="text-sand-500 text-xs">{tour.days} days</span>
            {tour.groupSize && (
              <>
                <span className="text-sand-700 text-xs">·</span>
                <span className="text-sand-500 text-xs">{tour.groupSize} pax</span>
              </>
            )}
          </div>
          <p className="text-sand-400 text-[13px] leading-relaxed mb-3">
            {tour.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tour.highlights.map((h, i) => (
              <span
                key={i}
                className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-sand-800/40 text-sand-400 border border-sand-800/60"
              >
                {h}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-sand-800/40">
            <div>
              <p className="text-sand-200 text-sm font-semibold">{tour.price}</p>
              <span className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border mt-1 ${s.cls}`}>
                <span className={`w-1 h-1 rounded-full ${theme.dot}`} />
                {s.label}
              </span>
            </div>
            <span className={`text-[11px] uppercase tracking-wider ${theme.text} font-medium`}>
              Open →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ============================================================================
// MONTH CALENDAR
// ============================================================================

function MonthCalendar({ month, hoveredId, onHover, onLeave }) {
  const firstDayOfWeek = new Date(month.year, month.index, 1).getDay();
  const cells = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    cells.push({ isEmpty: true, key: `empty-start-${i}` });
  }
  for (let d = 1; d <= month.days; d++) {
    cells.push({ isEmpty: false, day: d, key: `day-${d}` });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ isEmpty: true, key: `empty-end-${cells.length}` });
  }

  return (
    <div className="relative">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-sand-100 leading-none">{month.name}</h3>
          <p className="text-sand-600 text-[10px] tracking-[0.2em] uppercase mt-1.5">
            {tours.filter((t) => t.startMonth === month.index).length} trips this month
          </p>
        </div>
        <span className="text-sand-600 text-xs tracking-wider uppercase">{month.year}</span>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAY_LABELS.map((d, i) => (
          <div
            key={i}
            className="text-center text-sand-700 text-[10px] tracking-wider uppercase font-medium py-1"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((cell, idx) => (
          <DayCell
            key={cell.key}
            monthIndex={month.index}
            day={cell.day}
            isEmpty={cell.isEmpty}
            dayOfWeek={idx % 7}
            hoveredId={hoveredId}
            onHover={onHover}
            onLeave={onLeave}
          />
        ))}
      </div>
    </div>
  );
}

// (legacy popover anchor block removed — popover now renders inside DayCell)

// ============================================================================
// LEGEND — agenda list grouped by month, with date/duration/price/status
// per row so the whole season is scannable at a glance.
// ============================================================================

function Legend({ onHover, onLeave, hoveredId }) {
  const byMonth = MONTHS.map((m) => ({
    month: m,
    items: tours
      .filter((t) => t.startMonth === m.index)
      .sort((a, b) => a.startDay - b.startDay),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-14">
      {byMonth.map(({ month, items }) => (
        <div key={month.index} className="space-y-1.5">
          <div className="flex items-baseline justify-between mb-3 px-1">
            <p className="text-sand-300 text-[11px] tracking-[0.32em] uppercase font-medium">
              {month.name}
            </p>
            <p className="text-sand-600 text-[10px] tracking-wider">
              {items.length} trip{items.length === 1 ? "" : "s"}
            </p>
          </div>
          {items.map((tour) => {
            const theme = themeMap[tour.theme];
            const status = statusConfig[tour.status];
            const showStatus = tour.status !== "available";
            const active = hoveredId === tour.id;
            return (
              <Link
                key={tour.id}
                href={`/tours/${tour.slug}`}
                onMouseEnter={() => onHover(tour.id)}
                onMouseLeave={onLeave}
                className={`
                  group flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all
                  ${active
                    ? "border-sand-500/60 bg-night-900/70 scale-[1.02] shadow-lg shadow-black/30"
                    : "border-sand-800/40 bg-night-900/40 hover:border-sand-600/50 hover:bg-night-900/70"}
                `}
              >
                <span className={`shrink-0 w-2 h-2 rounded-full ${theme.dot}`} />
                <span className="text-base shrink-0">{tour.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sand-200 text-[13px] leading-snug truncate group-hover:text-sand-100 transition-colors">
                    {tour.title}
                  </p>
                  <p className="text-sand-500 text-[11px] mt-0.5">
                    {tour.dates} · {tour.days}d ·{" "}
                    <span className="text-sand-300 font-medium">{tour.price}</span>
                  </p>
                </div>
                {showStatus && status && (
                  <span
                    className={`shrink-0 text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border whitespace-nowrap ${status.cls}`}
                  >
                    {status.short}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// CALENDAR SECTION
// ============================================================================

function CalendarSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const leaveTimerRef = useRef(null);

  // Hover handlers with a small grace period so the user can move the
  // pointer from a day cell to the popover (or vice versa) without
  // the popover dismissing.
  const onHover = (id) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setHoveredId(id);
  };
  const onLeave = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => setHoveredId(null), 150);
  };

  // The hovered tour's month range — used to bump z-index on panels
  // that are responsible for showing the popover so it paints above
  // sibling panels (each panel creates its own stacking context via
  // backdrop-blur, so a popover that extends past the panel edge is
  // otherwise covered by the next panel).
  const hoveredTour = tours.find((t) => t.id === hoveredId);
  const monthHasHovered = (monthIndex) => {
    if (!hoveredTour) return false;
    return (
      hoveredTour.startMonth === monthIndex ||
      hoveredTour.endMonth === monthIndex ||
      (hoveredTour.startMonth < monthIndex && hoveredTour.endMonth > monthIndex)
    );
  };

  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10 md:mb-12">
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-3">Summer 2026</p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-4">
              Pick Your Month
            </h2>
            <p className="text-sand-400 max-w-2xl mx-auto leading-relaxed">
              Ten departures across June, July, and August — weekend escapes, festivals, horse treks into the taiga, long flagship expeditions. Skim the agenda below for the full picture, or scroll the calendar to see how it lines up. Hover any highlighted day to peek inside.
            </p>
          </div>
        </FadeIn>

        <Legend onHover={onHover} onLeave={onLeave} hoveredId={hoveredId} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {MONTHS.map((month) => (
            <div
              key={month.index}
              style={{ zIndex: monthHasHovered(month.index) ? 40 : 1 }}
              className="bg-night-900/30 border border-sand-900/30 rounded-2xl p-5 md:p-6 backdrop-blur-sm relative"
            >
              <MonthCalendar
                month={month}
                hoveredId={hoveredId}
                onHover={onHover}
                onLeave={onLeave}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sand-600 text-xs mt-10 tracking-wider">
          Open days between tours are rest buffers — or build a custom trip ·{" "}
          <Link href="/book" className="text-sand-400 hover:text-sand-200 underline underline-offset-4">
            Request custom dates
          </Link>
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// MOUNTAIN SILHOUETTE
// ============================================================================

function MountainSilhouette() {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      className="w-full h-20 md:h-28"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 120L100 60L180 90L280 30L380 80L480 40L580 75L680 35L780 70L880 45L980 85L1080 55L1200 90V120H0Z"
        fill="currentColor"
      />
    </svg>
  );
}

// ============================================================================
// PAGE
// ============================================================================

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-night-950">
      {/* Hero */}
      <section className="relative h-[55vh] w-full overflow-hidden">
        <Image
          src="/images/tours/north-central.jpg"
          alt="Mongolia Tours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-night-950/30 to-night-950" />

        <div className="absolute bottom-0 left-0 right-0 text-night-950 z-10">
          <MountainSilhouette />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-sand-400 mb-4">2026 SEASON</p>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Your Journey Starts Here</h1>
            <p className="text-sand-300 max-w-xl mx-auto px-6">
              Three months, ten departures. Pick a date on the calendar and we&apos;ll take you there.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Season stats */}
      <section className="border-b border-sand-900/20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-8 md:gap-14 text-center">
          {[
            { label: "Season", value: "June – August" },
            { label: "Departures", value: "10 Scheduled" },
            { label: "Group Size", value: "5–8" },
            { label: "Starting From", value: "$350" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-sand-500 text-xs tracking-wider uppercase mb-1">{stat.label}</p>
              <p className="text-sand-200 font-display text-lg">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calendar */}
      <CalendarSection />

      {/* Routes */}
      <section className="py-20 border-t border-sand-900/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">ROUTES</p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100">Three Ways to Explore</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Weekend Escapes",
                duration: "3 Days",
                price: "$350",
                items: ["Terelj Escape × 3", "Any age welcome"],
                desc: "Three Terelj weekends across June and July. Gentle, ger-camp vibe, close to the city.",
                color: "from-teal-400 to-teal-600",
                border: "border-teal-700/20 hover:border-teal-600/40",
              },
              {
                title: "Festival & Adventure",
                duration: "6–11 Days",
                price: "From $950",
                items: ["Southern Gobi + Central", "Playtime Music Festival", "Local Naadam", "Gobi Glimpse + Central"],
                desc: "Mid-length departures — festivals, desert nights, and nomadic immersion. For travellers who want to get into it.",
                color: "from-emerald-500 to-amber-600",
                border: "border-emerald-700/20 hover:border-amber-600/40",
              },
              {
                title: "Grand Expeditions",
                duration: "6–11 Days",
                price: "From $1,100",
                items: ["Altai Tavan Bogd · Aug", "North & Central Loop"],
                desc: "The flagship tours — western peaks with Kazakh eagle hunters, and the long flexible north route through taiga, Khuvsgul, and Zavkhan.",
                color: "from-indigo-500 to-sky-600",
                border: "border-indigo-700/20 hover:border-sky-600/40",
              },
            ].map((route, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div
                  className={`bg-night-900/60 border rounded-xl p-8 hover:shadow-lg transition-all duration-500 h-full flex flex-col ${route.border}`}
                >
                  <div className={`w-12 h-1.5 rounded-full bg-gradient-to-r ${route.color} mb-6`} />
                  <h3 className="font-display text-xl text-sand-100 mb-1">{route.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sand-500 text-xs">{route.duration}</span>
                    <span className="text-sand-700 text-xs">·</span>
                    <span className="text-sand-400 text-xs font-medium">{route.price}</span>
                  </div>
                  <p className="text-sand-400 text-sm leading-relaxed mb-5 flex-grow">{route.desc}</p>
                  <div className="space-y-2 mb-6">
                    {route.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-sand-500">
                        <span className="text-sand-600">→</span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/book"
                    className="text-sand-400 hover:text-sand-200 text-sm tracking-wider uppercase transition-colors duration-300"
                  >
                    Book Now →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-sand-900/20 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 font-display text-2xl text-sand-100">Not sure which tour?</h2>
            <p className="mb-8 text-sand-400">
              Every journey is flexible and personal. Contact me and we&apos;ll find the perfect adventure for you.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/book"
                className="inline-block bg-sand-400 px-6 py-3 text-sm uppercase tracking-wider text-night-950 transition hover:bg-sand-300 rounded-sm"
              >
                Book Now
              </Link>
              <a
                href="mailto:tuklobin@gmail.com"
                className="inline-block border border-sand-400/40 px-6 py-3 text-sm uppercase tracking-wider text-sand-400 transition hover:bg-sand-400/10 rounded-sm"
              >
                Ask a Question
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
