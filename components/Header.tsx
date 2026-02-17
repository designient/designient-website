'use client'

import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCurrency } from '../contexts/CurrencyContext';
import type { CoursePricingData } from '../data/coursePricing';

const courses: Array<{
  title: string;
  duration: string;
  hours: string;
  level: string;
  description: string;
  path: string;
  courseSlug: keyof CoursePricingData;
}> = [
    {
      title: 'UI/UX Design Bootcamp',
      duration: '30 Days',
      hours: '36 Hours',
      level: 'Intensive',
      description: 'Fast-track your learning with our intensive daily bootcamp designed for beginners and career switchers.',
      path: '/ui-ux-design-bootcamp',
      courseSlug: 'ui-ux-design-bootcamp'
    },
    {
      title: 'UI/UX Design Pro',
      duration: '3 Months',
      hours: '124 Hours',
      level: 'Beginner to Pro',
      description: 'The complete foundation for your design career. Master Figma, design thinking, and prototyping with hands-on projects.',
      path: '/ui-ux-design-pro',
      courseSlug: 'ui-ux-design-pro'
    },
    {
      title: 'UI/UX Design Master',
      duration: '6 Months',
      hours: '200+ Hours',
      level: 'Pro to Master',
      description: 'Advanced specialization with diploma certification. Design systems, leadership, and advanced techniques.',
      path: '/ui-ux-design-master',
      courseSlug: 'ui-ux-design-master'
    },
    {
      title: 'Prompt Engineering Mastery',
      duration: '30 Days',
      hours: '40 Hours',
      level: 'Fast Track',
      description: 'Master the art of prompt engineering for AI tools. Learn to create effective prompts for ChatGPT, Midjourney, and other AI platforms.',
      path: '/prompt-engineering-mastery',
      courseSlug: 'prompt-engineering-mastery'
    }
  ];

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

const forCorporatesLinks = [
  {
    name: 'Training Programs',
    path: '/corporates/training-programs',
    description: 'Customized training programs for your team'
  },
  {
    name: 'AI Enablement + Workshops',
    path: '/corporates/ai-enablement-workshops',
    description: 'Empower your team with AI tools and workshops'
  },
  {
    name: 'Hiring + Consulting',
    path: '/corporates/hiring-consulting',
    description: 'Access our talent pool and design consulting services'
  },
  {
    name: 'Case Studies + CTA',
    path: '/corporates/case-studies',
    description: 'Explore our corporate partnerships and results'
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
      hasDropdown: true,
      dropdownType: 'for-corporates'
    },
    {
      name: 'Blogs',
      path: '/blogs',
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
      className="fixed top-0 left-0 right-0 z-[60] transition-colors duration-500"
      initial={{
        y: 0
      }}
      animate={{
        y: isVisible ? 0 : '-100%'
      }}
      style={{
        backgroundColor: isScrolled ?
          'rgba(255, 246, 226, 0.95)' :
          'rgba(255, 246, 226, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${isScrolled ? 'rgba(26, 26, 26, 0.05)' : 'transparent'}`
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
                style={{ color: '#1a1a1a' }}
                aria-hidden="true" /> :
              <Menu
                className="w-6 h-6"
                style={{ color: '#1a1a1a' }}
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
                        color: activeDropdown === link.dropdownType ? '#8458B3' : '#4a4a4a'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#8458B3';
                      }}
                      onMouseLeave={(e) => {
                        if (activeDropdown !== link.dropdownType) {
                          e.currentTarget.style.color = '#4a4a4a';
                        }
                      }}>
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.dropdownType ? 'rotate-180' : ''}`} />
                      <span
                        className="absolute -bottom-1 left-0 h-0.5 bg-[#8458B3] transition-all duration-300"
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
                            backgroundColor: '#ffffff',
                            borderColor: 'rgba(0, 0, 0, 0.08)',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                          }}>
                          {link.dropdownType === 'courses' && (
                            <div className="p-8">
                              <h3 className="font-display text-xl font-bold mb-6" style={{ color: '#1a1a1a', letterSpacing: '-0.02em' }}>
                                All Courses
                              </h3>
                              <div className="grid grid-cols-2 gap-6">
                                {courses.map((course, index) => (
                                  <Link
                                    key={index}
                                    href={course.path}
                                    className="group block p-5 rounded-lg transition-all"
                                    style={{
                                      backgroundColor: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = '#f9fafb';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                    }}>
                                    <div className="mb-3">
                                      <h4 className="font-display font-semibold text-base mb-2 group-hover:text-[#8458B3] transition-colors" style={{ color: '#1a1a1a', lineHeight: '1.4' }}>
                                        {course.title}
                                      </h4>
                                      <p className="font-body text-sm mb-3" style={{ color: '#4a4a4a', lineHeight: '1.6' }}>
                                        {course.description}
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#e5e7eb' }}>
                                      <div className="flex items-center gap-3">
                                        <span className="font-body text-xs font-medium" style={{ color: '#4a4a4a' }}>
                                          {course.duration}
                                        </span>
                                        <span className="text-xs" style={{ color: '#d1d5db' }}>•</span>
                                        <span className="font-body text-xs" style={{ color: '#4a4a4a' }}>
                                          {course.hours}
                                        </span>
                                      </div>
                                      <span className="font-display font-semibold text-sm" style={{ color: '#8458B3' }}>
                                        {isLoading ? '...' : getCoursePrice(course.courseSlug).price}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {link.dropdownType === 'why-designient' && (
                            <div className="p-8">
                              <h3 className="font-display text-xl font-bold mb-6" style={{ color: '#1a1a1a', letterSpacing: '-0.02em' }}>
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
                                      e.currentTarget.style.backgroundColor = '#f9fafb';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                    }}>
                                    <h4 className="font-display font-semibold text-base mb-2 group-hover:text-[#8458B3] transition-colors" style={{ color: '#1a1a1a', lineHeight: '1.4' }}>
                                      {item.name}
                                    </h4>
                                    <p className="font-body text-sm" style={{ color: '#4a4a4a', lineHeight: '1.6' }}>
                                      {item.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {link.dropdownType === 'for-corporates' && (
                            <div className="p-8">
                              <h3 className="font-display text-xl font-bold mb-6" style={{ color: '#1a1a1a', letterSpacing: '-0.02em' }}>
                                For Corporates
                              </h3>
                              <div className="grid grid-cols-2 gap-6">
                                {forCorporatesLinks.map((item, index) => (
                                  <Link
                                    key={index}
                                    href={item.path}
                                    className="group block p-5 rounded-lg transition-all"
                                    style={{
                                      backgroundColor: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = '#f9fafb';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                    }}>
                                    <h4 className="font-display font-semibold text-base mb-2 group-hover:text-[#8458B3] transition-colors" style={{ color: '#1a1a1a', lineHeight: '1.4' }}>
                                      {item.name}
                                    </h4>
                                    <p className="font-body text-sm" style={{ color: '#4a4a4a', lineHeight: '1.6' }}>
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
                      color: pathname === link.path ? '#8458B3' : '#4a4a4a'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#8458B3';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = pathname === link.path ? '#8458B3' : '#4a4a4a';
                    }}>
                    {link.name}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 bg-[#8458B3] transition-all duration-300"
                      style={{
                        width: pathname === link.path ? '100%' : '0'
                      }}
                      aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden nav:flex items-center gap-4">
            <Link href="/apply-now">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="font-body text-white font-bold inline-block shadow-md min-h-[44px] min-w-[120px] flex items-center justify-center"
                style={{
                  backgroundColor: '#8458B3',
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
                  color: '#4a4a4a',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px 8px',
                  fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8458B3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#4a4a4a';
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
                backgroundColor: '#FFF6E2'
              }}>
              <nav
                className="h-full overflow-y-auto max-w-container mx-auto px-6 md:px-8 py-8"
                style={{ backgroundColor: '#FFF6E2' }}
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
                          style={{ color: mobileDropdownOpen === link.dropdownType ? '#8458B3' : '#1a1a1a' }}>
                          {link.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen === link.dropdownType ? 'rotate-180' : ''}`}
                            style={{ color: mobileDropdownOpen === link.dropdownType ? '#8458B3' : '#6a6a6a' }}
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
                                {link.dropdownType === 'courses' && courses.map((course, i) => (
                                  <Link
                                    key={i}
                                    href={course.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-3 px-4 rounded-xl transition-colors"
                                    style={{ backgroundColor: 'rgba(132, 88, 179, 0.08)' }}>
                                    <div className="font-body font-semibold text-base mb-0.5" style={{ color: '#1a1a1a' }}>
                                      {course.title}
                                    </div>
                                    <div className="font-body text-sm" style={{ color: '#6a6a6a' }}>
                                      {course.duration} • {course.level}
                                    </div>
                                  </Link>
                                ))}
                                {link.dropdownType === 'why-designient' && whyDesignientLinks.map((item, i) => (
                                  <Link
                                    key={i}
                                    href={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-3 px-4 rounded-xl font-body font-medium text-base transition-colors"
                                    style={{ backgroundColor: 'rgba(132, 88, 179, 0.08)', color: '#1a1a1a' }}>
                                    {item.name}
                                  </Link>
                                ))}
                                {link.dropdownType === 'for-corporates' && forCorporatesLinks.map((item, i) => (
                                  <Link
                                    key={i}
                                    href={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-3 px-4 rounded-xl font-body font-medium text-base transition-colors"
                                    style={{ backgroundColor: 'rgba(132, 88, 179, 0.08)', color: '#1a1a1a' }}>
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
                          style={{ color: pathname === link.path ? '#8458B3' : '#1a1a1a' }}>
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
                  style={{ borderTop: '1px solid rgba(26, 26, 26, 0.1)' }}>
                  <Link href="/apply-now" onClick={() => setMobileMenuOpen(false)} className="block">
                    <button
                      className="w-full font-body text-white font-bold text-base py-4 rounded-full shadow-lg transition-transform active:scale-[0.98]"
                      style={{ backgroundColor: '#8458B3' }}>
                      Apply Now
                    </button>
                  </Link>
                  <Link href="https://app.designient.com/login" onClick={() => setMobileMenuOpen(false)} className="block">
                    <button
                      className="w-full font-body font-semibold text-base py-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                      style={{ color: '#4a4a4a', backgroundColor: 'rgba(26, 26, 26, 0.05)' }}>
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
