import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { AboutUsContent } from '../../components/about/AboutUsContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Designient School of Masterminds | UI/UX Design Training',
  description: 'Learn about Designient School of Masterminds - India\'s leading UI/UX design training institute. Hands-on training, industry mentors, portfolio building, and 95% placement rate. Founded in 2016, serving students globally.',
  keywords: ['about designient', 'UI/UX design school', 'design training institute', 'design education', 'designient school', 'UI/UX training Bangalore', 'design school India'],
  openGraph: {
    title: 'About Us - Designient School of Masterminds | UI/UX Design Training',
    description: 'Redefining UI/UX education for creative minds ready to turn passion into profession. Hands-on training, industry mentors, and career support.',
    url: 'https://designient.com/about-us',
    images: ['/favicon-designient.png'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://designient.com/about-us',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const aboutData = {
  story: {
    title: 'Our Story',
    content: 'Designient School of Masterminds was created for learners who want more than cookie-cutter courses. We believe UI/UX is about solving real problems, crafting rich experiences, and building careers that matter. Our mission is to train designers who are confident, creative, and job-ready from day one.'
  },
  whyChooseUs: {
    title: 'Why Choose Us',
    items: [
      'Hands-on UI/UX training with real projects',
      'Mentors with industry experience and world-class design portfolios',
      'Portfolio building that gets noticed by employers',
      'Personalised mentorship and career guidance',
      'Lifetime access to learning resources and community'
    ]
  },
  approach: {
    title: 'Our Approach',
    content: 'At Designient, learning is practice-first. You\'ll master user research, wireframes, visual design, prototyping and user testing with hands-on projects and real feedback loops.'
  },
  careerSupport: {
    title: 'Career Support & Job Placement',
    content: 'We empower learners to land design jobs with confidence by providing job placement assistance, portfolio reviews, interview coaching and industry connections.'
  },
  mission: {
    title: 'Mission',
    content: 'To provide the best UI/UX education at affordable prices for passionate students aiming to elevate their careers.'
  },
  visionValues: {
    title: 'Vision & Values',
    vision: 'To build the most student-centric design learning experience that serves eager minds across the globe.',
    values: [
      'Ethical Design',
      'Accessible Education',
      'Domain Mastery',
      'Empathy & Human-Centric Thinking',
      'Global Community Impact'
    ]
  },
  journey: {
    title: 'Our Journey',
    milestones: [
      { year: '2016', event: 'A Vision Was Born' },
      { year: '2018', event: 'Adobe Partnership Begins' },
      { year: '2020', event: 'Online Learning Started' },
      { year: '2021', event: '150+ Students Placed' },
      { year: '2023', event: 'New Hyderabad Office' },
      { year: '2024', event: 'Generative AI in Curriculum' },
      { year: '2025', event: 'Launch of Pune Branch' }
    ]
  }
}

export default function AboutUsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Designient School of Masterminds',
    alternateName: 'Designient',
    description: 'Redefining UI/UX education for creative minds ready to turn passion into profession. Hands-on training, industry mentors, and career support.',
    url: 'https://designient.com',
    logo: 'https://designient.com/designient-logo.svg',
    foundingDate: '2016',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9353000320',
      contactType: 'Customer Service',
      email: 'hello@designient.com'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: [
      'https://www.linkedin.com/company/designient',
      'https://www.facebook.com/designient',
      'https://www.instagram.com/designient'
    ]
  }

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
        name: 'About Us',
        item: 'https://designient.com/about-us'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[organizationSchema, breadcrumbSchema]} />
      <Header />
      <main id="main-content" role="main">
        <AboutUsContent aboutData={aboutData} />
      </main>
      <Footer />
    </div>
  )
}
