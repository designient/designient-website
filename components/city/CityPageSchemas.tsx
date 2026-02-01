'use client'

import React from 'react'
import { StructuredData } from '../StructuredData'

interface CityPageSchemasProps {
  cityName: string
  cityUrl: string
  isPune?: boolean
}

export function CityPageSchemas({ cityName, cityUrl, isPune = false }: CityPageSchemasProps) {
  // Course Schema for City Page
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'UI/UX Design Pro Course',
    description: 'A 3-month intensive UI/UX design course focused on hands-on learning, real-world projects, portfolio building, and career readiness for beginners and professionals.',
    provider: {
      '@type': 'Organization',
      name: 'Designient School of Masterminds',
      url: 'https://designient.com',
      logo: 'https://designient.com/wp-content/uploads/2023/01/designient-logo.png'
    },
    educationalCredentialAwarded: 'UI/UX Design Pro Certificate',
    timeRequired: 'P3M',
    courseMode: ['Online', 'Offline', 'Hybrid'],
    occupationalCredentialAwarded: 'UI/UX Designer',
    audience: {
      '@type': 'Audience',
      audienceType: ['Beginners', 'Career Switchers', 'Working Professionals']
    },
    teaches: [
      'User Experience Design',
      'User Interface Design',
      'UX Research',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
      'Portfolio Building'
    ],
    inLanguage: 'English',
    url: cityUrl
  }

  // FAQ Schema for City Page (City-Specific FAQs)
  const getCityFAQs = () => {
    if (cityName === 'Bangalore') {
      return [
        {
          '@type': 'Question',
          name: 'Is the UI/UX Design course available in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Designient offers the UI/UX Design Pro course for learners in Bangalore.'
          }
        },
        {
          '@type': 'Question',
          name: 'Are weekday and weekend batches available in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Bangalore offers both weekday and weekend batch options.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is this course suitable for working professionals in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Weekend batches are designed specifically for working professionals.'
          }
        }
      ]
    } else if (cityName === 'Hyderabad') {
      return [
        {
          '@type': 'Question',
          name: 'Does Designient offer UI/UX courses in Hyderabad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The UI/UX Design Pro course is available for learners in Hyderabad.'
          }
        },
        {
          '@type': 'Question',
          name: 'Are weekend batches available in Hyderabad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Both weekday and weekend batches are offered based on schedule.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is placement support provided for Hyderabad students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Placement and career support is included for all learners.'
          }
        }
      ]
    } else if (cityName === 'Pune') {
      return [
        {
          '@type': 'Question',
          name: 'Is the UI/UX Design course available in Pune?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The UI/UX Design Pro course is available in Pune.'
          }
        },
        {
          '@type': 'Question',
          name: 'Are weekday batches available in Pune?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Pune currently offers weekend batches only.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is this course suitable for professionals in Pune?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The weekend format is ideal for working professionals.'
          }
        }
      ]
    }
    return []
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getCityFAQs()
  }

  return <StructuredData data={[courseSchema, faqSchema]} />
}
