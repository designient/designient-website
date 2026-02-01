import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { CareersContent } from '../../components/careers/CareersContent'
import { CareersSchemas } from '../../components/careers/CareersSchemas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at Designient – We Are Hiring | UI/UX Design Education',
  description: 'Join Designient School of Masterminds. We are hiring UI/UX design mentors, curriculum specialists, and student success coordinators. Purpose-driven work, creative freedom, and direct impact on learners\' careers.',
  keywords: ['designient careers', 'UI UX design jobs', 'design mentor jobs', 'design education jobs', 'design curriculum jobs', 'design school hiring', 'UI UX teaching jobs', 'design mentor positions'],
  openGraph: {
    title: 'Careers at Designient – We Are Hiring | UI/UX Design Education',
    description: 'Join a team that\'s shaping the future of UI/UX education through mentorship, creativity, and real-world impact.',
    url: 'https://designient.com/careers',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Careers at Designient - We Are Hiring',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Designient – We Are Hiring | UI/UX Design Education',
    description: 'Join a team that\'s shaping the future of UI/UX education through mentorship, creativity, and real-world impact.',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://designient.com/careers',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CareersPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://designient.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Careers',
        item: 'https://designient.com/careers'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema]} />
      <Header />
      <main id="main-content" role="main">
        <CareersContent />
      </main>
      <Footer />
      <CareersSchemas />
    </div>
  )
}
