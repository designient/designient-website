'use client'

import React, { useEffect, useState, useRef } from 'react';
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
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getCoursePrice, isLoading } = useCurrency();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
      if (latest > lastScrollY && latest > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(latest);
    });
    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  useEffect(() => {
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
      className="fixed top-0 left-0 right-0 z-[60] transition-all duration-500"
      initial={{
        y: 0
      }}
      animate={{
        y: 0
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
        <div className="flex items-center justify-between h-20 lg:h-24">
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}>

            {mobileMenuOpen ?
              <X
                className="w-6 h-6"
                style={{
                  color: '#1a1a1a'
                }}
                aria-hidden="true" /> :

              <Menu
                className="w-6 h-6"
                style={{
                  color: '#1a1a1a'
                }}
                aria-hidden="true" />

            }
          </button>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0 flex items-center"
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
            className="hidden lg:flex items-center gap-6 flex-1 justify-center"
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

          <div className="hidden lg:flex items-center gap-4">
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

            <Link href="/verify">
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
                aria-label="Verify">

                Verify
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>

        {mobileMenuOpen &&
          <motion.nav
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="lg:hidden py-4 border-t overflow-y-auto max-h-[calc(100vh-80px)] pb-32"
            style={{
              borderColor: 'rgba(26, 26, 26, 0.1)'
            }}
            aria-label="Mobile navigation">

            {navLinks.map((link, index) => {
              return link.hasDropdown ? (
                <div key={link.name}>
                  <motion.button
                    initial={{
                      opacity: 0,
                      x: -20
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    transition={{
                      delay: index * 0.1
                    }}
                    onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.dropdownType ? null : link.dropdownType!)}
                    className="font-body w-full flex items-center justify-between py-3 text-base font-semibold min-h-[44px]"
                    style={{
                      color: '#4a4a4a',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen === link.dropdownType ? 'rotate-180' : ''}`} />
                  </motion.button>

                  {mobileDropdownOpen === link.dropdownType && (
                    <div className="pl-4 pb-2">
                      {link.dropdownType === 'courses' && (
                        <div className="space-y-2">
                          {courses.map((course, courseIndex) => (
                            <Link
                              key={courseIndex}
                              href={course.path}
                              className="block py-3 px-4 rounded-lg font-body min-h-[44px] flex items-center"
                              style={{
                                backgroundColor: '#FFF6E2',
                                color: '#1a1a1a',
                                fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)'
                              }}
                              onClick={() => setMobileMenuOpen(false)}>
                              <div className="font-semibold mb-1">{course.title}</div>
                              <div className="text-xs" style={{ color: '#6a6a6a' }}>
                                {course.duration} • {course.hours}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}

                      {link.dropdownType === 'why-designient' && (
                        <div className="space-y-2">
                          {whyDesignientLinks.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.path}
                              className="block py-3 px-4 rounded-lg font-body min-h-[44px] flex items-center"
                              style={{
                                backgroundColor: '#FFF6E2',
                                color: '#1a1a1a',
                                fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)'
                              }}
                              onClick={() => setMobileMenuOpen(false)}>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}

                      {link.dropdownType === 'for-corporates' && (
                        <div className="space-y-2">
                          {forCorporatesLinks.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.path}
                              className="block py-3 px-4 rounded-lg font-body min-h-[44px] flex items-center"
                              style={{
                                backgroundColor: '#FFF6E2',
                                color: '#1a1a1a',
                                fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)'
                              }}
                              onClick={() => setMobileMenuOpen(false)}>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: index * 0.1
                  }}>
                  <Link
                    href={link.path!}
                    className="font-body block py-3 text-base font-semibold min-h-[44px] flex items-center"
                    style={{
                      color: pathname === link.path ? '#8458B3' : '#4a4a4a',
                      fontSize: 'clamp(0.9375rem, 1.8vw, 1rem)'
                    }}
                    onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}

            <div className="flex flex-col gap-3 pt-4 border-t" style={{ borderColor: 'rgba(26, 26, 26, 0.1)' }}>
              <Link href="/apply-now" onClick={() => setMobileMenuOpen(false)}>
                <motion.button
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: navLinks.length * 0.1
                  }}
                  className="font-body text-white font-bold text-center shadow-md min-h-[48px] flex items-center justify-center"
                  style={{
                    backgroundColor: '#8458B3',
                    padding: '12px 24px',
                    borderRadius: '100px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'clamp(0.875rem, 1.8vw, 1rem)'
                  }}
                  aria-label="Apply now for UI/UX design courses">

                  Apply Now
                </motion.button>
              </Link>

              <Link href="/verify" onClick={() => setMobileMenuOpen(false)}>
                <motion.button
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: navLinks.length * 0.1 + 0.1
                  }}
                  className="font-body text-base font-semibold flex items-center gap-2 justify-start"
                  style={{
                    color: '#4a4a4a',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '12px 0'
                  }}
                  aria-label="Verify">

                  Verify
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.nav>
        }
      </div>
    </motion.header>);
}
