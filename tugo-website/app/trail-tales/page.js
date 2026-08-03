"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

// ============================================================================
// TRAIL TALES — a warm note-back from friends who've already travelled with me.
// Submissions go to Formspree as multipart/form-data so a photo comes through
// as an attachment. If Formspree isn't wired (or fails), we fall back to a
// mailto draft and ask them to attach the photo themselves.
// ============================================================================

// Trips a traveler might have done — kept loosely in sync with /tours.
const TRIPS = [
  "Gobi + Central",
  "Southern Gobi + Central",
  "Gobi Glimpse + Central",
  "North & Central Loop",
  "Naadam Festival",
  "Playtime Music Festival",
  "Terelj Escape",
  "A custom / private trip",
];

// Optional prompts — answer the ones that spark something, skip the rest.
const PROMPTS = [
  { name: "surprise", label: "What caught you off guard?", placeholder: "The thing you didn't see coming — good or brutal." },
  { name: "people", label: "Who or what stole the trip?", placeholder: "A family, a driver, a dog, a total stranger, a view you couldn't leave." },
  { name: "funny", label: "Funniest / most chaotic moment?", placeholder: "The story you've already told ten times back home." },
  { name: "food", label: "The food — honestly.", placeholder: "Buuz? Milk tea? The thing you'd never eat again? Spare no one." },
  { name: "hard", label: "The realest / hardest bit?", placeholder: "Long drive, cold night, no signal, something that stuck with you. Be real." },
  { name: "perfectFor", label: "Who should come on this?", placeholder: "The friend you'd drag along in a heartbeat." },
  { name: "again", label: "Would you come back? Where next?", placeholder: "Be honest — and tell me where we're going." },
];

async function submitStory(payload, photoFile) {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  if (!formspreeId) return { ok: false, reason: "no-backend" };
  try {
    const fd = new FormData();
    fd.append("_subject", `Trail Tale · ${payload.name || "—"}`);
    fd.append("kind", "trail-tale");
    Object.entries(payload).forEach(([k, v]) => {
      if (v !== undefined && v !== "") fd.append(k, v);
    });
    if (photoFile) fd.append("photo", photoFile);
    // Note: no Content-Type header — the browser sets the multipart boundary.
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: fd,
    });
    if (!res.ok) throw new Error(`Formspree ${res.status}`);
    return { ok: true };
  } catch (err) {
    return { ok: false, reason: "request-failed", error: String(err) };
  }
}

const buildMailto = (payload) => {
  const subject = `Trail Tale · ${payload.name || "—"}`;
  const body = Object.entries(payload)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k}:\n${v}\n`)
    .join("\n");
  return `mailto:tuklobin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const EMPTY = {
  name: "", from: "", trip: "", when: "",
  story: "",
  surprise: "", people: "", funny: "", food: "", hard: "", perfectFor: "", again: "",
  forTugi: "",
  email: "", consent: false,
};

export default function TrailTalesPage() {
  const [data, setData] = useState(EMPTY);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [photoFile, setPhotoFile] = useState(null);
  // null = not submitted · "sent" = Formspree confirmed · "fallback" = mailto fired
  const [submitted, setSubmitted] = useState(null);

  const onField = (e) => {
    const { name, value, type, checked } = e.target;
    setData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const onPhoto = (e) => setPhotoFile(e.target.files?.[0] || null);

  const canSubmit = data.name.trim() && data.story.trim() && data.consent;

  const resetForm = () => {
    setData(EMPTY);
    setRating(0);
    setPhotoFile(null);
    setSubmitted(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    const payload = {
      name: data.name,
      from: data.from,
      trip: data.trip,
      when: data.when,
      rating: rating ? `${rating}/5` : "",
      story: data.story,
      surprise: data.surprise,
      people: data.people,
      funny: data.funny,
      food: data.food,
      hard: data.hard,
      perfectFor: data.perfectFor,
      again: data.again,
      forTugi: data.forTugi,
      email: data.email,
      consentToPublish: data.consent ? "Yes — OK to share on the site" : "No",
      photoAttached: photoFile ? photoFile.name : "none",
    };
    const result = await submitStory(payload, photoFile);
    if (!result.ok && typeof window !== "undefined") {
      window.location.href = buildMailto(payload);
      setSubmitted("fallback");
    } else {
      setSubmitted("sent");
    }
  };

  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      {/* HERO */}
      <section className="relative flex h-[52vh] min-h-[420px] items-end justify-start overflow-hidden">
        <Image
          src="/images/home/hero1.jpg"
          alt="Travelers on the Mongolian steppe"
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
              Hey, it&apos;s you again
            </p>
            <h1 className="font-display text-5xl text-white md:text-7xl leading-[0.95] mb-4">
              Trail Tales
            </h1>
            <p className="text-sand-200 text-lg max-w-xl leading-relaxed">
              So — you made it home. You slept in the gers, ate the buuz, survived my driving and my playlists. Now do me a favour and tell me how it <em>actually</em> was. Ramble as much as you want. I&apos;ll read every word, probably twice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE VIBE */}
      <section className="border-b border-sand-900/30 bg-night-900/30">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { emoji: "💬", title: "Talk to me like you text me", body: "No polished review voice. Half-sentences, inside jokes, typos — all welcome. This is us." },
            { emoji: "📷", title: "Chuck in a photo (or your best one)", body: "That shot you keep showing everyone back home. Drop it in — it makes the whole thing." },
            { emoji: "🫶", title: "It helps the next crew", body: "Someone on the fence is going to read this and decide to come. Your honesty is the gift." },
          ].map((s) => (
            <div key={s.title}>
              <p className="text-2xl mb-2">{s.emoji}</p>
              <h3 className="font-display text-lg text-sand-100 mb-1.5">{s.title}</h3>
              <p className="text-sand-400 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        {!submitted && (
          <FadeIn>
            <form onSubmit={onSubmit} className="space-y-8">
              {/* The basics */}
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Your name" name="name" value={data.name} onChange={onField} placeholder="First name is plenty" required />
                  <Input label="Where you're from" name="from" value={data.from} onChange={onField} placeholder="City / country" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-sm text-sand-400 mb-2">Which trip did we do?</span>
                    <select
                      name="trip"
                      value={data.trip}
                      onChange={onField}
                      className="w-full bg-night-950/60 border border-sand-800/40 px-4 py-3 text-sand-100 rounded-md focus:border-sand-400/50 focus:outline-none transition"
                    >
                      <option value="">Pick one…</option>
                      {TRIPS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                  <Input label="When (roughly)" name="when" value={data.when} onChange={onField} placeholder="e.g. August 2025" />
                </div>

                {/* Star rating */}
                <div>
                  <span className="block text-sm text-sand-400 mb-2">Out of five, no pressure 😅</span>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((n) => {
                      const on = (hoverRating || rating) >= n;
                      return (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setRating(n === rating ? 0 : n)}
                          onMouseEnter={() => setHoverRating(n)}
                          onMouseLeave={() => setHoverRating(0)}
                          aria-label={`${n} star${n > 1 ? "s" : ""}`}
                          className={`text-2xl leading-none transition-transform hover:scale-110 ${on ? "text-amber-300" : "text-sand-700"}`}
                        >
                          ★
                        </button>
                      );
                    })}
                    {rating > 0 && (
                      <span className="ml-2 text-sand-500 text-xs tracking-wider">{rating}/5</span>
                    )}
                  </div>
                </div>
              </div>

              {/* The big one */}
              <div>
                <Textarea
                  label="The big one — what stuck with you?"
                  name="story"
                  rows={6}
                  value={data.story}
                  onChange={onField}
                  placeholder="The story you'd lead with. The moment you still think about. Write it how you'd say it to me over a beer."
                  required
                />
                <p className="text-sand-600 text-xs -mt-2">This one&apos;s the heart of it. Everything below is bonus — answer whatever sparks something.</p>
              </div>

              {/* Extra prompts */}
              <div className="space-y-4">
                <p className="text-sand-400 text-[11px] tracking-[0.25em] uppercase">A few more, if you&apos;re in the mood</p>
                {PROMPTS.map((p) => (
                  <Textarea
                    key={p.name}
                    label={p.label}
                    name={p.name}
                    rows={2}
                    value={data[p.name]}
                    onChange={onField}
                    placeholder={p.placeholder}
                  />
                ))}
              </div>

              {/* Photo upload */}
              <div>
                <span className="block text-sm text-sand-400 mb-2">A photo from the trip (please? 🙏)</span>
                <label className="flex items-center gap-4 cursor-pointer rounded-md border border-dashed border-sand-800/50 bg-night-950/40 px-4 py-4 hover:border-sand-600/60 transition">
                  <span className="shrink-0 text-2xl">📷</span>
                  <span className="flex-1 text-sm text-sand-400">
                    {photoFile ? (
                      <span className="text-sand-200">{photoFile.name}</span>
                    ) : (
                      "Tap to attach a photo (JPG or PNG)"
                    )}
                  </span>
                  <span className="shrink-0 text-xs uppercase tracking-[0.15em] text-sand-500">Browse</span>
                  <input type="file" accept="image/*" onChange={onPhoto} className="hidden" />
                </label>
                {photoFile && (
                  <button
                    type="button"
                    onClick={() => setPhotoFile(null)}
                    className="mt-2 text-sand-500 text-xs uppercase tracking-[0.15em] hover:text-sand-200 transition"
                  >
                    Remove photo
                  </button>
                )}
              </div>

              {/* Just for Tugi */}
              <Textarea
                label="Anything just for me? (I won't publish this bit)"
                name="forTugi"
                rows={2}
                value={data.forTugi}
                onChange={onField}
                placeholder="A note, a gripe, a thank-you, something I should fix next time. Between us."
              />

              <Input label="Your email (so I can write back)" name="email" type="email" value={data.email} onChange={onField} placeholder="you@email.com" />

              <div className="rounded-lg border border-sand-800/40 bg-night-950/40 p-5">
                <Checkbox name="consent" checked={data.consent} onChange={onField}>
                  You can put my words (and photo) on the site and socials, with just my first name. It&apos;s really me — promise.
                </Checkbox>
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className={`w-full rounded-full px-7 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all ${
                  canSubmit
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-night-950 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.7)]"
                    : "bg-sand-900/50 text-sand-600 cursor-not-allowed"
                }`}
              >
                Send it over
              </button>
              <p className="text-center text-sand-600 text-xs">
                Just your name and the big one are required. The rest is however much you feel like giving me.
              </p>
            </form>
          </FadeIn>
        )}

        {submitted === "sent" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-emerald-800/30 bg-emerald-900/10 p-10 text-center"
          >
            <p className="text-emerald-300 text-xs tracking-[0.3em] uppercase mb-3">✓ Got it</p>
            <h3 className="font-display text-2xl text-sand-100 mb-3">Ah, thank you. Genuinely.</h3>
            <p className="text-sand-400 max-w-lg mx-auto">
              I&apos;ll read this properly — twice, knowing me. If it&apos;s alright with you it&apos;ll go up on the site with just your first name. Miss you already. Come back soon. 🫶
            </p>
            <button
              onClick={resetForm}
              className="mt-6 border border-sand-400/40 px-6 py-2.5 text-sm uppercase tracking-[0.15em] text-sand-200 hover:bg-sand-400/10 rounded-sm transition"
            >
              Add another
            </button>
          </motion.div>
        )}

        {submitted === "fallback" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-amber-800/30 bg-amber-900/10 p-10 text-center"
          >
            <p className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-3">One more tap</p>
            <h3 className="font-display text-2xl text-sand-100 mb-3">Your email should&apos;ve popped open.</h3>
            <p className="text-sand-400 max-w-lg mx-auto mb-4">
              Just hit send. <span className="text-sand-200">If you picked a photo, drag it onto that email</span> — it can&apos;t ride along on its own. Nothing opened? Just email me straight.
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
    </div>
  );
}

// ============================================================================
// FORM PRIMITIVES (kept local so the page is self-contained)
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
    <label className="block">
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
