'use client'

import { useCurrency } from '../../contexts/CurrencyContext'
import { pickByCurrency, type CourseEmiConfig, type LocalizedValueRow } from '../../lib/localizedPricing'

type CurrencyAwareValueStackProps = {
 title?: string
 rows: LocalizedValueRow[]
 emi?: CourseEmiConfig
 internationalUsdNote?: string
}

export function CurrencyAwareValueStack({
 title = 'The Value Stack',
 rows,
 emi,
 internationalUsdNote,
}: CurrencyAwareValueStackProps) {
 const { currency, isLoading } = useCurrency()

 const lineRows = rows.filter((r) => !r.rowType || r.rowType === 'line')
 const summaryRows = rows.filter((r) => r.rowType && r.rowType !== 'line')

 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
 <h2
 className="font-display font-bold mb-8 text-center"
 style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
 >
 {title}
 </h2>
 <div className="table-scroll -mx-4 px-4 sm:mx-0 sm:px-0 rounded-xl" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}>
 <table className="w-full min-w-[400px]">
 <thead>
 <tr style={{ backgroundColor: 'var(--color-primary)' }}>
 <th className="p-4 text-left font-bold" style={{ color: 'var(--text-on-accent)' }}>
 Item
 </th>
 <th className="p-4 text-right font-bold" style={{ color: 'var(--text-on-accent)' }}>
 Standalone Value
 </th>
 </tr>
 </thead>
 <tbody>
 {lineRows.map((row, index) => {
 const value = isLoading ? '…' : pickByCurrency(currency, row.valueInr, row.valueUsd)
 return (
 <tr
 key={row.item}
 style={{ backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)' }}
 >
 <td
 className="p-4 border-t text-sm"
 style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-default)' }}
 >
 {row.item}
 </td>
 <td
 className="p-4 border-t text-right font-semibold text-sm"
 style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)' }}
 >
 {value}
 </td>
 </tr>
 )
 })}
 {summaryRows.map((row) => {
 const value = isLoading ? '…' : pickByCurrency(currency, row.valueInr, row.valueUsd)
 const isTotal = row.rowType === 'total'
 const isEarlyBird = row.rowType === 'earlyBird'
 const isStandard = row.rowType === 'standard'
 const bg = isEarlyBird
 ? 'var(--color-primary)'
 : isStandard
 ? 'var(--color-accent-muted)'
 : isTotal
 ? 'var(--bg-warm)'
 : 'var(--bg-card)'
 const textColor = isEarlyBird ? 'var(--text-on-accent)' : 'var(--text-primary)'
 return (
 <tr key={row.item} style={{ backgroundColor: bg }}>
 <td
 className="p-4 border-t font-bold"
 style={{
 color: isEarlyBird ? 'var(--text-on-accent)' : 'var(--text-primary)',
 borderColor: 'var(--border-default)',
 }}
 >
 {row.item}
 </td>
 <td
 className="p-4 border-t text-right font-bold"
 style={{ color: textColor, borderColor: 'var(--border-default)' }}
 >
 {value}
 </td>
 </tr>
 )
 })}
 </tbody>
 </table>
 </div>
 {emi && (
 <p className="font-body text-sm text-center mt-6" style={{ color: 'var(--text-muted)' }}>
 {isLoading
 ? '…'
 : currency === 'INR'
 ? `EMI available - Rs ${emi.inr.perMonth}/month for ${emi.inr.months} months (early bird) · Zero interest`
 : `EMI available - USD ${emi.usd.perMonth}/month for ${emi.usd.months} months (early bird) · Zero interest${internationalUsdNote ? ` · International ${internationalUsdNote} via PayPal` : ''}`}
 </p>
 )}
 </div>
 </section>
 )
}
