'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Calendar } from 'react-feather';
import Link from 'next/link';
import { StructuredData } from './StructuredData';
import { proCourseBatchSchedule } from '../data/batchSchedule';

const courses = [
  {
    title: 'UI/UX Design Pro',
    duration: '3 Months',
    hours: '124 Hours',
    level: 'Beginner to Pro',
    description:
      'The complete foundation for your design career. Master Figma, design thinking, and prototyping with hands-on projects.',
    stats: {
      students: '200+',
      placement: '95%'
    },
    batchDates: {
      offline: {
        bengaluru: 'Mar 7, 2026',
        hyderabad: null,
        pune: null
      },
      online: {
        global: 'Mar 7, 2026'
      }
    },
    path: '/ui-ux-design-pro'
  },
  {
    title: 'UI/UX Design Bootcamp',
    duration: '30 Days',
    hours: '36 Hours',
    level: 'Intensive',
    description:
      'Fast-track your learning with our intensive daily bootcamp designed for beginners and career switchers.',
    stats: {
      students: '100+',
      placement: '85%'
    },
    batchDates: null,
    batchFull: true,
    path: '/ui-ux-design-bootcamp'
  },
  {
    title: 'UI/UX Design Master',
    duration: '6 Months',
    hours: '200+ Hours',
    level: 'Pro to Master',
    description:
      'Advanced specialization with diploma certification. Design systems, leadership, and advanced techniques.',
    stats: {
      students: '150+',
      placement: '92%'
    },
    batchDates: null,
    batchFull: true,
    comingSoon: false,
    path: '/ui-ux-design-master'
  },
  {
    title: 'Prompt Engineering Mastery',
    duration: '30 Days',
    hours: '40 Hours',
    level: 'Fast Track',
    description:
      'Master the art of prompt engineering for AI tools. Learn to create effective prompts for ChatGPT, Midjourney, and other AI platforms.',
    stats: {
      students: '80+',
      placement: '88%'
    },
    batchDates: {
      offline: null,
      online: {
        global: 'Mar 12, 2026',
        schedule: {
          days: 'Monday - Friday',
          time: '8:00 PM - 10:00 PM',
          type: 'Evening'
        }
      }
    },
    comingSoon: false,
    path: '/prompt-engineering-mastery'
  }];

export function CoursesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Course Schemas for SEO
  const courseSchemas = courses.map((course) => {
    const durationMatch = course.duration.match(/(\d+)/);
    const durationValue = durationMatch ? parseInt(durationMatch[1]) : 0;
    const durationUnit = course.duration.includes('Month') ? 'P' + durationValue + 'M' :
      course.duration.includes('Day') ? 'P' + durationValue + 'D' : 'P3M';

    return {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.title,
      description: course.description,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Designient Technologies Private Limited',
        url: 'https://designient.com'
      },
      courseCode: course.title.replace(/\s+/g, '-').toLowerCase(),
      educationalLevel: course.level,
      timeRequired: course.hours,
      coursePrerequisites: 'No prior design experience required',
      teaches: [
        'UI/UX Design',
        'Figma',
        'Design Thinking',
        'User Research',
        'Prototyping',
        'Design Systems'
      ],
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: `https://designient.com${course.path}`
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: course.stats.students.replace('+', '')
      }
    };
  });

  return (
    <section
      className="py-24 md:py-32"
      style={{
        backgroundColor: '#ffffff'
      }}>
      <StructuredData data={courseSchemas} />

      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.3
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="mb-16 md:mb-24">

          <h2
            className="font-display tracking-wide leading-tight mb-6 text-center"
            style={{
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>

            OUR COURSES
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-2xl mx-auto font-normal text-center"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>

            Choose the path that fits your career goals.
          </p>
        </motion.div>

        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => {
              return (
                <Link
                  key={`course-${index}`}
                  href={course.path || '/courses'}
                  onMouseEnter={() => !course.comingSoon && setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative cursor-pointer block"
                  style={{
                    opacity: course.comingSoon ? 0.6 : 1
                  }}>

                  <div className="relative p-6 sm:p-8 h-full flex flex-col rounded-2xl transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: '#ffffff', border: hoveredIndex === index ? '1px solid #8458B3' : '1px solid #e5e5e5' }}>
                    <motion.span
                      className="font-body inline-block px-3 py-1.5 rounded-full text-xs font-bold mb-4 self-start"
                      style={{
                        backgroundColor: '#f2d53c',
                        color: '#1a1a1a'
                      }}>

                      {course.level}
                    </motion.span>

                    <h3
                      className="font-display tracking-wide mb-3 leading-tight"
                      style={{
                        color: '#1a1a1a',
                        fontWeight: 600,
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)'
                      }}>

                      {course.title.toUpperCase()}
                    </h3>

                    <div
                      className="font-body flex items-center gap-4 sm:gap-6 text-xs sm:text-sm mb-4 flex-wrap"
                      style={{
                        color: '#4a4a4a'
                      }}>

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
                      className="font-body mb-5 leading-relaxed font-normal"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
                        lineHeight: '1.7'
                      }}>

                      {course.description}
                    </p>

                    {!course.comingSoon && (
                      <div className="space-y-4 mb-5 pt-4 border-t" style={{ borderColor: 'rgba(26, 26, 26, 0.1)' }}>
                        {/* Stats - Always Visible */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="font-display text-xl sm:text-2xl tracking-wide mb-1" style={{ color: '#1a1a1a' }}>
                              {course.stats.students}
                            </div>
                            <div className="font-body text-xs uppercase tracking-wider font-semibold" style={{ color: '#6a6a6a' }}>
                              Students
                            </div>
                          </div>
                          <div>
                            <div className="font-display text-xl sm:text-2xl tracking-wide mb-1" style={{ color: '#8458B3' }}>
                              {course.stats.placement}
                            </div>
                            <div className="font-body text-xs uppercase tracking-wider font-semibold" style={{ color: '#6a6a6a' }}>
                              Placement
                            </div>
                          </div>
                        </div>

                        {/* Batch Dates and Timings - Show detailed info for Pro course */}
                        {course.path === '/ui-ux-design-pro' ? (
                          <div className="space-y-2">
                            <div className="font-body text-xs uppercase tracking-wider font-bold mb-2" style={{ color: '#8458B3', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)' }}>
                              Upcoming Batches
                            </div>
                            <div className="space-y-2">
                              {/* Bangalore - Weekday Morning */}
                              {proCourseBatchSchedule.bangalore.weekday?.morning?.available && (
                                <div className="p-2 rounded" style={{ backgroundColor: 'rgba(132, 88, 179, 0.05)' }}>
                                  <div className="font-body text-xs font-semibold mb-1" style={{ color: '#1a1a1a', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)' }}>
                                    Bangalore - Weekday Morning
                                  </div>
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <Calendar className="w-3 h-3" style={{ color: '#8458B3' }} />
                                    <span className="font-body text-xs" style={{ color: '#4a4a4a', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)' }}>
                                      {proCourseBatchSchedule.bangalore.weekday.morning.startDate}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="w-3 h-3" style={{ color: '#8458B3' }} />
                                    <span className="font-body text-xs" style={{ color: '#4a4a4a', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)' }}>
                                      {proCourseBatchSchedule.bangalore.weekday.morning.days}, {proCourseBatchSchedule.bangalore.weekday.morning.time}
                                    </span>
                                  </div>
                                </div>
                              )}
                              {/* Bangalore - Weekend Morning */}
                              {proCourseBatchSchedule.bangalore.weekend?.morning?.available && (
                                <div className="p-2 rounded" style={{ backgroundColor: 'rgba(132, 88, 179, 0.05)' }}>
                                  <div className="font-body text-xs font-semibold mb-1" style={{ color: '#1a1a1a', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)' }}>
                                    Bangalore - Weekend Morning
                                  </div>
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <Calendar className="w-3 h-3" style={{ color: '#8458B3' }} />
                                    <span className="font-body text-xs" style={{ color: '#4a4a4a', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)' }}>
                                      {proCourseBatchSchedule.bangalore.weekend.morning.startDate}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="w-3 h-3" style={{ color: '#8458B3' }} />
                                    <span className="font-body text-xs" style={{ color: '#4a4a4a', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)' }}>
                                      {proCourseBatchSchedule.bangalore.weekend.morning.days}, {proCourseBatchSchedule.bangalore.weekend.morning.time}
                                    </span>
                                  </div>
                                </div>
                              )}
                              {/* Online - Same as Weekend Morning */}
                              {course.batchDates?.online?.global && proCourseBatchSchedule.bangalore.weekend?.morning?.available && (
                                <div className="p-2 rounded" style={{ backgroundColor: 'rgba(132, 88, 179, 0.05)' }}>
                                  <div className="font-body text-xs font-semibold mb-1" style={{ color: '#1a1a1a', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)' }}>
                                    Online (Global) - Morning
                                  </div>
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <Calendar className="w-3 h-3" style={{ color: '#8458B3' }} />
                                    <span className="font-body text-xs" style={{ color: '#4a4a4a', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)' }}>
                                      {course.batchDates?.online?.global}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="w-3 h-3" style={{ color: '#8458B3' }} />
                                    <span className="font-body text-xs" style={{ color: '#4a4a4a', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)' }}>
                                      {proCourseBatchSchedule.bangalore.weekend.morning.days}, {proCourseBatchSchedule.bangalore.weekend.morning.time}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : course.batchFull ? (
                          <div className="space-y-2">
                            <div className="font-body text-xs uppercase tracking-wider font-bold mb-2" style={{ color: '#dc2626', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)' }}>
                              Batch Status
                            </div>
                            <div className="p-2 rounded" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
                              <p className="font-body text-xs font-semibold" style={{ color: '#dc2626', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)' }}>
                                Current batch is full
                              </p>
                            </div>
                          </div>
                        ) : course.path === '/prompt-engineering-mastery' && course.batchDates?.online?.schedule ? (
                          <div className="space-y-2">
                            <div className="font-body text-xs uppercase tracking-wider font-bold mb-2" style={{ color: '#8458B3', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)' }}>
                              Upcoming Batches
                            </div>
                            <div className="p-2 rounded" style={{ backgroundColor: 'rgba(132, 88, 179, 0.05)' }}>
                              <div className="font-body text-xs font-semibold mb-1" style={{ color: '#1a1a1a', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)' }}>
                                Online - Weekday Evening
                              </div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <Calendar className="w-3 h-3" style={{ color: '#8458B3' }} />
                                <span className="font-body text-xs" style={{ color: '#4a4a4a', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)' }}>
                                  {course.batchDates.online.global}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-3 h-3" style={{ color: '#8458B3' }} />
                                <span className="font-body text-xs" style={{ color: '#4a4a4a', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)' }}>
                                  {course.batchDates.online.schedule.days}, {course.batchDates.online.schedule.time}
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : course.batchDates ? (
                          <div className="space-y-2">
                            <div className="font-body text-xs uppercase tracking-wider font-bold mb-2" style={{ color: '#8458B3', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)' }}>
                              Upcoming Batches
                            </div>
                            <div className="space-y-2">
                              {course.batchDates.offline?.bengaluru && (
                                <div>
                                  <div className="font-body text-xs font-semibold mb-1" style={{ color: '#1a1a1a', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)' }}>Bengaluru:</div>
                                  <div className="font-body text-xs" style={{ color: '#4a4a4a', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)', lineHeight: '1.6' }}>
                                    {course.batchDates.offline.bengaluru}
                                  </div>
                                </div>
                              )}
                              {course.batchDates.online?.global && (
                                <div>
                                  <div className="font-body text-xs font-semibold mb-1" style={{ color: '#1a1a1a', fontSize: 'clamp(0.75rem, 1.5vw, 0.8125rem)' }}>Online:</div>
                                  <div className="font-body text-xs" style={{ color: '#4a4a4a', fontSize: 'clamp(0.6875rem, 1.3vw, 0.75rem)', lineHeight: '1.6' }}>
                                    Global: {course.batchDates.online.global}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    )}

                    {course.comingSoon ? (
                      <span
                        className="font-body font-bold mt-auto"
                        style={{
                          color: '#1a1a1a'
                        }}>

                        Coming Soon
                      </span>
                    ) : (
                      <div className="font-body flex items-center gap-2 font-bold self-start group/btn min-h-[44px] mt-auto"
                        style={{
                          color: '#8458B3',
                          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                        }}>

                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>);

}