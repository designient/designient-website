import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { PlacementsContent } from '../../components/placements/PlacementsContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Placement Support & Career Outcomes | Designient',
  description: 'Get placement support and career guidance for UI/UX design roles. 75%+ placement rate, portfolio reviews, interview coaching, and job referrals. Launch your design career with Designient.',
  keywords: ['UI UX design placement', 'design job placement', 'UI UX career support', 'design job assistance', 'UI UX interview coaching', 'design portfolio review', 'design job referrals'],
  openGraph: {
    title: 'UI/UX Design Placement Support & Career Outcomes | Designient',
    description: 'Bring your UI/UX skills to the job market with structured career support, interview readiness, and recruiter guidance.',
    url: 'https://designient.com/placements',
    images: [
      {
        url: '/favicon-designient.png',
        width: 192,
        height: 192,
        alt: 'Designient Placement Support - UI/UX Design Career Outcomes',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Placement Support & Career Outcomes | Designient',
    description: 'Bring your UI/UX skills to the job market with structured career support, interview readiness, and recruiter guidance.',
    images: ['/favicon-designient.png'],
  },
  alternates: {
    canonical: 'https://designient.com/placements',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PlacementsPage() {
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
        name: 'Placements',
        item: 'https://designient.com/placements'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema]} />
      <Header />
      <main id="main-content" role="main">
        <PlacementsContent />
      </main>
      <Footer />
    </div>
  )
}
