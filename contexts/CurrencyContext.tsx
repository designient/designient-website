'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Currency, getCoursePrice, getCurrencySymbol, getFormattedPrice } from '../data/coursePricing';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  getCoursePrice: (courseSlug: keyof typeof import('../data/coursePricing').coursePricing, currency?: Currency) => { price: string; originalPrice?: string };
  getCurrencySymbol: () => string;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const STORAGE_KEY = 'designient_currency_preference';
const DEFAULT_CURRENCY: Currency = 'USD'; // Default to USD if detection fails

/**
 * Detect user's country based on timezone and locale
 * This is a client-side detection that works without external APIs
 */
function detectUserCountry(): 'IN' | 'OTHER' {
  if (typeof window === 'undefined') return 'OTHER';

  try {
    // Method 1: Check timezone (most reliable for India)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone === 'Asia/Kolkata' || timezone.includes('Calcutta') || timezone.includes('Kolkata')) {
      return 'IN';
    }

    // Method 1b: Check timezone offset (India is UTC+5:30)
    const now = new Date();
    const utcOffset = -now.getTimezoneOffset(); // offset in minutes
    const indiaOffset = 330; // UTC+5:30 = 330 minutes
    // Allow ±30 minutes tolerance for DST or slight variations
    if (Math.abs(utcOffset - indiaOffset) <= 30) {
      return 'IN';
    }

    // Method 2: Check locale (case-insensitive)
    const locale = (navigator.language || (navigator as any).userLanguage || '').toLowerCase();
    if (locale.includes('in') && (locale.includes('hi') || locale.includes('en') || locale.includes('gu') || locale.includes('ta') || locale.includes('te') || locale.includes('kn') || locale.includes('ml') || locale.includes('mr') || locale.includes('pa') || locale.includes('or') || locale.includes('as') || locale.includes('bn'))) {
      return 'IN';
    }
    // Also check for explicit en-IN, hi-IN, etc.
    if (locale === 'en-in' || locale === 'hi-in' || locale.startsWith('en-in') || locale.startsWith('hi-in')) {
      return 'IN';
    }

    // Method 3: Check language preferences array
    if (navigator.languages && navigator.languages.length > 0) {
      for (const lang of navigator.languages) {
        const langLower = lang.toLowerCase();
        if (langLower.includes('in') && (langLower.includes('hi') || langLower.includes('en') || langLower.includes('gu') || langLower.includes('ta') || langLower.includes('te') || langLower.includes('kn') || langLower.includes('ml') || langLower.includes('mr') || langLower.includes('pa') || langLower.includes('or') || langLower.includes('as') || langLower.includes('bn'))) {
          return 'IN';
        }
        if (langLower === 'en-in' || langLower === 'hi-in' || langLower.startsWith('en-in') || langLower.startsWith('hi-in')) {
          return 'IN';
        }
      }
    }

    return 'OTHER';
  } catch (error) {
    console.warn('Currency detection failed:', error);
    return 'OTHER';
  }
}

/**
 * Get initial currency preference
 * Priority: localStorage > country detection > default
 */
function getInitialCurrency(): Currency {
  if (typeof window === 'undefined') return DEFAULT_CURRENCY;

  try {
    // Check localStorage first (user's manual preference)
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'INR' || stored === 'USD') {
      return stored as Currency;
    }

    // If no stored preference, detect country
    const country = detectUserCountry();
    return country === 'IN' ? 'INR' : 'USD';
  } catch (error) {
    console.warn('Failed to get initial currency:', error);
    return DEFAULT_CURRENCY;
  }
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // Use lazy initializer to detect currency immediately on client-side
  const [currency, setCurrencyState] = useState<Currency>(() => {
    // On server-side, return default. On client-side, detect immediately.
    if (typeof window === 'undefined') return DEFAULT_CURRENCY;
    return getInitialCurrency();
  });
  const [isLoading, setIsLoading] = useState(true);

  // Initialize currency on mount (for any edge cases or re-hydration)
  useEffect(() => {
    const initialCurrency = getInitialCurrency();
    setCurrencyState(initialCurrency);
    setIsLoading(false);
  }, []);

  // Persist currency changes to localStorage
  const setCurrency = useCallback((newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    try {
      localStorage.setItem(STORAGE_KEY, newCurrency);
    } catch (error) {
      console.warn('Failed to save currency preference:', error);
    }
  }, []);

  // Helper function to get course price
  const getCoursePriceHelper = useCallback((
    courseSlug: keyof typeof import('../data/coursePricing').coursePricing,
    currencyOverride?: Currency
  ) => {
    const activeCurrency = currencyOverride || currency;
    return getFormattedPrice(courseSlug, activeCurrency);
  }, [currency]);

  // Helper function to get currency symbol
  const getCurrencySymbolHelper = useCallback(() => {
    return getCurrencySymbol(currency);
  }, [currency]);

  const value: CurrencyContextType = {
    currency,
    setCurrency,
    getCoursePrice: getCoursePriceHelper,
    getCurrencySymbol: getCurrencySymbolHelper,
    isLoading
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

/**
 * Hook to use currency context
 */
export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
