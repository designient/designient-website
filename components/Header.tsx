'use client'

import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCurrency } from '../contexts/CurrencyContext';
import { designTrackNavCourses, aiTrackNavCourses } from '../data/homepageCatalog';
import { CurrencyToggle } from './CurrencyToggle';

const whyDesignientLinks = [
  {
    name: 'About Us',
    path: '/about-us',
    description: 'Learn about our mission, vision, and values'
  },
  {
    name: 'Success Stories',
    path: '/success-stories',
    description: 'Real stories from students who transformed their careers'
  },
  {
    name: 'Placements',
    path: '/placements',
    description: 'See our placement statistics and success stories'
  },
  {
    name: 'We Are Hiring',
    path: '/careers',
    description: 'Join our team and help shape the future of design education'
  },
  {
    name: 'Verify Certificate',
    path: '/verify',
    description: 'Verify your certificate authenticity'
  },
  {
    name: 'FAQs',
    path: '/faqs',
    description: 'Find answers to common questions'
  }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getCoursePrice, isLoading } = useCurrency();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);

      const currentScrollY = latest;
      const previousScrollY = lastScrollY.current;

      if (currentScrollY > previousScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    {
      name: 'Courses',
      hasDropdown: true,
      dropdownType: 'courses'
    },
    {
      name: 'Why Designient',
      hasDropdown: true,
      dropdownType: 'why-designient'
    },
    {
      name: 'For Corporates',
      path: '/corporates',
      hasDropdown: false
    },
    {
      name: 'Blogs',
      path: '/blogs',
      hasDropdown: false
    },
    {
      name: 'FAQs',
      path: '/faqs',
      hasDropdown: false
    },
    {
      name: 'Contact Us',
      path: '/contact-us',
      hasDropdown: false
    }
  ];

  const handleMouseEnter = (dropdownType: string) => {
    setActiveDropdown(dropdownType);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-500 glass-nav ${isScrolled ? 'border-b border-[var(--glass-border-subtle)]' : ''}`}
      initial={{
        y: 0
      }}
      animate={{
        y: isVisible ? 0 : '-100%'
      }}
      role="banner">

      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 nav:h-24">
          <button
            className="nav:hidden p-2 -ml-2 z-[70]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ?
              <X
                className="w-6 h-6"
                style={{ color: 'var(--text-primary)' }}
                aria-hidden="true" /> :
              <Menu
                className="w-6 h-6"
                style={{ color: 'var(--text-primary)' }}
                aria-hidden="true" />
            }
          </button>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 nav:relative nav:left-0 nav:translate-x-0 flex items-center z-[70]"
            aria-label="Designient School - Home">
            <Image
              src="/designient-logo.svg"
              alt="Designient School of Masterminds UI UX design training logo"
              width={180}
              height={60}
              priority
              className="h-auto w-auto"
            />
          </Link>

          <nav
            className="hidden nav:flex items-center gap-6 flex-1 justify-center"
            aria-label="Main navigation"
            ref={dropdownRef}>

            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.dropdownType!)}
                onMouseLeave={handleMouseLeave}>
                {link.hasDropdown ? (
                  <>
                    <button
                      className="font-body text-sm font-semibold transition-colors relative group flex items-center gap-1"
                      style={{
                        color: activeDropdown === link.dropdownType ? 'var(--color-primary)' : 'var(--text-secondary)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-primary)';
                      }}
                      onMouseLeave={(e) => {
                        if (activeDropdown !== link.dropdownType) {
                          e.currentTarget.style.color = 'var(--text-secondary)';
                        }
                      }}>
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.dropdownType ? 'rotate-180' : ''}`} />
                      <span
                        className="absolute -bottom-1 left-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300"
                        style={{
                          width: activeDropdown === link.dropdownType ? '100%' : '0'
                        }}
                        aria-hidden="true" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.dropdownType && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px] rounded-lg shadow-lg border overflow-hidden"
                          style={{
                            backgroundColor: 'var(--bg-card)',
                            borderColor: 'var(--border-default)',
                            boxShadow: 'var(--shadow-lg)'
                          }}>
                          {link.dropdownType === 'courses' && (
                            <div className="p-8">
                              <div className="mb-8">
                                <h3 className="font-display text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>
                                  Design Track
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                  {designTrackNavCourses.map((course, index) => (
                                    <Link
                                      key={index}
                                      href={course.path}
                                      className="group block p-4 rounded-lg transition-all"
                                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-subtle)'; }}
                                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                                    >
                                      <div className="flex items-start justify-between gap-3 mb-2">
                                        <h4 className="font-display font-semibold text-base group-hover:text-[var(--color-primary)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                                          {course.title}
                                        </h4>
                                        {course.badge && (
                                          <span className="font-body text-xs font-bold px-2 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-highlight)', color: 'var(--text-on-accent)' }}>
                                            {course.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="font-body text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{course.description}</p>
                                      <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'var(--border-default)' }}>
                                        <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{course.duration} · {course.level}</span>
                                        <span className="font-display font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>
                                          {isLoading ? '...' : getCoursePrice(course.courseSlug).price}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h3 className="font-display text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>
                                  AI Track
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                  {aiTrackNavCourses.map((course, index) => (
                                    <Link
                                      key={index}
                                      href={course.path}
                                      className="group block p-4 rounded-lg transition-all"
                                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-subtle)'; }}
                                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                                    >
                                      <div className="flex items-start justify-between gap-3 mb-2">
                                        <h4 className="font-display font-semibold text-base group-hover:text-[var(--color-primary)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                                          {course.title}
                                        </h4>
                                        {course.badge && (
                                          <span className="font-body text-xs font-bold px-2 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-highlight)', color: 'var(--text-on-accent)' }}>
                                            {course.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="font-body text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{course.description}</p>
                                      <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'var(--border-default)' }}>
                                        <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{course.duration} · {course.level}</span>
                                        <span className="font-display font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>
                                          {isLoading ? '...' : getCoursePrice(course.courseSlug).price}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {link.dropdownType === 'why-designient' && (
                            <div className="p-8">
                              <h3 className="font-display text-xl font-bold mb-6" style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                                Why Designient
                              </h3>
                              <div className="grid grid-cols-2 gap-6">
                                {whyDesignientLinks.map((item, index) => (
                                  <Link
                                    key={index}
                                    href={item.path}
                                    className="group block p-5 rounded-lg transition-all"
                                    style={{
                                      backgroundColor: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                    }}>
                                    <h4 className="font-display font-semibold text-base mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ color: 'var(--text-primary)', lineHeight: '1.4' }}>
                                      {item.name}
                                    </h4>
                                    <p className="font-body text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                      {item.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.path!}
                    className="font-body text-sm font-semibold transition-colors relative group"
                    style={{
                      color: pathname === link.path ? 'var(--color-primary)' : 'var(--text-secondary)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = pathname === link.path ? 'var(--color-primary)' : 'var(--text-secondary)';
                    }}>
                    {link.name}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300"
                      style={{
                        width: pathname === link.path ? '100%' : '0'
                      }}
                      aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden nav:flex items-center gap-3">
            <CurrencyToggle size="sm" />
            <Link href="/apply-now">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="font-body font-bold inline-block shadow-md min-h-[44px] min-w-[120px] flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--color-cta)',
                  color: 'var(--text-on-accent)',
                  padding: '10px 20px',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)'
                }}
                aria-label="Apply now for UI/UX design courses">

                Apply Now
              </motion.button>
            </Link>

            <Link href="https://app.designient.com/login">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="font-body font-semibold flex items-center gap-1.5 transition-colors min-h-[44px] px-2"
                style={{
                  color: 'var(--text-secondary)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px 8px',
                  fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
                aria-label="Login">

                Login
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'fixed',
                top: '80px',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99999,
                backgroundColor: 'var(--bg-warm)'
              }}>
              <nav
                className="h-full overflow-y-auto max-w-container mx-auto px-6 md:px-8 py-8"
                style={{ backgroundColor: 'var(--bg-warm)' }}
                aria-label="Mobile navigation">

                {/* Main Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    link.hasDropdown ? (
                      <div key={link.name}>
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.dropdownType ? null : link.dropdownType!)}
                          className="font-display w-full flex items-center justify-between py-4 text-lg font-bold tracking-wide"
                          style={{ color: mobileDropdownOpen === link.dropdownType ? 'var(--color-primary)' : 'var(--text-primary)' }}>
                          {link.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen === link.dropdownType ? 'rotate-180' : ''}`}
                            style={{ color: mobileDropdownOpen === link.dropdownType ? 'var(--color-primary)' : 'var(--text-muted)' }}
                          />
                        </motion.button>

                        <AnimatePresence>
                          {mobileDropdownOpen === link.dropdownType && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden">
                              <div className="py-2 space-y-1">
                                {link.dropdownType === 'courses' && (
                                  <>
                                    <p className="font-body text-xs font-bold uppercase tracking-wider px-4 py-2" style={{ color: 'var(--color-primary)' }}>Design Track</p>
                                    {designTrackNavCourses.map((course, i) => (
                                      <Link
                                        key={i}
                                        href={course.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-3 px-4 rounded-xl transition-colors"
                                        style={{ backgroundColor: 'var(--color-accent-muted)' }}>
                                        <div className="font-body font-semibold text-base mb-0.5" style={{ color: 'var(--text-primary)' }}>
                                          {course.title}
                                        </div>
                                        <div className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                                          {course.duration} · {course.level}{course.badge ? ` · ${course.badge}` : ''}
                                        </div>
                                      </Link>
                                    ))}
                                    <p className="font-body text-xs font-bold uppercase tracking-wider px-4 py-2 mt-4" style={{ color: 'var(--color-primary)' }}>AI Track</p>
                                    {aiTrackNavCourses.map((course, i) => (
                                      <Link
                                        key={i}
                                        href={course.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-3 px-4 rounded-xl transition-colors"
                                        style={{ backgroundColor: 'var(--color-accent-muted)' }}>
                                        <div className="font-body font-semibold text-base mb-0.5" style={{ color: 'var(--text-primary)' }}>
                                          {course.title}
                                        </div>
                                        <div className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                                          {course.duration} · {course.level}{course.badge ? ` · ${course.badge}` : ''}
                                        </div>
                                      </Link>
                                    ))}
                                  </>
                                )}
                                {link.dropdownType === 'why-designient' && whyDesignientLinks.map((item, i) => (
                                  <Link
                                    key={i}
                                    href={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-3 px-4 rounded-xl font-body font-medium text-base transition-colors"
                                    style={{ backgroundColor: 'var(--color-accent-muted)', color: 'var(--text-primary)' }}>
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
                        transition={{ delay: index * 0.05 }}>
                        <Link
                          href={link.path!}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-display block py-4 text-lg font-bold tracking-wide"
                          style={{ color: pathname === link.path ? 'var(--color-primary)' : 'var(--text-primary)' }}>
                          {link.name}
                        </Link>
                      </motion.div>
                    )
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-6 space-y-4"
                  style={{ borderTop: '1px solid var(--border-default)' }}>
                  <Link href="/apply-now" onClick={() => setMobileMenuOpen(false)} className="block">
                    <button
                      className="w-full font-body font-bold text-base py-4 rounded-full shadow-lg transition-transform active:scale-[0.98] surface-on-accent"
                      style={{ backgroundColor: 'var(--color-cta)', color: 'var(--text-on-accent)' }}>
                      Apply Now
                    </button>
                  </Link>
                  <Link href="https://app.designient.com/login" onClick={() => setMobileMenuOpen(false)} className="block">
                    <button
                      className="w-full font-body font-semibold text-base py-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                      style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--bg-muted)' }}>
                      Login
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.header>);
}
