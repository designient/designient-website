import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import {
  AIProductDesignLiveBonuses,
  AIProductDesignLiveFAQ,
  AIProductDesignLiveFooterCTA,
  AIProductDesignLiveHero,
  AIProductDesignLiveRegistration,
  AIProductDesignLiveUrgencyStrip,
  AIProductDesignLiveValueStack,
  AIProductDesignLiveWhatHappens,
  AIProductDesignLiveWhoFor,
  AIProductDesignLiveWhyFree,
} from '../../components/workshop/ai-product-design-live/AIProductDesignLivePageSections'
import { aiProductDesignLiveSession } from '../../data/aiProductDesignLivePageData'

export const metadata: Metadata = {
  title: 'AI Product Design Live — Free 2-Hour Workshop | Designient',
  description:
    'Audit and redesign a real AI product live in 2 hours. Free. Take the Figma file home. Rs 25,994 in bonuses. Monthly. For designers, PMs, and UX writers.',
  keywords: [
    'AI product design workshop free India',
    'free AI UX design workshop India',
    'trust UI design workshop free',
    'AI product design free session India',
    'free Figma AI design workshop online India',
    'AI error state design workshop',
    'free AI product design training India 2026',
    'designing AI products workshop free',
    'AI behaviour design free workshop',
  ],
  openGraph: {
    title: 'AI Product Design Live — Free 2-Hour Workshop | Designient',
    description:
      'Audit and redesign a real AI product live in 2 hours. Free Figma file + Rs 25,994 in bonuses. Monthly on Zoom.',
    url: 'https://designient.com/ai-product-design-live',
    images: [
      {
        url: '/favicon-designient.png',
        width: 192,
        height: 192,
        alt: 'AI Product Design Live — free monthly Figma workshop | Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Product Design Live — Free 2-Hour Workshop | Designient',
    description: 'Audit and redesign a real AI product live in 2 hours. Free for designers, PMs, and UX writers.',
    images: ['/favicon-designient.png'],
  },
  alternates: {
    canonical: 'https://designient.com/ai-product-design-live',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AIProductDesignLivePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
      { '@type': 'ListItem', position: 2, name: 'AI Product Design Live', item: 'https://designient.com/ai-product-design-live' },
    ],
  }

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'AI Product Design Live',
    description:
      'Free monthly 2-hour online workshop. Audit a real AI product and redesign its worst trust failure live in Figma — file, checklist, and teardowns included.',
    startDate: aiProductDesignLiveSession.startDateISO,
    endDate: aiProductDesignLiveSession.endDateISO,
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
      url: 'https://designient.com/ai-product-design-live',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need Figma before the workshop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. A free Figma account is only needed if you want to inspect the bonus file after the session.',
        },
      },
      {
        '@type': 'Question',
        name: 'I am a PM, not a designer. Is this relevant for me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — the audit and redesign methodology applies to how you brief design work and define AI feature requirements.',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-base font-sans text-primary">
      <StructuredData data={[breadcrumbSchema, eventSchema, faqSchema]} />
      <Header />
      <main id="main-content" role="main">
        <AIProductDesignLiveUrgencyStrip />
        <AIProductDesignLiveHero />
        <AIProductDesignLiveWhatHappens />
        <AIProductDesignLiveWhyFree />
        <AIProductDesignLiveBonuses />
        <AIProductDesignLiveValueStack />
        <AIProductDesignLiveWhoFor />
        <AIProductDesignLiveRegistration />
        <AIProductDesignLiveFAQ />
        <AIProductDesignLiveFooterCTA />
      </main>
      <Footer />
    </div>
  )
}
