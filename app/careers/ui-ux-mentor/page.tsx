import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { StructuredData } from '../../../components/StructuredData'
import { UIUXMentorRoleContent } from '../../../components/careers/UIUXMentorRoleContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Mentor Job – Careers at Designient | Design Education',
  description: 'Join Designient as a UI/UX Design Mentor. Guide students through hands-on projects, portfolio development, and design thinking. 3+ years experience required. Bangalore/Hyderabad locations. Apply now.',
  keywords: ['UI UX mentor job', 'UI UX teaching job India', 'design mentor position', 'UI UX instructor job', 'design education jobs Bangalore', 'UX mentor job Hyderabad', 'design teaching jobs'],
  openGraph: {
    title: 'UI/UX Design Mentor Job – Careers at Designient',
    description: 'Mentor aspiring designers. Share real-world UX knowledge. Help shape meaningful careers.',
    url: 'https://designient.com/careers/ui-ux-mentor',
    images: ['/og-image.webp'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://designient.com/careers/ui-ux-mentor',
  },
}

export default function UIUXMentorRolePage() {
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
        name: 'UI/UX Design Mentor',
        item: 'https://designient.com/careers/ui-ux-mentor'
      }
    ]
  }

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'UI/UX Design Mentor',
    description: 'Designient School of Masterminds is hiring UI/UX Design Mentors to guide students through hands-on projects, portfolio building, and career readiness. This role focuses on mentoring, feedback, and real-world UX guidance.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Designient',
      value: 'UIUX-MENTOR-001'
    },
    datePosted: '2026-01-01',
    employmentType: [
      'FULL_TIME',
      'PART_TIME'
    ],
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Designient School of Masterminds',
      sameAs: 'https://designient.com',
      logo: 'https://designient.com/wp-content/uploads/2023/01/designient-logo.png'
    },
    jobLocationType: 'HYBRID',
    jobLocation: [
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bangalore',
          addressRegion: 'KA',
          addressCountry: 'IN'
        }
      },
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hyderabad',
          addressRegion: 'TS',
          addressCountry: 'IN'
        }
      }
    ],
    qualifications: '3+ years of experience in UI/UX or Product Design. Strong portfolio and passion for mentoring.',
    responsibilities: 'Mentor students, review UX portfolios, guide design projects, and support career readiness.',
    industry: 'Design Education',
    url: 'https://designient.com/careers/ui-ux-mentor',
    directApply: true
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, jobPostingSchema]} />
      <Header />
      <main id="main-content" role="main">
        <UIUXMentorRoleContent />
      </main>
      <Footer />
    </div>
  )
}
