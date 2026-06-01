import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { LEGAL_LAST_UPDATED } from '../../lib/siteLegal'
import { GrievanceRedressalPolicyContent } from './policy-content'

export const metadata: Metadata = {
  title: 'Grievance Redressal | Designient',
  description:
    'Raise a complaint or grievance with Designient School of Masterminds. Named Grievance Officer, 5-day response commitment. IT Rules 2021 compliant.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://designient.com/grievance-redressal' },
  openGraph: {
    title: 'Grievance Redressal | Designient',
    description: 'Named Grievance Officer, 5-day response commitment. IT Rules 2021 compliant.',
    url: 'https://designient.com/grievance-redressal',
    type: 'website',
  },
}

export default function GrievanceRedressalPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
      { '@type': 'ListItem', position: 2, name: 'Grievance Redressal', item: 'https://designient.com/grievance-redressal' },
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
              Grievance Redressal
            </h1>
            <p className="font-body text-lg mb-2" style={{ color: 'var(--text-secondary)' }}>
              Designient School of Masterminds · Operated by Designient Technologies Private Limited
            </p>
            <p className="font-body" style={{ color: 'var(--text-muted)' }}>
              Last updated: {LEGAL_LAST_UPDATED}
            </p>
          </div>

          <GrievanceRedressalPolicyContent />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/privacy-policy" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Privacy Policy
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <Link href="/terms-and-conditions" className="font-body text-[var(--color-primary)] underline hover:no-underline">
              Terms and Conditions
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
