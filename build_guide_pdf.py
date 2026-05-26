"""
Builds the lead-magnet PDF for Wild Mongolia with Tugi:
"Mongolia in Summer — an honest guide" by Tugi.

Output: tugo-website/public/downloads/mongolia-summer-guide.pdf
"""

from pathlib import Path
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, KeepTogether, ListFlowable, ListItem,
)

# --- Brand colors ----------------------------------------------------------
NAVY = HexColor("#1a2b3a")
SLATE = HexColor("#2d4259")
SOFT_SLATE = HexColor("#5b6976")
CREAM = HexColor("#faf6ea")
CARD = HexColor("#f0ead9")
FOREST = HexColor("#15722f")
ORANGE = HexColor("#c25a1e")
RULE = HexColor("#d8cfb7")

# --- Page setup ------------------------------------------------------------
OUT_PATH = Path(__file__).parent / "tugo-website" / "public" / "downloads" / "mongolia-summer-guide.pdf"
OUT_PATH.parent.mkdir(parents=True, exist_ok=True)


def on_page(canvas, doc):
    """Footer on every page after the cover."""
    canvas.saveState()
    if doc.page > 1:
        # Footer rule
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.4)
        canvas.line(0.75 * inch, 0.55 * inch, 7.75 * inch, 0.55 * inch)
        # Footer text
        canvas.setFillColor(SOFT_SLATE)
        canvas.setFont("Helvetica", 8)
        canvas.drawString(0.75 * inch, 0.4 * inch, "Wild Mongolia with Tugi  ·  wildmongoliatugi.com")
        canvas.drawRightString(7.75 * inch, 0.4 * inch, f"{doc.page}")
    canvas.restoreState()


def make_styles():
    s = {}
    s["cover_kicker"] = ParagraphStyle(
        name="cover_kicker", fontName="Helvetica", fontSize=11,
        leading=14, alignment=TA_CENTER, textColor=ORANGE,
        spaceBefore=0, spaceAfter=8,
    )
    s["cover_title"] = ParagraphStyle(
        name="cover_title", fontName="Times-Bold", fontSize=44,
        leading=50, alignment=TA_CENTER, textColor=NAVY,
        spaceBefore=0, spaceAfter=20,
    )
    s["cover_sub"] = ParagraphStyle(
        name="cover_sub", fontName="Times-Italic", fontSize=18,
        leading=24, alignment=TA_CENTER, textColor=SLATE,
        spaceBefore=0, spaceAfter=24,
    )
    s["cover_byline"] = ParagraphStyle(
        name="cover_byline", fontName="Helvetica", fontSize=10,
        leading=14, alignment=TA_CENTER, textColor=SOFT_SLATE,
        spaceBefore=0, spaceAfter=4,
    )
    s["chapter_kicker"] = ParagraphStyle(
        name="chapter_kicker", fontName="Helvetica-Bold", fontSize=9,
        leading=12, alignment=TA_LEFT, textColor=ORANGE,
        spaceBefore=12, spaceAfter=6, leftIndent=0,
    )
    s["chapter_title"] = ParagraphStyle(
        name="chapter_title", fontName="Times-Bold", fontSize=26,
        leading=30, alignment=TA_LEFT, textColor=NAVY,
        spaceBefore=0, spaceAfter=14, leftIndent=0,
    )
    s["h2"] = ParagraphStyle(
        name="h2", fontName="Times-Bold", fontSize=14,
        leading=18, alignment=TA_LEFT, textColor=NAVY,
        spaceBefore=14, spaceAfter=4, leftIndent=0,
    )
    s["h3"] = ParagraphStyle(
        name="h3", fontName="Helvetica-Bold", fontSize=10,
        leading=14, alignment=TA_LEFT, textColor=FOREST,
        spaceBefore=10, spaceAfter=2, leftIndent=0,
    )
    s["body"] = ParagraphStyle(
        name="body", fontName="Helvetica", fontSize=10.5,
        leading=15.5, alignment=TA_LEFT, textColor=SLATE,
        spaceBefore=0, spaceAfter=8, leftIndent=0,
    )
    s["body_italic"] = ParagraphStyle(
        name="body_italic", fontName="Helvetica-Oblique", fontSize=10.5,
        leading=15.5, alignment=TA_LEFT, textColor=SOFT_SLATE,
        spaceBefore=0, spaceAfter=8, leftIndent=0,
    )
    s["bullet"] = ParagraphStyle(
        name="bullet", fontName="Helvetica", fontSize=10.5,
        leading=15, alignment=TA_LEFT, textColor=SLATE,
        spaceBefore=0, spaceAfter=2, leftIndent=14,
        bulletIndent=2,
    )
    s["pullquote"] = ParagraphStyle(
        name="pullquote", fontName="Times-Italic", fontSize=15,
        leading=22, alignment=TA_LEFT, textColor=NAVY,
        spaceBefore=10, spaceAfter=14, leftIndent=18, rightIndent=18,
        borderColor=ORANGE, borderWidth=0, borderPadding=0,
    )
    s["signoff"] = ParagraphStyle(
        name="signoff", fontName="Times-Italic", fontSize=13,
        leading=18, alignment=TA_LEFT, textColor=NAVY,
        spaceBefore=8, spaceAfter=4,
    )
    return s


def chapter(story, S, kicker, title):
    story.append(Spacer(1, 8))
    story.append(Paragraph(kicker.upper(), S["chapter_kicker"]))
    story.append(Paragraph(title, S["chapter_title"]))


def body(story, S, text):
    story.append(Paragraph(text, S["body"]))


def h2(story, S, text):
    story.append(Paragraph(text, S["h2"]))


def h3(story, S, text):
    story.append(Paragraph(text, S["h3"]))


def bullets(story, S, items):
    flow = ListFlowable(
        [ListItem(Paragraph(t, S["bullet"]), bulletColor=ORANGE) for t in items],
        bulletType="bullet", start="•", leftIndent=14, bulletFontSize=10,
    )
    story.append(flow)
    story.append(Spacer(1, 4))


# --- Content ---------------------------------------------------------------

def build_story(S):
    story = []

    # =========== COVER =====================================================
    story.append(Spacer(1, 1.7 * inch))
    story.append(Paragraph("A 2026 GUIDE BY YOUR LOCAL HOST", S["cover_kicker"]))
    story.append(Paragraph("Mongolia in Summer", S["cover_title"]))
    story.append(Paragraph("an honest guide — what's actually worth it, what brochures lie about, and what nobody tells you.", S["cover_sub"]))
    story.append(Spacer(1, 1.0 * inch))
    story.append(Paragraph("By Tugi", S["cover_byline"]))
    story.append(Paragraph("Wild Mongolia with Tugi  ·  wildmongoliatugi.com", S["cover_byline"]))
    story.append(PageBreak())

    # =========== 01. WHY THIS EXISTS ======================================
    chapter(story, S, "Chapter one", "Why I wrote this.")
    body(story, S, "Most Mongolia guides are made by people who came once and left. This one is mine. I grew up here, I host small-group trips here every summer, and I get the same fifty questions from everyone who comes. Instead of typing them out in WhatsApp at 2 a.m., here they are.")
    body(story, S, "This is the country I love, written honestly. Some things in the brochures aren&apos;t worth it. Some things nobody tells you about are everything. I&apos;ll be specific.")
    body(story, S, "If, after reading this, you want me to take you around — that&apos;s at the back. If you just take the guide and go on your own, even better. The country wins either way.")
    story.append(Paragraph("&mdash; Tugi", S["body_italic"]))
    story.append(PageBreak())

    # =========== 02. WHY SUMMER ===========================================
    chapter(story, S, "Chapter two", "Why summer is the only window.")
    body(story, S, "You&apos;ll see &ldquo;all-season Mongolia&rdquo; tours. Don&apos;t believe them. From November to April this country can hit -40&deg;C and the countryside shuts down. Summer is when:")
    bullets(story, S, [
        "The steppe is green.",
        "Rivers are crossable.",
        "Families are out at their summer camps, not winter pastures.",
        "Naadam happens (mid-July).",
        "Wildflowers are real.",
    ])
    h3(story, S, "Pick your month")
    body(story, S, "<b>June</b> is gentlest. Cool nights, fewer travellers, water still high. Best for the south. <br/><b>July</b> is the festival peak — Naadam (11&ndash;13) and Playtime around the same week. Energy is the highest. <br/><b>August</b> has the deepest skies and the warmest lake water. Best for the north and the long expeditions.")
    body(story, S, "Pick by what you want to do, not by who&apos;s cheaper.")
    story.append(PageBreak())

    # =========== 03. THE REGIONS ==========================================
    chapter(story, S, "Chapter three", "The five regions, explained.")
    body(story, S, "Mongolia isn&apos;t one place. The brochure photos blur four very different countries into one. Here&apos;s the actual breakdown.")

    h2(story, S, "North &mdash; Khövsgöl + the Khentii taiga")
    body(story, S, "Siberian-edge country. Larch forest, the deepest freshwater lake on the continent, reindeer-herder families if you go far enough. Cooler temperatures, water everywhere. <b>Best for:</b> people who think &ldquo;travel&rdquo; means quiet.")

    h2(story, S, "Central &mdash; Orkhon, Karakorum, hot springs")
    body(story, S, "The Mongol-empire heartland. Rolling green steppe, working monasteries, hot springs, family ger camps. Easiest to combine with anything else. <b>Best for:</b> first-timers who want the postcard.")

    h2(story, S, "South &mdash; the Gobi")
    body(story, S, "Desert. Singing dunes, ice canyons, dinosaur fossils, camels. Hot and dry by day, cold at night. Long drive days. <b>Best for:</b> people who like extremes.")

    h2(story, S, "West &mdash; Altai Tavan Bogd")
    body(story, S, "The most distinct part of the country. Kazakh, not Mongolian, in feel. Eagle hunters, glacier peaks, Bronze Age petroglyphs. Furthest to get to (you&apos;ll fly). <b>Best for:</b> serious mountain people.")

    h2(story, S, "East &mdash; Khan Khentii + Dornod steppe")
    body(story, S, "Less travelled. Big skies, fewer tourists, harder logistics. <b>Best for:</b> a second trip, not a first.")
    story.append(PageBreak())

    # =========== 04. WORTH IT vs SKIP =====================================
    chapter(story, S, "Chapter four", "What's worth it. What isn't.")
    body(story, S, "Cards on the table.")

    h3(story, S, "WORTH IT")
    bullets(story, S, [
        "Sleeping in a real family ger, not a tourist ger camp.",
        "One full day in any canyon (Yoliin Am, Orkhon).",
        "Khorkhog at least once &mdash; lamb cooked on hot stones in a sealed pot.",
        "Camel ride at Khongoriin Els at golden hour. Not midday.",
        "Watching the kids race horses at any local Naadam.",
        "The drive itself. Yes, the drive.",
        "A long soak at Tsenkher hot springs after four nights of camping.",
        "Stargazing once you&apos;re past Dalanzadgad. There is no light to compete.",
    ])

    h3(story, S, "OVERRATED / SKIP")
    bullets(story, S, [
        "Sumo-wrestler-themed restaurants in UB. Gimmick.",
        "&ldquo;Genghis Khan brand&rdquo; anything. Souvenir tax.",
        "Half-day Terelj tours from UB. You&apos;ll feel cheated.",
        "Mass-tour Naadam in UB&apos;s main stadium. Find a village one instead.",
        "&ldquo;Eco-luxury&rdquo; ger camps with WiFi. You came here to disconnect, did you not?",
        "More than one full day in UB. The country is the country, not the city.",
    ])
    story.append(PageBreak())

    # =========== 05. THE FESTIVALS ========================================
    chapter(story, S, "Chapter five", "The two festivals.")

    h2(story, S, "Naadam &mdash; July 11–13")
    body(story, S, "Three sports: horse racing, Mongolian wrestling, archery. The big-stadium version in Ulaanbaatar is for tourists. <b>Go to a village Naadam</b> — sub-province (<i>sum</i>) level. Small enough that you&apos;ll know which kid won the 25 km long-distance horse race. Holiday food everywhere. Costumes are real, not for the cameras.")
    body(story, S, "If you want to combine Naadam with the rest of the country, plan around the date. Travel within Mongolia gets harder in that week — book ahead.")

    h2(story, S, "Playtime &mdash; early July")
    body(story, S, "Mongolia&apos;s main music festival. Held at Playtime Field in Nalaikh, 40 minutes east of UB. International lineup mixed with Mongolian acts. Three days of camping. 20s and 30s crowd, very international &mdash; Seoul, Berlin, Melbourne all show up. Cheap relative to European festivals. Good vibes.")
    body(story, S, "If you&apos;re festival-curious but not destination-curious, this is also the one weekend Mongolia is suddenly easy.")
    story.append(PageBreak())

    # =========== 06. GER ETIQUETTE ========================================
    chapter(story, S, "Chapter six", "Ger etiquette — the ten actual rules.")
    body(story, S, "Most guides skim this. Don&apos;t. You&apos;ll be sleeping in someone&apos;s home.")
    bullets(story, S, [
        "Enter on the left side (men) or right side (women, kids).",
        "Never step <i>on</i> the threshold. Stride over it.",
        "Don&apos;t whistle inside a ger.",
        "Don&apos;t point at people, the altar, or the ovoo (shrine) with your finger &mdash; use your whole hand, palm up.",
        "Don&apos;t refuse offered milk tea (<i>süütei tsai</i>). At least take one sip.",
        "Accept and pass things with the right hand. Both hands is even better.",
        "Don&apos;t lean on the support poles. They&apos;re holding the house up.",
        "Don&apos;t photograph the family altar without asking.",
        "Take your shoes off only if asked. Most families don&apos;t.",
        "If they offer airag (fermented mare&apos;s milk), have a small sip. Smile even if it&apos;s not your thing. It&apos;ll come back later as a story you can tell.",
    ])
    story.append(PageBreak())

    # =========== 07. PACKING ==============================================
    chapter(story, S, "Chapter seven", "Real summer packing list.")
    body(story, S, "Layers. Mornings can be 5&deg;C, afternoons 28&deg;C — both in the same day.")

    h3(story, S, "CORE — don&apos;t leave home without")
    bullets(story, S, [
        "Hiking boots, broken in. Not new.",
        "Sleeping bag rated to 0&deg;C, or rent one in UB.",
        "Down jacket. Even in July.",
        "Rain shell.",
        "Sun hat AND warm hat.",
        "High-UV sunscreen. The sun is fierce at altitude.",
        "Bug spray (mostly for June).",
        "Headlamp.",
        "Power bank, large &mdash; 20,000 mAh+.",
        "Water filter (Lifestraw or Sawyer) or purification tablets.",
    ])

    h3(story, S, "NICE TO HAVE")
    bullets(story, S, [
        "Quick-dry towel.",
        "Sandals or river shoes &mdash; you&apos;ll cross water.",
        "A book. You&apos;ll have hours.",
        "Whatever camera you actually use, not the one you bought.",
        "One nice top for a final UB dinner.",
    ])

    h3(story, S, "DON&apos;T BOTHER")
    bullets(story, S, [
        "A drone. Regulated. You probably can&apos;t fly where you want.",
        "Heels, jewellery, blow-dryer.",
        "More than two pairs of jeans.",
        "Heavy DSLR if you already have a phone you&apos;re comfortable with.",
    ])
    story.append(PageBreak())

    # =========== 08. MONEY ================================================
    chapter(story, S, "Chapter eight", "Money. Cards. Tipping.")
    bullets(story, S, [
        "<b>Cash</b>: ATMs in UB and every aimag (province) capital. Outside cities, cash only.",
        "<b>Currency</b>: USD widely accepted in UB tourist places, MNT (tögrög) everywhere else. Take more cash than you think you need.",
        "<b>Card outages</b> happen. Carry a backup.",
        "<b>Tipping</b>: not a traditional Mongolian thing, but expected for tour drivers and guides. $5–10/day per person is generous.",
        "Carry small bills. Change is sometimes a problem.",
    ])

    h2(story, S, "Realistic daily budget (outside cities)")
    bullets(story, S, [
        "Solo backpacker, hostel-tier: $30–50/day.",
        "Small-group tour: $90–150/day all-in (food, lodging, transport, guide).",
        "Self-drive: $80–120/day before fuel surprises.",
    ])
    story.append(PageBreak())

    # =========== 09. HEALTH ===============================================
    chapter(story, S, "Chapter nine", "Health, altitude, water.")
    bullets(story, S, [
        "<b>Altitude</b>: rarely an issue. Highest you&apos;ll likely be is ~3,000m at the Altai glacier viewpoint.",
        "<b>Water</b>: drink only filtered or bottled water. Boiled in a kettle counts.",
        "<b>Insurance</b>: get travel insurance with evacuation cover. Mongolian distances are real and hospitals are sparse outside UB.",
        "<b>Food</b>: mostly meat-and-flour. Vegetarians can survive but need to tell your guide a week ahead.",
        "<b>Most common complaint</b>: diarrhea. Pack loperamide and ORS sachets. Gloves up.",
    ])

    h2(story, S, "What to leave at the chemist")
    bullets(story, S, [
        "Loperamide / Imodium (diarrhea).",
        "Oral rehydration salts (ORS).",
        "Paracetamol.",
        "Antihistamine (you&apos;ll see horses).",
        "Sunscreen SPF 50.",
        "Basic plasters + antiseptic wipes.",
    ])
    story.append(PageBreak())

    # =========== 10. CONNECTIVITY =========================================
    chapter(story, S, "Chapter ten", "Connectivity (or lack thereof).")
    bullets(story, S, [
        "<b>4G works</b> in cities and along the main highways.",
        "<b>It does NOT work</b> past about 80&#37; of where you&apos;ll actually go.",
        "Get a local SIM (Unitel or Mobicom) at the airport. ~$15 for 30 days, ~10 GB.",
        "Tell people at home you&apos;ll be off-grid for a few stretches. They&apos;ll understand. Or they won&apos;t — that&apos;s on them.",
    ])
    story.append(Paragraph("&ldquo;You won&apos;t miss the wifi. You&apos;ll miss the people who were ok with you having no wifi.&rdquo;", S["pullquote"]))
    story.append(PageBreak())

    # =========== 11. SAFETY ===============================================
    chapter(story, S, "Chapter eleven", "Safety — the honest version.")
    bullets(story, S, [
        "Crime rate is low. Most travel issues are logistics, not danger.",
        "Realistic risk: petty theft in UB at night. Pickpockets near the State Department Store and Sukhbaatar Square.",
        "Avoid empty UB streets after 1 a.m. alone, especially with phone out.",
        "The country is safe. The wolf encounter you&apos;re imagining is not happening.",
        "If self-driving: animals on the road, big distances between fuel stops, sudden rain that turns dirt roads to mud. Drive slow.",
        "Always carry a paper map. Phones lose signal and battery; paper doesn&apos;t.",
    ])
    story.append(PageBreak())

    # =========== 12. BEST MONTH ===========================================
    chapter(story, S, "Chapter twelve", "Best month for each region.")
    body(story, S, "If you only have a week and want to optimize, here&apos;s the cheat sheet.")

    data = [
        ["Region", "Sweet spot", "Why"],
        ["North (Khövsgöl)", "late July – mid August", "lake water warm enough to swim; mosquitos gone"],
        ["Central", "any summer month", "the country&apos;s most forgiving region"],
        ["South (Gobi)", "early June or late August", "mid-July is brutal heat"],
        ["West (Altai)", "July – mid August", "snow holds at altitude until early July"],
        ["East (Khentii)", "July only really", "short, wet, beautiful window"],
    ]
    t = Table(data, colWidths=[1.7 * inch, 1.7 * inch, 3.6 * inch])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), CREAM),
        ("FONT", (0, 0), (-1, 0), "Helvetica-Bold", 9.5),
        ("FONT", (0, 1), (-1, -1), "Helvetica", 9.5),
        ("TEXTCOLOR", (0, 1), (-1, -1), SLATE),
        ("ALIGN", (0, 0), (-1, -1), "LEFT"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, RULE),
        ("BOX", (0, 0), (-1, -1), 0.4, NAVY),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(t)
    story.append(Spacer(1, 16))
    body(story, S, "<i>None of these are wrong months — these are the ideal ones.</i>")
    story.append(PageBreak())

    # =========== 13. GETTING HERE =========================================
    chapter(story, S, "Chapter thirteen", "How to actually get here.")

    h3(story, S, "FLIGHTS")
    body(story, S, "Fly UB (Chinggis Khaan International). Main airlines: <b>MIAT Mongolian</b>, <b>Aero Mongolia</b>, <b>Korean Air</b>, <b>Turkish</b>, <b>Air China</b>. Common 1-stop routings: Beijing, Seoul, Istanbul, Hong Kong, Tokyo, Moscow. From Europe, Istanbul is usually the cheapest hop. From the US, Seoul or Beijing.")

    h3(story, S, "VISA")
    body(story, S, "30-day visa-free for many passports (US, UK, most EU, AU, NZ, Korea, Japan). Double-check on your country&apos;s foreign-affairs website. Bring a passport with 6+ months of validity and at least two blank pages.")

    h3(story, S, "THE TRAIN")
    body(story, S, "The Trans-Mongolian (Moscow–UB–Beijing) is great if you have four days and like trains. It is the long way in. Most people fly. Worth doing once in your life, not the right move for a summer trip.")
    story.append(PageBreak())

    # =========== 14. ABOUT TUGI ===========================================
    chapter(story, S, "Last chapter", "About me. About the trips.")
    body(story, S, "Hi. I&apos;m Tugi. I grew up traveling Mongolia&apos;s countryside with my grandparents. Now I run small-group trips here every summer — 5 to 8 people, June through August, ten departures total. Routes I already know. Families I trust. Prices I&apos;m not ashamed of.")
    body(story, S, "It&apos;s not a tour company. It&apos;s me, showing you around.")

    story.append(Paragraph("&ldquo;I don&apos;t run this like a business. I run it like hosting cousins from out of town.&rdquo;", S["pullquote"]))

    h3(story, S, "If you want a trip")
    body(story, S, "Go to <b>wildmongoliatugi.com</b>. Pick a date. Send the form. I&apos;ll reply within 48 hours.")

    h3(story, S, "If you don&apos;t want a trip but want to ask me something")
    body(story, S, "Email <b>tuklobin@gmail.com</b> or DM <b>@mongoladventure</b> on Instagram. Free. I read everything.")

    h3(story, S, "Either way")
    body(story, S, "Come in summer. Don&apos;t believe the brochures.")
    story.append(Spacer(1, 16))
    story.append(Paragraph("&mdash; Tugi", S["signoff"]))
    story.append(Paragraph("Ulaanbaatar &middot; written between trips, May 2026", S["body_italic"]))
    story.append(PageBreak())

    # =========== 15. APPENDIX / CONTACT ===================================
    chapter(story, S, "Appendix", "Quick contact card.")
    h2(story, S, "Wild Mongolia with Tugi")
    body(story, S, "<b>Website:</b> wildmongoliatugi.com")
    body(story, S, "<b>Email:</b> tuklobin@gmail.com")
    body(story, S, "<b>Instagram:</b> @mongoladventure")
    body(story, S, "<b>2026 tours:</b> 10 departures, June – August, 5–8 people per trip, $350–$1,300 per person.")

    h2(story, S, "Permission to share this guide")
    body(story, S, "Forward it. Send it to a friend who keeps saying they want to come to Mongolia. Don&apos;t resell it. That&apos;s all.")

    return story


def main():
    doc = SimpleDocTemplate(
        str(OUT_PATH),
        pagesize=letter,
        leftMargin=0.85 * inch,
        rightMargin=0.85 * inch,
        topMargin=0.85 * inch,
        bottomMargin=0.75 * inch,
        title="Mongolia in Summer — an honest guide",
        author="Tugi · Wild Mongolia with Tugi",
        subject="A 2026 honest guide to summer in Mongolia",
        creator="Wild Mongolia with Tugi",
    )
    S = make_styles()
    story = build_story(S)
    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    size = OUT_PATH.stat().st_size
    print(f"OK: {OUT_PATH}  ({size/1024:.1f} KB, ~{doc.page} pages)")


if __name__ == "__main__":
    main()
