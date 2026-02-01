'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap, Users, Search, Settings, Target, Shield, CheckCircle, Code, Layers } from 'react-feather'
import { CorporateFAQSection } from './CorporateFAQSection'

export function AIEnablementContent() {
  const aiFocusAreas = [
    {
      title: 'Practical AI Tools for Designers',
      description: 'Hands-on training with AI tools that enhance design workflows and productivity',
      icon: Layers,
    },
    {
      title: 'AI for Product Teams',
      description: 'Cross-functional AI adoption for Design, Product Management, and Development teams',
      icon: Users,
    },
    {
      title: 'AI for Productivity & Workflows',
      description: 'Using AI to streamline processes and improve team efficiency',
      icon: Settings,
    },
  ]

  const tools = [
    {
      name: 'ChatGPT',
      description: 'Conversational AI for ideation, research, and content generation',
    },
    {
      name: 'MagicPattern',
      description: 'AI-powered design pattern generation and exploration',
    },
    {
      name: 'Replit',
      description: 'AI-assisted coding and development workflows',
    },
    {
      name: 'Bolt.new',
      description: 'AI tools for rapid prototyping and design iteration',
    },
  ]

  const workshopStyle = [
    {
      title: 'Hands-on Exercises',
      description: 'Practical activities where teams apply AI tools to real scenarios',
    },
    {
      title: 'Live Demonstrations',
      description: 'Real-time walkthroughs of AI tools and their applications',
    },
    {
      title: 'Strategic Frameworks',
      description: 'Structured approaches to integrating AI into team workflows',
    },
    {
      title: 'Real Team Use Cases',
      description: 'Examples and case studies from actual product team implementations',
    },
  ]

  const commonUseCases = [
    {
      title: 'Faster Ideation & Exploration',
      description: 'Using AI to generate ideas, explore concepts, and iterate quickly',
      icon: Zap,
    },
    {
      title: 'Smarter Research Synthesis',
      description: 'Leveraging AI to analyze research data and extract insights efficiently',
      icon: Search,
    },
    {
      title: 'Workflow Automation',
      description: 'Identifying opportunities to automate repetitive tasks and processes',
      icon: Settings,
    },
    {
      title: 'AI-Assisted Design Thinking',
      description: 'Integrating AI into design thinking processes and methodologies',
      icon: Target,
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
              AI Enablement & Hands-On Workshops for Product Teams
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
              Enable your team to use AI responsibly and effectively within real product workflows.
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
              For individual AI learning, check out our <Link href="/prompt-engineering-mastery" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>Prompt Engineering Mastery</Link> course or explore all our <Link href="/courses" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>design courses</Link>.
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

      {/* AI Focus Areas */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              AI Focus Areas
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              Practical AI training tailored to your team&apos;s needs and workflows
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {aiFocusAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white border-2 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                  style={{ borderColor: '#e5e7eb' }}>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFF6E2' }}>
                      <Icon className="w-6 h-6" style={{ color: '#8458B3' }} />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold mb-3" style={{ fontSize: '1.25rem', color: '#1a1a1a' }}>
                    {area.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                    {area.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tools We Work With */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              Tools We Work With
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              Practical AI tools integrated into real product workflows
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-xl p-6 border-l-4 hover:shadow-lg transition-shadow"
                style={{ borderColor: '#f2d53c' }}>
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#f2d53c' }} />
                  <div>
                    <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                      {tool.name}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                      {tool.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Style */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              Workshop Style
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto mb-4" style={{ color: '#4a4a4a' }}>
              Mixed delivery format combining multiple learning approaches
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {workshopStyle.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-shadow"
                style={{ borderColor: '#e5e7eb' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <div>
                    <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                      {item.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              Common Use Cases
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              Real-world applications of AI in product development workflows
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {commonUseCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  style={{ borderColor: '#e5e7eb', borderWidth: '2px', borderStyle: 'solid' }}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#FFF6E2' }}>
                      <Icon className="w-6 h-6" style={{ color: '#8458B3' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                        {useCase.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Responsible AI Use */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
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
                    Responsible AI Use
                  </h2>
                  <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a' }}>
                    Our approach to AI enablement emphasizes practical adoption with a focus on ethics and real-world constraints.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-16">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8458B3' }} />
                  <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                    <strong>Focus on practical adoption:</strong> We help teams integrate AI tools into existing workflows rather than promising transformative outcomes
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8458B3' }} />
                  <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                    <strong>Emphasis on ethics and real-world constraints:</strong> We address data privacy, bias, accuracy, and the limitations of AI tools in enterprise contexts
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8458B3' }} />
                  <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                    <strong>No AI outcome guarantees:</strong> We don&apos;t promise specific productivity gains, automation results, or business outcomes. Success depends on team implementation, context, and various factors beyond our control
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
            question: 'Are these workshops hands-on?',
            answer: 'Yes. Our AI enablement workshops include hands-on exercises, live demonstrations, strategic frameworks, and real team use cases. We use a mixed delivery format combining multiple learning approaches.'
          },
          {
            question: 'Do you focus on real product use cases?',
            answer: 'Yes. We focus on practical, real-world applications of AI tools within actual product workflows. Our workshops include examples and case studies from real product team implementations.'
          },
          {
            question: 'Which AI tools do you cover?',
            answer: 'We work with practical AI tools including ChatGPT, MagicPattern, Replit, Bolt.new, and other tools relevant to product teams. The specific tools covered can be customized based on your team\'s needs.'
          },
          {
            question: 'Is this suitable for non-design roles?',
            answer: 'Yes. Our AI enablement workshops are designed for cross-functional product teams including Design, Product Management, and Development. Content can be tailored to different roles and responsibilities.'
          },
          {
            question: 'Do you address ethical and responsible AI usage?',
            answer: 'Yes. We emphasize responsible AI use, including ethics, data privacy, bias, accuracy, and real-world constraints. We address the limitations of AI tools in enterprise contexts.'
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
              Help your team adopt AI with confidence.
            </h2>
            <p className="font-body text-lg mb-8 text-white opacity-90" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}>
              Equip your product team with practical AI skills and responsible adoption practices. Let&apos;s discuss how we can support your team&apos;s AI journey.
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
