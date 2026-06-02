'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'react-feather';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiteLogo } from './shared/SiteLogo';
import { useCurrency } from '../contexts/CurrencyContext';
import { designTrackNavCourses, aiTrackNavCourses } from '../data/homepageCatalog';
import { CurrencyToggle } from './CurrencyToggle';
import { MobileNavDrawer } from './layout/MobileNavDrawer';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getCoursePrice, isLoading } = useCurrency();

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    setIsScrolled(window.scrollY > 1);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdownOpen(null);
  }, [pathname]);

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-nav-open');
      const onEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      document.addEventListener('keydown', onEscape);
      return () => {
        document.body.classList.remove('mobile-nav-open');
        document.removeEventListener('keydown', onEscape);
      };
    }
    document.body.classList.remove('mobile-nav-open');
  }, [mobileMenuOpen]);

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
      className={`fixed top-0 left-0 right-0 z-[60] transition-[background-color,box-shadow,border-color] duration-300 glass-nav ${isScrolled ? 'glass-nav--scrolled' : ''}`}
      initial={{
        y: 0
      }}
      animate={{ y: 0 }}
      role="banner">

      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 nav:h-24">
          <button
            type="button"
            className="nav:hidden p-2 -ml-2 z-[70] min-h-[44px] min-w-[44px] flex items-center justify-center"
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
            className="site-logo-link absolute left-1/2 -translate-x-1/2 nav:relative nav:left-0 nav:translate-x-0 z-[70] max-w-[calc(100%-5.5rem)] nav:max-w-none"
            aria-label="Designient School - Home">
            <SiteLogo
              priority
              width={160}
              height={48}
              className="h-8 sm:h-9 w-auto max-w-[140px] sm:max-w-[160px]"
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
                        e.currentTarget.style.color = activeDropdown === link.dropdownType ? 'var(--color-primary)' : 'var(--text-primary)';
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
                                <h3 className="font-display text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
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
                                        <h4 className="font-display font-semibold text-base transition-colors" style={{ color: 'var(--text-primary)' }}>
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
                                        <span className="font-display font-semibold text-sm" style={{ color: 'var(--text-secondary)' }}>
                                          {isLoading ? '...' : getCoursePrice(course.courseSlug).price}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h3 className="font-display text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
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
                                        <h4 className="font-display font-semibold text-base transition-colors" style={{ color: 'var(--text-primary)' }}>
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
                                        <span className="font-display font-semibold text-sm" style={{ color: 'var(--text-secondary)' }}>
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
                                    <h4 className="font-display font-semibold text-base mb-2 transition-colors" style={{ color: 'var(--text-primary)', lineHeight: '1.4' }}>
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
                      e.currentTarget.style.color = pathname === link.path ? 'var(--color-primary)' : 'var(--text-primary)';
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

          <div className="nav:hidden w-10 flex-shrink-0" aria-hidden="true" />

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
                  e.currentTarget.style.color = 'var(--text-primary)';
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

      {mounted && (
        <MobileNavDrawer
          open={mobileMenuOpen}
          pathname={pathname}
          navLinks={navLinks}
          designTrackCourses={designTrackNavCourses}
          aiTrackCourses={aiTrackNavCourses}
          whyDesignientLinks={whyDesignientLinks}
          mobileDropdownOpen={mobileDropdownOpen}
          onMobileDropdownToggle={setMobileDropdownOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </motion.header>);
}
