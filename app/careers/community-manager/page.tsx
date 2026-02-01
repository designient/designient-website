import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { StructuredData } from '../../../components/StructuredData'
import { CommunityManagerContent } from '../../../components/careers/CommunityManagerContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Manager Job – Careers at Designient | Design Education',
  description: 'Join Designient as a Community Manager. Build and nurture a vibrant design community, organize events, and support student engagement. Remote/Hybrid position. Apply now.',
  keywords: ['community manager job', 'design community manager', 'community coordinator job', 'design education community jobs', 'community building jobs', 'student community manager', 'design school community jobs'],
  openGraph: {
    title: 'Community Manager Job – Careers at Designient',
    description: 'Build and nurture a vibrant design community. Organize events and support student engagement.',
    url: 'https://designient.com/careers/community-manager',
    images: ['/og-image.webp'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://designient.com/careers/community-manager',
  },
}

export default function CommunityManagerPage() {
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
        name: 'Community Manager',
        item: 'https://designient.com/careers/community-manager'
      }
    ]
  }

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Community Manager',
    description: 'Designient School of Masterminds is hiring a Community Manager to build and nurture a vibrant design community, organize events, and support student engagement. This role focuses on community building, event management, and student success.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Designient',
      value: 'COMMUNITY-MANAGER-001'
    },
    datePosted: '2026-01-01',
    employmentType: [
      'FULL_TIME'
    ],
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Designient School of Masterminds',
      sameAs: 'https://designient.com',
      logo: 'https://designient.com/wp-content/uploads/2023/01/designient-logo.png'
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
    qualifications: '2+ years of experience in community management or student support. Strong organizational and communication skills.',
    responsibilities: 'Build and maintain design community, organize networking events, support student engagement, and coordinate community activities.',
    industry: 'Design Education',
    url: 'https://designient.com/careers/community-manager',
    directApply: true
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, jobPostingSchema]} />
      <Header />
      <main id="main-content" role="main">
        <CommunityManagerContent />
      </main>
      <Footer />
    </div>
  )
}
