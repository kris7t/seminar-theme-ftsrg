#!/usr/bin/env python3
"""Builds a font from the letters in the labels of the department logos.

The labels of the vector logos of the department are set in a commercial
typeface, converted to paths and emboldened with a stroke. We turn these
outlines (with the stroke merged into them) into a font with only the letters
of the labels, so that browsers render the labels as text. Font rasterizers
snap the baselines and heights of text to the pixel grid (where the platform
hints fonts) and adjust its contrast, so the small text looks crisper than the
same outlines rendered as paths.

The font reproduces the positions of the letters in the logos with kerning. It
has a ligature for every pair of letters that are joined in the outlines. Pass
the labels split from the vector logos of the department (English first, then
Hungarian), and commit the results:

    python3 scripts/build-mit-label-font.py \
        assets-src/mit-label-en.svg assets-src/mit-label-hu.svg

The lines of the labels must match NAME_LINES in src/logos/MitLogo.tsx. Copy the
printed line origins into it.

Requires fontTools and skia-pathops (e.g., `pip install fonttools skia-pathops
brotli`).
"""

import re
import sys
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path

import pathops
from fontTools.feaLib.builder import addOpenTypeFeaturesFromString
from fontTools.fontBuilder import FontBuilder
from fontTools.misc.timeTools import timestampFromString
from fontTools.misc.transform import Identity, Transform
from fontTools.pens.areaPen import AreaPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.cu2quPen import Cu2QuPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.reverseContourPen import ReverseContourPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.svgLib.path import parse_path

ROOT = Path(__file__).resolve().parent.parent
COMPONENT = ROOT / "src" / "logos" / "MitLogo.tsx"
OUTPUT = ROOT / "assets" / "mit-label.woff2"
SVG = "{http://www.w3.org/2000/svg}"
LANGUAGES = ["en", "hu"]

# Pairs of letters that are joined in the outlines.
LIGATURES = ["fi"]
# Letters whose bottom sits on the baseline (without overshoot).
FLAT_BOTTOM = set("DEIMRTdhiklmnrz")
# Contours shorter than this (in mm) are dots and accents.
MARK_HEIGHT = 2.5
# The labels are set at this size (in mm) in the logos. We make it the em of
# the font, so that its units match the units of the typeface of the labels.
FONT_SIZE = 10.5336
UPM = 2048
# Font units are rounded, so the kerning only reproduces the positions of the
# letters up to this tolerance (in font units).
TOLERANCE = 2


def name_lines() -> dict[str, list[str]]:
    """Returns the lines of NAME_LINES in the component by language."""
    source = COMPONENT.read_text(encoding="utf-8")
    match = re.search(r"const NAME_LINES = \{(.*?)\} as const;", source, re.DOTALL)
    if match is None:
        sys.exit(f"NAME_LINES not found in {COMPONENT}")
    return {
        lang: re.findall(r"'([^'\\]*)'", lines)
        for lang, lines in re.findall(r"(\w+): \[(.*?)\]", match.group(1), re.DOTALL)
    }


def parse_transform(value: str) -> Transform:
    transform = Identity
    for name, args in re.findall(r"(\w+)\s*\(([^)]*)\)", value):
        a = [float(x) for x in re.split(r"[\s,]+", args.strip())]
        if name == "matrix":
            t = Transform(*a)
        elif name == "translate":
            t = Identity.translate(a[0], a[1] if len(a) > 1 else 0)
        elif name == "scale":
            t = Identity.scale(a[0], a[1] if len(a) > 1 else a[0])
        elif name == "rotate":
            t = Identity.translate(*a[1:]).rotate(a[0] * 3.141592653589793 / 180)
            t = t.translate(*(-x for x in a[1:]))
        else:
            sys.exit(f"Unsupported transform: {name}")
        transform = transform.transform(t)
    return transform


def text_paths(file: Path) -> tuple[pathops.Path, float]:
    """Returns the outlines of the text in `file` and its stroke width."""
    fill = pathops.Path()
    strokes = set()

    def visit(element, transform):
        if element.tag in (f"{SVG}defs", f"{SVG}clipPath"):
            return
        transform = transform.transform(parse_transform(element.get("transform", "")))
        style = dict(
            tuple(p.strip() for p in item.split(":", 1))
            for item in element.get("style", "").split(";")
            if ":" in item
        )
        if element.tag == f"{SVG}path":
            # Stroke widths are not affected by translations.
            if transform[:4] != (1, 0, 0, 1):
                sys.exit(f"Unsupported transform of text in {file}: {transform}")
            parse_path(element.get("d"), TransformPen(fill.getPen(), transform))
            strokes.add(float(style["stroke-width"]))
        for child in element:
            visit(child, transform)

    visit(ET.parse(file).getroot(), Identity)
    if len(strokes) != 1:
        sys.exit(f"Expected one stroke width in {file}")
    return fill, strokes.pop()


def contains(a, b) -> bool:
    return a[0] <= b[0] and a[1] <= b[1] and a[2] >= b[2] and a[3] >= b[3]


def letters(outline: pathops.Path, lines: list[str]):
    """Splits `outline` into lines and letters, and matches them to `lines`."""
    contours = sorted(
        ((c.bounds, c) for c in outline.contours), key=lambda c: c[0][1] + c[0][3]
    )
    groups, last = [], None
    for bounds, contour in contours:
        if bounds[3] - bounds[1] < MARK_HEIGHT:
            continue
        center = (bounds[1] + bounds[3]) / 2
        if last is None or center - last > MARK_HEIGHT:
            groups.append([])
        groups[-1].append((bounds, contour))
        last = center
    if len(groups) != len(lines):
        sys.exit(f"Found {len(groups)} lines instead of {len(lines)}")
    # Dots and accents belong to the line right below them.
    for bounds, contour in contours:
        if bounds[3] - bounds[1] < MARK_HEIGHT:
            group = min(
                (g for g in groups if max(b[3] for b, _ in g) > bounds[3]),
                key=lambda g: max(b[3] for b, _ in g),
            )
            group.append((bounds, contour))
    result = []
    for group, text in zip(groups, lines):
        outer = [
            x
            for x in group
            if not any(y is not x and contains(y[0], x[0]) for y in group)
        ]
        units = [[x] for x in outer if x[0][3] - x[0][1] >= MARK_HEIGHT]
        for mark in (x for x in outer if x[0][3] - x[0][1] < MARK_HEIGHT):
            overlap = lambda u: min(u[0][0][2], mark[0][2]) - max(
                u[0][0][0], mark[0][0]
            )
            max(units, key=overlap).append(mark)
        # Counters belong to the smallest letter around them.
        for x in group:
            if x not in outer:
                owners = [u for u in units if contains(u[0][0], x[0])]
                min(owners, key=lambda u: u[0][0][2] - u[0][0][0]).append(x)
        units.sort(key=lambda u: u[0][0][0])
        chars = tokens(text)
        letters = [c for c in chars if c != " "]
        if len(units) != len(letters):
            sys.exit(
                f"Found {len(units)} letters in {text!r} instead of {len(letters)}"
            )
        result.append((chars, [[c for _, c in u] for u in units]))
    return result


def tokens(text: str) -> list[str]:
    """Splits `text` into characters and ligatures."""
    pattern = "|".join(map(re.escape, LIGATURES)) + "|."
    return re.findall(pattern, text)


def glyph_name(token: str) -> str:
    if token == " ":
        return "space"
    if len(token) > 1:
        return "_".join(map(glyph_name, token))
    return token if token.isascii() else f"uni{ord(token):04X}"


def merge_stroke(contours, width: float) -> pathops.Path:
    fill = pathops.Path()
    for contour in contours:
        fill.addPath(contour)
    stroke = pathops.Path(fill)
    stroke.stroke(width, pathops.LineCap.ROUND_CAP, pathops.LineJoin.ROUND_JOIN, 4)
    stroke.convertConicsToQuads()
    return pathops.op(fill, stroke, pathops.PathOp.UNION)


def shape(recording: RecordingPen) -> list[float]:
    """Returns the bounds and the area of a glyph, to compare letters."""
    bounds, area = BoundsPen(None), AreaPen()
    recording.replay(bounds)
    recording.replay(area)
    return [*bounds.bounds, abs(area.value) / UPM]


def main() -> None:
    if len(sys.argv) != 1 + len(LANGUAGES):
        sys.exit(__doc__)
    names = name_lines()
    glyphs: dict[str, RecordingPen] = {}
    # Positions of the letters on each line, in font units from the origin.
    placements: list[list[tuple[str, float]]] = []
    origins: dict[str, list[tuple[float, float]]] = {}
    for lang, file in zip(LANGUAGES, sys.argv[1:]):
        outline, stroke = text_paths(Path(file))
        scale = UPM / FONT_SIZE
        origins[lang] = []
        for chars, units in letters(outline, names[lang]):
            flat = sorted(
                u[0].bounds[3]
                for c, u in zip((c for c in chars if c != " "), units)
                if c in FLAT_BOTTOM
            )
            baseline = flat[len(flat) // 2]
            line = []
            units = iter(units)
            for char in chars:
                if char == " ":
                    line.append((char, None))
                    continue
                merged = merge_stroke(next(units), stroke)
                left = merged.bounds[0]
                recording = RecordingPen()
                merged.draw(
                    TransformPen(
                        recording,
                        (scale, 0, 0, -scale, -left * scale, baseline * scale),
                    )
                )
                if char in glyphs:
                    error = max(
                        abs(a - b)
                        for a, b in zip(shape(glyphs[char]), shape(recording))
                    )
                    if error > TOLERANCE:
                        sys.exit(f"The outlines of {char!r} differ by {error} units")
                else:
                    glyphs[char] = recording
                line.append((char, left * scale))
            origins[lang].append((line[0][1] / scale, baseline))
            placements.append(line)

    # The most common distance to the next letter is the advance width, and
    # pairs with other distances are kerned.
    distances: dict[str, list[float]] = {}
    for line in placements:
        placed = [(c, x) for c, x in line if x is not None]
        for (a, x), (_, y) in zip(placed, placed[1:]):
            distances.setdefault(a, []).append(y - x)
    widths = {c: shape(r)[2] for c, r in glyphs.items()}
    advances = {
        c: round(
            Counter(round(d) for d in distances.get(c, [widths[c]])).most_common(1)[0][
                0
            ]
        )
        for c in glyphs
    }
    space_gaps = [
        line[i + 1][1] - line[i - 1][1] - advances[line[i - 1][0]]
        for line in placements
        for i, (c, _) in enumerate(line)
        if c == " "
    ]
    advances[" "] = round(sorted(space_gaps)[len(space_gaps) // 2])
    kerning: dict[tuple[str, str], int] = {}
    error = 0
    for line in placements:
        pen = line[0][1]
        for i, ((a, _), (b, target)) in enumerate(zip(line, line[1:])):
            pen += advances[a]
            if target is None:
                # The space before a letter may follow different letters, so
                # we kern the pair before the space to place the letter after
                # it.
                c, target = line[i + 2]
                needed = target - pen - advances[" "] - kerning.get((" ", c), 0)
                pen += kerning.setdefault((a, b), round(needed))
                continue
            pen += kerning.setdefault((a, b), round(target - pen))
            error = max(error, abs(target - pen))
    if error > TOLERANCE:
        sys.exit(f"The kerning is off by up to {error} units")

    order = [".notdef", "space"] + sorted(glyph_name(c) for c in glyphs)
    builder = FontBuilder(UPM, isTTF=True)
    builder.setupGlyphOrder(order)
    builder.setupCharacterMap(
        {ord(c): glyph_name(c) for c in [" ", *glyphs] if len(c) == 1}
    )
    tt_glyphs = {".notdef": TTGlyphPen(None).glyph(), "space": TTGlyphPen(None).glyph()}
    metrics = {".notdef": (advances[" "], 0), "space": (advances[" "], 0)}
    for char, recording in glyphs.items():
        area = AreaPen()
        recording.replay(area)
        pen = TTGlyphPen(None)
        quadratic = Cu2QuPen(pen, 1)
        # TrueType outlines run clockwise.
        recording.replay(ReverseContourPen(quadratic) if area.value > 0 else quadratic)
        tt_glyphs[glyph_name(char)] = pen.glyph()
        metrics[glyph_name(char)] = (advances[char], 0)
    builder.setupGlyf(tt_glyphs)
    builder.setupHorizontalMetrics(metrics)
    ascent, descent = round(UPM * 0.95), round(UPM * 0.25)
    builder.setupHorizontalHeader(ascent=ascent, descent=-descent)
    builder.setupNameTable({"familyName": "MIT Label", "styleName": "Regular"})
    builder.setupOS2(
        sTypoAscender=ascent,
        sTypoDescender=-descent,
        usWinAscent=ascent,
        usWinDescent=descent,
    )
    builder.setupPost()
    ligatures = "\n".join(
        f"  sub {' '.join(glyph_name(c) for c in lig)} by {glyph_name(lig)};"
        for lig in LIGATURES
        if lig in glyphs
    )
    pairs = "\n".join(
        f"  pos {glyph_name(a)} {glyph_name(b)} {kern};"
        for (a, b), kern in sorted(kerning.items())
        if kern != 0
    )
    addOpenTypeFeaturesFromString(
        builder.font,
        f"languagesystem DFLT dflt;\nlanguagesystem latn dflt;\n"
        f"feature liga {{\n{ligatures}\n}} liga;\n"
        f"feature kern {{\n{pairs}\n}} kern;\n",
    )
    # Keep the output reproducible.
    timestamp = timestampFromString("Thu Jan  1 00:00:00 2026")
    builder.font["head"].created = builder.font["head"].modified = timestamp
    builder.font.recalcTimestamp = False
    builder.font.flavor = "woff2"
    builder.save(OUTPUT)
    print(f"Wrote {OUTPUT.relative_to(ROOT)} ({OUTPUT.stat().st_size} bytes)")
    print(f"const NAME_FONT_SIZE = {FONT_SIZE:g};")
    print("const NAME_LINE_ORIGINS = {")
    for lang, lines in origins.items():
        values = ", ".join(f"[{x:.3f}, {y:.3f}]" for x, y in lines)
        print(f"  {lang}: [{values}],")
    print("} as const;")


if __name__ == "__main__":
    main()
