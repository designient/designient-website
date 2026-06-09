'use client'

import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, Send, Youtube } from 'react-feather';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiteLogo } from './shared/SiteLogo';

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

  const whyDesignientLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Placements', path: '/placements' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'We Are Hiring', path: '/careers' }
  ];

  const forCorporatesLinks = [
    { name: 'Training Programs', path: '/corporates/training-programs' },
    { name: 'AI Enablement & Workshops', path: '/corporates/ai-enablement-workshops' },
    { name: 'Hiring & Consulting', path: '/corporates/hiring-consulting' },
    { name: 'Case Studies', path: '/corporates/case-studies' }
  ];

  const portalsLinks = [
    {
      name: 'Designient Workspace',
      path: 'https://app.designient.com/login',
      description: 'Manage cohorts, assignments, and mentorship.'
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms and Conditions', path: '/terms-and-conditions' },
    { name: 'Cancellation & Refund Policy', path: '/cancellation-refund-policy' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Shipping and Delivery Policy', path: '/shipping-delivery' },
    { name: 'Grievance Redressal', path: '/grievance-redressal' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Code of Conduct', path: '/code-of-conduct' },
    { name: 'Accessibility Statement', path: '/accessibility' }
  ];

  const socialLinks = [
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@designientschool',
      label: 'Subscribe to our YouTube channel'
    },
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
    }
  ];

  return (
    <footer
      className="py-16 text-white border-t"
      style={{ backgroundColor: '#09281a', borderColor: 'rgba(255, 255, 255, 0.08)' }}
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        {/* Springboard-inspired Newsletter Card */}
        <div className="mb-16 bg-[#b6f041] p-8 md:p-12 rounded-[24px] shadow-2xl relative overflow-hidden" style={{ color: '#09281a' }}>
          {/* Decorative visual accent line - Springboard-inspired loop */}
          <div className="absolute -top-4 -left-4 w-48 h-48 opacity-25 pointer-events-none">
            <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M 10 120 C 10 80, 15 35, 30 25 C 45 15, 50 35, 35 45 C 20 55, 15 35, 30 20 C 50 2, 90 40, 120 80" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Form & Heading */}
            <div className="lg:col-span-7 space-y-6">
              <h3
                className="font-display tracking-tight leading-tight font-bold"
                style={{
                  color: '#09281a',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                }}
              >
                Ready to accelerate your career?
              </h3>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3 max-w-md">
                <div>
                  <label htmlFor="newsletter-email" className="font-body text-[10px] font-bold uppercase tracking-wider mb-2 block" style={{ color: '#da3e2a' }}>
                    ENTER YOUR EMAIL *
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      id="newsletter-email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (submitStatus === 'error') {
                          setSubmitStatus('idle');
                          setErrorMessage('');
                        }
                      }}
                      placeholder="name@email.com"
                      required
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-3 rounded-lg font-body font-normal min-h-[44px] border border-[#09281a]/20 text-[#09281a] placeholder-[#09281a]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[#09281a]/50 text-sm"
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="px-6 py-3 rounded-lg font-body font-bold text-white transition-all flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
                      style={{
                        backgroundColor: '#6d28d9',
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Subscribe'}
                    </motion.button>
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-body text-xs font-semibold"
                    style={{ color: '#09281a' }}
                  >
                    ✓ Thank you! You have successfully subscribed.
                  </motion.p>
                )}
                {submitStatus === 'error' && errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-body text-xs font-semibold text-red-700"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </form>
            </div>

            {/* Right Column: Avatars & Support Text */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-[#09281a]/15 lg:pl-8">
              <div className="flex items-center gap-3">
                {/* Overlapping Avatars */}
                <div className="flex -space-x-2.5">
                  {[11, 12, 13, 14].map((imgId) => (
                    <div
                      key={imgId}
                      className="w-8 h-8 rounded-full border-2 border-[#b6f041] overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${imgId}`}
                        alt=""
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <span className="font-body text-[10px] font-bold uppercase tracking-wider" style={{ color: '#09281a' }}>
                  Join Our Aspiring Community Updates
                </span>
              </div>

              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: '#09281a', opacity: 0.85 }}
              >
                At Designient, career progress shows up when you do. We're here to guide you from where you are to the workplaces you want to be.
              </p>

              <div className="border-t border-[#09281a]/15 pt-4 flex flex-wrap gap-4 text-xs font-bold font-body">
                <Link href="/corporates" className="hover:underline flex items-center gap-1" style={{ color: '#09281a' }}>
                  I'm a Business →
                </Link>
                <Link href="/success-stories" className="hover:underline flex items-center gap-1" style={{ color: '#09281a' }}>
                  I'm a Graduate →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Row 1: Logo & Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 pb-8 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <Link href="/" className="site-logo-link inline-block" itemProp="logo">
            <SiteLogo
              width={330}
              height={108}
              className="h-[60px] sm:h-[72px] w-auto"
              variant="footer"
            />
          </Link>

          {/* Social Icons (Hollow circles) */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 hover:border-white/50 transition-colors bg-transparent"
              >
                <Icon className="w-4 h-4 text-white" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Row 2: Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {/* Column 1: Design Track */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#b6f041' }}>
              Design Track
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/ui-ux-design-bootcamp" className="font-body text-xs text-white/70 hover:text-white transition-colors">
                  UI/UX Design Bootcamp
                </Link>
              </li>
              <li>
                <Link href="/ui-ux-design-pro" className="font-body text-xs text-white/70 hover:text-white transition-colors">
                  UI/UX Design Pro
                </Link>
              </li>
              <li>
                <Link href="/ui-ux-design-master" className="font-body text-xs text-white/70 hover:text-white transition-colors">
                  UI/UX Design Master
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: AI Track */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#b6f041' }}>
              AI Track
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/ai-automation-accelerator" className="font-body text-xs text-white/70 hover:text-white transition-colors">
                  AI Automation Accelerator
                </Link>
              </li>
              <li>
                <Link href="/ai-product-design-course" className="font-body text-xs text-white/70 hover:text-white transition-colors">
                  AI Product Design Course
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Why Designient */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#b6f041' }}>
              Why Designient
            </h4>
            <ul className="space-y-2.5">
              {whyDesignientLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="font-body text-xs text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: For Corporates */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#b6f041' }}>
              For Corporates
            </h4>
            <ul className="space-y-2.5">
              {forCorporatesLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="font-body text-xs text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#b6f041' }}>
              Resources & Portals
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blogs" className="font-body text-xs text-white/70 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="font-body text-xs text-white/70 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="font-body text-xs text-white/70 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              {portalsLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} target="_blank" rel="noreferrer" className="font-body text-xs text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                    {link.name}
                    <span className="text-[9px] px-1 py-0.2 rounded bg-[#3fbdff]/15 text-[#3fbdff] font-semibold uppercase">
                      Live
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 3: Bottom Bar & Legal Links */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
          <div className="space-y-2 text-center md:text-left">
            <p className="font-body text-xs text-white/50">
              © {currentYear} Designient Technologies Private Limited. All rights reserved.
            </p>
            <p className="font-body text-[10px] text-white/30 max-w-2xl leading-normal">
              Designient operates through accredited cohorts and training workshops registered under local guidelines. Brand logo and content rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            {/* Contact Details */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs text-white/60 mb-2">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" style={{ color: '#b6f041' }} />
                +91 9353 000 320
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" style={{ color: '#b6f041' }} />
                hello@designient.com
              </span>
            </div>

            <nav aria-label="Legal" className="flex flex-wrap items-center gap-3 justify-center md:justify-end text-xs text-white/50">
              {legalLinks.map((link) => (
                <Link key={link.path} href={link.path} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </nav>
          </div>
        </div>

      </div>
    </footer>
  );
}

