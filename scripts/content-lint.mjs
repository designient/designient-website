#!/usr/bin/env node
/**
 * Lint user-facing copy for em dashes and common AI buzzwords.
 * Exit 1 if em dashes found; exit 0 with warnings only for buzzwords.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SCAN_DIRS = ['data', 'components', 'app', 'lib']
const SCAN_FILES = ['lib/email-templates.ts'].map((f) => path.join(root, f))
const EXTENSIONS = new Set(['.ts', '.tsx', '.json'])
const IGNORE = new Set(['.cursor', 'node_modules', '.next'])

const BUZZWORDS = [
  /\bcomprehensive\b/gi,
  /\bleverage\b/gi,
  /\bseamless\b/gi,
  /\bcutting-edge\b/gi,
  /\bgame-changer\b/gi,
  /\bempower\b/gi,
  /\bdelve\b/gi,
  /\bunlock\b/gi,
  /\brobust\b/gi,
  /\belevate\b/gi,
  /\btransformative\b/gi,
  /in today['']s\s+\w+/gi,
]

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (EXTENSIONS.has(path.extname(entry.name))) files.push(full)
  }
  return files
}

function collectFiles() {
  const files = new Set()
  for (const dir of SCAN_DIRS) {
    for (const f of walk(path.join(root, dir))) files.add(f)
  }
  for (const f of SCAN_FILES) {
    if (fs.existsSync(f)) files.add(f)
  }
  const blogs = path.join(root, 'data/blogs.json')
  if (fs.existsSync(blogs)) files.add(blogs)
  return [...files]
}

const emDashHits = []
const buzzwordHits = []

for (const file of collectFiles()) {
  const rel = path.relative(root, file)
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, i) => {
    if (line.includes('—')) {
      emDashHits.push({ file: rel, line: i + 1, text: line.trim().slice(0, 120) })
    }
    for (const re of BUZZWORDS) {
      re.lastIndex = 0
      if (re.test(line)) {
        buzzwordHits.push({ file: rel, line: i + 1, text: line.trim().slice(0, 120) })
      }
    }
  })
}

if (emDashHits.length) {
  console.error(`\n❌ Em dash (—) found in ${emDashHits.length} line(s):\n`)
  emDashHits.slice(0, 40).forEach(({ file, line, text }) => {
    console.error(`  ${file}:${line}  ${text}`)
  })
  if (emDashHits.length > 40) console.error(`  … and ${emDashHits.length - 40} more`)
} else {
  console.log('✓ No em dashes in scanned content')
}

if (buzzwordHits.length) {
  console.warn(`\n⚠ AI buzzword hits: ${buzzwordHits.length} (review recommended)\n`)
  buzzwordHits.slice(0, 25).forEach(({ file, line, text }) => {
    console.warn(`  ${file}:${line}  ${text}`)
  })
  if (buzzwordHits.length > 25) console.warn(`  … and ${buzzwordHits.length - 25} more`)
} else {
  console.log('✓ No buzzword flags in scanned content')
}

process.exit(emDashHits.length > 0 ? 1 : 0)
