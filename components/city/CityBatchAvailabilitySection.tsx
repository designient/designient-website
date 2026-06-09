'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users } from 'react-feather'
import Link from 'next/link'
import { getCityLabel, getCitySchedule, isCityBatchFull, type CityKey } from '../../lib/batchScheduleUtils'

type CityBatchAvailabilitySectionProps = {
  city: CityKey
}

export function CityBatchAvailabilitySection({ city }: CityBatchAvailabilitySectionProps) {
  const cityName = getCityLabel(city)
  const schedule = getCitySchedule(city)
  const batchFull = isCityBatchFull(city)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--bg-section-green)' }}
              >
                <Users className="w-8 h-8" style={{ color: 'var(--color-forest)', strokeWidth: 1.5 }} />
              </div>
              <h2
                className="font-display font-bold"
                style={{
                  color: 'var(--color-forest)',
                  fontWeight: 700,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                }}
              >
                Batch Availability in {cityName}
              </h2>
            </div>
          </motion.div>

          {batchFull ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'var(--color-error-bg)' }}>
                <h3 className="font-display font-semibold mb-4 text-2xl" style={{ color: 'var(--color-error)' }}>
                  Current Batch is Full
                </h3>
                <p className="font-body text-lg mb-4" style={{ color: 'var(--color-error)' }}>
                  To maintain quality mentorship and personalised feedback, each batch is intentionally kept small.
                </p>
                <p className="font-body text-sm" style={{ color: 'var(--color-error)' }}>
                  New batch dates will be announced soon.{' '}
                  <Link href="/contact-us" className="underline font-semibold">
                    Contact us
                  </Link>{' '}
                  to be notified when the next batch opens.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {schedule?.weekday && (
                <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--bg-warm)' }}>
                  <h3 className="font-display font-semibold mb-4 text-xl" style={{ color: 'var(--color-primary)' }}>
                    Weekday Batches
                  </h3>
                  <div className="space-y-4 mb-4">
                    {schedule.weekday.morning && (
                      <BatchCard
                        label="Morning Batch"
                        available={schedule.weekday.morning.available}
                        startDate={schedule.weekday.morning.startDate}
                        days={schedule.weekday.morning.days}
                        time={schedule.weekday.morning.time}
                      />
                    )}
                    {schedule.weekday.evening && (
                      <BatchCard
                        label="Evening Batch"
                        available={schedule.weekday.evening.available}
                        days={schedule.weekday.evening.days}
                        time={schedule.weekday.evening.time}
                      />
                    )}
                  </div>
                  <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                    Perfect for students and career switchers who can commit to weekday learning schedules.
                  </p>
                </div>
              )}
              {schedule?.weekend && (
                <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--bg-warm)' }}>
                  <h3 className="font-display font-semibold mb-4 text-xl" style={{ color: 'var(--color-primary)' }}>
                    Weekend Batches
                  </h3>
                  <div className="space-y-4 mb-4">
                    {schedule.weekend.morning && (
                      <BatchCard
                        label="Morning Batch"
                        available={schedule.weekend.morning.available}
                        startDate={schedule.weekend.morning.startDate}
                        days={schedule.weekend.morning.days}
                        time={schedule.weekend.morning.time}
                      />
                    )}
                  </div>
                  <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                    Designed for working professionals who want to upskill without disrupting their work schedule.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {!batchFull && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-center mt-8"
              style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}
            >
              All batches are small and mentor-led to ensure personalised feedback.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}

function BatchCard({
  label,
  available,
  startDate,
  days,
  time,
}: {
  label: string
  available: boolean
  startDate?: string
  days: string
  time: string
}) {
  return (
    <div
      className={`p-4 rounded-lg ${available ? 'border-2' : 'border'}`}
      style={{
        backgroundColor: available ? 'var(--bg-card)' : 'var(--bg-subtle)',
        borderColor: available ? 'var(--color-primary)' : 'var(--border-default)',
        opacity: available ? 1 : 0.6,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <p
          className="font-body font-semibold text-sm"
          style={{ color: available ? 'var(--color-primary)' : 'var(--text-muted)' }}
        >
          {label}
        </p>
        <span
          className="px-2 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: available ? 'var(--color-primary)' : 'var(--text-muted)',
            color: 'var(--text-on-accent)',
          }}
        >
          {available ? 'Available' : 'Not Available'}
        </span>
      </div>
      <div className="space-y-2">
        {startDate && available && (
          <div className="flex items-start gap-3">
            <Calendar className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
            <div>
              <p className="font-body font-semibold text-xs mb-1" style={{ color: 'var(--text-primary)' }}>
                Start Date
              </p>
              <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                {startDate}
              </p>
            </div>
          </div>
        )}
        <div className="flex items-start gap-3">
          <Clock
            className="w-4 h-4 flex-shrink-0 mt-0.5"
            style={{ color: available ? 'var(--color-primary)' : 'var(--text-muted)' }}
          />
          <div>
            <p
              className="font-body font-semibold text-xs mb-1"
              style={{ color: available ? 'var(--text-primary)' : 'var(--text-muted)' }}
            >
              Schedule
            </p>
            <p className="font-body text-sm" style={{ color: available ? 'var(--text-secondary)' : 'var(--text-muted)' }}>
              {days}
            </p>
            <p className="font-body text-sm" style={{ color: available ? 'var(--text-secondary)' : 'var(--text-muted)' }}>
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
