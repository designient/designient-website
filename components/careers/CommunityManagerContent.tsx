'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin,
  Clock,
  CheckCircle,
  Award,
  ArrowRight,
  Mail,
  Phone,
  Briefcase,
  Users,
  Target,
  Zap,
  Heart,
  Globe,
  MessageCircle
} from 'react-feather'
import Link from 'next/link'
import { CareerApplicationForm } from './CareerApplicationForm'

const responsibilities = [
  'Build and maintain a vibrant design community',
  'Organize networking events and community sessions',
  'Support student engagement and participation',
  'Coordinate community activities and initiatives',
  'Foster connections between students and alumni'
]

const lookingFor = [
  '2+ years of experience in community management',
  'Strong organizational and communication skills',
  'Passion for building engaged communities',
  'Experience with event planning and coordination',
  'Ability to work with diverse groups of learners'
]

const bonusSkills = [
  'Background in design or design education',
  'Experience with online community platforms',
  'Social media management skills',
  'Data analysis for community engagement metrics'
]

const whyJoinItems = [
  {
    icon: Target,
    title: 'Purpose-driven education work',
    description: 'Make a real difference in students\' careers'
  },
  {
    icon: MessageCircle,
    title: 'Community building focus',
    description: 'Create meaningful connections and support networks'
  },
  {
    icon: Zap,
    title: 'Creative freedom and autonomy',
    description: 'Shape community initiatives your way'
  },
  {
    icon: Heart,
    title: 'Continuous learning culture',
    description: 'Grow alongside students and the industry'
  }
]

export function CommunityManagerContent() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center pt-20 md:pt-24" 
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="role-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: '#6B7280' }}>
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/careers" className="hover:underline">Careers</Link>
              <span>/</span>
              <span>Community Manager</span>
            </div>

            <motion.h1
              id="role-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold tracking-wide leading-tight mb-6"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700
              }}>
              Community Manager Job – Careers at Designient
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl mb-8 leading-relaxed"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.8'
              }}>
              Build and nurture a vibrant design community. Organize events and support student engagement.
            </motion.p>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" style={{ color: '#8458B3' }} />
                <span className="font-body" style={{ color: '#4a4a4a' }}>
                  Remote
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" style={{ color: '#8458B3' }} />
                <span className="font-body" style={{ color: '#4a4a4a' }}>
                  Full-time
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" style={{ color: '#8458B3' }} />
                <span className="font-body" style={{ color: '#4a4a4a' }}>
                  Remote
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Role */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Briefcase
                    className="w-8 h-8"
                    style={{
                      color: '#8458B3',
                      strokeWidth: 2.5
                    }} />
                </div>
                <h2
                  className="font-display font-bold tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  About the Role
                </h2>
              </div>
              <p
                className="font-body leading-relaxed"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                As a Community Manager at Designient, you&apos;ll build and nurture a vibrant design community, organize networking events, and support student engagement. This role is ideal for people who love connecting others and creating meaningful community experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8">
              <h2
                className="font-display font-bold mb-6"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)'
                }}>
                Key Responsibilities
              </h2>
              <ul className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                    <span
                      className="font-body leading-relaxed"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      {responsibility}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8">
              <h2
                className="font-display font-bold mb-6"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)'
                }}>
                What We&apos;re Looking For
              </h2>
              <ul className="space-y-4">
                {lookingFor.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                    <span
                      className="font-body leading-relaxed"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bonus Skills */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8">
              <h2
                className="font-display font-bold mb-6"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)'
                }}>
                Bonus Skills
              </h2>
              <ul className="space-y-4">
                {bonusSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <Award className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#f2d53c' }} />
                    <span
                      className="font-body leading-relaxed"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Work Mode */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-6 md:p-8">
              <h2
                className="font-display font-bold mb-6"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)'
                }}>
                Location & Work Mode
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <div>
                    <span
                      className="font-body font-semibold"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                      }}>
                      Location:
                    </span>
                    <span
                      className="font-body ml-2"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                      }}>
                      Remote
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <div>
                    <span
                      className="font-body font-semibold"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                      }}>
                      Work Mode:
                    </span>
                    <span
                      className="font-body ml-2"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                      }}>
                      Remote work
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Designient */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <h2
                className="font-display font-bold mb-6"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)'
                }}>
                Why Join Designient
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {whyJoinItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#8458B3' }}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3
                        className="font-display font-bold mb-2"
                        style={{
                          color: '#1a1a1a',
                          fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                        }}>
                        {item.title}
                      </h3>
                      <p
                        className="font-body leading-relaxed"
                        style={{
                          color: '#4a4a4a',
                          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                          lineHeight: '1.7'
                        }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <CareerApplicationForm roleName="Community Manager" roleId="community-manager" />

      {/* How to Apply - Alternative Options */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#8458B3' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2
                className="font-display font-bold mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Other Ways to Apply
              </h2>
              <p
                className="font-body mb-8 text-lg opacity-90"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Prefer email or phone? Reach out to us directly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:careers@designient.com?subject=Application for Community Manager Position"
                  className="inline-flex items-center gap-2 font-body font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 min-h-[44px]"
                  style={{
                    backgroundColor: '#f2d53c',
                    color: '#1a1a1a',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>
                  <Mail className="w-5 h-5" />
                  Email Your Application
                </a>

                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-white/10 min-h-[44px]"
                  style={{
                    borderColor: 'white',
                    color: 'white',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>
                  <ArrowRight className="w-5 h-5" />
                  View All Positions
                </Link>

                <a
                  href="tel:+919353000320"
                  className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-white/10 min-h-[44px]"
                  style={{
                    borderColor: 'white',
                    color: 'white',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}>
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
