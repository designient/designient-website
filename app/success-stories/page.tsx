import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { SuccessStoriesContent } from '../../components/success/SuccessStoriesContent'

export const metadata: Metadata = {
  title: 'Success Stories - Real Student Journeys | Designient',
  description: 'Real success stories from Designient students. Career switchers, fresh graduates, and working professionals share their journeys. Different backgrounds, one common outcome — confidence and clarity in design. Individual results may vary.',
  keywords: ['designient success stories', 'UI UX student testimonials', 'design course reviews', 'student success stories', 'designient reviews', 'UI UX design student outcomes', 'design course testimonials'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://designient.com/success-stories',
  },
  openGraph: {
    title: 'Success Stories - Real Student Journeys | Designient',
    description: 'Real success stories from Designient students. Career switchers, fresh graduates, and working professionals share their journeys.',
    url: 'https://designient.com/success-stories',
    type: 'website',
    siteName: 'Designient',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Designient Success Stories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Success Stories - Real Student Journeys | Designient',
    description: 'Real success stories from Designient students. Career switchers, fresh graduates, and working professionals share their journeys.',
    images: ['/og-image.webp'],
  },
}

export default function SuccessStoriesPage() {
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
        name: 'Success Stories',
        item: 'https://designient.com/success-stories',
      },
    ],
  }

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Success Stories - Real Student Journeys',
    description: 'Hear directly from learners who trusted Designient to guide their UI/UX journey. Real stories, real outcomes.',
    url: 'https://designient.com/success-stories',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Student Success Stories',
      description: 'Testimonials and success stories from Designient students',
    },
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, collectionPageSchema]} />
      <Header />
      <main id="main-content" role="main">
        <SuccessStoriesContent />
      </main>
      <Footer />
    </div>
  )
}
