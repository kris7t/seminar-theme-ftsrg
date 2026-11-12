#!/usr/bin/env python3
"""Subsets the fonts of names in the logos to the characters of the names.

The names are only ever set in the lines of NAME_LINES in the components of
SUBSETS, so we embed fonts with just those characters. Run this script again
after changing NAME_LINES, and commit the results:

    python3 scripts/subset-fonts.py

Requires the fontsource devDependencies of the fonts, and fontTools with brotli
(e.g., `pip install fonttools brotli`).
"""

import re
import shutil
import sys
from dataclasses import dataclass
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
FONTSOURCE = ROOT / "node_modules" / "@fontsource"
FONTSOURCE_VARIABLE = ROOT / "node_modules" / "@fontsource-variable"
ASSETS = ROOT / "assets"


@dataclass
class Subset:
    # Name of the fontsource package (in `@fontsource-variable` if `axes` is set).
    package: str
    # Fontsource splits fonts by script. We take the first one that has every
    # character of the name.
    sources: list[str]
    # Component with the NAME_LINES of the name.
    component: str
    output: str
    # The Open Font License requires the license to accompany the font.
    license_output: str
    # Coordinates to instantiate a variable font at, as a static font.
    axes: dict[str, float] | None = None


SUBSETS = [
    Subset(
        package="mulish",
        sources=["mulish-latin-800-italic.woff2", "mulish-latin-ext-800-italic.woff2"],
        component="src/logos/FtsrgName.tsx",
        output="mulish-800-italic-subset.woff2",
        license_output="mulish-OFL.txt",
    ),
    Subset(
        package="montserrat",
        sources=[
            "montserrat-latin-wght-normal.woff2",
            "montserrat-latin-ext-wght-normal.woff2",
        ],
        component="src/logos/VikName.tsx",
        output="montserrat-425-subset.woff2",
        license_output="montserrat-OFL.txt",
        # Montserrat has become lighter since the logos of the faculty were
        # made, so we make it a bit heavier than Regular to match them.
        axes={"wght": 425},
    ),
]


def name_characters(component: Path) -> set[str]:
    """Returns the characters of the strings in NAME_LINES of `component`."""
    source = component.read_text(encoding="utf-8")
    match = re.search(r"const NAME_LINES = \{(.*?)\} as const;", source, re.DOTALL)
    if match is None:
        sys.exit(f"NAME_LINES not found in {component}")
    lines = re.findall(r"'([^'\\]*)'", match.group(1))
    if not lines:
        sys.exit(f"No strings found in NAME_LINES in {component}")
    return set("".join(lines))


def find_source(sources: list[Path], characters: set[str]) -> Path:
    """Returns the first source font that has all of `characters`."""
    for source in sources:
        cmap = TTFont(source)["cmap"].getBestCmap()
        missing = {c for c in characters if ord(c) not in cmap}
        if not missing:
            return source
        print(f"{source.name} lacks {''.join(sorted(missing))!r}", file=sys.stderr)
    sys.exit("No source font has every character of the name")


def make_subset(spec: Subset) -> None:
    package = (FONTSOURCE_VARIABLE if spec.axes else FONTSOURCE) / spec.package
    characters = name_characters(ROOT / spec.component)
    source = find_source([package / "files" / s for s in spec.sources], characters)
    options = subset.Options()
    options.flavor = "woff2"
    # Keep the default layout features (e.g., kerning) for the kept glyphs.
    options.layout_features = ["*"]
    # Slides are scaled to fit the screen, so TrueType hinting for particular
    # pixel sizes would only take up space.
    options.hinting = False
    font = subset.load_font(str(source), options)
    if spec.axes is not None:
        font = instancer.instantiateVariableFont(font, spec.axes)
    subsetter = subset.Subsetter(options)
    subsetter.populate(text="".join(sorted(characters)))
    subsetter.subset(font)
    output = ASSETS / spec.output
    subset.save_font(font, str(output), options)
    shutil.copyfile(package / "LICENSE", ASSETS / spec.license_output)
    print(
        f"Wrote {output.relative_to(ROOT)} ({output.stat().st_size} bytes) "
        f"with {''.join(sorted(characters))!r} from {source.name}"
    )


def main() -> None:
    for spec in SUBSETS:
        make_subset(spec)


if __name__ == "__main__":
    main()
