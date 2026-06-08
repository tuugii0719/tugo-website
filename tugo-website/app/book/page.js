"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

// ============================================================================
// TOUR CATALOG — posted prices already include a 15% markup over base.
// Pair discount (15% off per person) is applied at booking when groupSize=2.
// Keep this in sync with /app/tours/page.js.
// ============================================================================

const PAIR_DISCOUNT = 0.15; // 15% off per person when booking a pair

const tourOptions = [
  { id: "gobi-glimpse",      title: "Gobi Glimpse + Central",     dates: "Jun 13 – 20",  days: 8,  price: 700,   emoji: "🏜️", includes: "Transport · Meals · Lodging · Guide" },
  { id: "booked-jun",        title: "Booked · private window",    dates: "Jun 21 – 27",  days: null, price: null, emoji: "🚫", booked: true },
  { id: "playtime",          title: "Playtime Music Festival",    dates: "Jul 1 – 4",    days: 4,  price: 405,   emoji: "🎶", includes: "Festival ticket · Camping · Breakfast" },
  { id: "naadam",            title: "Naadam Festival",            dates: "Jul 8 – 14",   days: 7,  price: 630,   emoji: "🏇", includes: "Transport · Meals · Lodging · Guide" },
  { id: "terelj-jul",        title: "Terelj Escape",              dates: "Jul 16 – 18",  days: 3,  price: 270,   emoji: "🌲", includes: "Transport · Meals · Ger · Guide" },
  { id: "north-central",     title: "North & Central Loop",       dates: "Jul 21 – Aug 1",  days: 12, price: 1080, emoji: "🐪", includes: "Transport · Meals · Lodging · Guide" },
  { id: "altai-aug",         title: "Altai Tavan Bogd",           dates: "Aug 5 – 13",   days: 9,  price: 810,   emoji: "🏔️", includes: "Overland · Meals · Lodging · Guide" },
  { id: "southern-gobi",     title: "Southern Gobi + Central",    dates: "Aug 18 – 28",  days: 11, price: 1080,  emoji: "🏜️", includes: "Transport · Meals · Lodging · Guide" },
];

const formatUSD = (n) => `$${n.toLocaleString()}`;

// Posts submissions to Formspree. Set NEXT_PUBLIC_FORMSPREE_ID in .env.local
// (see .env.local.example). If unset or the request fails, the caller falls
// back to opening the user's email client via buildMailto().
async function submitApplication(kind, payload) {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  if (!formspreeId) {
    return { ok: false, reason: "no-backend" };
  }
  try {
    const subject = kind === "waiver"
      ? `Fee waiver · ${payload.tour || "—"}`
      : `Booking · ${payload.tour || "—"}`;
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, kind, ...payload }),
    });
    if (!res.ok) throw new Error(`Formspree ${res.status}`);
    return { ok: true };
  } catch (err) {
    return { ok: false, reason: "request-failed", error: String(err) };
  }
}

const buildMailto = (kind, payload) => {
  const subject = kind === "waiver"
    ? `Fee waiver application · ${payload.tour || "—"}`
    : `Booking · ${payload.tour || "—"}`;
  const body = Object.entries(payload)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k}:\n${v}\n`)
    .join("\n");
  return `mailto:tuklobin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// ============================================================================
// PAGE
// ============================================================================

export default function BookPage() {
  const [selectedTourId, setSelectedTourId] = useState(null);
  const [groupSize, setGroupSize] = useState("solo");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    partnerName: "",
    dietary: "",
    experience: "",
    priorTravel: "",
    whyThis: "",
    agreeTerms: false,
    agreeInsurance: false,
  });
  // null = not submitted, "sent" = Formspree confirmed, "fallback" = mailto fired
  const [submitted, setSubmitted] = useState(null);

  const selectedTour = tourOptions.find((t) => t.id === selectedTourId);
  const perPerson = selectedTour
    ? (groupSize === "2" ? Math.round(selectedTour.price * (1 - PAIR_DISCOUNT)) : selectedTour.price)
    : 0;
  const totalPrice = selectedTour
    ? (groupSize === "2" ? perPerson * 2 : perPerson)
    : 0;

  const onField = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const allAgreed = formData.agreeTerms && formData.agreeInsurance;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!allAgreed || !selectedTour) return;
    const payload = {
      tour: `${selectedTour.title} (${selectedTour.dates})`,
      groupSize: groupSize === "2" ? "Pair" : "Solo",
      perPerson: formatUSD(perPerson),
      total: formatUSD(totalPrice),
      ...formData,
    };
    const result = await submitApplication("booking", payload);
    // If Formspree isn't wired or the request failed, fall back to mailto so
    // the user can still send the application from their own inbox.
    if (!result.ok && typeof window !== "undefined") {
      window.location.href = buildMailto("booking", payload);
      setSubmitted("fallback");
    } else {
      setSubmitted("sent");
    }
  };

  const resetForm = () => {
    setSelectedTourId(null);
    setGroupSize("solo");
    setFormData({
      name: "", email: "", country: "", phone: "", partnerName: "",
      dietary: "", experience: "", priorTravel: "", whyThis: "",
      agreeTerms: false, agreeInsurance: false,
    });
    setSubmitted(null);
  };

  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      {/* HERO */}
      <section className="relative flex h-[52vh] min-h-[420px] items-end justify-start overflow-hidden">
        <Image
          src="/images/home/hero1.jpg"
          alt="Apply to join an expedition"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-night-950" />
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sand-300">
              Apply to Join
            </p>
            <h1 className="font-display text-5xl text-white md:text-7xl leading-[0.95] mb-4">
              2026 Expedition
              <br />Applications
            </h1>
            <p className="text-sand-200 text-lg max-w-xl leading-relaxed">
              Small groups. Real country. A proper application, because the people on each trip are as much the trip as the places.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-sand-900/30 bg-night-900/30">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { n: "01", title: "Pick a tour", body: "Scan the ten 2026 departures below. Each has its own vibe." },
            { n: "02", title: "Apply", body: "Short application — who you are, why this one, any heads-ups." },
            { n: "03", title: "Hear back in 48h", body: "I'll reply personally. If we're a fit, you'll get the deposit link." },
            { n: "04", title: "Get ready", body: "Visa notes, packing list, logistics. I'll hold your hand through the prep." },
          ].map((s) => (
            <div key={s.n}>
              <p className="text-sand-500 text-xs tracking-[0.3em] mb-2">STEP {s.n}</p>
              <h3 className="font-display text-lg text-sand-100 mb-1.5">{s.title}</h3>
              <p className="text-sand-400 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FIRST-SEASON NOTE */}
      <section className="border-b border-sand-900/30">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="rounded-xl border border-sand-800/40 bg-night-900/30 p-6 md:p-7">
            <p className="text-sand-400 text-[10px] tracking-[0.3em] uppercase mb-3">
              Before you pick
            </p>
            <p className="text-sand-200 text-sm md:text-base leading-relaxed mb-4">
              You&apos;re applying directly to me — the person in the driver&apos;s seat, not a booking desk. 2026 is my first full season hosting, and I run these trips on what I know best: this country&apos;s history, its hidden corners, and a real feel for the group I&apos;m with.
            </p>
            <p className="text-sand-500 text-xs md:text-sm">
              Questions before applying?{" "}
              <a
                href="https://wa.me/66818910766"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4 transition"
              >
                Message me on WhatsApp
              </a>
              {" "}or email{" "}
              <a
                href="mailto:tuklobin@gmail.com"
                className="text-sand-200 hover:text-sand-100 underline underline-offset-4 transition"
              >
                tuklobin@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FEE WAIVER TEASER */}
      <section className="border-b border-sand-900/30">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <a
            href="#fee-waiver"
            className="group flex items-center gap-4 rounded-xl border border-amber-500/30 bg-amber-900/10 px-5 py-4 hover:border-amber-400/50 hover:bg-amber-900/20 transition-colors"
          >
            <span className="text-2xl shrink-0">✦</span>
            <span className="flex-1 text-sm md:text-base text-sand-200 leading-snug">
              <span className="text-amber-300 font-medium">On a tight budget?</span>{" "}
              Each season I keep a few spots on a sliding scale — for artists, students, journalists, and broke-but-cool people. Pay what you can, full waivers when I can swing it.
            </span>
            <span className="shrink-0 text-amber-300 text-xs uppercase tracking-[0.15em] group-hover:translate-x-0.5 transition-transform">
              See the program →
            </span>
          </a>
        </div>
      </section>

      {/* TOUR PICKER */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-3">2026 Season</p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-3">
              Pick your tour
            </h2>
            <p className="text-sand-400 max-w-xl mx-auto">
              Seven departures across June, July, and August.{" "}
              <span className="text-sand-200">Bring a friend — save 15% each.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tourOptions.map((t) => {
              if (t.booked) {
                return (
                  <div
                    key={t.id}
                    aria-disabled="true"
                    className="text-left p-5 rounded-xl border border-dashed border-sand-700/40 bg-night-900/20 opacity-75 cursor-not-allowed"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">{t.emoji}</span>
                          <h3 className="font-display text-lg text-sand-200 truncate">{t.title}</h3>
                        </div>
                        <p className="text-sand-500 text-xs tracking-wider uppercase">
                          {t.dates}
                        </p>
                        <p className="text-sand-500 text-xs italic mt-1.5">
                          I&apos;m booked elsewhere this week — pick another date.
                        </p>
                      </div>
                      <div className="text-right whitespace-nowrap">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-sand-500">
                          Unavailable
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
              const active = t.id === selectedTourId;
              const pairPrice = Math.round(t.price * (1 - PAIR_DISCOUNT));
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTourId(t.id)}
                  className={`
                    text-left p-5 rounded-xl border transition-all
                    ${active
                      ? "border-sand-400/60 bg-night-900/70 shadow-lg"
                      : "border-sand-900/40 bg-night-900/30 hover:border-sand-700/60 hover:bg-night-900/50"}
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{t.emoji}</span>
                        <h3 className="font-display text-lg text-sand-100 truncate">{t.title}</h3>
                      </div>
                      <p className="text-sand-500 text-xs tracking-wider uppercase">
                        {t.dates} · {t.days} days
                      </p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <p className="font-display text-lg text-sand-100">{formatUSD(t.price)}</p>
                      <p className="text-emerald-300/90 text-[11px]">{formatUSD(pairPrice)} as a pair</p>
                    </div>
                  </div>
                  {t.includes && (
                    <p className="text-sand-500 text-[11px] leading-snug mt-3 pt-3 border-t border-sand-800/30">
                      <span className="text-emerald-400/80">✓</span> {t.includes}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* APPLICATION FORM — appears once a tour is picked */}
        <AnimatePresence>
          {selectedTour && !submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-16"
            >
              <div className="rounded-2xl border border-sand-800/40 bg-night-900/40 p-6 md:p-10 backdrop-blur-sm">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-8 pb-6 border-b border-sand-800/30">
                  <div>
                    <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-2">Your application</p>
                    <h3 className="font-display text-2xl md:text-3xl text-sand-100">
                      <span className="mr-2">{selectedTour.emoji}</span>
                      {selectedTour.title}
                    </h3>
                    <p className="text-sand-500 text-sm mt-1">{selectedTour.dates} · {selectedTour.days} days</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl text-sand-100">{formatUSD(perPerson)}</p>
                    <p className="text-sand-500 text-xs">
                      {groupSize === "2" ? `per person · ${formatUSD(totalPrice)} total` : "per person"}
                    </p>
                  </div>
                </div>

                <form onSubmit={onSubmit} className="space-y-8">
                  {/* Group size toggle */}
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-sand-500 mb-3">
                      Who&apos;s coming?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { v: "solo", label: "Just me", sub: "Solo traveller" },
                        { v: "2", label: "Me + one", sub: `Save ${Math.round(PAIR_DISCOUNT * 100)}% each` },
                      ].map((o) => (
                        <button
                          key={o.v}
                          type="button"
                          onClick={() => setGroupSize(o.v)}
                          className={`
                            border px-5 py-4 text-left transition rounded-lg
                            ${groupSize === o.v
                              ? "border-sand-400/60 bg-sand-400/10 text-sand-100"
                              : "border-sand-800/40 text-sand-400 hover:border-sand-700/50"}
                          `}
                        >
                          <p className="font-medium">{o.label}</p>
                          <p className="text-xs text-sand-500 mt-0.5">{o.sub}</p>
                        </button>
                      ))}
                    </div>
                    {groupSize === "2" && (
                      <p className="mt-3 text-xs text-emerald-300/90">
                        Pair discount applied · you&apos;ll both pay {formatUSD(perPerson)} ({formatUSD(totalPrice)} total, a saving of {formatUSD(selectedTour.price * 2 - totalPrice)}).
                      </p>
                    )}
                  </div>

                  {/* Step: Your details */}
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-sand-500 mb-4">About you</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Input name="name" placeholder="Full name" value={formData.name} onChange={onField} required />
                      <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={onField} required />
                      <Input name="country" placeholder="Country / city" value={formData.country} onChange={onField} required />
                      <Input name="phone" placeholder="Phone (WhatsApp preferred)" value={formData.phone} onChange={onField} />
                    </div>
                    {groupSize === "2" && (
                      <div className="mt-3">
                        <Input
                          name="partnerName"
                          placeholder="Your pair's name & email"
                          value={formData.partnerName}
                          onChange={onField}
                          required
                        />
                      </div>
                    )}
                  </div>

                  {/* Step: Short answers */}
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-sand-500 mb-4">Short answers</p>
                    <Textarea
                      name="whyThis"
                      label={`Why this tour specifically, and what are you hoping to get out of it?`}
                      value={formData.whyThis}
                      onChange={onField}
                      required
                      rows={4}
                    />
                    <Textarea
                      name="priorTravel"
                      label="Where have you travelled before? Even a casual list helps me read the room — adventure trips, backpacking, group tours, anything."
                      value={formData.priorTravel}
                      onChange={onField}
                      rows={3}
                    />
                    <Textarea
                      name="experience"
                      label="Any relevant experience or physical notes? (horses, altitude, camping, injuries, etc.)"
                      value={formData.experience}
                      onChange={onField}
                      rows={3}
                    />
                    <Textarea
                      name="dietary"
                      label="Anything else we should know? Dietary preferences, travelling buddies, language concerns?"
                      value={formData.dietary}
                      onChange={onField}
                      rows={2}
                    />
                  </div>

                  {/* Step: Agreements */}
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-sand-500 mb-4">Agreements</p>
                    <div className="space-y-3 rounded-lg border border-sand-800/40 bg-night-950/40 p-5">
                      <Checkbox
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={onField}
                      >
                        I&apos;ve read the <button type="button" onClick={() => document.getElementById("agreements")?.scrollIntoView({ behavior: "smooth" })} className="text-sand-300 underline underline-offset-4">booking terms</button> — 30% deposit confirms, balance before departure (timing depends on how close we are).
                      </Checkbox>
                      <Checkbox
                        name="agreeInsurance"
                        checked={formData.agreeInsurance}
                        onChange={onField}
                      >
                        I&apos;ll travel with insurance (medical, evacuation, trip cancellation). If I don&apos;t have a plan, I&apos;ll tell Tugi and we&apos;ll sort it.
                      </Checkbox>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={!allAgreed}
                      className={`
                        px-8 py-3.5 text-sm uppercase tracking-[0.15em] font-semibold rounded-sm transition
                        ${allAgreed
                          ? "bg-sand-400 text-night-950 hover:bg-sand-300"
                          : "bg-sand-900/40 text-sand-600 cursor-not-allowed"}
                      `}
                    >
                      Send application
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-8 py-3.5 text-sm uppercase tracking-[0.15em] border border-sand-800/40 text-sand-400 hover:border-sand-600/60 hover:text-sand-200 rounded-sm transition"
                    >
                      Start over
                    </button>
                  </div>
                  {!allAgreed && (
                    <p className="text-xs text-sand-600">Tick both agreements to enable submit.</p>
                  )}
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SUCCESS — Formspree confirmed */}
        {submitted === "sent" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 rounded-2xl border border-emerald-800/30 bg-emerald-900/10 p-10 text-center"
          >
            <p className="text-emerald-300 text-xs tracking-[0.3em] uppercase mb-3">✓ Application received</p>
            <h3 className="font-display text-2xl text-sand-100 mb-3">Thanks — your application is in.</h3>
            <p className="text-sand-400 max-w-lg mx-auto">
              I read every one personally. Expect a reply within 48 hours.
            </p>
            <button
              onClick={resetForm}
              className="mt-6 border border-sand-400/40 px-6 py-2.5 text-sm uppercase tracking-[0.15em] text-sand-200 hover:bg-sand-400/10 rounded-sm transition"
            >
              Apply to another tour
            </button>
          </motion.div>
        )}

        {/* FALLBACK — Formspree unavailable, mailto was opened */}
        {submitted === "fallback" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 rounded-2xl border border-amber-800/30 bg-amber-900/10 p-10 text-center"
          >
            <p className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-3">One more step</p>
            <h3 className="font-display text-2xl text-sand-100 mb-3">Your email client should have opened.</h3>
            <p className="text-sand-400 max-w-lg mx-auto mb-4">
              Hit send on the draft to finish the application. If nothing opened, email me directly —
              I&apos;ll reply within 48 hours either way.
            </p>
            <a
              href="mailto:tuklobin@gmail.com"
              className="inline-block bg-sand-400 hover:bg-sand-300 text-night-950 px-6 py-2.5 text-sm uppercase tracking-[0.15em] font-semibold rounded-sm transition"
            >
              Email tuklobin@gmail.com
            </a>
            <div className="mt-4">
              <button
                onClick={resetForm}
                className="text-sand-500 text-xs uppercase tracking-[0.15em] hover:text-sand-200 transition"
              >
                Start over
              </button>
            </div>
          </motion.div>
        )}
      </section>

      {/* PRICING DETAIL */}
      <section className="border-t border-sand-900/30 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-3 text-center">Pricing</p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-10 text-center">
              What you pay, what it covers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Posted price",
                  body: "Per person, for solo travellers. Covers 4×4 transport, accommodation (ger, tent, local homestay, hotel where indicated), all meals on the road, English-speaking guide, permits, and activities listed in the itinerary.",
                },
                {
                  title: `Bring a friend · save ${Math.round(PAIR_DISCOUNT * 100)}%`,
                  body: `Book as a pair and you both pay ${Math.round((1 - PAIR_DISCOUNT) * 100)}% of posted. Our groups are small — two confirmed people is real weight. The saving is our thanks.`,
                  accent: true,
                },
                {
                  title: "Not included",
                  body: "International flights, Mongolia visa (free for many passports), travel insurance, personal gear (sleeping bag, hiking boots), alcohol, tips, laundry, phone, optional activities.",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl border ${c.accent
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-sand-800/40 bg-night-900/30"}`}
                >
                  <h3 className={`font-display text-lg mb-3 ${c.accent ? "text-emerald-200" : "text-sand-100"}`}>
                    {c.title}
                  </h3>
                  <p className="text-sand-400 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AGREEMENTS / TERMS */}
      <section id="agreements" className="border-t border-sand-900/30 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-3 text-center">Terms</p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-10 text-center">
              Booking agreements
            </h2>
            <p className="text-sand-500 text-sm leading-relaxed mb-8 italic border-l-2 border-sand-800 pl-4">
              Summer is short and busy here. The moment your deposit arrives, I lock in your spot — guides, permits, domestic flights, family camps, fuel — and most of those costs don&apos;t come back once paid out. The policy below just reflects that, so everything runs smoothly for everyone on the trip.
            </p>
            <dl className="space-y-6">
              {[
                {
                  t: "Deposit & payment",
                  d: "A 30% deposit confirms your spot. The remaining balance is due before departure — the exact timing depends on how close we are when you book (45 days out is the standard window for tours further away; full payment is required up front for tours less than ~2 weeks away). Bank transfer preferred (zero fees) or card (adds 3%).",
                },
                {
                  t: "Cancellation & refunds",
                  d: "90+ days before departure: full refund minus a $100 admin fee. 60–89 days: 50% refund. 30–59 days: 25% refund OR full credit toward any 2027 departure (your choice). Inside 30 days: non-refundable — we've paid for your seat by then. No partial refunds for unused days, late arrivals, or early departures.",
                },
                {
                  t: "Non-refundable costs",
                  d: "Altai departures include a round-trip flight to Ölgii that's non-refundable once booked (typically 45 days before departure). If you cancel after flight ticketing, you forfeit that portion in addition to the schedule above.",
                },
                {
                  t: "We&apos;re moving — guaranteed",
                  d: "Every departure on the calendar runs. People are already lining up. If something unexpected happens in-country (weather, road closure), we re-route — we don&apos;t cancel.",
                },
                {
                  t: "Travel insurance",
                  d: "You&apos;ll want travel insurance covering medical, emergency evacuation, and trip cancellation. If you don&apos;t have a provider yet, tell me — I&apos;ll help you find a plan that works for your passport and tour. No stress.",
                },
                {
                  t: "Physical & pace",
                  d: "Small-group adventure, not luxury. Long drive days, camping nights, basic facilities, altitudes up to 3,000 m on Altai, weather that changes hourly. Flag any health conditions when you apply so we can plan with you.",
                },
                {
                  t: "Liability",
                  d: "You are responsible for your own safety. We take every reasonable precaution and hire experienced local guides, but adventure travel carries inherent risk. Submitting the booking form acknowledges this.",
                },
                {
                  t: "Code of conduct",
                  d: "Respect the land, the animals, the hosts. Leave every camp cleaner than you found it. No single-use plastics on camp nights. No drones without checking first. Photography of people — always ask. We book families and camps we want to be welcomed back to.",
                },
              ].map((row) => (
                <div key={row.t}>
                  <dt className="font-display text-lg text-sand-100 mb-1">{row.t}</dt>
                  <dd className="text-sand-400 text-sm leading-relaxed">{row.d}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* USEFUL INFORMATION */}
      <section className="border-t border-sand-900/30 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-3 text-center">Before you come</p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-10 text-center">
              Useful to know
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a visa?",
                  a: "Most Western passports (US, EU, UK, CA, AU, JP, KR and more) get 30 days visa-free. Others can apply for an e-visa. We'll confirm for your passport when you apply.",
                },
                {
                  q: "When should I book flights?",
                  a: "After we confirm your spot, not before. International flights to Ulaanbaatar go through Seoul, Istanbul, Beijing, or Frankfurt. Summer 2026 fills up — aim to book 2–4 months out.",
                },
                {
                  q: "Where do I stay in Ulaanbaatar before or after the tour?",
                  a: "Up to you — hotels and hostels in UB are easy to book. But if you want something warmer, I can hook you up with a local family to host you in their home. Honest price, homemade food, real people. Tell me when you apply if that sounds good.",
                },
                {
                  q: "What should I pack?",
                  a: "Layers (days warm, nights cold even in July), hiking boots, a sleeping bag rated to 0°C for camping tours, headlamp, sunglasses, sunscreen, a 40L duffel (not a suitcase — gets chucked around). Full packing list goes out once you're confirmed.",
                },
                {
                  q: "Wifi & phone?",
                  a: "Ulaanbaatar has excellent wifi and 4G. Outside the city, signal is intermittent. On the remote tours (Altai and the North &amp; Central Loop through Khuvsgul) expect several days fully off-grid. If you need to stay reachable, let me know — a satellite messenger can be arranged.",
                },
                {
                  q: "Meals & dietary stuff?",
                  a: "All meals on the road are included. Food is rustic — mutton, noodles, rice, seasonal veg, wild berries, dairy. We can accommodate vegetarian / pescatarian / allergies with advance notice. Strict vegan is harder in the countryside; tell us early and we'll plan.",
                },
                {
                  q: "How physical is it?",
                  a: "Ranges by tour. Terelj Escape is easy. Southern Gobi is moderate (long drives, some hiking). Altai and the North & Central Loop are the most demanding — altitude, long days, and a lot of road. You don't need to be an athlete; you do need to be OK with discomfort.",
                },
                {
                  q: "Can I join part of a tour?",
                  a: "Generally no — logistics are built around full departures. But if you have a short window, talk to us about a custom private tour.",
                },
              ].map((f, i) => (
                <details
                  key={i}
                  className="group border border-sand-800/40 rounded-lg bg-night-900/30 open:bg-night-900/50 transition-colors"
                >
                  <summary className="cursor-pointer px-5 py-4 text-sand-200 font-medium flex items-center justify-between list-none">
                    <span>{f.q}</span>
                    <span className="text-sand-600 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-sand-400 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FEE WAIVER */}
      <FeeWaiverSection tourOptions={tourOptions} />

      {/* CUSTOM TOUR */}
      <section className="border-t border-sand-900/30 py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-3">Custom</p>
          <h2 className="font-display text-2xl md:text-3xl text-sand-100 mb-4">
            Want something different?
          </h2>
          <p className="text-sand-400 text-sm mb-6 leading-relaxed">
            Private tours — any route, any dates, any group size — can be built on request. Tell us what you&apos;re after and we&apos;ll put something together.
          </p>
          <a
            href="mailto:tuklobin@gmail.com?subject=Custom tour request"
            className="inline-block border border-sand-400/40 px-6 py-3 text-sm uppercase tracking-[0.15em] text-sand-200 hover:bg-sand-400/10 rounded-sm transition"
          >
            Ask about custom
          </a>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// FEE WAIVER — separate component with its own state
// ============================================================================

function FeeWaiverSection({ tourOptions }) {
  const [open, setOpen] = useState(false);
  // null = not submitted, "sent" = Formspree confirmed, "fallback" = mailto fired
  const [submitted, setSubmitted] = useState(null);
  const [data, setData] = useState({
    name: "", email: "", country: "", pronouns: "",
    tour: "",
    contribution: "",       // how much they can pay
    why: "",                // why this tour
    what: "",               // what you'd contribute
    context: "",            // your situation / why you need it
    vibesProof: "",         // a selfie URL, a story, a meme — anything
    links: "",              // optional portfolio / IG / blog
    commit: false,
  });

  const onField = (e) => {
    const { name, value, type, checked } = e.target;
    setData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!data.commit) return;
    const result = await submitApplication("waiver", data);
    if (!result.ok && typeof window !== "undefined") {
      window.location.href = buildMailto("waiver", data);
      setSubmitted("fallback");
    } else {
      setSubmitted("sent");
    }
  };

  const reset = () => {
    setOpen(false);
    setSubmitted(null);
    setData({ name: "", email: "", country: "", pronouns: "", tour: "", contribution: "", why: "", what: "", context: "", vibesProof: "", links: "", commit: false });
  };

  return (
    <section id="fee-waiver" className="scroll-mt-24 border-t border-sand-900/30 py-24 bg-gradient-to-b from-night-900/30 to-night-950">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="text-amber-300/90 text-xs tracking-[0.3em] uppercase mb-3 text-center">
            Fee Waiver Program
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-5 text-center">
            Apply for a waived or reduced fee
          </h2>
          <p className="text-sand-300 leading-relaxed text-center max-w-xl mx-auto mb-10">
            This isn&apos;t just a business — it&apos;s also my side hustle for getting good people into the country. Each season I save <strong className="text-sand-100">as many spots as I can</strong> for travellers who&apos;d otherwise not make it: artists, students, journalists, broke-but-cool people, friends-of-friends-of-friends. Sliding scale, pay-what-you-can, full waivers when I can swing it. Good vibes count too — bring proof (a selfie with your grandma works). Every application gets read.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { n: "As many as circumstances allow", l: "Open spots / season" },
              { n: "$0 – posted", l: "Sliding scale, no shame" },
              { n: "48h", l: "Personal reply" },
            ].map((s) => (
              <div key={s.n} className="text-center p-5 rounded-xl border border-amber-800/30 bg-amber-900/5">
                <p className="font-display text-2xl text-amber-200">{s.n}</p>
                <p className="text-sand-500 text-xs tracking-wider uppercase mt-1">{s.l}</p>
              </div>
            ))}
          </div>

          {!open && !submitted && (
            <>
              <div className="rounded-xl border border-sand-800/40 bg-night-900/30 p-6 mb-8">
                <h3 className="font-display text-lg text-sand-100 mb-4">What I&apos;m looking for</h3>
                <ul className="space-y-2 text-sand-400 text-sm">
                  {[
                    "A reason cost is a real barrier (no audit, no shame — I trust what you tell me).",
                    "Something you'll bring — a craft, a skill, a story, a song. Genuine good energy also counts (I'll need a vibe check).",
                    "Openness to share something after — a photo, a write-up, a song, a verbal report to your mom. Whatever feels right.",
                    "Flexibility on dates — waiver spots get assigned wherever there's still room.",
                    "Tolerance for: my driving, vanishing wifi, and me getting visibly emotional about a sunset.",
                  ].map((l, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-amber-400">·</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-block bg-amber-500 hover:bg-amber-400 text-white px-8 py-3.5 text-sm uppercase tracking-[0.15em] font-semibold rounded-sm transition"
                >
                  Start application
                </button>
              </div>
            </>
          )}

          <AnimatePresence>
            {open && !submitted && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={onSubmit}
                className="space-y-8 rounded-2xl border border-amber-800/30 bg-night-900/40 p-6 md:p-10"
              >
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-sand-500 mb-4">About you</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input name="name" placeholder="Full name" value={data.name} onChange={onField} required />
                    <Input name="email" type="email" placeholder="Email" value={data.email} onChange={onField} required />
                    <Input name="country" placeholder="Where are you based?" value={data.country} onChange={onField} required />
                    <Input name="pronouns" placeholder="Pronouns (optional)" value={data.pronouns} onChange={onField} />
                  </div>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-sand-500 mb-4">Which tour?</p>
                  <select
                    name="tour"
                    value={data.tour}
                    onChange={onField}
                    required
                    className="w-full bg-night-950/60 border border-sand-800/40 px-4 py-3 text-sand-100 rounded-md focus:border-amber-400/50 focus:outline-none"
                  >
                    <option value="">Pick one — or &quot;Flexible&quot; if you&apos;re open</option>
                    <option value="Flexible">Flexible — any tour that has a spot</option>
                    {tourOptions.map((t) => (
                      <option key={t.id} value={`${t.title} (${t.dates})`}>
                        {t.emoji} {t.title} · {t.dates}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-sand-500 mb-4">How much can you contribute?</p>
                  <Input
                    name="contribution"
                    placeholder={`Be honest — "$0", "$200", "half", "posted price", "I'll figure something out"`}
                    value={data.contribution}
                    onChange={onField}
                    required
                  />
                  <p className="text-sand-500 text-xs mt-2 italic">No wrong answer. Zero is fine. I&apos;d rather know your real number than your polite one.</p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-sand-500 mb-4">Short answers</p>
                  <Textarea
                    name="why"
                    label="Why Mongolia, and why this tour?"
                    value={data.why}
                    onChange={onField}
                    rows={4}
                    required
                  />
                  <Textarea
                    name="what"
                    label="What will you bring back? (photography, writing, a skill, a story, a song — energy and good vibes also valid)"
                    value={data.what}
                    onChange={onField}
                    rows={4}
                    required
                  />
                  <Textarea
                    name="context"
                    label="A little about your situation — why cost is a barrier. Share only what you're comfortable with."
                    value={data.context}
                    onChange={onField}
                    rows={3}
                    required
                  />
                  <Textarea
                    name="vibesProof"
                    label="Proof of vibes (optional but encouraged — link a selfie, a video, an embarrassing story, a meme, anything that says 'this person is fun to spend 8 days with')"
                    value={data.vibesProof}
                    onChange={onField}
                    rows={3}
                  />
                  <Input
                    name="links"
                    placeholder="Portfolio, Instagram, blog (optional — if you've got work to show)"
                    value={data.links}
                    onChange={onField}
                  />
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-sand-500 mb-4">Commitment</p>
                  <div className="rounded-lg border border-amber-800/30 bg-amber-900/5 p-5">
                    <Checkbox name="commit" checked={data.commit} onChange={onField}>
                      If selected, I&apos;ll show up, be kind to the rest of the group, and share something about the trip afterwards — a photo, a write-up, a song, a word to a friend. We&apos;ll agree on the format. No exposure-only deals unless you&apos;re actually National Geographic.
                    </Checkbox>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={!data.commit}
                    className={`px-8 py-3.5 text-sm uppercase tracking-[0.15em] font-semibold rounded-sm transition
                      ${data.commit
                        ? "bg-amber-500 hover:bg-amber-400 text-white"
                        : "bg-sand-900/40 text-sand-600 cursor-not-allowed"}`}
                  >
                    Submit application
                  </button>
                  <button
                    type="button"
                    onClick={reset}
                    className="px-8 py-3.5 text-sm uppercase tracking-[0.15em] border border-sand-800/40 text-sand-400 hover:border-sand-600/60 hover:text-sand-200 rounded-sm transition"
                  >
                    Cancel
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {submitted === "sent" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-2xl border border-emerald-800/30 bg-emerald-900/10 p-10 text-center"
            >
              <p className="text-emerald-300 text-xs tracking-[0.3em] uppercase mb-3">✓ Received</p>
              <h3 className="font-display text-2xl text-sand-100 mb-3">Thanks for applying.</h3>
              <p className="text-sand-400 max-w-lg mx-auto">
                I read waiver applications carefully. You&apos;ll hear back within 48 hours whether you&apos;re selected, waitlisted, or not a fit for this season.
              </p>
              <button
                onClick={reset}
                className="mt-6 border border-sand-400/40 px-6 py-2.5 text-sm uppercase tracking-[0.15em] text-sand-200 hover:bg-sand-400/10 rounded-sm transition"
              >
                Close
              </button>
            </motion.div>
          )}

          {submitted === "fallback" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-2xl border border-amber-800/30 bg-amber-900/10 p-10 text-center"
            >
              <p className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-3">One more step</p>
              <h3 className="font-display text-2xl text-sand-100 mb-3">Your email client should have opened.</h3>
              <p className="text-sand-400 max-w-lg mx-auto mb-4">
                Hit send on the draft to finish the application. If nothing opened, email me directly.
              </p>
              <a
                href="mailto:tuklobin@gmail.com"
                className="inline-block bg-sand-400 hover:bg-sand-300 text-night-950 px-6 py-2.5 text-sm uppercase tracking-[0.15em] font-semibold rounded-sm transition"
              >
                Email tuklobin@gmail.com
              </a>
              <div className="mt-4">
                <button
                  onClick={reset}
                  className="text-sand-500 text-xs uppercase tracking-[0.15em] hover:text-sand-200 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

// ============================================================================
// FORM PRIMITIVES
// ============================================================================

function Input({ label, name, type = "text", ...rest }) {
  return (
    <label className="block">
      {label && <span className="block text-sm text-sand-400 mb-2">{label}</span>}
      <input
        type={type}
        name={name}
        {...rest}
        className="w-full bg-night-950/60 border border-sand-800/40 px-4 py-3 text-sand-100 placeholder:text-sand-600 rounded-md focus:border-sand-400/50 focus:outline-none transition"
      />
    </label>
  );
}

function Textarea({ label, name, rows = 3, ...rest }) {
  return (
    <label className="block mb-4">
      {label && <span className="block text-sm text-sand-400 mb-2">{label}</span>}
      <textarea
        name={name}
        rows={rows}
        {...rest}
        className="w-full bg-night-950/60 border border-sand-800/40 px-4 py-3 text-sand-100 placeholder:text-sand-600 rounded-md focus:border-sand-400/50 focus:outline-none resize-y transition"
      />
    </label>
  );
}

function Checkbox({ name, checked, onChange, children }) {
  return (
    <label className="flex gap-3 cursor-pointer items-start group">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="mt-1 w-4 h-4 accent-sand-400 flex-shrink-0"
      />
      <span className="text-sand-300 text-sm leading-relaxed group-hover:text-sand-100 transition-colors">
        {children}
      </span>
    </label>
  );
}
