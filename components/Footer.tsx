'use client'

import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, Send, Youtube } from 'react-feather';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { footerCourseGroups } from '../data/homepageCatalog';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      let data;
      const responseText = await response.text();

      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch (jsonError) {
        console.error('Failed to parse response as JSON:', {
          error: jsonError,
          status: response.status,
          statusText: response.statusText,
          responseText: responseText
        });
        setSubmitStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
        return;
      }

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setEmail('');
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        console.error('API error response:', {
          status: response.status,
          statusText: response.statusText,
          data: data,
          responseText: responseText
        });
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const courses = footerCourseGroups;

  const whyDesignientLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Placements', path: '/placements' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'We Are Hiring', path: '/careers' }
  ];

  const forCorporatesLinks = [
    { name: 'Training Programs', path: '/corporates/training-programs' },
    { name: 'AI Enablement + Workshops', path: '/corporates/ai-enablement-workshops' },
    { name: 'Hiring + Consulting', path: '/corporates/hiring-consulting' },
    { name: 'Case Studies + CTA', path: '/corporates/case-studies' }
  ];

  const portalsLinks = [
    {
      name: 'Designient Workspace',
      path: 'https://app.designient.com/login',
      comingSoon: false,
      description: 'Manage cohorts, assignments, mentorship programs, and operations.'
    }
  ];

  const brandsLinks = [
    {
      name: 'Designient Tech',
      path: '#',
      comingSoon: true,
      description: 'Full-service design agency for businesses'
    },
    {
      name: 'Kraftswag',
      path: '#',
      comingSoon: true,
      description: 'Premium design-inspired clothing and merchandise'
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms and Conditions', path: '/terms-and-conditions' },
    { name: 'Cancellation & Refund Policy', path: '/cancellation-refund-policy' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Code of Conduct', path: '/code-of-conduct' },
    { name: 'Accessibility Statement', path: '/accessibility' }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/designientschool/',
      label: 'Follow us on Instagram'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/designientschool',
      label: 'Follow us on Facebook'
    },
    {
      icon: Linkedin,
      href: 'https://in.linkedin.com/company/designient-school',
      label: 'Follow us on LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://x.com/designient',
      label: 'Follow us on X (Twitter)'
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@designientschool',
      label: 'Subscribe to our YouTube channel'
    }
  ];

  return (
    <footer
      className="surface-footer py-12 md:py-16"
      itemScope
      itemType="https://schema.org/EducationalOrganization">

      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b" style={{ borderColor: 'var(--border-default)' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h3
              className="font-display tracking-wide mb-4"
              style={{
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
              STAY UPDATED
            </h3>
            <p
              className="font-body mb-6 font-normal md:whitespace-nowrap"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.875rem, 1.2vw, 0.9375rem)'
              }}>
              Get the latest updates on courses, career tips, and industry insights delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (submitStatus === 'error') {
                      setSubmitStatus('idle');
                      setErrorMessage('');
                    }
                  }}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 rounded-xl font-body font-normal min-h-[44px] border"
                  style={{
                    backgroundColor: 'var(--bg-input)',
                    borderColor: 'var(--border-default)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
                    opacity: isSubmitting ? 0.6 : 1
                  }}
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="btn-primary px-6 whitespace-nowrap"
                  style={{
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)'
                  }}>
                  {isSubmitting ? 'Subscribing...' : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-body"
                  style={{ color: 'var(--color-success)' }}
                >
                  ✓ Thank you for subscribing! Check your email for confirmation.
                </motion.p>
              )}
              {submitStatus === 'error' && errorMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-body"
                  style={{ color: 'var(--color-error)' }}
                >
                  {errorMessage}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/designient-logo.svg"
                alt="Designient School of Masterminds UI UX design training institute logo"
                width={180}
                height={60}
                className="h-12 md:h-14 w-auto"
                itemProp="logo"
              />
            </Link>
            <p
              className="font-body text-sm mb-6 font-normal"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.875rem, 1.2vw, 0.9375rem)',
                lineHeight: '1.6'
              }}
              itemProp="description">
              India&apos;s leading UI/UX design training institute. Transform your career with industry-recognized courses, expert mentorship, and guaranteed placement support.
            </p>

            {/* Contact Information */}
            <address
              className="not-italic space-y-2 mb-6"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                <a
                  href="tel:+919353000320"
                  className="font-body text-xs font-normal hover:text-[var(--color-accent)] transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                  itemProp="telephone">
                  +91 9353 000 320
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                <a
                  href="mailto:hello@designient.com"
                  className="font-body text-xs font-normal hover:text-[var(--color-accent)] transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                  itemProp="email">
                  hello@designient.com
                </a>
              </div>
            </address>

            {/* Social Media Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: 'var(--color-accent-muted)',
                    border: '1px solid var(--border-accent)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                  }}>
                  <Icon className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Courses Links */}
          <nav aria-label="Courses">
            <h3
              className="font-display tracking-wide mb-4"
              style={{
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              COURSES
            </h3>
            <div className="space-y-6">
              {courses.map((group) => (
                <div key={group.label}>
                  <p
                    className="font-body text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {group.label}
                  </p>
                  <ul className="space-y-2.5">
                    {group.links.map((link) => (
                      <li key={link.path}>
                        <Link
                          href={link.path}
                          className="font-body text-xs font-normal transition-colors hover:text-[var(--color-accent)]"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Why Designient & Our Brands */}
          <nav aria-label="Why Designient and Our Brands">
            <h3
              className="font-display tracking-wide mb-4"
              style={{
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              WHY DESIGNIENT
            </h3>
            <ul className="space-y-2.5 mb-6">
              {whyDesignientLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="font-body text-xs font-normal transition-colors hover:text-[var(--color-accent)]"
                    style={{
                      color: 'var(--text-secondary)'
                    }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3
              className="font-display tracking-wide mb-4 mt-6"
              style={{
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              OUR BRANDS
            </h3>
            <ul className="space-y-3">
              {brandsLinks.map((link) => (
                <li key={link.name}>
                  <div className="flex flex-col gap-1.5">
                    <span
                      className="font-body text-xs font-normal inline-flex items-center gap-1.5"
                      style={{
                        color: 'var(--text-muted)',
                        cursor: 'not-allowed'
                      }}>
                      {link.name}
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: 'rgba(57, 255, 20, 0.15)',
                          color: '#39FF14',
                          fontWeight: 500,
                          textShadow: '0 0 8px rgba(57, 255, 20, 0.5)'
                        }}>
                        Coming Soon
                      </span>
                    </span>
                    <p
                      className="font-body text-[10px] font-normal"
                      style={{
                        color: 'var(--text-muted)',
                        lineHeight: '1.4'
                      }}>
                      {link.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* For Corporates Links */}
          <nav aria-label="For Corporates">
            <h3
              className="font-display tracking-wide mb-4"
              style={{
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              FOR CORPORATES
            </h3>
            <ul className="space-y-2.5">
              {forCorporatesLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="font-body text-xs font-normal transition-colors hover:text-[var(--color-accent)]"
                    style={{
                      color: 'var(--text-secondary)'
                    }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources & More */}
          <nav aria-label="Resources and More">
            <h3
              className="font-display tracking-wide mb-4"
              style={{
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              RESOURCES
            </h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href="/blogs"
                  className="font-body text-xs font-normal transition-colors hover:text-[var(--color-accent)]"
                  style={{
                    color: 'var(--text-secondary)'
                  }}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="font-body text-xs font-normal transition-colors hover:text-[var(--color-accent)]"
                  style={{
                    color: 'var(--text-secondary)'
                  }}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="font-body text-xs font-normal transition-colors hover:text-[var(--color-accent)]"
                  style={{
                    color: 'var(--text-secondary)'
                  }}>
                  Contact Us
                </Link>
              </li>
            </ul>

            <h3
              className="font-display tracking-wide mb-4 mt-6"
              style={{
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              PORTALS
            </h3>
            <ul className="space-y-3">
              {portalsLinks.map((link) => (
                <li key={link.name}>
                  <div className="flex flex-col gap-1.5">
                    {link.comingSoon ? (
                      <span
                        className="font-body text-xs font-normal inline-flex items-center gap-1.5"
                        style={{
                          color: 'var(--text-muted)',
                          cursor: 'not-allowed'
                        }}>
                        {link.name}
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: 'rgba(57, 255, 20, 0.15)',
                            color: '#39FF14',
                            fontWeight: 500,
                            textShadow: '0 0 8px rgba(57, 255, 20, 0.5)'
                          }}>
                          Coming Soon
                        </span>
                      </span>
                    ) : (
                      <Link
                        href={link.path}
                        className="font-body text-xs font-normal inline-flex items-center gap-1.5 transition-colors"
                        style={{
                          color: 'var(--text-secondary)'
                        }}
                        target="_blank"
                        rel="noreferrer">
                        {link.name}
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: 'rgba(63, 189, 255, 0.18)',
                            color: '#3fbdff',
                            fontWeight: 600,
                            textShadow: '0 0 8px rgba(63, 189, 255, 0.5)'
                          }}>
                          Live
                        </span>
                      </Link>
                    )}
                    <p
                      className="font-body text-[10px] font-normal"
                      style={{
                        color: 'var(--text-muted)',
                        lineHeight: '1.4'
                      }}>
                      {link.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderColor: 'var(--border-default)'
          }}>
          <p
            className="font-body text-xs font-normal text-center md:text-left"
            style={{
              color: 'var(--text-muted)'
            }}>
            © 2026 Designient Technologies Private Limited. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-3 justify-center md:justify-end">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="font-body text-xs font-normal transition-colors hover:text-[var(--color-accent)]"
                style={{
                  color: 'var(--text-muted)'
                }}>
                {link.name}
              </Link>
            ))}
            <Link
              href="/sitemap.xml"
              className="font-body text-xs font-normal transition-colors hover:text-[var(--color-accent)]"
              style={{
                color: 'var(--text-muted)'
              }}>
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
