'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Gift,
  Video,
  Zap,
} from 'react-feather'
import { CurrencyAwareValueStack } from '../../pricing/CurrencyAwareValueStack'
import { LocalizedPriceText } from '../../pricing/LocalizedPriceText'
import { useCurrency } from '../../../contexts/CurrencyContext'
import { pickByCurrency } from '../../../lib/localizedPricing'
import { WorkshopRegistrationForm } from '../WorkshopRegistrationForm'
import {
  aiAutomationLiveBonuses,
  aiAutomationLiveHero,
  aiAutomationLivePastExamples,
  aiAutomationLiveSession,
  aiAutomationLiveValueStack,
  aiAutomationLiveFaqs,
} from '../../../data/aiAutomationLivePageData'

const WORKSHOP_SOURCE = 'ai-automation-live'

function scrollToRegister() {
  const el = document.getElementById('workshop-registration')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SessionUrgencyLine() {
  const { currency, isLoading } = useCurrency()
  const { dateLabel, timeLabel, strategySessionSpotsRemaining } = aiAutomationLiveSession
  const valueLabel = isLoading ? '…' : pickByCurrency(currency, 'Rs 4,999', 'USD 69')
  return (
    <>
      Next session: <strong>{dateLabel}</strong> · <strong>{timeLabel}</strong> · Free to attend · First 5
      registrants get a 1:1 Automation Strategy Session ({valueLabel} value) —{' '}
      <strong>{strategySessionSpotsRemaining} spots remaining</strong>
    </>
  )
}

export function AIAutomationLiveUrgencyStrip() {
  return (
    <div className="py-3 px-4 text-center" style={{ backgroundColor: 'var(--color-highlight)', color: 'var(--text-on-accent)' }}>
      <p className="font-body text-sm md:text-base font-semibold">
        <SessionUrgencyLine />{' '}
        <button type="button" onClick={scrollToRegister} className="underline hover:no-underline inline-flex items-center gap-1 font-bold">
          Register Free
          <ArrowRight className="w-4 h-4" />
        </button>
      </p>
    </div>
  )
}

export function AIAutomationLiveHero() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24 hero-glow" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span style={{ color: 'var(--color-primary)' }}>AI Automation Live</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div>
            <span
              className="font-body inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--text-on-accent)' }}
            >
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              {aiAutomationLiveHero.badge}
            </span>

            <h1 className="font-display mb-6 leading-[1.1]" style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 'clamp(1.875rem, 4.5vw, 3rem)' }}>
              {aiAutomationLiveHero.title}
            </h1>

            <p className="font-body mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
              {aiAutomationLiveHero.subtitle}
            </p>

            <div className="flex flex-wrap gap-x-3 gap-y-2 mb-6">
              {aiAutomationLiveHero.trustChips.map((chip) => (
                <span key={chip} className="font-body text-sm font-medium flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                  {chip}
                </span>
              ))}
            </div>

            <p className="font-body text-sm font-semibold p-4 rounded-xl mb-4" style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--text-primary)' }}>
              First 5 registrants this month receive a free 1:1 Automation Strategy Session (30 min ·{' '}
              <LocalizedPriceText inr="Rs 4,999" usd="USD 69" /> value).{' '}
              <strong>{aiAutomationLiveSession.strategySessionSpotsRemaining} spots remaining.</strong>
            </p>
          </div>

          <div>
            <WorkshopRegistrationForm
              source={WORKSHOP_SOURCE}
              courseInterest={WORKSHOP_SOURCE}
              formId="workshop-registration"
            />
            <p className="font-body text-xs text-center mt-3 italic" style={{ color: 'var(--text-muted)' }}>
              {aiAutomationLiveHero.formNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AIAutomationLiveWhatHappens() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-4 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          What Happens in 2 Hours
        </h2>
        <p className="font-body text-center mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          No slides. No theory. One automation built live — from a blank n8n canvas to a deployed, running workflow.
        </p>

        <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>The problem we solve</h3>
        <p className="font-body mb-4" style={{ color: 'var(--text-secondary)' }}>
          Every month, the workshop picks one common, high-value automation problem that working professionals actually face. Past sessions have built:
        </p>
        <ul className="space-y-3 mb-10">
          {aiAutomationLivePastExamples.map((ex) => (
            <li key={ex.slice(0, 40)} className="font-body flex gap-2" style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--color-primary)' }}>—</span>
              {ex}
            </li>
          ))}
        </ul>

        <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>How it runs</h3>
        <div className="space-y-4 mb-10">
          <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>First 20 minutes:</strong> the problem is explained, the workflow is mapped, every node is planned before building starts. You see the thinking before you see the tools.
          </p>
          <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Next 80 minutes:</strong> the automation is built live in n8n, node by node, with every decision explained — why this trigger, why this condition, why this error handling approach.
          </p>
          <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Final 20 minutes:</strong> the completed automation is triggered live with real data. It runs. You see the output. The workflow file is shared.
          </p>
        </div>

        <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
          <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>What you leave with</h3>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            A working n8n workflow file ready to deploy. Not a tutorial you followed — a production-ready automation you watched built from first principles and can modify for your own problem immediately.
          </p>
        </div>
      </div>
    </section>
  )
}

export function AIAutomationLiveWhyFree() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl text-center">
        <h2 className="font-display font-bold mb-6" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }}>
          Why This Is Free
        </h2>
        <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          We run this every month because the best way to show you what Designient delivers is to let you experience it.
        </p>
        <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          One session teaches you more about what automation actually looks like in production than any sales page or curriculum document. If you leave thinking &ldquo;I could build this myself with the right structure and support&rdquo; — the{' '}
          <Link href="/ai-automation-accelerator" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
            AI Automation Accelerator
          </Link>{' '}
          is the eight-week course where you do exactly that.
        </p>
        <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          If you leave thinking &ldquo;this is not for me&rdquo; — you still have the workflow file, the templates, and the recording. No obligation, no follow-up sales call.
        </p>
      </div>
    </section>
  )
}

export function AIAutomationLiveBonuses() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-display font-bold mb-4 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          Everything You Get — Free
        </h2>
        <p className="font-body text-center mb-12" style={{ color: 'var(--text-muted)' }}>
          For every registered attendee
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {aiAutomationLiveBonuses.map((bonus) => (
            <motion.div
              key={bonus.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 bg-card border"
              style={{ borderColor: 'var(--border-default)' }}
            >
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
                Standalone value:{' '}
                <LocalizedPriceText inr={bonus.valueInr} usd={bonus.valueUsd} /> · Yours free
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AIAutomationLiveValueStack() {
  const stack = aiAutomationLiveValueStack
  const rows = [
    ...stack.rows,
    {
      item: 'Total value (all attendees)',
      rowType: 'total' as const,
      valueInr: stack.totalAllAttendeesInr,
      valueUsd: stack.totalAllAttendeesUsd,
    },
    {
      item: 'Total value (first 5 registrants)',
      rowType: 'standard' as const,
      valueInr: stack.totalFirstFiveInr,
      valueUsd: stack.totalFirstFiveUsd,
    },
    {
      item: 'Your investment',
      rowType: 'earlyBird' as const,
      valueInr: stack.investmentInr,
      valueUsd: stack.investmentUsd,
    },
  ]
  return <CurrencyAwareValueStack title="The Value Stack" rows={rows} />
}

export function AIAutomationLiveWhoFor() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-10 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }}>
          Who This Is For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-success-bg)', border: '1px solid var(--color-success)' }}>
            <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Come to this workshop if:</h3>
            <ul className="space-y-3 font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <li>You are a marketing manager, operations lead, HR professional, founder, freelancer, or solopreneur who wants to see automation built live — not explained in theory.</li>
              <li>You have never built an automation before. This session starts from a blank canvas.</li>
              <li>You are considering the AI Automation Accelerator and want to experience how Designient teaches before committing to 8 weeks.</li>
              <li>You have basic digital tool fluency — comfortable with SaaS products. You do not need to know what an API is.</li>
            </ul>
          </div>
          <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
            <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Skip this if:</h3>
            <ul className="space-y-3 font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <li>You are already building production-grade n8n workflows and want advanced curriculum. The <Link href="/ai-automation-accelerator" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>AI Automation Accelerator</Link> is the right level.</li>
              <li>You want a hands-on session where you build alongside the mentor in real time. This workshop is watch-and-learn — you build your own version after, using the workflow file and templates provided.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AIAutomationLiveRegistration() {
  const { dateLabel, timeLabel, nextSessionDateLabel, registrationOpensDaysBefore } = aiAutomationLiveSession
  return (
    <section id="register" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-lg mx-auto text-center">
        <h2 className="font-display font-bold mb-4" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }}>
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
        <WorkshopRegistrationForm source={WORKSHOP_SOURCE} courseInterest={WORKSHOP_SOURCE} formId="workshop-registration-footer" />
        <p className="font-body text-xs mt-4 italic" style={{ color: 'var(--text-muted)' }}>
          Zoom link sent to your email immediately. Recording sent within 24 hours of the session for all registered attendees whether you attend live or not.
        </p>
      </div>
    </section>
  )
}

export function AIAutomationLiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section id="faqs" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <h2 className="font-display font-bold mb-10 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          FAQ
        </h2>
        <div className="space-y-4">
          {aiAutomationLiveFaqs.map((faq, index) => (
            <div key={faq.question} className="border rounded-lg overflow-hidden bg-card" style={{ borderColor: 'var(--border-default)' }}>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left min-h-[44px] hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-display font-semibold pr-8" style={{ color: 'var(--text-primary)' }}>{faq.question}</h3>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} style={{ color: 'var(--color-primary)' }} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-4">
                      <p className="font-body leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {faq.answer}
                        {'linkHref' in faq && faq.linkHref && (
                          <>
                            {' '}
                            <Link href={faq.linkHref} className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
                              {faq.linkLabel}
                            </Link>
                            .
                          </>
                        )}
                        {faq.question.includes('How often') && (
                          <>
                            {' '}
                            <a href="mailto:hello@designient.com" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
                              hello@designient.com
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AIAutomationLiveFooterCTA() {
  return (
    <section className="py-20 md:py-28 text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
        <h2 className="font-display font-bold mb-4" style={{ color: 'var(--text-on-accent)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          One workflow. Two hours. Zero cost.
        </h2>
        <button
          type="button"
          onClick={scrollToRegister}
          className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2 mb-6"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
        >
          Register My Free Seat
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="font-body text-sm mb-2" style={{ color: 'var(--text-on-accent)', opacity: 0.95 }}>
          Next session: {aiAutomationLiveSession.dateLabel} · {aiAutomationLiveSession.timeLabel} · Zoom · Free
        </p>
        <p className="font-body text-sm" style={{ color: 'var(--text-on-accent)', opacity: 0.9 }}>
          First 5 registrants receive a free 1:1 Automation Strategy Session (
          <LocalizedPriceText inr="Rs 4,999" usd="USD 69" /> value).{' '}
          {aiAutomationLiveSession.strategySessionSpotsRemaining} spots remaining.
        </p>
      </div>
    </section>
  )
}
