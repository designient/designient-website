'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Users,
  Monitor,
  TrendingUp,
  Check,
  ChevronDown,
  ArrowRight } from
'react-feather';
import Link from 'next/link';
import { useCurrency } from '../contexts/CurrencyContext';
import type { CoursePricingData } from '../data/coursePricing';

interface CourseDetailProps {
  name: string;
  duration: string;
  hours: string;
  format: string;
  level: string;
  modules: {
    title: string;
    topics: string[];
  }[];
  whoShouldTake: string;
  benefits: string[];
  courseSlug: keyof CoursePricingData;
  imagePosition: 'left' | 'right';
  backgroundColor?: string;
  coursePath?: string;
}
export function CourseDetailSection({
  name,
  duration,
  hours,
  format,
  level,
  modules,
  whoShouldTake,
  benefits,
  courseSlug,
  imagePosition,
  backgroundColor = 'white',
  coursePath
}: CourseDetailProps) {
  
  // Generate course path from name if not provided
  const getCoursePath = () => {
    if (coursePath) return coursePath;
    const pathMap: { [key: string]: string } = {
      'UI/UX Design Pro': '/ui-ux-design-pro',
      'UI/UX Design Bootcamp': '/ui-ux-design-bootcamp',
      'UI/UX Design Master': '/ui-ux-design-master',
      'Prompt Engineering Mastery': '/prompt-engineering-mastery'
    };
    return pathMap[name] || '/courses';
  };
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  const { getCoursePrice, isLoading } = useCurrency();
  const pricing = isLoading ? { price: '...', originalPrice: undefined } : getCoursePrice(courseSlug);
  const toggleModule = (index: number) => {
    setExpandedModules((prev) =>
    prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const quickFacts = [
  {
    icon: Clock,
    label: duration
  },
  {
    icon: Users,
    label: hours
  },
  {
    icon: Monitor,
    label: format
  },
  {
    icon: TrendingUp,
    label: level
  }];

  const contentColumn =
  <motion.div
    initial={{
      opacity: 0,
      x: imagePosition === 'left' ? 30 : -30
    }}
    whileInView={{
      opacity: 1,
      x: 0
    }}
    viewport={{
      once: true,
      amount: 0.3
    }}
    transition={{
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }}>

      <h3
      className="font-display tracking-wide mb-6"
      style={{
        color: '#1a1a1a',
        fontWeight: 600,
        fontSize: 'clamp(1.5rem, 3vw, 2.25rem)'
      }}>

        {name}
      </h3>

      {/* Quick Facts Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {quickFacts.map((fact, index) =>
      <div
        key={index}
        className="flex items-center gap-3 p-3 rounded-lg"
        style={{
          backgroundColor:
          backgroundColor === 'white' ? '#FFFBF9' : 'white'
        }}>

            <fact.icon
          className="w-5 h-5"
          style={{
            color: '#8458B3'
          }} />

            <span
            className="font-body text-sm font-medium"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
            }}>

              {fact.label}
            </span>
          </div>
      )}
      </div>

      {/* Modules */}
      <div className="mb-8">
        <h4
        className="font-display font-bold mb-4"
        style={{
          color: '#8458B3',
          fontWeight: 600,
          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)'
        }}>

          What You&apos;ll Learn
        </h4>
        <div className="space-y-3">
          {modules.map((module, index) =>
        <div
          key={index}
          className="rounded-lg overflow-hidden transition-all duration-300"
          style={{
            backgroundColor:
            backgroundColor === 'white' ? '#FFF6E2' : 'white',
            borderLeft: expandedModules.includes(index) ?
            '4px solid #8458B3' :
            '4px solid transparent',
            boxShadow: expandedModules.includes(index) ?
            '0 2px 8px rgba(0, 0, 0, 0.08)' :
            'none'
          }}>

              <button
            onClick={() => toggleModule(index)}
            className="w-full flex items-center justify-between p-4 text-left transition-colors">

                <span
            className="font-body font-semibold text-sm md:text-base"
            style={{
              color: '#1a1a1a',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)'
            }}>

                  {module.title}
                </span>
                <motion.div
              animate={{
                rotate: expandedModules.includes(index) ? 180 : 0
              }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}>

                  <ChevronDown
                className="w-5 h-5"
                style={{
                  color: '#8458B3'
                }} />

                </motion.div>
              </button>

              <AnimatePresence>
                {expandedModules.includes(index) &&
            <motion.div
              initial={{
                height: 0,
                opacity: 0
              }}
              animate={{
                height: 'auto',
                opacity: 1
              }}
              exit={{
                height: 0,
                opacity: 0
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="overflow-hidden">

                    <div className="px-4 pb-4">
                      <ul className="space-y-2">
                        {module.topics.map((topic, tIndex) =>
                  <motion.li
                    key={tIndex}
                    initial={{
                      opacity: 0,
                      x: -10
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    transition={{
                      delay: tIndex * 0.05,
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="flex items-start gap-2 text-sm"
                    style={{
                      color: '#4B5563'
                    }}>

                            <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{
                        color: '#8458B3'
                      }} />

                            {topic}
                          </motion.li>
                  )}
                      </ul>
                    </div>
                  </motion.div>
            }
              </AnimatePresence>
            </div>
        )}
        </div>
      </div>

      {/* Who Should Take It */}
      <div className="mb-8">
        <h4
        className="font-display font-bold mb-3"
        style={{
          color: '#1a1a1a',
          fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
        }}>

          Who Should Take It
        </h4>
        <p
        className="font-body text-sm md:text-base leading-[1.7]"
        style={{
          color: '#4a4a4a',
          fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)'
        }}>

          {whoShouldTake}
        </p>
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((benefit, index) =>
        <div key={index} className="flex items-start gap-2">
              <Check
            className="w-5 h-5 mt-0.5 flex-shrink-0"
            style={{
              color: '#8458B3'
            }} />

              <span
            className="font-body text-sm md:text-base"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)'
            }}>

                {benefit}
              </span>
            </div>
        )}
        </div>
      </div>

      {/* Pricing */}
      <div
      className="p-6 rounded-xl"
      style={{
        backgroundColor: backgroundColor === 'white' ? '#FFF6E2' : 'white'
      }}>

        <div className="flex items-baseline gap-2 mb-2 flex-wrap">
          {pricing.originalPrice && (
            <span
            className="text-xl md:text-2xl font-bold line-through opacity-70"
            style={{
              color: '#6b7280'
            }}>
              {pricing.originalPrice}
            </span>
          )}
          <span
          className="text-3xl md:text-4xl font-bold"
          style={{
            color: '#8458B3'
          }}>
            {pricing.price}
          </span>
        </div>
        <p
        className="font-body text-xs mb-2 opacity-75"
        style={{
          color: '#6b7280',
          fontSize: 'clamp(0.75rem, 1.3vw, 0.875rem)'
        }}>
          Fees are displayed in INR for learners in India and USD for international learners.
        </p>
        <p
        className="font-body text-sm mb-4"
        style={{
          color: '#6b7280',
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
        }}>
          EMI Available
        </p>
        <Link
          href={getCoursePath()}
          className="w-full text-white font-body font-semibold min-h-[44px] flex items-center justify-center gap-2 transition-transform hover:scale-105"
          style={{
            backgroundColor: '#8458B3',
            padding: '12px 28px',
            borderRadius: '100px',
            fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)'
          }}
          onMouseEnter={(e) =>
          e.currentTarget.style.backgroundColor = '#6b46c1'
          }
          onMouseLeave={(e) =>
          e.currentTarget.style.backgroundColor = '#8458B3'
          }>
          View Course Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>;

  const visualColumn =
  <motion.div
    initial={{
      opacity: 0,
      x: imagePosition === 'left' ? -30 : 30
    }}
    whileInView={{
      opacity: 1,
      x: 0
    }}
    viewport={{
      once: true,
      amount: 0.3
    }}
    transition={{
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }}
    className="relative h-full min-h-[400px] rounded-2xl overflow-hidden"
    style={{
      background:
      'linear-gradient(135deg, rgba(132, 88, 179, 0.1) 0%, rgba(242, 213, 60, 0.1) 100%)'
    }}>

      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <motion.div
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="bg-white rounded-2xl p-6 mb-4"
          style={{
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
          }}>

            <div className="h-3 bg-gray-200 rounded mb-3 w-3/4" />
            <div className="h-2 bg-gray-100 rounded mb-2" />
            <div className="h-2 bg-gray-100 rounded w-5/6" />
          </motion.div>
          <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
          className="bg-white rounded-2xl p-6"
          style={{
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
          }}>

            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) =>
            <div
              key={i}
              className="aspect-square rounded-lg"
              style={{
                backgroundColor: 'rgba(132, 88, 179, 0.1)'
              }} />

            )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>;

  return (
    <section
      className="py-24 md:py-32"
      style={{
        backgroundColor
      }}>

      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {imagePosition === 'left' ?
          <>
              {visualColumn}
              {contentColumn}
            </> :

          <>
              {contentColumn}
              {visualColumn}
            </>
          }
        </div>
      </div>
    </section>);

}