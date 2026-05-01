"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

// ============================================================================
// HERO — cinematic slideshow of real 2025 field shots
// ============================================================================

const heroSlides = [
  {
    src: "/images/tours/north-central/DSC02464-hero.jpg",
    kicker: "Khuvsgul · the Dark Blue Pearl",
    headline: "A trip to remember.",
  },
  {
    src: "/images/gallery/DSC01684.jpg",
    kicker: "Orkhon Valley",
    headline: "The ultimate side quest.",
  },
  {
    src: "/images/gallery/DSC02365.jpg",
    kicker: "Central Steppe",
    headline: "Witness authentic Mongolia.",
  },
  {
    src: "/images/gallery/DSC08000.jpg",
    kicker: "Southern Gobi",
    headline: "Priceless.",
  },
  {
    src: "/images/gallery/DSC08200.jpg",
    kicker: "On the road",
    headline: "Your summer, the way it should be.",
  },
];

function HeroSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.02 }}
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
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-night-950/40 via-night-950/20 to-night-950" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-sand-300 text-xs tracking-[0.3em] uppercase mb-4">
                {heroSlides[i].kicker}
              </p>
              <h1
                className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] max-w-4xl mb-6"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
              >
                {heroSlides[i].headline}
              </h1>
            </motion.div>
          </AnimatePresence>

          <p className="text-sand-200 text-sm md:text-base tracking-wider max-w-xl leading-relaxed mb-8">
            Small-group summer expeditions led personally by Tugi.
            Eleven departures across June, July, and August 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center bg-sand-400 hover:bg-sand-300 text-night-950 px-7 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-sm transition"
            >
              See the 2026 calendar
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center border border-white/40 hover:border-white hover:bg-white/10 text-white px-7 py-3.5 text-xs uppercase tracking-[0.15em] rounded-sm transition"
            >
              Apply to join
            </Link>
          </div>

          {/* Slide dots */}
          <div className="flex gap-2 mt-10">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1 transition-all duration-500 ${
                  idx === i ? "bg-sand-200 w-10" : "bg-white/30 w-5 hover:bg-white/60"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SEASON STRIP — at-a-glance band
// ============================================================================

function SeasonStrip() {
  const stats = [
    { value: "11", label: "departures" },
    { value: "Jun – Aug", label: "2026 season" },
    { value: "4 – 16", label: "group size" },
    { value: "$350+", label: "per person" },
    { value: "−15%", label: "for pairs" },
  ];
  return (
    <section className="border-b border-sand-900/30 bg-night-900/40">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-2xl md:text-3xl text-sand-100">{s.value}</p>
            <p className="text-sand-500 text-[10px] tracking-[0.2em] uppercase mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// INTRO — personal warm block
// ============================================================================

function IntroSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-5">
            Hi — Tugi here
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-8 leading-tight">
            TUGO isn&apos;t a tour company.
            <br />
            <span className="text-sand-300 italic">It&apos;s me, showing you around.</span>
          </h2>
          <p className="text-sand-300 text-lg leading-relaxed">
            You&apos;ll camp by Khuvsgul, ride into the taiga, stand below the Altai peaks with Kazakh eagle hunters, sleep under Gobi dunes, soak in central hot springs — all of it on routes I already know and love. Small groups, real hosts, no coach buses. Just the country, the way it&apos;s meant to feel.
          </p>

          <div className="mt-10">
            <Link
              href="/why-tour-tugo"
              className="inline-flex items-center gap-2 text-sand-400 hover:text-sand-100 text-xs tracking-[0.3em] uppercase transition-colors"
            >
              Why tour with me →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ============================================================================
// THREE WAYS — weekend / adventure / expedition
// ============================================================================

const routes = [
  {
    title: "Weekend Escapes",
    duration: "3 days",
    priceFrom: "$350",
    items: ["Terelj Escape · Jun 1–3", "Terelj Escape · Jul 16–18", "Terelj Escape · Aug 11–13"],
    desc: "Three gentle weekends in Gorkhi-Terelj — Turtle Rock, alpine rides, khorkhog, and a night in a family ger. Any age, any level.",
    color: "from-teal-400 to-teal-600",
    border: "border-teal-700/30 hover:border-teal-500/50",
    accent: "text-teal-200",
    image: "/images/gallery/DSC01558.jpg",
  },
  {
    title: "Festival & Adventure",
    duration: "5–11 days",
    priceFrom: "$750",
    items: [
      "Playtime Music Festival · Jul 1–5",
      "Naadam Festival · Jul 8–13",
      "Southern Gobi + Central · Jun 16–23",
      "Horse Trek · Khagiin Khar · Jun 25–30",
      "Gobi Glimpse + Central · Aug 18–28",
    ],
    desc: "Mid-length departures around festivals, nomadic immersion, and the country&apos;s iconic routes. For travellers who want depth without committing a fortnight.",
    color: "from-emerald-500 to-amber-500",
    border: "border-emerald-700/30 hover:border-amber-500/50",
    accent: "text-amber-200",
    image: "/images/gallery/DSC02098.jpg",
  },
  {
    title: "Grand Expeditions",
    duration: "6–11 days",
    priceFrom: "$1,400",
    items: ["Altai Tavan Bogd · Jun 8–13", "North & Central Loop · Jul 21–31", "Altai Tavan Bogd · Aug 3–8"],
    desc: "Flagship trips into the west and the far north. Kazakh eagle hunters, Five Holy Peaks, Khuvsgul Lake, and the long drive home through the central steppe.",
    color: "from-indigo-500 to-sky-500",
    border: "border-indigo-700/30 hover:border-sky-500/50",
    accent: "text-sky-200",
    image: "/images/tours/north-central/DSC02464.jpg",
  },
];

function RoutesSection() {
  return (
    <section className="py-24 md:py-32 border-t border-sand-900/30 bg-night-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
              2026 Season
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
              Three ways to come with me.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {routes.map((r, idx) => (
            <FadeIn key={r.title} delay={idx * 0.1}>
              <div
                className={`relative flex flex-col h-full rounded-2xl overflow-hidden border ${r.border} bg-night-900/60 transition-colors duration-500`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${r.color} mb-4`} />
                  <h3 className="font-display text-2xl text-sand-100 mb-1">{r.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-sand-500 mb-4">
                    <span>{r.duration}</span>
                    <span className="text-sand-700">·</span>
                    <span className={r.accent}>from {r.priceFrom}</span>
                  </div>
                  <p
                    className="text-sand-400 text-sm leading-relaxed mb-5 flex-grow"
                    dangerouslySetInnerHTML={{ __html: r.desc }}
                  />
                  <ul className="space-y-1.5 mb-6 text-sm text-sand-400">
                    {r.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="text-sand-700">→</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/tours"
                    className={`${r.accent} text-xs tracking-[0.2em] uppercase hover:text-sand-100 transition-colors`}
                  >
                    See calendar →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// GALLERY TEASER
// ============================================================================

const teaserShots = [
  { src: "/images/gallery/DSC01684.jpg", span: "col-span-2 row-span-2" },
  { src: "/images/gallery/DSC02365.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/DSC08000.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/DSC02098.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/DSC08283.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/DSC01820.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/DSC08200.jpg", span: "col-span-1 row-span-1" },
];

function GalleryTeaser() {
  return (
    <section className="py-24 md:py-32 border-t border-sand-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-3">
                From the field
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
                The summer so far.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-sand-400 hover:text-sand-100 text-xs tracking-[0.3em] uppercase transition-colors inline-flex items-center gap-2"
            >
              See all 48 photos →
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-2 md:gap-3">
          {teaserShots.map((shot, i) => (
            <motion.div
              key={shot.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`relative overflow-hidden rounded-lg group ${shot.span}`}
            >
              <Image
                src={shot.src}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// WHY TUGO HIGHLIGHTS
// ============================================================================

const whyHighlights = [
  {
    title: "Routes I know",
    body: "Every tour on the calendar is a road I&apos;ve driven many times. I know the families, the camps, the weather windows.",
  },
  {
    title: "Small groups, real depth",
    body: "4 to 16 people max — small enough that a nomadic family can actually host us, big enough to make friends.",
  },
  {
    title: "Local co-hosts",
    body: "For Altai and the Horse Trek, a more experienced regional guide joins us on the ground. Full coverage.",
  },
  {
    title: "Meals, lodging, logistics",
    body: "Handled, so you can just be in the trip. 3 meals a day on festival tours, family ger stays, camping kit provided.",
  },
  {
    title: "Bring a friend, save 15%",
    body: "Book as a pair and you each pay 15% less. Confirmed pair = two committed people = easier group.",
  },
  {
    title: "Application, not checkout",
    body: "I read every booking. We confirm after a short conversation so every group is a good fit.",
  },
];

function WhySection() {
  return (
    <section className="py-24 md:py-32 border-t border-sand-900/30 bg-night-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
              Why TUGO
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
              What makes these trips different.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyHighlights.map((h, idx) => (
            <FadeIn key={h.title} delay={idx * 0.05}>
              <div className="h-full rounded-xl border border-sand-800/40 bg-night-900/40 p-6">
                <h3 className="font-display text-lg text-sand-100 mb-2">{h.title}</h3>
                <p
                  className="text-sand-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: h.body }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// UPCOMING DEPARTURES — next 4
// ============================================================================

const upcoming = [
  { id: "terelj-jun", emoji: "🌲", title: "Terelj Escape",              date: "Jun 1 – 3",   days: 3,  price: "$350",   accent: "text-teal-200" },
  { id: "altai-jun",  emoji: "🏔️", title: "Altai Tavan Bogd",           date: "Jun 8 – 13",  days: 6,  price: "$1,400", accent: "text-indigo-200" },
  { id: "southern-gobi", emoji: "🏜️", title: "Southern Gobi + Central",  date: "Jun 16 – 23", days: 8,  price: "$1,200", accent: "text-orange-200" },
  { id: "khagiin-khar-nuur", emoji: "🐎", title: "Horse Trek · Khagiin Khar", date: "Jun 25 – 30", days: 6,  price: "$1,400", accent: "text-lime-200" },
];

function UpcomingSection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-sand-900/30 overflow-hidden">
      <Image
        src="/images/gallery/DSC01558.jpg"
        alt=""
        fill
        className="object-cover opacity-15"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night-950 via-night-950/80 to-night-950" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
              First departures of the season
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
              Coming up in June
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-0 border-t border-sand-900/40">
          {upcoming.map((t, idx) => (
            <FadeIn key={t.id} delay={idx * 0.06}>
              <Link
                href={`/tours/${t.id === "terelj-jun" ? "terelj-escape" : t.id}`}
                className="block border-b border-sand-900/40 py-6 md:py-7 px-2 md:px-4 group hover:bg-night-900/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="text-2xl md:text-3xl">{t.emoji}</span>
                    <div className="min-w-0">
                      <p className={`${t.accent} text-xs tracking-[0.2em] uppercase mb-1`}>
                        {t.date} · {t.days} days
                      </p>
                      <h3 className="font-display text-xl md:text-2xl text-sand-100 truncate">
                        {t.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 md:gap-8 ml-auto">
                    <div className="text-right">
                      <p className="text-sand-100 font-display text-lg md:text-xl">{t.price}</p>
                      <p className="text-sand-500 text-[10px] tracking-[0.15em] uppercase">
                        per person
                      </p>
                    </div>
                    <span className="text-sand-500 group-hover:text-sand-100 text-lg transition-colors">→</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tours"
            className="inline-block border border-sand-400/40 hover:border-sand-300 hover:bg-sand-400/10 text-sand-200 px-7 py-3.5 text-xs uppercase tracking-[0.15em] rounded-sm transition"
          >
            All 11 departures →
          </Link>
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
    <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/gallery/DSC02365.jpg"
        alt=""
        fill
        className="object-cover animate-ken-burns"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-night-950/70" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24">
        <FadeIn>
          <p className="text-sand-300 text-xs tracking-[0.3em] uppercase mb-6">
            The road is waiting
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1] mb-8">
            Come see the country I love.
          </h2>
          <p className="text-sand-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Pick a tour, apply to join, or just send me an email. I reply personally within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center bg-sand-400 hover:bg-sand-300 text-night-950 px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold rounded-sm transition"
            >
              Pick a tour
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center border border-white/40 hover:border-white hover:bg-white/10 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] rounded-sm transition"
            >
              Apply to join
            </Link>
            <a
              href="mailto:Tuugii7019@gmail.com"
              className="inline-flex items-center justify-center text-sand-300 hover:text-white px-8 py-4 text-xs uppercase tracking-[0.15em] transition"
            >
              Say hi →
            </a>
          </div>
        </FadeIn>
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
      <SeasonStrip />
      <IntroSection />
      <RoutesSection />
      <GalleryTeaser />
      <WhySection />
      <UpcomingSection />
      <FinalCTA />
    </main>
  );
}
