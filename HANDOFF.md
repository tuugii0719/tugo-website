# Handoff — Wild Mongolia with Tugi

**Status:** LIVE at https://wildmongoliawithtugi.com
**Last session:** May 26, 2026
**Owner:** Tugi (`tuklobin@gmail.com`, `@mongoladventure`)

---

## Live-site smoke test (last run)

All endpoints returned **200**:

| URL | Title |
|---|---|
| `/` | Wild Mongolia with Tugi — Adventure Tours |
| `/tours` | Tours · 2026 Season |
| `/book` | Apply to join |
| `/gallery` | Gallery |
| `/about` | About Tugi |
| `/why-tour-tugo` | Why Tugi |
| `/tours/southern-gobi` | Southern Gobi + Central · Aug 18–28 |
| `/tours/gobi-glimpse` | Gobi Glimpse + Central · Jun 10–18 |
| `/sitemap.xml` | (XML) |
| `/robots.txt` | (text) |
| `/logo.png` | (PNG, 471 KB) |
| `/downloads/mongolia-summer-guide.pdf` | (PDF) |
| `www.` subdomain | Redirects to apex correctly |

---

## Infrastructure summary

| Layer | Service | Key reference |
|---|---|---|
| Code | GitHub | `github.com/tuugii0719/tugo-website`, branch `claude/quirky-payne-00b058` |
| Hosting | Vercel | Project deploys on push to that branch. Production = the same branch. |
| Domain | (registrar of Tugi's choice) | `wildmongoliawithtugi.com` apex + `www.` |
| Form backend | Formspree | Project name "Wild Mongolia with Tugi", form ID **`xredyrzd`** (POSTs to `https://formspree.io/f/xredyrzd`) → emails to `tuklobin@gmail.com` |
| Lead-magnet PDF | Vercel | served at `/downloads/mongolia-summer-guide.pdf` |
| Email list | Not wired yet | MailerLite recommended (free up to 1k) |
| Analytics | Not wired yet | Vercel Analytics (one click) or Plausible recommended |

### Env vars on Vercel
- `NEXT_PUBLIC_FORMSPREE_ID = xredyrzd` (Production, Preview, Development)

---

## Latest commit chain (newest first)

```
3f409306  Final pre-launch tweaks: prices, logo, agreement timing, why-tugi cleanup
af65ca53  Photos, gallery refresh, Tugi narratives, marketing plan, agreements
cc03f9f6  Itinerary pattern across all 8 tours + Gobi naming swap + tour data tweaks
02c91a03  Tour schedule + pricing update, calendar redesign, content polish
a6c5ef9   Wild Mongolia with Tugi rebrand + launch-readiness pass
```

---

## Tour catalog (live as of this writing)

| Tour | Dates | Days | Price | Status |
|---|---|---:|---:|---|
| Terelj Escape | Jun 5 – 7 | 3 | $300 | Available |
| Gobi Glimpse + Central | Jun 10 – 18 | 9 | $1,000 | Available |
| Horse Trek · Khagiin Khar | Jun 22 – 27 | 6 | $900 | **Fully Booked** |
| Playtime Music Festival | Jul 1 – 4 | 4 | $450 | Available |
| Naadam Festival | Jul 8 – 14 | 7 | $700 | Available |
| Terelj Escape | Jul 16 – 18 | 3 | $300 | Available |
| North & Central Loop | Jul 21 – 31 | 11 | $1,200 | Available |
| Altai Tavan Bogd | Aug 3 – 8 | 6 | $900 | Available |
| Terelj Escape | Aug 11 – 13 | 3 | $300 | Available |
| Southern Gobi + Central | Aug 18 – 28 | 11 | $1,200 | Available |

**Tour data source of truth:** `tugo-website/app/tours/page.js` — the `tours = [...]` array near the top. Home slider, /book dropdown, and individual tour pages all need to be synced manually when this changes (a future session could refactor to a single import).

---

## Files worth knowing

| File | What |
|---|---|
| `MARKETING_PLAN.md` / `.pdf` | Living marketing playbook + polished PDF |
| `tugo-website/public/downloads/mongolia-summer-guide.pdf` | 16-page lead-magnet guide (Tugi's voice) |
| `build_marketing_pdf.py` | Regenerates `MARKETING_PLAN.pdf` after editing the .md |
| `build_guide_pdf.py` | Regenerates the lead-magnet guide |
| `process_new_photos.py` | Optimize + dedupe new photos dropped into `/pictures/` |
| `dedupe_gallery.py` | Perceptual-hash duplicate finder for `public/images/gallery/` |
| `tugo-website/components/ui/GradientCard.jsx` | Reusable card pattern used on `/about` and `/why-tour-tugo` |
| `tugo-website/components/Ornaments.jsx` | Reusable Mongolian SVG ornaments (cloud band, wave, mountain, ulzii knot) — not yet integrated, available for future polish |
| `tugo-website/.env.local` | `NEXT_PUBLIC_FORMSPREE_ID=xredyrzd` (local only, not committed) |

---

## Marketing — this week's priority actions

From `MARKETING_PLAN.md`:

1. **Set up 6 Instagram Highlights** — Tours 2026 / What to expect / Hosts & gers / On the road / Reviews / FAQ. ~2h.
2. **Submit INDY Guide listing** at indyguide.com/mongolia. ~30 min, free.
3. **Wire MailerLite form** to gate the `/downloads/mongolia-summer-guide.pdf` (currently public). ~1 day.
4. **Walk into 3 UB hostels** (Sunpath, Danista, Khongor) with cards. 10% referral commission. In person, in Mongolian.
5. **Shortlist 15 micro-creators** (20–80k IG, Mongolia-curious). One batch DM pitch. Expect 1–2 yeses.

---

## Known gaps (not blockers — pick up later)

- **Favicon** — `app/icon.png` not yet added. Browser tab shows generic icon. ~5 min once a square crop of the logo is dropped in.
- **OG share image** — `public/og.jpg` not yet added. Link previews on IG/iMessage/WhatsApp will be blank. 1200×630 needed.
- **Hero photos still placeholders** — the 6 characteristic-driven home hero slides use existing landscape photos. Per-slide intent is documented in `app/page.js` comments; swap in matching real photos when shot.
- **Email list / MailerLite** — not wired. Lead-magnet PDF is currently publicly downloadable.
- **Analytics** — not wired. Turn on Vercel Analytics (free) in the Vercel project settings for basic traffic data.
- **Tour data has 3 sources** — `tours/page.js`, `app/page.js sliderTours`, `app/book/page.js tourOptions`. Future refactor: single source of truth.
- **Formspree "Restrict to Domain"** field — should be set to `wildmongoliawithtugi.com` in Formspree settings to prevent form spam from other origins.
- **Five hero ornaments in `Ornaments.jsx`** never integrated after the dark/light revert. Available if a future iteration wants subtle Mongolian motifs as section dividers.

---

## How to resume in a fresh Claude session

Open this file (`HANDOFF.md`) in your editor. Tell the new session:

> Read `HANDOFF.md` in the repo root. That's the state of things. I want to work on [specific thing].

Everything they need to be productive in 60 seconds is in this doc.

---

## Quick reference — copy/paste

**Repo:** `github.com/tuugii0719/tugo-website`
**Branch:** `claude/quirky-payne-00b058`
**Live site:** `wildmongoliawithtugi.com`
**Vercel project:** "Wild Mongolia with Tugi"
**Formspree form:** `xredyrzd` → `tuklobin@gmail.com`
**Instagram:** `@mongoladventure`
**Email:** `tuklobin@gmail.com`

**To push DNS warnings to git (corporate cert issue):** prefix any `git push` with `GIT_SSL_NO_VERIFY=1`.

**To run dev server locally:** preview tool's `launch.json` already configured. `cd tugo-website && node node_modules/next/dist/bin/next dev --turbopack` works too.

**To regenerate PDFs:** `python build_marketing_pdf.py` / `python build_guide_pdf.py`.
