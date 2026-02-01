'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'react-feather'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  rating: number
}

// Written stories — aligned with /success-stories page
const testimonials: Testimonial[] = [
  {
    quote: "The course helped me understand design thinking and user research. The mentorship was personalized and the feedback was always constructive.",
    author: "Priya Sharma",
    role: "Product Designer",
    company: "Razorpay",
    rating: 5
  },
  {
    quote: "I came with zero design background. The bootcamp structure and mentor support helped me ship real projects. I now have a portfolio I am proud to show in interviews.",
    author: "Rahul Kumar",
    role: "UX Designer",
    company: "Freshworks",
    rating: 5
  },
  {
    quote: "The Master program pushed me to think at a systems level. Real client-style projects and critique sessions prepared me for how design actually works in teams.",
    author: "Anjali Patel",
    role: "UX Designer",
    company: "Lollypop Design",
    rating: 5
  },
  {
    quote: "Having a dev background helped with implementation, but I lacked design fundamentals. This course filled that gap. I finally feel confident owning the full design-to-dev handoff.",
    author: "Sneha Nair",
    role: "Product Designer",
    company: "Thoughtworks",
    rating: 5
  }
]

export function HeroTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="mt-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center">
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mb-4" aria-label={`Rating: ${currentTestimonial.rating} out of 5 stars`}>
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#f2d53c' }} aria-hidden="true" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-body text-base md:text-lg leading-relaxed mb-4" style={{ color: '#1a1a1a' }}>
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              <p className="font-body font-semibold text-sm" style={{ color: '#1a1a1a' }}>
                {currentTestimonial.author}
              </p>
              <p className="font-body text-xs" style={{ color: '#6b7280' }}>
                {currentTestimonial.role} at {currentTestimonial.company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial">
            <ChevronLeft className="w-5 h-5" style={{ color: '#8458B3' }} aria-hidden="true" />
          </button>

          {/* Dots indicator */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8' : ''
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#8458B3' : '#e5e7eb'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-selected={index === currentIndex}
                role="tab"
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial">
            <ChevronRight className="w-5 h-5" style={{ color: '#8458B3' }} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
