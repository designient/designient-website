#!/usr/bin/env python3
"""Ensure text and icons on solid mint surfaces use var(--text-on-accent) (#0d0d0d)."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCAN_DIRS = [ROOT / "components", ROOT / "app"]

MINT_BG = re.compile(
    r"backgroundColor:\s*'var\(--color-(?:highlight|accent|primary|cta)\)'"
)
WRONG_TEXT = re.compile(
    r"color:\s*'var\(--(?:text-primary|text-on-dark|text-on-highlight|color-primary)\)'"
)
RIGHT_TEXT = "color: 'var(--text-on-accent)'"
SURFACE_CLASS = "surface-on-accent"
ICON_BOX_CLASS = "accent-icon-box"

MINT_BG_LINE = re.compile(
    r"^\s*backgroundColor:\s*'var\(--color-(?:highlight|accent|primary|cta)\)',?\s*$"
)
WRONG_TEXT_LINE = re.compile(
    r"^(\s*)color:\s*'var\(--(?:text-primary|text-on-dark|text-on-highlight|color-primary)\)',?\s*$"
)


def add_surface_class(tag: str) -> str:
    if SURFACE_CLASS in tag or ICON_BOX_CLASS in tag:
        return tag
    if 'className="' in tag:
        return re.sub(
            r'className="([^"]*)"',
            lambda m: f'className="{m.group(1).strip()} {SURFACE_CLASS}"',
            tag,
            count=1,
        )
    if "style={{" in tag:
        return tag.replace("style={{", f'className="{SURFACE_CLASS}" style={{', 1)
    if re.search(r"style=\{\s*backgroundColor", tag):
        return tag
    return tag


def fix_style_blocks(content: str) -> str:
    def repl(style_block: re.Match[str]) -> str:
        block = style_block.group(0)
        if MINT_BG.search(block) and WRONG_TEXT.search(block):
            block = WRONG_TEXT.sub(RIGHT_TEXT, block)
        return block

    return re.sub(r"style=\{\{[\s\S]*?\}\}", repl, content)


def fix_adjacent_style_lines(content: str) -> str:
    lines = content.splitlines(keepends=True)
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if MINT_BG_LINE.match(line.rstrip("\n")) and i + 1 < len(lines):
            next_line = lines[i + 1]
            wrong = WRONG_TEXT_LINE.match(next_line.rstrip("\n"))
            if wrong:
                out.append(line)
                out.append(f"{wrong.group(1)}color: 'var(--text-on-accent)',\n")
                i += 2
                continue
        out.append(line)
        i += 1
    return "".join(out)


def add_surface_class_to_mint_tags(content: str) -> str:
    search_from = 0
    updated = content
    while True:
        idx = updated.find("<", search_from)
        if idx == -1:
            break
        if updated[idx : idx + 2] in ("<!--", "<!"):
            search_from = idx + 1
            continue

        end = idx
        depth = 0
        in_string = False
        quote = ""
        while end < len(updated):
            ch = updated[end]
            if in_string:
                if ch == quote and updated[end - 1] != "\\":
                    in_string = False
                end += 1
                continue
            if ch in "\"'`":
                in_string = True
                quote = ch
                end += 1
                continue
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth = max(0, depth - 1)
            elif ch == ">" and depth == 0:
                end += 1
                break
            end += 1

        tag = updated[idx:end]
        name = re.match(r"<(\w+)", tag)
        if (
            name
            and name.group(1) in ("button", "a", "span", "div", "th", "td", "tr")
            and MINT_BG.search(tag)
            and "accent-muted" not in tag
            and "<section" not in tag
        ):
            if not (name.group(1) == "div" and re.search(r"\bpy-(1[6-9]|[2-9]\d)\b", tag) and "rounded" not in tag):
                new_tag = add_surface_class(tag)
                if new_tag != tag:
                    updated = updated[:idx] + new_tag + updated[end:]
                    end = idx + len(new_tag)

        search_from = end
    return updated


def fix_icon_colors_in_surface_blocks(content: str) -> str:
    lines = content.splitlines(keepends=True)
    depth = 0
    out: list[str] = []
    open_surface = re.compile(
        rf"<[^>]*(?:{SURFACE_CLASS}|{ICON_BOX_CLASS}|backgroundColor:\s*'var\(--color-(?:highlight|accent|primary|cta)\)'[^>]*)>"
    )

    for line in lines:
        stripped = line.rstrip("\n")
        if (
            open_surface.search(line)
            and MINT_BG.search(line)
            and "<section" not in line
            and "accent-muted" not in line
        ):
            depth += 1
        elif (SURFACE_CLASS in line or ICON_BOX_CLASS in line) and "<" in line:
            depth += 1

        if depth > 0 and WRONG_TEXT.search(line):
            if re.search(
                r"(className=\"[^\"]*w-\d|<svg|Icon|CheckCircle|Target|Users|Briefcase|Award|Zap|Heart|Gift|Shield|Folder|BookOpen|MessageCircle|Mail|Phone|Arrow|MapPin|Globe|Clock|Star|Code|ToolIcon|item\.icon|node\.icon|Briefcase|User )",
                line,
            ) or "backgroundColor:" in line or WRONG_TEXT_LINE.match(stripped):
                line = WRONG_TEXT.sub(RIGHT_TEXT, line)

        out.append(line)
        closes = line.count("</div>") + line.count("</span>") + line.count("</button>") + line.count("</a>")
        if depth > 0 and closes:
            depth = max(0, depth - closes)

    return "".join(out)


def process_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    updated = fix_style_blocks(original)
    updated = fix_adjacent_style_lines(updated)
    updated = fix_icon_colors_in_surface_blocks(updated)
    updated = add_surface_class_to_mint_tags(updated)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        return True
    return False


def main() -> None:
    changed: list[str] = []
    for base in SCAN_DIRS:
        for path in base.rglob("*.tsx"):
            if process_file(path):
                changed.append(str(path.relative_to(ROOT)))
    print(f"Updated {len(changed)} files")
    for name in sorted(changed):
        print(f"  {name}")


if __name__ == "__main__":
    main()
