import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import Link from 'next/link'
import { CancellationRefundPolicyContent } from './policy-content'

export const metadata: Metadata = {
  title: 'Cancellation and Refund Policy | Designient',
  description: 'Cancellation and refund terms for all 5 Designient courses. Per-course refund windows, booking token policy, and performance guarantees explained.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/cancellation-refund-policy',
  },
  openGraph: {
    title: 'Cancellation and Refund Policy | Designient',
    description: 'Cancellation and refund terms for all 5 Designient courses. Per-course refund windows, booking token policy, and performance guarantees explained.',
    url: 'https://designient.com/cancellation-refund-policy',
    type: 'website',
  },
}

export default function CancellationRefundPolicyPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://designient.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cancellation and Refund Policy',
        item: 'https://designient.com/cancellation-refund-policy',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-base font-sans text-primary">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" role="main">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-12">
            <h1 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
              Cancellation and Refund Policy
            </h1>
            <p className="font-body text-lg" style={{ color: 'var(--text-secondary)' }}>
              Last Updated: May 30, 2026
            </p>
          </div>

          <CancellationRefundPolicyContent />

          <div className="mt-12 pt-8 border-t-2" style={{ borderColor: 'var(--border-default)' }}>
            <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
              This page is written in plain language for students. The full legal clauses are in our{' '}
              <Link href="/terms-and-conditions" className="text-[var(--color-primary)] underline">Terms and Conditions</Link>.
              In case of any conflict, the Terms and Conditions shall prevail.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
              Designient reserves the right to modify this policy at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/terms-and-conditions" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Terms and Conditions
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/contact-us" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Contact Us
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/faqs" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              FAQs
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
