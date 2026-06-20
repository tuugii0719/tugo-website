"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  VitalsStrip, Prologue, Itinerary,
  IncludedBring, TourFAQ, TourCTA,
  SectionHead, PullQuote, GerEtiquette,
} from "@/components/tours/kit";
import CentralMongoliaSection from "@/components/tours/CentralMongoliaSection";

const G = "/images/gallery";
const D = "/images/destinations";

const ACCENT = "red";

export default function NaadamPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100 overflow-x-hidden">

      {/* HERO — red/gold festival treatment */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-amber-900/30 to-orange-900/20 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <Link href="/tours" className="inline-flex items-center gap-2 text-sand-300 text-[11px] tracking-[0.3em] uppercase mb-8 hover:text-amber-300 transition-colors">
            ← 2026 Season
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-amber-300 text-[11px] tracking-[0.4em] uppercase mb-4 font-medium">
                  A local Naadam in Arkhangai · July 2026
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6">
                  <span className="block">Naadam</span>
                  <span className="block bg-gradient-to-r from-red-400 via-amber-400 to-orange-400 bg-clip-text text-transparent italic">
                    Festival
                  </span>
                </h1>
                <p className="text-sand-200 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  The three sports — wrestling, racing, archery — the way the country actually does them. Not the Ulaanbaatar stadium. A local Naadam in Arkhangai, hosted by my own relatives, the whole valley out for the races — and all of it during ARA Fest, the month-long festival at the complex just down the road.
                </p>

                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-200 text-[11px] tracking-[0.2em] uppercase font-semibold">
                    <span aria-hidden="true">⚠</span> Limited spots available
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { l: "Tour", v: "Jul 8 – 14" },
                    { l: "Days", v: "7" },
                    { l: "Group", v: "5 – 7" },
                    { l: "Price", v: "$630" },
                  ].map((p) => (
                    <span key={p.l} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-night-950/60 backdrop-blur-md border border-amber-400/30">
                      <span className="text-amber-300 text-[10px] tracking-[0.2em] uppercase">{p.l}</span>
                      <span className="text-sand-100 text-sm font-medium">{p.v}</span>
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/book" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-400 hover:to-amber-400 text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all shadow-[0_10px_30px_-10px_rgba(239,68,68,0.6)]">
                    Reserve a Spot
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 lg:order-2 order-1">
              <motion.div initial={{ opacity: 0, scale: 0.96, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative max-w-sm mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-red-500/40 via-amber-500/30 to-orange-500/40 rounded-3xl blur-2xl" />
                <div className="relative grid grid-cols-2 grid-rows-2 gap-2">
                  <div className="relative col-span-2 aspect-[16/10] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                    <Image src="/images/tugi/naadam-wide-field.jpg" alt="A local Naadam field, opening morning — cars, gers, tents along the steppe" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 40vw" />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
                    <Image src={`${D}/naadam-wrestling.jpg`} alt="Mongolian wrestling at Naadam" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
                    <Image src={`${D}/naadam-horse-race.jpg`} alt="Naadam horse race" fill className="object-cover" />
                  </div>
                </div>
                <p className="text-center text-amber-300/70 text-[10px] tracking-[0.3em] uppercase mt-4">
                  A soum Naadam · the wrestling · the race
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <VitalsStrip
        items={[
          { l: "Dates", v: "Jul 8 – 14, 2026" },
          { l: "Days", v: "7" },
          { l: "Group", v: "5 – 7" },
          { l: "Region", v: "Orkhon → Arkhangai" },
          { l: "Festival", v: "Naadam + ARA Fest" },
          { l: "Price", v: "$630" },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="Mongolia&rsquo;s biggest holiday, without the crowd."
        paragraphs={[
          "Naadam is the three-day national holiday — wrestling, horse racing, archery — that takes over the whole country every July. Most travellers see it in Ulaanbaatar: a stadium, assigned seats, thousands of other tourists. A great show, but a show.",
          "I run it the way my family does it. We base in Arkhangai with my own relatives and go to the <em>local</em> Naadam — a field in Tsetserleg instead of the UB stadium, neighbours wrestling, kids racing horses across open valley, women in full holiday <em>deel</em>, and the best <em>khuushuur</em> you&apos;ll ever burn your fingers on. Being there with family is what gets you past the tourist distance: a seat in the shade, the introductions, the running commentary on who&apos;s who.",
          "Here&apos;s the bonus: all of this lands during <em>ARA Fest</em> — a month of concerts, shows, and sport that takes over the ARA Complex just outside Tsetserleg, minutes from where we&apos;re staying. The Arkhangai Naadam is part of it. On a festival night we wander over for whatever&apos;s on — a concert, a laser show, the mas-wrestling.",
          "We bookend the festival with the best of the central country — the Orkhon Valley on the way out, then Terkhiin Tsagaan Nuur, Khorgo&apos;s crater rim, and the Tsenkher hot springs to soak it all off before we turn for home. The route bends with the festival schedule — which is the whole idea.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        title="Seven days, the festival at the heart."
        days={[
          {
            n: "01", t: "UB → Orkhon Valley",
            stops: ["Ulaanbaatar", "Roadside guanz", "Orkhon Valley tent camp"],
            acts: ["drive", "camp", "meal"],
            d: "Drive southwest out of UB into the Orkhon Valley — the river country that cradled the Mongol empire. A long road day; we settle into a riverside tent camp in the evening.",
            more: "We leave UB around 8am and follow the road into Övörkhangai, roughly 6–7 hours with a guanz (roadside diner) lunch along the way. The Orkhon opens into a wide green valley — herds, the waterfall not far off, the first real quiet of the trip. We pitch the tents by the water.",
          },
          {
            n: "02", t: "Into Arkhangai · my family",
            stops: ["Orkhon Valley", "Tsetserleg", "My relatives' home"],
            acts: ["drive", "ger", "meal"],
            d: "Half-day north into Arkhangai, to my relatives' place near Tsetserleg. This is our base for the festival — a real family, a real kitchen, not a tourist camp.",
            more: "Arkhangai is my family's country — green hills, the Tamir river, larch on the ridgelines. We drive up from the Orkhon and settle in with relatives who host us for the festival days. Over milk tea we plan around the Naadam schedule — and ARA Fest is already running at the ARA Complex just outside Tsetserleg, a few minutes from the house. You're not a guest at a camp — you're a guest in a family.",
          },
          {
            n: "03", t: "Village Naadam · opening",
            stops: ["Soum Naadam grounds", "Wrestling field", "Archery line"],
            acts: ["festival", "meal", "visit"],
            d: "The local soum Naadam opens — wrestling on a roped field, archery alongside, the whole district in holiday deel. We move through it with family, not as outsiders.",
            more: "Opening day at the village Naadam. Wrestlers in lambskin and silk, archers loosing at leather targets while the judges chant, kids everywhere, grandmothers selling khuushuur from tents. Being there with my relatives gets you past the tourist distance — a seat in the shade, the introductions, the running commentary on who's who and who's favoured to win.",
          },
          {
            n: "04", t: "Valley horse races",
            stops: ["Race start, open steppe", "The finish line", "Family camp"],
            acts: ["horse", "festival", "meal"],
            d: "The races are the heart of it — kids 6–12 galloping in from kilometres out across open valley, no track, the whole district turned out at the line. We follow it the local way, by jeep — then close the day with a festival night at the ARA Complex.",
            more: "Naadam horse racing isn't a stadium event — it's run across open country, the finish line out on the valley floor. The jockeys are children, bareheaded, riding 15–25 km. We drive out to watch them set off, then race the dust back to the finish, where the winning horse is washed with airag and sung to. In the evening we head over to the ARA Complex for whatever the festival's got on — a concert, a show, the mas-wrestling — then back to the family for fire and stew.",
          },
          {
            n: "05", t: "Terkhiin Tsagaan Nuur + Khorgo",
            stops: ["Khorgo volcano", "Terkhiin Tsagaan Nuur", "Lakeside tent camp"],
            acts: ["drive", "peak", "hike", "water"],
            d: "West to the lava-dammed White Lake. Hike the crater rim of Khorgo volcano (~40 min up), then pitch the tents by the water. Swim if you're brave — it's cold.",
            more: "Khorgo is a dormant volcano whose lava once dammed a river to create Terkhiin Tsagaan Nuur — a lake sitting in black basalt. The crater rim walk is about 40 minutes, easy grade, big views the whole way. We pitch camp on the lakeshore. The water is COLD; swim or just sit by the fire — both count.",
          },
          {
            n: "06", t: "Tsenkher hot springs",
            stops: ["Terkhiin", "Tsenkher springs", "Wooden pool camp"],
            acts: ["drive", "hotspring", "star"],
            d: "Back southeast to Tsenkher. 86 °C spring water piped into wooden pools under the stars — the reset after the festival.",
            more: "Tsenkher is the antidote to a big week. 86°C at the source, piped into wooden tubs at varying temperatures. You soak, you read, you soak again. By dark there's nothing but you, the water, and the stars.",
          },
          {
            n: "07", t: "Tsenkher → UB",
            stops: ["Tsenkher", "Kharkhorin", "Erdene Zuu Monastery", "Ulaanbaatar"],
            acts: ["drive", "visit", "city"],
            d: "Slow morning, then east toward home. Stop at Erdene Zuu Monastery in Kharkhorin — the old imperial capital. UB by evening.",
            more: "On the way back we stop at Erdene Zuu — the oldest surviving Buddhist monastery in Mongolia, 16th century, walled with 108 stupas and built from the stones of Karakorum, Chinggis Khaan's old capital. A slow walk through the courtyards, then the last stretch east. UB by evening — group dinner if you're up for it.",
          },
        ]}
      />

      {/* PHOTO ESSAY */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="The festival" title="Three sports, one holiday." center accent={ACCENT} />

          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[21/9] overflow-hidden rounded-2xl"
            >
              <Image src={`${G}/DSC02098.jpg`} alt="Horse racing at Naadam" fill className="object-cover" sizes="100vw" />
            </motion.div>

            <PullQuote
              accent={ACCENT}
              quote="The kid riders gallop in bareheaded and the whole village runs out to check which horse was first. That's the finish line."
              attribution="— The Naadam horse race in one sentence."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {[`${G}/DSC02090.jpg`, `${G}/DSC02095.jpg`, `${G}/DSC02105.jpg`, `${G}/DSC02132.jpg`].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image src={src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="25vw" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {[`${G}/DSC02111.jpg`, `${G}/DSC02138.jpg`, `${G}/DSC02365.jpg`].map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                  <Image src={src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="33vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOD + GER */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <SectionHead kicker="Holiday food" title="Khuushuur, airag, and then some." accent={ACCENT} />
            <p className="text-sand-300 text-lg leading-relaxed mb-4">
              Naadam is the biggest <em>khuushuur</em> weekend of the year — deep-fried mutton hand-pies eaten straight off the pan by the field. Everyone keeps a count. Ten is modest. The most I&apos;ve watched someone put away is twenty-three.
            </p>
            <p className="text-sand-400 leading-relaxed mb-6">
              Add fermented mare&apos;s milk (<em>airag</em>), dried curds (<em>aaruul</em>), milk tea, and the occasional glass of vodka someone&apos;s grandfather insists you try. We eat well.
            </p>
          </div>
          <div className="md:col-span-2">
            <GerEtiquette />
          </div>
        </div>
      </section>

      {/* CENTRAL — reusable */}
      <div className="border-b border-sand-900/30">
        <CentralMongoliaSection accent="red" compact />
      </div>

      <IncludedBring
        accent={ACCENT}
        priceLabel="$630"
        included={[
          "4×4 vehicle, fuel, driver",
          "English/Mongolian guide (Tugi)",
          "All meals on the road",
          "3 nights with my relatives in Arkhangai",
          "Riverside tent camp, Orkhon Valley (1 night)",
          "Lakeside tent camp, Terkhiin Tsagaan Nuur (1 night)",
          "Hot-spring camp, Tsenkher (1 night)",
          "Camping gear — tent, sleeping mat, stove",
          "An ARA Fest evening — concert or show (schedule permitting)",
          "All Naadam, park, and site entry fees",
          "UB airport pickup + drop-off",
        ]}
        bring={[
          "Sleeping bag rated to 5 °C (for the tent nights)",
          "Festival-friendly clothes — sun hat, sunglasses",
          "Warm layer for evenings (down to 10 °C)",
          "Rain shell (afternoon storms in July)",
          "Swimsuit (hot springs + lake)",
          "Hiking shoes for the Khorgo crater",
          "Small cash bills for khuushuur and airag",
        ]}
        note="Photography note: always ask before photographing wrestlers, riders, or families. Tugi will help with the hello."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "Why a village Naadam instead of the big one in UB?", a: "The UB stadium Naadam is a huge show — and heavily commercial: thousands of tourists, assigned seats, everything behind a fence. A soum Naadam is what the holiday actually <em>is</em> — your neighbours wrestling, kids racing, grandmothers selling khuushuur from a tent. I wrote more about the difference <a href=\"/guides/naadam-village-vs-ulaanbaatar\">here</a>." },
          { q: "Where do we stay?", a: "Three nights with my relatives near Tsetserleg in Arkhangai — actual family, not a tourist camp. The other nights are tent camps: a riverside one in the Orkhon Valley and a lakeside one at Terkhiin Tsagaan Nuur, plus the ger camp at the Tsenkher hot springs. I bring the tents, mats, and stove — you bring a sleeping bag." },
          { q: "What&apos;s the ARA Festival?", a: "ARA Fest is a month-long music-and-culture festival at the ARA Complex just outside Tsetserleg — concerts, theatrical shows, mas-wrestling, art camps — and the Arkhangai Naadam falls right inside it. Since we&apos;re based minutes away, we catch a festival night while we&apos;re there. One note: ARA&apos;s headline live-music weekend usually lands mid-to-late July, just after our dates — if you want to build around that too, tell me and we&apos;ll extend the trip." },
          { q: "How far is the driving?", a: "UB to the Orkhon Valley is ~6–7 hours on day one. From there it&apos;s a half-day up to Arkhangai, and the Naadam grounds are close to my family&apos;s place. The later legs — Terkh, Tsenkher, the run home — are 3–6 hours each, all stopping at real places." },
          { q: "Can I still see the UB opening ceremony?", a: "The soum ceremony is smaller — a horse parade, speeches, the wrestlers&apos; entrance. The famous stadium opening is its own spectacle. If you want both, add a day in UB around July 11 (the official holiday) before or after, and I&apos;ll help you line it up." },
          { q: "What about the weather?", a: "July in central Mongolia: 15–26 °C days, down to 10 °C at night. Pleasant. Afternoon thunderstorms are common but usually pass in half an hour — bring a shell." },
          { q: "Is this good for photographers?", a: "Very. Clean light, striking subjects, and — through my family — access most visitors don&apos;t get. Long lens for the races, wide for the crowd, a fast prime for portraits. Always ask before shooting people; I&apos;ll help with the hello." },
          { q: "What if the Naadam dates shift?", a: "Naadam falls July 11–13 nationally; the soum festivals run a few days either side. The Jul 8–14 window catches the Arkhangai cycle. We confirm exact dates about 60 days out and bend the plan to fit." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="July 8 – 14, 2026 · $630"
        subtitle="One soum Naadam, my family&rsquo;s valley, one small group. Bring a friend and save 15% each. Limited seats — Naadam is the year&rsquo;s busiest week."
        emailSubject="Naadam · July 8 – 14"
      />
    </div>
  );
}
