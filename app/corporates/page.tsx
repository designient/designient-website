import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import { CorporatesContent } from '../../components/corporates/CorporatesContent'

export const metadata: Metadata = {
  title: 'Corporate Training, AI Enablement & Design Consulting | Designient',
  description: 'Partner with Designient for corporate training, AI enablement, and design consulting. We work with mid-size product companies, enterprises, and growing teams to upskill talent and solve complex design challenges.',
  keywords: ['corporate training', 'AI enablement', 'design consulting', 'corporate UI UX training', 'enterprise design training', 'product team upskilling'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/corporates',
  },
  openGraph: {
    title: 'Corporate Training, AI Enablement & Design Consulting | Designient',
    description: 'Partner with Designient for corporate training, AI enablement, and design consulting.',
    url: 'https://designient.com/corporates',
    type: 'website',
  },
}

export default function CorporatesPage() {
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
        name: 'For Corporates',
        item: 'https://designient.com/corporates',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who are these services best suited for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our corporate services are best suited for mid-size product companies, large enterprises, startups, agencies, HR & L&D teams, and founders & CXOs looking to upskill their teams, enable AI adoption, or access design expertise.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you work with international teams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we work with teams globally. Our training programs can be delivered online, onsite, or in hybrid formats to accommodate international teams across different time zones.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can engagements be fully customized?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All our corporate engagements are customized to your team\'s needs, goals, maturity level, and workflows. We conduct a needs assessment before designing any program.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you sign NDAs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We can execute non-disclosure agreements to protect your sensitive information, business strategies, and proprietary data. NDAs are available on request.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do we get started?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can request a proposal or book a call through our contact form. We\'ll discuss your requirements, conduct a needs assessment, and propose a customized solution for your team.'
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, faqSchema]} />
      <Header />
      <main id="main-content" role="main">
        <CorporatesContent />
      </main>
      <Footer />
    </div>
  )
}

