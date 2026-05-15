import type { Metadata } from 'next'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { WhyDesignient } from '../components/sections/WhyDesignient'
import { CoursesOverview } from '../components/sections/CoursesOverview'
import { StatsBar } from '../components/sections/StatsBar'
import { Testimonials } from '../components/sections/Testimonials'
import { HomepageFAQ } from '../components/sections/HomepageFAQ'
import { CTASection } from '../components/sections/CTASection'
import { StructuredData } from '../components/StructuredData'

export const metadata: Metadata = {
  title: 'UI/UX Design Courses in India — Small Batches, Real Mentors | Designient',
  description:
    'Design careers built by masters, not machines. Small-batch mentorship, AI-integrated curriculum, 95% placement rate. Adobe certified UI/UX courses in Bangalore, Hyderabad & Pune.',
  keywords: [
    'UI/UX design course',
    'UX design training',
    'design bootcamp India',
    'Figma course Bangalore',
    'Adobe certified design course',
    'AI design course',
  ],
  openGraph: {
    title: 'Designient — Design careers built by masters, not machines.',
    description:
      'Small-batch mentorship. AI-integrated curriculum. 95% placement rate. Adobe certified.',
    url: 'https://designient.com',
    images: [{ url: '/favicon-designient.png', width: 512, height: 512, alt: 'Designient' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Designient — School of Masterminds',
    description:
      'Design careers built by masters, not machines. Small batches, real mentors, 95% placed.',
  },
  alternates: { canonical: 'https://designient.com' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://designient.com/#organization',
  name: 'Designient School of Masterminds',
  alternateName: 'Designient Technologies Private Limited',
  url: 'https://designient.com',
  logo: 'https://designient.com/designient-logo.svg',
  description:
    "India's leading boutique UI/UX design school. Small-batch mentorship, AI-integrated curriculum, 95% placement rate. Adobe certified courses in Bangalore, Hyderabad & Pune.",
  foundingDate: '2018',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '148, Church St, Haridevpur, Ashok Nagar',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560001',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'RENT A DESK, Road No. 36, Jubilee Hills',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500034',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '5th floor, SAI RADHE COMPLEX, Sangamvadi',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411001',
      addressCountry: 'IN',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9353-000-320',
    contactType: 'Customer Service',
    email: 'hello@designient.com',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
  sameAs: [
    'https://www.facebook.com/designient',
    'https://www.instagram.com/designient',
    'https://www.linkedin.com/company/designient',
    'https://twitter.com/designient',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-void">
      <StructuredData data={organizationSchema} />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <WhyDesignient />
        <CoursesOverview />
        <StatsBar />
        <Testimonials />
        <HomepageFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
