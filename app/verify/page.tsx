import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { VerifyCertificateForm } from '../../components/verify/VerifyCertificateForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verify Certificate – Designient School of Masterminds',
  description: 'Instantly verify digital certificates issued by Designient School of Masterminds. Enter your certificate details to verify authenticity and view your credential.',
  keywords: ['certificate verification', 'verify certificate', 'designient certificate', 'digital certificate', 'certificate validation', 'credential verification'],
  openGraph: {
    title: 'Verify Certificate – Designient School of Masterminds',
    description: 'Instantly verify digital certificates issued by Designient School of Masterminds.',
    url: 'https://designient.com/verify',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Designient Certificate Verification',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify Certificate – Designient School of Masterminds',
    description: 'Instantly verify digital certificates issued by Designient School of Masterminds.',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://designient.com/verify',
  },
}

export default function VerifyCertificatePage() {
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
        name: 'Verify Certificate',
        item: 'https://designient.com/verify',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can anyone verify a certificate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, anyone can verify a certificate issued by Designient School of Masterminds. Simply enter the certificate details on our verification page to confirm its authenticity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are certificates valid on LinkedIn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our certificates can be added to LinkedIn profiles. Active certificates include an "Add to LinkedIn" button that automatically populates the credential information.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my certificate is not found?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your certificate is not found, please double-check the certificate ID, course name, and year. If the issue persists, contact Designient support at hello@designient.com for assistance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can certificates expire or be revoked?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some certificates may have expiration dates for time-bound courses. Certificates can also be revoked in rare cases of misconduct. The certificate status will always be clearly displayed on the verification page.',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, faqSchema]} />
      <Header />
      <main id="main-content" role="main">
        <VerifyCertificateForm />
      </main>
      <Footer />
    </div>
  )
}
