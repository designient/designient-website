import type { Metadata } from 'next'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { StructuredData } from '../../../components/StructuredData'
import { TrainingProgramsContent } from '../../../components/corporates/TrainingProgramsContent'

export const metadata: Metadata = {
  title: 'Corporate Training Programs | Designient',
  description: 'Customized training programs for product and design teams. Mentor-led, hands-on training designed around your team\'s goals, maturity, and workflows.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/corporates/training-programs',
  },
}

export default function TrainingProgramsPage() {
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
        name: 'Training Programs',
        item: 'https://designient.com/corporates/training-programs',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can training be customized to our tools and workflows?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All training programs are customized to your team\'s specific tools, workflows, and processes. We conduct a needs assessment to understand your current setup and tailor the program accordingly.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer onsite training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We offer onsite training at your office location, as well as live online training and hybrid delivery models. The format can be customized based on your team\'s preferences and location.'
        }
      },
      {
        '@type': 'Question',
        name: 'How senior are the mentors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mentors are experienced practitioners with years of industry experience. They are senior-level professionals who have worked on real-world product teams and bring practical, hands-on expertise to the training.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will our team receive certification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Skill-based certification is provided upon completion of the training program. Certificates recognize the skills and competencies developed during the program.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can programs be run for cross-functional teams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our training programs are designed to support cross-functional collaboration and can be customized for teams including Design, Product Management, and Development working together.'
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, faqSchema]} />
      <Header />
      <main id="main-content" role="main">
        <TrainingProgramsContent />
      </main>
      <Footer />
    </div>
  )
}
