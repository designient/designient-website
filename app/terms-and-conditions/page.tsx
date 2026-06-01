import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import Link from 'next/link'
import { TermsPolicyContent } from './policy-sections'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Designient School of Masterminds',
  description:
    'Terms and conditions for Designient Technologies Private Limited. Enrollment, booking tokens, refunds, performance guarantees, certificates, grievance redressal, and dispute resolution.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | Designient',
    description: 'Terms and conditions for Designient School of Masterminds.',
    url: 'https://designient.com/terms-and-conditions',
    type: 'website',
  },
}

export default function TermsAndConditionsPage() {
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
        name: 'Terms and Conditions',
        item: 'https://designient.com/terms-and-conditions',
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
            <h1
              className="font-display font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}
            >
              Terms and Conditions
            </h1>
            <p className="font-body text-lg mb-2" style={{ color: 'var(--text-secondary)' }}>
              Designient School of Masterminds · Operated by Designient Technologies Private Limited
            </p>
            <p className="font-body" style={{ color: 'var(--text-muted)' }}>
              Last updated: May 30, 2026
            </p>
          </div>

          <TermsPolicyContent />

          <div className="mt-12 pt-8 border-t-2" style={{ borderColor: 'var(--border-default)' }}>
            <p
              className="font-body leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}
            >
              By submitting an inquiry, applying for a course, registering for a workshop, or making a payment, you
              acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/privacy-policy" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Privacy Policy
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link
              href="/cancellation-refund-policy"
              className="font-body text-[var(--color-primary)] underline hover:no-underline"
            >
              Cancellation &amp; Refund Policy
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/contact-us" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Contact Us
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
