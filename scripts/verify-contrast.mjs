#!/usr/bin/env node
/**
 * WCAG 2.2 contrast verification for Mint Grey design tokens.
 * Run: node scripts/verify-contrast.mjs
 */

function parseHex(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}

function luminance(r, g, b) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function contrastRatio(fg, bg) {
  const [r1, g1, b1] = parseHex(fg);
  const [r2, g2, b2] = parseHex(bg);
  const l1 = luminance(r1, g1, b1);
  const l2 = luminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const pairs = [
  { label: 'text-primary on bg-base', fg: '#f5f5f7', bg: '#1c1c1e', min: 7, level: 'AAA' },
  { label: 'text-secondary on bg-base', fg: '#a1a1a6', bg: '#1c1c1e', min: 4.5, level: 'AA' },
  { label: 'text-muted on bg-base', fg: '#86868b', bg: '#1c1c1e', min: 4.5, level: 'AA' },
  { label: 'text-on-accent on accent (buttons)', fg: '#0d0d0d', bg: '#B0E4CC', min: 4.5, level: 'AA' },
  { label: 'accent on bg-base (links/large)', fg: '#B0E4CC', bg: '#1c1c1e', min: 3, level: 'AA Large/UI' },
  { label: 'text-primary on bg-card', fg: '#f5f5f7', bg: '#2c2c2e', min: 4.5, level: 'AA' },
  { label: 'text-secondary on bg-footer', fg: '#a1a1a6', bg: '#141416', min: 4.5, level: 'AA' },
];

let failed = 0;

console.log('Designient Mint Grey — WCAG 2.2 Contrast Matrix\n');
console.log('Pair'.padEnd(42) + 'Ratio'.padStart(8) + '  Min'.padStart(6) + '  Status');
console.log('-'.repeat(68));

for (const { label, fg, bg, min, level } of pairs) {
  const ratio = contrastRatio(fg, bg);
  const pass = ratio >= min;
  if (!pass) failed++;
  console.log(
    `${label.padEnd(42)}${ratio.toFixed(2).padStart(8)}:1${String(min).padStart(5)}:1  ${pass ? 'PASS' : 'FAIL'} (${level})`
  );
}

console.log('-'.repeat(68));
if (failed > 0) {
  console.error(`\n${failed} pair(s) failed.`);
  process.exit(1);
}
console.log('\nAll contrast pairs passed.');
