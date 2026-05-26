"""
Builds the marketing plan PDF for Wild Mongolia with Tugi.
Output: MARKETING_PLAN.pdf at the repo root.
"""

from pathlib import Path
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    ListFlowable, ListItem,
)

# --- Brand colors ----------------------------------------------------------
NAVY = HexColor("#1a2b3a")
SLATE = HexColor("#2d4259")
SOFT = HexColor("#5b6976")
ORANGE = HexColor("#c25a1e")
FOREST = HexColor("#15722f")
ROSE = HexColor("#b91c5c")
RULE = HexColor("#d8cfb7")
CARD_BG = HexColor("#f7f3e8")
RED = HexColor("#b8331b")

OUT = Path(__file__).parent / "MARKETING_PLAN.pdf"


def on_page(canvas, doc):
    canvas.saveState()
    if doc.page > 1:
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.4)
        canvas.line(0.75 * inch, 0.55 * inch, 7.75 * inch, 0.55 * inch)
        canvas.setFillColor(SOFT)
        canvas.setFont("Helvetica", 8)
        canvas.drawString(0.75 * inch, 0.4 * inch, "Wild Mongolia with Tugi  ·  Marketing plan")
        canvas.drawRightString(7.75 * inch, 0.4 * inch, f"{doc.page}")
    canvas.restoreState()


def styles():
    s = {}
    s["cover_kicker"] = ParagraphStyle("cover_kicker", fontName="Helvetica", fontSize=11,
        leading=14, alignment=TA_CENTER, textColor=ORANGE, spaceAfter=8)
    s["cover_title"] = ParagraphStyle("cover_title", fontName="Times-Bold", fontSize=42,
        leading=48, alignment=TA_CENTER, textColor=NAVY, spaceAfter=14)
    s["cover_sub"] = ParagraphStyle("cover_sub", fontName="Times-Italic", fontSize=16,
        leading=22, alignment=TA_CENTER, textColor=SLATE, spaceAfter=18)
    s["cover_byline"] = ParagraphStyle("cover_byline", fontName="Helvetica", fontSize=9.5,
        leading=14, alignment=TA_CENTER, textColor=SOFT)
    s["chapter_kicker"] = ParagraphStyle("chapter_kicker", fontName="Helvetica-Bold",
        fontSize=9, leading=12, textColor=ORANGE, spaceBefore=8, spaceAfter=4)
    s["chapter_title"] = ParagraphStyle("chapter_title", fontName="Times-Bold", fontSize=22,
        leading=26, textColor=NAVY, spaceAfter=10)
    s["h2"] = ParagraphStyle("h2", fontName="Times-Bold", fontSize=13.5, leading=17,
        textColor=NAVY, spaceBefore=10, spaceAfter=4)
    s["h3"] = ParagraphStyle("h3", fontName="Helvetica-Bold", fontSize=9.5, leading=13,
        textColor=FOREST, spaceBefore=8, spaceAfter=2)
    s["body"] = ParagraphStyle("body", fontName="Helvetica", fontSize=10, leading=14.5,
        textColor=SLATE, spaceAfter=6)
    s["italic"] = ParagraphStyle("italic", fontName="Helvetica-Oblique", fontSize=10,
        leading=14.5, textColor=SOFT, spaceAfter=6)
    s["bullet"] = ParagraphStyle("bullet", fontName="Helvetica", fontSize=10,
        leading=14, textColor=SLATE, spaceAfter=2, leftIndent=14, bulletIndent=2)
    s["pull"] = ParagraphStyle("pull", fontName="Times-Bold", fontSize=15, leading=22,
        textColor=NAVY, spaceBefore=8, spaceAfter=12, leftIndent=18, rightIndent=18)
    s["dont"] = ParagraphStyle("dont", fontName="Helvetica", fontSize=10, leading=14,
        textColor=RED, spaceAfter=2, leftIndent=14, bulletIndent=2)
    s["snippet"] = ParagraphStyle("snippet", fontName="Courier", fontSize=9, leading=12,
        textColor=NAVY, backColor=CARD_BG, borderColor=RULE, borderWidth=0.4,
        borderPadding=10, spaceBefore=4, spaceAfter=10, leftIndent=2, rightIndent=2)
    return s


def H1(story, S, kicker, title):
    story.append(Spacer(1, 6))
    story.append(Paragraph(kicker.upper(), S["chapter_kicker"]))
    story.append(Paragraph(title, S["chapter_title"]))


def P(story, S, text):
    story.append(Paragraph(text, S["body"]))


def H2(story, S, text):
    story.append(Paragraph(text, S["h2"]))


def H3(story, S, text):
    story.append(Paragraph(text, S["h3"]))


def UL(story, S, items, dont=False):
    style_key = "dont" if dont else "bullet"
    flow = ListFlowable(
        [ListItem(Paragraph(t, S[style_key]), bulletColor=(RED if dont else ORANGE))
         for t in items],
        bulletType="bullet", start=("✕" if dont else "•"), leftIndent=14, bulletFontSize=10,
    )
    story.append(flow)
    story.append(Spacer(1, 4))


def OL(story, S, items):
    flow = ListFlowable(
        [ListItem(Paragraph(t, S["bullet"])) for t in items],
        bulletType="1", start="1", leftIndent=18, bulletFontSize=10,
        bulletFormat="%s.",
    )
    story.append(flow)
    story.append(Spacer(1, 4))


def styled_table(data, col_widths, header_bg=NAVY, header_fg=HexColor("#faf6ea")):
    t = Table(data, colWidths=col_widths)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), header_bg),
        ("TEXTCOLOR", (0, 0), (-1, 0), header_fg),
        ("FONT", (0, 0), (-1, 0), "Helvetica-Bold", 9),
        ("FONT", (0, 1), (-1, -1), "Helvetica", 9),
        ("TEXTCOLOR", (0, 1), (-1, -1), SLATE),
        ("ALIGN", (0, 0), (-1, -1), "LEFT"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, RULE),
        ("BOX", (0, 0), (-1, -1), 0.4, NAVY),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return t


# --- Build the document ----------------------------------------------------

def build(S):
    story = []

    # =========== COVER ====================================================
    story.append(Spacer(1, 1.8 * inch))
    story.append(Paragraph("MARKETING PLAN · MAY 2026", S["cover_kicker"]))
    story.append(Paragraph("Wild Mongolia<br/>with Tugi", S["cover_title"]))
    story.append(Paragraph("How to fill 10 tours with 86 followers and zero ad budget.", S["cover_sub"]))
    story.append(Spacer(1, 0.9 * inch))
    story.append(Paragraph("Prepared for: Tugi", S["cover_byline"]))
    story.append(Paragraph("Status: Living document — edit it, kill what doesn&apos;t work.", S["cover_byline"]))
    story.append(PageBreak())

    # =========== 1. POSITION ==============================================
    H1(story, S, "Chapter one", "The position.")
    story.append(Paragraph(
        "&ldquo;Not a tour company. Just me, Tugi, taking 5&ndash;8 people across Mongolia at a price that doesn&apos;t punish you for being curious.&rdquo;",
        S["pull"],
    ))
    P(story, S, "The competitor scan (Stone Horse, Eternal Landscapes, Sunpath, Nomadic Trails) shows nobody currently owns the combination of:")
    UL(story, S, [
        "<b>Personal</b> &mdash; Tugi&apos;s face on everything.",
        "<b>Accessible price</b> &mdash; published, $350&ndash;$1,300, not hidden behind a quote form.",
        "<b>Small group</b> &mdash; 5&ndash;8, never bigger.",
        "<b>Camping-not-luxury</b> &mdash; gers and tents, not eco-resorts.",
    ])
    H2(story, S, "Lean into the underdog truth.")
    P(story, S, "86 followers, 1 of 10 tours already sold out by word of mouth, no marketing budget. <b>That IS the story.</b> Don&apos;t pretend to be bigger.")
    story.append(PageBreak())

    # =========== 2. THIS WEEK ============================================
    H1(story, S, "Chapter two", "This week — the only list that matters.")
    P(story, S, "Five actions. In order. Everything else waits.")

    OL(story, S, [
        "<b>Set up 6 Instagram Highlights</b> &mdash; Tours 2026 / What to expect / Hosts &amp; gers / On the road / Reviews / FAQ. New profile visitors see this before anything else. &nbsp;<i>2 hours.</i>",
        "<b>Submit INDY Guide listing</b> at indyguide.com/mongolia. Free, evergreen, pre-qualified traveler intent. &nbsp;<i>30 min.</i>",
        "<b>Polish &amp; host the &ldquo;Mongolia in Summer&rdquo; PDF guide</b> (already drafted at <code>public/downloads/mongolia-summer-guide.pdf</code>). Wire MailerLite free tier. Add sign-up form on home + every tour page. &nbsp;<i>1 day.</i>",
        "<b>Walk into 3 UB hostels with cards</b> &mdash; Sunpath, Danista, Khongor. 10&#37; commission on overflow referrals. In person, in Mongolian. &nbsp;<i>1 afternoon.</i>",
        "<b>Shortlist 15 micro-creators</b> (20&ndash;80k IG, Mongolia-curious, &gt;3&#37; engagement). Send one batch DM pitch. Expect 1&ndash;2 yeses. &nbsp;<i>3 hours.</i>",
    ])
    story.append(PageBreak())

    # =========== 3. WEEKLY RHYTHM ========================================
    H1(story, S, "Chapter three", "Weekly content rhythm (after week 1).")

    H2(story, S, "Cadence")
    P(story, S, "4 Reels + 1 carousel + daily Stories per week. Every Reel &rarr; TikTok 24h later (CapCut, no extra filming). Skip Threads.")

    H2(story, S, "Reel hook archetypes that win for adventure travel")
    OL(story, S, [
        "<b>POV sensory open</b> &mdash; <i>&ldquo;POV: you wake up in a ger and the only sound is a horse breathing outside your door.&rdquo;</i>",
        "<b>Pattern interrupt</b> &mdash; <i>&ldquo;Stop scrolling if you&apos;re booking Asia in 2026.&rdquo;</i>",
        "<b>Quiet flex</b> &mdash; Bali clip &rarr; cut to Khövsgöl. <i>&ldquo;While everyone&apos;s in Bali…&rdquo;</i>",
        "<b>Founder-to-camera</b> &mdash; Tugi&apos;s face, no edit, dry voice. <b>Unfair advantage; overuse it.</b>",
        "<b>Numbered list carousels</b> &mdash; <i>&ldquo;5 things I don&apos;t do on my tours.&rdquo;</i> Save magnet.",
    ])

    H2(story, S, "Monthly post-type mix")
    UL(story, S, [
        "<b>12 proof posts</b> &mdash; past-trip footage.",
        "<b>8 education</b> &mdash; packing, ger etiquette, weather, money, Naadam explained.",
        "<b>6 founder-voice</b> &mdash; Tugi to camera.",
        "<b>4 direct CTAs</b> &mdash; booking, link in bio, sold-out scarcity.",
    ])

    H2(story, S, "Hashtags — first comment, never the caption")
    story.append(Paragraph(
        "#mongolia · #visitmongolia · #mongoliatravel · #mongoliaadventure · #gobi · #khuvsgul · #nomadlife · #gertrip · #centralasia · #offthebeatenpath · #slowtravel · #smallgrouptours · #adventuretravel · #responsibletravel · #solotravel · #wildmongoliatugi",
        S["snippet"]))
    P(story, S, "<b>Avoid:</b> #travel · #explore · #wanderlust · #love. Banned-adjacent / oversaturated.")
    story.append(PageBreak())

    # =========== 4. DISTRIBUTION ==========================================
    H1(story, S, "Chapter four", "Distribution channels — 3 only.")
    P(story, S, "Two platforms done well beats six platforms half-done.")

    data = [
        ["Channel", "Cadence", "Format that works", "Don’t"],
        [
            "Reddit\n(r/Mongolia, r/solotravel,\nr/backpacking, r/onebag)",
            "3–4 substantive comments/wk\n+ 1 trip-report post/month",
            "Helpful answers signed first name; AMAs framed as story not pitch",
            "Direct booking links in posts. 90/10 rule is enforced.",
        ],
        [
            "Facebook groups\n(Backpackers in MONGOLIA,\nMongolia Travel Hub,\nSolo/Group Backpackers)",
            "5 helpful answers before posting your own. 1 self-intro per group per month.",
            "“Hi I’m Tugi, local guide running small-group trips this summer — IG link if curious.”",
            "Spamming links across groups same day.",
        ],
        [
            "Naver Cafe 몽골여행\n(Korean)",
            "1 translated trip report — find a Korean-speaking friend.",
            "Mongolia is having a moment in Korea. Outperforms English reach.",
            "(Skip if no Korean speaker handy.)",
        ],
    ]
    story.append(styled_table(data, [1.7 * inch, 1.5 * inch, 2.1 * inch, 1.7 * inch]))
    story.append(PageBreak())

    # =========== 5. FUNNEL ================================================
    H1(story, S, "Chapter five", "Funnel + tracking.")

    H2(story, S, "Bio link points at /tours, not /")
    P(story, S, "One less click for someone already interested.")

    H2(story, S, "Track only these 3 events")
    UL(story, S, [
        "<code>tour_view</code>",
        "<code>book_click</code> &mdash; apply button",
        "<code>book_submit</code> &mdash; Formspree",
    ])
    P(story, S, "Anything more is noise at this scale.")

    H2(story, S, "UTM template on every link Tugi posts manually")
    story.append(Paragraph("?utm_source=instagram&amp;utm_medium=bio&amp;utm_campaign=gobi8", S["snippet"]))
    P(story, S, "One Google Sheet, one row per post.")

    H2(story, S, "Email follow-up for /book applicants who haven&apos;t paid")
    data = [
        ["When", "Message"],
        ["T+0 (within 2 hours)",
         "Personal reply. Tour confirmed, deposit instructions, one paragraph of what happens next. Not a template."],
        ["T+48h",
         "Soft nudge: “still holding your spot, here’s a photo from last year’s group at [exact location].”"],
        ["T+5 days",
         "Honest urgency: “N spots left, M people asking — if not the right time, let me know so I can release the hold.”"],
        ["T+10 days",
         "Last call: “Releasing your spot tomorrow unless I hear back.” Don’t bluff — actually release."],
        ["T+30 days (lost)",
         "“Want me to email you when next year’s dates open?” Moves them to newsletter."],
    ]
    story.append(styled_table(data, [1.5 * inch, 5.5 * inch]))
    story.append(PageBreak())

    # =========== 6. PAID ==================================================
    H1(story, S, "Chapter six", "Paid acquisition — $300 total.")

    H2(story, S, "Honest answer")
    P(story, S, "Below $600 over 30 days, Meta&apos;s algorithm can&apos;t optimize. <b>$300 is better spent on a micro-creator collab.</b>")

    H2(story, S, "Plan A (recommended) — $300 to creators + boost")
    UL(story, S, [
        "<b>$150</b> &rarr; one Mongolia-traveled creator (20&ndash;80k IG, &gt;3&#37; engagement). Gifted seat on cheapest tour ($350) in exchange for 1 Reel + 1 in-feed + 3 Stories + repost rights.",
        "<b>$150</b> &rarr; boost whichever organic Reel hits &gt;5&#37; engagement in week 2 or 3.",
    ])

    H2(story, S, "Plan B (only if A fails) — pure paid Meta")
    UL(story, S, [
        "Platform: Meta, <b>Instagram Reels placement only.</b>",
        "Objective: <b>Profile Visits</b> (not link clicks). At 86 followers, the bottleneck is social proof, not website traffic.",
        "Targeting: <i>adventure travel + Intrepid + Atlas Obscura + Much Better Adventures + Lonely Planet,</i> ages 28&ndash;45, English-speaking countries (US, UK, AU, DE, NL).",
        "German + Dutch over-index on Mongolia.",
        "Creative: 3 organic Reels that already outperformed, $25 boost each = $75. Other $225 = two campaigns at $8/day &times; 14 days.",
    ])
    story.append(PageBreak())

    # =========== 7. PARTNERSHIPS ==========================================
    H1(story, S, "Chapter seven", "Top 5 partnerships to chase.")
    OL(story, S, [
        "<b>One micro-creator (20–80k IG)</b>. Pitch (avoid the word &ldquo;collaboration&rdquo;):"
    ])
    story.append(Paragraph(
        "&ldquo;I&apos;m a Mongolian guide running 10 small-group trips this summer. I have one spot reserved for a creator I&apos;d actually want on the trip — interested?&rdquo;",
        S["snippet"]))
    OL(story, S, [
        "<b>INDY Guide listing</b> &mdash; free distribution, pre-qualified intent. indyguide.com/mongolia",
        "<b>2&ndash;3 UB hostels</b> &mdash; Sunpath / Danista / Khongor. 10&#37; referral commission on overflow bookings. In-person ask in Mongolian beats email 10&times;.",
        "<b>Korean travel community</b> &mdash; Naver Cafe 몽골여행 groups. One Korean-translated trip report significantly outperforms English-only reach.",
        "<b>University outdoor clubs</b> &mdash; ANU, TU Munich, Utrecht. Email club presidents offering 10&#37; group discount for 4+ bookings. One yes = a half-full tour.",
    ])
    story.append(PageBreak())

    # =========== 8. WHAT NOT TO DO ========================================
    H1(story, S, "Chapter eight", "What NOT to do.")
    UL(story, S, [
        "Drone-only montages with text overlays &mdash; algorithm reads as stock.",
        "Hashtags in the caption &mdash; first comment only.",
        "Booking links in Reddit/FB groups before contributing helpful comments.",
        "Hide pricing behind a quote form &mdash; visible price is a differentiator.",
        "Threads / Pinterest / Google Ads as priorities until 1k IG followers.",
        "Pretend to be a bigger operator than you are &mdash; the underdog truth IS the marketing.",
        "Buy followers. Ever.",
    ], dont=True)
    story.append(PageBreak())

    # =========== 9. KPIs ==================================================
    H1(story, S, "Chapter nine", "KPIs — one spreadsheet, updated weekly.")
    data = [
        ["Metric", "Now", "Week 6", "Week 12"],
        ["Instagram followers", "86", "350", "800"],
        ["Avg Reel reach", "~500", "5,000", "12,000"],
        ["Email list", "0", "100", "300"],
        ["/book submissions", "0–1", "15–20", "40"],
        ["Tours filled", "1 / 10", "4–5 / 10", "7–8 / 10"],
    ]
    story.append(styled_table(data, [2.2 * inch, 1.0 * inch, 1.2 * inch, 1.2 * inch]))
    story.append(Spacer(1, 14))
    P(story, S, "<i>If a metric isn&apos;t moving after 4 weeks of consistent effort, change the input. Not the metric.</i>")
    story.append(PageBreak())

    # =========== 10. SNIPPETS ============================================
    H1(story, S, "Chapter ten", "Quick-reference snippets.")

    H3(story, S, "Reddit reply template")
    story.append(Paragraph(
        "“Local Mongolian guide here. Quick answer: [genuine helpful answer in 2&ndash;3 sentences]. If you want the longer version DM me, otherwise this is what I&apos;d do. — Tugi”",
        S["snippet"]))

    H3(story, S, "Facebook group self-intro (one per group, max)")
    story.append(Paragraph(
        "“Hi everyone &mdash; I&apos;m Tugi, born and raised here, running small-group trips this summer after years of guiding informally. Posting in case any of you are planning Mongolia in June&ndash;August. Happy to answer Mongolia questions in the comments either way. Insta: @mongoladventure.”",
        S["snippet"]))

    H3(story, S, "&ldquo;Sold out scarcity&rdquo; line for IG captions")
    story.append(Paragraph("&ldquo;1 of 10 tours already sold out for 2026. Link in bio for the rest.&rdquo;", S["snippet"]))

    H3(story, S, "Micro-creator cold DM")
    story.append(Paragraph(
        "“I&apos;m a Mongolian guide running 10 small-group trips this summer. I have one spot reserved on the cheapest tour ($350) for a creator I&apos;d actually want on the trip &mdash; interested?”",
        S["snippet"]))
    story.append(PageBreak())

    # =========== 11. WHY THIS WORKS ======================================
    H1(story, S, "Last chapter", "Why this works.")
    UL(story, S, [
        "<b>Tugi himself is the product.</b> Everything that surfaces his face, voice, and decisions converts better than landscape footage.",
        "<b>Scarcity is real, not manufactured.</b> 1/10 already sold out, max 8 per group. Mention it without making it the whole message.",
        "<b>Solo means narrow.</b> Two platforms, one lead magnet, one partnership type &mdash; done well &mdash; beats six things half-done.",
        "<b>The website does the work the IG can&apos;t.</b> Each Reel only needs to drive interest; the website carries the conversion.",
        "<b>6 months is enough.</b> International adventure decisions are made 3&ndash;6 months out. Tugi is right in the planning window.",
    ])
    story.append(Spacer(1, 18))
    P(story, S, "<i>This is a living document. Open it, edit it, commit it. Kill what doesn&apos;t work. The plan you start with is never the plan you finish with &mdash; but starting with a plan is how you find out.</i>")

    return story


def main():
    doc = SimpleDocTemplate(
        str(OUT), pagesize=letter,
        leftMargin=0.85 * inch, rightMargin=0.85 * inch,
        topMargin=0.85 * inch, bottomMargin=0.75 * inch,
        title="Wild Mongolia with Tugi — Marketing Plan",
        author="Tugi", subject="2026 marketing plan",
        creator="Wild Mongolia with Tugi",
    )
    S = styles()
    story = build(S)
    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    print(f"OK: {OUT}  ({OUT.stat().st_size/1024:.1f} KB)")


if __name__ == "__main__":
    main()
