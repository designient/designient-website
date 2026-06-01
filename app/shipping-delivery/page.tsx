import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { LEGAL_LAST_UPDATED } from '../../lib/siteLegal'
import { ShippingDeliveryPolicyContent } from './policy-content'

export const metadata: Metadata = {
  title: 'Shipping and Delivery Policy | Designient',
  description:
    'Designient delivers all courses and materials digitally. No physical shipping. Learn how and when you receive course access, materials, and certificates.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://designient.com/shipping-delivery' },
  openGraph: {
    title: 'Shipping and Delivery Policy | Designient',
    description:
      'Designient delivers all courses and materials digitally. No physical shipping.',
    url: 'https://designient.com/shipping-delivery',
    type: 'website',
  },
}

export default function ShippingDeliveryPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
      { '@type': 'ListItem', position: 2, name: 'Shipping and Delivery Policy', item: 'https://designient.com/shipping-delivery' },
    ],
  }

  return (
    <div className="min-h-screen bg-base font-sans text-primary">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" role="main">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-12">
            <h1
              className="font-display font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}
            >
              Shipping and Delivery Policy
            </h1>
            <p className="font-body text-lg mb-2" style={{ color: 'var(--text-secondary)' }}>
              Designient School of Masterminds · Operated by Designient Technologies Private Limited
            </p>
            <p className="font-body" style={{ color: 'var(--text-muted)' }}>
              Last updated: {LEGAL_LAST_UPDATED}
            </p>
          </div>

          <ShippingDeliveryPolicyContent />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Pricing
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/cancellation-refund-policy" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Cancellation &amp; Refund Policy
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/grievance-redressal" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Grievance Redressal
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
