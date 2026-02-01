import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { ContactUsContent } from '../../components/contact/ContactUsContent'

export const metadata: Metadata = {
  title: 'Contact Us - Designient School of Masterminds | UI/UX Design Courses',
  description: 'Contact Designient for UI/UX course enquiries, placements, or careers. Have a question? We respond within 24 business hours. Hyderabad, Bengaluru, Pune.',
  keywords: ['contact designient', 'UI/UX course enquiry', 'design school contact', 'admissions enquiry', 'designient Hyderabad', 'designient Bangalore', 'designient Pune'],
  openGraph: {
    title: 'Contact Designient - UI/UX Design Courses',
    description: 'Have a question about our UI/UX courses, placements, or careers? We\'re here to help. We usually respond within 24 business hours.',
    url: 'https://designient.com/contact-us',
    siteName: 'Designient',
    type: 'website',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: 'Designient - UI/UX Design Training' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Designient - UI/UX Design Courses',
    description: 'Have a question about our UI/UX courses, placements, or careers? We\'re here to help.',
  },
  alternates: {
    canonical: 'https://designient.com/contact-us',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://designient.com/contact-us' },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Designient School of Masterminds',
  url: 'https://designient.com',
  logo: 'https://designient.com/assets/designient-logo.png',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9353000320',
      contactType: 'customer support',
      email: 'hello@designient.com',
      areaServed: 'IN',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'careers',
      email: 'careers@designient.com',
      areaServed: 'IN',
      availableLanguage: ['English'],
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to book a demo before enrolling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can request a demo or speak with our team before enrolling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is counselling free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our counselling sessions are free and informational.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I verify a certificate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Certificates can be verified through our official verification page.',
      },
    },
  ],
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={organizationSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main id="main-content" role="main" className="pt-24 md:pt-32">
        <ContactUsContent />
      </main>
      <Footer />
    </div>
  )
}
