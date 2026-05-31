#!/usr/bin/env python3
"""Migrate hardcoded hex colors to CSS custom properties for theme support."""

import os
import re

DIRS = ['app', 'components', 'lib', 'data']
EXTS = {'.tsx', '.ts', '.css'}

# Property-specific color mappings (lowercase hex keys)
COLOR_MAP = {
    '#1a1a1a': 'var(--text-primary)',
    '#4a4a4a': 'var(--text-secondary)',
    '#6b7280': 'var(--text-muted)',
    '#6a6a6a': 'var(--text-muted)',
    '#374151': 'var(--text-secondary)',
    '#4b5563': 'var(--text-muted)',
    '#1f2937': 'var(--text-primary)',
    '#9a98ff': 'var(--color-primary)',
    '#7272cc': 'var(--color-primary-hover)',
    '#c5ff4d': 'var(--color-highlight)',
    '#ff8660': 'var(--color-cta)',
    '#4fdbf0': 'var(--color-accent-cyan)',
    '#ef4444': 'var(--color-error)',
    '#dc2626': 'var(--color-error)',
    '#991b1b': 'var(--color-error)',
    '#10b981': 'var(--color-success)',
    '#065f46': 'var(--color-success)',
    '#166534': 'var(--color-success)',
    '#2e7d32': 'var(--color-success)',
    '#f59e0b': 'var(--color-warning)',
    '#9ca3af': 'var(--text-muted)',
    '#ffffff': 'var(--bg-card)',
    '#fff': 'var(--bg-card)',
    '#f0efff': 'var(--bg-warm)',
    '#fff0ec': 'var(--bg-peach)',
    '#f9fafb': 'var(--bg-subtle)',
    '#f3f4f6': 'var(--bg-muted)',
    '#f9f5ff': 'var(--bg-purple-subtle)',
    '#e5e7eb': 'var(--border-default)',
    '#e5e5e5': 'var(--border-default)',
    '#d1d5db': 'var(--border-default)',
    '#f4e4c1': 'var(--bg-peach)',
    '#fef2f2': 'var(--color-error-bg)',
    '#fee2e2': 'var(--color-error-bg)',
    '#f0fdf4': 'var(--color-success-bg)',
    '#e8f5e9': 'var(--color-success-bg)',
    '#d1fae5': 'var(--color-success-bg)',
    '#ff5841': 'var(--color-cta)',
    '#6b46c1': 'var(--color-primary-hover)',
    '#a67fd4': 'var(--color-primary-hover)',
}

BG_MAP = {
    **COLOR_MAP,
    '#9a98ff': 'var(--bg-purple-band)',
    '#1a1a1a': 'var(--bg-surface-elevated)',
    '#ffffff': 'var(--bg-card)',
    '#fff': 'var(--bg-card)',
    'white': 'var(--bg-card)',
    'transparent': 'transparent',
}

BORDER_MAP = {
    **COLOR_MAP,
    '#9a98ff': 'var(--color-primary)',
    '#e5e7eb': 'var(--border-default)',
    '#d1d5db': 'var(--border-default)',
}

TEXT_ON_CTA = 'var(--text-on-accent)'


def normalize_hex(h: str) -> str:
    return h.lower()


def replace_property(content: str, prop: str, mapping: dict) -> str:
    pattern = rf"({re.escape(prop)}:\s*['\"])(#[0-9A-Fa-f]{{3,8}}|white)(['\"])"

    def repl(m):
        val = normalize_hex(m.group(2)) if m.group(2).startswith('#') else m.group(2).lower()
        if val in mapping:
            return f"{m.group(1)}{mapping[val]}{m.group(3)}"
        return m.group(0)

    content = re.sub(pattern, repl, content, flags=re.IGNORECASE)

    # border-left: 4px solid #hex
    pattern2 = rf"({re.escape(prop)}:\s*[^;]*?)(#[0-9A-Fa-f]{{3,8}})"
    def repl2(m):
        val = normalize_hex(m.group(2))
        if val in mapping:
            return m.group(1) + mapping[val]
        return m.group(0)
    content = re.sub(pattern2, repl2, content, flags=re.IGNORECASE)
    return content


def replace_tailwind_arbitrary(content: str) -> str:
    tw_map = {
        '#9A98FF': 'var(--color-primary)',
        '#9a98ff': 'var(--color-primary)',
        '#FF8660': 'var(--color-cta)',
        '#ff8660': 'var(--color-cta)',
        '#C5FF4D': 'var(--color-highlight)',
        '#c5ff4d': 'var(--color-highlight)',
        '#F0EFFF': 'var(--bg-warm)',
        '#f0efff': 'var(--bg-warm)',
        '#FFF0EC': 'var(--bg-peach)',
        '#fff0ec': 'var(--bg-peach)',
        '#4FDBF0': 'var(--color-accent-cyan)',
        '#4fdbf0': 'var(--color-accent-cyan)',
        '#1a1a1a': 'var(--text-primary)',
        '#6b7280': 'var(--text-muted)',
        '#4a4a4a': 'var(--text-secondary)',
        '#7272CC': 'var(--color-primary-hover)',
        '#f9fafb': 'var(--bg-subtle)',
        '#e5e7eb': 'var(--border-default)',
    }

    bg_tw_map = {
        '#9A98FF': 'var(--bg-purple-band)',
        '#9a98ff': 'var(--bg-purple-band)',
    }

    for old, new in tw_map.items():
        content = content.replace(f'text-[{old}]', f'text-[{new}]')
        content = content.replace(f'border-[{old}]', f'border-[{new}]')
        content = content.replace(f'ring-[{old}]', f'ring-[{new}]')
        content = content.replace(f'from-[{old}]', f'from-[{new}]')
        content = content.replace(f'to-[{old}]', f'to-[{new}]')
        content = content.replace(f'hover:text-[{old}]', f'hover:text-[{new}]')

    for old, new in bg_tw_map.items():
        content = content.replace(f'bg-[{old}]', f'bg-[{new}]')

    return content


def fix_cta_text(content: str) -> str:
    """CTA buttons with coral bg should use on-accent text."""
    content = re.sub(
        r"(backgroundColor:\s*'var\(--color-cta\)'[^}]*?)color:\s*'var\(--text-primary\)'",
        rf"\1color: '{TEXT_ON_CTA}'",
        content,
    )
    content = re.sub(
        r"(backgroundColor:\s*'var\(--color-cta\)'[^}]*?)color:\s*'#1a1a1a'",
        rf"\1color: '{TEXT_ON_CTA}'",
        content,
    )
    return content


def process_file(path: str) -> bool:
    with open(path, 'r') as f:
        content = f.read()
    orig = content

    content = replace_property(content, 'color', COLOR_MAP)
    content = replace_property(content, 'backgroundColor', BG_MAP)
    content = replace_property(content, 'borderColor', BORDER_MAP)
    content = replace_property(content, 'borderLeft', BORDER_MAP)
    content = replace_property(content, 'outline', COLOR_MAP)
    content = replace_tailwind_arbitrary(content)
    content = fix_cta_text(content)

    # Fix color on purple band sections - white text stays
    # backgroundColor purple band with color white → text-on-dark
    content = re.sub(
        r"(backgroundColor:\s*'var\(--bg-purple-band\)'[^}]*?)color:\s*'var\(--bg-card\)'",
        r"\1color: 'var(--text-on-dark)'",
        content,
    )

    if content != orig:
        with open(path, 'w') as f:
            f.write(content)
        return True
    return False


def main():
    count = 0
    for d in DIRS:
        for root, _, files in os.walk(d):
            for fn in files:
                if os.path.splitext(fn)[1] in EXTS:
                    path = os.path.join(root, fn)
                    if path.endswith('globals.css'):
                        continue
                    if process_file(path):
                        count += 1
                        print('Migrated', path)
    print(f'Done: {count} files migrated')


if __name__ == '__main__':
    main()
