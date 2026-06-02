'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'react-feather'
import { CurrencyToggle } from '../CurrencyToggle'

type NavLink = {
  name: string
  path?: string
  hasDropdown: boolean
  dropdownType?: string
}

type WhyLink = {
  name: string
  path: string
}

type CourseNavItem = {
  title: string
  path: string
  duration: string
  level: string
  badge?: string
}

type MobileNavDrawerProps = {
  open: boolean
  pathname: string
  navLinks: NavLink[]
  designTrackCourses: readonly CourseNavItem[]
  aiTrackCourses: readonly CourseNavItem[]
  whyDesignientLinks: WhyLink[]
  mobileDropdownOpen: string | null
  onMobileDropdownToggle: (type: string | null) => void
  onClose: () => void
}

export function MobileNavDrawer({
  open,
  pathname,
  navLinks,
  designTrackCourses,
  aiTrackCourses,
  whyDesignientLinks,
  mobileDropdownOpen,
  onMobileDropdownToggle,
  onClose,
}: MobileNavDrawerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const drawer = (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="nav:hidden fixed left-0 right-0 z-[99999] flex flex-col"
          style={{
            top: 'var(--header-height)',
            height: 'calc(100dvh - var(--header-height))',
            maxHeight: 'calc(100dvh - var(--header-height))',
            backgroundColor: 'var(--bg-warm)',
          }}
        >
          <nav
            className="flex flex-col flex-1 min-h-0 max-w-container mx-auto w-full px-4 sm:px-6 md:px-8 pl-safe pr-safe"
            aria-label="Mobile navigation"
          >
            <div
              className="flex-shrink-0 flex items-center justify-between gap-4 py-4 border-b"
              style={{ borderColor: 'var(--border-default)' }}
            >
              <span className="font-body text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                Currency
              </span>
              <CurrencyToggle size="md" />
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto scroll-touch py-4">
              <div className="space-y-1">
                {navLinks.map((link, index) =>
                  link.hasDropdown ? (
                    <div key={link.name}>
                      <motion.button
                        type="button"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() =>
                          onMobileDropdownToggle(
                            mobileDropdownOpen === link.dropdownType ? null : link.dropdownType!
                          )
                        }
                        className="font-display w-full flex items-center justify-between py-3.5 text-lg font-bold tracking-wide min-h-[48px]"
                        style={{
                          color:
                            mobileDropdownOpen === link.dropdownType
                              ? 'var(--color-primary)'
                              : 'var(--text-primary)',
                        }}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${mobileDropdownOpen === link.dropdownType ? 'rotate-180' : ''}`}
                          style={{
                            color:
                              mobileDropdownOpen === link.dropdownType
                                ? 'var(--color-primary)'
                                : 'var(--text-muted)',
                          }}
                          aria-hidden="true"
                        />
                      </motion.button>

                      <AnimatePresence>
                        {mobileDropdownOpen === link.dropdownType && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 space-y-1">
                              {link.dropdownType === 'courses' && (
                                <>
                                  <p
                                    className="font-body text-xs font-bold uppercase tracking-wider px-3 py-2"
                                    style={{ color: 'var(--text-secondary)' }}
                                  >
                                    Design Track
                                  </p>
                                  {designTrackCourses.map((course, i) => (
                                    <Link
                                      key={`design-${i}`}
                                      href={course.path}
                                      onClick={onClose}
                                      className="block py-3 px-3 rounded-xl transition-colors min-h-[48px]"
                                      style={{ backgroundColor: 'var(--color-accent-muted)' }}
                                    >
                                      <div
                                        className="font-body font-semibold text-base mb-0.5"
                                        style={{ color: 'var(--text-primary)' }}
                                      >
                                        {course.title}
                                      </div>
                                      <div className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                                        {course.duration} · {course.level}
                                        {course.badge ? ` · ${course.badge}` : ''}
                                      </div>
                                    </Link>
                                  ))}
                                  <p
                                    className="font-body text-xs font-bold uppercase tracking-wider px-3 py-2 mt-3"
                                    style={{ color: 'var(--text-secondary)' }}
                                  >
                                    AI Track
                                  </p>
                                  {aiTrackCourses.map((course, i) => (
                                    <Link
                                      key={`ai-${i}`}
                                      href={course.path}
                                      onClick={onClose}
                                      className="block py-3 px-3 rounded-xl transition-colors min-h-[48px]"
                                      style={{ backgroundColor: 'var(--color-accent-muted)' }}
                                    >
                                      <div
                                        className="font-body font-semibold text-base mb-0.5"
                                        style={{ color: 'var(--text-primary)' }}
                                      >
                                        {course.title}
                                      </div>
                                      <div className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                                        {course.duration} · {course.level}
                                        {course.badge ? ` · ${course.badge}` : ''}
                                      </div>
                                    </Link>
                                  ))}
                                </>
                              )}
                              {link.dropdownType === 'why-designient' &&
                                whyDesignientLinks.map((item, i) => (
                                  <Link
                                    key={i}
                                    href={item.path}
                                    onClick={onClose}
                                    className="block py-3 px-3 rounded-xl font-body font-medium text-base transition-colors min-h-[48px] flex items-center"
                                    style={{
                                      backgroundColor: 'var(--color-accent-muted)',
                                      color: 'var(--text-primary)',
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.path!}
                        onClick={onClose}
                        className="font-display block py-3.5 text-lg font-bold tracking-wide min-h-[48px] flex items-center"
                        style={{
                          color: pathname === link.path ? 'var(--color-primary)' : 'var(--text-primary)',
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>
            </div>

            <div
              className="flex-shrink-0 pt-4 pb-safe space-y-3 border-t"
              style={{ borderColor: 'var(--border-default)' }}
            >
              <Link href="/apply-now" onClick={onClose} className="block">
                <button
                  type="button"
                  className="w-full font-body font-bold text-base py-4 rounded-full shadow-lg transition-transform active:scale-[0.98] min-h-[48px] surface-on-accent"
                  style={{ backgroundColor: 'var(--color-cta)', color: 'var(--text-on-accent)' }}
                >
                  Apply Now
                </button>
              </Link>
              <Link href="https://app.designient.com/login" onClick={onClose} className="block">
                <button
                  type="button"
                  className="w-full font-body font-semibold text-base py-4 rounded-full flex items-center justify-center gap-2 transition-colors min-h-[48px]"
                  style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--bg-muted)' }}
                >
                  Login
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )

  if (!mounted) return null
  return createPortal(drawer, document.body)
}
