# Wild Mongolia with Tugi — Marketing Plan

**Owner:** Tugi
**Last updated:** May 2026
**Window to fill 2026 tours:** ~6 months (tours start June 2026)
**Starting position:** 86 IG followers (@mongoladventure), 1 of 10 tours already sold out via word of mouth

---

## 1. The position

> **Not a tour company. Just me, Tugi, taking 5–8 people across Mongolia at a price that doesn't punish you for being curious.**

The competitor scan (Stone Horse, Eternal Landscapes, Sunpath, Nomadic Trails) shows nobody owns the combo of:
- **Personal** — Tugi's face on everything
- **Accessible price** — published, $350–$1,300
- **Small group** — 5–8, never bigger
- **Camping-not-luxury** — gers and tents, not eco-resorts

Lean into the underdog truth: 86 followers, 1 trip already sold out by word of mouth, no marketing budget. That IS the story. Don't pretend to be bigger.

---

## 2. This week — the only list that matters

1. **Set up 6 Instagram Highlights** — Tours 2026 / What to expect / Hosts & gers / On the road / Reviews / FAQ. New profile visitors see this before anything else. — 2 hours
2. **Submit INDY Guide listing** at [indyguide.com/mongolia](https://indyguide.com/mongolia) — free, evergreen, pre-qualified traveler intent. — 30 min
3. **Polish & host the "Mongolia in Summer" PDF guide** *(already drafted at `public/downloads/mongolia-summer-guide.pdf`)* + wire MailerLite free tier + add a sign-up form on `/` and every `/tours/{slug}`. — 1 day
4. **Walk into 3 UB hostels with business cards** (Sunpath, Danista, Khongor). 10% commission on overflow referrals. In person, in Mongolian. — 1 afternoon (next time in UB)
5. **Shortlist 15 micro-creators** (20–80k IG followers, Mongolia-curious, engagement >3%). Send one batch pitch: *"I have one spot on the cheapest tour ($350) reserved for a creator I'd actually want on the trip — interested?"* Expect 1–2 yeses. — 3 hours

Everything else waits until these five are done.

---

## 3. Weekly rhythm (after week 1)

### Content (Instagram first, repurpose to TikTok)

**Cadence:** 4 Reels + 1 carousel + daily Stories per week. Every Reel → TikTok 24h later via CapCut.

**Reel hook archetypes that win for adventure travel:**
1. **POV sensory open** — *"POV: you wake up in a ger and the only sound is a horse breathing outside your door"*
2. **Pattern interrupt** — *"Stop scrolling if you're booking Asia in 2026 — Mongolia is the one place you haven't considered"*
3. **Quiet flex** — Bali clip → cut to Khövsgöl (*"while everyone's in Bali…"*)
4. **Founder-to-camera** — Tugi's face, no edit, dry voice (*"I don't run this like a business. Here's what that looks like."*) — **his unfair advantage; overuse it**
5. **Numbered list carousels** — *"5 things I don't do on my tours"* → save magnet

**Monthly post-type mix:**
- 12 proof posts (past-trip footage)
- 8 education (packing, ger etiquette, weather, money, Naadam explained)
- 6 founder-voice (Tugi to camera)
- 4 direct CTAs (booking, link in bio, sold-out scarcity)

**Hashtags** — 8–12 in the first comment, never the caption:
```
#mongolia #visitmongolia #mongoliatravel #mongoliaadventure
#gobi #khuvsgul #nomadlife #gertrip #centralasia
#offthebeatenpath #slowtravel #smallgrouptours
#adventuretravel #responsibletravel #solotravel #wildmongoliatugi
```

**Avoid:** `#travel #explore #wanderlust #love` — banned-adjacent / oversaturated.

### Distribution

| Channel | Cadence | Format that works | Don't |
|---|---|---|---|
| **Reddit** (r/Mongolia, r/solotravel, r/backpacking, r/onebag) | 3–4 substantive comments/week + 1 trip-report post/month | "I just guided 6 strangers through the Gobi — here's what surprised them" AMAs · helpful answers signed first name | Direct booking links in posts. 90/10 rule enforced. |
| **Facebook groups** (*Backpackers in MONGOLIA* · *Mongolia Travel Hub* · *Solo/Group Backpackers in Mongolia*) | 5 answers before posting your own. 1 self-intro per group per month. | "Hi I'm Tugi, local guide running small-group trips this summer — IG link if curious" | Spamming links same day across groups |
| **Naver Cafe 몽골여행** (Korean) | 1 translated trip report (use a Korean-speaking friend) | Mongolia is having a moment in Korea — outperforms English reach | (skip if no Korean speaker available) |

---

## 4. Funnel + tracking

**Bio link →** point at `/tours`, not `/`. One less click for someone already interested.

**Track only these 3 events** (Vercel Analytics custom events):
- `tour_view`
- `book_click` (apply button)
- `book_submit` (Formspree)

**UTM template** on every link Tugi posts manually:
```
?utm_source=instagram&utm_medium=bio&utm_campaign=gobi8
```
One Google Sheet, one row per post. Source on every Formspree submission.

**Email follow-up for `/book` applicants who haven't paid the deposit:**

| When | Message |
|---|---|
| T+0 (within 2h) | Personal reply from Tugi. Confirm tour, deposit instructions, one paragraph of "what happens next." Not a template. |
| T+48h | Soft nudge: *"still holding your spot, here's a photo from last year's group at [exact location on their itinerary]."* Image attached. |
| T+5 days | Honest urgency: *"N spots left, M people asking — if not the right time, just let me know so I can release the hold."* |
| T+10 days | Last call: *"Releasing your spot tomorrow unless I hear back."* Don't bluff — actually release. |
| T+30 days (lost lead) | *"Want me to email you when next year's dates open?"* → moves to newsletter |

---

## 5. Lead magnet

**Done:** "Mongolia in Summer — an honest guide" PDF (16 pages, in Tugi's voice).
**File:** `tugo-website/public/downloads/mongolia-summer-guide.pdf`
**Next:** wire it behind a MailerLite form on a `/guide` page + promo it on `/` hero, every tour page sidebar, and the IG bio.

Promo line for IG bio:
> *"Free 16-page honest guide to Mongolia in summer ↓"*

---

## 6. Paid acquisition

**Honest answer:** below $600 over 30 days, Meta can't optimize. **$300 is better spent on a micro-creator collab.**

**Plan A (recommended): $300 → micro-creator + organic boost**
- $150 → one Mongolia-traveled creator (20–80k IG, 3%+ engagement). Gifted seat on the cheapest tour ($350) in exchange for 1 Reel + 1 in-feed + 3 Stories + repost rights.
- $150 → boost whichever organic Reel hits >5% engagement in week 2 or 3.

**Plan B (only if Plan A fails): $300 pure paid**
- Platform: Meta, **Instagram Reels placement only**
- Objective: **Profile Visits** (not link clicks — at 86 followers the bottleneck is social proof, not website traffic)
- Targeting: `adventure travel + Intrepid + Atlas Obscura + Much Better Adventures + Lonely Planet`, ages 28–45, English-speaking countries — US, UK, AU, DE, NL. (German + Dutch over-index on Mongolia.)
- Creative: 3 organic Reels that already outperformed, $25 boost each → that's $75. Other $225 → two campaigns at $8/day × 14 days.

---

## 7. Top 5 partnerships to chase in the first 4 weeks

1. **Micro-creator (20–80k)** — Mongolia-traveled or Mongolia-curious. Pitch (avoid the word "collaboration"):
   > *"I'm a Mongolian guide running 10 small-group trips this summer. I have one spot reserved for a creator I'd actually want on the trip — interested?"*
2. **INDY Guide listing** — free distribution, pre-qualified intent.
3. **2–3 UB hostels** (Sunpath / Danista / Khongor) — 10% referral commission on overflow bookings. In-person ask in Mongolian beats email 10x.
4. **Korean travel community** — Naver Cafe 몽골여행 groups. One Korean-translated trip report significantly outperforms English-only reach.
5. **University outdoor clubs** in Australia / Germany / Netherlands — email outdoor-club presidents at ANU, TU Munich, Utrecht offering 10% group discount for 4+ bookings. Low hit rate, but one yes = a half-full tour.

---

## 8. What NOT to do

- ❌ Drone-only montages with text overlays — algorithm reads as stock
- ❌ Hashtags in the caption — first comment only
- ❌ Booking links in Reddit/FB groups before contributing comments
- ❌ Hide pricing behind a quote form — visible price is a differentiator
- ❌ Threads / Pinterest / Google Ads as priorities until 1k IG followers
- ❌ Pretending to be a bigger operator than you are — the "86 followers, 1 already sold out" line *is* the marketing
- ❌ Buying followers, ever

---

## 9. KPIs — one spreadsheet, updated weekly

| Metric | Week 1 baseline | Week 6 target | Week 12 target |
|---|---:|---:|---:|
| IG followers | 86 | 350 | 800 |
| Avg Reel reach | ~500 | 5,000 | 12,000 |
| Email list | 0 | 100 | 300 |
| `/book` submissions | 0–1 | 15–20 | 40 |
| Tours filled | 1/10 | 4–5/10 | 7–8/10 |

---

## 10. Quick-reference snippets

### Reddit reply template
> *"Local Mongolian guide here. Quick answer: [genuine helpful answer in 2–3 sentences]. If you want the longer version DM me, otherwise this is what I'd do. — Tugi"*
*(No links unless asked.)*

### Facebook group self-intro post (one per group, max)
> *"Hi everyone — I'm Tugi, born and raised here, running small-group trips this summer for the first time after years of guiding informally. Posting in case any of you are planning Mongolia in June–August. Happy to answer Mongolia questions in the comments either way. Insta: @mongoladventure."*

### Email signature
> *"Tugi · Wild Mongolia with Tugi · wildmongoliatugi.com · IG @mongoladventure"*

### "Sold out scarcity" line for IG captions
> *"1 of 10 tours already sold out for 2026. Link in bio for the rest."*

### Micro-creator pitch (cold DM)
> *"I'm a Mongolian guide running 10 small-group trips this summer. I have one spot reserved on the cheapest tour ($350) for a creator I'd actually want on the trip — interested?"*

---

## 11. Why this works (the underlying logic)

- **Tugi himself is the product.** Everything that surfaces his face, voice, and decisions converts better than landscape footage.
- **Scarcity is real, not manufactured.** 1/10 already sold out, max 8 per group. Mention it without making it the whole message.
- **Solo means narrow.** Two platforms (IG + Reddit), one lead magnet, one partnership type — done well — beats six things half-done.
- **The website does the work the IG can't.** Each Reel only needs to drive interest; the website carries the conversion.
- **6 months is enough.** International adventure travel decisions are made 3–6 months out. Tugi is right in the planning window.

---

## 12. Living document

Open this file, change it, commit it. Track what worked. Kill what didn't. The plan you start with is never the plan you finish with — but starting with a plan is how you find out.
