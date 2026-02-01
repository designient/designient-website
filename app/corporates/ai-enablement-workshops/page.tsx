import type { Metadata } from 'next'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { StructuredData } from '../../../components/StructuredData'
import { AIEnablementContent } from '../../../components/corporates/AIEnablementContent'

export const metadata: Metadata = {
  title: 'AI Enablement & Workshops | Designient',
  description: 'Enable your team to use AI responsibly and effectively within real product workflows. Hands-on workshops for product teams.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/corporates/ai-enablement-workshops',
  },
}

export default function AIEnablementWorkshopsPage() {
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
        name: 'AI Enablement & Workshops',
        item: 'https://designient.com/corporates/ai-enablement-workshops',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are these workshops hands-on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our AI enablement workshops include hands-on exercises, live demonstrations, strategic frameworks, and real team use cases. We use a mixed delivery format combining multiple learning approaches.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you focus on real product use cases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We focus on practical, real-world applications of AI tools within actual product workflows. Our workshops include examples and case studies from real product team implementations.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which AI tools do you cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with practical AI tools including ChatGPT, MagicPattern, Replit, Bolt.new, and other tools relevant to product teams. The specific tools covered can be customized based on your team\'s needs.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is this suitable for non-design roles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our AI enablement workshops are designed for cross-functional product teams including Design, Product Management, and Development. Content can be tailored to different roles and responsibilities.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you address ethical and responsible AI usage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We emphasize responsible AI use, including ethics, data privacy, bias, accuracy, and real-world constraints. We address the limitations of AI tools in enterprise contexts.'
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, faqSchema]} />
      <Header />
      <main id="main-content" role="main">
        <AIEnablementContent />
      </main>
      <Footer />
    </div>
  )
}
