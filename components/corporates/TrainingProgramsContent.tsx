'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Calendar, BookOpen, Award, CheckCircle, Zap, Target, Layers, MessageSquare, Code } from 'react-feather'
import { CorporateFAQSection } from './CorporateFAQSection'

export function TrainingProgramsContent() {
  const trainingFormats = [
    {
      title: 'Live Online Training',
      description: 'Interactive sessions delivered remotely to your distributed teams',
      icon: Users,
    },
    {
      title: 'Onsite (In-Office) Training',
      description: 'In-person workshops conducted at your office location',
      icon: Target,
    },
    {
      title: 'Hybrid Delivery Models',
      description: 'Flexible combination of online and onsite sessions',
      icon: Zap,
    },
  ]

  const durationOptions = [
    {
      title: '1–2 Day Focused Workshops',
      description: 'Intensive sessions on specific topics or tools',
    },
    {
      title: '1–2 Week Immersive Programs',
      description: 'Comprehensive training covering multiple skill areas',
    },
    {
      title: 'Ongoing Monthly Upskilling',
      description: 'Continuous learning programs for sustained growth',
    },
    {
      title: 'Fully Custom Durations',
      description: 'Tailored timelines based on your team\'s specific needs',
    },
  ]

  const skillAreas = [
    {
      title: 'UI Design',
      description: 'Visual design principles, interface creation, and design tools',
    },
    {
      title: 'UX Research',
      description: 'User research methods, usability testing, and data-driven insights',
    },
    {
      title: 'Product Design',
      description: 'End-to-end product design thinking and execution',
    },
    {
      title: 'Design Thinking',
      description: 'Human-centered design processes and methodologies',
    },
    {
      title: 'UX Writing',
      description: 'Content strategy, microcopy, and user communication',
    },
    {
      title: 'Design Systems',
      description: 'Creating and maintaining scalable design systems',
    },
    {
      title: 'AI Tools for Designers',
      description: 'Leveraging AI tools to enhance design workflows and productivity',
    },
    {
      title: 'Cross-functional Collaboration',
      description: 'Working effectively with Design, Product Management, and Development teams',
    },
  ]

  const engagementSteps = [
    {
      step: '1',
      title: 'Needs Assessment',
      description: 'We understand your team\'s current skills, challenges, and goals through detailed discussions',
    },
    {
      step: '2',
      title: 'Program Customization',
      description: 'We design a tailored training program that aligns with your team\'s maturity and workflows',
    },
    {
      step: '3',
      title: 'Delivery by Senior Mentors',
      description: 'Experienced practitioners deliver hands-on, mentor-led training sessions',
    },
    {
      step: '4',
      title: 'Post-Training Feedback & Alignment',
      description: 'We gather feedback, measure outcomes, and align on next steps for continuous improvement',
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
              Customized Training Programs for Product & Design Teams
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
              Mentor-led, hands-on training designed around your team&apos;s goals, maturity, and workflows.
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
              For individual upskilling, explore our <Link href="/courses" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>individual courses</Link> including <Link href="/ui-ux-design-pro" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>UI/UX Design Pro</Link> and <Link href="/ui-ux-design-master" className="underline hover:no-underline font-semibold" style={{ color: '#8458B3' }}>UI/UX Design Master</Link>.
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

      {/* Training Formats */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              Training Formats
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              Flexible delivery options to suit your team&apos;s structure and preferences
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trainingFormats.map((format, index) => {
              const Icon = format.icon
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
                    {format.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                    {format.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Program Duration Options */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              Program Duration Options
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              From intensive workshops to ongoing upskilling programs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {durationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-xl p-6 border-l-4 hover:shadow-lg transition-shadow"
                style={{ borderColor: '#8458B3' }}>
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <div>
                    <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                      {option.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                      {option.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Areas Covered */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              Skill Areas Covered
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              Comprehensive training across design disciplines and modern workflows
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillAreas.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-shadow"
                style={{ borderColor: '#e5e7eb' }}>
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <h3 className="font-display font-semibold" style={{ fontSize: '1rem', color: '#1a1a1a' }}>
                    {skill.title}
                  </h3>
                </div>
                <p className="font-body text-xs leading-relaxed ml-8" style={{ color: '#4a4a4a' }}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderColor: '#8458B3' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#FFF6E2' }}>
                  <Award className="w-8 h-8" style={{ color: '#8458B3' }} />
                </div>
                <div>
                  <h2 className="font-display font-bold mb-4" style={{ fontSize: '1.75rem', color: '#1a1a1a' }}>
                    Certification
                  </h2>
                  <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                    Skill-based certification provided upon completion of the training program. Certificates recognize the skills and competencies developed during the program.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Engagement Works */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              How Engagement Works
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              A structured approach to delivering customized training programs
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {engagementSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  style={{ borderColor: '#e5e7eb' }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white" style={{ backgroundColor: '#8458B3', fontSize: '1.25rem' }}>
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.25rem', color: '#1a1a1a' }}>
                        {step.title}
                      </h3>
                      <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <CorporateFAQSection
        faqs={[
          {
            question: 'Can training be customized to our tools and workflows?',
            answer: 'Yes. All training programs are customized to your team\'s specific tools, workflows, and processes. We conduct a needs assessment to understand your current setup and tailor the program accordingly.'
          },
          {
            question: 'Do you offer onsite training?',
            answer: 'Yes. We offer onsite training at your office location, as well as live online training and hybrid delivery models. The format can be customized based on your team\'s preferences and location.'
          },
          {
            question: 'How senior are the mentors?',
            answer: 'Our mentors are experienced practitioners with years of industry experience. They are senior-level professionals who have worked on real-world product teams and bring practical, hands-on expertise to the training.'
          },
          {
            question: 'Will our team receive certification?',
            answer: 'Yes. Skill-based certification is provided upon completion of the training program. Certificates recognize the skills and competencies developed during the program.'
          },
          {
            question: 'Can programs be run for cross-functional teams?',
            answer: 'Yes. Our training programs are designed to support cross-functional collaboration and can be customized for teams including Design, Product Management, and Development working together.'
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
              Let&apos;s design a training program that fits your team.
            </h2>
            <p className="font-body text-lg mb-8 text-white opacity-90" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}>
              Every team is unique. Share your goals, challenges, and requirements, and we&apos;ll create a customized training program tailored to your needs.
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
