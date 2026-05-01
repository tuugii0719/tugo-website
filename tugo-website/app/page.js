"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

// ============================================================================
// LIGHT-THEME HOME — designed direction inspired by AKINA Hotel reference
// Soft cream / lavender base · glass card hero · rounded-3xl cards
// ============================================================================

const heroSlides = [
  { src: "/images/tours/north-central/DSC02464-hero.jpg", kicker: "Khuvsgul · the Dark Blue Pearl",  headline: "A trip to remember." },
  { src: "/images/gallery/DSC01684.jpg",                  kicker: "Orkhon Valley",                   headline: "The ultimate side quest." },
  { src: "/images/gallery/DSC02365.jpg",                  kicker: "Central Steppe",                  headline: "Witness authentic Mongolia." },
  { src: "/images/gallery/DSC08000.jpg",                  kicker: "Southern Gobi",                   headline: "Priceless." },
  { src: "/images/gallery/DSC08200.jpg",                  kicker: "On the road",                     headline: "Your summer, the way it should be." },
];

const sliderTours = [
  { slug: "terelj-escape",     title: "Terelj Escape",            emoji: "🌲", dates: "Jun 1 – 3",   days: 3,  price: "$350",   img: "/images/gallery/DSC01558.jpg",                accent: "text-teal-700" },
  { slug: "altai-tavan-bogd",  title: "Altai Tavan Bogd",         emoji: "🏔️", dates: "Jun 8 – 13",  days: 6,  price: "$1,400", img: "/images/gallery/DSC02435.jpg",                accent: "text-indigo-700" },
  { slug: "southern-gobi",     title: "Southern Gobi + Central",  emoji: "🏜️", dates: "Jun 16 – 23", days: 8,  price: "$1,200", img: "/images/gallery/DSC08000.jpg",                accent: "text-orange-700" },
  { slug: "khagiin-khar-nuur", title: "Horse Trek · Khagiin Khar",emoji: "🐎", dates: "Jun 25 – 30", days: 6,  price: "$1,400", img: "/images/gallery/DSC01684.jpg",                accent: "text-lime-700" },
  { slug: "playtime",          title: "Playtime Music Festival",  emoji: "🦅", dates: "Jul 1 – 5",   days: 5,  price: "$750",   img: "/images/gallery/DSC02098.jpg",                accent: "text-emerald-700" },
  { slug: "naadam",            title: "Naadam Festival",          emoji: "🏇", dates: "Jul 8 – 13",  days: 6,  price: "$1,200", img: "/images/gallery/DSC02365.jpg",                accent: "text-red-700" },
  { slug: "north-central",     title: "North & Central Loop",     emoji: "🐪", dates: "Jul 21 – 31", days: 11, price: "$1,800", img: "/images/tours/north-central/DSC02464.jpg",    accent: "text-sky-700" },
  { slug: "altai-tavan-bogd",  title: "Altai Tavan Bogd · Aug",   emoji: "🏔️", dates: "Aug 3 – 8",   days: 6,  price: "$1,400", img: "/images/gallery/DSC02431.jpg",                accent: "text-indigo-700" },
  { slug: "gobi-glimpse",      title: "Gobi Glimpse + Central",   emoji: "🌅", dates: "Aug 18 – 28", days: 11, price: "$1,800", img: "/images/gallery/DSC08023.jpg",                accent: "text-amber-700" },
];

// ============================================================================
// HERO — glass card floating over a rotating landscape
// ============================================================================

function HeroSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-violet-50 via-stone-50 to-stone-100 pt-10 md:pt-16 px-4 md:px-8 pb-20">
      <div className="max-w-[1400px] mx-auto relative">

        {/* Glass card with image inside — AKINA reference */}
        <div className="relative rounded-[28px] md:rounded-[36px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(76,29,149,0.25)] border border-white/60 bg-white/30 backdrop-blur-sm">
          {/* Background image (rotates) */}
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

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/30" />

            {/* Glass overlay strip — top */}
            <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/40 backdrop-blur-md border border-white/40">
              <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
              <p className="text-white text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium">TUGO Mongolia</p>
              <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
            </div>

            {/* Hero copy — centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="text-white/90 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3 md:mb-5">
                    {heroSlides[i].kicker}
                  </p>
                  <h1
                    className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1] max-w-3xl"
                    style={{ textShadow: "0 4px 30px rgba(0,0,0,0.35)" }}
                  >
                    {heroSlides[i].headline}
                  </h1>
                </motion.div>
              </AnimatePresence>

              <Link
                href="/tours"
                className="mt-8 md:mt-10 inline-flex items-center gap-2 bg-white/90 hover:bg-white text-stone-900 px-7 py-3 rounded-full text-xs md:text-sm tracking-wider font-medium transition-colors backdrop-blur-md border border-white/60"
              >
                View 2026 trips
              </Link>
            </div>

            {/* Glass overlay strip — bottom contact pills */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-1 md:gap-2 px-2 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/40 text-[10px] md:text-xs">
              {[
                { icon: "✉", label: "Tuugii7019@gmail.com" },
                { icon: "@", label: "tugomongolia" },
                { icon: "✦", label: "11 departures" },
              ].map((c) => (
                <span key={c.label} className="flex items-center gap-1.5 px-3 py-1 text-white/95 whitespace-nowrap">
                  <span className="opacity-80">{c.icon}</span>
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
                    idx === i ? "bg-white w-7" : "bg-white/40 w-3 hover:bg-white/70"
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
// TAGLINE + TOURS RAIL — light card section with the moved 'It's not a tour…'
// ============================================================================

function TaglineSection() {
  return (
    <section className="bg-stone-50 py-20 md:py-28 lg:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-violet-600 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium mb-4 md:mb-6 text-center">
          About
        </p>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: glass-card style tagline panel */}
          <div className="lg:col-span-5 min-w-0">
            <FadeIn>
              <div className="rounded-[28px] md:rounded-[36px] bg-violet-100/60 border border-violet-200/60 p-8 md:p-10 lg:p-12">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-[1.05] mb-6">
                  It&apos;s not
                  <br />a tour company.
                  <br />
                  <span className="text-violet-700 italic">It&apos;s me, showing you around.</span>
                </h2>
                <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
                  Hi — I&apos;m Tugi. Camp by Khuvsgul, ride into the taiga, stand below the Altai peaks with Kazakh eagle hunters, sleep under Gobi dunes, soak in central hot springs. Routes I already know and love.
                </p>
                <Link
                  href="/why-tour-tugo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-stone-800 text-xs tracking-wider hover:bg-stone-900 hover:text-white transition-colors border border-stone-200"
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
                <p className="text-stone-500 text-[10px] tracking-[0.3em] uppercase">
                  The 2026 lineup
                </p>
                <p className="text-stone-400 text-[10px] tracking-wider hidden md:block">
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
                    className="snap-start flex-shrink-0 w-[240px] md:w-[260px] rounded-[24px] overflow-hidden bg-white border border-stone-200/60 hover:border-violet-300/80 hover:shadow-[0_20px_40px_-12px_rgba(76,29,149,0.18)] transition-all group"
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
                      <h3 className="font-display text-base md:text-lg text-stone-900 leading-tight mb-1">
                        <span className="mr-1.5">{t.emoji}</span>
                        {t.title}
                      </h3>
                      <p className="text-stone-500 text-xs">
                        {t.days} days · <span className="text-stone-700 font-medium">{t.price}</span>
                      </p>
                    </div>
                  </Link>
                ))}
                {/* End cap */}
                <Link
                  href="/tours"
                  className="snap-start flex-shrink-0 w-[200px] md:w-[220px] rounded-[24px] border border-violet-300 bg-violet-50 hover:bg-violet-100 transition-colors flex items-center justify-center text-center p-6"
                >
                  <div>
                    <p className="font-display text-2xl text-violet-900 mb-2">See all 11 →</p>
                    <p className="text-violet-700 text-xs">Calendar view</p>
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
// TWO-FEATURE BAND — light card / dark card pair (AKINA reference)
// ============================================================================

function FeatureBand() {
  return (
    <section className="bg-stone-50 px-4 md:px-8 pb-20 md:pb-28">
      <div className="max-w-[1400px] mx-auto space-y-5">

        {/* Light: small-group feature */}
        <div className="grid md:grid-cols-2 gap-0 rounded-[28px] md:rounded-[36px] overflow-hidden bg-violet-100/60 border border-violet-200/60">
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
            <p className="text-violet-700 text-[10px] tracking-[0.3em] uppercase mb-3 font-medium">
              The way I run it
            </p>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-stone-900 leading-tight mb-4">
              Small groups,
              <br />real hosts.
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              4 to 16 people max. Most nights you&apos;re in a Mongolian family&apos;s ger, eating what they eat, sitting in their kitchen. The kind of access a coach bus can&apos;t give you.
            </p>
            <Link
              href="/tours"
              className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full bg-white text-stone-800 text-xs tracking-wider hover:bg-stone-900 hover:text-white transition-colors border border-stone-200"
            >
              View 2026 trips
            </Link>
          </div>
        </div>

        {/* Dark: private + custom feature */}
        <div className="grid md:grid-cols-2 gap-0 rounded-[28px] md:rounded-[36px] overflow-hidden bg-stone-900 text-stone-50">
          <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <p className="text-violet-300 text-[10px] tracking-[0.3em] uppercase mb-3 font-medium">
              Private &amp; custom
            </p>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
              Your own group?
              <br />Your own dates?
            </h3>
            <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              I run private trips by request — any route, any size, any time between May and October. Tell me what you&apos;re thinking and we&apos;ll build it together.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-stone-900 text-xs tracking-wider hover:bg-violet-100 transition-colors"
              >
                Apply
              </Link>
              <Link
                href="/why-tour-tugo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/40 text-white text-xs tracking-wider hover:bg-white/10 transition-colors"
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
// FOUR PILLARS — small icon grid (AKINA 'About Travel' reference)
// ============================================================================

function PillarsSection() {
  const pillars = [
    { icon: "✦", title: "Routes I know", body: "Every trip is a road I&apos;ve driven many times — families I trust, weather I read, camps I&apos;d stay at myself." },
    { icon: "♦", title: "Small group", body: "4 to 16 people max. Real conversations, real depth, no losing your group at lunch." },
    { icon: "○", title: "All in", body: "Most tours include flight, food, lodging, guide, permits — show up with your boots and a warm layer." },
    { icon: "△", title: "Personal", body: "I read every booking and reply within 48 hours. We confirm after a short conversation." },
  ];
  return (
    <section className="bg-stone-50 px-4 md:px-8 pb-20 md:pb-28">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-violet-600 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium mb-4 text-center">
          What you&rsquo;re getting
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-stone-900 text-center leading-tight mb-12 md:mb-16">
          Four things I promise.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {pillars.map((p) => (
            <FadeIn key={p.title}>
              <div className="rounded-[20px] bg-white border border-stone-200 p-6 md:p-7 h-full">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 text-lg mb-4">
                  {p.icon}
                </div>
                <h3 className="font-display text-base md:text-lg text-stone-900 mb-2">{p.title}</h3>
                <p className="text-stone-600 text-xs md:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p.body }} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FINAL CTA — full-width hero with floating panel
// ============================================================================

function FinalCTA() {
  return (
    <section className="relative px-4 md:px-8 pb-20 md:pb-28 bg-stone-50">
      <div className="max-w-[1400px] mx-auto relative rounded-[28px] md:rounded-[36px] overflow-hidden">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/images/gallery/DSC02365.jpg"
            alt="Horse herd on the steppe"
            fill
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/30 to-stone-900/10" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-md">
              <p className="text-white/80 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4">
                Come ride
              </p>
              <h2
                className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
              >
                The country I love,
                <br />the way it should be felt.
              </h2>
              <div className="flex gap-2 flex-wrap">
                <Link
                  href="/tours"
                  className="inline-flex items-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-full text-xs md:text-sm tracking-wider font-medium hover:bg-violet-100 transition-colors"
                >
                  Pick a trip
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 border border-white/50 text-white px-6 py-3 rounded-full text-xs md:text-sm tracking-wider hover:bg-white/10 transition-colors"
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
    <main className="w-full bg-stone-50 text-stone-900">
      <HeroSection />
      <TaglineSection />
      <FeatureBand />
      <PillarsSection />
      <FinalCTA />
    </main>
  );
}
