import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { StructuredData } from '../../../components/StructuredData'
import { StudentSuccessCoordinatorContent } from '../../../components/careers/StudentSuccessCoordinatorContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community & Student Success Coordinator Job – Careers at Designient | Design Education',
  description: 'Join Designient as a Community & Student Success Coordinator. Support students throughout their learning journey and help build a strong design community. Remote/Hybrid position. Apply now.',
  keywords: ['student success coordinator job', 'community manager job', 'design education jobs', 'student support jobs', 'community coordinator position', 'education coordinator jobs', 'student success jobs'],
  openGraph: {
    title: 'Community & Student Success Coordinator Job – Careers at Designient',
    description: 'Support students throughout their learning journey and help build a strong design community.',
    url: 'https://designient.com/careers/student-success-coordinator',
    images: ['/favicon-designient.png'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://designient.com/careers/student-success-coordinator',
  },
}

export default function StudentSuccessCoordinatorPage() {
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
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Community & Student Success Coordinator',
        item: 'https://designient.com/careers/student-success-coordinator'
      }
    ]
  }

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Community & Student Success Coordinator',
    description: 'Designient School of Masterminds is hiring a Community & Student Success Coordinator to support students throughout their learning journey and help build a strong design community. This role focuses on student support, community building, and success outcomes.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Designient',
      value: 'STUDENT-SUCCESS-001'
    },
    datePosted: '2026-01-01',
    employmentType: [
      'FULL_TIME'
    ],
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Designient School of Masterminds',
      sameAs: 'https://designient.com',
      logo: 'https://designient.com/designient-logo.svg'
    },
    jobLocationType: 'REMOTE',
    jobLocation: [
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Remote',
          addressCountry: 'IN'
        }
      }
    ],
    qualifications: '2+ years of experience in student support or community management. Strong organizational and communication skills.',
    responsibilities: 'Monitor student progress, organize community events, coordinate between mentors and students, and build a vibrant design community.',
    industry: 'Design Education',
    url: 'https://designient.com/careers/student-success-coordinator',
    directApply: true
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, jobPostingSchema]} />
      <Header />
      <main id="main-content" role="main">
        <StudentSuccessCoordinatorContent />
      </main>
      <Footer />
    </div>
  )
}
