import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { ApplyNowContent } from '../../components/apply/ApplyNowContent'

export const metadata: Metadata = {
  title: 'Apply Now - UI/UX Design Courses | Designient',
  description: 'Apply to Designient\'s UI/UX Design Pro or Bootcamp programs. Limited seats available. Mentor-led learning with personalized feedback. Applications are reviewed before confirmation.',
  keywords: ['apply design course', 'UI UX course application', 'design bootcamp application', 'design course enrollment', 'apply design school'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/apply-now',
  },
  openGraph: {
    title: 'Apply Now - UI/UX Design Courses | Designient',
    description: 'Apply to Designient\'s UI/UX Design Pro or Bootcamp programs. Limited seats available.',
    url: 'https://designient.com/apply-now',
    type: 'website',
  },
}

export default function ApplyNowPage() {
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
        name: 'Apply Now',
        item: 'https://designient.com/apply-now',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" role="main">
        <ApplyNowContent />
      </main>
      <Footer />
    </div>
  )
}
