import type { Metadata } from 'next'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { StructuredData } from '../../../components/StructuredData'
import { HiringConsultingContent } from '../../../components/corporates/HiringConsultingContent'

export const metadata: Metadata = {
  title: 'Hiring Support & Design Consulting | Designient',
  description: 'Talent access and design expertise on demand. Hiring support and consulting services for growing product teams.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/corporates/hiring-consulting',
  },
}

export default function HiringConsultingPage() {
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
        name: 'Hiring & Consulting',
        item: 'https://designient.com/corporates/hiring-consulting',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What kind of talent can we access?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide access to designers at various experience levels including freshers, interns, contract designers, and full-time placements. Talent availability varies, and we facilitate connections but do not guarantee specific candidates or hiring outcomes.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer contract or project-based support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We offer multiple engagement models including project-based engagements, retainer-based arrangements, advisory services, and flexible custom engagements tailored to your needs.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do you assess designers before recommending?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We evaluate designers based on their portfolio, skills, experience, and fit for your specific requirements. However, we don\'t guarantee specific candidates or hiring outcomes, as success depends on multiple factors including team fit and implementation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you support long-term partnerships?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We offer ongoing design partnerships and long-term consulting engagements. We can work with you on retainer-based models or flexible arrangements for sustained support.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are outcomes guaranteed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We don\'t guarantee specific hiring results, project outcomes, or business impact. Success depends on multiple factors including team fit, implementation, market conditions, and various factors beyond our control.'
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, faqSchema]} />
      <Header />
      <main id="main-content" role="main">
        <HiringConsultingContent />
      </main>
      <Footer />
    </div>
  )
}
