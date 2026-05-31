#!/usr/bin/env python3
"""Bulk migration to Mint Grey design system."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

HEX_REPLACEMENTS = [
    ("#B983FF", "#B0E4CC"),
    ("#b983ff", "#B0E4CC"),
    ("#8458B3", "#B0E4CC"),
    ("#8458b3", "#B0E4CC"),
    ("#A06FE8", "#9AD4BC"),
    ("#9B66F0", "#9AD4BC"),
    ("#9A98FF", "#B0E4CC"),
    ("rgba(185, 131, 255", "rgba(176, 228, 204"),
]

CLASS_REPLACEMENTS = [
    ("min-h-screen bg-white font-sans text-slate-900", "min-h-screen bg-base font-sans text-primary"),
    ("bg-white font-sans text-slate-900", "bg-base font-sans text-primary"),
    ("text-slate-900", "text-primary"),
    ("text-slate-700", "text-secondary"),
    ("text-slate-600", "text-secondary"),
    ("text-slate-500", "text-muted"),
    ("border-slate-200", "border-[var(--border-default)]"),
    ("bg-slate-50", "bg-[var(--bg-subtle)]"),
    ("hover:bg-white/10", "hover:bg-[var(--color-accent-muted)]"),
    ("hover:bg-white/50", "hover:bg-[var(--color-accent-muted)]"),
    ("glass-panel", "apple-card"),
]

FOOTER_LINK = 'className="font-body text-xs font-normal transition-colors hover:text-[var(--color-accent)]" style={{ color: \'var(--text-secondary)\' }}'

def process_file(path: Path) -> bool:
    if "node_modules" in str(path) or ".next" in str(path):
        return False
    try:
        text = path.read_text(encoding="utf-8")
    except (UnicodeDecodeError, IsADirectoryError):
        return False
    orig = text
    for old, new in HEX_REPLACEMENTS:
        text = text.replace(old, new)
    for old, new in CLASS_REPLACEMENTS:
        text = text.replace(old, new)
    # email templates
    if path.name == "email-templates.ts":
        text = text.replace("color: #B983FF", "color: #B0E4CC")
        text = text.replace("color:#B983FF", "color:#B0E4CC")
    if text != orig:
        path.write_text(text, encoding="utf-8")
        return True
    return False

def main():
    exts = {".tsx", ".ts", ".css", ".jsx", ".js", ".mdx"}
    changed = []
    for path in ROOT.rglob("*"):
        if path.suffix in exts and path.is_file():
            if process_file(path):
                changed.append(path.relative_to(ROOT))
    print(f"Updated {len(changed)} files")
    for p in sorted(changed)[:40]:
        print(f"  {p}")
    if len(changed) > 40:
        print(f"  ... and {len(changed) - 40} more")

if __name__ == "__main__":
    main()
