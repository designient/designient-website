'use client'

import { useCourseFees, type CourseEmiConfig, type CourseSlug } from '../../lib/localizedPricing'

type CourseSecondaryTextProps = {
 slug: CourseSlug
 lead: string
 earlyBirdSeats?: number
 standardSeats?: number
 emi?: CourseEmiConfig
 guarantee: string
 applicationNote?: string
}

export function CourseSecondaryText({
 slug,
 lead,
 earlyBirdSeats,
 standardSeats,
 emi,
 guarantee,
 applicationNote,
}: CourseSecondaryTextProps) {
 const { fees, isLoading, currency } = useCourseFees(slug)

 if (isLoading || !fees) {
 return <>Loading pricing…</>
 }

 const seatLine =
 earlyBirdSeats != null
 ? `${earlyBirdSeats} early bird seats at ${fees.displayEarlyBird}${
 standardSeats != null ? ` · ${standardSeats} standard seats at ${fees.displayStandard}` : fees.displayStandard !== fees.displayEarlyBird ? ` · Standard at ${fees.displayStandard}` : ''
 }`
 : fees.displayStandard !== fees.displayEarlyBird
 ? `${fees.displayEarlyBird} early bird · Standard at ${fees.displayStandard}`
 : `${fees.displayEarlyBird}`

 const emiLine =
 emi && currency === 'INR'
 ? ` EMI - Rs ${emi.inr.perMonth}/month for ${emi.inr.months} months (early bird) · Zero interest.`
 : emi && currency === 'USD'
 ? ` EMI - USD ${emi.usd.perMonth}/month for ${emi.usd.months} months (early bird) · Zero interest.`
 : ''

 return (
 <>
 {lead} {seatLine}.{emiLine} {applicationNote ? `${applicationNote} ` : ''}
 {guarantee}
 </>
 )
}
