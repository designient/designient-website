import { getSitemapEntries } from '../../sitemap'
import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const entries = getSitemapEntries()
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map((entry) => {
      const lastmod = typeof entry.lastModified === 'string'
        ? entry.lastModified
        : entry.lastModified instanceof Date
          ? entry.lastModified.toISOString().split('T')[0]
          : ''
      const priority = entry.priority != null ? Number(entry.priority).toFixed(1) : '0.5'
      const changeFreq = entry.changeFrequency ?? 'weekly'
      return [
        '  <url>',
        `    <loc>${escapeXml(entry.url)}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
        `    <changefreq>${changeFreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].filter(Boolean).join('\n')
    }),
    '</urlset>',
  ].join('\n')

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
