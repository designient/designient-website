'use client'

import { Gift } from 'react-feather'
import { useCurrency } from '../../contexts/CurrencyContext'
import { pickByCurrency, type LocalizedBonus } from '../../lib/localizedPricing'

type CurrencyAwareBonusStackProps = {
  title?: string
  bonuses: LocalizedBonus[]
}

export function CurrencyAwareBonusStack({
  title = 'The Bonus Stack',
  bonuses,
}: CurrencyAwareBonusStackProps) {
  const { currency, isLoading } = useCurrency()

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Gift className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
          <h2
            className="font-display font-bold"
            style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            {title}
          </h2>
        </div>
        <div className="space-y-4">
          {bonuses.map((bonus) => {
            const value = isLoading ? '…' : pickByCurrency(currency, bonus.valueInr, bonus.valueUsd)
            return (
              <div
                key={bonus.name}
                className="rounded-xl p-5"
                style={{
                  border: bonus.highlight ? '2px solid var(--color-highlight)' : '1px solid var(--border-default)',
                  backgroundColor: 'var(--bg-subtle)',
                }}
              >
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {bonus.name}
                  </h3>
                  <span className="font-body text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
                    Standalone value: {value} · Included
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {bonus.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
