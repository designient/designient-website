#!/usr/bin/env node
/**
 * Mechanical em-dash cleanup across user-facing content.
 * Run: node scripts/fix-em-dashes.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SCAN_DIRS = ['data', 'components', 'app', 'lib']
const EXTENSIONS = new Set(['.ts', '.tsx', '.json'])

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (EXTENSIONS.has(path.extname(entry.name))) files.push(full)
  }
  return files
}

function transform(content, filePath) {
  let s = content
  const isMetadata = /title:|description:|openGraph|twitter/.test(content) && filePath.includes('app/')

  // Week/Module labels: "Week 1 — Foo" -> "Week 1: Foo"
  s = s.replace(/(Week \d+) — /g, '$1: ')
  s = s.replace(/(Module \d+) — /g, '$1: ')
  s = s.replace(/(Session \d+) — /g, '$1: ')

  // Design Track badges: " — Step" -> " · Step" or " - Step"
  s = s.replace(/Track — Step/g, 'Track · Step')
  s = s.replace(/ — Step (\d)/g, ' · Step $1')

  // Metadata titles: "Course — Subtitle" -> "Course | Subtitle"
  if (isMetadata || filePath.endsWith('page.tsx')) {
    s = s.replace(/ — /g, ' | ')
  }

  // Weeks ranges 1–2 (en dash) keep or normalize to "1-2" - plan said avoid em dash, en dash in ranges might be ok
  // Replace en dash in week ranges in strings like "Weeks 1–2"
  s = s.replace(/Weeks (\d+)–(\d+)/g, 'Weeks $1-$2')

  // General em dash
  s = s.replace(/ — /g, ' - ')
  s = s.replace(/—/g, ' - ')

  // Cleanup double spaces from replacements
  s = s.replace(/  +/g, ' ')

  return s
}

let changed = 0
for (const dir of SCAN_DIRS) {
  for (const file of walk(path.join(root, dir))) {
    const raw = fs.readFileSync(file, 'utf8')
    if (!raw.includes('—') && !raw.includes('–')) continue
    const next = transform(raw, file)
    if (next !== raw) {
      fs.writeFileSync(file, next)
      changed++
      console.log('fixed:', path.relative(root, file))
    }
  }
}

console.log(`\nDone. ${changed} file(s) updated.`)
