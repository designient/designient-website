'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown, PenTool, Cpu, Award, HelpCircle } from 'react-feather';
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
      initial={{ y: 0 }}
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
            className="site-logo-link absolute left-1/2 -translate-x-1/2 nav:relative nav:left-0 nav:translate-x-0 z-[70] max-w-[min(180px,calc(100%-5.5rem))] xs:max-w-[min(200px,calc(100%-5.5rem))] sm:max-w-[min(220px,calc(100%-5.5rem))] nav:max-w-none"
            aria-label="Designient School - Home">
            <SiteLogo
              priority
              className="h-9 xs:h-10 sm:h-[54px] nav:h-[66px] w-auto max-w-full nav:max-w-[300px]"
              variant="header"
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
                        color: activeDropdown === link.dropdownType ? 'var(--color-forest)' : 'var(--text-primary)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-forest)';
                      }}
                      onMouseLeave={(e) => {
                        if (activeDropdown !== link.dropdownType) {
                          e.currentTarget.style.color = 'var(--text-primary)';
                        }
                      }}>
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.dropdownType ? 'rotate-180' : ''}`} />
                      <span
                        className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                        style={{
                          width: activeDropdown === link.dropdownType ? '100%' : '0',
                          backgroundColor: 'var(--color-forest)'
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
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[880px] rounded-lg shadow-lg border overflow-hidden"
                          style={{
                            backgroundColor: 'var(--bg-card)',
                            borderColor: 'var(--border-default)',
                            boxShadow: 'var(--shadow-lg)'
                          }}>
                          {link.dropdownType === 'courses' && (
                            <div className="p-8">
                              <div className="grid grid-cols-12 gap-8">
                                {/* Column 1: Design Track (col-span-5) */}
                                <div className="col-span-5">
                                  <div className="flex items-center gap-2 mb-4">
                                    <PenTool className="w-4 h-4 text-[#09281a]" strokeWidth={1.5} />
                                    <h3 className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-forest)', letterSpacing: '0.08em' }}>
                                      Design Track
                                    </h3>
                                  </div>
                                  <div className="grid grid-cols-1 gap-3">
                                    {designTrackNavCourses.map((course, index) => (
                                      <Link
                                        key={index}
                                        href={course.path}
                                        className="group block p-3 rounded-lg transition-all hover:bg-[var(--bg-subtle)]"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                          <h4 className="font-display font-semibold text-sm text-primary transition-colors group-hover:text-[var(--color-forest)]">
                                            {course.title}
                                          </h4>
                                          {course.badge && (
                                            <span className="font-body text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-[#dcfbda] text-[#09281a]">
                                              {course.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="font-body text-xs text-secondary leading-normal">{course.description}</p>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Column 2: AI Track (col-span-4) */}
                                <div className="col-span-4">
                                  <div className="flex items-center gap-2 mb-4">
                                    <Cpu className="w-4 h-4 text-[#09281a]" strokeWidth={1.5} />
                                    <h3 className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-forest)', letterSpacing: '0.08em' }}>
                                      AI Track
                                    </h3>
                                  </div>
                                  <div className="grid grid-cols-1 gap-3">
                                    {aiTrackNavCourses.map((course, index) => (
                                      <Link
                                        key={index}
                                        href={course.path}
                                        className="group block p-3 rounded-lg transition-all hover:bg-[var(--bg-subtle)]"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                          <h4 className="font-display font-semibold text-sm text-primary transition-colors group-hover:text-[var(--color-forest)]">
                                            {course.title}
                                          </h4>
                                          {course.badge && (
                                            <span className="font-body text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-[#dcfbda] text-[#09281a]">
                                              {course.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="font-body text-xs text-secondary leading-normal">{course.description}</p>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Column 3: Still Unsure? (col-span-3) */}
                                <div className="col-span-3 border-l pl-6" style={{ borderColor: 'var(--border-default)' }}>
                                  <h3 className="font-display text-sm font-bold mb-3 text-primary">
                                    Still Unsure?
                                  </h3>
                                  <p className="font-body text-xs text-secondary mb-4 leading-relaxed">
                                    Book a call with our career advisors to find your perfect path.
                                  </p>
                                  <Link
                                    href="/#start-your-journey"
                                    className="font-body text-xs font-bold text-accent hover:underline flex items-center gap-1 group mt-2"
                                    onClick={() => setActiveDropdown(null)}
                                    style={{ color: 'var(--color-purple)' }}
                                  >
                                    Book a free consultation
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}

                          {link.dropdownType === 'why-designient' && (
                            <div className="p-8">
                              <div className="grid grid-cols-12 gap-8">
                                {/* Column 1: School & Outcomes (col-span-5) */}
                                <div className="col-span-5">
                                  <div className="flex items-center gap-2 mb-4">
                                    <Award className="w-4 h-4 text-[#09281a]" strokeWidth={1.5} />
                                    <h3 className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-forest)', letterSpacing: '0.08em' }}>
                                      School & Outcomes
                                    </h3>
                                  </div>
                                  <div className="grid grid-cols-1 gap-3">
                                    {whyDesignientLinks.slice(0, 3).map((item, index) => (
                                      <Link
                                        key={index}
                                        href={item.path}
                                        className="group block p-3 rounded-lg transition-all hover:bg-[var(--bg-subtle)]"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <h4 className="font-display font-semibold text-sm text-primary mb-1 transition-colors group-hover:text-[var(--color-forest)]">
                                          {item.name}
                                        </h4>
                                        <p className="font-body text-xs text-secondary leading-normal">{item.description}</p>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Column 2: Support & Careers (col-span-4) */}
                                <div className="col-span-4">
                                  <div className="flex items-center gap-2 mb-4">
                                    <HelpCircle className="w-4 h-4 text-[#09281a]" strokeWidth={1.5} />
                                    <h3 className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-forest)', letterSpacing: '0.08em' }}>
                                      Support & Careers
                                    </h3>
                                  </div>
                                  <div className="grid grid-cols-1 gap-3">
                                    {whyDesignientLinks.slice(3, 6).map((item, index) => (
                                      <Link
                                        key={index}
                                        href={item.path}
                                        className="group block p-3 rounded-lg transition-all hover:bg-[var(--bg-subtle)]"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <h4 className="font-display font-semibold text-sm text-primary mb-1 transition-colors group-hover:text-[var(--color-forest)]">
                                          {item.name}
                                        </h4>
                                        <p className="font-body text-xs text-secondary leading-normal">{item.description}</p>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Column 3: Still Unsure? (col-span-3) */}
                                <div className="col-span-3 border-l pl-6" style={{ borderColor: 'var(--border-default)' }}>
                                  <h3 className="font-display text-sm font-bold mb-3 text-primary">
                                    Still Unsure?
                                  </h3>
                                  <p className="font-body text-xs text-secondary mb-4 leading-relaxed">
                                    Speak with our team to clear up any doubts about our programs.
                                  </p>
                                  <Link
                                    href="/#start-your-journey"
                                    className="font-body text-xs font-bold text-accent hover:underline flex items-center gap-1 group mt-2"
                                    onClick={() => setActiveDropdown(null)}
                                    style={{ color: 'var(--color-purple)' }}
                                  >
                                    Book a free consultation
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                  </Link>
                                </div>
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
                      color: pathname === link.path ? 'var(--color-forest)' : 'var(--text-primary)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-forest)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = pathname === link.path ? 'var(--color-forest)' : 'var(--text-primary)';
                    }}>
                    {link.name}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                      style={{
                        width: pathname === link.path ? '100%' : '0',
                        backgroundColor: 'var(--color-forest)'
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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="font-body font-bold inline-block shadow-sm min-h-[44px] min-w-[120px] flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--color-purple)',
                  color: '#ffffff',
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-button)',
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
                  e.currentTarget.style.color = 'var(--color-forest)';
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
