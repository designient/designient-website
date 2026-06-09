'use client'

import { useCurrency } from '../../contexts/CurrencyContext'
import { getBookingTokenDisplay } from '../../lib/coursePricingUtils'
import { useCourseFees, type CourseSlug } from '../../lib/localizedPricing'

type LocalizedCourseSeatNoteProps = {
  slug: CourseSlug
  earlyBirdSeats: number
  reviewHours?: number
}

export function LocalizedCourseSeatNote({
  slug,
  earlyBirdSeats,
  reviewHours = 48,
}: LocalizedCourseSeatNoteProps) {
  const { fees, isLoading } = useCourseFees(slug)

  if (isLoading || !fees) {
    return <>Loading pricing…</>
  }

  return (
    <>
      {earlyBirdSeats} early bird seats at {fees.displayEarlyBird}. Standard seats at {fees.displayStandard}.
      Applications reviewed within {reviewHours} hours.
    </>
  )
}

type LocalizedBookingTokenNoteProps = {
  slug: CourseSlug
  percentLabel?: string
}

export function LocalizedBookingTokenNote({
  slug,
  percentLabel = '10% of early bird fee',
}: LocalizedBookingTokenNoteProps) {
  const { currency, isLoading } = useCurrency()
  const token = !isLoading ? getBookingTokenDisplay(slug, currency) : null

  if (isLoading || !token) {
    return <>Loading pricing…</>
  }

  return (
    <>
      Accepted students pay a {token} booking token ({percentLabel}) to confirm their seat. Non-refundable.
      Adjusts against full course fee.
    </>
  )
}
