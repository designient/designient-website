import { Header } from '../../components/Header'
import { CoursesHero } from '../../components/CoursesHero'
import { CoursesTrackQualifier } from '../../components/CoursesTrackQualifier'
import { LearningPathVisualization } from '../../components/LearningPathVisualization'
import { AiTrackIcon, CoursesTrackSection, DesignTrackIcon } from '../../components/CoursesTrackSection'
import { DesignTrackComparisonTable, AiTrackComparisonTable } from '../../components/CourseComparisonTable'
import { CoursesFAQ } from '../../components/CoursesFAQ'
import { CoursesCTA } from '../../components/CoursesCTA'
import { PricingDetailsLink } from '../../components/PricingDetailsLink'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import {
  aiTrackHubCards,
  coursesHubItemListSchema,
  designTrackHubCards,
} from '../../data/coursesHubData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI UX Design & AI Courses — Compare All 5 | Designient',
  description:
    'Compare all 5 courses across two tracks — Design Track and AI Track. Find the right course for your goals.',
  keywords: [
    'UI UX design courses',
    'UI UX design courses India',
    'AI automation course India',
    'best UI UX design course India 2026',
    'UI UX design course comparison India',
    'AI product design course India',
    'design and AI courses India',
    'n8n automation course India',
  ],
  openGraph: {
    title: 'UI UX Design & AI Courses — Compare All 5 | Designient',
    description:
      'Compare all 5 courses across two tracks — Design Track and AI Track. Find the right course for your goals.',
    url: 'https://designient.com/courses',
    images: [
      {
        url: '/favicon-designient.png',
        width: 192,
        height: 192,
        alt: 'Designient Courses — UI UX Design and AI Tracks',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI UX Design & AI Courses — Compare All 5 | Designient',
    description:
      'Compare all 5 courses across two tracks — Design Track and AI Track. Find the right course for your goals.',
    images: ['/favicon-designient.png'],
  },
  alternates: {
    canonical: 'https://designient.com/courses',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CoursesPage() {
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
        name: 'Courses',
        item: 'https://designient.com/courses',
      },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Designient Courses',
    numberOfItems: coursesHubItemListSchema.length,
    itemListElement: coursesHubItemListSchema.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.name,
        description: course.description,
        url: course.url,
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Designient Technologies Private Limited',
          url: 'https://designient.com',
        },
        offers: {
          '@type': 'Offer',
          price: course.price,
          priceCurrency: course.priceCurrency,
          url: course.url,
        },
      },
    })),
  }

  return (
    <div className="min-h-screen bg-base font-sans text-primary">
      <StructuredData data={[breadcrumbSchema, itemListSchema]} />
      <Header />
      <CoursesHero />
      <CoursesTrackQualifier />
      <LearningPathVisualization />
      <CoursesTrackSection
        track="design"
        title="Design Track — Become a UI/UX Designer"
        badgeLabel="Design Track"
        badgeIcon={DesignTrackIcon}
        accentColor="var(--color-primary)"
        cards={designTrackHubCards}
      />
      <DesignTrackComparisonTable />
      <CoursesTrackSection
        track="ai"
        title="AI Track — Build AI Workflows and Design AI Products"
        badgeLabel="AI Track"
        badgeIcon={AiTrackIcon}
        accentColor="var(--color-highlight)"
        cards={aiTrackHubCards}
      />
      <AiTrackComparisonTable />
      <PricingDetailsLink />
      <CoursesCTA />
      <CoursesFAQ />
      <Footer />
    </div>
  )
}
