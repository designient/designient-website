'use client'

import { useCurrency } from '../../contexts/CurrencyContext'
import { pickByCurrency } from '../../lib/localizedPricing'

export type PatternComparisonRow = {
  feature: string
  others: string
  pro?: string
  proInr?: string
  proUsd?: string
}

function resolveProColumn(row: PatternComparisonRow, currency: 'INR' | 'USD', isLoading: boolean): string {
  if (isLoading) return '…'
  if (row.proInr && row.proUsd) return pickByCurrency(currency, row.proInr, row.proUsd)
  return row.pro ?? ''
}

type LocalizedPatternComparisonProps = {
  title?: string
  leftHeader: string
  rightHeader: string
  rows: PatternComparisonRow[]
  bare?: boolean
}

export function LocalizedPatternComparison({
  title,
  leftHeader,
  rightHeader,
  rows,
  bare = false,
}: LocalizedPatternComparisonProps) {
  const { currency, isLoading } = useCurrency()

  const table = (
        <div className="overflow-x-auto rounded-xl" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}>
          <table className="w-full min-w-[560px]">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <th className="p-4 text-left font-bold" style={{ color: 'var(--text-on-accent)' }}>
                  Feature
                </th>
                <th className="p-4 text-center font-bold" style={{ color: 'var(--text-on-accent)' }}>
                  {leftHeader}
                </th>
                <th className="p-4 text-center font-bold" style={{ color: 'var(--text-on-accent)' }}>
                  {rightHeader}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.feature} style={{ backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)' }}>
                  <td
                    className="p-4 font-semibold border-t"
                    style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)' }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="p-4 text-center border-t font-medium"
                    style={{ color: 'var(--color-primary)', borderColor: 'var(--border-default)' }}
                  >
                    {resolveProColumn(row, currency, isLoading)}
                  </td>
                  <td
                    className="p-4 text-center border-t"
                    style={{ color: 'var(--text-muted)', borderColor: 'var(--border-default)' }}
                  >
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )

  if (bare) return table

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        {title ? (
          <h2
            className="font-display font-bold mb-8 text-center"
            style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            {title}
          </h2>
        ) : null}
        {table}
      </div>
    </section>
  )
}
