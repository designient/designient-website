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

const testimonials: Testimonial[] = [
  {
    quote: "This course transformed my career. From complete beginner to landing a UI/UX role at a top tech company in just 3 months. The mentorship and hands-on projects were game-changers.",
    author: "Priya Sharma",
    role: "UI/UX Designer",
    company: "Google",
    rating: 5
  },
  {
    quote: "The small batch size meant I got personalized feedback on every project. The portfolio I built here got me multiple job offers. Best investment in my career!",
    author: "Rahul Mehta",
    role: "Product Designer",
    company: "Microsoft",
    rating: 5
  },
  {
    quote: "Coming from a non-design background, I was nervous. But the structured curriculum and supportive mentors made the journey smooth. Now I'm designing products I'm proud of.",
    author: "Anjali Patel",
    role: "UX Designer",
    company: "Amazon",
    rating: 5
  },
  {
    quote: "The AI-integrated workflow section was ahead of its time. I'm using those techniques daily at work. This course doesn't just teach design, it teaches you to think like a designer.",
    author: "Vikram Singh",
    role: "Senior UI Designer",
    company: "Flipkart",
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
