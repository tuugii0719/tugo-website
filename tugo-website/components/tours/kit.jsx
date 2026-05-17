"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Full static class maps so Tailwind JIT can pick them up ---------------------

export const accentTextMap = {
  sky: "text-sky-400",
  rose: "text-rose-400",
  teal: "text-teal-400",
  emerald: "text-emerald-400",
  red: "text-red-400",
  indigo: "text-indigo-400",
  lime: "text-lime-400",
  orange: "text-orange-400",
  amber: "text-amber-400",
  violet: "text-violet-400",
};

const accentButtonMap = {
  sky: "bg-sky-500 hover:bg-sky-400 text-night-950",
  rose: "bg-rose-500 hover:bg-rose-400 text-night-950",
  teal: "bg-teal-500 hover:bg-teal-400 text-night-950",
  emerald: "bg-emerald-500 hover:bg-emerald-400 text-night-950",
  red: "bg-red-500 hover:bg-red-400 text-night-950",
  indigo: "bg-indigo-500 hover:bg-indigo-400 text-night-950",
  lime: "bg-lime-500 hover:bg-lime-400 text-night-950",
  orange: "bg-orange-500 hover:bg-orange-400 text-night-950",
  amber: "bg-amber-500 hover:bg-amber-400 text-night-950",
  violet: "bg-violet-500 hover:bg-violet-400 text-night-950",
};

const ctaBoxMap = {
  sky: "border-sky-800/30 from-sky-900/25",
  rose: "border-rose-800/30 from-rose-900/25",
  teal: "border-teal-800/30 from-teal-900/25",
  emerald: "border-emerald-800/30 from-emerald-900/25",
  red: "border-red-800/30 from-red-900/25",
  indigo: "border-indigo-800/30 from-indigo-900/25",
  lime: "border-lime-800/30 from-lime-900/25",
  orange: "border-orange-800/30 from-orange-900/25",
  amber: "border-amber-800/30 from-amber-900/25",
  violet: "border-violet-800/30 from-violet-900/25",
};

const includedCardMap = {
  sky: "border-sky-800/30 bg-sky-900/10",
  rose: "border-rose-800/30 bg-rose-900/10",
  teal: "border-teal-800/30 bg-teal-900/10",
  emerald: "border-emerald-800/30 bg-emerald-900/10",
  red: "border-red-800/30 bg-red-900/10",
  indigo: "border-indigo-800/30 bg-indigo-900/10",
  lime: "border-lime-800/30 bg-lime-900/10",
  orange: "border-orange-800/30 bg-orange-900/10",
  amber: "border-amber-800/30 bg-amber-900/10",
  violet: "border-violet-800/30 bg-violet-900/10",
};

const nodeColorMap = {
  sky: "bg-sky-500/20 border-sky-400/40 text-sky-200",
  rose: "bg-rose-500/20 border-rose-400/40 text-rose-200",
  teal: "bg-teal-500/20 border-teal-400/40 text-teal-200",
  emerald: "bg-emerald-500/20 border-emerald-400/40 text-emerald-200",
  red: "bg-red-500/20 border-red-400/40 text-red-200",
  indigo: "bg-indigo-500/20 border-indigo-400/40 text-indigo-200",
  lime: "bg-lime-500/20 border-lime-400/40 text-lime-200",
  orange: "bg-orange-500/20 border-orange-400/40 text-orange-200",
  amber: "bg-amber-500/20 border-amber-400/40 text-amber-200",
  violet: "bg-violet-500/20 border-violet-400/40 text-violet-200",
};

const trailGradientMap = {
  sky: "from-sky-500/30 via-sky-700/20 to-transparent",
  rose: "from-rose-500/30 via-rose-700/20 to-transparent",
  teal: "from-teal-500/30 via-teal-700/20 to-transparent",
  emerald: "from-emerald-500/30 via-emerald-700/20 to-transparent",
  red: "from-red-500/30 via-red-700/20 to-transparent",
  indigo: "from-indigo-500/30 via-indigo-700/20 to-transparent",
  lime: "from-lime-500/30 via-lime-700/20 to-transparent",
  orange: "from-orange-500/30 via-orange-700/20 to-transparent",
  amber: "from-amber-500/30 via-amber-700/20 to-transparent",
  violet: "from-violet-500/30 via-violet-700/20 to-transparent",
};

// ============================================================================
// PRIMITIVES
// ============================================================================

export function Kicker({ children, accent = "sky" }) {
  return (
    <p className={`${accentTextMap[accent]} text-[11px] tracking-[0.3em] uppercase mb-3`}>
      {children}
    </p>
  );
}

export function SectionHead({ kicker, title, center = false, accent = "sky" }) {
  return (
    <div className={center ? "text-center mb-10 md:mb-14" : "mb-8 md:mb-12"}>
      {kicker && <Kicker accent={accent}>{kicker}</Kicker>}
      <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
}

export function Signature() {
  return (
    <svg viewBox="0 0 180 50" className="h-10 w-auto text-sand-300" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 6 12 L 22 12 M 14 12 L 14 36" />
      <path d="M 28 20 C 28 34, 38 36, 40 24 M 40 20 L 40 36" />
      <path d="M 56 20 C 46 20, 46 32, 54 32 C 60 32, 60 20, 56 20 M 60 20 L 60 40 C 60 46, 50 46, 48 42" />
      <path d="M 68 20 L 68 36 M 68 14 L 68 15" />
      <path d="M 78 34 Q 100 8, 150 28 Q 165 32, 174 22" opacity="0.6" />
    </svg>
  );
}

// ============================================================================
// HERO
// ============================================================================

export function TourHero({ image, kicker, meta = [], title, subtitle, accent = "sky" }) {
  return (
    <section className="relative h-[86vh] min-h-[580px] overflow-hidden">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-night-950" />

      <div className="absolute inset-0 flex items-end pb-14 md:pb-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-sand-300 text-[11px] tracking-[0.3em] uppercase mb-5 hover:text-sand-100 transition-colors"
            >
              ← 2026 Season
            </Link>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <p className={`${accentTextMap[accent].replace("text-", "text-").replace("-400", "-300")} text-[11px] tracking-[0.3em] uppercase`}>{kicker}</p>
              {meta.map((m, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span className="text-sand-700">·</span>
                  <span className="text-sand-400 text-[11px] tracking-[0.3em] uppercase">{m}</span>
                </span>
              ))}
            </div>
            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6 max-w-3xl"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-sand-200 text-lg md:text-xl max-w-xl leading-relaxed">{subtitle}</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 6, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2.5 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sand-500 text-xs tracking-[0.3em] uppercase"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}

// ============================================================================
// VITALS STRIP
// ============================================================================

export function VitalsStrip({ items }) {
  return (
    <section className="border-y border-sand-900/30 bg-night-900/40">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-sm">
        {items.map((x) => (
          <div key={x.l}>
            <p className="text-sand-500 text-[10px] tracking-[0.2em] uppercase mb-1">{x.l}</p>
            <p className="text-sand-100 font-display">{x.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// PROLOGUE — letter from Tugi
// ============================================================================

export function Prologue({ kicker = "A letter from Tugi", title, paragraphs, accent = "sky" }) {
  return (
    <section className="py-20 md:py-28 border-b border-sand-900/30">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <Kicker accent={accent}>{kicker}</Kicker>
          <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight mb-8">
            {title}
          </h2>
          <div className="space-y-5 text-sand-300 text-lg leading-relaxed">
            {paragraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
          </div>
          <div className="mt-10 flex items-center gap-4">
            <Signature />
            <span className="text-sand-500 text-sm italic">— Tugi</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// ITINERARY — supports grouped (acts) or flat
// ============================================================================

export function Itinerary({ kicker = "Itinerary", title = "Day by day.", days, acts, accent = "sky" }) {
  // If acts provided, group visually. Each day has .act (index into acts).
  const showGroups = Array.isArray(acts) && acts.length > 0;

  return (
    <section className="py-20 md:py-28 border-b border-sand-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHead kicker={kicker} title={title} center accent={accent} />

        <div className="relative">
          <div className={`absolute left-3 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b ${trailGradientMap[accent]}`} />
          <div className="space-y-5 md:space-y-7">
            {days.map((day, idx) => {
              const dayAccent = showGroups && day.act !== undefined ? acts[day.act].accent : accent;
              const showActHead = showGroups && (idx === 0 || days[idx - 1].act !== day.act);
              const act = showGroups && day.act !== undefined ? acts[day.act] : null;
              return (
                <div key={day.n}>
                  {showActHead && act && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className={`ml-10 md:ml-16 mb-2 ${idx === 0 ? "mt-0" : "mt-6"}`}
                    >
                      <p className={`text-[10px] tracking-[0.3em] uppercase ${accentTextMap[act.accent].replace("-400", "-300")}`}>
                        {act.label}
                      </p>
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: idx * 0.02 }}
                    className="relative pl-10 md:pl-16"
                  >
                    <div className={`absolute left-0 md:left-2 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center font-display text-[10px] md:text-xs ${nodeColorMap[dayAccent]}`}>
                      {day.n}
                    </div>
                    <h3 className="font-display text-lg md:text-xl text-sand-100 mb-1">{day.t}</h3>
                    <p className="text-sand-400 text-base leading-relaxed">{day.d}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PULL QUOTE (inside photo essay)
// ============================================================================

export function PullQuote({ quote, attribution, accent = "sky" }) {
  const borderMap = {
    sky: "border-sky-400/50",
    rose: "border-rose-400/50",
    teal: "border-teal-400/50",
    emerald: "border-emerald-400/50",
    red: "border-red-400/50",
    indigo: "border-indigo-400/50",
    lime: "border-lime-400/50",
    orange: "border-orange-400/50",
    amber: "border-amber-400/50",
    violet: "border-violet-400/50",
  };
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mx-auto py-10 md:py-14 border-l-2 ${borderMap[accent]} pl-6 md:pl-8`}
    >
      <p className="font-display text-2xl md:text-3xl text-sand-100 italic leading-snug">
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && <footer className="mt-4 text-sand-500 text-sm">{attribution}</footer>}
    </motion.blockquote>
  );
}

// ============================================================================
// INCLUDED / BRING — two-column comparison
// ============================================================================

export function IncludedBring({ priceLabel, included, bring, accent = "sky", note }) {
  return (
    <section className="py-20 md:py-28 border-b border-sand-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHead kicker="Practicals" title="What&rsquo;s included, what to bring." center accent={accent} />
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`rounded-2xl border p-6 md:p-8 ${includedCardMap[accent]}`}>
            <h3 className="font-display text-xl text-sand-100 mb-5 flex items-center gap-2">
              <span className={accentTextMap[accent]}>✓</span>
              Included in {priceLabel}
            </h3>
            <ul className="space-y-3 text-sand-300 text-sm leading-relaxed">
              {included.map((i) => (
                <li key={i} className="flex gap-3">
                  <span className={`${accentTextMap[accent]} mt-0.5`}>·</span>
                  <span dangerouslySetInnerHTML={{ __html: i }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-sand-800/40 bg-night-900/40 p-6 md:p-8">
            <h3 className="font-display text-xl text-sand-100 mb-5 flex items-center gap-2">
              <span className="text-sand-400">◇</span>
              You bring
            </h3>
            <ul className="space-y-3 text-sand-300 text-sm leading-relaxed">
              {bring.map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-sand-500 mt-0.5">·</span>
                  <span dangerouslySetInnerHTML={{ __html: i }} />
                </li>
              ))}
            </ul>
            {note && (
              <p className="mt-5 pt-5 border-t border-sand-800/40 text-sand-500 text-xs italic" dangerouslySetInnerHTML={{ __html: note }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FAQ
// ============================================================================

export function TourFAQ({ items, kicker = "Before you apply", title = "Answers to the usual questions.", accent = "sky" }) {
  return (
    <section className="py-20 md:py-28 border-b border-sand-900/30">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHead kicker={kicker} title={title} center accent={accent} />
        <div className="space-y-2">
          {items.map((f) => (
            <details
              key={f.q}
              className="group border border-sand-800/40 rounded-xl bg-night-900/30 open:bg-night-900/50 transition-colors"
            >
              <summary className="cursor-pointer px-5 py-4 text-sand-200 font-medium flex items-center justify-between list-none">
                <span>{f.q}</span>
                <span className="text-sand-600 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-5 pb-5 text-sand-400 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA
// ============================================================================

export function TourCTA({ title, subtitle, emailSubject, accent = "sky" }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`relative overflow-hidden rounded-3xl border ${ctaBoxMap[accent]} bg-gradient-to-br via-night-900/60 to-night-900/80 p-8 md:p-12`}
        >
          <Kicker accent={accent}>Come with me</Kicker>
          <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-4" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-sand-300 text-lg mb-8 max-w-xl leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/book"
              className={`inline-flex items-center justify-center ${accentButtonMap[accent]} px-7 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-sm transition`}
            >
              Reserve a Spot
            </Link>
            <a
              href={`mailto:tuklobin@gmail.com?subject=${encodeURIComponent(emailSubject || "Tour inquiry")}`}
              className="inline-flex items-center justify-center border border-sand-400/40 hover:border-sand-300 hover:bg-sand-400/10 text-sand-300 hover:text-sand-100 px-7 py-3.5 text-xs uppercase tracking-[0.15em] rounded-sm transition"
            >
              Ask a question
            </a>
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/tours" className="text-sand-500 hover:text-sand-300 text-[11px] tracking-[0.3em] uppercase transition-colors">
            ← All tours
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// GER ETIQUETTE card (reusable small block)
// ============================================================================

export function GerEtiquette() {
  return (
    <div className="rounded-xl border border-sand-800/40 bg-night-900/40 p-5">
      <p className="text-sand-500 text-[10px] tracking-[0.25em] uppercase mb-3">Your first ger visit</p>
      <ul className="space-y-2 text-sand-300 text-sm leading-relaxed">
        {[
          "Enter right foot first, move clockwise inside.",
          "Never touch the two central columns — they hold the sky up.",
          "Receive food and drink with the right hand.",
          "Don't step on the threshold; don't whistle indoors.",
          "Accept the bowl of milk tea — a sip is enough.",
        ].map((rule) => (
          <li key={rule} className="flex gap-2">
            <span className="text-sand-600">·</span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// DEPARTURES BOX — for tours with 2+ dates
// ============================================================================

export function Departures({ list, accent = "sky" }) {
  const borderMap = {
    sky: "border-sky-800/30 bg-sky-900/10",
    teal: "border-teal-800/30 bg-teal-900/10",
    indigo: "border-indigo-800/30 bg-indigo-900/10",
    red: "border-red-800/30 bg-red-900/10",
    amber: "border-amber-800/30 bg-amber-900/10",
    lime: "border-lime-800/30 bg-lime-900/10",
    orange: "border-orange-800/30 bg-orange-900/10",
    emerald: "border-emerald-800/30 bg-emerald-900/10",
    rose: "border-rose-800/30 bg-rose-900/10",
    violet: "border-violet-800/30 bg-violet-900/10",
  };
  const textMap = {
    sky: "text-sky-300",
    teal: "text-teal-300",
    indigo: "text-indigo-300",
    red: "text-red-300",
    amber: "text-amber-300",
    lime: "text-lime-300",
    orange: "text-orange-300",
    emerald: "text-emerald-300",
    rose: "text-rose-300",
    violet: "text-violet-300",
  };
  return (
    <section className="border-b border-sand-900/30 bg-night-900/40">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className={`grid gap-3 md:grid-cols-${Math.min(list.length, 3)}`} style={{ gridTemplateColumns: `repeat(${Math.min(list.length, 3)}, minmax(0, 1fr))` }}>
          {list.map((d) => (
            <div key={d.label} className={`border ${borderMap[accent]} rounded-xl p-5 flex items-center gap-3 flex-wrap`}>
              <span className={`${textMap[accent]} text-xs tracking-[0.2em] uppercase font-semibold`}>
                {d.label}
              </span>
              <span className="text-sand-700">·</span>
              <span className="text-sand-100 font-display text-lg">{d.dates}</span>
              {d.days && (
                <>
                  <span className="text-sand-700">·</span>
                  <span className="text-sand-400 text-sm">{d.days} days</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
