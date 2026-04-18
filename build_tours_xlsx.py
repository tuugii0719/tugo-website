"""Compact planning workbook: 5 columns, 10 tours.
You only really need to fill one column (Price). Everything else is
optional — edit anything in yellow if I got it wrong.
"""
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

OUT = "/Users/2go/Documents/Claude/Projects/tugo web/tugo-tours-2026.xlsx"

HEADER_BG = "0D0F12"
HEADER_FG = "F2EDE6"
FILL_PREFILLED = "FFFDF6"
FILL_TODO = "FFF3B0"
BORDER = Side(style="thin", color="D4C5B0")
THIN_BORDER = Border(left=BORDER, right=BORDER, top=BORDER, bottom=BORDER)
FONT = "Calibri"


def style_header(cell):
    cell.font = Font(name=FONT, bold=True, color=HEADER_FG, size=11)
    cell.fill = PatternFill("solid", start_color=HEADER_BG)
    cell.alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)
    cell.border = THIN_BORDER


def style_body(cell, todo=False):
    cell.font = Font(name=FONT, size=11, color="1A1D23")
    cell.fill = PatternFill("solid", start_color=(FILL_TODO if todo else FILL_PREFILLED))
    cell.alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)
    cell.border = THIN_BORDER


# Current 10 tours
tours = [
    {
        "title": "🌲 Terelj Escape",
        "dates": "Jun 8 – 10  ·  3 days",
        "summary": "Any age. Gorkhi-Terelj weekend — Turtle Rock, horseback, family ger camp.",
    },
    {
        "title": "🌲 Terelj Escape",
        "dates": "Jun 12 – 14  ·  3 days",
        "summary": "Second weekend departure. Same gentle Terelj loop.",
    },
    {
        "title": "🏜️ Southern Gobi + Central",
        "dates": "Jun 16 – 23  ·  8 days",
        "summary": "Young travellers, high pace. Yoliin Am, desert camp, camels at Khongoriin Els, back through central Mongolia.",
    },
    {
        "title": "🐎 Horse Trek · Khagiin Khar Nuur",
        "dates": "Jun 25 – 29  ·  5 days",
        "summary": "Horseback into the Khan Khentii taiga to the hidden alpine lake. 2 days in, lake camp, 2 days out.",
    },
    {
        "title": "🦅 Playtime",
        "dates": "Jul 1 – 6  ·  6 days",
        "summary": "Young-people meet-up around Mongolia's biggest music festival. Pre-party day, festival, 1 day city recovery.",
    },
    {
        "title": "🏇 Naadam Festival (local)",
        "dates": "Jul 7 – 14  ·  8 days",
        "summary": "Chill central Mongolia Naadam — Ara festival, Terkh Lake, Khorgo, Tsenkher hot springs, local family stays.",
    },
    {
        "title": "🌲 Terelj Escape",
        "dates": "Jul 16 – 18  ·  3 days",
        "summary": "Third Terelj weekend, right after Naadam. Same gentle route.",
    },
    {
        "title": "🐪 North & Central Loop",
        "dates": "Jul 21 – 31  ·  11 days",
        "summary": "Up to Khuvsgul and back — Bulgan ger camp, lake camping, taiga, Zavkhan, central on the way home.",
    },
    {
        "title": "🏔️ Altai Tavan Bogd",
        "dates": "Aug 6 – 13  ·  8 days",
        "summary": "Premium west. Flight to Ölgii, Tavan Bogd peaks, Potanin Glacier, Kazakh eagle hunters.",
    },
    {
        "title": "🏜️ Gobi Glimpse + Central",
        "dates": "Aug 18 – 28  ·  11 days",
        "summary": "Extended southern Gobi loop — Yoliin Am, desert camp, camels, then central on the return.",
    },
]

# 5 columns, only 2 are yellow (to fill)
columns = [
    ("Tour", "title", 30, False),
    ("Dates", "dates", 22, False),
    ("What I'm going with", "summary", 60, False),
    ("Price per person (USD)", "price", 18, True),
    ("Anything to change?", "notes", 35, True),
]

wb = Workbook()
ws = wb.active
ws.title = "2026 Tours"
ws.sheet_view.showGridLines = False

# Title
ws["A1"] = "TUGO Mongolia · 2026 tour calendar"
ws["A1"].font = Font(name=FONT, bold=True, size=16, color="0D0F12")
ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=len(columns))
ws.row_dimensions[1].height = 26

ws["A2"] = "The only cell you HAVE to fill is Price. Everything yellow is optional."
ws["A2"].font = Font(name=FONT, italic=True, size=10, color="574639")
ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=len(columns))
ws.row_dimensions[2].height = 18

# Headers row 4
for col_idx, (header, _, width, _) in enumerate(columns, start=1):
    c = ws.cell(row=4, column=col_idx, value=header)
    style_header(c)
    ws.column_dimensions[get_column_letter(col_idx)].width = width
ws.row_dimensions[4].height = 26

# Tour rows
for row_offset, tour in enumerate(tours):
    row = 5 + row_offset
    for col_idx, (_, key, _, todo) in enumerate(columns, start=1):
        val = tour.get(key)
        c = ws.cell(row=row, column=col_idx, value=val)
        style_body(c, todo=todo)
        if key == "price":
            c.number_format = "$#,##0"
    ws.row_dimensions[row].height = 44

# Season price total (only if user fills them)
total_row = 5 + len(tours)
label = ws.cell(row=total_row, column=3, value="Season total")
label.font = Font(name=FONT, bold=True, size=11)
label.fill = PatternFill("solid", start_color="E8DDF3")
label.alignment = Alignment(horizontal="right", vertical="center")
label.border = THIN_BORDER
total = ws.cell(row=total_row, column=4, value=f"=SUM(D5:D{total_row - 1})")
total.font = Font(name=FONT, bold=True, size=11)
total.number_format = "$#,##0"
total.fill = PatternFill("solid", start_color="E8DDF3")
total.border = THIN_BORDER

ws.freeze_panes = "A5"

wb.save(OUT)
print(f"Saved: {OUT}")
