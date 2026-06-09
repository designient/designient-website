'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Clock, Calendar } from 'react-feather'
import Link from 'next/link'
import { isCityBatchFull, getCitySchedule, type CityKey } from '../../lib/batchScheduleUtils'

const CITY_ENTRIES: { key: CityKey; path: string }[] = [
  { key: 'bangalore', path: '/ui-ux-design-course-in-bangalore' },
  { key: 'hyderabad', path: '/ui-ux-design-course-in-hyderabad' },
  { key: 'pune', path: '/ui-ux-design-course-in-pune' },
]

export function CityLocationsSection() {
  const cities = CITY_ENTRIES.map(({ key, path }) => {
    const batchFull = isCityBatchFull(key)
    const schedule = getCitySchedule(key)
    const name = key.charAt(0).toUpperCase() + key.slice(1)
    return {
      name,
      path,
      schedule,
      batchFull,
      batchInfo: batchFull ? 'Batch Full' : 'Seats Available',
      description: batchFull ? 'Current batch is full' : 'Batches enrolling now',
    }
  })

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center accent-icon-box"
              style={{
                backgroundColor: 'var(--color-highlight)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}>
              <MapPin className="w-8 h-8" style={{ color: 'var(--text-on-highlight)', strokeWidth: 2.5 }} />
            </div>
            <h2
              className="font-display font-bold"
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}>
              Available in Multiple Cities
            </h2>
          </div>
          <p
            className="font-body text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
            Join our UI/UX Design Pro course in Bangalore, Hyderabad, or Pune. Choose the location and batch schedule that works best for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="font-display font-semibold text-xl mb-3" style={{ color: 'var(--color-primary)' }}>
                  {city.name}
                </h3>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{
                    backgroundColor: 'var(--bg-warm)',
                    color: 'var(--color-primary)'
                  }}>
                  {city.batchInfo}
                </span>

                {city.batchFull || !city.schedule ? (
                  <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: 'var(--color-error-bg)' }}>
                    <p className="font-body font-semibold text-xs mb-1" style={{ color: 'var(--color-error)' }}>Current batch is full</p>
                    <p className="font-body text-xs" style={{ color: 'var(--color-error)' }}>
                      New batch dates will be announced soon. <Link href="/contact-us" className="course-inline-link">Contact us</Link> to be notified.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 mb-4">
                    {city.schedule.weekday?.morning?.available && (
                      <div className="p-3 rounded-lg border" style={{ backgroundColor: 'var(--bg-warm)', borderColor: 'var(--color-primary)' }}>
                        <p className="font-body font-semibold text-xs mb-2" style={{ color: 'var(--color-primary)' }}>Weekday - Morning</p>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                            <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{city.schedule.weekday.morning.startDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                            <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{city.schedule.weekday.morning.days}, {city.schedule.weekday.morning.time}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {city.schedule.weekend?.morning?.available && (
                      <div className="p-3 rounded-lg border" style={{ backgroundColor: 'var(--bg-warm)', borderColor: 'var(--color-primary)' }}>
                        <p className="font-body font-semibold text-xs mb-2" style={{ color: 'var(--color-primary)' }}>Weekend - Morning</p>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                            <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{city.schedule.weekend.morning.startDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                            <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{city.schedule.weekend.morning.days}, {city.schedule.weekend.morning.time}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <Link
                href={city.path}
                className="inline-flex items-center gap-2 font-body font-semibold text-sm transition-colors hover:underline"
                style={{ color: 'var(--color-primary)' }}>
                Learn more about {city.name} batches
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
