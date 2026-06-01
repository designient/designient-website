import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import {
  AIAutomationLiveBonuses,
  AIAutomationLiveFAQ,
  AIAutomationLiveFooterCTA,
  AIAutomationLiveHero,
  AIAutomationLiveRegistration,
  AIAutomationLiveUrgencyStrip,
  AIAutomationLiveValueStack,
  AIAutomationLiveWhatHappens,
  AIAutomationLiveWhoFor,
  AIAutomationLiveWhyFree,
} from '../../components/workshop/ai-automation-live/AIAutomationLivePageSections'
import { aiAutomationLiveSession } from '../../data/aiAutomationLivePageData'

export const metadata: Metadata = {
  title: 'AI Automation Live — Free 2-Hour Workshop | Designient',
  description:
    'Build a real AI automation workflow live in 2 hours. Free. Take the n8n workflow file home. Rs 29,993 in bonuses included. Monthly. Register now.',
  keywords: [
    'AI automation workshop free India',
    'free n8n workshop India',
    'free AI automation training India',
    'learn AI automation free India 2026',
    'free workflow automation workshop online',
    'n8n beginner workshop free',
    'free AI tools workshop India',
    'AI automation live session free',
    'free online automation workshop professionals India',
  ],
  openGraph: {
    title: 'AI Automation Live — Free 2-Hour Workshop | Designient',
    description:
      'Build a real AI automation workflow live in 2 hours. Free. n8n workflow file + Rs 29,993 in bonuses. Monthly on Zoom.',
    url: 'https://designient.com/ai-automation-live',
    images: [
      {
        url: '/favicon-designient.png',
        width: 192,
        height: 192,
        alt: 'AI Automation Live — free monthly n8n workshop | Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Live — Free 2-Hour Workshop | Designient',
    description: 'Build a real n8n automation live in 2 hours. Free workshop. Register now.',
    images: ['/favicon-designient.png'],
  },
  alternates: {
    canonical: 'https://designient.com/ai-automation-live',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AIAutomationLivePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
      { '@type': 'ListItem', position: 2, name: 'AI Automation Live', item: 'https://designient.com/ai-automation-live' },
    ],
  }

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'AI Automation Live',
    description:
      'Free monthly 2-hour online workshop. Build a real n8n automation from scratch — workflow file, templates, and recording included.',
    startDate: aiAutomationLiveSession.startDateISO,
    endDate: aiAutomationLiveSession.endDateISO,
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    isAccessibleForFree: true,
    location: {
      '@type': 'VirtualLocation',
      url: 'https://zoom.us',
    },
    organizer: {
      '@type': 'Organization',
      name: 'Designient School of Masterminds',
      url: 'https://designient.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://designient.com/ai-automation-live',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need an n8n account before the workshop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. You do not need any accounts set up to attend. A free n8n account is only needed if you deploy the workflow file after the session.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this actually free? What is the catch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is free with no obligation. You may hear about the AI Automation Accelerator at the end, but attending does not commit you to anything.',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-base font-sans text-primary">
      <StructuredData data={[breadcrumbSchema, eventSchema, faqSchema]} />
      <Header />
      <main id="main-content" role="main">
        <AIAutomationLiveUrgencyStrip />
        <AIAutomationLiveHero />
        <AIAutomationLiveWhatHappens />
        <AIAutomationLiveWhyFree />
        <AIAutomationLiveBonuses />
        <AIAutomationLiveValueStack />
        <AIAutomationLiveWhoFor />
        <AIAutomationLiveRegistration />
        <AIAutomationLiveFAQ />
        <AIAutomationLiveFooterCTA />
      </main>
      <Footer />
    </div>
  )
}
