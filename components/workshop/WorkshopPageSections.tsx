'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Gift, Video } from 'react-feather'
import { LocalizedPriceText } from '../pricing/LocalizedPriceText'
import { CourseFAQ } from '../course/CourseFAQ'
import { CourseBentoGrid } from '../course/layout'
import { WorkshopRegistrationForm } from './WorkshopRegistrationForm'

export type WorkshopBonus = {
  title: string
  description: string
  why?: string
  valueInr: string
  valueUsd: string
  firstFiveOnly?: boolean
}

export type WorkshopSessionInfo = {
  dateLabel: string
  timeLabel: string
  nextSessionDateLabel: string
  registrationOpensDaysBefore: number
}

export type WorkshopFaq = {
  question: string
  answer: string
  linkHref?: string
  linkLabel?: string
}

export function scrollToWorkshopRegister() {
  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

type WorkshopBonusesSectionProps = {
  bonuses: WorkshopBonus[]
  title?: string
  subtitle?: string
}

export function WorkshopBonusesSection({
  bonuses,
  title = 'Everything You Get - Free',
  subtitle = 'For every registered attendee',
}: WorkshopBonusesSectionProps) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <h2
          className="font-display font-bold mb-4 text-center"
          style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
        >
          {title}
        </h2>
        <p className="font-body text-center mb-12" style={{ color: 'var(--text-muted)' }}>
          {subtitle}
        </p>
        <CourseBentoGrid
          className="max-w-5xl mx-auto"
          items={bonuses.map((bonus, index) => ({
            id: bonus.title,
            span: index === 0 ? '2x1' : '1x1',
            children: (
              <>
                <div className="flex items-start gap-3 mb-3">
                  <Gift className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="font-display font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                    {bonus.firstFiveOnly ? '[First 5 registrants only] ' : ''}
                    {bonus.title}
                  </h3>
                </div>
                <p className="font-body text-sm mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {bonus.description}
                </p>
                {bonus.why && (
                  <p className="font-body text-sm mb-3 italic" style={{ color: 'var(--text-muted)' }}>
                    Why it matters: {bonus.why}
                  </p>
                )}
                <p className="font-body text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
                  Standalone value: <LocalizedPriceText inr={bonus.valueInr} usd={bonus.valueUsd} /> · Yours free
                </p>
              </>
            ),
          }))}
        />
      </div>
    </section>
  )
}

type WorkshopRegistrationSectionProps = {
  session: WorkshopSessionInfo
  source: string
  courseInterest: string
  successRedirect: string
  formId?: string
}

export function WorkshopRegistrationSection({
  session,
  source,
  courseInterest,
  successRedirect,
  formId = 'workshop-registration',
}: WorkshopRegistrationSectionProps) {
  const { dateLabel, timeLabel, nextSessionDateLabel, registrationOpensDaysBefore } = session
  return (
    <section id="register" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-lg mx-auto text-center">
        <h2
          className="font-display font-bold mb-4"
          style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }}
        >
          Registration
        </h2>
        <p className="font-body mb-2 flex items-center justify-center gap-2" style={{ color: 'var(--text-secondary)' }}>
          <Video className="w-4 h-4" />
          Next session: <strong>{dateLabel}</strong> · <strong>{timeLabel}</strong>
        </p>
        <p className="font-body text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
          After this session: the next session runs <strong>{nextSessionDateLabel}</strong>. Registration opens{' '}
          {registrationOpensDaysBefore} days before.
        </p>
        <WorkshopRegistrationForm
          source={source}
          courseInterest={courseInterest}
          formId={formId}
          successRedirect={successRedirect}
        />
        <p className="font-body text-xs mt-4 italic" style={{ color: 'var(--text-muted)' }}>
          Zoom link sent to your email immediately. Recording sent within 24 hours of the session for all registered
          attendees whether you attend live or not.
        </p>
      </div>
    </section>
  )
}

function mapWorkshopFaqsForCourseFAQ(faqs: WorkshopFaq[]) {
  return faqs.map((faq) => {
    let answer = faq.answer
    if (faq.linkHref && faq.linkLabel) {
      answer = `${faq.answer} See ${faq.linkLabel} at https://designient.com${faq.linkHref}.`
    }
    if (faq.question.includes('How often')) {
      answer = `${faq.answer} Email hello@designient.com for the schedule.`
    }
    return { question: faq.question, answer }
  })
}

export function WorkshopFAQSection({ faqs, title = 'FAQ' }: { faqs: WorkshopFaq[]; title?: string }) {
  return (
    <section id="faqs">
      <CourseFAQ faqs={mapWorkshopFaqsForCourseFAQ(faqs)} title={title} />
    </section>
  )
}

type WorkshopFooterCTAProps = {
  headline: string
  buttonText?: string
  sessionLine: React.ReactNode
  bonusLine: React.ReactNode
}

export function WorkshopFooterCTA({
  headline,
  buttonText = 'Register My Free Seat',
  sessionLine,
  bonusLine,
}: WorkshopFooterCTAProps) {
  return (
    <section className="py-20 md:py-28 text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
        <h2
          className="font-display font-bold mb-4"
          style={{ color: 'var(--text-on-accent)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          {headline}
        </h2>
        <button
          type="button"
          onClick={scrollToWorkshopRegister}
          className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2 mb-6"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="font-body text-sm mb-2" style={{ color: 'var(--text-on-accent)', opacity: 0.95 }}>
          {sessionLine}
        </p>
        <p className="font-body text-sm" style={{ color: 'var(--text-on-accent)', opacity: 0.9 }}>
          {bonusLine}
        </p>
      </div>
    </section>
  )
}
