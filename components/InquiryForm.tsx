'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';


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
  const [phoneSearch, setPhoneSearch] = useState('');
  const [whatsappSearch, setWhatsappSearch] = useState('');
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [whatsappDropdownOpen, setWhatsappDropdownOpen] = useState(false);
  const phoneDropdownRef = useRef<HTMLDivElement>(null);
  const whatsappDropdownRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Comprehensive list of country codes with flags (India first, then sorted alphabetically)
  const countryCodes = [
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+1', country: 'Canada', flag: '🇨🇦' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
    { code: '+63', country: 'Philippines', flag: '🇵🇭' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+254', country: 'Kenya', flag: '🇰🇪' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+51', country: 'Peru', flag: '🇵🇪' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' }
  ];

  const selectedPhoneCountry = countryCodes.find(c => c.code === formData.phoneCountryCode) || countryCodes[0];
  const selectedWhatsappCountry = countryCodes.find(c => c.code === formData.whatsappCountryCode) || countryCodes[0];

  const filteredPhoneCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(phoneSearch.toLowerCase()) ||
    country.code.includes(phoneSearch)
  );

  const filteredWhatsappCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(whatsappSearch.toLowerCase()) ||
    country.code.includes(whatsappSearch)
  );

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(event.target as Node)) {
        setPhoneDropdownOpen(false);
      }
      if (whatsappDropdownRef.current && !whatsappDropdownRef.current.contains(event.target as Node)) {
        setWhatsappDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

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
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="start-your-journey" className="py-24 md:py-32" style={{ backgroundColor: '#fceed1' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="text-center mb-12 md:mb-16">
          <h2
            className="font-display tracking-wide leading-tight mb-6"
            style={{
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>
            Ready to take your career to the next level?
          </h2>
          <p
            className="font-body text-base md:text-lg font-normal max-w-2xl mx-auto md:whitespace-nowrap text-center"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>
            Be part of the best UI UX Design Courses Online and Offline now!
          </p>
          <p
            className="font-body text-sm font-normal mt-4 max-w-xl mx-auto text-center"
            style={{
              color: '#6b7280',
              fontSize: 'clamp(0.875rem, 1.2vw, 0.9375rem)',
              lineHeight: '1.6'
            }}>
            Small batches. Real mentors. No shortcuts. Just honest design education.
          </p>
        </motion.div>

        {/* Grid: Balanced center-aligned layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center max-w-5xl mx-auto">
          {/* Left Column: Certificate Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="flex flex-col items-center justify-center">
            <div className="rounded-2xl overflow-hidden border bg-white shadow-lg w-full max-w-md" style={{ borderColor: '#e5e5e5' }}>
              <Image
                src="/adobe-certified-certificate.webp"
                alt="Adobe Certified Professional certificate badge - Designient UI/UX design course"
                width={1720}
                height={1228}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </motion.div>

          {/* Right Column: Form - Exact same styling as Hero section */}
          <motion.div
            ref={sectionRef}
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl relative z-20 w-full max-w-md mx-auto lg:mx-0">
            <div className="text-center mb-3 md:mb-4">
              <h3
                className="font-display text-lg md:text-xl mb-1"
                style={{ color: '#1a1a1a' }}>
                Get Course Details
              </h3>
              <p
                className="font-body text-xs"
                style={{ color: '#6a6a6a' }}>
                Speak with our career counselors today
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all min-h-[44px]"
                  style={{
                    borderColor: '#e5e7eb'
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all min-h-[44px]"
                  style={{
                    borderColor: '#e5e7eb'
                  }}
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <div className="relative min-w-[100px] md:min-w-[140px]" ref={phoneDropdownRef}>
                    <button
                      type="button"
                      onClick={() => {
                        setPhoneDropdownOpen(!phoneDropdownOpen);
                        setWhatsappDropdownOpen(false);
                      }}
                      className="w-full px-3 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all flex items-center gap-2 min-h-[44px]"
                      style={{
                        borderColor: '#e5e7eb',
                        color: '#1a1a1a'
                      }}>
                      <span>{selectedPhoneCountry?.flag}</span>
                      <span>{selectedPhoneCountry?.code}</span>
                      <ChevronDown className="w-4 h-4 ml-auto" />
                    </button>
                    {phoneDropdownOpen && (
                      <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto"
                        style={{ borderColor: '#e5e7eb' }}>
                        <div className="relative px-3 py-2 border-b" style={{ borderColor: '#e5e7eb' }}>
                          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#9ca3af' }} />
                          <input
                            type="text"
                            placeholder="Search country..."
                            value={phoneSearch}
                            onChange={(e) => setPhoneSearch(e.target.value)}
                            className="w-full pl-8 pr-3 py-1 text-sm focus:outline-none"
                            autoFocus
                          />
                        </div>
                        <div className="max-h-48 overflow-y-auto">
                          {filteredPhoneCountries.map((country) => (
                            <button
                              key={country.code + country.country}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, phoneCountryCode: country.code });
                                setPhoneDropdownOpen(false);
                                setPhoneSearch('');
                              }}
                              className="w-full px-3 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
                              style={{ color: '#1a1a1a' }}>
                              <span>{country.flag}</span>
                              <span>{country.code}</span>
                              <span>{country.country}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all min-h-[44px]"
                    style={{
                      borderColor: '#e5e7eb'
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="whatsapp" className="sr-only">
                  WhatsApp Number
                </label>
                <div className="flex gap-2">
                  <div className="relative min-w-[100px] md:min-w-[140px]" ref={whatsappDropdownRef}>
                    <button
                      type="button"
                      onClick={() => {
                        setWhatsappDropdownOpen(!whatsappDropdownOpen);
                        setPhoneDropdownOpen(false);
                      }}
                      className="w-full px-3 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all flex items-center gap-2 min-h-[44px]"
                      style={{
                        borderColor: '#e5e7eb',
                        color: '#1a1a1a'
                      }}>
                      <span>{selectedWhatsappCountry?.flag}</span>
                      <span>{selectedWhatsappCountry?.code}</span>
                      <ChevronDown className="w-4 h-4 ml-auto" />
                    </button>
                    {whatsappDropdownOpen && (
                      <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto"
                        style={{ borderColor: '#e5e7eb' }}>
                        <div className="relative px-3 py-2 border-b" style={{ borderColor: '#e5e7eb' }}>
                          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#9ca3af' }} />
                          <input
                            type="text"
                            placeholder="Search country..."
                            value={whatsappSearch}
                            onChange={(e) => setWhatsappSearch(e.target.value)}
                            className="w-full pl-8 pr-3 py-1 text-sm focus:outline-none"
                            autoFocus
                          />
                        </div>
                        <div className="max-h-48 overflow-y-auto">
                          {filteredWhatsappCountries.map((country) => (
                            <button
                              key={`whatsapp-${country.code}-${country.country}`}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, whatsappCountryCode: country.code });
                                setWhatsappDropdownOpen(false);
                                setWhatsappSearch('');
                              }}
                              className="w-full px-3 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
                              style={{ color: '#1a1a1a' }}>
                              <span>{country.flag}</span>
                              <span>{country.code}</span>
                              <span>{country.country}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all min-h-[44px]"
                    style={{
                      borderColor: '#e5e7eb'
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="courseInterest" className="sr-only">
                  Course Interest
                </label>
                <select
                  id="courseInterest"
                  name="courseInterest"
                  required
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all appearance-none min-h-[44px]"
                  style={{
                    borderColor: '#e5e7eb',
                    color: formData.courseInterest ? '#1a1a1a' : '#9ca3af'
                  }}>
                  <option value="" disabled>
                    Select Course Interest
                  </option>
                  <option value="bootcamp">UI/UX Design Bootcamp (30 Days)</option>
                  <option value="pro">UI/UX Design Pro (3 Months)</option>
                  <option value="master">UI/UX Design Master (6 Months)</option>
                  <option value="prompt">Prompt Engineering Mastery (30 Days)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-3.5 rounded-full font-body font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: '#8458B3',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)'
                }}>
                {isSubmitting ? 'Submitting...' : 'Get Free Consultation →'}
              </button>

              {submitStatus === 'success' && (
                <div
                  className="mt-4 p-4 rounded-lg text-center"
                  style={{
                    backgroundColor: '#d1fae5',
                    border: '1px solid #10b981',
                    color: '#065f46'
                  }}>
                  <p className="font-body font-semibold text-sm">
                    Thank you! We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  className="mt-4 p-4 rounded-lg text-center"
                  style={{
                    backgroundColor: '#fee2e2',
                    border: '1px solid #ef4444',
                    color: '#991b1b'
                  }}>
                  <p className="font-body font-semibold text-sm">
                    Something went wrong. Please try again or email us directly at admissions@designient.com
                  </p>
                </div>
              )}

              <p
                className="text-center text-xs mt-3 flex items-center justify-center gap-1"
                style={{
                  color: '#6a6a6a'
                }}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2">
                  </rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                We respect your <Link href="/privacy-policy" className="underline hover:no-underline" style={{ color: '#8458B3' }}>privacy</Link>. No spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
