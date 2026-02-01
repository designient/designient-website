'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, X, MapPin, BookOpen, Users, CheckCircle, MessageCircle, Briefcase, ChevronDown, ChevronUp } from 'react-feather'

// ============================================
// DATA STRUCTURES
// ============================================

interface VideoTestimonial {
  id: string
  name: string
  city: string
  course: string
  youtubeId: string
  thumbnail: string
  outcome: string // One-line outcome
}

interface TextTestimonial {
  id: string
  name: string
  city: string
  course: string
  outcome: string
  testimonial: string // 4-6 lines max
}

interface LongFormStory {
  id: string
  name: string
  city: string
  course: string
  beforeJoining: string
  whatChanged: string
  biggestLearning: string
  currentStatus: string
}

// ============================================
// SAMPLE DATA (Replace with real data)
// ============================================

const videoTestimonials: VideoTestimonial[] = [
  // Add real YouTube video IDs here
  // Example:
  // {
  //   id: '1',
  //   name: 'Priya Sharma',
  //   city: 'Bangalore',
  //   course: 'UI/UX Design Pro',
  //   youtubeId: 'VIDEO_ID_HERE',
  //   thumbnail: '/testimonials/priya.jpg',
  //   outcome: 'Switched from marketing to UI/UX design'
  // }
]

const textTestimonials: TextTestimonial[] = [
  // Add real testimonials here
  // Example:
  // {
  //   id: '1',
  //   name: 'Rahul Kumar',
  //   city: 'Hyderabad',
  //   course: 'UI/UX Design Bootcamp',
  //   outcome: 'Built a strong portfolio',
  //   testimonial: 'The course helped me understand design thinking and user research. I was able to create projects that showcase my skills effectively. The mentorship was personalized and the feedback was always constructive.'
  // }
]

const longFormStories: LongFormStory[] = [
  // Add real long-form stories here
  // Example:
  // {
  //   id: '1',
  //   name: 'Anjali Patel',
  //   city: 'Mumbai',
  //   course: 'UI/UX Design Master',
  //   beforeJoining: 'I was working as a graphic designer but wanted to transition to UX.',
  //   whatChanged: 'The course structure helped me think systematically about user problems.',
  //   biggestLearning: 'Understanding user research and how to validate design decisions.',
  //   currentStatus: 'Working as a UX Designer at a product company.'
  // }
]

// ============================================
// MAIN COMPONENT
// ============================================

export function SuccessStoriesContent() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [displayedCount, setDisplayedCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)
  const [expandedStories, setExpandedStories] = useState<Set<string>>(new Set())

  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setDisplayedCount(prev => prev + 6)
      setIsLoading(false)
    }, 300)
  }

  const openVideoModal = (youtubeId: string) => {
    setSelectedVideo(youtubeId)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
    document.body.style.overflow = 'unset'
  }

  const toggleStory = (id: string) => {
    setExpandedStories(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeVideoModal()
      }
    }
    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [selectedVideo])

  const displayedTextTestimonials = textTestimonials.slice(0, displayedCount)
  const hasMore = displayedCount < textTestimonials.length

  return (
    <>
      {/* 1️⃣ HERO SECTION */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#1a1a1a',
                lineHeight: '1.2'
              }}>
              Real Success Stories from Designient Students
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl mb-4 leading-relaxed"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.8'
              }}>
              Career switchers. Fresh graduates. Working professionals.<br />
              Different backgrounds. One common outcome — confidence and clarity in design.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm italic mb-8"
              style={{ color: '#6b7280' }}>
              Shared with consent. Individual results may vary.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured-stories"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: '#8458B3',
                  color: 'white'
                }}>
                View Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/apply-now"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold transition-all hover:scale-105 border-2"
                style={{
                  backgroundColor: 'white',
                  color: '#8458B3',
                  borderColor: '#8458B3'
                }}>
                Apply Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ QUICK PROOF STRIP */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, text: 'Small batches (max 10 students)' },
              { icon: Briefcase, text: 'Portfolio-first learning' },
              { icon: MessageCircle, text: 'Real mentor feedback (not recorded-only)' },
              { icon: CheckCircle, text: 'Career guidance beyond classes' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f3f4f6' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#8458B3' }} />
                </div>
                <p className="font-body text-sm md:text-base" style={{ color: '#4a4a4a' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ FEATURED VIDEO TESTIMONIALS */}
      <section id="featured-stories" className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-center mb-12"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#1a1a1a'
            }}>
            Featured Student Stories
          </motion.h2>
          {videoTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-lg mb-4" style={{ color: '#6b7280' }}>
                Video testimonials coming soon. Check back later!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {videoTestimonials.slice(0, 4).map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white rounded-xl border-2 overflow-hidden hover:shadow-lg transition-shadow"
                  style={{ borderColor: '#e5e7eb' }}>
                  <button
                    onClick={() => openVideoModal(video.youtubeId)}
                    className="w-full aspect-video relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2"
                    aria-label={`Play video testimonial from ${video.name}`}>
                    <img
                      src={video.thumbnail}
                      alt={`${video.name} testimonial`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 ml-1" style={{ color: '#8458B3' }} fill="#8458B3" />
                      </div>
                    </div>
                  </button>
                  <div className="p-6">
                    <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                      {video.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm mb-2" style={{ color: '#6b7280' }}>
                      <MapPin className="w-4 h-4" />
                      <span className="font-body">{video.city}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mb-3" style={{ color: '#6b7280' }}>
                      <BookOpen className="w-4 h-4" />
                      <span className="font-body">{video.course}</span>
                    </div>
                    <p className="font-body text-sm" style={{ color: '#4a4a4a' }}>
                      {video.outcome}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4️⃣ TEXT TESTIMONIALS (INFINITE SCROLL) */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-center mb-12"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#1a1a1a'
            }}>
            More Student Experiences
          </motion.h2>
          {textTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-lg mb-4" style={{ color: '#6b7280' }}>
                Testimonials are being added. Check back soon!
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {displayedTextTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-white rounded-xl border-2 p-6 hover:shadow-lg transition-shadow"
                    style={{ borderColor: '#e5e7eb' }}>
                    <div className="mb-4">
                      <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm mb-2" style={{ color: '#6b7280' }}>
                        <MapPin className="w-4 h-4" />
                        <span className="font-body">{testimonial.city}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-3" style={{ color: '#6b7280' }}>
                        <BookOpen className="w-4 h-4" />
                        <span className="font-body">{testimonial.course}</span>
                      </div>
                      <p className="font-body text-sm font-semibold mb-3" style={{ color: '#8458B3' }}>
                        {testimonial.outcome}
                      </p>
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMore}
                    disabled={isLoading}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border-2"
                    style={{
                      backgroundColor: 'white',
                      color: '#8458B3',
                      borderColor: '#8458B3'
                    }}>
                    {isLoading ? 'Loading...' : 'Load More Stories'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* 5️⃣ LONG-FORM STORIES (EXPANDABLE) */}
      {longFormStories.length > 0 && (
        <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-center mb-12"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: '#1a1a1a'
              }}>
              Deeper Journeys
            </motion.h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {longFormStories.map((story, index) => {
                const isExpanded = expandedStories.has(story.id)
                return (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-white rounded-xl border-2 overflow-hidden"
                    style={{ borderColor: '#e5e7eb' }}>
                    <button
                      onClick={() => toggleStory(story.id)}
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2"
                      aria-expanded={isExpanded}
                      aria-controls={`story-content-${story.id}`}>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                          {story.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm mb-2" style={{ color: '#6b7280' }}>
                          <span className="font-body">{story.city}</span>
                          <span className="font-body">•</span>
                          <span className="font-body">{story.course}</span>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#8458B3' }} />
                      ) : (
                        <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#8458B3' }} />
                      )}
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          id={`story-content-${story.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden">
                          <div className="px-6 pb-6 space-y-4">
                            <div>
                              <h4 className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                                Before joining Designient
                              </h4>
                              <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                                {story.beforeJoining}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                                What changed during the course
                              </h4>
                              <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                                {story.whatChanged}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                                Biggest learning
                              </h4>
                              <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                                {story.biggestLearning}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-body font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                                Current status / outcome
                              </h4>
                              <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                                {story.currentStatus}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6️⃣ OUTCOME CLUSTERS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-center mb-12"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#1a1a1a'
            }}>
            What our students commonly experience
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {[
                'Stronger design fundamentals',
                'Clearer portfolios',
                'Improved confidence',
                'Better interview readiness',
                'Direction for next career steps'
              ].map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <span className="font-body text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
                    {outcome}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7️⃣ SOFT DISCLAIMER */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-sm leading-relaxed" style={{ color: '#6b7280' }}>
              Success stories represent individual experiences. Outcomes vary based on effort, background, and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* 8️⃣ INTERNAL LINKING SECTION */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-center mb-12"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#1a1a1a'
            }}>
            Want to start your own journey?
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { name: 'UI/UX Design Pro Course', href: '/ui-ux-design-pro' },
                { name: 'Bootcamp', href: '/ui-ux-design-bootcamp' },
                { name: 'Apply Now', href: '/apply-now' },
                { name: 'Placements', href: '/placements' },
                { name: 'About Us', href: '/about-us' }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}>
                  <Link
                    href={link.href}
                    className="block p-6 rounded-lg border-2 text-center font-body font-semibold transition-all hover:scale-105 hover:shadow-md"
                    style={{
                      backgroundColor: 'white',
                      color: '#8458B3',
                      borderColor: '#8458B3'
                    }}>
                    {link.name}
                    <ArrowRight className="w-4 h-4 inline-block ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ FINAL CTA SECTION */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#8458B3' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold mb-6 text-white" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Your story could be next.
            </h2>
            <p className="font-body text-lg mb-8 text-white opacity-90" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}>
              If you're willing to learn, practice, and show up — we'll guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply-now"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-[#8458B3] bg-white transition-all hover:scale-105">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white border-2 border-white transition-all hover:scale-105">
                Talk to a Mentor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeVideoModal}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              aria-label="Close video modal">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
                role="dialog"
                aria-modal="true"
                aria-labelledby="video-modal-title">
                <button
                  onClick={closeVideoModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Close video">
                  <X className="w-6 h-6" style={{ color: '#1a1a1a' }} />
                </button>
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    title="Student testimonial video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
