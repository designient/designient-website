'use client'

import {
 CourseHeroWithSidebar,
 CourseHeroContent,
 CourseHeroBreadcrumbs,
 CourseHeroBadge,
 CourseHeroTitle,
 CourseHeroSubtitle,
 CourseHeroTrustChips,
 CourseHeroLastUpdated,
 CourseHeroHighlight,
} from '../../course/layout'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ChevronRight, Zap } from 'react-feather'
import { CurrencyAwareValueStack } from '../../pricing/CurrencyAwareValueStack'
import { LocalizedPriceText } from '../../pricing/LocalizedPriceText'
import { useCurrency } from '../../../contexts/CurrencyContext'
import { pickByCurrency } from '../../../lib/localizedPricing'
import {
 WorkshopBonusesSection,
 WorkshopRegistrationSection,
 WorkshopFAQSection,
 WorkshopFooterCTA,
 scrollToWorkshopRegister,
} from '../WorkshopPageSections'
import {
 aiAutomationLiveBonuses,
 aiAutomationLiveHero,
 aiAutomationLivePastExamples,
 aiAutomationLiveSession,
 aiAutomationLiveValueStack,
 aiAutomationLiveFaqs,
} from '../../../data/aiAutomationLivePageData'

const WORKSHOP_SOURCE = 'ai-automation-live'

function SessionUrgencyLine() {
 const { currency, isLoading } = useCurrency()
 const { dateLabel, timeLabel, strategySessionSpotsRemaining } = aiAutomationLiveSession
 const valueLabel = isLoading ? '…' : pickByCurrency(currency, 'Rs 4,999', 'USD 69')
 return (
 <>
 Next session: <strong>{dateLabel}</strong> · <strong>{timeLabel}</strong> · Free to attend · First 5
 registrants get a 1:1 Automation Strategy Session ({valueLabel} value) - {' '}
 <strong>{strategySessionSpotsRemaining} spots remaining</strong>
 </>
 )
}

export function AIAutomationLiveUrgencyStrip() {
 return (
 <div className="py-3 px-4 text-center" style={{ backgroundColor: 'var(--color-highlight)', color: 'var(--text-on-accent)' }}>
 <p className="font-body text-sm md:text-base font-semibold">
 <SessionUrgencyLine />{' '}
 <button type="button" onClick={scrollToWorkshopRegister} className="underline hover:no-underline inline-flex items-center gap-1 font-bold">
 Register Free
 <ArrowRight className="w-4 h-4" />
 </button>
 </p>
 </div>
 )
}

export function AIAutomationLiveHero() {
 return (
 <CourseHeroWithSidebar
 courseSlug="ai-automation-live"
 courseName="AI Automation Live"
 duration="2 Hours"
 features={aiAutomationLiveHero.trustChips}
 align="left"
 >
 <CourseHeroContent>
 <CourseHeroBreadcrumbs>
 <Link href="/" className="hover:underline">Home</Link>
 <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
 <span style={{ color: 'var(--color-primary)' }}>AI Automation Live</span>
 </CourseHeroBreadcrumbs>

 <CourseHeroBadge>
 <Zap className="w-3.5 h-3.5" aria-hidden="true" />
 {aiAutomationLiveHero.badge}
 </CourseHeroBadge>
 <CourseHeroTitle>{aiAutomationLiveHero.title}</CourseHeroTitle>
 <CourseHeroSubtitle>{aiAutomationLiveHero.subtitle}</CourseHeroSubtitle>
 <CourseHeroTrustChips chips={aiAutomationLiveHero.trustChips} />
 <CourseHeroLastUpdated date={aiAutomationLiveHero.lastUpdated} />

 <CourseHeroHighlight>
 First 5 registrants this month receive a free 1:1 Automation Strategy Session (30 min ·{' '}
 <LocalizedPriceText inr="Rs 4,999" usd="USD 69" /> value).{' '}
 <strong>{aiAutomationLiveSession.strategySessionSpotsRemaining} spots remaining.</strong>
 </CourseHeroHighlight>

 <p
 className="font-body text-sm w-full max-w-md mx-auto lg:mx-0 leading-relaxed"
 style={{ color: 'var(--text-muted)' }}
 >
 {aiAutomationLiveHero.formNote} Scroll down to register or use the sidebar button on desktop.
 </p>
 </CourseHeroContent>
 </CourseHeroWithSidebar>
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
 No slides. No theory. One automation built live - from a blank n8n canvas to a deployed, running workflow.
 </p>

 <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>The problem we solve</h3>
 <p className="font-body mb-4" style={{ color: 'var(--text-secondary)' }}>
 Every month, the workshop picks one common, high-value automation problem that working professionals actually face. Past sessions have built:
 </p>
 <ul className="space-y-3 mb-10">
 {aiAutomationLivePastExamples.map((ex) => (
 <li key={ex.slice(0, 40)} className="font-body flex gap-2" style={{ color: 'var(--text-secondary)' }}>
 <span style={{ color: 'var(--color-primary)' }}> - </span>
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
 <strong style={{ color: 'var(--text-primary)' }}>Next 80 minutes:</strong> the automation is built live in n8n, node by node, with every decision explained - why this trigger, why this condition, why this error handling approach.
 </p>
 <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
 <strong style={{ color: 'var(--text-primary)' }}>Final 20 minutes:</strong> the completed automation is triggered live with real data. It runs. You see the output. The workflow file is shared.
 </p>
 </div>

 <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
 <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>What you leave with</h3>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 A working n8n workflow file ready to deploy. Not a tutorial you followed - a production-ready automation you watched built from first principles and can modify for your own problem immediately.
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
 One session teaches you more about what automation actually looks like in production than any sales page or curriculum document. If you leave thinking &ldquo;I could build this myself with the right structure and support&rdquo; - the{' '}
 <Link href="/ai-automation-accelerator" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
 AI Automation Accelerator
 </Link>{' '}
 is the eight-week course where you do exactly that.
 </p>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 If you leave thinking &ldquo;this is not for me&rdquo; - you still have the workflow file, the templates, and the recording. No obligation, no follow-up sales call.
 </p>
 </div>
 </section>
 )
}

export function AIAutomationLiveBonuses() {
 return <WorkshopBonusesSection bonuses={aiAutomationLiveBonuses} />
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
 <li>You are a marketing manager, operations lead, HR professional, founder, freelancer, or solopreneur who wants to see automation built live - not explained in theory.</li>
 <li>You have never built an automation before. This session starts from a blank canvas.</li>
 <li>You are considering the AI Automation Accelerator and want to experience how Designient teaches before committing to 8 weeks.</li>
 <li>You have basic digital tool fluency - comfortable with SaaS products. You do not need to know what an API is.</li>
 </ul>
 </div>
 <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
 <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Skip this if:</h3>
 <ul className="space-y-3 font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 <li>You are already building production-grade n8n workflows and want advanced curriculum. The <Link href="/ai-automation-accelerator" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>AI Automation Accelerator</Link> is the right level.</li>
 <li>You want a hands-on session where you build alongside the mentor in real time. This workshop is watch-and-learn - you build your own version after, using the workflow file and templates provided.</li>
 </ul>
 </div>
 </div>
 </div>
 </section>
 )
}

export function AIAutomationLiveRegistration() {
 return (
 <WorkshopRegistrationSection
 session={aiAutomationLiveSession}
 source={WORKSHOP_SOURCE}
 courseInterest={WORKSHOP_SOURCE}
 successRedirect="/thank-you?source=ai-automation-live"
 />
 )
}

export function AIAutomationLiveFAQ() {
 return <WorkshopFAQSection faqs={aiAutomationLiveFaqs} />
}

export function AIAutomationLiveFooterCTA() {
 return (
 <WorkshopFooterCTA
 headline="One workflow. Two hours. Zero cost."
 sessionLine={
 <>
 Next session: {aiAutomationLiveSession.dateLabel} · {aiAutomationLiveSession.timeLabel} · Zoom · Free
 </>
 }
 bonusLine={
 <>
 First 5 registrants receive a free 1:1 Automation Strategy Session (
 <LocalizedPriceText inr="Rs 4,999" usd="USD 69" /> value).{' '}
 {aiAutomationLiveSession.strategySessionSpotsRemaining} spots remaining.
 </>
 }
 />
 )
}
