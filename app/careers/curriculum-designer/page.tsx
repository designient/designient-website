import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { StructuredData } from '../../../components/StructuredData'
import { CurriculumDesignerContent } from '../../../components/careers/CurriculumDesignerContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content & Curriculum Designer Job – Careers at Designient | Design Education',
  description: 'Join Designient as a Content & Curriculum Designer. Create, refine, and improve UI/UX learning content and curriculum structure. Remote position. Contract/Full-time. Apply now.',
  keywords: ['curriculum designer job', 'instructional designer job', 'design curriculum jobs', 'content designer position', 'curriculum specialist jobs', 'design education content jobs', 'UI UX curriculum jobs'],
  openGraph: {
    title: 'Content & Curriculum Designer Job – Careers at Designient',
    description: 'Create, refine, and improve UI/UX learning content and curriculum structure.',
    url: 'https://designient.com/careers/curriculum-designer',
    images: ['/favicon-designient.png'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://designient.com/careers/curriculum-designer',
  },
}

export default function CurriculumDesignerPage() {
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
        name: 'Content & Curriculum Designer',
        item: 'https://designient.com/careers/curriculum-designer'
      }
    ]
  }

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Content & Curriculum Specialist – UI/UX',
    description: 'Designient School of Masterminds is hiring a Content & Curriculum Specialist to create, refine, and improve UI/UX learning content and curriculum structure. This role focuses on curriculum development, content creation, and educational design.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Designient',
      value: 'CURRICULUM-SPECIALIST-001'
    },
    datePosted: '2026-01-01',
    employmentType: [
      'FULL_TIME',
      'CONTRACTOR'
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
    qualifications: '5+ years of UI/UX design experience with strong understanding of design education. Excellent writing and content creation skills.',
    responsibilities: 'Develop and update UI/UX course curriculum, create learning materials and assignments, research latest design trends, and ensure curriculum aligns with industry needs.',
    industry: 'Design Education',
    url: 'https://designient.com/careers/curriculum-designer',
    directApply: true
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, jobPostingSchema]} />
      <Header />
      <main id="main-content" role="main">
        <CurriculumDesignerContent />
      </main>
      <Footer />
    </div>
  )
}
