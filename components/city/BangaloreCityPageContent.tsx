'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, CheckCircle, Users, Briefcase, Target, ArrowRight, Phone, Mail, ChevronDown, BookOpen, Award, TrendingUp, Clock, Calendar } from 'react-feather'
import Link from 'next/link'
import { CourseFAQ } from '../course/CourseFAQ'
import { CourseCTA } from '../course/CourseCTA'
import { proCourseBatchSchedule } from '../../data/batchSchedule'

const faqs = [
  {
    question: 'Is the UI/UX Design course available in Bangalore?',
    answer: 'Yes. Designient offers the UI/UX Design Pro course for learners in Bangalore.'
  },
  {
    question: 'Are weekday and weekend batches available in Bangalore?',
    answer: 'Yes. Bangalore offers both weekday and weekend batch options.'
  },
  {
    question: 'Is this course suitable for working professionals in Bangalore?',
    answer: 'Yes. Weekend batches are designed specifically for working professionals.'
  }
]

export function BangaloreCityPageContent() {
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
              <span className="font-body text-sm" style={{ color: '#8458B3' }}>UI/UX Design Course in Bangalore</span>
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
                UI/UX Design Course in Bangalore – Designient School of Masterminds
              </h1>
              <p
                className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-8"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                }}>
                Master UI/UX design with hands-on training, mentor-led learning, and placement support in Bangalore.
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

      {/* Bengaluru – learners reach out */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#fceed1' }} aria-labelledby="bengaluru-intro-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="bengaluru-intro-heading"
              className="font-display font-bold mb-6"
              style={{ color: '#8458B3', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Bengaluru
            </h2>
            <p className="font-body text-lg leading-relaxed mb-4" style={{ color: '#1a1a1a' }}>
              Learners from Bengaluru often reach out to us for weekday and weekend UI/UX batches.
            </p>
            <p className="font-body text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
              If you&apos;re a working professional or student based in Bengaluru, our team can guide you on the right batch and learning path.
            </p>
          </div>
        </div>
      </section>

      {/* Why Learn UI/UX Design in Bangalore */}
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
                  Why Learn UI/UX Design in Bangalore
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
                Bangalore is India's leading tech and startup hub. From SaaS and fintech to AI-driven products, companies here rely heavily on strong UI/UX design. Learning UI/UX in Bangalore gives you exposure to real product thinking, modern design workflows, and strong career opportunities.
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
                This city page is powered by our flagship <Link href="/ui-ux-design-pro" className="font-semibold underline" style={{ color: '#8458B3' }}>UI/UX Design Pro course</Link> — a 3-month intensive program designed to take you from fundamentals to portfolio-ready. The course focuses on user research, wireframing, UI design, prototyping, and usability testing through real-world projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Batch Availability in Bangalore */}
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
                  <Users className="w-8 h-8" style={{ color: '#8458B3', strokeWidth: 2.5 }} />
                </div>
                <h2
                  className="font-display font-bold"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3rem)'
                  }}>
                  Batch Availability in Bangalore
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6">
              {/* Weekday Batches */}
              {proCourseBatchSchedule.bangalore.weekday && (
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFF6E2' }}>
                  <h3 className="font-display font-semibold mb-4 text-xl" style={{ color: '#8458B3' }}>
                    Weekday Batches
                  </h3>
                  <div className="space-y-4 mb-4">
                    {/* Morning Batch - Available */}
                    {proCourseBatchSchedule.bangalore.weekday.morning?.available && (
                      <div className="p-4 rounded-lg border-2" style={{ backgroundColor: 'white', borderColor: '#8458B3' }}>
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-body font-semibold text-sm" style={{ color: '#8458B3' }}>Morning Batch</p>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#8458B3', color: 'white' }}>Available</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-3">
                            <Calendar className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                            <div>
                              <p className="font-body font-semibold text-xs mb-1" style={{ color: '#1a1a1a' }}>Start Date</p>
                              <p className="font-body text-sm" style={{ color: '#4a4a4a' }}>{proCourseBatchSchedule.bangalore.weekday.morning.startDate}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                            <div>
                              <p className="font-body font-semibold text-xs mb-1" style={{ color: '#1a1a1a' }}>Schedule</p>
                              <p className="font-body text-sm" style={{ color: '#4a4a4a' }}>{proCourseBatchSchedule.bangalore.weekday.morning.days}</p>
                              <p className="font-body text-sm" style={{ color: '#4a4a4a' }}>{proCourseBatchSchedule.bangalore.weekday.morning.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Evening Batch - Not Available */}
                    {proCourseBatchSchedule.bangalore.weekday.evening && (
                      <div className="p-4 rounded-lg border" style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb', opacity: 0.6 }}>
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-body font-semibold text-sm" style={{ color: '#6b7280' }}>Evening Batch</p>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#9ca3af', color: 'white' }}>Not Available</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-3">
                            <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#9ca3af' }} />
                            <div>
                              <p className="font-body font-semibold text-xs mb-1" style={{ color: '#6b7280' }}>Schedule</p>
                              <p className="font-body text-sm" style={{ color: '#9ca3af' }}>{proCourseBatchSchedule.bangalore.weekday.evening.days}</p>
                              <p className="font-body text-sm" style={{ color: '#9ca3af' }}>{proCourseBatchSchedule.bangalore.weekday.evening.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="font-body text-sm" style={{ color: '#6b7280' }}>
                    Perfect for students and career switchers who can commit to weekday learning schedules.
                  </p>
                </div>
              )}
              {/* Weekend Batches */}
              {proCourseBatchSchedule.bangalore.weekend && (
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFF6E2' }}>
                  <h3 className="font-display font-semibold mb-4 text-xl" style={{ color: '#8458B3' }}>
                    Weekend Batches
                  </h3>
                  <div className="space-y-4 mb-4">
                    {/* Morning Batch - Available */}
                    {proCourseBatchSchedule.bangalore.weekend.morning?.available && (
                      <div className="p-4 rounded-lg border-2" style={{ backgroundColor: 'white', borderColor: '#8458B3' }}>
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-body font-semibold text-sm" style={{ color: '#8458B3' }}>Morning Batch</p>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#8458B3', color: 'white' }}>Available</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-3">
                            <Calendar className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                            <div>
                              <p className="font-body font-semibold text-xs mb-1" style={{ color: '#1a1a1a' }}>Start Date</p>
                              <p className="font-body text-sm" style={{ color: '#4a4a4a' }}>{proCourseBatchSchedule.bangalore.weekend.morning.startDate}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                            <div>
                              <p className="font-body font-semibold text-xs mb-1" style={{ color: '#1a1a1a' }}>Schedule</p>
                              <p className="font-body text-sm" style={{ color: '#4a4a4a' }}>{proCourseBatchSchedule.bangalore.weekend.morning.days}</p>
                              <p className="font-body text-sm" style={{ color: '#4a4a4a' }}>{proCourseBatchSchedule.bangalore.weekend.morning.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="font-body text-sm" style={{ color: '#6b7280' }}>
                    Designed for working professionals who want to upskill without disrupting their work schedule.
                  </p>
                </div>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-center mt-8"
              style={{ color: '#6b7280', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
              All batches are small and mentor-led to ensure personalised feedback.
            </motion.p>
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
              className="grid md:grid-cols-2 gap-6">
              {[
                'Beginners starting a career in UI/UX design',
                'Career switchers from engineering, marketing, or non-design backgrounds',
                'Working professionals upgrading their design skills',
                'Creative thinkers looking for structured learning'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
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

      {/* Why Designient in Bangalore */}
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
                  Why Designient in Bangalore
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
                { icon: Users, text: 'Mentors with real product and UX experience' },
                { icon: Target, text: 'Project-based learning aligned with industry needs' },
                { icon: Briefcase, text: 'Strong focus on portfolio and interview readiness' },
                { icon: TrendingUp, text: 'Career and placement guidance included' }
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
                Learners receive resume support, portfolio reviews, mock interviews, and guidance on applying to UI/UX roles in Bangalore's startup and product ecosystem.
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
        ctaText="Ready to start your UI/UX career in Bangalore?"
        secondaryText="Apply now or speak with our counsellors."
        cityName="Bangalore"
      />
    </>
  )
}
