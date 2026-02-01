'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, CheckCircle, Users, Briefcase, Target, ArrowRight, Phone, BookOpen, Award, Calendar, Clock } from 'react-feather'
import Link from 'next/link'
import { CourseFAQ } from '../course/CourseFAQ'
import { CourseCTA } from '../course/CourseCTA'
import { proCourseBatchSchedule } from '../../data/batchSchedule'

const faqs = [
  {
    question: 'Is the UI/UX Design course available in Pune?',
    answer: 'Yes. The UI/UX Design Pro course is available in Pune.'
  },
  {
    question: 'Are weekday batches available in Pune?',
    answer: 'No. Pune currently offers weekend batches only.'
  },
  {
    question: 'Is this course suitable for professionals in Pune?',
    answer: 'Yes. The weekend format is ideal for working professionals.'
  }
]

export function PuneCityPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center pt-16 md:pt-20" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-6">
              <Link href="/" className="font-body text-sm hover:underline" style={{ color: '#6b7280' }}>
                Home
              </Link>
              <span className="font-body text-sm mx-2" style={{ color: '#6b7280' }}>›</span>
              <span className="font-body text-sm" style={{ color: '#8458B3' }}>UI/UX Design Course in Pune</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center">
              <h1
                className="font-display font-bold mb-6"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)'
                }}>
                UI/UX Design Course in Pune – Weekend Batch | Designient
              </h1>
              <p
                className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-8"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                }}>
                A weekend-focused UI/UX design course in Pune, built for working professionals and career switchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/ui-ux-design-pro#enroll"
                  className="inline-flex items-center gap-2 font-body font-bold px-8 py-4 rounded-full transition-transform hover:scale-105"
                  style={{
                    backgroundColor: '#8458B3',
                    color: 'white',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919353000320"
                  className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-white/50"
                  style={{
                    borderColor: '#8458B3',
                    color: '#8458B3',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pune – weekend batches */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#fceed1' }} aria-labelledby="pune-intro-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="pune-intro-heading"
              className="font-display font-bold mb-6"
              style={{ color: '#8458B3', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Pune
            </h2>
            <p className="font-body text-lg leading-relaxed mb-4" style={{ color: '#1a1a1a' }}>
              We support learners from Pune primarily through weekend batches.
            </p>
            <p className="font-body text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
              If you&apos;re based in Pune and balancing work with learning, our team can help you plan accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Why Learn UI/UX Design in Pune */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <MapPin className="w-8 h-8" style={{ color: '#8458B3', strokeWidth: 2.5 }} />
                </div>
                <h2
                  className="font-display font-bold"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3rem)'
                  }}>
                  Why Learn UI/UX Design in Pune
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none">
              <p
                className="font-body text-lg leading-relaxed mb-6"
                style={{ color: '#4a4a4a', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Pune has a strong IT, services, and startup ecosystem. As companies focus more on usability and product experience, UI/UX designers are in growing demand across industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UI/UX Design Pro Course Overview */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <BookOpen className="w-8 h-8" style={{ color: '#8458B3', strokeWidth: 2.5 }} />
                </div>
                <h2
                  className="font-display font-bold"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3rem)'
                  }}>
                  UI/UX Design Pro Course
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none">
              <p
                className="font-body text-lg leading-relaxed mb-6"
                style={{ color: '#4a4a4a', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                This program is part of Designient's <Link href="/ui-ux-design-pro" className="font-semibold underline" style={{ color: '#8458B3' }}>UI/UX Design Pro course</Link> — a 3-month intensive curriculum covering UX research, UI design, prototyping, and usability testing through hands-on projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Batch Availability in Pune */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Calendar className="w-8 h-8" style={{ color: '#8458B3', strokeWidth: 2.5 }} />
                </div>
                <h2
                  className="font-display font-bold"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3rem)'
                  }}>
                  Batch Availability in Pune
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto">
              <div className="p-8 rounded-xl text-center" style={{ backgroundColor: '#fee2e2' }}>
                <h3 className="font-display font-semibold mb-4 text-2xl" style={{ color: '#dc2626' }}>
                  Current Batch is Full
                </h3>
                <p className="font-body text-lg mb-4" style={{ color: '#991b1b' }}>
                  To maintain quality mentorship and personalised feedback, each batch is intentionally kept small.
                </p>
                <p className="font-body text-sm" style={{ color: '#991b1b' }}>
                  New batch dates will be announced soon. <Link href="/contact-us" className="underline font-semibold">Contact us</Link> to be notified when the next batch opens.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Course Is For */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Users className="w-8 h-8" style={{ color: '#8458B3', strokeWidth: 2.5 }} />
                </div>
                <h2
                  className="font-display font-bold"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3rem)'
                  }}>
                  Who This Course Is For
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6">
              {[
                'Working professionals in Pune',
                'Career switchers transitioning into UI/UX',
                'Designers and developers upgrading UX skills'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg"
                  style={{ backgroundColor: 'white' }}>
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Designient in Pune */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Award className="w-8 h-8" style={{ color: '#8458B3', strokeWidth: 2.5 }} />
                </div>
                <h2
                  className="font-display font-bold"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3rem)'
                  }}>
                  Why Designient in Pune
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Calendar, text: 'Weekend-friendly learning format' },
                { icon: Users, text: 'Mentor-led sessions with real feedback' },
                { icon: Target, text: 'Portfolio-focused outcomes' },
                { icon: Briefcase, text: 'Career and placement guidance included' }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-xl"
                    style={{ backgroundColor: '#FFF6E2' }}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: '#8458B3',
                        boxShadow: '0 2px 8px rgba(132, 88, 179, 0.3)'
                      }}>
                      <Icon className="w-6 h-6" style={{ color: 'white', strokeWidth: 2.5 }} />
                    </div>
                    <p className="font-body font-semibold" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                      {item.text}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Briefcase className="w-8 h-8" style={{ color: '#8458B3', strokeWidth: 2.5 }} />
                </div>
                <h2
                  className="font-display font-bold"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3rem)'
                  }}>
                  Placement Support
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none">
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: '#4a4a4a', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Learners receive portfolio reviews, interview preparation, resume support, and career mentoring to apply for UI/UX roles confidently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <CourseFAQ faqs={faqs} title="Frequently Asked Questions" />

      {/* Related Links */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center">
              <p className="font-body mb-6" style={{ color: '#6b7280', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                Learn more about Designient and our placement support:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/ui-ux-design-pro"
                  className="inline-flex items-center gap-2 font-body font-semibold px-6 py-3 rounded-full border-2 transition-colors hover:bg-purple-50"
                  style={{
                    borderColor: '#8458B3',
                    color: '#8458B3',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>
                  View Full Course Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 font-body font-semibold px-6 py-3 rounded-full border-2 transition-colors hover:bg-purple-50"
                  style={{
                    borderColor: '#8458B3',
                    color: '#8458B3',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>
                  About Designient
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/placements"
                  className="inline-flex items-center gap-2 font-body font-semibold px-6 py-3 rounded-full border-2 transition-colors hover:bg-purple-50"
                  style={{
                    borderColor: '#8458B3',
                    color: '#8458B3',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>
                  Placement Support
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CourseCTA
        courseName="UI/UX Design Pro"
        ctaText="Ready to learn UI/UX design in Pune?"
        secondaryText="Apply now to join the next weekend batch."
        cityName="Pune"
      />
    </>
  )
}
