import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, AlertCircle } from 'lucide-react'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Button } from '../../components/ui/Button'
import { Overline } from '../../components/ui/Badge'
import { Reveal } from '../../components/ui/Reveal'
import { StructuredData } from '../../components/StructuredData'
import { CTASection } from '../../components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Placements & Career Support — 95% Placement Rate | Designient',
  description:
    'Designient has a 95% placement rate for Pro course graduates. Real career support: portfolio review, resume building, interview coaching, and direct company introductions.',
  openGraph: {
    title: 'Placements & Career Support | Designient',
    description: '95% placement rate. Real alumni at Google, Amazon, Deloitte. Here\'s how we make that happen — honestly.',
    url: 'https://designient.com/placements',
  },
  alternates: { canonical: 'https://designient.com/placements' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
    { '@type': 'ListItem', position: 2, name: 'Placements', item: 'https://designient.com/placements' },
  ],
}

const steps = [
  { num: '01', title: 'Portfolio Development', body: '4–5 real-world projects reviewed by mentors until they\'re hiring-ready. No placeholder work — every case study is built for actual job applications.' },
  { num: '02', title: 'Resume & LinkedIn', body: 'Built with communication specialists. Not a template — personal attention to your story, your words, your positioning.' },
  { num: '03', title: 'Interview Training', body: 'Mock technical interviews, portfolio presentations, and confidence-building sessions. You\'ll know exactly what to expect.' },
  { num: '04', title: 'Company Connections', body: 'Direct introductions to hiring partners and job opportunities. We have relationships with design teams at companies across India.' },
  { num: '05', title: 'Lifetime Access', body: 'Mentorship and community access doesn\'t expire at graduation. You can come back months later when you\'re negotiating your next role.' },
]

const stats = [
  { value: '95%', label: 'Pro Course Placement', sub: 'within 3 months' },
  { value: '85%', label: 'Bootcamp Placement', sub: 'within 3 months' },
  { value: '150+', label: 'Alumni Working', sub: 'across India & globally' },
]

const companies = ['Google', 'Amazon', 'Deloitte', 'Flipkart', 'CRED', 'Swiggy', 'Accenture', 'Capgemini', 'Publicis Sapient', 'WPP', 'EY', 'IBM']

const alumni = [
  { name: 'Priya Sharma', journey: 'Graduate → UI Designer at Google', quote: 'The portfolio review process was the difference. My mentor wouldn\'t sign off until it was genuinely competitive.', course: 'Pro Course' },
  { name: 'Rohan Mehta', journey: 'Civil Engineer → Product Designer', quote: 'I switched careers at 28. The placement support made me feel like I had the whole school behind me.', course: 'Pro Course' },
  { name: 'Ananya Reddy', journey: 'Fresher → UX Designer at Amazon', quote: 'I had zero design background. The direct introductions to companies opened doors I couldn\'t have found myself.', course: 'Master Course' },
]

export default function PlacementsPage() {
  return (
    <div className="min-h-screen bg-void">
      <StructuredData data={breadcrumbSchema} />
      <Navbar />
      <main id="main-content">
        {/* HERO */}
        <section
          aria-labelledby="placements-hero-heading"
          className="relative isolate pt-20 pb-28 md:pb-36 section-glow overflow-hidden"
        >
          <div className="absolute inset-0 bg-dots opacity-30 -z-10" aria-hidden="true" />
          <div className="max-w-container mx-auto container-px text-center">
            <Reveal>
              <Overline>Placements &amp; Career Support</Overline>
              <h1
                id="placements-hero-heading"
                className="mt-6 mx-auto max-w-3xl font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[1.06] tracking-[-0.025em] text-ivory text-balance"
              >
                Careers, not certificates.
              </h1>
              <p className="mt-7 mx-auto max-w-2xl text-body-lg text-silver">
                95% of our Pro course graduates are placed within 3 months of completion. Here&rsquo;s
                how we make that happen — honestly.
              </p>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="text-center">
                    <div className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-none text-neon">
                      {s.value}
                    </div>
                    <div className="mt-2 text-ivory text-[15px] font-medium">{s.label}</div>
                    <div className="text-ash text-[13px] mt-0.5">{s.sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section aria-labelledby="process-heading" className="section bg-void">
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <Overline>How It Works</Overline>
              <h2
                id="process-heading"
                className="mt-5 font-serif text-display-sm md:text-display-md text-ivory text-balance max-w-2xl"
              >
                Your 5-step path from graduate to placed.
              </h2>
            </Reveal>
            <div className="mt-16 max-w-2xl space-y-0">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 80}>
                  <div className="flex gap-8 pb-12 relative">
                    {i < steps.length - 1 ? (
                      <div
                        className="absolute left-6 top-14 bottom-0 w-px"
                        style={{ background: 'linear-gradient(180deg, rgba(168,85,247,0.3) 0%, transparent 100%)' }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-neon/30 bg-neon-10 grid place-items-center text-neon font-medium text-[13px] uppercase tracking-[0.06em]">
                      {step.num}
                    </div>
                    <div className="pt-2.5">
                      <h3 className="font-sans text-[18px] font-semibold text-ivory">{step.title}</h3>
                      <p className="mt-3 text-silver text-[15.5px] leading-[1.65]">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMPANIES */}
        <section
          aria-labelledby="companies-heading"
          className="section"
          style={{ background: 'var(--color-obsidian)' }}
        >
          <div className="max-w-container mx-auto container-px text-center">
            <Reveal>
              <Overline>Where Our Graduates Work</Overline>
              <h2
                id="companies-heading"
                className="mt-5 font-serif text-display-sm text-ivory text-balance mx-auto max-w-xl"
              >
                A few companies that have hired Designient graduates.
              </h2>
            </Reveal>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {companies.map((c, i) => (
                <Reveal key={c} delay={i * 40}>
                  <div className="px-5 py-2.5 rounded-full border border-white/10 text-silver text-[14px] hover:border-neon/30 hover:text-ivory transition-colors">
                    {c}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ALUMNI STORIES */}
        <section aria-labelledby="alumni-heading" className="section bg-void">
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <Overline>Alumni Voices</Overline>
              <h2
                id="alumni-heading"
                className="mt-5 font-serif text-display-sm md:text-display-md text-ivory text-balance max-w-2xl"
              >
                Real careers. Real stories.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {alumni.map((a, i) => (
                <Reveal key={a.name} delay={i * 100}>
                  <article className="card p-7 h-full flex flex-col">
                    <span className="font-serif text-display-sm text-neon leading-none">&ldquo;</span>
                    <p className="mt-2 font-serif italic text-[18px] leading-[1.5] text-cloud flex-1">
                      {a.quote}
                    </p>
                    <div className="mt-6 w-8 h-px bg-neon" />
                    <p className="mt-4 text-ivory font-medium text-[15px]">{a.name}</p>
                    <p className="text-neon text-[13px] mt-0.5 uppercase tracking-[0.06em]">
                      {a.journey}
                    </p>
                    <span className="mt-3 inline-block text-[11px] text-ash uppercase tracking-[0.1em] border border-white/10 rounded-full px-3 py-1 w-fit">
                      {a.course}
                    </span>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 text-center">
              <Link href="/success-stories" className="text-neon hover:text-neon-glow transition-colors text-[15px] font-medium">
                Read all success stories →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* HONESTY NOTE */}
        <section aria-label="Our honesty pledge" className="section" style={{ background: 'var(--color-obsidian)' }}>
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <div className="max-w-3xl mx-auto rounded-lg border border-neon/20 bg-neon-10 p-8 md:p-12">
                <div className="flex items-start gap-4">
                  <AlertCircle size={24} strokeWidth={1.5} className="text-neon flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-sans text-[18px] font-semibold text-ivory mb-4">
                      Placement assistance, not fake guarantees.
                    </h2>
                    <p className="text-cloud text-[15.5px] leading-[1.7]">
                      We prepare you, connect you, and support you — but the final interview is yours
                      to ace. We say this clearly because that honesty is exactly why our numbers are
                      real. We don&rsquo;t make promises we can&rsquo;t keep, and we don&rsquo;t count
                      graduates who were already employed before our programme.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
