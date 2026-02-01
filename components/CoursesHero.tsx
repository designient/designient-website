'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'react-feather';
import Link from 'next/link';
export function CoursesHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center overflow-hidden pt-16 md:pt-20"
      style={{
        backgroundColor: '#FFF6E2'
      }}>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl"
          style={{
            backgroundColor: '#8458B3'
          }} />

        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full filter blur-3xl"
          style={{
            backgroundColor: '#f2d53c'
          }} />

      </div>

      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center py-16 md:py-24">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}>

          {/* Breadcrumb */}
          <div
            className="flex items-center justify-center gap-2 mb-6 text-sm"
            style={{
              color: '#6B7280'
            }}>

            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span
              style={{
                color: '#8458B3'
              }}>

              Courses
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-display tracking-wide mb-4 md:mb-6 leading-[1.1]"
            style={{
              color: '#1a1a1a',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)'
            }}>

            Choose Your Design Journey
          </h1>

          {/* Subtitle */}
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto leading-[1.6] mb-4"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)'
            }}>

            Four comprehensive paths to mastery. Same excellence, different pace.
          </p>
          
          {/* Corporate Link */}
          <p
            className="font-body text-sm md:text-base max-w-2xl mx-auto leading-[1.6]"
            style={{
              color: '#6b7280',
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
            }}>
            Looking for <Link href="/corporates/training-programs" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>team training</Link> or <Link href="/corporates" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>enterprise solutions</Link>? We also offer <Link href="/corporates/ai-enablement-workshops" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>AI enablement workshops</Link> for product teams.
          </p>
        </motion.div>
      </div>
    </section>);

}