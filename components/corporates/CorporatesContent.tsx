'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Briefcase, Target, CheckCircle, Shield, Zap, FileText } from 'react-feather'
import { CorporateFAQSection } from './CorporateFAQSection'

export function CorporatesContent() {
  const offerings = [
    {
      title: 'Training Programs',
      description: 'Customized upskilling for product and design teams',
      icon: Users,
      link: '/corporates/training-programs',
      color: 'var(--color-primary)',
    },
    {
      title: 'AI Enablement & Workshops',
      description: 'Practical AI adoption for modern product teams',
      icon: Zap,
      link: '/corporates/ai-enablement-workshops',
      color: 'var(--color-highlight)',
    },
    {
      title: 'Hiring & Consulting',
      description: 'Talent access and design expertise on demand',
      icon: Briefcase,
      link: '/corporates/hiring-consulting',
      color: 'var(--color-cta)',
    },
    {
      title: 'Case Studies',
      description: 'Real partnerships and outcome-focused results',
      icon: FileText,
      link: '/corporates/case-studies',
      color: 'var(--color-success)',
    },
  ]

  const whoWeWorkWith = [
    { name: 'Mid-size product companies', icon: Briefcase },
    { name: 'Large enterprises', icon: Briefcase },
    { name: 'Startups', icon: Zap },
    { name: 'Agencies & consultancies', icon: Briefcase },
    { name: 'HR & L&D teams', icon: Users },
    { name: 'Founders & CXOs', icon: Target },
  ]

  const whyDesignient = [
    {
      title: 'Mentor-led, hands-on approach',
      description: 'Experienced practitioners guide your team through real-world scenarios and practical application',
    },
    {
      title: 'Experience across global teams',
      description: 'Proven track record working with diverse teams and international product companies',
    },
    {
      title: 'AI-first, future-ready thinking',
      description: 'Cutting-edge AI integration and modern workflows that prepare teams for tomorrow',
    },
    {
      title: 'Flexible engagement models',
      description: 'Customized programs that fit your timeline, budget, and team structure',
    },
    {
      title: 'Designed for real-world product teams',
      description: 'Content and methods tailored to actual product development challenges and workflows',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--text-primary)',
                lineHeight: '1.2'
              }}>
              Corporate Training, AI Enablement & Design Consulting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl mb-4 leading-relaxed"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.8'
              }}>
              We partner with mid-size product companies, enterprises, and growing teams to upskill talent, enable AI adoption, and solve complex design challenges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm md:text-base mb-8 leading-relaxed"
              style={{
                color: 'var(--text-muted)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              For individual upskilling, explore our <Link href="/courses" className="underline hover:no-underline font-semibold" style={{ color: 'var(--color-primary)' }}>flagship courses</Link> including <Link href="/ui-ux-design-pro" className="underline hover:no-underline font-semibold" style={{ color: 'var(--color-primary)' }}>UI/UX Design Pro</Link> and <Link href="/ai-automation-accelerator" className="underline hover:no-underline font-semibold" style={{ color: 'var(--color-primary)' }}>AI Automation Accelerator</Link>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us?reason=corporate-proposal"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--color-cta)' }}>
                Request a Proposal
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact-us?reason=corporate-call"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold transition-all hover:scale-105 border-2"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-primary)'
                }}>
                Book a Call
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-primary)' }}>
              Who We Work With
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We collaborate with organizations of all sizes, from fast-growing startups to established enterprises
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whoWeWorkWith.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-card border-2 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                  style={{ borderColor: 'var(--border-default)' }}>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-warm)' }}>
                      <Icon className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold" style={{ color: 'var(--text-primary)', fontSize: '1.125rem' }}>
                    {item.name}
                  </h3>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-5xl mx-auto mt-8 bg-card border-2 rounded-xl p-8 hover:shadow-lg transition-shadow"
            style={{ borderColor: 'var(--border-default)' }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-warm)' }}>
                <Zap className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
              </div>
            </div>
            <h3 className="font-display font-semibold text-center mb-4" style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>
              Teams Upskilling in AI Automation
            </h3>
            <p className="font-body leading-relaxed text-center mb-4 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Companies with 5 to 35 professionals — operations managers, marketers, sales leads, HR teams, or cross-functional product squads — who want to build practical AI automation skills together as a cohort rather than sending one person at a time.
            </p>
            <p className="font-body leading-relaxed text-center mb-6 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              The AI Automation Accelerator is available for team enrollment with a per-seat discount, a dedicated pre-course alignment session, and a group portfolio review at the end.
            </p>
            <div className="text-center">
              <Link
                href="#corporate-proposal"
                className="inline-flex items-center gap-2 font-body font-semibold transition-colors hover:opacity-80"
                style={{ color: 'var(--color-primary)' }}>
                Enquire about team enrollment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-primary)' }}>
              What We Offer
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Comprehensive solutions tailored to your team&apos;s needs and business objectives
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {offerings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <Link href={offering.link} className="block group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${offering.color}15` }}>
                        <Icon className="w-6 h-6" style={{ color: offering.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                          {offering.title}
                        </h3>
                        <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {offering.description}
                        </p>
                        {offering.title === 'AI Enablement & Workshops' && (
                          <p className="font-body text-sm leading-relaxed mt-4 italic" style={{ color: 'var(--text-muted)' }}>
                            For individuals who want to build hands-on AI automation skills independently, the{' '}
                            <Link href="/ai-automation-accelerator" className="underline hover:no-underline font-semibold not-italic" style={{ color: 'var(--color-primary)' }}>
                              AI Automation Accelerator
                            </Link>{' '}
                            is available for both individual and team enrollment.
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center text-sm font-semibold mt-4" style={{ color: offering.color }}>
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Designient */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-primary)' }}>
              Why Designient
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              What sets our corporate programs apart
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyDesignient.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-card border-2 rounded-xl p-6 hover:shadow-lg transition-shadow"
                style={{ borderColor: 'var(--border-default)' }}>
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="font-display font-semibold" style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                </div>
                <p className="font-body text-sm leading-relaxed ml-9" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Boundaries */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-lg border-l-4" style={{ borderColor: 'var(--color-primary)' }}>
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <h2 className="font-display font-bold mb-4" style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>
                    Trust & Boundaries
                  </h2>
                  <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    We believe in transparent partnerships. Here&apos;s what you should know:
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-12">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 accent-icon-box" style={{ backgroundColor: 'var(--color-accent)' }} />
                  <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <strong>No guaranteed outcomes:</strong> We don&apos;t promise specific results, as outcomes vary based on team dynamics, implementation, and market factors
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 accent-icon-box" style={{ backgroundColor: 'var(--color-accent)' }} />
                  <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <strong>Results vary by team and context:</strong> Each organization&apos;s journey is unique, and success depends on multiple factors beyond our control
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 accent-icon-box" style={{ backgroundColor: 'var(--color-accent)' }} />
                  <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <strong>Confidential handling of corporate data:</strong> We treat all corporate information, strategies, and data with strict confidentiality
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 accent-icon-box" style={{ backgroundColor: 'var(--color-accent)' }} />
                  <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <strong>NDAs available on request:</strong> We can execute non-disclosure agreements to protect your sensitive information and business strategies
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <CorporateFAQSection
        faqs={[
          {
            question: 'Who are these services best suited for?',
            answer: 'Our corporate services are best suited for mid-size product companies, large enterprises, startups, agencies, HR & L&D teams, and founders & CXOs looking to upskill their teams, enable AI adoption, or access design expertise.'
          },
          {
            question: 'Do you work with international teams?',
            answer: 'Yes, we work with teams globally. Our training programs can be delivered online, onsite, or in hybrid formats to accommodate international teams across different time zones.'
          },
          {
            question: 'Can engagements be fully customized?',
            answer: 'Yes. All our corporate engagements are customized to your team\'s needs, goals, maturity level, and workflows. We conduct a needs assessment before designing any program.'
          },
          {
            question: 'Do you sign NDAs?',
            answer: 'Yes. We can execute non-disclosure agreements to protect your sensitive information, business strategies, and proprietary data. NDAs are available on request.'
          },
          {
            question: 'How do we get started?',
            answer: 'You can request a proposal or book a call through our contact form. We\'ll discuss your requirements, conduct a needs assessment, and propose a customized solution for your team.'
          }
        ]}
      />

      {/* Final CTA Section */}
      <section id="corporate-proposal" className="py-16 md:py-24 scroll-mt-24" style={{ backgroundColor: 'var(--color-cta)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold mb-6" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Tell us about your team. We&apos;ll design the right solution.
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}>
              Every partnership is unique. Share your challenges, goals, and team structure, and we&apos;ll create a customized program that fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us?reason=corporate-proposal"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-[var(--color-primary)] bg-card transition-all hover:scale-105">
                Request a Proposal
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact-us?reason=corporate-call"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold border-2 border-[var(--color-accent)] transition-all hover:scale-105" style={{ color: 'var(--color-accent)' }}>
                Book a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
