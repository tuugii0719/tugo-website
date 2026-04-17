"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

// ============================================================================
// TOUR DATA — 2026 SEASON (Jun–Aug)
// Maximized revenue mix: short city tours + mid festivals + long expeditions,
// with 1–2 day rest buffers between tours.
// ============================================================================

const tours = [
  {
    id: "city-discovery",
    title: "City Discovery",
    emoji: "🏙️",
    dates: "June 2 – 4",
    days: 3,
    price: "From $450",
    status: "available",
    description:
      "Ulaanbaatar at your own pace — Gandan monastery, Zaisan hill, the National Museum, and a half-day out to the Genghis Khan Equestrian Statue. A perfect warm-up before heading out to the wild.",
    highlights: ["Gandan Monastery", "Genghis Statue", "City food"],
    theme: "city",
    startMonth: 5,
    startDay: 2,
    endMonth: 5,
    endDay: 4,
  },
  {
    id: "terelj-escape",
    title: "Terelj Escape",
    emoji: "🌲",
    dates: "June 7 – 9",
    days: 3,
    price: "From $550",
    status: "available",
    description:
      "A weekend in Gorkhi-Terelj National Park — Turtle Rock, Aryabal Meditation Temple, horseback through alpine meadows, and a night in a family ger camp 90 minutes from the city.",
    highlights: ["Turtle Rock", "Aryabal Temple", "Ger stay"],
    theme: "terelj",
    startMonth: 5,
    startDay: 7,
    endMonth: 5,
    endDay: 9,
  },
  {
    id: "khuvsgul-pearl",
    title: "Khuvsgul Pearl",
    emoji: "💎",
    dates: "June 12 – 18",
    days: 7,
    price: "From $1,500",
    status: "available",
    description:
      "A week at the Dark Blue Pearl — Mongolia's deepest lake, forested shorelines, boating and kayaking, an overnight with Tsaatan reindeer herders in the taiga, and starlit shore camps.",
    highlights: ["Khuvsgul Lake", "Reindeer herders", "Kayak", "Taiga"],
    theme: "khuvsgul",
    startMonth: 5,
    startDay: 12,
    endMonth: 5,
    endDay: 18,
  },
  {
    id: "khustai-wild-horses",
    title: "Khustai Wild Horses",
    emoji: "🐴",
    dates: "June 21 – 23",
    days: 3,
    price: "From $600",
    status: "available",
    description:
      "Trace the takhi — the only truly wild horse species on Earth — across the golden hills of Khustai National Park at dawn and dusk when they come to drink.",
    highlights: ["Takhi horses", "Steppe hike", "Dawn game drive"],
    theme: "khustai",
    startMonth: 5,
    startDay: 21,
    endMonth: 5,
    endDay: 23,
  },
  {
    id: "playtime",
    title: "Playtime",
    emoji: "🦅",
    dates: "July 1 – 6",
    days: 6,
    price: "From $950",
    status: "available",
    description:
      "A playful intro to nomad life — eagle handlers, archery lessons, horseback across the Khan-Khentii steppe, traditional games, and plenty of airag under the summer sky.",
    highlights: ["Eagle hunters", "Archery", "Steppe riding", "Games"],
    theme: "playtime",
    startMonth: 6,
    startDay: 1,
    endMonth: 6,
    endDay: 6,
  },
  {
    id: "naadam",
    title: "Naadam Festival",
    emoji: "🏇",
    dates: "July 11 – 15",
    days: 5,
    price: "From $1,200",
    status: "limited",
    description:
      "Mongolia's legendary Three Manly Sports — wrestling, archery, and horse racing at the National Stadium. 2026 marks the 820th anniversary of the Mongol Empire. Opening ceremony included.",
    highlights: ["Wrestling", "Horse racing", "Archery", "Opening"],
    theme: "naadam",
    startMonth: 6,
    startDay: 11,
    endMonth: 6,
    endDay: 15,
  },
  {
    id: "orkhon-karakorum",
    title: "Orkhon & Karakorum",
    emoji: "🏛️",
    dates: "July 18 – 20",
    days: 3,
    price: "From $750",
    status: "available",
    description:
      "Three days tracing the old empire — Orkhon Valley waterfalls, Erdene Zuu monastery, and the ruins of Karakorum, Chinggis Khaan's 13th-century capital.",
    highlights: ["Karakorum ruins", "Erdene Zuu", "Orkhon Falls"],
    theme: "orkhon",
    startMonth: 6,
    startDay: 18,
    endMonth: 6,
    endDay: 20,
  },
  {
    id: "north-central",
    title: "North & Central Loop",
    emoji: "🐪",
    dates: "July 21 – Aug 5",
    days: 16,
    price: "From $2,800",
    status: "available",
    description:
      "The signature big loop — Ulaanbaatar, Khustai takhi, Orkhon Valley, Kharakhorum, the forested north and Terelj, with camel rides, horse treks, nomadic stays, and hot-spring soaks woven through.",
    highlights: ["Orkhon Valley", "Karakorum", "Terelj", "Nomadic stays", "Hot springs"],
    theme: "north-central",
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 5,
  },
  {
    id: "altai-tavan-bogd",
    title: "Altai Tavan Bogd",
    emoji: "🏔️",
    dates: "Aug 8 – 21",
    days: 14,
    price: "From $3,200",
    status: "available",
    description:
      "Mongolia's remote west — the Five Holy Peaks, Potanin Glacier, Kazakh eagle hunters in their summer pastures, Malchin Peak trek, and camps beneath snow and stars. The rarest, richest tour we run.",
    highlights: ["Tavan Bogd peaks", "Potanin Glacier", "Kazakh eagles", "Malchin trek"],
    theme: "altai",
    startMonth: 7,
    startDay: 8,
    endMonth: 7,
    endDay: 21,
  },
  {
    id: "gobi-glimpse",
    title: "Gobi Glimpse",
    emoji: "🏜️",
    dates: "Aug 25 – 27",
    days: 3,
    price: "From $750",
    status: "available",
    description:
      "A fast, rich taste of the Gobi — a short flight south to Khongoryn Els singing dunes, a camel sunset, and the Flaming Cliffs at golden hour. For travelers on tighter timelines.",
    highlights: ["Singing dunes", "Flaming Cliffs", "Camel sunset"],
    theme: "gobi",
    startMonth: 7,
    startDay: 25,
    endMonth: 7,
    endDay: 27,
  },
];

// ============================================================================
// THEME MAP — 10 distinct visual identities
// ============================================================================

const themeMap = {
  city: {
    bg: "bg-slate-500/25",
    bgHover: "group-hover:bg-slate-500/50",
    border: "border-slate-400/40",
    text: "text-slate-200",
    dot: "bg-slate-300",
    bar: "from-slate-400 to-slate-500",
    pattern: "city",
    short: "UB City Warm-Up",
  },
  terelj: {
    bg: "bg-teal-500/25",
    bgHover: "group-hover:bg-teal-500/50",
    border: "border-teal-400/40",
    text: "text-teal-200",
    dot: "bg-teal-400",
    bar: "from-teal-500 to-teal-600",
    pattern: "terelj",
    short: "Forest & Rock",
  },
  khuvsgul: {
    bg: "bg-blue-500/30",
    bgHover: "group-hover:bg-blue-500/55",
    border: "border-blue-400/40",
    text: "text-blue-100",
    dot: "bg-blue-400",
    bar: "from-blue-500 to-blue-600",
    pattern: "lake",
    short: "Dark Blue Pearl",
  },
  khustai: {
    bg: "bg-orange-500/30",
    bgHover: "group-hover:bg-orange-500/55",
    border: "border-orange-400/40",
    text: "text-orange-100",
    dot: "bg-orange-400",
    bar: "from-orange-500 to-orange-600",
    pattern: "horse",
    short: "Wild Takhi",
  },
  playtime: {
    bg: "bg-emerald-500/25",
    bgHover: "group-hover:bg-emerald-500/50",
    border: "border-emerald-400/40",
    text: "text-emerald-200",
    dot: "bg-emerald-400",
    bar: "from-emerald-500 to-emerald-600",
    pattern: "feather",
    short: "Eagles & Archery",
  },
  naadam: {
    bg: "bg-red-500/30",
    bgHover: "group-hover:bg-red-500/55",
    border: "border-red-400/50",
    text: "text-red-100",
    dot: "bg-red-400",
    bar: "from-red-500 to-red-600",
    pattern: "naadam",
    short: "Three Manly Sports",
  },
  orkhon: {
    bg: "bg-rose-500/25",
    bgHover: "group-hover:bg-rose-500/50",
    border: "border-rose-400/40",
    text: "text-rose-200",
    dot: "bg-rose-400",
    bar: "from-rose-500 to-rose-600",
    pattern: "ancient",
    short: "Old Empire",
  },
  "north-central": {
    bg: "bg-sky-500/25",
    bgHover: "group-hover:bg-sky-500/50",
    border: "border-sky-400/40",
    text: "text-sky-100",
    dot: "bg-sky-400",
    bar: "from-sky-500 to-sky-600",
    pattern: "loop",
    short: "Signature Loop",
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
    short: "Desert Sampler",
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
      <div className="aspect-square flex items-center justify-center rounded-lg hover:bg-sand-900/10 transition-colors">
        <span className="text-sand-700 text-xs md:text-sm tabular-nums">{day}</span>
      </div>
    );
  }

  const theme = themeMap[tour.theme];
  const isFirstDay = monthIndex === tour.startMonth && day === tour.startDay;
  const isLastDay = monthIndex === tour.endMonth && day === tour.endDay;
  const isHovered = hoveredId === tour.id;
  const isDimmed = hoveredId && hoveredId !== tour.id;

  const roundLeft = isFirstDay || dayOfWeek === 0;
  const roundRight = isLastDay || dayOfWeek === 6;

  const roundingClass = [
    roundLeft ? "rounded-l-xl" : "",
    roundRight ? "rounded-r-xl" : "",
  ].join(" ");

  return (
    <Link
      href={`/tours/${tour.id}`}
      onMouseEnter={() => onHover(tour.id)}
      onMouseLeave={onLeave}
      className={`
        relative aspect-square flex flex-col items-center justify-center
        border ${theme.border} ${theme.bg} ${theme.bgHover} ${roundingClass}
        transition-all duration-300 group cursor-pointer overflow-hidden
        ${isHovered ? "scale-[1.12] z-20" : ""}
        ${isDimmed ? "opacity-25" : "opacity-100"}
      `}
    >
      <div className={`${theme.text} absolute inset-0 pointer-events-none`}>
        <CellPattern type={theme.pattern} />
      </div>

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

      {isFirstDay && (
        <span className={`absolute bottom-1 left-1 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${theme.dot} animate-pulse`} />
      )}

      {isLastDay && !isFirstDay && (
        <span className="absolute bottom-0.5 right-1 text-[8px] md:text-[10px] uppercase tracking-wider text-sand-500 opacity-70">
          end
        </span>
      )}
    </Link>
  );
}

// ============================================================================
// TOOLTIP POPOVER
// ============================================================================

function TourPopover({ tour }) {
  const theme = themeMap[tour.theme];
  const statusConfig = {
    available: { cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30", label: "Spots Available" },
    limited: { cls: "bg-amber-500/15 text-amber-300 border-amber-500/30", label: "Limited Spots" },
    sold_out: { cls: "bg-red-500/15 text-red-300 border-red-500/30", label: "Sold Out" },
  };
  const s = statusConfig[tour.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.96 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="pointer-events-none absolute z-50"
    >
      <div className="bg-night-900/95 backdrop-blur-lg border border-sand-800/50 rounded-2xl shadow-2xl overflow-hidden w-[320px] max-w-[92vw]">
        <div className={`h-1 bg-gradient-to-r ${theme.bar}`} />
        <div className="p-5">
          <p className={`text-[10px] tracking-[0.18em] uppercase mb-1.5 ${theme.text}`}>
            {theme.short}
          </p>
          <h3 className="font-display text-xl text-sand-100 leading-tight mb-2">
            <span className="mr-2">{tour.emoji}</span>
            {tour.title}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-medium ${theme.text}`}>{tour.dates}</span>
            <span className="text-sand-700 text-xs">·</span>
            <span className="text-sand-500 text-xs">{tour.days} days</span>
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
      </div>
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

  const hoveredTour = tours.find((t) => t.id === hoveredId);
  let popoverAnchor = null;
  if (hoveredTour) {
    const startsHere = hoveredTour.startMonth === month.index;
    const endsHere = hoveredTour.endMonth === month.index;
    const spansHere =
      hoveredTour.startMonth < month.index && hoveredTour.endMonth > month.index;

    if (startsHere || endsHere || spansHere) {
      const anchorDay = startsHere ? hoveredTour.startDay : 1;
      const cellIndex = firstDayOfWeek + anchorDay - 1;
      popoverAnchor = {
        row: Math.floor(cellIndex / 7),
        col: cellIndex % 7,
      };
    }
  }

  const totalRows = Math.ceil(cells.length / 7);

  return (
    <div className="relative">
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="font-display text-2xl md:text-3xl text-sand-100">{month.name}</h3>
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

      <div className="grid grid-cols-7 gap-1 relative">
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

      <AnimatePresence>
        {popoverAnchor && hoveredTour && (
          <div
            key={hoveredTour.id}
            className="absolute z-50 pointer-events-none"
            style={{
              top: `calc(((100% - 80px) * ${(popoverAnchor.row + 1) / totalRows}) + 60px)`,
              left: "50%",
              transform: "translate(-50%, 12px)",
            }}
          >
            <TourPopover tour={hoveredTour} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// LEGEND
// ============================================================================

function Legend({ onHover, onLeave, hoveredId }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10 px-4">
      {tours.map((tour) => {
        const theme = themeMap[tour.theme];
        const active = hoveredId === tour.id;
        return (
          <Link
            key={tour.id}
            href={`/tours/${tour.id}`}
            onMouseEnter={() => onHover(tour.id)}
            onMouseLeave={onLeave}
            className={`
              group flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all
              ${active
                ? "border-sand-500/60 bg-night-900/70 scale-105"
                : "border-sand-800/40 bg-night-900/40 hover:border-sand-600/50 hover:bg-night-900/70"}
            `}
          >
            <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
            <span className="text-sand-300 text-xs group-hover:text-sand-100 transition-colors">
              <span className="mr-1.5">{tour.emoji}</span>
              {tour.title}
            </span>
            <span className="text-sand-600 text-[10px]">{tour.dates}</span>
          </Link>
        );
      })}
    </div>
  );
}

// ============================================================================
// CALENDAR SECTION
// ============================================================================

function CalendarSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-3">Summer 2026</p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-3">
              Pick Your Month
            </h2>
            <p className="text-sand-400 max-w-xl mx-auto">
              Ten departures across June, July, and August. Hover a highlighted day to peek inside.
              Click to open the tour.
            </p>
          </div>
        </FadeIn>

        <Legend onHover={setHoveredId} onLeave={() => setHoveredId(null)} hoveredId={hoveredId} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {MONTHS.map((month) => (
            <div
              key={month.index}
              className="bg-night-900/30 border border-sand-900/30 rounded-2xl p-5 md:p-6 backdrop-blur-sm relative"
            >
              <MonthCalendar
                month={month}
                hoveredId={hoveredId}
                onHover={setHoveredId}
                onLeave={() => setHoveredId(null)}
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
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/60 via-night-950/30 to-night-950" />

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
            { label: "Group Size", value: "6–8 Max" },
            { label: "Starting From", value: "$450" },
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
                title: "City & Short Trips",
                duration: "3 Days",
                price: "From $450",
                items: ["City Discovery", "Terelj Escape", "Khustai Horses", "Gobi Glimpse"],
                desc: "Short, high-impact trips — perfect for stopovers or a first taste of Mongolia.",
                color: "from-slate-400 to-teal-500",
                border: "border-slate-700/20 hover:border-teal-600/40",
              },
              {
                title: "Festival & Culture",
                duration: "3–7 Days",
                price: "From $750",
                items: ["Playtime", "Naadam Festival", "Orkhon & Karakorum", "Khuvsgul Pearl"],
                desc: "The big cultural moments — festivals, ancient capitals, and northern lakes.",
                color: "from-emerald-500 to-red-600",
                border: "border-emerald-700/20 hover:border-red-600/40",
              },
              {
                title: "Grand Expeditions",
                duration: "14–16 Days",
                price: "From $2,800",
                items: ["North & Central Loop", "Altai Tavan Bogd"],
                desc: "The full Mongolian experience — deep expeditions through the country's rarest landscapes.",
                color: "from-sky-500 to-indigo-600",
                border: "border-sky-700/20 hover:border-indigo-600/40",
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
                href="mailto:hello@tugo.mn"
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
