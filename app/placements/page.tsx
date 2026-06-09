import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { PlacementsContent } from '../../components/placements/PlacementsContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Placement and Career Outcomes | Designient',
  description:
    '95% placement rate. See where Design Track graduates get hired and what Designient\'s AI Track produces for professionals and freelancers.',
  keywords: ['UI UX design placement', 'design job placement', 'UI UX career support', 'design job assistance', 'UI UX interview coaching', 'design portfolio review', 'design job referrals'],
  openGraph: {
    title: 'UI/UX Design Placement Support & Career Outcomes | Designient',
    description: 'Bring your UI/UX skills to the job market with structured career support, interview readiness, and recruiter guidance.',
    url: 'https://designient.com/placements',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Placement Support & Career Outcomes | Designient',
    description: 'Bring your UI/UX skills to the job market with structured career support, interview readiness, and recruiter guidance.',
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
    <div className="min-h-screen bg-base font-sans text-primary">
      <StructuredData data={[breadcrumbSchema]} />
      <Header />
      <main id="main-content" role="main">
        <PlacementsContent />
      </main>
      <Footer />
    </div>
  )
}
