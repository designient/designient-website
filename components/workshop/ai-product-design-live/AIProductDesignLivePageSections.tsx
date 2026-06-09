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
 aiProductDesignLiveBonuses,
 aiProductDesignLiveFaqs,
 aiProductDesignLiveHero,
 aiProductDesignLivePastProducts,
 aiProductDesignLiveSession,
 aiProductDesignLiveValueStack,
} from '../../../data/aiProductDesignLivePageData'

const WORKSHOP_SOURCE = 'ai-product-design-live'
const SUCCESS_REDIRECT = '/thank-you?source=ai-product-design-live'

function SessionUrgencyLine() {
 const { currency, isLoading } = useCurrency()
 const { dateLabel, timeLabel, portfolioReviewSpotsRemaining } = aiProductDesignLiveSession
 const valueLabel = isLoading ? '…' : pickByCurrency(currency, 'Rs 4,999', 'USD 69')
 return (
 <>
 Next session: <strong>{dateLabel}</strong> · <strong>{timeLabel}</strong> · Free to attend · First 5
 registrants get a 1:1 Portfolio and Application Review ({valueLabel} value) - {' '}
 <strong>{portfolioReviewSpotsRemaining} spots remaining</strong>
 </>
 )
}

export function AIProductDesignLiveUrgencyStrip() {
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

export function AIProductDesignLiveHero() {
 return (
 <CourseHeroWithSidebar
 courseSlug="ai-product-design-live"
 courseName="AI Product Design Live"
 duration="2 Hours"
 features={aiProductDesignLiveHero.trustChips}
 align="left"
 >
 <CourseHeroContent>
 <CourseHeroBreadcrumbs>
 <Link href="/" className="hover:underline">Home</Link>
 <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
 <span style={{ color: 'var(--color-primary)' }}>AI Product Design Live</span>
 </CourseHeroBreadcrumbs>

 <CourseHeroBadge>
 <Zap className="w-3.5 h-3.5" aria-hidden="true" />
 {aiProductDesignLiveHero.badge}
 </CourseHeroBadge>
 <CourseHeroTitle>{aiProductDesignLiveHero.title}</CourseHeroTitle>
 <CourseHeroSubtitle>{aiProductDesignLiveHero.subtitle}</CourseHeroSubtitle>
 <CourseHeroTrustChips chips={aiProductDesignLiveHero.trustChips} />
 <CourseHeroLastUpdated date={aiProductDesignLiveHero.lastUpdated} />

 <CourseHeroHighlight>
 First 5 registrants this month receive a free 1:1 Portfolio and Application Review (30 min ·{' '}
 <LocalizedPriceText inr="Rs 4,999" usd="USD 69" /> value).{' '}
 <strong>{aiProductDesignLiveSession.portfolioReviewSpotsRemaining} spots remaining.</strong>
 </CourseHeroHighlight>

 <p
 className="font-body text-sm w-full max-w-md mx-auto lg:mx-0 leading-relaxed"
 style={{ color: 'var(--text-muted)' }}
 >
 {aiProductDesignLiveHero.formNote} Scroll down to register or use the sidebar button on desktop.
 </p>
 </CourseHeroContent>
 </CourseHeroWithSidebar>
 )
}

export function AIProductDesignLiveWhatHappens() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
 <h2 className="font-display font-bold mb-4 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
 What Happens in 2 Hours
 </h2>
 <p className="font-body text-center mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 One AI product. One trust failure identified. One screen redesigned. Start to finish.
 </p>

 <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>The product</h3>
 <p className="font-body mb-4" style={{ color: 'var(--text-secondary)' }}>
 Every month, the workshop picks a live, publicly accessible AI product - something attendees have likely used. The product is not announced in advance. Part of the value is watching the audit process applied cold, without pre-prepared answers.
 </p>
 <p className="font-body mb-10" style={{ color: 'var(--text-secondary)' }}>
 {aiProductDesignLivePastProducts}
 </p>

 <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>How it runs</h3>
 <div className="space-y-4 mb-10">
 <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
 <strong style={{ color: 'var(--text-primary)' }}>First 30 minutes - the audit:</strong> the product is opened live. The 5-criteria trust audit framework is applied: confidence signalling, error transparency, fallback design, user control, tone under uncertainty. The trust failure to redesign is selected and the reasoning explained.
 </p>
 <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
 <strong style={{ color: 'var(--text-primary)' }}>Next 70 minutes - the redesign:</strong> the failing screen is redesigned in Figma, live. Every decision explained - why this component, why this copy, what AI state this screen handles, and what the user needs to feel at this moment. The redesign is compared to the original.
 </p>
 <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
 <strong style={{ color: 'var(--text-primary)' }}>Final 20 minutes - the framework generalised:</strong> how to apply the same audit and redesign process to any AI product. What to look for, what to fix first, and the most common trust failures in 2026.
 </p>
 </div>

 <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
 <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>What you leave with</h3>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 The Figma file with the redesigned screens from the session. The 5-criteria trust audit checklist. Three additional teardown examples. A recording. And a clear picture of whether the AI Product Design Course is the right next step for you.
 </p>
 </div>
 </div>
 </section>
 )
}

export function AIProductDesignLiveWhyFree() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-subtle)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl text-center">
 <h2 className="font-display font-bold mb-6" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }}>
 Why This Is Free
 </h2>
 <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 Most designers and PMs know AI product design is a gap in their skill set. Most don&apos;t know where to start - because no course in India teaches it at depth, and the concept is abstract until you see it applied to a real product.
 </p>
 <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 This workshop makes it concrete. In two hours you have seen the full methodology applied to a live product and you have a Figma file to show for it. If you want to do this yourself - to 8 states, across two portfolio case studies, with mentorship - the{' '}
 <Link href="/ai-product-design-course" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
 AI Product Design Course
 </Link>{' '}
 is where that happens.
 </p>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 If you leave thinking &ldquo;interesting but not for me&rdquo; - you keep the file, the framework, and the recording. No obligation, no follow-up sales call.
 </p>
 </div>
 </section>
 )
}

export function AIProductDesignLiveBonuses() {
 return <WorkshopBonusesSection bonuses={aiProductDesignLiveBonuses} />
}

export function AIProductDesignLiveValueStack() {
 const stack = aiProductDesignLiveValueStack
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

export function AIProductDesignLiveWhoFor() {
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
 <li>You are a designer with 1 to 5 years of experience briefed on AI features and realise your standard UX toolkit does not fully cover model uncertainty, errors, or silence.</li>
 <li>You are a PM shipping AI features and want to understand what &ldquo;designing for AI behaviour&rdquo; means before briefing your design team - or before applying to the course.</li>
 <li>You are a UX writer or content designer who owns the AI voice layer and wants to see how tone, copy, and error design interact with AI states in a real product.</li>
 <li>You are considering the AI Product Design Course and want to experience the methodology before a 6-week application-based program.</li>
 </ul>
 </div>
 <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
 <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Skip this if:</h3>
 <ul className="space-y-3 font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 <li>
 You are a complete beginner to design. This workshop assumes you can read a Figma file and know digital products as a user. If you are new to design entirely, the{' '}
 <Link href="/ui-ux-design-bootcamp" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
 UI UX Design Bootcamp
 </Link>{' '}
 is the right starting point.
 </li>
 <li>You want a hands-on session where you build alongside the mentor in Figma. This is watch-and-learn - you apply the methodology after, using the Figma file, checklist, and teardown examples.</li>
 </ul>
 </div>
 </div>
 </div>
 </section>
 )
}

export function AIProductDesignLiveRegistration() {
 return (
 <WorkshopRegistrationSection
 session={aiProductDesignLiveSession}
 source={WORKSHOP_SOURCE}
 courseInterest={WORKSHOP_SOURCE}
 successRedirect={SUCCESS_REDIRECT}
 formId="apd-workshop-registration"
 />
 )
}

export function AIProductDesignLiveFAQ() {
 return <WorkshopFAQSection faqs={aiProductDesignLiveFaqs} />
}

export function AIProductDesignLiveFooterCTA() {
 return (
 <WorkshopFooterCTA
 headline="One real AI product. Two hours. Zero cost."
 sessionLine={
 <>
 Next session: {aiProductDesignLiveSession.dateLabel} · {aiProductDesignLiveSession.timeLabel} · Zoom · Free
 </>
 }
 bonusLine={
 <>
 First 5 registrants receive a free 1:1 Portfolio and Application Review (
 <LocalizedPriceText inr="Rs 4,999" usd="USD 69" /> value).{' '}
 {aiProductDesignLiveSession.portfolioReviewSpotsRemaining} spots remaining.
 </>
 }
 />
 )
}
