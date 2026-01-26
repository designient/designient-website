'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Star,
  PlayCircle,
  BookOpen,
  ChevronDown,
  Search } from
'react-feather';
import Link from 'next/link';
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
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
  {
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };
  const companies = [
  {
    name: 'Amazon',
    logo: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
        alt="Amazon company logo - Designient students work at Amazon" 
        className="h-8 w-auto object-contain"
        width="120"
        height="32"
        style={{ opacity: 1 }}
      />
    )
  },
  {
    name: 'Accenture',
    logo: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" 
        alt="Accenture company logo - Designient students work at Accenture" 
        className="h-8 w-auto object-contain"
        width="120"
        height="32"
        style={{ opacity: 1 }}
      />
    )
  },
  {
    name: 'Cisco',
    logo: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" 
        alt="Cisco company logo - Designient students work at Cisco" 
        className="h-8 w-auto object-contain"
        width="120"
        height="32"
        style={{ opacity: 1 }}
      />
    )
  },
  {
    name: 'Google',
    logo: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
        alt="Google company logo - Designient students work at Google" 
        className="h-8 w-auto object-contain"
        width="120"
        height="32"
        style={{ opacity: 1 }}
      />
    )
  },
  {
    name: 'PayPal',
    logo: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
        alt="PayPal company logo - Designient students work at PayPal" 
        className="h-8 w-auto object-contain"
        width="120"
        height="32"
        style={{ opacity: 1 }}
      />
    )
  },
  {
    name: 'Salesforce',
    logo: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" 
        alt="Salesforce company logo - Designient students work at Salesforce" 
        className="h-8 w-auto object-contain"
        width="120"
        height="32"
        style={{ opacity: 1 }}
      />
    )
  },
  {
    name: 'Mercedes Benz',
    logo: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/4/48/Mercedes-Benz_logo.svg" 
        alt="Mercedes Benz company logo - Designient students work at Mercedes Benz" 
        className="h-8 w-auto object-contain"
        width="120"
        height="32"
        style={{ opacity: 1 }}
      />
    )
  },
  {
    name: 'Adobe',
    logo: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg" 
        alt="Adobe company logo - Designient students work at Adobe" 
        className="h-8 w-auto object-contain"
        width="120"
        height="32"
        style={{ opacity: 1 }}
      />
    )
  }];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Designient School',
    description:
    'UI/UX Design Training Institute in Bangalore and Hyderabad with 95% Job Placement',
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
      reviewCount: '350'
    }
  };
  return (
    <section
      className="relative flex flex-col pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      style={{
        backgroundColor: '#FFF6E2'
      }}
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/EducationalOrganization">

      <div className="max-w-container mx-auto px-3 md:px-4 relative z-10 w-full flex-1">
        <div className="grid lg:grid-cols-[60%_40%] gap-6 sm:gap-8 lg:gap-12 items-start">
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
            className="text-left">

            <motion.div
              initial={{
                opacity: 1,
                y: 0
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.3
              }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-4"
              style={{
                backgroundColor: '#f2d53c'
              }}>

              <span
                className="font-body font-bold uppercase tracking-wide"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(0.6875rem, 1.5vw, 0.875rem)'
                }}>

                Personalised mentorship. Small batches. Real careers.
              </span>
            </motion.div>

            <h1
              id="hero-heading"
              className="font-display tracking-wide leading-[0.95] mb-4 font-bold"
              style={{ fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#1a1a1a' }}
              itemProp="name">

              UI/UX Design Courses for Everyone
            </h1>

            <p
              className="font-body text-base md:text-lg mb-6 max-w-2xl font-normal leading-relaxed"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.6'
              }}
              itemProp="description">

              Beginner-friendly UI/UX design courses integrated with AI tools. Learn modern design workflows that prepare you for real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle
                  className="w-5 h-5"
                  style={{
                    color: '#8458B3'
                  }} />

                <span
                  className="font-body font-medium text-sm"
                  style={{
                    color: '#1a1a1a'
                  }}>

                  Adobe Certified
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle
                  className="w-5 h-5"
                  style={{
                    color: '#8458B3'
                  }} />

                <span
                  className="font-body font-medium text-sm"
                  style={{
                    color: '#1a1a1a'
                  }}>

                  Job Guarantee
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle
                  className="w-5 h-5"
                  style={{
                    color: '#8458B3'
                  }} />

                <span
                  className="font-body font-medium text-sm"
                  style={{
                    color: '#1a1a1a'
                  }}>

                  1-on-1 Mentorship
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <button
                className="flex items-center gap-2 px-5 py-3 sm:py-2.5 rounded-full font-body font-bold transition-transform hover:scale-105 min-h-[44px]"
                style={{
                  backgroundColor: '#8458B3',
                  color: 'white',
                  fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)'
                }}>

                <PlayCircle className="w-4 h-4 flex-shrink-0" />
                <span>Watch Demo</span>
              </button>
              <Link
                href="/courses"
                className="flex items-center gap-2 px-5 py-3 sm:py-2.5 rounded-full font-body font-bold border-2 transition-colors hover:bg-white/50 min-h-[44px]"
                style={{
                  borderColor: '#1a1a1a',
                  color: '#1a1a1a',
                  fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)'
                }}>

                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span>Explore courses</span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) =>
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">

                    <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt={`Designient student testimonial profile ${i + 1}`}
                    width="32"
                    height="32"
                    className="w-full h-full object-cover" />

                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) =>
                  <Star
                    key={i}
                    className="w-3 h-3 fill-current"
                    style={{
                      color: '#f2d53c'
                    }} />

                  )}
                </div>
                <p
                  className="font-body text-xs font-medium"
                  style={{
                    color: '#4a4a4a'
                  }}>

                  4.8/5 from 350+ reviews
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="bg-white p-6 rounded-3xl shadow-xl relative z-20">

            <div className="text-center mb-4">
              <h3
                className="font-display text-xl mb-1"
                style={{
                  color: '#1a1a1a'
                }}>

                Get Course Details
              </h3>
              <p
                className="font-body text-xs"
                style={{
                  color: '#6a6a6a'
                }}>

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
                  }} />

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
                  }} />

              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <div className="relative" style={{ minWidth: '140px' }} ref={phoneDropdownRef}>
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
                    }} />
                </div>
              </div>

              <div>
                <label htmlFor="whatsapp" className="sr-only">
                  WhatsApp Number
                </label>
                <div className="flex gap-2">
                  <div className="relative" style={{ minWidth: '140px' }} ref={whatsappDropdownRef}>
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
                    }} />
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
                className="w-full py-3 sm:py-3.5 rounded-full font-body font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg min-h-[48px]"
                style={{
                  backgroundColor: '#8458B3',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)'
                }}>

                Get Free Consultation →
              </button>

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
                We respect your privacy. No spam.
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
        className="max-w-container mx-auto px-3 md:px-4 w-full mt-8 md:mt-12">

        <p
          className="text-center font-body text-xs uppercase tracking-wider mb-4 font-semibold"
          style={{
            color: '#6a6a6a'
          }}>

          Our Students Work At
        </p>
        <div className="py-6">
          <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-8 md:gap-12">
            {companies.map((company, index) =>
            <div
              key={`${company.name}-${index}`}
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