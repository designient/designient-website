/**
 * One-off: migrate value: 'Rs …' to valueInr / valueUsd in page data files.
 */
import fs from 'fs'
import path from 'path'

const ROOT = path.join(import.meta.dirname, '..')

const USD_MAP = {
  'Rs 1,999': 'USD 29',
  'Rs 2,999': 'USD 59',
  'Rs 3,999': 'USD 59',
  'Rs 4,999': 'USD 69',
  'Rs 5,000': 'USD 49',
  'Rs 5,999': 'USD 89',
  'Rs 6,999': 'USD 99',
  'Rs 7,999': 'USD 109',
  'Rs 8,999': 'USD 129',
  'Rs 9,999': 'USD 139',
  'Rs 11,666': 'USD 149',
  'Rs 12,999': 'USD 179',
  'Rs 15,999': 'USD 219',
  'Rs 17,498': 'USD 249',
  'Rs 17,998': 'USD 259',
  'Rs 20,000': 'USD 249',
  'Rs 34,999': 'USD 449',
  'Rs 44,993': 'USD 549',
  'Rs 44,999': 'USD 449',
  'Rs 49,999': 'USD 699',
  'Rs 59,999': 'USD 699',
  'Rs 64,999': 'USD 899',
  'Rs 79,999': 'USD 899',
  'Rs 99,999': 'USD 1,399',
  'Rs 1,19,999': 'USD 1,399',
  'Rs 1,20,000': 'USD 1,499',
  'Rs 1,50,000': 'USD 1,899',
  'Rs 1,60,992': 'USD 1,899',
  'Rs 1,95,992': 'USD 2,499',
  'Rs 2,50,000': 'USD 2,999',
  'Rs 3,25,992': 'USD 3,999',
  'Rs 4,00,000': 'USD 4,999',
  'Rs 4,75,992': 'USD 5,799',
  'Rs 10,000': 'USD 129',
}

const FILES = [
  'data/bootcampPageData.ts',
  'data/proPageData.ts',
  'data/masterPageData.ts',
  'data/aiAutomationAcceleratorPageData.ts',
  'data/aiProductDesignPageData.ts',
  'data/aiAutomationLivePageData.ts',
  'data/aiProductDesignLivePageData.ts',
]

function migrateContent(content) {
  let out = content
  out = out.replace(/\bvalue: '(Rs [^']+)'/g, (_, inr) => {
    const usd = USD_MAP[inr]
    if (!usd) throw new Error(`Missing USD for ${inr}`)
    return `valueInr: '${inr}', valueUsd: '${usd}'`
  })
  return out
}

for (const rel of FILES) {
  const file = path.join(ROOT, rel)
  const next = migrateContent(fs.readFileSync(file, 'utf8'))
  fs.writeFileSync(file, next)
  console.log('migrated', rel)
}
