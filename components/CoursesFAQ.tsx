'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'react-feather'
import Link from 'next/link'
import { StructuredData } from './StructuredData'
import { coursesHubFaqs } from '../data/coursesHubData'

function renderAnswer(question: string, answer: string) {
  if (question.includes('company enroll')) {
    return (
      <>
        {answer}{' '}
        <Link href="/corporates" className="underline hover:no-underline font-semibold" style={{ color: 'var(--color-primary)' }}>
          Submit a corporate inquiry →
        </Link>
      </>
    )
  }
  return answer
}

export function CoursesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: coursesHubFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-peach)' }}>
      <StructuredData data={faqSchema} />
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2
            className="font-display tracking-wide leading-tight mb-4"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            Questions About Choosing a Course
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {coursesHubFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="bg-card rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                borderLeft: openIndex === index ? '4px solid var(--color-primary)' : '4px solid transparent',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors min-h-[44px]"
                style={{
                  backgroundColor: openIndex === index ? 'var(--bg-warm)' : 'var(--bg-card)',
                }}
                aria-expanded={openIndex === index}
              >
                <span className="text-base md:text-lg font-semibold pr-4" style={{ color: 'var(--text-primary)' }}>
                  {faq.question}
                </span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.4 }}>
                  <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-sm md:text-base leading-[1.7]" style={{ color: 'var(--text-muted)' }}>
                        {renderAnswer(faq.question, faq.answer)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
