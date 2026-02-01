'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Briefcase, FileText, Search, Zap, Calendar, Shield, CheckCircle, Target, Layers } from 'react-feather'
import { CorporateFAQSection } from './CorporateFAQSection'

export function HiringConsultingContent() {
  const talentPoolAccess = [
    {
      title: 'Freshers',
      description: 'Entry-level designers ready to start their careers',
      icon: Users,
    },
    {
      title: 'Interns',
      description: 'Design interns for short-term projects and learning opportunities',
      icon: Target,
    },
    {
      title: 'Contract Designers',
      description: 'Experienced designers available for project-based engagements',
      icon: Briefcase,
    },
    {
      title: 'Full-time Placements',
      description: 'Design professionals for permanent team positions',
      icon: Users,
    },
  ]

  const consultingServices = [
    {
      title: 'UX Audits',
      description: 'Comprehensive evaluation of your product\'s user experience and design quality',
      icon: Search,
    },
    {
      title: 'Product Redesigns',
      description: 'End-to-end redesign projects to improve usability and user satisfaction',
      icon: Layers,
    },
    {
      title: 'Research & Usability Testing',
      description: 'User research, usability testing, and data-driven design insights',
      icon: FileText,
    },
    {
      title: 'AI Integration Consulting',
      description: 'Strategic guidance on integrating AI tools into design workflows',
      icon: Zap,
    },
    {
      title: 'Ongoing Design Partnerships',
      description: 'Long-term design support and strategic design consulting',
      icon: Briefcase,
    },
  ]

  const engagementModels = [
    {
      title: 'Project-based',
      description: 'Fixed-scope projects with defined deliverables and timelines',
      icon: Target,
    },
    {
      title: 'Retainer-based',
      description: 'Ongoing monthly engagements with flexible scope and priorities',
      icon: Calendar,
    },
    {
      title: 'Advisory',
      description: 'Strategic guidance and consultation without hands-on execution',
      icon: Briefcase,
    },
    {
      title: 'Flexible or Custom Engagements',
      description: 'Tailored engagement models designed around your specific needs',
      icon: Zap,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8">
              <Link href="/corporates" className="inline-flex items-center text-sm font-body mb-4 hover:underline" style={{ color: '#8458B3' }}>
                ← Back to For Corporates
              </Link>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#1a1a1a',
                lineHeight: '1.2'
              }}>
              Hiring Support & Design Consulting for Growing Teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl mb-4 leading-relaxed"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.8'
              }}>
              Talent access and design expertise on demand. We help growing teams find the right designers and solve complex design challenges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm md:text-base mb-8 leading-relaxed"
              style={{
                color: '#6b7280',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              For individual career development, explore our <Link href="/courses" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>individual design courses</Link> including <Link href="/ui-ux-design-pro" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>UI/UX Design Pro</Link> and <Link href="/ui-ux-design-bootcamp" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>UI/UX Design Bootcamp</Link>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us?reason=corporate-proposal"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: '#8458B3' }}>
                Request a Proposal
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Talent Pool Access */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              Talent Pool Access
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              Access to designers at various experience levels for your team needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {talentPoolAccess.map((talent, index) => {
              const Icon = talent.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white border-2 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                  style={{ borderColor: '#e5e7eb' }}>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFF6E2' }}>
                      <Icon className="w-6 h-6" style={{ color: '#8458B3' }} />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                    {talent.title}
                  </h3>
                  <p className="font-body text-xs leading-relaxed" style={{ color: '#4a4a4a' }}>
                    {talent.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-8 text-center">
            <p className="font-body text-sm italic" style={{ color: '#6b7280' }}>
              Note: Talent availability varies. We facilitate connections but do not guarantee specific candidates or hiring outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              Consulting Services
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              Design expertise and strategic guidance for your product challenges
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {consultingServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white rounded-xl p-6 border-l-4 hover:shadow-lg transition-shadow"
                  style={{ borderColor: '#FF5841' }}>
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#FF5841' }} />
                    <div className="flex-1">
                      <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                        {service.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              Engagement Models
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              Flexible engagement options to suit your team&apos;s needs and structure
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {engagementModels.map((model, index) => {
              const Icon = model.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  style={{ borderColor: '#e5e7eb' }}>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: '#FFF6E2' }}>
                      <Icon className="w-5 h-5" style={{ color: '#8458B3' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                        {model.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                        {model.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust & Confidentiality */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderColor: '#8458B3' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#FFF6E2' }}>
                  <Shield className="w-8 h-8" style={{ color: '#8458B3' }} />
                </div>
                <div>
                  <h2 className="font-display font-bold mb-4" style={{ fontSize: '1.75rem', color: '#1a1a1a' }}>
                    Trust & Confidentiality
                  </h2>
                  <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a' }}>
                    We maintain strict confidentiality and transparency in all our engagements.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-16">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8458B3' }} />
                  <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                    <strong>No guaranteed outcomes:</strong> We don&apos;t promise specific hiring results, project outcomes, or business impact. Success depends on multiple factors including team fit, implementation, and market conditions
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8458B3' }} />
                  <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                    <strong>Confidential handling of corporate data:</strong> We treat all corporate information, strategies, product details, and business data with strict confidentiality
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8458B3' }} />
                  <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                    <strong>NDAs available on request:</strong> We can execute non-disclosure agreements to protect your sensitive information, product strategies, and business plans
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
            question: 'What kind of talent can we access?',
            answer: 'We provide access to designers at various experience levels including freshers, interns, contract designers, and full-time placements. Talent availability varies, and we facilitate connections but do not guarantee specific candidates or hiring outcomes.'
          },
          {
            question: 'Do you offer contract or project-based support?',
            answer: 'Yes. We offer multiple engagement models including project-based engagements, retainer-based arrangements, advisory services, and flexible custom engagements tailored to your needs.'
          },
          {
            question: 'How do you assess designers before recommending?',
            answer: 'We evaluate designers based on their portfolio, skills, experience, and fit for your specific requirements. However, we don\'t guarantee specific candidates or hiring outcomes, as success depends on multiple factors including team fit and implementation.'
          },
          {
            question: 'Can you support long-term partnerships?',
            answer: 'Yes. We offer ongoing design partnerships and long-term consulting engagements. We can work with you on retainer-based models or flexible arrangements for sustained support.'
          },
          {
            question: 'Are outcomes guaranteed?',
            answer: 'No. We don\'t guarantee specific hiring results, project outcomes, or business impact. Success depends on multiple factors including team fit, implementation, market conditions, and various factors beyond our control.'
          }
        ]}
      />

      {/* Final CTA Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#8458B3' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold mb-6 text-white" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Tell us what you need. We&apos;ll propose the right model.
            </h2>
            <p className="font-body text-lg mb-8 text-white opacity-90" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}>
              Whether you need design talent, consulting expertise, or both, we&apos;ll work with you to design an engagement model that fits your team&apos;s needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us?reason=corporate-proposal"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-[#8458B3] bg-white transition-all hover:scale-105">
                Request a Proposal
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact-us?reason=corporate-call"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white border-2 border-white transition-all hover:scale-105">
                Book a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
