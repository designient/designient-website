import Link from 'next/link'

export function PricingDetailsLink() {
 return (
 <section className="py-8 md:py-10" style={{ backgroundColor: 'var(--bg-card)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 text-center">
 <p className="font-body text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
 <Link
 href="/pricing"
 className="font-semibold underline hover:no-underline"
 style={{ color: 'var(--color-primary)' }}
 >
 View full pricing details
 </Link>
 {' '}
 - all course fees, EMI plans, booking tokens, alumni discounts, and USD pricing.
 </p>
 </div>
 </section>
 )
}
