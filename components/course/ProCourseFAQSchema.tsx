'use client'

import React from 'react'
import { StructuredData } from '../StructuredData'

export function ProCourseFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What will I learn in this UI/UX course?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You\'ll learn the fundamentals of user experience and user interface design, from user research to prototyping and final visual design presentation on Behance and Medium. The course covers design thinking, Figma mastery, user research, wireframing, prototyping, and building a professional portfolio.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need any prior design experience?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No prior design experience is required. Our UI/UX Design Pro course is designed for complete beginners. We start from the fundamentals and gradually build up to advanced concepts.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is there hands-on experience involved?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our course emphasizes practical application with real-world projects and exercises to build your portfolio. You\'ll work on 4-5 live mock projects that will form a strong portfolio to showcase to potential employers and clients.'
        }
      },
      {
        '@type': 'Question',
        name: 'What tools will I learn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You\'ll master industry-standard tools including Figma (primary), Adobe Illustrator, prototyping tools, and design collaboration platforms. We also cover design system tools and handoff processes. We\'ll explore tools such as Figma, ProtoPie, AfterEffects and ChatGPT among others.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who are the mentors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mentors are industry professionals with years of experience in UI/UX, passionate about sharing their knowledge. They provide personalized mentorship and industry insights both during the course and even on the job.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will I have a portfolio by the end of this course?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Definitely! Throughout the course, you\'ll work on live mock projects that will form a strong portfolio to showcase to potential employers and clients. These projects include mobile apps, web applications, and design systems.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the class schedule?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Classes are conducted 3-4 times per week with flexible timing options. We offer both weekday and weekend batches. Each session is 2-3 hours long with breaks. We also provide recorded videos for students who cannot attend live sessions, and students can reach out to their mentors once a week live for clarifications and feedback.'
        }
      },
      {
        '@type': 'Question',
        name: 'How many students are in each batch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We maintain small batch sizes with a maximum of 10 students per batch. This ensures personalized attention and effective learning.'
        }
      },
      {
        '@type': 'Question',
        name: 'What kind of projects will I work on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You\'ll work on 4-5 real-world projects including mobile apps, web applications, and design systems. These projects will form your professional portfolio.'
        }
      },
      {
        '@type': 'Question',
        name: 'What\'s the difference between this course and other UI/UX courses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our course emphasizes practical experience with personalized mentorship providing industry insights, and a holistic approach to UX/UI design both during the course and even on the job which sets us apart. We maintain small batch sizes, offer lifetime access to resources, and have a 95% placement rate.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will I get a certificate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you\'ll receive an Adobe Certified certificate upon successful completion of the course, along with a portfolio of real-world projects.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is placement guaranteed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While we don\'t guarantee placements, we provide comprehensive placement assistance including resume building, portfolio review, interview preparation, and job referrals. Our 95% placement rate reflects our commitment to your success.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I pay in installments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer flexible payment plans. You can pay in 2-3 installments. Contact our admissions team for more details.'
        }
      }
    ]
  }

  return <StructuredData data={faqSchema} />
}
