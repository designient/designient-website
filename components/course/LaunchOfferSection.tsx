'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Clock, CheckCircle } from 'react-feather';
import { useCurrency } from '../../contexts/CurrencyContext';

interface Bonus {
  title: string;
  description: string;
  priceInr: string;
  priceUsd: string;
}

interface LaunchOfferSectionProps {
  endDate: string; // ISO date string or date string
  bonuses: Bonus[];
  totalValueInr: string;
  totalValueUsd: string;
}

export function LaunchOfferSection({ 
  endDate, 
  bonuses, 
  totalValueInr, 
  totalValueUsd 
}: LaunchOfferSectionProps) {
  const { currency } = useCurrency();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  const totalValue = currency === 'INR' ? totalValueInr : totalValueUsd;
  const currencySymbol = currency === 'INR' ? '₹' : '$';

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const end = new Date(endDate).getTime();
      const difference = end - now;

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (isExpired) {
    return null; // Don't show if offer has expired
  }

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#8458B3' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#f2d53c]">
              <Gift className="w-5 h-5" style={{ color: '#1a1a1a' }} />
              <span className="font-body font-bold text-sm uppercase tracking-wide" style={{ color: '#1a1a1a' }}>
                Launch Offer
              </span>
            </div>
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: 'white',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)'
              }}>
              Additional Bonuses Worth {totalValue} FREE
            </h2>
            <p className="font-body text-lg mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Limited time offer for the first 5 students in each batch
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-xl p-6 md:p-8 mb-8 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5" style={{ color: '#8458B3' }} />
              <span className="font-body font-semibold text-sm" style={{ color: '#1a1a1a' }}>
                Offer ends in:
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center">
                  <div
                    className="font-display font-bold rounded-lg p-4 mb-2"
                    style={{
                      backgroundColor: '#8458B3',
                      color: 'white',
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)'
                    }}>
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <span className="font-body text-xs uppercase tracking-wide" style={{ color: '#6b7280' }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bonuses List */}
          <div className="space-y-4">
            {bonuses.map((bonus, index) => {
              const bonusPrice = currency === 'INR' ? bonus.priceInr : bonus.priceUsd;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FFF6E2' }}>
                        <CheckCircle className="w-6 h-6" style={{ color: '#8458B3' }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <h3
                          className="font-display font-bold"
                          style={{
                            color: '#1a1a1a',
                            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)'
                          }}>
                          {bonus.title}
                        </h3>
                        <span
                          className="font-body font-semibold whitespace-nowrap"
                          style={{
                            color: '#8458B3',
                            fontSize: 'clamp(1rem, 1.8vw, 1.125rem)'
                          }}>
                          {currencySymbol}{bonusPrice}
                        </span>
                      </div>
                      <p
                        className="font-body leading-relaxed"
                        style={{
                          color: '#4a4a4a',
                          fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                          lineHeight: '1.7'
                        }}>
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Total Value Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-8 p-6 rounded-xl border-2 border-[#f2d53c] bg-[#FFF6E2] text-center">
            <p className="font-body text-sm mb-2" style={{ color: '#6b7280' }}>
              Total Bonus Value
            </p>
            <p
              className="font-display font-bold"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)'
              }}>
              {totalValue} FREE
            </p>
            <p className="font-body text-sm mt-2" style={{ color: '#6b7280' }}>
              All bonuses included at no extra cost when you enroll now
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
