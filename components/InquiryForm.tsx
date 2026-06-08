'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'react-feather';
import { CountryCodeSelect, validatePhoneNumber } from './shared/CountryCodeSelect';
import { courseInterestOptions } from '../data/homepageCatalog';
import { formInputClass, formSelectClass } from './forms/formStyles';


export function InquiryForm() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCountryCode: '+91',
    phone: '',
    whatsappCountryCode: '+91',
    whatsapp: '',
    courseInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!formData.phone.trim()) return 'Phone number is required';

    const phoneValid = validatePhoneNumber(formData.phone, formData.phoneCountryCode);
    if (!phoneValid.valid) return phoneValid.error || 'Invalid phone number';

    if (formData.whatsapp) {
      const whatsappValid = validatePhoneNumber(formData.whatsapp, formData.whatsappCountryCode);
      if (!whatsappValid.valid) return whatsappValid.error || 'Invalid WhatsApp number';
    }

    if (!formData.courseInterest) return 'Please select a course interest';

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError as string);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setError('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
        return;
      }

      if (response.ok && data.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phoneCountryCode: '+91',
          phone: '',
          whatsappCountryCode: '+91',
          whatsapp: '',
          courseInterest: ''
        });
        // Reset status after 5 seconds
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
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="start-your-journey" className="py-24 md:py-32 border-t relative overflow-hidden bg-transparent" style={{ borderColor: 'var(--border-default)' }}>
      {/* Decorative blurred background orbs for light theme */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2
            className="font-display tracking-tight leading-tight mb-6 text-primary"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>
            Ready to take your career to the next level?
          </h2>
          <p
            className="font-body text-base md:text-lg font-normal max-w-2xl mx-auto text-center text-secondary"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>
            Be part of the best UI UX Design Courses Online and Offline now!
          </p>
          <p
            className="font-body text-sm font-normal mt-4 max-w-xl mx-auto text-center text-tertiary"
            style={{
              fontSize: 'clamp(0.875rem, 1.2vw, 0.9375rem)',
              lineHeight: '1.6'
            }}>
            Small batches. Real mentors. No shortcuts. Just honest design education.
          </p>
        </motion.div>

        {/* Grid: Balanced layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Certificate & Program highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-5 space-y-8 flex flex-col items-center lg:items-start"
          >
            {/* Clean white card for Adobe Certificate */}
            <div className="rounded-2xl overflow-hidden border bg-white border-[var(--border-default)] shadow-lg w-full max-w-md p-4">
              <Image
                src="/adobe-certified-certificate.webp"
                alt="Adobe Certified Professional certificate badge - Designient UI/UX design course"
                width={1720}
                height={1228}
                className="w-full h-auto object-contain rounded-lg"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>

            {/* Guarantees List */}
            <div className="w-full max-w-md space-y-4">
              {[
                '95% Placement success track record',
                'Adobe Certified Professional badge included',
                'Real client briefs & portfolio-ready case studies',
                'Lifetime access to Slack design community'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" strokeWidth={2} />
                  </div>
                  <span className="font-body text-sm font-medium text-primary">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Clean White Form Card */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[var(--border-default)] shadow-lg w-full max-w-xl mx-auto"
          >
            <div className="text-center mb-6">
              <h3 className="font-display text-lg md:text-xl font-semibold mb-1 text-primary">
                Get Course Details
              </h3>
              <p className="font-body text-xs text-secondary">
                Speak with our career counselors today
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="inquiry-name" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="inquiry-name"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={formInputClass}
                />
              </div>

              <div>
                <label htmlFor="inquiry-email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="inquiry-email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={formInputClass}
                />
              </div>

              <div>
                <label htmlFor="inquiry-phone" className="sr-only">
                  Phone Number
                </label>
                <div className="form-phone-row">
                  <CountryCodeSelect
                    value={formData.phoneCountryCode}
                    onChange={(code) => setFormData({ ...formData, phoneCountryCode: code })}
                    id="inquiry-phoneCountryCode"
                  />
                  <input
                    type="tel"
                    id="inquiry-phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 w-0"
                    style={{ display: 'none' }} // fallback for standard class, but we use formInputClass:
                  />
                  {/* Wait, phone input should use class formInputClass and flex-1 w-0 */}
                  <input
                    type="tel"
                    id="inquiry-phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`${formInputClass} flex-1 w-0`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-whatsapp" className="sr-only">
                  WhatsApp Number
                </label>
                <div className="form-phone-row">
                  <CountryCodeSelect
                    value={formData.whatsappCountryCode}
                    onChange={(code) => setFormData({ ...formData, whatsappCountryCode: code })}
                    id="inquiry-whatsappCountryCode"
                  />
                  <input
                    type="tel"
                    id="inquiry-whatsapp"
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className={`${formInputClass} flex-1 w-0`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-courseInterest" className="sr-only">
                  Course Interest
                </label>
                <div className="relative animate-fade-in">
                  <select
                    id="inquiry-courseInterest"
                    name="courseInterest"
                    required
                    value={formData.courseInterest}
                    onChange={handleInputChange}
                    className={formSelectClass}
                  >
                    <option value="" disabled className="text-gray-400">
                      Select Course Interest
                    </option>
                    {courseInterestOptions.map((option) => (
                      <option key={option.value} value={option.value} className="text-primary bg-card">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-lg text-center bg-red-50 border border-red-200 text-red-700">
                  <p className="font-body font-semibold text-xs text-red-700">
                    {error}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg font-body font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)]"
              >
                {isSubmitting ? 'Submitting...' : 'Book Free Consultation →'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg text-center bg-green-50 border border-green-200 text-green-700">
                  <p className="font-body font-semibold text-sm text-green-700">
                    Thank you! We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              )}

              <p className="text-center text-xs mt-3 flex items-center justify-center gap-1.5 text-tertiary">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                We respect your <Link href="/privacy-policy" className="hover:underline text-secondary">privacy</Link>. No spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
