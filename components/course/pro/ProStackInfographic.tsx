'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Gift, Layers, TrendingDown } from 'react-feather'
import { useCurrency } from '../../../contexts/CurrencyContext'
import { pickByCurrency, type CourseEmiConfig, type LocalizedBonus, type LocalizedValueRow } from '../../../lib/localizedPricing'
import { fadeUp, motionEase, staggerContainer, viewportOnce } from '../animated/motion'
import { CourseBentoGrid } from '../layout'

type ProStackInfographicProps = {
  bonuses: LocalizedBonus[]
  valueRows: LocalizedValueRow[]
  emi?: CourseEmiConfig
  internationalUsdNote?: string
}

function SavingsBar({ percent }: { percent: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const spring = useSpring(0, { stiffness: 50, damping: 18 })
  const width = useTransform(spring, (v) => `${v}%`)

  useEffect(() => {
    if (inView) spring.set(percent)
  }, [inView, percent, spring])

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between text-xs font-body mb-2" style={{ color: 'var(--text-muted)' }}>
        <span>Standalone value</span>
        <span>Your early bird price</span>
      </div>
      <div className="relative h-4 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ width, background: 'linear-gradient(90deg, var(--color-purple), var(--color-primary))' }}
        />
      </div>
      <p className="font-body text-xs text-center mt-2 font-semibold" style={{ color: 'var(--color-forest)' }}>
        You save ~85% vs buying everything separately
      </p>
    </div>
  )
}

export function ProStackInfographic({ bonuses, valueRows, emi, internationalUsdNote }: ProStackInfographicProps) {
  const { currency, isLoading } = useCurrency()

  const lineRows = valueRows.filter((r) => !r.rowType || r.rowType === 'line')
  const totalRow = valueRows.find((r) => r.rowType === 'total')
  const earlyBirdRow = valueRows.find((r) => r.rowType === 'earlyBird')
  const standardRow = valueRows.find((r) => r.rowType === 'standard')

  const totalValue = totalRow ? pickByCurrency(currency, totalRow.valueInr, totalRow.valueUsd) : ''
  const earlyBird = earlyBirdRow ? pickByCurrency(currency, earlyBirdRow.valueInr, earlyBirdRow.valueUsd) : ''
  const standard = standardRow ? pickByCurrency(currency, standardRow.valueInr, standardRow.valueUsd) : ''

  return (
    <div className="space-y-16 md:space-y-20">
      {/* Bonus stack */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Gift className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
          <h2
            className="font-display font-bold"
            style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            The Bonus Stack
          </h2>
        </motion.div>

        <CourseBentoGrid
          items={bonuses.map((bonus, index) => {
            const value = isLoading ? '…' : pickByCurrency(currency, bonus.valueInr, bonus.valueUsd)
            return {
              id: bonus.name,
              span: bonus.highlight ? ('2x1' as const) : index === 0 ? ('2x1' as const) : ('1x1' as const),
              className: bonus.highlight ? '!border-2' : '',
              children: (
                <>
                  {bonus.highlight && (
                    <span
                      className="inline-block font-body text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-2"
                      style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
                    >
                      Early bird exclusive
                    </span>
                  )}
                  <h3 className="font-display font-semibold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                    {bonus.name}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {bonus.description}
                  </p>
                  <p className="font-body text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
                    Standalone value: {value} · Included
                  </p>
                </>
              ),
            }
          })}
        />
      </section>

      {/* Value stack */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Layers className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
          <h2
            className="font-display font-bold"
            style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            The Value Stack
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <SavingsBar percent={85} />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-2 mb-6"
          >
            {lineRows.map((row) => {
              const value = isLoading ? '…' : pickByCurrency(currency, row.valueInr, row.valueUsd)
              return (
                <motion.div
                  key={row.item}
                  variants={fadeUp}
                  className="flex items-center justify-between gap-4 rounded-xl px-4 py-3 border"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-default)' }}
                >
                  <p className="font-body text-sm flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {row.item}
                  </p>
                  <p className="font-display font-semibold text-sm flex-shrink-0" style={{ color: 'var(--text-primary)' }}>
                    {value}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, ease: motionEase }}
            className="rounded-2xl overflow-hidden border-2"
            style={{ borderColor: 'var(--color-primary)' }}
          >
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ backgroundColor: 'var(--bg-warm)' }}
            >
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                <span className="font-body font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {totalRow?.item}
                </span>
              </div>
              <span className="font-display font-bold text-lg line-through" style={{ color: 'var(--text-muted)' }}>
                {isLoading ? '…' : totalValue}
              </span>
            </div>
            <div
              className="flex items-center justify-between px-5 py-5"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <span className="font-display font-bold" style={{ color: 'var(--text-on-accent)' }}>
                {earlyBirdRow?.item}
              </span>
              <span className="font-display font-bold text-2xl md:text-3xl" style={{ color: 'var(--text-on-accent)' }}>
                {isLoading ? '…' : earlyBird}
              </span>
            </div>
            {standardRow && (
              <div
                className="flex items-center justify-between px-5 py-3 border-t"
                style={{ backgroundColor: 'var(--color-accent-muted)', borderColor: 'var(--border-default)' }}
              >
                <span className="font-body text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {standardRow.item}
                </span>
                <span className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>
                  {isLoading ? '…' : standard}
                </span>
              </div>
            )}
          </motion.div>

          {emi && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              className="font-body text-sm text-center mt-6 px-4 py-3 rounded-xl"
              style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--bg-subtle)' }}
            >
              {isLoading
                ? '…'
                : currency === 'INR'
                  ? `EMI available - Rs ${emi.inr.perMonth}/month for ${emi.inr.months} months (early bird) · Zero interest`
                  : `EMI available - USD ${emi.usd.perMonth}/month for ${emi.usd.months} months (early bird) · Zero interest${internationalUsdNote ? ` · International ${internationalUsdNote} via PayPal` : ''}`}
            </motion.p>
          )}
        </div>
      </section>
    </div>
  )
}
