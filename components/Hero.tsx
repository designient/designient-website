'use client'

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Star,
  BookOpen,
} from 'react-feather';
import Link from 'next/link';
import { CountryCodeSelect } from './shared/CountryCodeSelect';
import { courseInterestOptions } from '../data/homepageCatalog';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
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
    { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
    { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+254', country: 'Kenya', flag: '🇰🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+48', country: 'Poland', flag: '🇵🇱' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+7', country: 'Kazakhstan', flag: '🇰🇿' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+51', country: 'Peru', flag: '🇵🇪' },
    { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
    { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
    { code: '+212', country: 'Morocco', flag: '🇲🇦' },
    { code: '+213', country: 'Algeria', flag: '🇩🇿' },
    { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
    { code: '+218', country: 'Libya', flag: '🇱🇾' },
    { code: '+249', country: 'Sudan', flag: '🇸🇩' },
    { code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
    { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
    { code: '+256', country: 'Uganda', flag: '🇺🇬' },
    { code: '+250', country: 'Rwanda', flag: '🇷🇼' },
    { code: '+260', country: 'Zambia', flag: '🇿🇲' },
    { code: '+263', country: 'Zimbabwe', flag: '🇿🇼' },
    { code: '+264', country: 'Namibia', flag: '🇳🇦' },
    { code: '+267', country: 'Botswana', flag: '🇧🇼' },
    { code: '+230', country: 'Mauritius', flag: '🇲🇺' },
    { code: '+248', country: 'Seychelles', flag: '🇸🇨' },
    { code: '+960', country: 'Maldives', flag: '🇲🇻' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
    { code: '+962', country: 'Jordan', flag: '🇯🇴' },
    { code: '+972', country: 'Israel', flag: '🇮🇱' },
    { code: '+964', country: 'Iraq', flag: '🇮🇶' },
    { code: '+98', country: 'Iran', flag: '🇮🇷' },
    { code: '+93', country: 'Afghanistan', flag: '🇦🇫' },
    { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' },
    { code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+992', country: 'Tajikistan', flag: '🇹🇯' },
    { code: '+993', country: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+994', country: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+374', country: 'Armenia', flag: '🇦🇲' },
    { code: '+995', country: 'Georgia', flag: '🇬🇪' },
    { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
    { code: '+375', country: 'Belarus', flag: '🇧🇾' },
    { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
    { code: '+371', country: 'Latvia', flag: '🇱🇻' },
    { code: '+372', country: 'Estonia', flag: '🇪🇪' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
    { code: '+385', country: 'Croatia', flag: '🇭🇷' },
    { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
    { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
    { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
    { code: '+36', country: 'Hungary', flag: '🇭🇺' },
    { code: '+40', country: 'Romania', flag: '🇷🇴' },
    { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
    { code: '+381', country: 'Serbia', flag: '🇷🇸' },
    { code: '+382', country: 'Montenegro', flag: '🇲🇪' },
    { code: '+387', country: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { code: '+389', country: 'North Macedonia', flag: '🇲🇰' },
    { code: '+355', country: 'Albania', flag: '🇦🇱' },
    { code: '+356', country: 'Malta', flag: '🇲🇹' },
    { code: '+357', country: 'Cyprus', flag: '🇨🇾' },
    { code: '+354', country: 'Iceland', flag: '🇮🇸' }
  ];
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const filteredPhoneCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(phoneSearch.toLowerCase()) ||
    country.code.includes(phoneSearch)
  );

  const filteredWhatsappCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(whatsappSearch.toLowerCase()) ||
    country.code.includes(whatsappSearch)
  );

  const selectedPhoneCountry = countryCodes.find(c => c.code === formData.phoneCountryCode);
  const selectedWhatsappCountry = countryCodes.find(c => c.code === formData.whatsappCountryCode);

  const phoneDropdownRef = useRef<HTMLDivElement>(null);
  const whatsappDropdownRef = useRef<HTMLDivElement>(null);

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
  const companies = [
    {
      name: 'Amazon',
      logo: (
        <Image
          src="/company-logos/amazon.svg"
          alt="Amazon logo - UI UX design students from Designient work at Amazon"
          className="h-8 w-auto object-contain company-logo-mono"
          width={120}
          height={32}
        />
      )
    },
    {
      name: 'Accenture',
      logo: (
        <Image
          src="/company-logos/accenture.svg"
          alt="Accenture logo - UI UX design students from Designient work at Accenture"
          className="h-8 w-auto object-contain company-logo-mono"
          width={120}
          height={32}
        />
      )
    },
    {
      name: 'Cisco',
      logo: (
        <Image
          src="/company-logos/cisco.svg"
          alt="Cisco logo - UI UX design students from Designient work at Cisco"
          className="h-8 w-auto object-contain company-logo-mono"
          width={120}
          height={32}
        />
      )
    },
    {
      name: 'Google',
      logo: (
        <Image
          src="/company-logos/google.svg"
          alt="Google logo - UI UX design students from Designient work at Google"
          className="h-8 w-auto object-contain company-logo-mono"
          width={120}
          height={32}
        />
      )
    },
    {
      name: 'PayPal',
      logo: (
        <Image
          src="/company-logos/paypal.svg"
          alt="PayPal logo - UI UX design students from Designient work at PayPal"
          className="h-8 w-auto object-contain company-logo-mono"
          width={120}
          height={32}
        />
      )
    },
    {
      name: 'Mercedes Benz',
      logo: (
        <Image
          src="/company-logos/mercedes.svg"
          alt="Mercedes Benz logo - UI UX design students from Designient work at Mercedes Benz"
          className="h-8 w-auto object-contain company-logo-mono"
          width={120}
          height={32}
        />
      )
    },
    {
      name: 'Adobe',
      logo: (
        <Image
          src="/company-logos/adobe.svg"
          alt="Adobe logo - UI UX design students from Designient work at Adobe"
          className="h-8 w-auto object-contain company-logo-mono"
          width={120}
          height={32}
        />
      )
    },
    {
      name: 'Deloitte',
      logo: (
        <Image
          src="/company-logos/deloitte.png"
          alt="Deloitte logo - UI UX design students from Designient work at Deloitte"
          className="h-8 w-auto object-contain company-logo-mono"
          width={120}
          height={32}
        />
      )
    },
    {
      name: 'Lenovo',
      logo: (
        <Image
          src="/company-logos/lenovo.svg"
          alt="Lenovo logo - UI UX design students from Designient work at Lenovo"
          className="h-8 w-auto object-contain company-logo-mono"
          width={120}
          height={32}
        />
      )
    },
    {
      name: 'Meta',
      logo: (
        <Image
          src="/company-logos/meta.svg"
          alt="Meta logo - UI UX design students from Designient work at Meta"
          className="h-8 w-auto object-contain company-logo-mono"
          width={120}
          height={32}
        />
      )
    }];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Designient School',
    description:
      'UI/UX design courses and AI automation training in India with 95% placement support, live mentorship, and real projects.',
    url: 'https://designient.com',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN'
      }],

    offers: {
      '@type': 'Offer',
      category: 'UI/UX Design Training',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150'
    }
  };
  return (
    <section
      className="hero-glow relative flex flex-col pt-20 pb-8 md:pt-28 md:pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-warm)'
      }}
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/EducationalOrganization">

      {/* Main Container - 16px margin on mobile (px-4), 24px on md, 32px on lg */}
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full flex-1">
        {/* Grid: Stack on mobile, 2-column on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_480px] gap-8 lg:gap-8 items-start">
          {/* Left Column: Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="text-left order-1">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 md:mb-4"
              style={{ backgroundColor: 'var(--color-highlight)' }}>
              <span
                className="font-body font-bold uppercase tracking-wide text-xs md:text-sm"
                style={{ color: 'var(--text-on-accent)' }}>
                Mentor-Led. Career-Focused.
              </span>
            </motion.div>

            {/* Main Heading - Optimized for mobile */}
            <h1
              id="hero-heading"
              className="font-display tracking-wide leading-[1.1] mb-4 md:mb-6 font-bold"
              style={{
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 5vw, 3.25rem)',
                color: 'var(--text-primary)',
                wordBreak: 'break-word'
              }}
              itemProp="name">
              UI UX Design Courses and AI Training Built Around Real Outcomes — Not Just Certificates
            </h1>

            <p
              className="font-body text-base mb-4 md:mb-6 max-w-2xl font-normal leading-relaxed"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.9375rem, 2vw, 1.25rem)',
                lineHeight: '1.6'
              }}
              itemProp="description">
              We run small batches. We teach with live mentors. We use real briefs, not mock projects. We have placed 150+ students at companies like Google, Amazon, Microsoft, and Flipkart. And we do not believe in courses that keep you busy without making you better.
            </p>

            <div className="flex flex-wrap gap-x-3 gap-y-2 mb-4 md:mb-6">
              {['95% Placement Rate', 'Small Batches', 'Live Mentorship', 'Real Projects', 'Adobe Certified', '5 Courses', '2 Tracks'].map((chip) => (
                <div key={chip} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                  <span className="font-body font-medium text-xs md:text-sm" style={{ color: 'var(--text-primary)' }}>
                    {chip}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Stack on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
              <Link
                href="/courses"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-body font-bold transition-transform hover:scale-105 min-h-[48px] w-full sm:w-auto shadow-lg shadow-purple-900/10 text-sm md:text-base"
                style={{
                  backgroundColor: 'var(--color-cta)',
                  color: 'var(--text-on-accent)'
                }}>
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span>Explore Courses</span>
              </Link>
              <Link
                href="/corporates/hiring-consulting"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-body font-bold border-2 transition-colors hover:bg-[var(--color-accent-muted)] min-h-[48px] w-full sm:w-auto text-sm md:text-base"
                style={{
                  borderColor: 'var(--text-primary)',
                  color: 'var(--text-primary)'
                }}>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                <span>Hiring Support</span>
              </Link>
            </div>

            {/* Social Proof - Compact on mobile */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) =>
                  <div
                    key={i}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt={`Designient UI UX design student profile ${i + 1}`}
                      width="32"
                      height="32"
                      loading="lazy"
                      className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              <Link href="/success-stories" className="group">
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) =>
                    <Star
                      key={i}
                      className="w-3 h-3 fill-current"
                      style={{ color: 'var(--color-highlight)' }} />
                  )}
                </div>
                <p
                  className="font-body text-[11px] md:text-xs font-medium group-hover:underline transition-all"
                  style={{ color: 'var(--text-secondary)' }}>
                  4.8/5 from 150+ students
                </p>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Form - Constrained width on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
          className="form-panel bg-card p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl relative z-20 order-2 w-full">

            <div className="text-center mb-3 md:mb-4">
              <h3
                className="font-display text-lg md:text-xl mb-1"
                style={{ color: 'var(--text-primary)' }}>
                Get Course Details
              </h3>
              <p
                className="font-body text-xs"
                style={{ color: 'var(--text-muted)' }}>
                Speak with our career counselors today
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="hero-name" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="hero-name"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all min-h-[44px]"
                  style={{
                    borderColor: 'var(--border-default)'
                  }} />

              </div>

              <div>
                <label htmlFor="hero-email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="hero-email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all min-h-[44px]"
                  style={{
                    borderColor: 'var(--border-default)'
                  }} />

              </div>

              <div>
                <label htmlFor="hero-phone" className="sr-only">
                  Phone Number
                </label>
                <div className="flex gap-2 items-start w-full">
                  <CountryCodeSelect
                    value={formData.phoneCountryCode}
                    onChange={(code) => setFormData({ ...formData, phoneCountryCode: code })}
                    id="hero-phoneCountryCode"
                    className="flex-shrink-0"
                  />
                  <input
                    type="tel"
                    id="hero-phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 w-0 px-4 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all min-h-[44px]"
                    style={{
                      borderColor: 'var(--border-default)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="hero-whatsapp" className="sr-only">
                  WhatsApp Number
                </label>
                <div className="flex gap-2 items-start w-full">
                  <CountryCodeSelect
                    value={formData.whatsappCountryCode}
                    onChange={(code) => setFormData({ ...formData, whatsappCountryCode: code })}
                    id="hero-whatsappCountryCode"
                    className="flex-shrink-0"
                  />
                  <input
                    type="tel"
                    id="hero-whatsapp"
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="flex-1 w-0 px-4 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all min-h-[44px]"
                    style={{
                      borderColor: 'var(--border-default)'
                    }}
                  />
                </div>
              </div>




              <div>
                <label htmlFor="hero-courseInterest" className="sr-only">
                  Course Interest
                </label>
                <select
                  id="hero-courseInterest"
                  name="courseInterest"
                  required
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-2.5 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 transition-all appearance-none min-h-[44px]"
                  style={{
                    borderColor: 'var(--border-default)',
                    color: formData.courseInterest ? 'var(--text-primary)' : 'var(--text-muted)'
                  }}>

                  <option value="" disabled>
                    Select Course Interest
                  </option>
                  {courseInterestOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-3.5 rounded-full font-body font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed surface-on-accent"
                style={{
                  backgroundColor: 'var(--color-cta)',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)'
                }}>

                {isSubmitting ? 'Submitting...' : 'Book Free Consultation →'}
              </button>

              {submitStatus === 'success' && (
                <div
                  className="mt-4 p-3 rounded-lg text-center"
                  style={{
                    backgroundColor: 'var(--color-success-bg)',
                    border: '1px solid var(--color-success)',
                    color: 'var(--color-success)'
                  }}>
                  <p className="font-body font-semibold text-sm">
                    Thank you! We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  className="mt-4 p-3 rounded-lg text-center"
                  style={{
                    backgroundColor: 'var(--color-error-bg)',
                    border: '1px solid var(--color-error)',
                    color: 'var(--color-error)'
                  }}>
                  <p className="font-body font-semibold text-sm">
                    Something went wrong. Please try again or email us directly at admissions@designient.com
                  </p>
                </div>
              )}

              <p
                className="text-center text-xs mt-3 flex items-center justify-center gap-1"
                style={{
                  color: 'var(--text-muted)'
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
                We respect your <Link href="/privacy-policy" className="underline hover:no-underline" style={{ color: 'var(--color-primary)' }}>privacy</Link>. No spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Company Logos Strip - Auto Scrolling */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.6,
          duration: 0.8
        }}
        className="max-w-container mx-auto px-4 md:px-6 lg:px-8 w-full mt-6 md:mt-10">

        <p
          className="text-center font-body text-[10px] md:text-xs uppercase tracking-wider mb-3 md:mb-4 font-semibold"
          style={{ color: 'var(--text-muted)' }}>
          Our Students Work At
        </p>
        <div className="py-4 md:py-6 overflow-hidden company-logos-container">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12 animate-scroll" style={{ width: 'max-content' }}>
            {/* First set of logos */}
            {companies.map((company, index) =>
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                style={{ minHeight: '3rem' }}>

                {company.logo}
              </div>
            )}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) =>
              <div
                key={`${company.name}-duplicate-${index}`}
                className="flex-shrink-0 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                style={{ minHeight: '3rem' }}>

                {company.logo}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }} />

    </section>);

}