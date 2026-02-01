'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, AlertCircle } from 'react-feather'

interface UrgencyBannerProps {
  batchStartDate?: string
  seatsRemaining?: number
  showCountdown?: boolean
  variant?: 'default' | 'pricing' // Different styles for hero vs pricing
}

export function UrgencyBanner({ 
  batchStartDate, 
  seatsRemaining,
  showCountdown = true,
  variant = 'default'
}: UrgencyBannerProps) {
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)

  useEffect(() => {
    if (!batchStartDate || !showCountdown) return

    const calculateTimeRemaining = () => {
      const now = new Date()
      // Parse date format like "Mar 7, 2026"
      const startDate = new Date(batchStartDate)
      
      // If date is invalid, return
      if (isNaN(startDate.getTime())) {
        setTimeRemaining(null)
        return
      }
      
      const difference = startDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeRemaining(null)
      }
    }

    calculateTimeRemaining()
    const interval = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(interval)
  }, [batchStartDate, showCountdown])

  if (!batchStartDate && !seatsRemaining) return null

  const isPricingVariant = variant === 'pricing'

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-6">
      <div 
        className={`rounded-xl p-4 md:p-6 shadow-lg ${
          isPricingVariant 
            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900' 
            : 'bg-gradient-to-r from-[#8458B3] to-[#6b46c1] text-white'
        }`}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          
          {/* Countdown Timer */}
          {showCountdown && timeRemaining && batchStartDate && (
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <div className="flex items-center gap-2 md:gap-4">
                <div className="text-center">
                  <div className="font-display font-bold text-2xl md:text-3xl" aria-label={`${timeRemaining.days} days`}>
                    {timeRemaining.days}
                  </div>
                  <div className="font-body text-xs opacity-90">Days</div>
                </div>
                <span className="text-xl opacity-70">:</span>
                <div className="text-center">
                  <div className="font-display font-bold text-2xl md:text-3xl" aria-label={`${timeRemaining.hours} hours`}>
                    {timeRemaining.hours}
                  </div>
                  <div className="font-body text-xs opacity-90">Hours</div>
                </div>
                <span className="text-xl opacity-70">:</span>
                <div className="text-center">
                  <div className="font-display font-bold text-2xl md:text-3xl" aria-label={`${timeRemaining.minutes} minutes`}>
                    {timeRemaining.minutes}
                  </div>
                  <div className="font-body text-xs opacity-90">Mins</div>
                </div>
                <span className="text-xl opacity-70 hidden md:inline">:</span>
                <div className="text-center hidden md:block">
                  <div className="font-display font-bold text-2xl md:text-3xl" aria-label={`${timeRemaining.seconds} seconds`}>
                    {timeRemaining.seconds}
                  </div>
                  <div className="font-body text-xs opacity-90">Secs</div>
                </div>
              </div>
              <span className="font-body text-sm md:text-base ml-2">
                until batch starts
              </span>
            </div>
          )}

          {/* Seats Remaining */}
          {seatsRemaining !== undefined && (
            <>
              {showCountdown && timeRemaining && (
                <div className={`hidden md:block h-8 w-px ${isPricingVariant ? 'bg-gray-900 opacity-30' : 'bg-white opacity-30'}`} />
              )}
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="font-body font-bold text-lg md:text-xl">
                    {seatsRemaining <= 5 ? (
                      <span className={isPricingVariant ? 'text-red-600' : 'text-yellow-300'}>{seatsRemaining}</span>
                    ) : (
                      seatsRemaining
                    )}
                  </span>
                  <span className="font-body text-sm md:text-base ml-1">
                    {seatsRemaining === 1 ? 'seat' : 'seats'} remaining
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Urgency Message */}
          {seatsRemaining !== undefined && seatsRemaining <= 5 && (
            <>
              {seatsRemaining !== undefined && (
                <div className={`hidden md:block h-8 w-px ${isPricingVariant ? 'bg-gray-900 opacity-30' : 'bg-white opacity-30'}`} />
              )}
              <div className="flex items-center gap-2">
                <AlertCircle className={`w-5 h-5 flex-shrink-0 ${isPricingVariant ? 'text-red-600' : 'text-yellow-300'}`} aria-hidden="true" />
                <span className={`font-body font-semibold text-sm md:text-base ${isPricingVariant ? 'text-red-600' : 'text-yellow-300'}`}>
                  Almost full! Enroll now
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
