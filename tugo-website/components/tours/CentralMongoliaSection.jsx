"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Central Mongolia section — reusable across tours that include the
 * central leg (North & Central Loop, Naadam, Southern Gobi + Central,
 * Gobi Glimpse + Central).
 *
 * Props:
 *  - accent: "sky" | "amber" | "rose" | "red"  — text/kicker colour
 *  - compact: boolean — smaller variant with tighter spacing
 */
export default function CentralMongoliaSection({ accent = "sky", compact = false }) {
  const accentClass = {
    sky: "text-sky-300",
    amber: "text-amber-300",
    rose: "text-rose-300",
    red: "text-red-300",
    emerald: "text-emerald-300",
  }[accent] || "text-sky-300";

  const photos = [
    { src: "/images/gallery/DSC01684.jpg", alt: "Orkhon river canyon", tall: true },
    { src: "/images/gallery/DSC02365.jpg", alt: "Wild horse herd across the steppe" },
    { src: "/images/gallery/DSC01558.jpg", alt: "Clouds over the central steppe" },
    { src: "/images/gallery/DSC08283.jpg", alt: "Erdene Zuu monastery near Karakorum" },
    { src: "/images/gallery/DSC08200.jpg", alt: "4×4 on a steppe dirt road" },
    { src: "/images/gallery/DSC01820.jpg", alt: "Khorkhog — hot-stone lamb prep" },
  ];

  const sites = [
    "Orkhon Valley",
    "Karakorum",
    "Erdene Zuu Monastery",
    "Khorgo volcano",
    "Terkhiin Tsagaan Nuur",
    "Tsenkher hot springs",
    "Nomadic family stays",
    "Khorkhog cookouts",
  ];

  return (
    <section className={compact ? "py-14 md:py-20" : "py-20 md:py-28"}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className={`${accentClass} text-xs tracking-[0.3em] uppercase mb-3 text-center`}>
            The central leg
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-sand-100 mb-4 text-center leading-tight">
            Central Mongolia
          </h2>
          <p className="text-sand-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 text-center">
            The country&apos;s heart. Orkhon Valley waterfalls, Erdene Zuu and the ruins of Karakorum,
            the dormant Khorgo volcano, the pale water of Terkhiin Tsagaan Nuur, Tsenkher hot
            springs, and long evenings at a family ger camp with khorkhog on the fire.
          </p>

          {/* Photo strip — masonry-ish */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-8">
            {photos.map((p, i) => (
              <div
                key={p.src}
                className={`relative overflow-hidden rounded-lg group ${
                  p.tall ? "row-span-2 aspect-[3/4] md:col-span-1" : "aspect-square"
                } ${i === 0 ? "col-span-2 row-span-2 md:col-span-1 md:row-span-1 aspect-[4/5]" : ""}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          {/* Site chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {sites.map((s) => (
              <span
                key={s}
                className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-sand-800/40 bg-night-900/40 text-sand-400"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
