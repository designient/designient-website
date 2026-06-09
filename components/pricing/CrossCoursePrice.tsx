'use client'

import { useCourseFees, type CourseSlug } from '../../lib/localizedPricing'

type CrossCoursePriceProps = {
 slug: CourseSlug
 suffix?: string
}

export function CrossCoursePrice({ slug, suffix = '' }: CrossCoursePriceProps) {
 const { fees, isLoading } = useCourseFees(slug)
 if (isLoading || !fees) return <>…</>
 return (
 <>
 {fees.displayEarlyBird}
 {suffix}
 </>
 )
}

export function CrossCoursePriceRange({ slug }: { slug: CourseSlug }) {
 const { fees, isLoading } = useCourseFees(slug)
 if (isLoading || !fees) return <>…</>
 if (fees.displayEarlyBird === fees.displayStandard) {
 return <>{fees.displayEarlyBird}</>
 }
 return (
 <>
 {fees.displayEarlyBird}–{fees.displayStandard}
 </>
 )
}
