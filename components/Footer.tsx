'use client'

import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, Send } from 'react-feather';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing!');
    }, 1000);
  };

  const courses = [
    { name: 'UI/UX Design Bootcamp', path: '/ui-ux-design-bootcamp' },
    { name: 'UI/UX Design Pro', path: '/ui-ux-design-pro' },
    { name: 'UI/UX Design Master', path: '/ui-ux-design-master' },
    { name: 'Prompt Engineering Mastery', path: '/prompt-engineering-mastery' }
  ];

  const whyDesignientLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Placements', path: '/placements' },
    { name: 'We Are Hiring', path: '/careers' },
    { name: 'Success Stories', path: '/success-stories' }
  ];

  const forCorporatesLinks = [
    { name: 'Training Programs', path: '/corporate/training' },
    { name: 'AI Enablement + Workshops', path: '/corporate/ai-enablement' },
    { name: 'Hiring + Consulting', path: '/corporate/hiring' },
    { name: 'Case Studies + CTA', path: '/corporate/case-studies' }
  ];

  const portalsLinks = [
    { 
      name: 'Student Hub', 
      path: '#', 
      comingSoon: true,
      description: 'Student management portal for course access and resources'
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
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Refund Policy', path: '/refund-policy' }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/designient',
      label: 'Follow us on Facebook'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/designient',
      label: 'Follow us on Instagram'
    },
    {
      icon: Twitter,
      href: 'https://www.twitter.com/designient',
      label: 'Follow us on Twitter'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/designient',
      label: 'Follow us on LinkedIn'
    }
  ];

  return (
    <footer
      className="py-12 md:py-16"
      style={{
        backgroundColor: '#1a1a1a',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      itemScope
      itemType="https://schema.org/EducationalOrganization">
      
      <div className="max-w-container mx-auto px-3 md:px-4">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h3
              className="font-display tracking-wide mb-4"
              style={{
                color: '#FFF6E2',
                fontWeight: 600,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
              STAY UPDATED
            </h3>
            <p
              className="font-body text-sm mb-6 font-normal md:whitespace-nowrap"
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: 'clamp(0.875rem, 1.2vw, 0.9375rem)'
              }}>
              Get the latest updates on courses, career tips, and industry insights delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg font-body font-normal min-h-[44px]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  outline: 'none',
                  fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)'
                }}
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg font-body font-bold flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px]"
                style={{
                  backgroundColor: '#8458B3',
                  color: 'white',
                  fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)'
                }}>
                {isSubmitting ? 'Subscribing...' : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
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
                alt="Designient - UI/UX Design Training Institute"
                width={180}
                height={60}
                className="h-12 md:h-14 w-auto"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(98%) sepia(5%) saturate(1200%) hue-rotate(330deg) brightness(102%) contrast(96%)'
                }}
                itemProp="logo"
              />
            </Link>
            <p
              className="font-body text-sm mb-6 font-normal"
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
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
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#FFF6E2' }} />
                <a
                  href="tel:+919353000320"
                  className="font-body text-xs font-normal hover:text-[#f2d53c] transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                  itemProp="telephone">
                  +91 9353 000 320
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#FFF6E2' }} />
                <a
                  href="mailto:hello@designient.com"
                  className="font-body text-xs font-normal hover:text-[#f2d53c] transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
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
                    backgroundColor: 'rgba(132, 88, 179, 0.15)',
                    border: '1px solid rgba(132, 88, 179, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8458B3';
                    e.currentTarget.style.borderColor = '#8458B3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(132, 88, 179, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(132, 88, 179, 0.4)';
                  }}>
                  <Icon className="w-4 h-4" style={{ color: '#FFF6E2' }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Courses Links */}
          <nav aria-label="Courses">
            <h3
              className="font-display tracking-wide mb-4"
              style={{
                color: '#FFF6E2',
                fontWeight: 600,
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              COURSES
            </h3>
            <ul className="space-y-2.5">
              {courses.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="font-body text-xs font-normal transition-colors hover:text-[#f2d53c]"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Why Designient & Our Brands */}
          <nav aria-label="Why Designient and Our Brands">
            <h3
              className="font-display tracking-wide mb-4"
              style={{
                color: '#FFF6E2',
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
                    className="font-body text-xs font-normal transition-colors hover:text-[#f2d53c]"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3
              className="font-display tracking-wide mb-4 mt-6"
              style={{
                color: '#FFF6E2',
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
                        color: 'rgba(255, 255, 255, 0.5)',
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
                        color: 'rgba(255, 255, 255, 0.4)',
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
                color: '#FFF6E2',
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
                    className="font-body text-xs font-normal transition-colors hover:text-[#f2d53c]"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)'
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
                color: '#FFF6E2',
                fontWeight: 600,
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              RESOURCES
            </h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href="/blogs"
                  className="font-body text-xs font-normal transition-colors hover:text-[#f2d53c]"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="font-body text-xs font-normal transition-colors hover:text-[#f2d53c]"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-xs font-normal transition-colors hover:text-[#f2d53c]"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                  Contact Us
                </Link>
              </li>
            </ul>

            <h3
              className="font-display tracking-wide mb-4 mt-6"
              style={{
                color: '#FFF6E2',
                fontWeight: 600,
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              PORTALS
            </h3>
            <ul className="space-y-3">
              {portalsLinks.map((link) => (
                <li key={link.name}>
                  <div className="flex flex-col gap-1.5">
                    <span
                      className="font-body text-xs font-normal inline-flex items-center gap-1.5"
                      style={{
                        color: 'rgba(255, 255, 255, 0.5)',
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
                        color: 'rgba(255, 255, 255, 0.4)',
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
            borderColor: 'rgba(255, 255, 255, 0.1)'
          }}>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <p
              className="font-body text-xs font-normal text-center md:text-left"
              style={{
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
              © 2026 Designient Technologies Private Limited. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="font-body text-xs font-normal transition-colors hover:text-[#f2d53c]"
                  style={{
                    color: 'rgba(255, 255, 255, 0.5)'
                  }}>
                  {link.name}
                </Link>
              ))}
              <Link
                href="/sitemap.xml"
                className="font-body text-xs font-normal transition-colors hover:text-[#f2d53c]"
                style={{
                  color: 'rgba(255, 255, 255, 0.5)'
                }}>
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
