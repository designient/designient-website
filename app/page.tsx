import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { StatsSection } from '../components/StatsSection'
import { WhySection } from '../components/WhySection'
import { NotForSection } from '../components/NotForSection'
import { CoursesSection } from '../components/CoursesSection'
import { AISection } from '../components/AISection'
import { HowLearningWorksSection } from '../components/HowLearningWorksSection'
import { PlacementPartnersSection } from '../components/PlacementPartnersSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { ComparisonSection } from '../components/ComparisonSection'
import { LocationsSection } from '../components/LocationsSection'
import { BlogPreviewSection } from '../components/BlogPreviewSection'
import { HomepageFAQSection } from '../components/HomepageFAQSection'
import { BrandClaritySection } from '../components/BrandClaritySection'
import { InquiryForm } from '../components/InquiryForm'
import { Footer } from '../components/Footer'
import { StructuredData } from '../components/StructuredData'
import blogsData from '../data/blogs.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI UX Design & AI Courses | Designient School of Masterminds',
  description: 'UI/UX design and AI courses. Small batches, live mentorship, real projects. 95% placement. Bangalore, Hyderabad, Pune.',
  keywords: ['UI UX design courses India', 'UI UX design course online India', 'AI automation course India', 'AI product design course India', 'UI UX design institute India', 'best UI UX design courses India 2026', 'design and AI courses India', 'UI UX design with placement India', 'small batch UI UX design course', 'live mentorship design course India'],
  openGraph: {
    title: 'UI UX Design & AI Courses | Designient School of Masterminds',
    description: 'UI/UX design and AI courses. Small batches, live mentorship, real projects. 95% placement. Bangalore, Hyderabad, Pune.',
    url: 'https://designient.com',
    images: [
      {
        url: '/favicon-designient.png',
        width: 192,
        height: 192,
        alt: 'Designient - UI/UX Design and AI Training',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI UX Design & AI Courses | Designient School of Masterminds',
    description: 'UI/UX design and AI courses. Small batches, live mentorship, real projects. 95% placement. Bangalore, Hyderabad, Pune.',
    images: ['/favicon-designient.png'],
  },
  alternates: {
    canonical: 'https://designient.com',
  },
}

export default function HomePage() {
  // Get latest blog posts for homepage preview
  const latestBlogPosts = blogsData
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      coverImage: post.coverImage,
      category: post.category,
      publishedDate: post.publishedDate,
      readingTime: post.readingTime
    }))

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': 'https://designient.com/#organization',
    name: 'Designient Technologies Private Limited',
    alternateName: 'Designient School of Masterminds',
    url: 'https://designient.com',
    logo: 'https://designient.com/designient-logo.svg',
    description: 'Designient School of Masterminds offers UI/UX design courses and AI automation training in India. Small batches, live mentorship, real projects, and 95% placement support across Bangalore, Hyderabad, and Pune.',
    foundingDate: '2018',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560001',
        addressCountry: 'IN',
        streetAddress: '148, Church St, Haridevpur, Ashok Nagar'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500034',
        addressCountry: 'IN',
        streetAddress: 'RENT A DESK, Road No. 36, Jubilee Hills'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411001',
        addressCountry: 'IN',
        streetAddress: '5th floor, SAI RADHE COMPLEX, Sangamvadi'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9353-000-320',
      contactType: 'Customer Service',
      email: 'hello@designient.com',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi']
    },
    sameAs: [
      'https://www.facebook.com/designient',
      'https://www.instagram.com/designient',
      'https://www.linkedin.com/company/designient',
      'https://twitter.com/designient'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'Offer',
      category: 'Education',
      availability: 'https://schema.org/InStock'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Designient Courses',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'UI UX Design Bootcamp', url: 'https://designient.com/ui-ux-design-bootcamp' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'UI UX Design Pro', url: 'https://designient.com/ui-ux-design-pro' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'UI UX Design Master', url: 'https://designient.com/ui-ux-design-master' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'AI Automation Accelerator', url: 'https://designient.com/ai-automation-accelerator' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'AI Product Design Course', url: 'https://designient.com/ai-product-design-course' } },
      ],
    }
  }

  return (
    <div className="min-h-screen bg-base font-sans text-primary">
      <StructuredData data={organizationSchema} />
      <Header />
      <main id="main-content" role="main">
        {/* SECTION 1: Hero */}
        <Hero />
        {/* SECTION 2: Quick Trust Strip */}
        <StatsSection />
        {/* SECTION 3: Why Choose Our UI/UX Design Course */}
        <WhySection />
        {/* SECTION C: Who This Is Not For */}
        <NotForSection />
        {/* SECTION 4: Our Courses */}
        <CoursesSection />
        {/* SECTION 5: AI Inside UI/UX */}
        <AISection />
        {/* SECTION 7: How Learning Works */}
        <HowLearningWorksSection />
        {/* SECTION 8: Placement & Career Outcomes */}
        <PlacementPartnersSection />
        {/* SECTION 9: Success Stories */}
        <TestimonialsSection />
        {/* SECTION 10: Why Designient */}
        <ComparisonSection />
        {/* SECTION 11: Visit Our Campuses */}
        <LocationsSection />
        {/* SECTION 12: Latest Insights (Optional) */}
        <BlogPreviewSection posts={latestBlogPosts} />
        {/* SECTION D: Homepage FAQ */}
        <HomepageFAQSection />
        {/* SECTION B: Brand & Entity Clarity */}
        <BrandClaritySection />
        {/* SECTION 13: Final CTA */}
        <InquiryForm />
      </main>
      <Footer />
    </div>
  )
}
