'use client'

import Link from 'next/link'
import { ArrowRight } from 'react-feather'
import { useCourseFees, type CourseSlug, COURSE_SLUGS } from '../../lib/localizedPricing'

type CourseUrgencyStripProps = {
  slug: CourseSlug
  prefix: string
  earlyBirdSeats?: number
  seatLabel?: string
  showRegister?: boolean
  onRegister?: () => void
  claimHref?: string
  claimLabel?: string
  suffix?: string
  className?: string
}

export function CourseUrgencyStrip({
  slug,
  prefix,
  earlyBirdSeats,
  seatLabel,
  showRegister = true,
  onRegister,
  claimHref,
  claimLabel = 'Claim My Seat',
  suffix,
  className = '',
}: CourseUrgencyStripProps) {
  const { fees, isLoading, currency } = useCourseFees(slug)

  if (isLoading || !fees) {
    return (
      <div className={`py-3 px-4 text-center ${className}`} style={{ backgroundColor: 'var(--color-highlight)', color: 'var(--text-on-accent)' }}>
        <p className="font-body text-sm font-semibold">Loading pricing…</p>
      </div>
    )
  }

  const standardNote =
    fees.displayStandard !== fees.displayEarlyBird
      ? ` · Standard ${fees.displayStandard}`
      : ''

  return (
    <div className={`py-3 px-4 text-center ${className}`} style={{ backgroundColor: 'var(--color-highlight)', color: 'var(--text-on-accent)' }}>
      <p className="font-body text-sm md:text-base font-semibold">
        {prefix}
        {seatLabel ? ` · ${seatLabel} ` : earlyBirdSeats != null ? ` · ${earlyBirdSeats} early bird seats at ` : ' at '}
        <strong>{fees.displayEarlyBird}</strong>
        {standardNote}
        {suffix ? `. ${suffix}` : '.'}{' '}
        {onRegister ? (
          <button type="button" onClick={onRegister} className="underline hover:no-underline inline-flex items-center gap-1 font-bold">
            {claimLabel}
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : claimHref ? (
          <Link href={claimHref} className="underline hover:no-underline inline-flex items-center gap-1 font-bold">
            {claimLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : showRegister && onRegister ? (
          <button type="button" onClick={onRegister} className="underline hover:no-underline inline-flex items-center gap-1 font-bold">
            Register Free
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : showRegister ? (
          <span>Seat confirmed on payment.</span>
        ) : null}
      </p>
    </div>
  )
}

export { COURSE_SLUGS }
