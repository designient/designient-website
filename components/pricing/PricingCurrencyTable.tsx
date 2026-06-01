'use client'

import { useCurrency } from '../../contexts/CurrencyContext'
import type { CoursePricingBlock } from '../../data/pricingPageData'

const tableClass = 'w-full text-sm border-collapse my-4'
const thClass = 'font-body font-semibold text-left p-3 border'
const tdClass = 'font-body p-3 border align-top'

interface PricingCurrencyTableProps {
  tiers: CoursePricingBlock['tiers']
}

export function PricingCurrencyTable({ tiers }: PricingCurrencyTableProps) {
  const { currency, isLoading } = useCurrency()

  const tableStyle = { borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }
  const thBase = { ...tableStyle, color: 'var(--text-primary)' }
  const activeHeaderStyle = {
    ...thBase,
    backgroundColor: 'var(--color-primary)',
    color: 'var(--text-on-accent)',
  }
  const inactiveHeaderStyle = {
    ...thBase,
    backgroundColor: 'var(--bg-subtle)',
  }
  const activeCellStyle = {
    ...tableStyle,
    backgroundColor: 'var(--color-accent-muted)',
    fontWeight: 600 as const,
  }
  const inactiveCellStyle = tableStyle

  if (isLoading) {
    return <p className="font-body text-sm my-4" style={{ color: 'var(--text-muted)' }}>Loading pricing…</p>
  }

  return (
    <table className={tableClass} style={tableStyle}>
      <thead>
        <tr>
          <th className={thClass} style={inactiveHeaderStyle}>
            Pricing
          </th>
          <th className={thClass} style={currency === 'INR' ? activeHeaderStyle : inactiveHeaderStyle}>
            INR
            {currency === 'INR' && (
              <span className="block font-normal text-xs mt-0.5 opacity-90">Your currency</span>
            )}
          </th>
          <th className={thClass} style={currency === 'USD' ? activeHeaderStyle : inactiveHeaderStyle}>
            USD
            {currency === 'USD' && (
              <span className="block font-normal text-xs mt-0.5 opacity-90">Your currency</span>
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {tiers.map((tier) => (
          <tr key={tier.label}>
            <td className={tdClass} style={inactiveCellStyle}>
              {tier.label}
            </td>
            <td className={tdClass} style={currency === 'INR' ? activeCellStyle : inactiveCellStyle}>
              {tier.inr}
            </td>
            <td className={tdClass} style={currency === 'USD' ? activeCellStyle : inactiveCellStyle}>
              {tier.usd}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
