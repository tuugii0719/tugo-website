"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

// ============================================================================
// NATURE SVG ILLUSTRATIONS
// ============================================================================

function MountainSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 200 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 80L40 25L60 45L80 10L120 50L140 30L180 65L200 55V80H0Z" fill="currentColor" opacity="0.07" />
      <path d="M0 80L40 25L60 45L80 10L120 50L140 30L180 65L200 55" stroke="currentColor" strokeWidth="1.5" opacity="0.15" fill="none" />
      <path d="M70 18L80 10L90 20" stroke="white" strokeWidth="0.8" opacity="0.2" fill="none" />
    </svg>
  );
}

function HorseSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 60 50" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 35C15 35 18 20 25 18C32 16 35 22 38 20C41 18 43 15 45 16C47 17 46 20 44 22C42 24 40 25 40 28C40 31 42 35 42 35" stroke="currentColor" strokeWidth="1.2" opacity="0.2" fill="none" strokeLinecap="round" />
      <path d="M15 35L13 42M18 35L17 42M39 35L38 42M42 35L43 42" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <path d="M45 16L48 13L50 14" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function EagleSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 80 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 25C15 10 25 15 40 8C55 15 65 10 75 25" stroke="currentColor" strokeWidth="1.2" opacity="0.2" fill="none" strokeLinecap="round" />
      <path d="M38 9L40 5L42 9" stroke="currentColor" strokeWidth="0.8" opacity="0.15" fill="none" />
    </svg>
  );
}

function CamelSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 70 50" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 38C15 38 16 30 20 27C24 24 26 28 28 25C30 22 28 18 32 17C36 16 38 20 38 24C38 28 36 30 38 32C40 34 44 32 46 34C48 36 48 38 48 38" stroke="currentColor" strokeWidth="1.2" opacity="0.2" fill="none" strokeLinecap="round" />
      <path d="M15 38L14 45M19 37L18 45M44 38L43 45M48 38L49 45" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <path d="M48 34L52 30L53 32" stroke="currentColor" strokeWidth="0.8" opacity="0.15" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function GerSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 50 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30L25 12L40 30" stroke="currentColor" strokeWidth="1.2" opacity="0.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 30H40" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
      <path d="M22 30V24H28V30" stroke="currentColor" strokeWidth="0.8" opacity="0.15" strokeLinecap="round" />
      <circle cx="25" cy="18" r="2" stroke="currentColor" strokeWidth="0.8" opacity="0.12" fill="none" />
    </svg>
  );
}

function CloudSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 80 30" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 22C10 22 8 18 12 15C10 12 14 8 20 10C22 6 30 5 34 9C38 5 46 6 46 12C50 10 54 14 50 18C54 20 52 24 46 22H15Z" stroke="currentColor" strokeWidth="0.8" opacity="0.1" fill="currentColor" fillOpacity="0.03" />
    </svg>
  );
}

function StarsSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="8" r="1" fill="currentColor" opacity="0.15" />
      <circle cx="25" cy="15" r="0.8" fill="currentColor" opacity="0.1" />
      <circle cx="40" cy="5" r="1.2" fill="currentColor" opacity="0.12" />
      <circle cx="50" cy="20" r="0.6" fill="currentColor" opacity="0.1" />
      <circle cx="15" cy="25" r="0.7" fill="currentColor" opacity="0.08" />
      <circle cx="35" cy="30" r="0.9" fill="currentColor" opacity="0.1" />
      <circle cx="55" cy="12" r="0.5" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

function DunesSVG({ className = "" }) {
  return (
    <svg viewBox="0 0 200 50" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 45C30 45 40 20 70 25C100 30 110 15 140 20C170 25 180 40 200 35V50H0V45Z" fill="currentColor" opacity="0.05" />
      <path d="M0 45C30 45 40 20 70 25C100 30 110 15 140 20C170 25 180 40 200 35" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="none" />
    </svg>
  );
}

// Nature decorations mapped to positions along the timeline
const natureElements = [
  { Component: MountainSVG, top: "2%", left: "-8%", width: "200px", color: "text-sand-400" },
  { Component: EagleSVG, top: "8%", right: "0%", width: "80px", color: "text-sand-300" },
  { Component: HorseSVG, top: "18%", left: "-5%", width: "70px", color: "text-amber-400" },
  { Component: CloudSVG, top: "25%", right: "-3%", width: "100px", color: "text-sand-300" },
  { Component: GerSVG, top: "35%", left: "-4%", width: "55px", color: "text-emerald-400" },
  { Component: EagleSVG, top: "42%", right: "-2%", width: "70px", color: "text-red-400" },
  { Component: MountainSVG, top: "50%", left: "-6%", width: "160px", color: "text-sand-500" },
  { Component: CamelSVG, top: "60%", right: "-3%", width: "80px", color: "text-sky-400" },
  { Component: DunesSVG, top: "68%", left: "-8%", width: "200px", color: "text-sand-400" },
  { Component: StarsSVG, top: "75%", right: "-2%", width: "70px", color: "text-violet-300" },
  { Component: HorseSVG, top: "85%", left: "-4%", width: "65px", color: "text-sand-400" },
  { Component: CloudSVG, top: "92%", right: "-5%", width: "90px", color: "text-sand-300" },
];

// ============================================================================
// CALENDAR SPINE — month labels, week ticks, date markers
// ============================================================================

function CalendarSpine() {
  // Season: June 20 → Aug 20 = 62 days
  // We generate date ticks for every day, week labels, month boundaries
  const startDate = new Date(2026, 5, 20); // June 20
  const endDate = new Date(2026, 7, 20); // Aug 20
  const totalDays = 62;

  const ticks = [];
  for (let d = 0; d <= totalDays; d++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + d);
    const dayOfMonth = date.getDate();
    const month = date.getMonth(); // 5=Jun, 6=Jul, 7=Aug
    const dayOfWeek = date.getDay(); // 0=Sun
    const pct = (d / totalDays) * 100;

    const isMonthStart = dayOfMonth === 1;
    const isWeekStart = dayOfWeek === 1; // Monday
    const is5th = dayOfMonth % 5 === 0;

    ticks.push({ d, pct, dayOfMonth, month, isMonthStart, isWeekStart, is5th, date });
  }

  const monthNames = ["", "", "", "", "", "June", "July", "August"];

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[52px] z-10 hidden md:block">
      {/* Background track */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-sand-800/30 rounded-full" />

      {ticks.map((t, i) => {
        // Month start — big label
        if (t.isMonthStart) {
          return (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
              style={{ top: `${t.pct}%` }}
            >
              <div className="w-[52px] h-[28px] rounded-md bg-sand-400/15 border border-sand-700/30 flex items-center justify-center -translate-x-1/2 ml-[26px]">
                <span className="text-sand-300 text-[10px] font-semibold uppercase tracking-wider">
                  {monthNames[t.month]}
                </span>
              </div>
            </div>
          );
        }

        // Every 5th day — date label
        if (t.is5th && t.dayOfMonth !== 30 && t.dayOfMonth !== 31) {
          return (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
              style={{ top: `${t.pct}%` }}
            >
              <div className="w-[28px] h-[18px] rounded-sm bg-night-900/80 border border-sand-800/20 flex items-center justify-center -translate-x-1/2 ml-[14px]">
                <span className="text-sand-500 text-[9px] font-medium">
                  {t.dayOfMonth}
                </span>
              </div>
              {/* Tick mark */}
              <div className="absolute left-1/2 -translate-x-1/2 w-[10px] h-[1px] bg-sand-700/30 -ml-[18px]" />
              <div className="absolute left-1/2 -translate-x-1/2 w-[10px] h-[1px] bg-sand-700/30 ml-[18px]" />
            </div>
          );
        }

        // Week start (Monday) — small tick
        if (t.isWeekStart && !t.is5th && !t.isMonthStart) {
          return (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${t.pct}%` }}
            >
              <div className="w-[8px] h-[1px] bg-sand-700/25 -translate-x-1/2 ml-[4px]" />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

// ============================================================================
// TIMELINE DATA
// ============================================================================

const timelineItems = [
  {
    type: "tour",
    id: "ara-festival",
    number: "01",
    title: "Ara Festival",
    dates: "June 20 – 26",
    days: 7,
    price: "$900",
    description:
      "Mongolia's traditional Ara (airag) festival — fermented mare's milk ceremonies, nomadic celebrations, horseback games, and the first taste of summer on the open steppe.",
    status: "available",
    style: "festival",
    emoji: "🥛",
    highlights: ["Airag tasting", "Nomadic games", "Horseback"],
  },
  {
    type: "gap",
    id: "gap-1",
    days: 4,
    label: "4 days open",
    sublabel: "June 27 – 30",
  },
  {
    type: "tour",
    id: "playtime",
    number: "02",
    title: "Playtime",
    dates: "July 1 – 6",
    days: 6,
    price: "$850",
    description:
      "A playful intro to Mongolia — eagle encounters, horseback rides across the steppe, nomadic games, archery lessons, and wide-open grasslands before the big festival season.",
    status: "available",
    style: "adventure",
    emoji: "🦅",
    highlights: ["Eagle hunting", "Archery", "Steppe riding"],
  },
  {
    type: "gap",
    id: "gap-2",
    days: 4,
    label: "4 days open",
    sublabel: "July 7 – 10",
  },
  {
    type: "tour",
    id: "naadam",
    number: "03",
    title: "Naadam Festival",
    dates: "July 11 – 15",
    days: 5,
    price: "$1,100",
    description:
      "Mongolia's legendary Three Manly Sports — wrestling, archery, and horse racing at the National Stadium in Ulaanbaatar. 2026 marks the 820th anniversary of the Mongol Empire.",
    status: "limited",
    style: "naadam",
    emoji: "🏇",
    highlights: ["Wrestling", "Horse racing", "Archery", "Opening ceremony"],
  },
  {
    type: "gap",
    id: "gap-3",
    days: 5,
    label: "5 days open",
    sublabel: "July 16 – 20",
  },
  {
    type: "tour",
    id: "south-july",
    number: "04",
    title: "South & Central Mongolia",
    dates: "July 21 – Aug 5",
    days: 16,
    price: "$1,500",
    description:
      "The full Gobi experience — Khongoriin Els singing sand dunes, Yolyn Am ice canyon, Flaming Cliffs of Bayanzag, camel trekking, then north through the steppe to Orkhon Valley.",
    status: "available",
    style: "expedition",
    emoji: "🐪",
    highlights: ["Gobi Desert", "Sand dunes", "Ice canyon", "Camel trek", "Steppe"],
  },
  {
    type: "gap",
    id: "gap-4",
    days: 2,
    label: "2 days",
    sublabel: "Aug 6 – 7",
  },
  {
    type: "tour",
    id: "south-august",
    number: "05",
    title: "South & Central Mongolia",
    dates: "Aug 8 – 20",
    days: 13,
    price: "$1,500",
    description:
      "Same legendary southern route — Gobi dunes, Flaming Cliffs, nomadic culture, stargazing under infinite skies. A second departure for those who missed July.",
    status: "available",
    style: "expedition-alt",
    emoji: "🌅",
    highlights: ["Gobi Desert", "Nomadic stays", "Stargazing", "Flaming Cliffs"],
  },
];

const PX_PER_DAY = 28;

// ============================================================================
// STATUS BADGES
// ============================================================================

function StatusBadge({ status }) {
  const styles = {
    available: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    limited: "bg-amber-500/15 text-amber-400 border-amber-500/25",
    sold_out: "bg-red-500/15 text-red-400 border-red-500/25",
  };
  const labels = {
    available: "Spots Available",
    limited: "Limited Spots",
    sold_out: "Sold Out",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border font-medium ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "available" ? "bg-emerald-400" : status === "limited" ? "bg-amber-400" : "bg-red-400"}`} />
      {labels[status]}
    </span>
  );
}

// ============================================================================
// CARD STYLES
// ============================================================================

const cardStyles = {
  festival: {
    card: "bg-gradient-to-br from-amber-900/30 via-night-900/70 to-night-900/80 border-amber-700/25 hover:border-amber-600/40",
    accent: "bg-amber-500",
    accentText: "text-amber-400",
    tagBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    glow: "shadow-amber-500/5",
  },
  adventure: {
    card: "bg-gradient-to-br from-emerald-900/25 via-night-900/70 to-night-900/80 border-emerald-700/25 hover:border-emerald-600/40",
    accent: "bg-emerald-500",
    accentText: "text-emerald-400",
    tagBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    glow: "shadow-emerald-500/5",
  },
  naadam: {
    card: "bg-gradient-to-br from-red-900/30 via-night-900/70 to-night-950/90 border-red-700/30 hover:border-red-500/40",
    accent: "bg-red-500",
    accentText: "text-red-400",
    tagBg: "bg-red-500/10 text-red-300 border-red-500/20",
    glow: "shadow-red-500/5",
  },
  expedition: {
    card: "bg-gradient-to-br from-sky-900/30 via-night-900/70 to-night-950/90 border-sky-700/25 hover:border-sky-500/40",
    accent: "bg-sky-500",
    accentText: "text-sky-400",
    tagBg: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    glow: "shadow-sky-500/5",
  },
  "expedition-alt": {
    card: "bg-gradient-to-br from-violet-900/25 via-night-900/70 to-night-950/90 border-violet-700/25 hover:border-violet-500/40",
    accent: "bg-violet-500",
    accentText: "text-violet-400",
    tagBg: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    glow: "shadow-violet-500/5",
  },
};

// ============================================================================
// TOUR CARD
// ============================================================================

function TourCard({ item, side }) {
  const s = cardStyles[item.style];
  return (
    <div className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-500 group hover:shadow-xl ${s.card} ${s.glow}`}>
      <div className={`flex items-center gap-3 mb-3 ${side === "left" ? "md:justify-end md:flex-row-reverse" : ""}`}>
        <span className="text-2xl">{item.emoji}</span>
        <div className={side === "left" ? "md:text-right" : ""}>
          <span className={`text-xs tracking-wider uppercase font-semibold ${s.accentText}`}>{item.dates}</span>
          <span className="text-sand-600 text-xs ml-2">{item.days} days</span>
        </div>
      </div>
      <h3 className={`font-display text-xl md:text-2xl text-sand-100 mb-2 ${side === "left" ? "md:text-right" : ""}`}>{item.title}</h3>
      <p className={`text-sand-400 text-sm leading-relaxed mb-4 ${side === "left" ? "md:text-right" : ""}`}>{item.description}</p>
      <div className={`flex flex-wrap gap-1.5 mb-4 ${side === "left" ? "md:justify-end" : ""}`}>
        {item.highlights.map((h, i) => (
          <span key={i} className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${s.tagBg}`}>{h}</span>
        ))}
      </div>
      <div className={`flex items-center gap-4 flex-wrap ${side === "left" ? "md:justify-end" : ""}`}>
        <span className="text-sand-200 text-sm font-semibold">From {item.price}</span>
        <StatusBadge status={item.status} />
      </div>
      <div className={`mt-4 ${side === "left" ? "md:text-right" : ""}`}>
        <Link href={`/tours/${item.id}`} className={`text-sm tracking-wider uppercase transition-colors duration-300 inline-flex items-center gap-1.5 font-medium ${s.accentText} hover:text-sand-100`}>
          View Details <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </Link>
      </div>
    </div>
  );
}

// ============================================================================
// GAP CARD
// ============================================================================

function GapCard({ item, side }) {
  return (
    <div className="border border-dashed border-sand-800/40 rounded-lg px-5 py-4 bg-night-900/30 backdrop-blur-sm hover:border-sand-700/50 hover:bg-night-900/50 transition-all duration-300 group">
      <div className={`flex items-center gap-3 ${side === "left" ? "md:justify-end md:flex-row-reverse" : ""}`}>
        <div className="w-8 h-8 rounded-full border border-sand-700/40 flex items-center justify-center">
          <span className="text-sand-500 text-xs">+</span>
        </div>
        <div className={side === "left" ? "md:text-right" : ""}>
          <p className="text-sand-400 text-xs font-medium">{item.sublabel}</p>
          <p className="text-sand-500 text-[11px]">Custom tour · {item.label}</p>
        </div>
        <Link href="/book" className="ml-auto text-[10px] uppercase tracking-wider text-sand-500 hover:text-sand-300 border border-sand-800/30 rounded-full px-3 py-1 hover:border-sand-600/40 transition-all opacity-70 group-hover:opacity-100">
          Book
        </Link>
      </div>
    </div>
  );
}

// ============================================================================
// ROAD TIMELINE with Calendar Spine + Nature Illustrations
// ============================================================================

function RoadTimeline() {
  let tourIndex = 0;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Nature illustrations — scattered along both sides */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {natureElements.map((el, i) => {
            const style = { top: el.top, width: el.width };
            if (el.left) style.left = el.left;
            if (el.right) style.right = el.right;
            return (
              <div key={i} className={`absolute ${el.color}`} style={style}>
                <el.Component />
              </div>
            );
          })}
        </div>

        {/* Calendar spine — desktop */}
        <CalendarSpine />

        {/* Simple mobile line */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-sand-800/60 via-sand-700/40 to-sand-800/60 rounded-full" />

        {/* Timeline items */}
        <div className="relative z-10">
          {timelineItems.map((item, idx) => {
            const height = item.days * PX_PER_DAY;
            const isTour = item.type === "tour";
            const side = isTour
              ? tourIndex % 2 === 0 ? "left" : "right"
              : tourIndex % 2 === 0 ? "right" : "left";

            if (isTour) tourIndex++;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                style={{ minHeight: `${Math.max(height, isTour ? 180 : 60)}px` }}
                className="relative flex items-start"
              >
                {/* DESKTOP */}
                <div className="hidden md:flex w-full items-start">
                  <div className="flex-1 pr-12">
                    {side === "left" && isTour && <TourCard item={item} side="left" />}
                    {side === "left" && !isTour && <GapCard item={item} side="left" />}
                  </div>

                  {/* Center node — on calendar spine */}
                  <div className="relative flex-shrink-0 w-[52px] flex justify-center">
                    {isTour ? (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-20 shadow-lg text-night-950 font-bold text-xs ${cardStyles[item.style].accent}`}>
                        {item.number}
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-dashed border-sand-700/40 bg-night-950 z-20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-sand-600/40" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 pl-12">
                    {side === "right" && isTour && <TourCard item={item} side="right" />}
                    {side === "right" && !isTour && <GapCard item={item} side="right" />}
                  </div>
                </div>

                {/* MOBILE */}
                <div className="md:hidden flex w-full items-start gap-5">
                  <div className="flex-shrink-0 w-12 flex justify-center relative">
                    {isTour ? (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center z-20 shadow-lg text-night-950 font-bold text-[10px] ${cardStyles[item.style]?.accent || "bg-sand-500"}`}>
                        {item.number}
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-dashed border-sand-700/40 bg-night-950 z-20 flex items-center justify-center mt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sand-600/40" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    {isTour ? <TourCard item={item} side="right" /> : <GapCard item={item} side="right" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* End marker */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 z-20">
          <div className="w-[52px] h-[22px] rounded-md bg-sand-400/10 border border-sand-700/20 flex items-center justify-center -translate-x-[0px]">
            <span className="text-sand-500 text-[9px] tracking-wider uppercase">End</span>
          </div>
        </div>
      </div>
    </section>
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
        <Image src="/images/tours/north-central.jpg" alt="Mongolia Tours" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/60 via-night-950/30 to-night-950" />

        {/* Nature silhouette at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 text-night-950 z-10">
          <MountainSVG className="w-full h-20 md:h-28" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-sand-400 mb-4">2026 SEASON</p>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Your Journey Starts Here</h1>
            <p className="text-sand-300 max-w-xl mx-auto px-6">Follow the road through Mongolia&apos;s summer season — festivals, deserts, steppe, and everything in between.</p>
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

      {/* Season date range label */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-4">
        <div className="flex items-center gap-4 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-sand-800/30" />
          <p className="text-sand-500 text-xs tracking-[0.25em] uppercase font-medium">June 20 → August 20, 2026</p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-sand-800/30" />
        </div>
      </div>

      {/* Timeline */}
      <RoadTimeline />

      {/* Route overview cards */}
      <section className="py-20 border-t border-sand-900/20 relative overflow-hidden">
        {/* Background nature */}
        <div className="absolute top-10 left-0 text-sand-400 w-[250px] opacity-50"><DunesSVG /></div>
        <div className="absolute bottom-10 right-0 text-sand-400 w-[200px] opacity-50"><MountainSVG /></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">ROUTES</p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100">Three Ways to Explore</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Festival Tours", duration: "5–7 Days", price: "From $850", items: ["Ara Festival", "Playtime", "Naadam"], desc: "Short, punchy trips built around Mongolia's biggest cultural moments.", color: "from-amber-500 to-amber-600", border: "border-amber-700/20 hover:border-amber-600/40" },
              { title: "South & Central", duration: "13–17 Days", price: "From $1,500", items: ["Gobi Desert", "Sand Dunes", "Steppe"], desc: "The full Mongolian experience — desert to grassland in one epic ride.", color: "from-sky-500 to-sky-600", border: "border-sky-700/20 hover:border-sky-600/40" },
              { title: "Custom Tours", duration: "Flexible", price: "From $900", items: ["Your dates", "Your group", "Your route"], desc: "Build your own adventure. Any time between May and October.", color: "from-sand-400 to-sand-500", border: "border-sand-700/20 hover:border-sand-600/40" },
            ].map((route, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={`bg-night-900/60 border rounded-xl p-8 hover:shadow-lg transition-all duration-500 h-full flex flex-col ${route.border}`}>
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
                      <div key={i} className="flex items-center gap-2 text-sm text-sand-500"><span className="text-sand-600">→</span>{item}</div>
                    ))}
                  </div>
                  <Link href="/book" className="text-sand-400 hover:text-sand-200 text-sm tracking-wider uppercase transition-colors duration-300">Book Now →</Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-sand-900/20 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 font-display text-2xl text-sand-100">Not sure which tour?</h2>
            <p className="mb-8 text-sand-400">Every journey is flexible and personal. Contact me and we&apos;ll find the perfect adventure for you.</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/book" className="inline-block bg-sand-400 px-6 py-3 text-sm uppercase tracking-wider text-night-950 transition hover:bg-sand-300 rounded-sm">Book Now</Link>
              <a href="mailto:hello@tugo.mn" className="inline-block border border-sand-400/40 px-6 py-3 text-sm uppercase tracking-wider text-sand-400 transition hover:bg-sand-400/10 rounded-sm">Ask a Question</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
