'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'react-feather';
const curriculumItems = [
'UI/UX Fundamentals & Research',
'Design Thinking with AI Integration',
'Figma, Adobe XD, Advanced Tools',
'Real-World Portfolio Projects',
'Career Prep & Placement Support'];

const learningItems = [
'One-on-one mentorship sessions',
'Live project reviews and feedback',
'Industry-standard design workflows',
'Portfolio development guidance'];

export function WhatYouLearnSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-black relative overflow-hidden">

      {/* Large background number */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] md:text-[600px] font-bold opacity-[0.03] pointer-events-none text-white"
        style={{
          y: y2
        }}>

        01
      </motion.div>

      <div className="max-w-container mx-auto px-3 md:px-4 relative z-10">
        {/* First block - Asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-32">
          <motion.div
            initial={{
              opacity: 0,
              x: -60
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
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="lg:col-span-7">

            <h2 className="font-bold leading-tight tracking-tighter mb-8 text-white" style={{ fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Comprehensive Curriculum
            </h2>

            <div className="space-y-6 mb-12">
              {curriculumItems.map((item, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="flex items-start gap-4 group">

                  <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: 'rgba(255, 88, 65, 0.1)'
                  }}>

                    <CheckCircle
                    className="w-5 h-5"
                    style={{
                      color: '#FF5841'
                    }} />

                  </div>
                  <span
                  className="text-xl md:text-2xl leading-relaxed"
                  style={{
                    color: '#9CA3AF'
                  }}>

                    {item}
                  </span>
                </motion.div>
              )}
            </div>

            <motion.a
              href="#curriculum"
              whileHover={{
                x: 10
              }}
              className="inline-flex items-center gap-3 text-lg font-bold group text-white">

              Explore Full Curriculum
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="lg:col-span-5">

            <div className="relative h-full min-h-[500px]">
              {/* Simple stat cards */}
              <motion.div
                animate={{
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute top-0 right-0 p-8 rounded-2xl"
                style={{
                  backgroundColor: '#1F2937',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}>

                <div
                  className="text-5xl font-bold mb-2"
                  style={{
                    color: '#FF5841'
                  }}>

                  124
                </div>
                <div
                  className="text-sm uppercase tracking-wider"
                  style={{
                    color: '#6B7280'
                  }}>

                  Hours of Learning
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                className="absolute bottom-0 left-0 p-8 rounded-2xl"
                style={{
                  backgroundColor: '#1F2937',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}>

                <div className="text-5xl font-bold mb-2 text-white">15+</div>
                <div
                  className="text-sm uppercase tracking-wider"
                  style={{
                    color: '#6B7280'
                  }}>

                  Real Projects
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Second block - Reversed layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="lg:col-span-5 order-2 lg:order-1">

            <div
              className="relative h-full min-h-[500px] rounded-3xl overflow-hidden"
              style={{
                backgroundColor: '#1F2937'
              }}>

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="w-full max-w-sm">

                  <div
                    className="rounded-2xl p-6 mb-4"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }}>

                    <div
                      className="h-4 rounded mb-3 w-3/4"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }} />

                    <div
                      className="h-3 rounded mb-2"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)'
                      }} />

                    <div
                      className="h-3 rounded w-5/6"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)'
                      }} />

                  </div>
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }}>

                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) =>
                      <div
                        key={i}
                        className="aspect-square rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)'
                        }} />

                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 60
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
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="lg:col-span-7 order-1 lg:order-2">

            <h2 className="font-bold leading-tight tracking-tighter mb-8 text-white" style={{ fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Hands-On Learning
            </h2>

            <p
              className="text-xl md:text-2xl leading-relaxed mb-12"
              style={{
                color: '#9CA3AF'
              }}>

              Learn by doing with real-world projects, personalized mentorship,
              and continuous feedback from industry experts.
            </p>

            <div className="space-y-6">
              {learningItems.map((item, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="flex items-start gap-4 group">

                  <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}>

                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span
                  className="text-xl md:text-2xl leading-relaxed"
                  style={{
                    color: '#9CA3AF'
                  }}>

                    {item}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}