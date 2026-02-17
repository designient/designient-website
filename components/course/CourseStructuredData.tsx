'use client'

import React from 'react';
import { StructuredData } from '../StructuredData';
import { useCurrency } from '../../contexts/CurrencyContext';
import { getCoursePrice } from '../../data/coursePricing';
import type { CoursePricingData } from '../../data/coursePricing';

interface CourseStructuredDataProps {
  courseSlug: keyof CoursePricingData;
  courseName: string;
  description: string;
  courseCode: string;
  educationalLevel: string;
  timeRequired: string;
  coursePrerequisites: string;
  teaches: string[];
  ratingValue: string;
  reviewCount: string;
  duration: string;
  totalTime: string;
  url: string;
  learningObjectives?: string[];
  outcome?: string;
  audience?: string | string[];
  educationalCredentialAwarded?: string;
}

export function CourseStructuredData({
  courseSlug,
  courseName,
  description,
  courseCode,
  educationalLevel,
  timeRequired,
  coursePrerequisites,
  teaches,
  ratingValue,
  reviewCount,
  duration,
  totalTime,
  url,
  learningObjectives,
  outcome,
  audience,
  educationalCredentialAwarded: propEducationalCredentialAwarded
}: CourseStructuredDataProps) {
  const { currency, isLoading } = useCurrency();
  
  // Get pricing for both currencies for SEO
  const inrPricing = getCoursePrice(courseSlug, 'INR');
  const usdPricing = getCoursePrice(courseSlug, 'USD');
  
  // Extract numeric values for structured data
  const extractPrice = (priceStr: string): string => {
    return priceStr.replace(/[₹$,]/g, '').trim();
  };

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Designient School of Masterminds',
      url: 'https://designient.com',
      logo: 'https://designient.com/designient-logo.svg'
    },
    educationalCredentialAwarded: propEducationalCredentialAwarded || (courseSlug === 'ui-ux-design-pro' ? 'UI/UX Design Pro Certificate' : undefined),
    timeRequired: timeRequired,
    courseMode: courseSlug === 'ui-ux-design-pro' ? ['Online', 'Offline', 'Hybrid'] : undefined,
    occupationalCredentialAwarded: courseSlug === 'ui-ux-design-pro' ? 'UI/UX Designer' : undefined,
    audience: audience ? {
      '@type': 'Audience',
      audienceType: Array.isArray(audience) ? audience : [audience]
    } : (courseSlug === 'ui-ux-design-pro' ? {
      '@type': 'Audience',
      audienceType: ['Beginners', 'Career Switchers', 'Working Professionals']
    } : undefined),
    learningObjectives: learningObjectives,
    outcome: outcome,
    teaches: teaches,
    inLanguage: 'English',
    url: url,
    courseCode: courseCode,
    educationalLevel: educationalLevel,
    coursePrerequisites: coursePrerequisites,
    // Include offers for both currencies for SEO
    offers: [
      {
        '@type': 'Offer',
        price: extractPrice(inrPricing.price),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: url,
        validFrom: '2026-01-01'
      },
      {
        '@type': 'Offer',
        price: extractPrice(usdPricing.price),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: url,
        validFrom: '2026-01-01'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: '5',
      worstRating: '1'
    },
    duration: duration,
    totalTime: totalTime
  };

  if (isLoading) {
    return null; // Don't render until currency is loaded
  }

  return <StructuredData data={courseSchema} />;
}
