'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'react-feather'
import { useQuickApply } from './QuickApplyContext'

interface FloatingApplyButtonProps {
  courseName?: string
  courseSlug?: string
}

export function FloatingApplyButton({ courseName, courseSlug }: FloatingApplyButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { openModal } = useQuickApply()

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Show button after scrolling 300px
      setIsVisible(scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleApplyClick = () => {
    openModal(courseSlug, courseName)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-28 right-6 z-40 flex flex-col gap-3 md:bottom-32">
          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            style={{
              backgroundColor: '#6b7280',
              color: 'white',
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>

          {/* Apply Now Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={handleApplyClick}
            className="px-6 py-4 rounded-full shadow-2xl font-body font-bold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-3xl"
            style={{
              backgroundColor: '#8458B3',
              color: 'white',
              fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
            }}
          >
            <span>Apply Now</span>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
