'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'react-feather';
import Link from 'next/link';
import { useCurrency } from '../contexts/CurrencyContext';
import { CurrencyToggle } from './CurrencyToggle';
import type { CoursePricingData } from '../data/coursePricing';

const courses: Array<{
  name: string;
  fullName: string;
  duration: string;
  hours: string;
  format: string;
  level: string;
  certification: string;
  courseSlug: keyof CoursePricingData;
  color: string;
  path: string;
}> = [
{
  name: 'Pro',
  fullName: 'UI/UX Design Pro',
  duration: '3 Months',
  hours: '124 Hours',
  format: 'Hybrid',
  level: 'Beginner-Inter.',
  certification: 'Adobe Certified',
  courseSlug: 'ui-ux-design-pro',
  color: '#8458B3',
  path: '/ui-ux-design-pro'
},
{
  name: 'Bootcamp',
  fullName: 'UI/UX Design Bootcamp',
  duration: '30 Days',
  hours: '36 Hours',
  format: 'Intensive',
  level: 'Beginner',
  certification: 'Certificate',
  courseSlug: 'ui-ux-design-bootcamp',
  color: '#8458B3',
  path: '/ui-ux-design-bootcamp'
},
{
  name: 'Master',
  fullName: 'UI/UX Design Master',
  duration: '6 Months',
  hours: '200+ Hours',
  format: 'Hybrid',
  level: 'Inter.-Advanced',
  certification: 'Diploma',
  courseSlug: 'ui-ux-design-master',
  color: '#8458B3',
  path: '/ui-ux-design-master'
},
{
  name: 'Prompt Engineering',
  fullName: 'Prompt Engineering Mastery',
  duration: '30 Days',
  hours: '40 Hours',
  format: 'Online',
  level: 'All Levels',
  certification: 'Certificate',
  courseSlug: 'prompt-engineering-mastery',
  color: '#8458B3',
  path: '/prompt-engineering-mastery'
}];

const features = [
{
  name: 'Duration',
  type: 'text'
},
{
  name: 'Total Hours',
  type: 'text'
},
{
  name: 'Format',
  type: 'text'
},
{
  name: 'Level',
  type: 'text'
},
{
  name: 'Certification',
  type: 'check'
},
{
  name: 'Price',
  type: 'price'
}];

export function CourseComparisonTable() {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const { getCoursePrice, isLoading } = useCurrency();
  
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-3 md:px-4">
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
          className="text-center mb-8">
          
          {/* Currency Toggle */}
          <div className="flex justify-center mb-6">
            <CurrencyToggle size="md" />
          </div>
        </motion.div>
        
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
          className="text-center mb-12">

          <h2
            className="font-display tracking-wide leading-tight mb-4"
            style={{
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>

            Find Your Perfect Course
          </h2>
          <p className="font-body text-sm mt-4 opacity-75 max-w-2xl mx-auto">
            Fees are displayed in INR for learners in India and USD for international learners. You can switch currency using the toggle above.
          </p>
        </motion.div>

        {/* Desktop Table */}
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
            delay: 0.2,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="hidden md:block overflow-x-auto rounded-xl"
          style={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>

          <table
            className="w-full"
            style={{
              borderCollapse: 'separate',
              borderSpacing: 0
            }}>

            <thead className="sticky top-0 z-10">
              <tr
                style={{
                  backgroundColor: '#8458B3'
                }}>

                <th
                  className="p-5 text-left font-bold border-b-2"
                  style={{
                    color: 'white',
                    borderColor: '#374151'
                  }}>

                  Feature
                </th>
                {courses.map((course, index) =>
                <th
                  key={index}
                  className="p-5 text-center font-bold border-b-2 transition-all duration-300"
                  style={{
                    color: 'white',
                    borderColor: '#374151',
                    backgroundColor:
                    hoveredColumn === index ?
                    'rgba(132, 88, 179, 0.3)' :
                    '#8458B3'
                  }}
                  onMouseEnter={() => setHoveredColumn(index)}
                  onMouseLeave={() => setHoveredColumn(null)}>

                    <div className="flex flex-col items-center gap-2">
                      <span className="text-xl">{course.name}</span>
                      <div
                      className="w-12 h-1 rounded-full"
                      style={{
                        backgroundColor: course.color
                      }} />

                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) =>
              <tr
                key={featureIndex}
                style={{
                  backgroundColor:
                  featureIndex % 2 === 0 ? 'white' : '#FAFAFA',
                  transition: 'background-color 0.3s ease'
                }}>

                  <td
                  className="p-5 font-semibold border-b"
                  style={{
                    color: '#4a4a4a',
                    borderColor: '#E5E7EB',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>

                    {feature.name}
                  </td>
                  {courses.map((course, courseIndex) =>
                <td
                  key={courseIndex}
                  className="p-5 text-center border-b transition-all duration-300"
                  style={{
                    color: '#1a1a1a',
                    borderColor: '#E5E7EB',
                    backgroundColor:
                    hoveredColumn === courseIndex ?
                    'rgba(132, 88, 179, 0.08)' :
                    'transparent'
                  }}
                  onMouseEnter={() => setHoveredColumn(courseIndex)}
                  onMouseLeave={() => setHoveredColumn(null)}>

                      {feature.type === 'check' ?
                  <div className="flex justify-center">
                          <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(132, 88, 179, 0.1)'
                      }}>

                            <Check
                        className="w-4 h-4"
                        style={{
                          color: '#8458B3'
                        }} />

                          </div>
                        </div> :
                  feature.type === 'price' ?
                  <span
                    className="font-bold text-lg"
                    style={{
                      color: '#8458B3'
                    }}>
                          {isLoading ? '...' : getCoursePrice(course.courseSlug).price}
                        </span> :

                  <span className="font-medium">
                          {feature.name === 'Duration' && course.duration}
                          {feature.name === 'Total Hours' && course.hours}
                          {feature.name === 'Format' && course.format}
                          {feature.name === 'Level' && course.level}
                        </span>
                  }
                    </td>
                )}
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {courses.map((course, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="rounded-xl overflow-hidden"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              border: `2px solid ${course.color}`
            }}>

              {/* Card Header */}
              <div
              className="p-6 text-center"
              style={{
                backgroundColor: course.color
              }}>

                <h3 className="font-display font-bold text-white mb-2" style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  {course.name}
                </h3>
                <p className="font-display text-3xl font-bold text-white">
                  {isLoading ? '...' : getCoursePrice(course.courseSlug).price}
                </p>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                {features.
              filter((f) => f.type !== 'price').
              map((feature, fIndex) =>
              <div
                key={fIndex}
                className="flex justify-between items-center pb-4 border-b"
                style={{
                  borderColor: '#E5E7EB'
                }}>

                      <span
                  className="font-semibold text-sm"
                  style={{
                    color: '#6b7280',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>

                        {feature.name}
                      </span>
                      {feature.type === 'check' ?
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(132, 88, 179, 0.1)'
                  }}>

                          <Check
                    className="w-4 h-4"
                    style={{
                      color: '#8458B3'
                    }} />

                        </div> :

                <span
                  className="font-medium text-sm"
                  style={{
                    color: '#1a1a1a'
                  }}>

                          {feature.name === 'Duration' && course.duration}
                          {feature.name === 'Total Hours' && course.hours}
                          {feature.name === 'Format' && course.format}
                          {feature.name === 'Level' && course.level}
                          {feature.name === 'Certification' &&
                  course.certification}
                        </span>
                }
                    </div>
              )}

                <Link
                  href={course.path}
                  className="w-full text-white font-body font-semibold mt-4 min-h-[44px] flex items-center justify-center gap-2 transition-transform hover:scale-105"
                  style={{
                    backgroundColor: course.color,
                    padding: '12px 28px',
                    borderRadius: '100px',
                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)'
                  }}>
                  View Course
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}