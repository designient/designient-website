'use client'

import { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Mail, ChevronDown, ChevronRight, ArrowRight, MapPin } from 'react-feather'
import { ContactFormWrapper } from './ContactFormWrapper'

const contactFaqs = [
  {
    id: 'faq-1',
    question: 'Do I need to book a demo before enrolling?',
    answer: 'You can request a demo or speak with our team before enrolling.',
  },
  {
    id: 'faq-2',
    question: 'Is counselling free?',
    answer: 'Yes. Our counselling sessions are free and informational.',
  },
  {
    id: 'faq-3',
    question: 'How can I verify a certificate?',
    answer: 'Certificates can be verified through our official verification page.',
  },
]

const helpfulLinks = [
  { name: 'UI/UX Design Pro', href: '/ui-ux-design-pro' },
  { name: 'Placements', href: '/placements' },
  { name: 'Careers', href: '/careers' },
  { name: 'FAQs', href: '/faqs' },
]

const cityContactBlocks = [
  {
    city: 'Hyderabad',
    href: '/ui-ux-design-course-in-hyderabad',
    text: 'Hyderabad is home to Designient’s core mentoring team. If you’re based in Hyderabad, you can connect with us for detailed counselling, batch schedules, and career guidance.',
  },
  {
    city: 'Bengaluru',
    href: '/ui-ux-design-course-in-bangalore',
    text: 'Learners from Bengaluru often reach out for weekday and weekend options. If you’re a working professional or student based in Bengaluru, our team can guide you on the right batch and learning path.',
  },
  {
    city: 'Pune',
    href: '/ui-ux-design-course-in-pune',
    text: 'We support learners from Pune primarily through weekend batches. If you’re based in Pune and balancing work with learning, our team can help you plan accordingly.',
  },
]

export function ContactUsContent() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  return (
    <>
      {/* Hero: H1 + subtext */}
      <section
        className="relative min-h-[40vh] flex items-center overflow-hidden"
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="contact-hero-heading"
      >
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl" style={{ backgroundColor: '#8458B3' }} />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full filter blur-3xl" style={{ backgroundColor: '#f2d53c' }} />
        </div>

        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-12 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 mb-6 text-sm" style={{ color: '#6b7280' }}>
              <Link href="/" className="font-body hover:underline" style={{ color: '#6b7280' }}>
                Home
              </Link>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              <span className="font-body" style={{ color: '#8458B3' }}>
                Contact Us
              </span>
            </nav>

            <h1
              id="contact-hero-heading"
              className="font-display font-bold text-center mb-4 md:mb-6 leading-[1.1]"
              style={{ color: '#1a1a1a', fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Contact Designient
            </h1>

            <p
              className="font-body text-center max-w-2xl mx-auto leading-relaxed"
              style={{ color: '#4a4a4a', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
            >
              Have a question about our UI/UX courses, placements, or careers? We&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'white' }}
        aria-labelledby="contact-form-heading"
      >
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2
              id="contact-form-heading"
              className="font-display font-bold text-center mb-8"
              style={{ color: '#1a1a1a', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
            >
              Contact Form
            </h2>
            <div className="rounded-2xl border-2 p-6 md:p-8" style={{ backgroundColor: '#FFF6E2', borderColor: '#f4e4c1' }}>
              <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center font-body text-slate-600">Loading form...</div>}>
                <ContactFormWrapper />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-8 md:py-10" style={{ backgroundColor: '#fceed1' }} aria-label="Response time">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="font-body text-base md:text-lg font-medium" style={{ color: '#1a1a1a' }}>
            We usually respond within 24 business hours.
          </p>
        </div>
      </section>

      {/* Alternate Contact Options */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'white' }}
        aria-labelledby="alternate-contact-heading"
      >
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <h2
            id="alternate-contact-heading"
            className="font-display font-bold text-center mb-10"
            style={{ color: '#1a1a1a', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
          >
            Alternate Contact Options
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 flex-shrink-0" style={{ color: '#8458B3' }} />
              <div>
                <span className="font-body text-sm font-semibold block mb-0.5" style={{ color: '#6b7280' }}>
                  Email
                </span>
                <a href="mailto:hello@designient.com" className="font-body font-medium hover:underline" style={{ color: '#8458B3' }}>
                  hello@designient.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 flex-shrink-0" style={{ color: '#8458B3' }} />
              <div>
                <span className="font-body text-sm font-semibold block mb-0.5" style={{ color: '#6b7280' }}>
                  Careers
                </span>
                <a href="mailto:careers@designient.com" className="font-body font-medium hover:underline" style={{ color: '#8458B3' }}>
                  careers@designient.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center font-body text-xs font-bold rounded" style={{ backgroundColor: '#f4e4c1', color: '#8458B3' }}>
                ✓
              </span>
              <div>
                <span className="font-body text-sm font-semibold block mb-0.5" style={{ color: '#6b7280' }}>
                  Certificate verification
                </span>
                <Link href="/verify" className="font-body font-medium hover:underline" style={{ color: '#8458B3' }}>
                  Verify a certificate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Presence */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="our-presence-heading"
      >
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <h2
            id="our-presence-heading"
            className="font-display font-bold text-center mb-6"
            style={{ color: '#1a1a1a', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
          >
            Our Presence
          </h2>
          <p className="font-body text-center max-w-2xl mx-auto leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.0625rem' }}>
            Designient operates across Hyderabad, Bengaluru, and Pune, serving learners across India and globally.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-medium" style={{ backgroundColor: '#f4e4c1', color: '#8458B3' }}>
              <MapPin className="w-4 h-4" />
              Hyderabad
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-medium" style={{ backgroundColor: '#f4e4c1', color: '#8458B3' }}>
              <MapPin className="w-4 h-4" />
              Bengaluru
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-medium" style={{ backgroundColor: '#f4e4c1', color: '#8458B3' }}>
              <MapPin className="w-4 h-4" />
              Pune
            </span>
          </div>
        </div>
      </section>

      {/* City-specific contact blocks */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'white' }}
        aria-labelledby="contact-by-city-heading"
      >
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <h2
            id="contact-by-city-heading"
            className="font-display font-bold text-center mb-10"
            style={{ color: '#1a1a1a', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
          >
            Reach out from your city
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {cityContactBlocks.map((block, index) => (
              <motion.div
                key={block.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="rounded-xl border-2 p-6 h-full flex flex-col"
                style={{ borderColor: '#f4e4c1', backgroundColor: '#FFF6E2' }}
              >
                <h3 className="font-display font-semibold mb-3" style={{ fontSize: '1.25rem', color: '#8458B3' }}>
                  {block.city}
                </h3>
                <p className="font-body text-sm leading-relaxed flex-1 mb-4" style={{ color: '#4a4a4a' }}>
                  {block.text}
                </p>
                <Link
                  href={block.href}
                  className="font-body text-sm font-semibold inline-flex items-center gap-1.5 hover:underline"
                  style={{ color: '#8458B3' }}
                >
                  Learn more about {block.city}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'white' }}
        aria-labelledby="helpful-links-heading"
      >
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <h2
            id="helpful-links-heading"
            className="font-display font-bold text-center mb-10"
            style={{ color: '#1a1a1a', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
          >
            Helpful Links
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-body font-semibold border-2 transition-all hover:scale-105 hover:shadow-md"
                style={{ backgroundColor: 'white', color: '#8458B3', borderColor: '#8458B3' }}
              >
                {link.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="contact-faq-heading"
      >
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <h2
            id="contact-faq-heading"
            className="font-display font-bold text-center mb-10"
            style={{ color: '#1a1a1a', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
          >
            Contact FAQs
          </h2>
          <ul className="max-w-2xl mx-auto space-y-2">
            {contactFaqs.map((faq) => {
              const isOpen = expandedFaq === faq.id
              return (
                <li key={faq.id}>
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    className="w-full text-left py-3 px-4 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2"
                    style={{
                      borderColor: isOpen ? '#8458B3' : '#e5e7eb',
                      backgroundColor: isOpen ? '#fceed1' : 'white',
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                  >
                    <span className="font-body font-semibold flex items-center justify-between gap-2" style={{ color: '#1a1a1a' }}>
                      {faq.question}
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        style={{ color: '#8458B3' }}
                      />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="font-body text-sm pt-2 pb-3 px-4 leading-relaxed" style={{ color: '#4a4a4a' }}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
