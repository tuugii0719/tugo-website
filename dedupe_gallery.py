"""
Find near-duplicate photos in tugo-website/public/images/gallery/ using
a simple perceptual hash (16x16 grayscale → 256-bit mean-threshold hash).
Groups files within Hamming distance <= threshold. Keeps the LARGEST file
in each group; removes the others.

Usage:
  python dedupe_gallery.py            # dry-run, prints groups
  python dedupe_gallery.py --apply    # actually deletes near-duplicates
"""

import sys
from pathlib import Path
from PIL import Image

GALLERY = Path(__file__).parent / "tugo-website" / "public" / "images" / "gallery"
HASH_SIZE = 16            # 16x16 = 256 bits
THRESHOLD = 10            # Hamming distance considered "same image". Tune cautiously.
APPLY = "--apply" in sys.argv


def phash(path: Path) -> int:
    """Mean-threshold perceptual hash, returned as a single int."""
    with Image.open(path) as im:
        im = im.convert("L").resize((HASH_SIZE, HASH_SIZE), Image.LANCZOS)
        px = list(im.getdata())
    avg = sum(px) / len(px)
    bits = 0
    for i, v in enumerate(px):
        if v > avg:
            bits |= (1 << i)
    return bits


def hamming(a: int, b: int) -> int:
    return bin(a ^ b).count("1")


def main():
    files = sorted([p for p in GALLERY.iterdir() if p.suffix.lower() in (".jpg", ".jpeg", ".png")])
    print(f"Hashing {len(files)} images...")
    hashes = {}
    for f in files:
        try:
            hashes[f] = phash(f)
        except Exception as e:
            print(f"  ! failed {f.name}: {e}")

    # Greedy grouping
    groups = []
    used = set()
    items = list(hashes.items())
    for i, (f1, h1) in enumerate(items):
        if f1 in used:
            continue
        group = [f1]
        used.add(f1)
        for f2, h2 in items[i + 1:]:
            if f2 in used:
                continue
            if hamming(h1, h2) <= THRESHOLD:
                group.append(f2)
                used.add(f2)
        if len(group) > 1:
            groups.append(group)

    if not groups:
        print("No near-duplicates found.")
        return

    print(f"\n{len(groups)} near-duplicate group(s) found:\n")
    to_delete = []
    for g in groups:
        # Keep the largest file (best quality usually)
        g_sorted = sorted(g, key=lambda p: p.stat().st_size, reverse=True)
        keeper = g_sorted[0]
        dupes = g_sorted[1:]
        print(f"  KEEP   {keeper.name:<22}  ({keeper.stat().st_size/1024:.0f} KB)")
        for d in dupes:
            print(f"    DROP {d.name:<22}  ({d.stat().st_size/1024:.0f} KB)")
            to_delete.append(d)
        print()

    print(f"Total to delete: {len(to_delete)}")
    if APPLY:
        for d in to_delete:
            d.unlink()
            print(f"  deleted {d.name}")
        print("Done.")
    else:
        print("\n(dry run — re-run with --apply to actually delete)")
        print("Affected stems for catalog cleanup:")
        for d in to_delete:
            print(f"  {d.stem}")


if __name__ == "__main__":
    main()
