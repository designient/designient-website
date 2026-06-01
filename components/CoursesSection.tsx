'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users } from 'react-feather';
import Link from 'next/link';
import { StructuredData } from './StructuredData';
import { homepageAiTrackCards, homepageDesignTrackCards, type NavCourse } from '../data/homepageCatalog';
import { useCurrency } from '../contexts/CurrencyContext';

function CourseCardGrid({ courses }: { courses: NavCourse[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { getCoursePrice, isLoading } = useCurrency();

  return (
    <div className={`grid grid-cols-1 gap-6 ${courses.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
      {courses.map((course, index) => {
        const priceFrom = isLoading ? '…' : getCoursePrice(course.courseSlug).price;

        return (
        <Link
          key={course.path}
          href={course.path}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group relative cursor-pointer block"
        >
          <div
            className="relative p-6 sm:p-8 h-full flex flex-col rounded-2xl transition-all duration-300 hover:shadow-xl"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: hoveredIndex === index ? '1px solid var(--color-primary)' : '1px solid var(--border-default)',
            }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <motion.span
                className="font-body inline-block px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ backgroundColor: 'var(--color-highlight)', color: 'var(--text-on-accent)' }}
              >
                {course.level}
              </motion.span>
              {course.badge && (
                <span
                  className="font-body inline-block px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: 'var(--color-accent-muted)', color: 'var(--color-primary)' }}
                >
                  {course.badge}
                </span>
              )}
            </div>

            <h3
              className="font-display tracking-wide mb-3 leading-tight"
              style={{
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              }}
            >
              {course.title.toUpperCase()}
            </h3>

            <div className="font-body flex items-center gap-4 sm:gap-6 text-xs sm:text-sm mb-4 flex-wrap" style={{ color: 'var(--text-secondary)' }}>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 flex-shrink-0" />
                <span>{course.hours}</span>
              </div>
            </div>

            <p
              className="font-body mb-5 leading-relaxed font-normal flex-grow"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
                lineHeight: '1.7',
              }}
            >
              {course.description}
            </p>

            <p className="font-body font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Price from: {priceFrom}
            </p>

            <div
              className="font-body flex items-center gap-2 font-bold self-start group/btn min-h-[44px]"
              style={{ color: 'var(--color-primary)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
            >
              View Course
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
            </div>
          </div>
        </Link>
        );
      })}
    </div>
  );
}

export function CoursesSection() {
  const allCourses = [...homepageDesignTrackCards, ...homepageAiTrackCards];

  const courseSchemas = allCourses.map((course) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Designient Technologies Private Limited',
      url: 'https://designient.com',
    },
    educationalLevel: course.level,
    timeRequired: course.hours,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `https://designient.com${course.path}`,
    },
  }));

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-card)' }}>
      <StructuredData data={courseSchemas} />

      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2
            className="font-display tracking-wide leading-tight mb-6 text-center"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            Two Tracks. Five Courses. One Direction.
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal text-center"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6',
            }}
          >
            Choose the track that fits where you are going. Both tracks share the same fundamentals: small batches, live mentorship, real outcomes, and AI tools embedded throughout.
          </p>
        </motion.div>

        <div className="space-y-16">
          <div>
            <span
              className="font-body inline-block px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{ backgroundColor: 'var(--color-highlight)', color: 'var(--text-on-accent)' }}
            >
              Design Track — Become a UI/UX Designer
            </span>
            <CourseCardGrid courses={homepageDesignTrackCards} />
          </div>

          <div>
            <span
              className="font-body inline-block px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{ backgroundColor: 'var(--color-highlight)', color: 'var(--text-on-accent)' }}
            >
              AI Track — Build AI Workflows and Design AI Products
            </span>
            <CourseCardGrid courses={homepageAiTrackCards} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="font-body mb-4" style={{ color: 'var(--text-secondary)' }}>
            Not sure which course is right for you?
          </p>
          <Link
            href="/apply-now"
            className="inline-flex items-center gap-2 font-body font-bold transition-transform hover:scale-105"
            style={{ color: 'var(--color-primary)' }}
          >
            Book a free 15-minute consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
