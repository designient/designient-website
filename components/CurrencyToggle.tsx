'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useCurrency } from '../contexts/CurrencyContext';

interface CurrencyToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function CurrencyToggle({ className = '', size = 'md' }: CurrencyToggleProps) {
  const { currency, setCurrency } = useCurrency();

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5'
  };

  const handleToggle = (newCurrency: 'INR' | 'USD') => {
    setCurrency(newCurrency);
  };

  return (
    <div className={`inline-flex items-center gap-1 rounded-full ${className}`}
      style={{
        backgroundColor: '#f3f4f6',
        padding: '4px'
      }}
      role="group"
      aria-label="Currency selector">
      <button
        onClick={() => handleToggle('INR')}
        className={`${sizeClasses[size]} font-body font-semibold rounded-full transition-all duration-200 min-w-[60px]`}
        style={{
          backgroundColor: currency === 'INR' ? '#8458B3' : 'transparent',
          color: currency === 'INR' ? 'white' : '#6b7280',
          cursor: 'pointer'
        }}
        aria-pressed={currency === 'INR'}
        aria-label="Switch to Indian Rupees">
        INR
      </button>
      <button
        onClick={() => handleToggle('USD')}
        className={`${sizeClasses[size]} font-body font-semibold rounded-full transition-all duration-200 min-w-[60px]`}
        style={{
          backgroundColor: currency === 'USD' ? '#8458B3' : 'transparent',
          color: currency === 'USD' ? 'white' : '#6b7280',
          cursor: 'pointer'
        }}
        aria-pressed={currency === 'USD'}
        aria-label="Switch to US Dollars">
        USD
      </button>
    </div>
  );
}
