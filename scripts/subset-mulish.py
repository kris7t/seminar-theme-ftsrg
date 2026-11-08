#!/usr/bin/env python3
"""Subsets Mulish ExtraBold Italic to the characters of the name of the group.

The name is only ever set in the lines of NAME_LINES in
src/logos/FtsrgName.tsx, so we embed a font with just those characters. Run
this script again after changing NAME_LINES, and commit the result:

    python3 scripts/subset-mulish.py

Requires the @fontsource/mulish devDependency, and fontTools with brotli
(e.g., `pip install fonttools brotli`).
"""

import re
import shutil
import sys
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
FONTSOURCE = ROOT / "node_modules" / "@fontsource" / "mulish"
# Fontsource splits the font by script. We take the first one that has every
# character of the name.
SOURCES = [
    FONTSOURCE / "files" / "mulish-latin-800-italic.woff2",
    FONTSOURCE / "files" / "mulish-latin-ext-800-italic.woff2",
]
NAME_SOURCE = ROOT / "src" / "logos" / "FtsrgName.tsx"
OUTPUT = ROOT / "assets" / "mulish-800-italic-subset.woff2"
# The Open Font License requires the license to accompany the font.
LICENSE_OUTPUT = ROOT / "assets" / "mulish-OFL.txt"


def name_characters() -> set[str]:
    """Returns the characters of the strings in NAME_LINES."""
    source = NAME_SOURCE.read_text(encoding="utf-8")
    match = re.search(r"const NAME_LINES = \{(.*?)\} as const;", source, re.DOTALL)
    if match is None:
        sys.exit(f"NAME_LINES not found in {NAME_SOURCE}")
    lines = re.findall(r"'([^'\\]*)'", match.group(1))
    if not lines:
        sys.exit(f"No strings found in NAME_LINES in {NAME_SOURCE}")
    return set("".join(lines))


def find_source(characters: set[str]) -> Path:
    """Returns the first source font that has all of `characters`."""
    for source in SOURCES:
        cmap = TTFont(source)["cmap"].getBestCmap()
        missing = {c for c in characters if ord(c) not in cmap}
        if not missing:
            return source
        print(f"{source.name} lacks {''.join(sorted(missing))!r}", file=sys.stderr)
    sys.exit("No source font has every character of the name")


def main() -> None:
    characters = name_characters()
    source = find_source(characters)
    options = subset.Options()
    options.flavor = "woff2"
    # Keep the default layout features (e.g., kerning) for the kept glyphs.
    options.layout_features = ["*"]
    font = subset.load_font(str(source), options)
    subsetter = subset.Subsetter(options)
    subsetter.populate(text="".join(sorted(characters)))
    subsetter.subset(font)
    subset.save_font(font, str(OUTPUT), options)
    shutil.copyfile(FONTSOURCE / "LICENSE", LICENSE_OUTPUT)
    print(
        f"Wrote {OUTPUT.relative_to(ROOT)} ({OUTPUT.stat().st_size} bytes) "
        f"with {''.join(sorted(characters))!r} from {source.name}"
    )


if __name__ == "__main__":
    main()
