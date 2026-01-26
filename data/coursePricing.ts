/**
 * Course Pricing Configuration
 * 
 * This is the single source of truth for all course pricing.
 * Update prices here to reflect changes across the entire website.
 * 
 * Prices are defined in both INR (for India) and USD (for international).
 * These are NOT simple currency conversions - they are independent pricing
 * that can be updated separately for each market.
 */

export type Currency = 'INR' | 'USD';

export interface CoursePricing {
  inr: {
    price: string;
    originalPrice?: string;
  };
  usd: {
    price: string;
    originalPrice?: string;
  };
}

export interface CoursePricingData {
  'ui-ux-design-bootcamp': CoursePricing;
  'ui-ux-design-pro': CoursePricing;
  'ui-ux-design-master': CoursePricing;
  'prompt-engineering-mastery': CoursePricing;
}

/**
 * Course Pricing Configuration
 * 
 * Update prices here for all courses.
 * Prices are independent for INR and USD markets.
 */
export const coursePricing: CoursePricingData = {
  'ui-ux-design-bootcamp': {
    inr: {
      price: '₹45,000',
      originalPrice: '₹60,000'
    },
    usd: {
      price: '$599',
      originalPrice: '$799'
    }
  },
  'ui-ux-design-pro': {
    inr: {
      price: '₹75,000',
      originalPrice: '₹95,000'
    },
    usd: {
      price: '$999',
      originalPrice: '$1,299'
    }
  },
  'ui-ux-design-master': {
    inr: {
      price: '₹1,25,000',
      originalPrice: '₹1,50,000'
    },
    usd: {
      price: '$1,699',
      originalPrice: '$1,999'
    }
  },
  'prompt-engineering-mastery': {
    inr: {
      price: '₹35,000',
      originalPrice: '₹45,000'
    },
    usd: {
      price: '$499',
      originalPrice: '$649'
    }
  }
};

/**
 * Get pricing for a specific course and currency
 */
export function getCoursePrice(courseSlug: keyof CoursePricingData, currency: Currency): CoursePricing['inr'] | CoursePricing['usd'] {
  const course = coursePricing[courseSlug];
  return currency === 'INR' ? course.inr : course.usd;
}

/**
 * Get currency symbol
 */
export function getCurrencySymbol(currency: Currency): string {
  return currency === 'INR' ? '₹' : '$';
}

/**
 * Get formatted price with currency symbol
 */
export function getFormattedPrice(courseSlug: keyof CoursePricingData, currency: Currency): {
  price: string;
  originalPrice?: string;
} {
  const pricing = getCoursePrice(courseSlug, currency);
  return {
    price: pricing.price,
    originalPrice: pricing.originalPrice
  };
}
