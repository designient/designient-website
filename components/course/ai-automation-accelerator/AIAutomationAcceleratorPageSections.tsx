'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, ChevronRight, Shield, Zap } from 'react-feather'
import { CurrencyAwareBonusStack } from '../../pricing/CurrencyAwareBonusStack'
import { CurrencyAwareValueStack } from '../../pricing/CurrencyAwareValueStack'
import { CourseUrgencyStrip, COURSE_SLUGS } from '../../pricing/CourseUrgencyStrip'
import { CrossCoursePriceRange } from '../../pricing/CrossCoursePrice'
import { LocalizedPatternComparison } from '../../pricing/LocalizedPatternComparison'
import {
  aiAcceleratorBonuses,
  aiAcceleratorBuildArtifacts,
  aiAcceleratorCurriculumWeeks,
  aiAcceleratorDemandSection,
  aiAcceleratorHero,
  aiAcceleratorPatternComparison,
  aiAcceleratorPreCourse,
  aiAcceleratorTools,
  aiAcceleratorEmiConfig,
  aiAcceleratorValueStack,
} from '../../../data/aiAutomationAcceleratorPageData'

function scrollToEnroll() {
  const el = document.getElementById('course-application-form') ?? document.getElementById('pricing')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  else window.location.href = '/apply-now'
}

export function AIAcceleratorUrgencyStrip() {
  return (
    <CourseUrgencyStrip
      slug={COURSE_SLUGS.aiAutomation}
      prefix="AI Track — Step 1 · Highest Demand 2026"
      earlyBirdSeats={8}
      showRegister={false}
      suffix="Seat confirmed on payment"
      onRegister={scrollToEnroll}
      claimLabel="Claim My Seat"
    />
  )
}

export function AIAcceleratorHero() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24 hero-glow" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/courses" className="hover:underline">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span>AI Track</span>
            <ChevronRight className="w-4 h-4" />
            <span style={{ color: 'var(--color-primary)' }}>AI Automation Accelerator</span>
          </div>

          <span
            className="font-body inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--text-on-accent)' }}
          >
            <Zap className="w-3.5 h-3.5" aria-hidden="true" />
            {aiAcceleratorHero.badge}
          </span>

          <h1 className="font-display mb-6 leading-[1.1]" style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
            {aiAcceleratorHero.title}
          </h1>

          <p className="font-body mb-8 leading-relaxed mx-auto" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)', maxWidth: '820px' }}>
            {aiAcceleratorHero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
            {aiAcceleratorHero.trustChips.map((chip) => (
              <span key={chip} className="font-body text-sm font-medium flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                {chip}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {aiAcceleratorHero.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl p-4 bg-card shadow-sm">
                <p className="font-display font-bold text-2xl md:text-3xl mb-1" style={{ color: 'var(--color-primary)' }}>{stat.value}</p>
                <p className="font-body text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="font-body font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>{aiAcceleratorHero.seatNote}</p>

          <button
            type="button"
            onClick={scrollToEnroll}
            className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2 mb-4"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
          >
            Claim My Seat
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="font-body text-sm max-w-2xl mx-auto italic" style={{ color: 'var(--text-muted)' }}>
            {aiAcceleratorHero.bookingNote}
          </p>
        </div>
      </div>
    </section>
  )
}

export function AIAcceleratorDemandSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-8" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          {aiAcceleratorDemandSection.title}
        </h2>
        <div className="space-y-4">
          {aiAcceleratorDemandSection.paragraphs.map((p) => (
            <p key={p} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AIAcceleratorPatternInterrupt() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-6" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          {aiAcceleratorPatternComparison.title}
        </h2>
        <div className="space-y-4 mb-10">
          {aiAcceleratorPatternComparison.intro.map((p) => (
            <p key={p} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
          ))}
        </div>
        <LocalizedPatternComparison
          bare
          leftHeader="AI Automation Accelerator"
          rightHeader="14-Day AI Generalist Programs"
          rows={aiAcceleratorPatternComparison.rows}
        />
      </div>
    </section>
  )
}

export function AIAcceleratorWhatYouBuild() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-10 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          What You Will Build and Deploy in 8 Weeks
        </h2>
        <div className="space-y-8">
          {aiAcceleratorBuildArtifacts.map((item) => (
            <div key={item.title} className="rounded-xl p-6 md:p-8 bg-card" style={{ border: '1px solid var(--border-default)' }}>
              <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="font-body leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
              <p className="font-body text-sm mb-3 italic" style={{ color: 'var(--text-muted)' }}>{item.examples}</p>
              <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>{item.supporting}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AIAcceleratorCurriculum() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-6 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          The 8-Week Curriculum
        </h2>
        <div className="rounded-xl p-5 md:p-6 mb-8 bg-card shadow-sm" style={{ border: '2px dashed var(--color-primary)' }}>
          <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{aiAcceleratorPreCourse.title}</h3>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{aiAcceleratorPreCourse.body}</p>
        </div>
        <div className="space-y-8">
          {aiAcceleratorCurriculumWeeks.map((week) => (
            <div key={week.week} className="rounded-xl p-5 md:p-6 bg-card shadow-sm">
              <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>{week.week}</h3>
              <div className="space-y-4">
                {week.sessions.map((session) => (
                  <div key={session.title} className="pl-4 border-l-2" style={{ borderColor: 'var(--color-accent)' }}>
                    <h4 className="font-body font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{session.title}</h4>
                    <p className="font-body text-sm mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{session.body}</p>
                    {session.tools && (
                      <p className="font-body text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                        <strong>Tool:</strong> {session.tools}
                      </p>
                    )}
                    <p className="font-body text-sm">
                      <strong style={{ color: 'var(--color-primary)' }}>Deliverable:</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>{session.deliverable}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AIAcceleratorToolchain() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-8 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          The Toolchain: Zapier, n8n, Make, Airtable, ManyChat, Relevance AI
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {aiAcceleratorTools.map((tool) => (
            <div key={tool.name} className="rounded-xl p-5" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
              <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{tool.name}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AIAcceleratorTeamEnrollment() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-6" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          Team Enrollment — AI Automation for Your Whole Team
        </h2>
        <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
          The AI Automation Accelerator is available for team enrollment — for companies that want to upskill a group of 5 to 10 professionals together in the same cohort.
        </p>
        <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          Team enrollment is handled through the Designient corporate inquiry process. Depending on team size and cohort timing, a custom quote, reserved seats, or a dedicated team cohort may be available.
        </p>
        <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>This is the right option if:</p>
        <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          Your team includes operations managers, marketing leads, sales coordinators, or founders who could all benefit from automation fluency — and you want them upskilled together with a shared working vocabulary.
        </p>
        <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>What changes for teams:</p>
        <p className="font-body leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          Teams of 5 or more receive a per-seat discount, a dedicated pre-course session to align on shared automation problems across the team, and a group review session at the end of week 8 where automations are evaluated for cross-team integration potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link
            href="/corporates#corporate-proposal"
            className="inline-flex items-center gap-2 font-body font-semibold px-6 py-3 rounded-full"
            style={{ backgroundColor: 'var(--color-cta)', color: 'var(--text-on-accent)' }}
          >
            Submit a corporate inquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="mailto:hello@designient.com?subject=Team%20Enrollment%20%E2%80%94%20AI%20Automation%20Accelerator"
            className="font-body text-sm underline"
            style={{ color: 'var(--color-primary)' }}
          >
            Or email hello@designient.com
          </a>
        </div>
      </div>
    </section>
  )
}

export function AIAcceleratorLearningPath() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-8 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          Your Path Before and After This Course
        </h2>

        <div className="rounded-2xl p-6 md:p-8 mb-8" style={{ backgroundColor: 'var(--bg-card)', border: '2px solid var(--color-primary)' }}>
          <p className="font-body text-sm font-bold mb-4 tracking-wide" style={{ color: 'var(--color-primary)' }}>AI TRACK</p>
          <ol className="font-body space-y-3" style={{ color: 'var(--text-secondary)' }}>
            <li>
              Step 1: <strong style={{ color: 'var(--text-primary)' }}>AI Automation Accelerator ← You are here</strong>
            </li>
            <li>
              Step 2:{' '}
              <Link href="/ai-product-design-course" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
                AI Product Design Course
              </Link>{' '}
              (6 weeks · <CrossCoursePriceRange slug={COURSE_SLUGS.aiProduct} />) — design AI behaviour, trust UI, and all AI states for designers and PMs moving into AI product roles
            </li>
          </ol>
        </div>

        <p className="font-body leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Not sure which track?</strong> The AI Track is for working professionals and freelancers who want to build AI automation workflows or design AI-native products — no design background required. The Design Track (UI UX Design Bootcamp → Pro → Master) is for people who want to become UI/UX designers.{' '}
          <Link href="/courses" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
            Compare all courses
          </Link>
          .
        </p>

        <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'var(--bg-card)' }}>
          <p className="font-body text-sm font-bold mb-3 tracking-wide" style={{ color: 'var(--color-highlight)' }}>FREE ENTRY POINT</p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            The monthly <strong>AI Automation Live</strong> workshop is a free 2-hour session — one complete automation problem built live, from trigger to deployed workflow.{' '}
            <Link href="/ai-automation-live" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
              Register free for the next session
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export function AIAcceleratorBonusStack() {
  return <CurrencyAwareBonusStack bonuses={aiAcceleratorBonuses} />
}

export function AIAcceleratorValueStack() {
  return (
    <CurrencyAwareValueStack
      rows={aiAcceleratorValueStack}
      emi={aiAcceleratorEmiConfig}
      internationalUsdNote="USD 449"
    />
  )
}

export function AIAcceleratorGuarantee() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <div className="rounded-2xl p-8 md:p-10 border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--bg-subtle)' }}>
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
            <div>
              <h2 className="font-display font-bold mb-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                Guarantee
              </h2>
              <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                If you attend every session, submit every deliverable, complete all three builds, and still have no deployed automations at course end — 50% refund.
              </p>
              <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Written claim within 14 days of the final session. Students who miss sessions or skip deliverables are ineligible.
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                This guarantee does not promise a business outcome from your automations. It promises that if you do the work, three working automations will exist when you finish. Full terms at{' '}
                <Link href="/cancellation-refund-policy" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
                  /cancellation-refund-policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
