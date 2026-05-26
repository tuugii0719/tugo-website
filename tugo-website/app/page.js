"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

// ============================================================================
// HOME — dark profile to match the rest of the site
// Structure inspired by the AKINA reference (glass-card hero, rounded panels,
// editorial pairs) but rendered in the night/sand palette.
// ============================================================================

// ============================================================================
// HERO SLIDES — six characteristics, not six destinations.
// The destinations sell themselves; the way *this* trip feels is the actual
// pitch. Photos are placeholders — swap each src to match the slide's subject:
//   1. The vibe    → calm interior moment (ger, fire, someone reading, no phones)
//   2. The rhythm  → unhurried scene, weather rolling in, herd crossing the road
//   3. The care    → quiet attention — Tugi listening, hand on a shoulder, real presence
//   4. The camping → mix of a family ger + our tent camp, fire crackling, stars or sunrise
//   5. The hosts   → meal with a family — khorkhog, hands reaching in, kitchen scene
//   6. The group   → small group of 4–7 walking together, intimate scale, sun behind
// ============================================================================
const heroSlides = [
  { src: "/images/tours/north-central/DSC02464-hero.jpg", kicker: "The vibe",    headline: "A trip, not a tour.",        tagline: "Slow, real, present." },
  { src: "/images/gallery/DSC08200.jpg",                  kicker: "The rhythm",  headline: "Flexible by design.",        tagline: "Plans bend to the weather, the herds, the people." },
  { src: "/images/gallery/DSC01810.jpg",                  kicker: "The care",    headline: "Looked after, always.",      tagline: "I notice when you’re cold, quiet, or worn down. I show up." },
  { src: "/images/gallery/DSC02431.jpg",                  kicker: "The camping", headline: "Gers & tents.",          tagline: "Cheaper, wilder, stars uninterrupted." },
  { src: "/images/gallery/DSC01857.jpg",                  kicker: "The hosts",   headline: "Guest, not tourist.",        tagline: "Real homes. Real food. Real welcome." },
  { src: "/images/gallery/DSC02365.jpg",                  kicker: "The group",   headline: "Four to seven. Never more.", tagline: "Small enough to actually know each other." },
];

const sliderTours = [
  { slug: "terelj-escape",     title: "Terelj Escape",            emoji: "🌲", dates: "Jun 5 – 7",   days: 3,  price: "$300",   img: "/images/destinations/terelj-park.jpg",        accent: "text-teal-300" },
  { slug: "gobi-glimpse",      title: "Gobi Glimpse + Central",   emoji: "🏜️", dates: "Jun 10 – 18", days: 9,  price: "$1,000", img: "/images/gallery/DSC08000.jpg",                accent: "text-orange-300" },
  { slug: "khagiin-khar-nuur", title: "Horse Trek · Khagiin Khar",emoji: "🐎", dates: "Jun 22 – 27", days: 6,  price: "$900",   img: "/images/gallery/DSC01684.jpg",                accent: "text-lime-300", soldOut: true },
  { slug: "playtime",          title: "Playtime Music Festival",  emoji: "🎶", dates: "Jul 1 – 4",   days: 4,  price: "$450",   img: "/images/playtime/poster.jpg",                 accent: "text-fuchsia-300" },
  { slug: "naadam",            title: "Naadam Festival",          emoji: "🏇", dates: "Jul 8 – 14",  days: 7,  price: "$700",   img: "/images/destinations/naadam-horse-racer.jpg", accent: "text-red-300" },
  { slug: "north-central",     title: "North & Central Loop",     emoji: "🐪", dates: "Jul 21 – 31", days: 11, price: "$1,200", img: "/images/tours/north-central/DSC02464.jpg",    accent: "text-sky-300" },
  { slug: "altai-tavan-bogd",  title: "Altai Tavan Bogd",         emoji: "🏔️", dates: "Aug 3 – 8",   days: 6,  price: "$900",   img: "/images/destinations/altai-peaks.jpg",        accent: "text-indigo-300" },
  { slug: "southern-gobi",     title: "Southern Gobi + Central",  emoji: "🏜️", dates: "Aug 18 – 28", days: 11, price: "$1,200", img: "/images/destinations/khongoryn-1.jpg",        accent: "text-amber-300" },
];

// ============================================================================
// HERO — glass card holding a rotating photo on the night-950 base
// ============================================================================

function HeroSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-night-950 pt-24 sm:pt-28 md:pt-24 px-4 md:px-8 pb-20">
      {/* Subtle gradient wash so the page doesn't feel flat */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-900/40 via-night-950 to-night-950 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative">
        {/* Glass-card frame around the rotating photo */}
        <div className="relative rounded-[28px] md:rounded-[36px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] border border-sand-800/30 bg-night-900/40 backdrop-blur-sm">
          <div className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroSlides[i].src}
                  alt=""
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

            {/* Top frosted pill */}
            <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-sand-300/30">
              <div className="w-1.5 h-1.5 rounded-full bg-sand-200" />
              <p className="text-sand-100 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium">Wild Mongolia with Tugi</p>
              <div className="w-1.5 h-1.5 rounded-full bg-sand-200" />
            </div>

            {/* Centered hero copy */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="text-sand-200 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3 md:mb-5">
                    {heroSlides[i].kicker}
                  </p>
                  <h1
                    className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1] max-w-3xl"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85), 0 8px 32px rgba(0,0,0,0.7)" }}
                  >
                    {heroSlides[i].headline}
                  </h1>
                  {heroSlides[i].tagline && (
                    <p
                      className="mt-4 md:mt-5 font-display italic text-sand-200 text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto"
                      style={{ textShadow: "0 2px 8px rgba(0,0,0,0.75)" }}
                    >
                      {heroSlides[i].tagline}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>

              <Link
                href="/tours"
                className="mt-8 md:mt-10 inline-flex items-center gap-2 bg-sand-400 hover:bg-sand-300 text-night-950 px-7 py-3 rounded-full text-xs md:text-sm tracking-wider font-semibold transition-colors"
              >
                View 2026 trips
              </Link>
            </div>

            {/* Bottom frosted pills */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-1 md:gap-2 px-2 py-2 rounded-full bg-black/40 backdrop-blur-md border border-sand-300/30 text-[10px] md:text-xs">
              {[
                { icon: "✉", label: "tuklobin@gmail.com" },
                { icon: "@", label: "mongoladventure" },
                { icon: "✦", label: "11 departures" },
              ].map((c) => (
                <span key={c.label} className="flex items-center gap-1.5 px-3 py-1 text-sand-100 whitespace-nowrap">
                  <span className="text-sand-300">{c.icon}</span>
                  <span>{c.label}</span>
                </span>
              ))}
            </div>

            {/* Slide dots */}
            <div className="absolute bottom-3 right-4 md:bottom-5 md:right-6 flex gap-1.5">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    idx === i ? "bg-sand-100 w-7" : "bg-sand-100/40 w-3 hover:bg-sand-100/70"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// TAGLINE + TOURS RAIL
// ============================================================================

function TaglineSection() {
  return (
    <section className="bg-night-950 py-20 md:py-28 lg:py-32 px-4 md:px-8 overflow-hidden border-y border-sand-900/30">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-sand-400 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 md:mb-6 text-center">
          About
        </p>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: tagline panel */}
          <div className="lg:col-span-5 min-w-0">
            <FadeIn>
              <div className="rounded-[28px] md:rounded-[36px] bg-night-900/40 border border-sand-800/40 p-8 md:p-10 lg:p-12 backdrop-blur-sm">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sand-100 leading-[1.05] mb-6">
                  It&apos;s not
                  <br />a tour company.
                  <br />
                  <span className="text-sand-300 italic">It&apos;s me, showing you around.</span>
                </h2>
                <p className="text-sand-400 text-sm md:text-base leading-relaxed mb-6">
                  If you love life, exploring the unknown and yourself — I&apos;m glad you&apos;re here. I&apos;m here with burning passion to give you an amazing, maybe even life-changing journey.
                </p>
                <Link
                  href="/why-tour-tugo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sand-400/40 text-sand-200 text-xs tracking-wider hover:bg-sand-400/10 hover:border-sand-300 transition-colors"
                >
                  Why tour with me →
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right: sliding tour cards */}
          <div className="lg:col-span-7 relative w-full min-w-0">
            <FadeIn delay={0.1}>
              <div className="flex items-baseline justify-between mb-5 px-1">
                <p className="text-sand-500 text-[10px] tracking-[0.3em] uppercase">
                  The 2026 lineup
                </p>
                <p className="text-sand-600 text-[10px] tracking-wider hidden md:block">
                  ← scroll →
                </p>
              </div>

              <div
                className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mr-12 lg:pr-12 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
              >
                {sliderTours.map((t, i) => (
                  <Link
                    key={`${t.slug}-${i}`}
                    href={`/tours/${t.slug}`}
                    className="snap-start flex-shrink-0 w-[240px] md:w-[260px] rounded-[24px] overflow-hidden bg-night-900/60 border border-sand-800/40 hover:border-sand-600/60 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] transition-all group"
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={t.img}
                        alt={t.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="260px"
                      />
                    </div>
                    <div className="p-4 md:p-5">
                      <p className={`${t.accent} text-[10px] tracking-[0.2em] uppercase mb-1.5 font-medium`}>
                        {t.dates}
                      </p>
                      <h3 className="font-display text-base md:text-lg text-sand-100 leading-tight mb-1">
                        <span className="mr-1.5">{t.emoji}</span>
                        {t.title}
                      </h3>
                      <p className="text-sand-500 text-xs">
                        {t.days} days · <span className="text-sand-300 font-medium">{t.price}</span>
                      </p>
                    </div>
                  </Link>
                ))}
                {/* End cap */}
                <Link
                  href="/tours"
                  className="snap-start flex-shrink-0 w-[200px] md:w-[220px] rounded-[24px] border border-sand-400/40 bg-sand-400/5 hover:bg-sand-400/15 hover:border-sand-300/60 transition-colors flex items-center justify-center text-center p-6"
                >
                  <div>
                    <p className="font-display text-2xl text-sand-100 mb-2">See all 11 →</p>
                    <p className="text-sand-400 text-xs">Calendar view</p>
                  </div>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FEATURE BAND — paired editorial cards
// ============================================================================

function FeatureBand() {
  return (
    <section className="bg-night-950 px-4 md:px-8 pb-20 md:pb-28">
      <div className="max-w-[1400px] mx-auto space-y-5">

        {/* Card 1: small group */}
        <div className="grid md:grid-cols-2 gap-0 rounded-[28px] md:rounded-[36px] overflow-hidden bg-night-900/60 border border-sand-800/40">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
            <Image
              src="/images/gallery/DSC01558.jpg"
              alt="Family ger camp on the steppe"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="text-sand-400 text-[10px] tracking-[0.3em] uppercase mb-3 font-medium">
              The way I run it
            </p>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-sand-100 leading-tight mb-4">
              Small groups,
              <br />real hosts.
            </h3>
            <p className="text-sand-400 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              5 to 7 people max. Most nights you&apos;re in a Mongolian family&apos;s ger, eating what they eat, sitting in their kitchen. The kind of access a coach bus can&apos;t give you.
            </p>
            <Link
              href="/tours"
              className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full bg-sand-400 hover:bg-sand-300 text-night-950 text-xs tracking-wider font-semibold transition-colors"
            >
              View 2026 trips
            </Link>
          </div>
        </div>

        {/* Card 2: private + custom */}
        <div className="grid md:grid-cols-2 gap-0 rounded-[28px] md:rounded-[36px] overflow-hidden bg-night-900 border border-sand-800/40">
          <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <p className="text-sand-400 text-[10px] tracking-[0.3em] uppercase mb-3 font-medium">
              Private &amp; custom
            </p>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-sand-100 leading-tight mb-4">
              Your own group?
              <br />Your own dates?
            </h3>
            <p className="text-sand-400 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              I run private trips by request — any route, any size, any time between May and October. Tell me what you&apos;re thinking and we&apos;ll build it together.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sand-400 hover:bg-sand-300 text-night-950 text-xs tracking-wider font-semibold transition-colors"
              >
                Apply
              </Link>
              <Link
                href="/why-tour-tugo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sand-400/40 text-sand-200 text-xs tracking-wider hover:bg-sand-400/10 hover:border-sand-300 transition-colors"
              >
                About me
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px] order-1 md:order-2">
            <Image
              src="/images/tours/north-central/DSC02464-hero.jpg"
              alt="Khuvsgul lake at dusk"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOUR PILLARS
// ============================================================================

function PillarsSection() {
  const pillars = [
    { icon: "✦", title: "Routes I know", body: "Every trip is a road I&apos;ve driven many times — families I trust, weather I read, camps I&apos;d stay at myself." },
    { icon: "♦", title: "Small group", body: "5 to 7 people max. Real conversations, real depth, no losing your group at lunch." },
    { icon: "○", title: "All in", body: "Most tours include flight, food, lodging, guide, permits — show up with your boots and a warm layer." },
    { icon: "△", title: "Personal", body: "I read every booking and reply within 48 hours. We confirm after a short conversation." },
  ];
  return (
    <section className="bg-night-950 px-4 md:px-8 pb-20 md:pb-28">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-sand-400 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 text-center">
          What you&rsquo;re getting
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-sand-100 text-center leading-tight mb-12 md:mb-16">
          Four things I promise.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {pillars.map((p) => (
            <FadeIn key={p.title}>
              <div className="rounded-[20px] bg-night-900/60 border border-sand-800/40 p-6 md:p-7 h-full">
                <div className="w-10 h-10 rounded-full bg-sand-400/10 border border-sand-400/30 flex items-center justify-center text-sand-300 text-lg mb-4">
                  {p.icon}
                </div>
                <h3 className="font-display text-base md:text-lg text-sand-100 mb-2">{p.title}</h3>
                <p className="text-sand-400 text-xs md:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p.body }} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FINAL CTA
// ============================================================================

function FinalCTA() {
  return (
    <section className="relative px-4 md:px-8 pb-20 md:pb-28 bg-night-950">
      <div className="max-w-[1400px] mx-auto relative rounded-[28px] md:rounded-[36px] overflow-hidden border border-sand-800/40">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/images/gallery/DSC02365.jpg"
            alt="Horse herd on the steppe"
            fill
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-md">
              <p className="text-sand-300 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4">
                Come ride
              </p>
              <h2
                className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85), 0 8px 32px rgba(0,0,0,0.7)" }}
              >
                The country I love,
                <br />the way it should be felt.
              </h2>
              <div className="flex gap-2 flex-wrap">
                <Link
                  href="/tours"
                  className="inline-flex items-center gap-2 bg-sand-400 hover:bg-sand-300 text-night-950 px-6 py-3 rounded-full text-xs md:text-sm tracking-wider font-semibold transition-colors"
                >
                  Pick a trip
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 border border-sand-300/50 text-sand-100 px-6 py-3 rounded-full text-xs md:text-sm tracking-wider hover:bg-sand-100/10 transition-colors"
                >
                  Apply to join
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN
// ============================================================================

export default function Home() {
  return (
    <main className="w-full bg-night-950 text-sand-100">
      <HeroSection />
      <TaglineSection />
      <FeatureBand />
      <PillarsSection />
      <FinalCTA />
    </main>
  );
}
