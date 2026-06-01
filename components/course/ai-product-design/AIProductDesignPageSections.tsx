'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, ChevronRight, Gift, Shield, Target } from 'react-feather'
import {
  aiProductBonuses,
  aiProductCurriculumWeeks,
  aiProductEightStates,
  aiProductHero,
  aiProductIdealFor,
  aiProductNotFor,
  aiProductPatternComparison,
  aiProductPriceJustification,
  aiProductShipArtifacts,
  aiProductTools,
  aiProductValueStack,
} from '../../../data/aiProductDesignPageData'

function ComparisonTable({
  leftHeader,
  rightHeader,
  rows,
}: {
  leftHeader: string
  rightHeader: string
  rows: { feature: string; pro: string; others: string }[]
}) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}>
      <table className="w-full min-w-[560px]">
        <thead>
          <tr style={{ backgroundColor: 'var(--color-primary)' }}>
            <th className="p-4 text-left font-bold sticky left-0 z-10" style={{ color: 'var(--text-on-accent)', backgroundColor: 'var(--color-primary)' }}>
              Feature
            </th>
            <th className="p-4 text-center font-bold" style={{ color: 'var(--text-on-accent)' }}>{leftHeader}</th>
            <th className="p-4 text-center font-bold" style={{ color: 'var(--text-on-accent)' }}>{rightHeader}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.feature} style={{ backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)' }}>
              <td className="p-4 font-semibold sticky left-0 z-10 border-t" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)', backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)' }}>
                {row.feature}
              </td>
              <td className="p-4 text-center border-t font-medium" style={{ color: 'var(--color-primary)', borderColor: 'var(--border-default)' }}>
                {row.pro}
              </td>
              <td className="p-4 text-center border-t" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-default)' }}>
                {row.others}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function scrollToApply() {
  const el = document.getElementById('course-application-form')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  else window.location.href = '/apply-now'
}

export function AIProductUrgencyStrip() {
  return (
    <div className="py-3 px-4 text-center" style={{ backgroundColor: 'var(--color-highlight)', color: 'var(--text-on-accent)' }}>
      <p className="font-body text-sm md:text-base font-semibold">
        AI Track — Step 2 · By Application Only · Cohort 1 open. 12 seats. 5 early bird seats at Rs 64,999 — Rs 15,000 off standard. Applications reviewed within 48 hours.{' '}
        <button type="button" onClick={scrollToApply} className="underline hover:no-underline inline-flex items-center gap-1 font-bold">
          Apply for the Course
          <ArrowRight className="w-4 h-4" />
        </button>
      </p>
    </div>
  )
}

export function AIProductHero() {
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
            <span style={{ color: 'var(--color-primary)' }}>AI Product Design</span>
          </div>

          <span
            className="font-body inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--text-on-accent)' }}
          >
            <Target className="w-3.5 h-3.5" aria-hidden="true" />
            {aiProductHero.badge}
          </span>

          <h1 className="font-display mb-6 leading-[1.1]" style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
            {aiProductHero.title}
          </h1>

          <p className="font-body mb-8 leading-relaxed mx-auto" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)', maxWidth: '820px' }}>
            {aiProductHero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
            {aiProductHero.trustChips.map((chip) => (
              <span key={chip} className="font-body text-sm font-medium flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                {chip}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {aiProductHero.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl p-4 bg-card shadow-sm">
                <p className="font-display font-bold text-2xl md:text-3xl mb-1" style={{ color: 'var(--color-primary)' }}>{stat.value}</p>
                <p className="font-body text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="font-body font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>{aiProductHero.seatNote}</p>

          <button
            type="button"
            onClick={scrollToApply}
            className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2 mb-4"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
          >
            Apply for the Course
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="font-body text-sm max-w-2xl mx-auto italic" style={{ color: 'var(--text-muted)' }}>
            {aiProductHero.bookingNote}
          </p>
        </div>
      </div>
    </section>
  )
}

export function AIProductPatternInterrupt() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-6" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          {aiProductPatternComparison.title}
        </h2>
        <div className="space-y-4 mb-10">
          {aiProductPatternComparison.intro.map((p) => (
            <p key={p} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
          ))}
        </div>
        <ComparisonTable leftHeader="This Course" rightHeader="Generic AI + Design Courses" rows={aiProductPatternComparison.rows} />
      </div>
    </section>
  )
}

export function AIProductWhatYouShip() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-10 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          What You Will Ship in 6 Weeks
        </h2>
        <div className="space-y-8">
          {aiProductShipArtifacts.map((item) => (
            <div key={item.title} className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
              <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
              <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>{item.supporting}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AIProductPriceJustification() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-4" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          {aiProductPriceJustification.title}
        </h2>
        <p className="font-body mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{aiProductPriceJustification.intro}</p>
        <ol className="space-y-6 mb-8 list-none pl-0">
          {aiProductPriceJustification.points.map((point, i) => (
            <li key={point.title}>
              <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {i + 1}. {point.title}
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{point.body}</p>
            </li>
          ))}
        </ol>
        <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {aiProductPriceJustification.closing}{' '}
          <Link href="/ui-ux-design-pro" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
            UI UX Design Pro
          </Link>{' '}
          is the foundation course this specialisation builds on.
        </p>
      </div>
    </section>
  )
}

export function AIProductCurriculum() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-10 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          The 6-Week Curriculum
        </h2>
        <div className="space-y-8">
          {aiProductCurriculumWeeks.map((week) => (
            <div key={week.week} className="rounded-xl p-5 md:p-6 bg-card shadow-sm">
              <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>{week.week}</h3>
              <div className="space-y-4">
                {week.sessions.map((session) => (
                  <div key={session.title} className="pl-4 border-l-2" style={{ borderColor: 'var(--color-accent)' }}>
                    <h4 className="font-body font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{session.title}</h4>
                    <p className="font-body text-sm mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{session.body}</p>
                    {session.tools && (
                      <p className="font-body text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                        <strong>Tools:</strong> {session.tools}
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

export function AIProductEightStatesSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-4" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          Every AI State Designed — From Confident Output to Graceful Failure
        </h2>
        <p className="font-body mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          By end of week 3, every student has a Figma component library with all 8 AI states built. Production-ready. Built on a real product problem.
        </p>
        <ol className="font-body space-y-3 mb-8 ml-6 list-decimal" style={{ color: 'var(--text-secondary)' }}>
          {aiProductEightStates.map((state) => (
            <li key={state} className="leading-relaxed">{state}</li>
          ))}
        </ol>
        <p className="font-body font-semibold" style={{ color: 'var(--text-primary)' }}>
          Most AI products design only states 1 and 3. This course designs all 8.
        </p>
      </div>
    </section>
  )
}

export function AIProductToolchain() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-8 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          The Toolchain: Perplexity, Claude, FigJam AI, Figma, Bolt
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {aiProductTools.map((tool) => (
            <div key={tool.name} className="rounded-xl p-5 bg-card" style={{ border: '1px solid var(--border-default)' }}>
              <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{tool.name}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AIProductLearningPath() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-8 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          Your Path to and from This Course
        </h2>

        <div className="rounded-2xl p-6 md:p-8 mb-8" style={{ backgroundColor: 'var(--bg-subtle)', border: '2px solid var(--color-primary)' }}>
          <p className="font-body text-sm font-bold mb-4 tracking-wide" style={{ color: 'var(--color-primary)' }}>AI TRACK</p>
          <ol className="font-body space-y-3" style={{ color: 'var(--text-secondary)' }}>
            <li>
              Step 1:{' '}
              <Link href="/ai-automation-accelerator" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
                AI Automation Accelerator
              </Link>{' '}
              (8 weeks · Rs 34,999–44,999) — recommended if you want to build AI automation fluency before or alongside this course
            </li>
            <li>
              Step 2: <strong style={{ color: 'var(--text-primary)' }}>AI Product Design Course ← You are here</strong>
            </li>
          </ol>
        </div>

        <div className="rounded-2xl p-6 md:p-8 mb-8" style={{ backgroundColor: 'var(--bg-base)', border: '1px dashed var(--border-default)' }}>
          <p className="font-body text-sm font-bold mb-3 tracking-wide" style={{ color: 'var(--color-primary)' }}>CROSS-TRACK ENTRY</p>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
            This course is open to PMs and product folks from the Design Track — specifically{' '}
            <Link href="/ui-ux-design-pro" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
              UI UX Design Pro
            </Link>{' '}
            graduates who want an AI product specialisation. Pro graduates receive Rs 5,000 off the standard price.
          </p>
        </div>

        <div className="rounded-2xl p-6 md:p-8 mb-8" style={{ backgroundColor: 'var(--bg-subtle)' }}>
          <p className="font-body text-sm font-bold mb-3 tracking-wide" style={{ color: 'var(--text-primary)' }}>AFTER THIS COURSE</p>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
            There is no Step 3 on the AI Track. AI Product Design is the advanced specialisation. Graduates who want the full senior design curriculum should consider the{' '}
            <Link href="/ui-ux-design-master" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
              UI UX Design Master
            </Link>
            , which is available in parallel.
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Master vs AI Product Design:</strong> Master includes a 2-week AI product strategy module at overview level. This course is 6 weeks on execution — all 8 states in Figma, behaviour specs, Bolt/v0 prototype, two case studies.
          </p>
        </div>

        <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'var(--bg-warm)' }}>
          <p className="font-body text-sm font-bold mb-3 tracking-wide" style={{ color: 'var(--color-highlight)' }}>FREE ENTRY POINT</p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            If you are not yet sure this is the right course, the monthly <strong>AI Product Design Live</strong> workshop is a free 2-hour session that covers one complete AI state design problem live. Email{' '}
            <a href="mailto:hello@designient.com?subject=AI%20Product%20Design%20Live%20Workshop" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
              hello@designient.com
            </a>{' '}
            for the next date.
          </p>
        </div>
      </div>
    </section>
  )
}

export function AIProductBonusStack() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Gift className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
          <h2 className="font-display font-bold" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            The Bonus Stack
          </h2>
        </div>
        <div className="space-y-4">
          {aiProductBonuses.map((bonus) => (
            <div
              key={bonus.name}
              className="rounded-xl p-5 bg-card"
              style={{ border: bonus.highlight ? '2px solid var(--color-highlight)' : '1px solid var(--border-default)' }}
            >
              <div className="flex flex-wrap justify-between gap-2 mb-2">
                <h3 className="font-display font-semibold" style={{ color: 'var(--text-primary)' }}>{bonus.name}</h3>
                <span className="font-body text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
                  Standalone value: {bonus.value} · Included
                </span>
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AIProductValueStack() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
        <h2 className="font-display font-bold mb-8 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          The Value Stack
        </h2>
        <div className="overflow-x-auto rounded-xl" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}>
          <table className="w-full min-w-[400px]">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <th className="p-4 text-left font-bold" style={{ color: 'var(--text-on-accent)' }}>Item</th>
                <th className="p-4 text-right font-bold" style={{ color: 'var(--text-on-accent)' }}>Standalone Value</th>
              </tr>
            </thead>
            <tbody>
              {aiProductValueStack.map((row, index) => (
                <tr key={row.item} style={{ backgroundColor: index % 2 === 0 ? 'var(--bg-subtle)' : 'var(--bg-card)' }}>
                  <td className="p-4 border-t text-sm" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-default)' }}>{row.item}</td>
                  <td className="p-4 border-t text-right font-semibold text-sm" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)' }}>{row.value}</td>
                </tr>
              ))}
              <tr style={{ backgroundColor: 'var(--bg-warm)' }}>
                <td className="p-4 border-t font-bold" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)' }}>Total value</td>
                <td className="p-4 border-t text-right font-bold" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)' }}>Rs 1,95,992</td>
              </tr>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <td className="p-4 font-bold" style={{ color: 'var(--text-on-accent)' }}>Early bird price</td>
                <td className="p-4 text-right font-bold" style={{ color: 'var(--text-on-accent)' }}>Rs 64,999</td>
              </tr>
              <tr style={{ backgroundColor: 'var(--color-accent-muted)' }}>
                <td className="p-4 font-bold" style={{ color: 'var(--text-primary)' }}>Standard price</td>
                <td className="p-4 text-right font-bold" style={{ color: 'var(--color-primary)' }}>Rs 79,999</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="font-body text-sm text-center mt-6" style={{ color: 'var(--text-muted)' }}>
          EMI available — Rs 21,666/month for 3 months (early bird) · Zero interest · International USD 899 via PayPal
        </p>
      </div>
    </section>
  )
}

export function AIProductGuarantee() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <div className="rounded-2xl p-8 md:p-10 border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--bg-card)' }}>
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
            <div>
              <h2 className="font-display font-bold mb-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                Guarantee
              </h2>
              <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                If you attend every session, submit every deliverable on time, and still do not have a portfolio-quality audit case study and functional prototype at course end — you receive a 25% refund.
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Written claim within 14 days of the final session. Students who miss sessions or skip deliverables are ineligible. Full terms at{' '}
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
