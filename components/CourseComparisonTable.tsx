'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useCurrency } from '../contexts/CurrencyContext'
import { aiTrackComparison as aiRows, designTrackComparison as designRows, type ComparisonRow } from '../data/coursesHubData'

type TrackComparisonTableProps = {
 title: string
 columns: string[]
 rows: ComparisonRow[]
 footnote?: React.ReactNode
 backgroundColor?: string
}

export function TrackComparisonTable({
 title,
 columns,
 rows,
 footnote,
 backgroundColor = 'var(--bg-card)',
}: TrackComparisonTableProps) {
 const { currency, isLoading } = useCurrency()

 return (
 <section className="py-12 md:py-16" style={{ backgroundColor }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
 >
 <h2
 className="font-display tracking-wide leading-tight mb-8 text-center"
 style={{
 color: 'var(--color-primary)',
 fontWeight: 700,
 fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
 }}
 >
 {title}
 </h2>

 <div
 className="table-scroll -mx-4 px-4 sm:mx-0 sm:px-0 rounded-xl"
 style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}
 >
 <table className="w-full min-w-[640px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
 <thead>
 <tr className="surface-on-accent" style={{ backgroundColor: 'var(--color-primary)' }}>
 <th
 className="sticky left-0 z-20 p-4 text-left font-bold min-w-[160px]"
 style={{
 color: 'var(--text-on-accent)',
 backgroundColor: 'var(--color-primary)',
 boxShadow: '2px 0 4px rgba(0,0,0,0.1)',
 }}
 >
 Feature
 </th>
 {columns.map((column) => (
 <th
 key={column}
 className="p-4 text-center font-bold min-w-[140px]"
 style={{ color: 'var(--text-on-accent)' }}
 >
 {column}
 </th>
 ))}
 </tr>
 </thead>
 <tbody>
 {rows.map((row, rowIndex) => (
 <tr
 key={row.label}
 style={{
 backgroundColor: rowIndex % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)',
 }}
 >
 <td
 className="sticky left-0 z-10 p-4 font-semibold border-t min-w-[160px]"
 style={{
 color: 'var(--text-primary)',
 borderColor: 'var(--border-default)',
 backgroundColor: rowIndex % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)',
 boxShadow: '2px 0 4px rgba(0,0,0,0.06)',
 }}
 >
 {row.label}
 </td>
 {(currency === 'INR' ? row.valuesInr : row.valuesUsd).map((value, colIndex) => (
 <td
 key={`${row.label}-${colIndex}`}
 className="p-4 text-center border-t align-top"
 style={{
 color: 'var(--text-secondary)',
 borderColor: 'var(--border-default)',
 fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
 }}
 >
 {isLoading ? '…' : value}
 </td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 {footnote && (
 <div
 className="font-body mt-6 p-4 rounded-xl text-sm leading-relaxed"
 style={{
 color: 'var(--text-secondary)',
 backgroundColor: 'var(--bg-subtle)',
 border: '1px solid var(--border-default)',
 }}
 >
 {footnote}
 </div>
 )}
 </motion.div>
 </div>
 </section>
 )
}

export function DesignTrackComparisonTable() {
 return (
 <TrackComparisonTable
 title="Design Track - Course Comparison"
 columns={['UI UX Design Bootcamp', 'UI UX Design Pro', 'UI UX Design Master']}
 rows={designRows}
 backgroundColor="var(--bg-warm)"
 footnote={
 <>
 → 95% placement rate applies to Pro and Master graduates who completed placement support.{' '}
 <Link
 href="/placements"
 className="font-semibold underline hover:no-underline"
 style={{ color: 'var(--color-primary)' }}
 >
 View placement details →
 </Link>
 </>
 }
 />
 )
}

export function AiTrackComparisonTable() {
 return (
 <TrackComparisonTable
 title="AI Track - Course Comparison"
 columns={['AI Automation Accelerator', 'AI Product Design Course']}
 rows={aiRows}
 backgroundColor="var(--bg-card)"
 footnote={
 <>
 → Both AI Track courses are online-only. Available to students across India and internationally. Free monthly
 workshops available - email{' '}
 <a href="mailto:hello@designient.com" className="font-semibold underline hover:no-underline" style={{ color: 'var(--color-primary)' }}>
 hello@designient.com
 </a>{' '}
 for next dates.
 </>
 }
 />
 )
}
