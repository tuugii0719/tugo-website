"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

// ============================================================================
// TOUR DATA
// ============================================================================

const tours = [
  {
    id: "ara-festival",
    title: "Ara Festival",
    emoji: "🥛",
    dates: "June 20 – 26",
    days: 7,
    price: "From $900",
    status: "available",
    description:
      "Mongolia's traditional Ara (airag) festival — fermented mare's milk ceremonies, nomadic celebrations, horseback games, and the first taste of summer on the open steppe.",
    highlights: ["Airag tasting", "Nomadic games", "Horseback"],
    theme: "festival",
    startMonth: 5,
    startDay: 20,
    endMonth: 5,
    endDay: 26,
  },
  {
    id: "playtime",
    title: "Playtime",
    emoji: "🦅",
    dates: "July 1 – 6",
    days: 6,
    price: "From $850",
    status: "available",
    description:
      "A playful intro to Mongolia — eagle encounters, horseback rides across the steppe, nomadic games, archery lessons, and wide-open grasslands before the big festival season.",
    highlights: ["Eagle hunting", "Archery", "Steppe riding"],
    theme: "adventure",
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
    price: "From $1,100",
    status: "limited",
    description:
      "Mongolia's legendary Three Manly Sports — wrestling, archery, and horse racing at the National Stadium. 2026 marks the 820th anniversary of the Mongol Empire.",
    highlights: ["Wrestling", "Horse racing", "Archery"],
    theme: "naadam",
    startMonth: 6,
    startDay: 11,
    endMonth: 6,
    endDay: 15,
  },
  {
    id: "south-july",
    title: "South & Central Mongolia",
    emoji: "🐪",
    dates: "July 21 – Aug 5",
    days: 16,
    price: "From $1,500",
    status: "available",
    description:
      "The full Gobi experience — Khongoriin Els singing sand dunes, Yolyn Am ice canyon, Flaming Cliffs of Bayanzag, camel trekking, then north through the steppe to Orkhon Valley.",
    highlights: ["Gobi Desert", "Sand dunes", "Ice canyon", "Camel trek"],
    theme: "expedition",
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 5,
  },
  {
    id: "south-august",
    title: "South & Central Mongolia",
    emoji: "🌅",
    dates: "Aug 8 – 20",
    days: 13,
    price: "From $1,500",
    status: "available",
    description:
      "Same legendary southern route — Gobi dunes, Flaming Cliffs, nomadic culture, stargazing under infinite skies. A second departure for those who missed July.",
    highlights: ["Gobi Desert", "Nomadic stays", "Stargazing"],
    theme: "expedition-alt",
    startMonth: 7,
    startDay: 8,
    endMonth: 7,
    endDay: 20,
  },
];

// ============================================================================
// THEME MAP
// ============================================================================

const themeMap = {
  festival: {
    bg: "bg-amber-500/30",
    bgHover: "group-hover:bg-amber-500/55",
    border: "border-amber-400/40",
    text: "text-amber-200",
    dot: "bg-amber-400",
    bar: "from-amber-500 to-amber-600",
    pattern: "festival",
    short: "Airag & Steppe",
  },
  adventure: {
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
  expedition: {
    bg: "bg-sky-500/25",
    bgHover: "group-hover:bg-sky-500/50",
    border: "border-sky-400/40",
    text: "text-sky-100",
    dot: "bg-sky-400",
    bar: "from-sky-500 to-sky-600",
    pattern: "dunes",
    short: "Gobi Expedition",
  },
  "expedition-alt": {
    bg: "bg-violet-500/25",
    bgHover: "group-hover:bg-violet-500/50",
    border: "border-violet-400/40",
    text: "text-violet-100",
    dot: "bg-violet-400",
    bar: "from-violet-500 to-violet-600",
    pattern: "stars",
    short: "Gobi · Second Run",
  },
};

// ============================================================================
// CELL DECORATIVE PATTERNS
// ============================================================================

function CellPattern({ type }) {
  const props = {
    className: "absolute inset-0 w-full h-full pointer-events-none",
    viewBox: "0 0 60 60",
    fill: "none",
    preserveAspectRatio: "none",
  };
  switch (type) {
    case "festival":
      return (
        <svg {...props}>
          <circle cx="15" cy="48" r="1.8" fill="currentColor" opacity="0.5" />
          <circle cx="45" cy="14" r="1.3" fill="currentColor" opacity="0.4" />
          <circle cx="33" cy="32" r="0.9" fill="currentColor" opacity="0.4" />
          <path d="M8 8 L 10 12 L 12 8" stroke="currentColor" strokeWidth="0.7" opacity="0.3" fill="none" strokeLinecap="round" />
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
    case "dunes":
      return (
        <svg {...props}>
          <path d="M0 42 Q 15 32, 30 38 T 60 36 V60 H0 Z" fill="currentColor" opacity="0.22" />
          <path d="M0 50 Q 20 44, 40 48 T 60 46" stroke="currentColor" strokeWidth="0.7" opacity="0.35" fill="none" />
          <circle cx="48" cy="12" r="2.5" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case "stars":
      return (
        <svg {...props}>
          <circle cx="14" cy="14" r="0.9" fill="currentColor" />
          <circle cx="46" cy="20" r="0.7" fill="currentColor" opacity="0.75" />
          <circle cx="24" cy="38" r="0.55" fill="currentColor" opacity="0.65" />
          <circle cx="50" cy="46" r="0.45" fill="currentColor" opacity="0.55" />
          <circle cx="34" cy="28" r="0.35" fill="currentColor" opacity="0.5" />
          <path d="M14 14 L 14 11 M 14 14 L 14 17 M 14 14 L 11 14 M 14 14 L 17 14" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
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

  // The hovered tour's anchor day in THIS month (if it appears here)
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

      {/* Popover — anchored to the hovered tour's start cell within this month */}
      <AnimatePresence>
        {popoverAnchor && hoveredTour && (
          <div
            key={hoveredTour.id}
            className="absolute z-50 pointer-events-none"
            style={{
              top: `calc((100% - 40px) * ${(popoverAnchor.row + 1) / 6} + 56px)`,
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
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 px-4">
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
              Hover a highlighted date to peek inside. Click to open the tour.
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
          Open days are available for custom bookings ·{" "}
          <Link href="/book" className="text-sand-400 hover:text-sand-200 underline underline-offset-4">
            Build a custom trip
          </Link>
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// MOUNTAIN SILHOUETTE (hero bottom)
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
              Three months, five expeditions. Pick a date on the calendar and we&apos;ll take you there.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Season stats */}
      <section className="border-b border-sand-900/20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-8 md:gap-14 text-center">
          {[
            { label: "Season", value: "June – August" },
            { label: "Departures", value: "5 Scheduled" },
            { label: "Group Size", value: "6–8 Max" },
            { label: "Starting From", value: "$850" },
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
                title: "Festival Tours",
                duration: "5–7 Days",
                price: "From $850",
                items: ["Ara Festival", "Playtime", "Naadam"],
                desc: "Short, punchy trips built around Mongolia's biggest cultural moments.",
                color: "from-amber-500 to-amber-600",
                border: "border-amber-700/20 hover:border-amber-600/40",
              },
              {
                title: "South & Central",
                duration: "13–17 Days",
                price: "From $1,500",
                items: ["Gobi Desert", "Sand Dunes", "Steppe"],
                desc: "The full Mongolian experience — desert to grassland in one epic ride.",
                color: "from-sky-500 to-sky-600",
                border: "border-sky-700/20 hover:border-sky-600/40",
              },
              {
                title: "Custom Tours",
                duration: "Flexible",
                price: "From $900",
                items: ["Your dates", "Your group", "Your route"],
                desc: "Build your own adventure. Any time between May and October.",
                color: "from-sand-400 to-sand-500",
                border: "border-sand-700/20 hover:border-sand-600/40",
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
