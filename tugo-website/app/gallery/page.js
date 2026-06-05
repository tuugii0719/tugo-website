"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================================
// PHOTO CATALOG — categorized from past summer field work
// ============================================================================
//
// regions: north (Khuvsgul + taiga) · central (Orkhon, horses, monasteries,
// families) · south (Gobi)
// subjects help search: horses, family, food, landscape, ger, water, road

const photos = [
  // Central Mongolia
  { id: "DSC01210", region: "central", tags: ["landscape"] },
  { id: "DSC01558", region: "central", tags: ["landscape", "sky", "ger"] },
  { id: "DSC01561", region: "central", tags: ["landscape"] },
  { id: "DSC01629", region: "central", tags: ["landscape"] },
  { id: "DSC01632", region: "central", tags: ["landscape"] },
  { id: "DSC01633", region: "central", tags: ["landscape"] },
  { id: "DSC01658", region: "central", tags: ["landscape", "Orkhon"] },
  { id: "DSC01665", region: "central", tags: ["landscape", "Orkhon"] },
  { id: "DSC01684", region: "central", tags: ["river", "canyon", "Orkhon"] },
  { id: "DSC01687", region: "central", tags: ["river", "Orkhon"] },
  { id: "DSC01690", region: "central", tags: ["river", "Orkhon"] },
  { id: "DSC01810", region: "central", tags: ["family", "food"] },
  { id: "DSC01817", region: "central", tags: ["family"] },
  { id: "DSC01820", region: "central", tags: ["food", "khorkhog"] },
  { id: "DSC01843", region: "central", tags: ["family"] },
  { id: "DSC01846", region: "central", tags: ["family"] },
  { id: "DSC01861", region: "central", tags: ["family"] },
  { id: "DSC01967", region: "central", tags: ["horses"] },
  { id: "DSC02090", region: "central", tags: ["horses"] },
  { id: "DSC02095", region: "central", tags: ["horses", "naadam"] },
  { id: "DSC02098", region: "central", tags: ["horses", "naadam", "racing"] },
  { id: "DSC02105", region: "central", tags: ["horses", "naadam"] },
  { id: "DSC02111", region: "central", tags: ["horses"] },
  { id: "DSC02132", region: "central", tags: ["horses"] },
  { id: "DSC02138", region: "central", tags: ["horses"] },
  { id: "DSC02270", region: "central", tags: ["horses"] },
  { id: "DSC02330", region: "central", tags: ["horses"] },
  { id: "DSC02365", region: "central", tags: ["horses", "herd"] },
  { id: "DSC02402", region: "central", tags: ["family"] },
  { id: "DSC02415", region: "central", tags: ["horses"] },
  { id: "DSC02430", region: "central", tags: ["landscape"] },
  { id: "DSC02503", region: "central", tags: ["landscape"] },
  { id: "DSC02507", region: "central", tags: ["landscape"] },
  { id: "DSC02514", region: "central", tags: ["landscape"] },
  { id: "DSC02531", region: "central", tags: ["road"] },
  { id: "DSC02586", region: "central", tags: ["landscape"] },

  // North / Khuvsgul
  { id: "DSC02424", region: "north", tags: ["ger", "landscape"] },
  { id: "DSC02429", region: "north", tags: ["landscape"] },
  { id: "DSC02431", region: "north", tags: ["landscape"] },
  { id: "DSC02433", region: "north", tags: ["landscape"] },
  { id: "DSC02435", region: "north", tags: ["landscape"] },
  { id: "DSC02459", region: "north", tags: ["water", "Khuvsgul"] },
  { id: "DSC02462", region: "north", tags: ["water", "Khuvsgul"] },
  { id: "DSC02487", region: "north", tags: ["landscape"] },
  { id: "DSC02496", region: "north", tags: ["landscape"] },

  // Mixed / Gobi / Central
  { id: "DSC03007", region: "central", tags: ["landscape"] },
  { id: "DSC03246", region: "central", tags: ["landscape"] },
  { id: "DSC03391", region: "central", tags: ["landscape"] },
  { id: "DSC03394", region: "central", tags: ["landscape"] },
  { id: "DSC04142", region: "central", tags: ["landscape"] },
  { id: "DSC04243", region: "central", tags: ["landscape"] },
  { id: "DSC07959", region: "south", tags: ["landscape"] },
  { id: "DSC08000", region: "south", tags: ["dunes", "Gobi", "footprints"] },
  { id: "DSC08018", region: "south", tags: ["Gobi"] },
  { id: "DSC08023", region: "south", tags: ["Gobi"] },
  { id: "DSC08036", region: "south", tags: ["Gobi"] },
  { id: "DSC08134", region: "central", tags: ["landscape"] },
  { id: "DSC08144", region: "central", tags: ["landscape"] },
  { id: "DSC08145", region: "central", tags: ["landscape"] },
  { id: "DSC08147", region: "central", tags: ["landscape"] },
  { id: "DSC08200", region: "central", tags: ["4x4", "road"] },
  { id: "DSC08213", region: "central", tags: ["landscape"] },
  { id: "DSC08217", region: "central", tags: ["landscape"] },
  { id: "DSC08220", region: "central", tags: ["landscape"] },
  { id: "DSC08238", region: "central", tags: ["landscape"] },
  { id: "DSC08244", region: "central", tags: ["landscape"] },
  { id: "DSC08245", region: "central", tags: ["landscape"] },
  { id: "DSC08248", region: "central", tags: ["landscape"] },
  { id: "DSC08276", region: "central", tags: ["landscape"] },
  { id: "DSC08281", region: "central", tags: ["landscape"] },
  { id: "DSC08283", region: "central", tags: ["monastery", "Karakorum", "Erdene Zuu"] },
  { id: "DSC08290", region: "central", tags: ["monastery"] },
  { id: "DSC08294", region: "central", tags: ["monastery"] },
  { id: "DSC08301", region: "central", tags: ["monastery"] },
  { id: "DSC08312", region: "central", tags: ["landscape"] },
  { id: "DSC08315", region: "central", tags: ["landscape"] },
  { id: "DSC08318", region: "central", tags: ["landscape"] },
];

// Personal field-note photos — Tugi on the road.
const tugiPhotos = [
  { id: "tugi-on-horse",     caption: "On a steppe horse, central Mongolia." },
  { id: "tugi-marathon",     caption: "Marathon finisher — the same legs that walk you across the Gobi." },
  { id: "tugi-zion-canyon",  caption: "Zion, Utah. Wherever the canyon goes." },
  { id: "tugi-meditation",   caption: "On a granite boulder, between trips." },
  { id: "tugi-grand-canyon", caption: "Grand Canyon. Worth the detour." },
  { id: "tugi-sf-bridge",    caption: "Golden Gate. Five years in California." },
  { id: "tugi-with-kids",    caption: "Mentoring at the San Francisco Junior Memory League." },
  { id: "tugi-backpack-self",caption: "One bag. About to leave somewhere." },
  { id: "naadam-wide-field", caption: "Local Naadam, opening morning — the field starts filling at dawn." },
  { id: "fire-night",        caption: "Camp fire, somewhere off the road." },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null);   // index into landscape grid
  const [tugiBox, setTugiBox] = useState(null);     // index into Tugi field-notes carousel

  const shown = photos;

  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      {/* HERO */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-14 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">Gallery</p>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-5 leading-tight">
              From the road
            </h1>
            <p className="text-sand-300 max-w-xl mx-auto leading-relaxed">
              Shots from past summers — the ones that made me want to do this full-time.
              Everything here was taken on my trips.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FIELD NOTES — Tugi in the wild */}
      <section className="py-12 md:py-16 border-b border-sand-900/30">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-baseline justify-between mb-6 max-w-6xl mx-auto">
            <div>
              <p className="text-sand-400 text-[11px] tracking-[0.3em] uppercase mb-2">Field notes</p>
              <h2 className="font-display text-2xl md:text-4xl text-sand-100 leading-tight">
                Me, on the road.
              </h2>
              <p className="text-sand-500 text-sm md:text-base mt-2 max-w-lg">
                Phone photos. Marathons, canyons, family ger camps, horses I&apos;ve been thrown off.
              </p>
            </div>
            <p className="hidden md:block text-sand-600 text-[10px] tracking-[0.25em] uppercase">← scroll →</p>
          </div>

          <div
            className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {tugiPhotos.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setTugiBox(i)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.25) }}
                className="snap-start flex-shrink-0 w-[260px] md:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden group relative bg-night-900 cursor-zoom-in"
              >
                <Image
                  src={`/images/tugi/${p.id}.jpg`}
                  alt={p.caption}
                  fill
                  sizes="(max-width: 768px) 260px, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/20 to-transparent" />
                <p className="absolute bottom-3 left-4 right-4 text-sand-100 text-[13px] leading-snug text-left">
                  {p.caption}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID — CSS columns for masonry effect */}
      <section className="py-10 md:py-14 border-t border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6 mb-6 md:mb-8">
          <p className="text-sand-400 text-[11px] tracking-[0.3em] uppercase mb-2">From the camera</p>
          <h2 className="font-display text-2xl md:text-4xl text-sand-100 leading-tight">
            Everything else.
          </h2>
          <p className="text-sand-500 text-sm md:text-base mt-2 max-w-lg">
            {photos.length} photos from past summers — north, central, the Gobi. Tap any to enlarge.
          </p>
        </div>
        <div className="max-w-[1600px] mx-auto px-4 md:px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [&>*]:break-inside-avoid [&>*]:mb-3 md:[&>*]:mb-4">
            {shown.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.015, 0.3) }}
                className="relative w-full overflow-hidden rounded-lg group cursor-zoom-in block"
              >
                <Image
                  src={`/images/gallery/${p.id}.jpg`}
                  alt={p.tags.join(", ")}
                  width={1400}
                  height={0}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ height: "auto" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] bg-night-950/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              <Image
                src={`/images/gallery/${shown[lightbox].id}.jpg`}
                alt=""
                fill
                sizes="90vw"
                className="object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(null);
                }}
                className="absolute top-4 right-4 text-sand-300 hover:text-white text-2xl bg-night-900/70 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                aria-label="Close"
              >
                ×
              </button>
              {lightbox > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(lightbox - 1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-300 hover:text-white text-2xl bg-night-900/70 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                  aria-label="Previous"
                >
                  ←
                </button>
              )}
              {lightbox < shown.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(lightbox + 1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sand-300 hover:text-white text-2xl bg-night-900/70 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                  aria-label="Next"
                >
                  →
                </button>
              )}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sand-500 text-xs bg-night-900/70 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {lightbox + 1} / {shown.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TUGI LIGHTBOX */}
      <AnimatePresence>
        {tugiBox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setTugiBox(null)}
            className="fixed inset-0 z-[80] bg-night-950/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              <Image
                src={`/images/tugi/${tugiPhotos[tugiBox].id}.jpg`}
                alt={tugiPhotos[tugiBox].caption}
                fill
                sizes="90vw"
                className="object-contain"
              />
              <button
                onClick={(e) => { e.stopPropagation(); setTugiBox(null); }}
                className="absolute top-4 right-4 text-sand-300 hover:text-white text-2xl bg-night-900/70 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                aria-label="Close"
              >×</button>
              {tugiBox > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setTugiBox(tugiBox - 1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-300 hover:text-white text-2xl bg-night-900/70 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                  aria-label="Previous"
                >←</button>
              )}
              {tugiBox < tugiPhotos.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setTugiBox(tugiBox + 1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sand-300 hover:text-white text-2xl bg-night-900/70 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                  aria-label="Next"
                >→</button>
              )}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-md text-center text-sand-200 text-sm bg-night-900/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                {tugiPhotos[tugiBox].caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 border-t border-sand-900/30 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-sand-100 mb-4">
            Want to make your own set?
          </h2>
          <p className="text-sand-400 mb-8">
            Pick a tour and come out with us. Your camera roll is going to look different after.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tours"
              className="inline-block bg-sand-400 hover:bg-sand-300 text-night-950 px-6 py-3 text-sm uppercase tracking-[0.15em] rounded-sm transition"
            >
              See the tours
            </Link>
            <Link
              href="/book"
              className="inline-block border border-sand-400/40 hover:border-sand-300 hover:bg-sand-400/10 text-sand-200 px-6 py-3 text-sm uppercase tracking-[0.15em] rounded-sm transition"
            >
              Apply to join
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
