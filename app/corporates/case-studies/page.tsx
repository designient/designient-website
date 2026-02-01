import type { Metadata } from 'next'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { StructuredData } from '../../../components/StructuredData'
import { CaseStudiesContent } from '../../../components/corporates/CaseStudiesContent'

export const metadata: Metadata = {
  title: 'Corporate Partnerships & Case Studies | Designient',
  description: 'Real partnerships and outcome-focused results. Explore how we\'ve helped organizations upskill teams and solve design challenges.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/corporates/case-studies',
  },
}

export default function CaseStudiesPage() {
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
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Case Studies',
        item: 'https://designient.com/corporates/case-studies',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why are some case studies anonymized?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some case studies are anonymized to protect partner identities when required. We share learnings and outcomes while respecting confidentiality agreements and partner preferences.'
        }
      },
      {
        '@type': 'Question',
        name: 'What kind of results can we expect?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Results vary by team, context, and implementation. We highlight outcomes like improved usability, faster delivery cycles, better cross-team collaboration, and business impact, but we don\'t guarantee specific results or make exaggerated claims.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you share references on request?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We can share references from partners who have given permission. References are subject to partner availability and willingness to engage. Please contact us to discuss reference availability.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you work across industries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We work with organizations across various industries including Technology/SaaS, E-commerce, FinTech, Healthcare, Education, Media/Entertainment, Manufacturing, and Retail.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do we engage after reviewing case studies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can request a proposal or book a call through our contact form. We\'ll discuss your specific challenges, goals, and requirements, and propose a customized solution for your team.'
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, faqSchema]} />
      <Header />
      <main id="main-content" role="main">
        <CaseStudiesContent />
      </main>
      <Footer />
    </div>
  )
}
