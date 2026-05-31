'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Award } from 'react-feather';
const pathNodes = [
{
  icon: BookOpen,
  label: 'Beginner',
  course: 'Bootcamp',
  description: 'Quick start to UI/UX fundamentals'
},
{
  icon: Briefcase,
  label: 'Professional',
  course: 'Pro Course',
  description: 'Job-ready skills & portfolio'
},
{
  icon: Award,
  label: 'Master',
  course: 'Master Program',
  description: 'Advanced specialization & leadership'
}];

export function LearningPathVisualization() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-warm)' }}>
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
          className="text-center mb-12 md:mb-16">

          <h2
            className="font-display tracking-wide leading-tight mb-4"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>

            Your Learning Journey
          </h2>
        </motion.div>

        {/* Desktop - Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{
                scaleX: 0
              }}
              whileInView={{
                scaleX: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.5,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="absolute top-16 left-0 right-0 h-1 origin-left"
              style={{
                backgroundColor: 'var(--border-default)'
              }} />


            <div className="grid grid-cols-3 gap-8">
              {pathNodes.map((node, index) =>
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
                  delay: index * 0.3,
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="relative text-center">

                  {/* Node circle */}
                  <div
                  className="relative z-10 mx-auto w-32 h-32 rounded-full flex items-center justify-center mb-6 accent-icon-box"
                  style={{
                    backgroundColor: 'var(--color-cta)'
                  }}>

                    <node.icon className="w-12 h-12 text-white" />
                  </div>

                  {/* Content */}
                  <h3
                  className="font-display font-bold mb-2"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                  }}>

                    {node.label}
                  </h3>
                  <p
                  className="text-base font-semibold mb-2"
                  style={{
                    color: 'var(--color-primary)'
                  }}>

                    {node.course}
                  </p>
                  <p
                  className="font-body text-sm leading-[1.6]"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>

                    {node.description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile - Vertical Timeline */}
        <div className="md:hidden space-y-8">
          {pathNodes.map((node, index) =>
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
              delay: index * 0.2,
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="flex gap-4">

              {/* Node circle */}
              <div
              className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center accent-icon-box"
              style={{
                backgroundColor: 'var(--color-cta)'
              }}>

                <node.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3
                className="text-lg font-bold mb-1"
                style={{
                  color: 'var(--text-primary)'
                }}>

                  {node.label}
                </h3>
                <p
                className="text-sm font-semibold mb-1"
                style={{
                  color: 'var(--color-cta)'
                }}>

                  {node.course}
                </p>
                <p
                className="text-sm leading-[1.6]"
                style={{
                  color: 'var(--text-muted)'
                }}>

                  {node.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}