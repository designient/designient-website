'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'react-feather'

interface FAQ {
  question: string
  answer: string
}

interface CorporateFAQSectionProps {
  faqs: FAQ[]
  title?: string
}

export function CorporateFAQSection({ faqs, title = 'Frequently Asked Questions' }: CorporateFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8" style={{ color: '#8458B3' }} />
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              {title}
            </h2>
          </div>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl border-2 overflow-hidden transition-shadow hover:shadow-lg"
              style={{ borderColor: '#e5e7eb' }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2 rounded-xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}>
                <h3 className="font-display font-semibold pr-4" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  style={{ color: '#8458B3' }}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-6 pb-5">
                  <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
