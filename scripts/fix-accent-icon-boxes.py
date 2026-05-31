#!/usr/bin/env python3
"""Add accent-icon-box and fix icon colors inside solid mint background boxes."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCAN_DIRS = [ROOT / "components", ROOT / "app"]

MINT_BG = "backgroundColor: 'var(--color-highlight)'"
MINT_BGS = (
    "backgroundColor: 'var(--color-highlight)'",
    "backgroundColor: 'var(--color-accent)'",
    "backgroundColor: 'var(--color-primary)'",
    "backgroundColor: 'var(--color-cta)'",
)
ICON_BOX_CLASS = "accent-icon-box"
WRONG_COLORS = (
    "color: 'var(--text-primary)'",
    "color: 'var(--color-primary)'",
    "color: 'var(--color-highlight)'",
    "color: 'var(--color-accent)'",
)
RIGHT_COLOR = "color: 'var(--text-on-accent)'"
ICON_HINT = re.compile(
    r"(className=\"[^\"]*w-\d|<svg\b|CheckCircle|Target|Users|Briefcase|Award|Zap|Heart|TrendingUp|Code|Shield|Clock|MapPin|Globe|Star|BookOpen|MessageCircle|Chevron|ArrowRight|ArrowLeft|Menu|X className|Icon className|<Icon\b|<\w+Icon\b)"
)


def has_mint_bg(text: str) -> bool:
    return any(bg in text for bg in MINT_BGS)


def is_icon_container(tag_text: str) -> bool:
    if not has_mint_bg(tag_text):
        return False
    if tag_text.lstrip().startswith("<section"):
        return False
    # Skip full-bleed CTA bands (large vertical padding, no rounded corners)
    if re.search(r"\bpy-(1[6-9]|[2-9]\d)\b", tag_text) and "rounded" not in tag_text:
        return False
    return True


def add_class_to_tag(tag_text: str) -> str:
    if ICON_BOX_CLASS in tag_text:
        return tag_text
    m = re.search(r'className="([^"]*)"', tag_text)
    if m:
        classes = m.group(1).rstrip()
        return tag_text.replace(
            f'className="{m.group(1)}"',
            f'className="{classes} {ICON_BOX_CLASS}"',
            1,
        )
    m = re.search(r"className=\{`([^`]*)`\}", tag_text)
    if m:
        classes = m.group(1).rstrip()
        return tag_text.replace(
            f"className={{`{m.group(1)}`}}",
            f"className={{`{classes} {ICON_BOX_CLASS}`}}",
            1,
        )
    return re.sub(r"(<(div|span|td|th)\b)", rf'\1 className="{ICON_BOX_CLASS}"', tag_text, count=1)


def find_tag_end(content: str, start: int) -> int:
    depth = 0
    i = start
    in_string = False
    quote = ""
    while i < len(content):
        ch = content[i]
        if in_string:
            if ch == quote and content[i - 1] != "\\":
                in_string = False
            i += 1
            continue
        if ch in "\"'`":
            in_string = True
            quote = ch
            i += 1
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth = max(0, depth - 1)
        elif ch == ">" and depth == 0:
            return i + 1
        i += 1
    return len(content)


def process_content(content: str) -> str:
    updated = content
    search_from = 0

    while True:
        idx = updated.find("<", search_from)
        if idx == -1:
            break
        if updated[idx : idx + 2] in ("<!--", "<!"):
            search_from = idx + 1
            continue
        tag_end = find_tag_end(updated, idx)
        tag_text = updated[idx:tag_end]
        tag_name = re.match(r"<(\w+)", tag_text)
        if not tag_name or tag_name.group(1) not in ("div", "span", "td", "th"):
            search_from = tag_end
            continue

        if is_icon_container(tag_text):
            new_tag = add_class_to_tag(tag_text)
            if new_tag != tag_text:
                updated = updated[:idx] + new_tag + updated[tag_end:]
                tag_end = idx + len(new_tag)

            # Fix icon colors in immediate children block until closing tag
            close_pattern = f"</{tag_name.group(1)}>"
            close_idx = updated.find(close_pattern, tag_end)
            if close_idx != -1:
                block = updated[tag_end:close_idx]
                if ICON_HINT.search(block):
                    new_block = block
                    for wrong in WRONG_COLORS:
                        new_block = new_block.replace(wrong, RIGHT_COLOR)
                    if new_block != block:
                        updated = updated[:tag_end] + new_block + updated[close_idx:]

        search_from = tag_end

    return updated


def main() -> None:
    changed: list[str] = []
    for base in SCAN_DIRS:
        for path in base.rglob("*.tsx"):
            original = path.read_text(encoding="utf-8")
            updated = process_content(original)
            if updated != original:
                path.write_text(updated, encoding="utf-8")
                changed.append(str(path.relative_to(ROOT)))

    print(f"Updated {len(changed)} files")
    for name in sorted(changed):
        print(f"  {name}")


if __name__ == "__main__":
    main()
