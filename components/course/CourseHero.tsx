'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Users, Monitor, TrendingUp, Star, Award, Calendar, ArrowRight } from 'react-feather';
import Link from 'next/link';
import { HeroTestimonials } from './HeroTestimonials';
import { UrgencyBanner } from './UrgencyBanner';

interface CourseHeroProps {
  title: string;
  subtitle: string;
  duration: string;
  hours: string;
  format: string;
  level: string;
  rating?: string;
  students?: string;
  badge?: string;
  upcomingBatch?: {
    startDate: string;
  } | null;
  batchFull?: boolean;
  courseSlug?: string;
  courseName?: string;
}

export function CourseHero({
  title,
  subtitle,
  duration,
  hours,
  format,
  level,
  rating = '4.8',
  students = '150+',
  badge,
  upcomingBatch,
  batchFull = false,
  courseSlug,
  courseName
}: CourseHeroProps) {
  const quickFacts = [
    { icon: Clock, label: duration },
    { icon: Users, label: hours },
    { icon: Monitor, label: format },
    { icon: TrendingUp, label: level }
  ];

  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 md:pt-24"
      style={{ backgroundColor: '#FFF6E2' }}>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl"
          style={{ backgroundColor: '#8458B3' }} />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full filter blur-3xl"
          style={{ backgroundColor: '#f2d53c' }} />
      </div>

      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-4xl mx-auto">
            
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-6 text-sm" style={{ color: '#6B7280' }}>
            <Link href="/" className="hover:underline" aria-label="Navigate to home page">Home</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <Link href="/courses" className="hover:underline" aria-label="Navigate to courses page">Courses</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span style={{ color: '#8458B3' }} aria-current="page">{title}</span>
          </div>

          {/* Badge */}
          {badge && (
            <div className="mb-4 flex justify-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ backgroundColor: '#f2d53c' }}>
                <Award className="w-4 h-4" style={{ color: '#1a1a1a' }} aria-hidden="true" />
                <span className="font-body font-bold text-xs uppercase tracking-wide" style={{ color: '#1a1a1a' }}>
                  {badge}
                </span>
              </div>
            </div>
          )}

          {/* Main heading */}
          <h1
            className="font-display mb-4 md:mb-6 leading-[1.1]"
            style={{
              color: '#1a1a1a',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)'
            }}>
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg mb-6 leading-[1.6] mx-auto"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              maxWidth: '800px'
            }}>
            {subtitle}
          </p>

            {/* Upcoming Batch Information or Batch Full */}
            {batchFull ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mb-8">
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 flex-shrink-0" style={{ color: '#8458B3' }} aria-hidden="true" />
                    <span className="font-body font-semibold text-sm md:text-base" style={{ color: '#1a1a1a' }}>
                      Current batch is full
                    </span>
                  </div>
                  <p
                    className="font-body text-xs"
                    style={{ color: '#6b7280', fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)' }}>
                    To maintain quality mentorship and personalised feedback, each batch is intentionally kept small. New batch dates will be announced soon. <Link href="/contact-us" className="underline font-semibold">Contact us</Link> to be notified when the next batch opens.
                  </p>
                </div>
              </motion.div>
            ) : upcomingBatch ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mb-8">
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 mb-3">
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Calendar className="w-5 h-5 flex-shrink-0" style={{ color: '#8458B3' }} aria-hidden="true" />
                      <span className="font-body font-semibold text-sm md:text-base whitespace-nowrap" style={{ color: '#1a1a1a' }}>
                        Next batch starts on {upcomingBatch.startDate}
                      </span>
                    </div>
                    <div className="hidden md:block h-4 w-px flex-shrink-0" style={{ backgroundColor: '#e5e7eb' }} />
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 text-xs md:text-sm" style={{ color: '#6b7280' }}>
                      <span className="whitespace-nowrap">Live mentor-led sessions</span>
                      <span className="hidden md:inline">•</span>
                      <span className="whitespace-nowrap">Limited to ~15 students</span>
                    </div>
                  </div>
                  <p
                    className="font-body text-xs"
                    style={{ color: '#6b7280', fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)' }}>
                    To maintain quality mentorship and personalised feedback, each batch is intentionally kept small. Admissions close once seats are filled.
                  </p>
                </div>
              </motion.div>
            ) : null}

          {/* Rating & Students */}
          <div className="flex items-center justify-center gap-6 mb-8" role="group" aria-label="Course statistics">
            <Link href="/success-stories" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#f2d53c' }} aria-hidden="true" />
                ))}
              </div>
              <span className="font-body font-semibold text-sm group-hover:underline" style={{ color: '#1a1a1a' }} aria-label={`${rating} out of 5 rating`}>
                {rating}/5
              </span>
            </Link>
            <div className="h-4 w-px" style={{ backgroundColor: '#e5e7eb' }} aria-hidden="true" />
            <Link href="/success-stories" className="font-body text-sm hover:underline transition-all" style={{ color: '#6b7280' }} aria-label={`${students} students enrolled`}>
              {students} Students — See their stories
            </Link>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm">
                <fact.icon className="w-6 h-6" style={{ color: '#8458B3' }} aria-hidden="true" />
                <span className="font-body text-xs font-medium text-center" style={{ color: '#4a4a4a' }}>
                  {fact.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Urgency Banner */}
          {!batchFull && upcomingBatch && (
            <UrgencyBanner 
              batchStartDate={upcomingBatch.startDate}
              seatsRemaining={8} // You can make this dynamic based on actual data
              showCountdown={true}
            />
          )}

          {/* Primary CTA Buttons */}
          {!batchFull && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <motion.button
                onClick={() => {
                  const element = document.getElementById('course-application-form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    // Fallback: navigate to apply-now page
                    window.location.href = '/apply-now';
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-body font-bold text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                style={{ backgroundColor: '#8458B3' }}
                aria-label="Apply Now - Scroll to application form">
                Apply Now - Limited Seats Available
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.button>
              <Link
                href={courseSlug ? `/${courseSlug}#pricing` : '#pricing'}
                className="px-8 py-4 rounded-lg font-body font-semibold border-2 hover:bg-gray-50 transition-all flex items-center gap-2"
                style={{ borderColor: '#8458B3', color: '#8458B3' }}
                aria-label="View pricing and schedule">
                View Pricing & Schedule
                <Calendar className="w-5 h-5" aria-hidden="true" />
              </Link>
            </motion.div>
          )}

          {/* Social Proof Testimonials */}
          {!batchFull && <HeroTestimonials />}
        </motion.div>
      </div>
    </section>
  );
}
