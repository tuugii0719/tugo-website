"""
Process the user's new /pictures/ folder:
  - Skip RAW files (.ARW)
  - Skip filename-duplicates of existing gallery photos
  - Drop one near-dupe (Grand Canyon arms-wide is the keeper)
  - Rename "Copy of DSC08281" → DSC08281
  - Rename the personal phone photos to meaningful slugs
  - EXIF-rotate, resize (max 2400px long edge, JPEG q=82, strip EXIF)
  - Drop into public/images/tugi/ + public/images/gallery/
"""

from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).parent
SRC  = Path("C:/Users/manla/Desktop/tugo web/pictures")
GALLERY_DIR = ROOT / "tugo-website" / "public" / "images" / "gallery"
TUGI_DIR    = ROOT / "tugo-website" / "public" / "images" / "tugi"
TUGI_DIR.mkdir(parents=True, exist_ok=True)

# Already in the gallery — skip
EXISTING_GALLERY_DSCS = {
    "DSC01810", "DSC01820", "DSC01846", "DSC01861",
    "DSC02365", "DSC02431",
    "DSC08220", "DSC08244", "DSC08283", "DSC08315",
}

# Personal phone photos — meaningful renames
PERSONAL_RENAMES = {
    "IMG_0019.JPG":                "tugi-marathon",
    "unnamed.jpg":                 "tugi-zion-canyon",
    "PXL_20211225_225337492.jpg":  "tugi-meditation",
    "PXL_20220212_224159628.jpg":  "tugi-backpack-self",
    "20191116_131943.jpg":         "tugi-with-kids",
    "20200103_121523.jpg":         "tugi-sf-bridge",
    "20200606_125652.jpg":         "tugi-grand-canyon",   # arms wide — keeper
    # 20200606_125657.jpg dropped — same trip, flex pose, redundant
    "20190713_130255.jpg":         "tugi-on-horse",       # the about-page hero candidate
    "PXL_20220714_080654528.jpg":  "naadam-wide-field",
    "20190701_214619.jpg":         "fire-night",
}

DROP = {"20200606_125657.jpg"}          # near-duplicate of grand-canyon

MAX_LONG = 2400
QUALITY  = 82


def optimize(src_path: Path, dest_path: Path):
    """Open, EXIF-rotate, resize, save as JPEG with stripped metadata."""
    with Image.open(src_path) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode != "RGB":
            im = im.convert("RGB")
        w, h = im.size
        if max(w, h) > MAX_LONG:
            scale = MAX_LONG / max(w, h)
            im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        im.save(dest_path, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    return dest_path.stat().st_size


def main():
    summary = []

    for f in sorted(SRC.iterdir()):
        name = f.name

        # 1. skip RAW
        if f.suffix.lower() == ".arw":
            summary.append(("SKIP raw",      name, ""))
            continue

        # 2. skip explicit drops
        if name in DROP:
            summary.append(("SKIP near-dup", name, ""))
            continue

        # 3. personal rename branch
        if name in PERSONAL_RENAMES:
            slug = PERSONAL_RENAMES[name]
            dest = TUGI_DIR / f"{slug}.jpg"
            size = optimize(f, dest)
            summary.append(("TUGI",          name, f"{slug}.jpg  ({size/1024:.0f} KB)"))
            continue

        # 4. "Copy of DSC08281.JPG" → DSC08281.jpg in gallery
        if name.lower().startswith("copy of "):
            base = name[len("copy of "):]
            stem = Path(base).stem  # e.g. "DSC08281"
            if stem in EXISTING_GALLERY_DSCS:
                summary.append(("SKIP dup-gallery", name, ""))
                continue
            dest = GALLERY_DIR / f"{stem}.jpg"
            size = optimize(f, dest)
            summary.append(("GALLERY (renamed)", name, f"{stem}.jpg  ({size/1024:.0f} KB)"))
            continue

        # 5. DSC photos in gallery
        if name.upper().startswith("DSC"):
            stem = f.stem  # e.g. "DSC01210"
            if stem in EXISTING_GALLERY_DSCS:
                summary.append(("SKIP dup-gallery", name, ""))
                continue
            dest = GALLERY_DIR / f"{stem}.jpg"
            size = optimize(f, dest)
            summary.append(("GALLERY",        name, f"{stem}.jpg  ({size/1024:.0f} KB)"))
            continue

        # 6. anything else — leave a warning
        summary.append(("UNCLASSIFIED", name, "(left alone — review)"))

    # Report
    print(f"{'STATE':<22}  {'SOURCE':<32}  RESULT")
    print("-" * 92)
    for state, src, result in summary:
        print(f"{state:<22}  {src:<32}  {result}")

    # Aggregate
    print()
    by_state = {}
    for state, _, _ in summary:
        by_state[state] = by_state.get(state, 0) + 1
    for s in sorted(by_state):
        print(f"  {s}: {by_state[s]}")


if __name__ == "__main__":
    main()
