'use client'

import { PageHero } from '../layout/PageHero'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { 
  TrendingUp, 
  Briefcase, 
  Users, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Target,
  Award,
  UserCheck,
  Linkedin,
  MessageCircle
} from 'react-feather'
import Link from 'next/link'
import { getWhatsAppUrl } from '../../utils/whatsapp'

const placementStats = [
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Placement Rate',
    description: 'with top companies'
  },
  {
    icon: FileText,
    value: '320+',
    label: 'Portfolios Completed',
    description: 'job-ready portfolios'
  },
  {
    icon: Users,
    value: '100+',
    label: 'Students Trained',
    description: 'career-ready designers'
  },
  {
    icon: Award,
    value: '5+',
    label: 'Years Experience',
    description: 'placement support'
  }
]

const placementSteps = [
  {
    step: '1',
    title: 'Career Counselling & Roadmap Planning',
    description: 'Personalized career guidance to identify your strengths, set goals, and create a clear path to your dream UI/UX role.'
  },
  {
    step: '2',
    title: 'Portfolio Enhancement for Real Job Readiness',
    description: 'Transform your projects into recruiter-ready portfolios that showcase your skills and problem-solving abilities.'
  },
  {
    step: '3',
    title: 'Resume Optimisation & LinkedIn All-Star Profile',
    description: 'Craft ATS-friendly resumes and build a professional LinkedIn presence that attracts recruiters and hiring managers.'
  },
  {
    step: '4',
    title: 'Mock Interviews with Expert Feedback',
    description: 'Practice with industry-standard interview questions and receive constructive feedback to build confidence.'
  },
  {
    step: '5',
    title: 'Direct Job Referrals & Hiring Introductions',
    description: 'Get connected with hiring managers and receive referrals to UI/UX roles at top companies.'
  }
]

const companies = [
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    alt: 'Amazon company logo - Designient students work at Amazon'
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    alt: 'Google company logo - Designient students work at Google'
  },
  {
    name: 'Accenture',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
    alt: 'Accenture company logo - Designient students work at Accenture'
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    alt: 'Microsoft company logo - Designient students work at Microsoft'
  },
  {
    name: 'Adobe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg',
    alt: 'Adobe company logo - Designient students work at Adobe'
  }
]

const successStories = [
  {
    quote: 'Designient helped me build a portfolio that got me hired at Google.',
    author: 'Priya Sridaran',
    role: 'UI Designer'
  },
  {
    quote: 'Mock interviews gave me clarity and confidence. I aced my Amazon interview.',
    author: 'Rahul Mehta',
    role: 'UX Researcher'
  },
  {
    quote: 'The portfolio review sessions were game-changing. I landed my dream role.',
    author: 'Sneha Kapoor',
    role: 'Product Designer'
  }
]

const placementRoles = [
  'UI Designer',
  'UX Designer',
  'Product Designer (Associate)',
  'UX Researcher',
  'UI/UX Internships'
]

const faqs = [
  {
    question: 'How does placement assistance work?',
    answer: 'Our placement support is integrated into your learning journey. You receive career counselling, portfolio reviews, resume optimization, mock interviews, and direct job referrals. We guide you from training to employment with personalized support at each step.'
  },
  {
    question: 'Do you guarantee a job?',
    answer: 'While we cannot guarantee employment, we provide comprehensive placement support including portfolio building, interview coaching, and job referrals. Our 95% placement rate reflects the effectiveness of our support system when students actively engage with the process.'
  },
  {
    question: 'Are internships part of the placement support?',
    answer: 'Yes. We help eligible students secure UI/UX internships as part of our placement support. Internships provide valuable real-world experience and often lead to full-time opportunities.'
  },
  {
    question: 'What support is offered for resume and interviews?',
    answer: 'We provide resume optimization to make it ATS-friendly, LinkedIn profile setup to All-Star status, mock interview sessions with expert feedback, and interview preparation covering common UI/UX design questions and portfolio presentation techniques.'
  }
]

export function PlacementsContent() {
  const pathname = usePathname()
  
  return (
    <>
      {/* Hero Section */}
      <PageHero size="tall" align="center" aria-labelledby="placements-heading">
          <div className="max-w-4xl mx-auto w-full">
            {/* Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Placements</span>
            </div>

            <motion.h1
              id="placements-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold tracking-wide leading-tight mb-6"
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700
              }}>
              UI/UX Design Placement Support & Career Outcomes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl mb-8 leading-relaxed"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.8'
              }}>
              Bring your UI/UX skills to the job market with structured career support, interview readiness, and recruiter guidance.
            </motion.p>
          </div>
      </PageHero>

      {/* Placement Highlights Stats */}
      <section className="py-24 md:py-32 section-band-accent">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16">
            <h2
              className="font-display font-bold mb-4"
              style={{ color: 'var(--text-primary)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Placement Highlights
            </h2>
            <p
              className="font-body text-lg opacity-90 max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}>
              Real numbers that reflect our commitment to your career success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {placementStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-lg">
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-muted)' }}>
                    <stat.icon className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
                  </div>
                </div>
                <div
                  className="font-display font-bold mb-2"
                  style={{
                    color: 'var(--color-primary)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)'
                  }}>
                  {stat.value}
                </div>
                <div
                  className="font-body font-semibold mb-1"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                  }}>
                  {stat.label}
                </div>
                <div
                  className="font-body text-sm"
                  style={{ color: 'var(--text-muted)' }}>
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Placement Support Works */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 accent-icon-box"
                  style={{
                    backgroundColor: 'var(--color-highlight)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Target
                    className="w-8 h-8"
                    style={{
                      color: 'var(--text-on-accent)',
                      strokeWidth: 2.5
                    }} />
                </div>
                <h2
                  className="font-display font-bold tracking-wide"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  Why Our Placement Support Works
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none">
              <p
                className="font-body leading-relaxed text-center"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                Designient&apos;s placement support is not an add-on — it&apos;s built into your learning journey. We help you bridge the gap from training to employment with personalised portfolio reviews, interview coaching, recruiter engagement, and confidence-building soft skill training.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Our Placement Support Works */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-warm)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: 'var(--color-primary)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              How Our Placement Support Works
            </h2>
            <p
              className="font-body text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}>
              A step-by-step process designed to get you job-ready
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {placementSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 md:gap-6">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-white accent-icon-box"
                    style={{
                      backgroundColor: 'var(--color-cta)',
                      color: 'var(--text-on-accent)',
                      fontSize: 'clamp(1.25rem, 2vw, 1.75rem)'
                    }}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-display font-bold mb-2"
                      style={{
                        color: 'var(--text-primary)',
                        fontSize: 'clamp(1.25rem, 2vw, 1.75rem)'
                      }}>
                      {step.title}
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                        lineHeight: '1.7'
                      }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Who Hire Our Students */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: 'var(--color-primary)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              Companies Who Hire Our Students
            </h2>
            <p
              className="font-body text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}>
              Trusted by leading companies across industries
            </p>
          </motion.div>

          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex-shrink-0 transition-all duration-300 hover:scale-110">
                <div className="relative h-10 md:h-12 w-auto" style={{ minWidth: '120px' }}>
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    fill
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                    sizes="120px"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-warm)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: 'var(--color-primary)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-xl p-6 md:p-8 shadow-md">
                <div className="mb-4">
                  <CheckCircle className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <p
                  className="font-body leading-relaxed mb-4"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.7',
                    fontStyle: 'italic'
                  }}>
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div>
                  <div
                    className="font-display font-bold"
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                    }}>
                    {story.author}
                  </div>
                  <div
                    className="font-body text-sm"
                    style={{ color: 'var(--text-muted)' }}>
                    {story.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Outcomes & Roles */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 accent-icon-box"
                  style={{
                    backgroundColor: 'var(--color-highlight)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Briefcase
                    className="w-8 h-8"
                    style={{
                      color: 'var(--text-on-accent)',
                      strokeWidth: 2.5
                    }} />
                </div>
                <h2
                  className="font-display font-bold tracking-wide"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  Placement Outcomes & Roles
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8">
              <p
                className="font-body leading-relaxed text-center mb-8"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                Our students have successfully transitioned into various UI/UX design roles across startups, agencies, and product teams. Here are the typical roles our graduates move into:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {placementRoles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <UserCheck className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                    <span
                      className="font-body"
                      style={{
                        color: 'var(--text-primary)',
                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                      }}>
                      {role}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What the AI Track Produces */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto">
            <h2
              className="font-display font-bold mb-6"
              style={{
                color: 'var(--color-primary)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              }}>
              What the AI Track Produces
            </h2>
            <p
              className="font-body leading-relaxed mb-6"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                lineHeight: '1.8',
              }}>
              The AI Automation Accelerator and AI Product Design Course are not placement-focused courses — they are outcome-focused in a different way.
            </p>
            <p
              className="font-body leading-relaxed mb-6"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                lineHeight: '1.8',
              }}>
              The Design Track measures outcomes in placement rates and salary packages because those are the right metrics for students entering the employment market as designers.
            </p>
            <p
              className="font-body leading-relaxed mb-4"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                lineHeight: '1.8',
              }}>
              The AI Track measures outcomes differently:
            </p>
            <p
              className="font-body leading-relaxed mb-3"
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                lineHeight: '1.8',
                fontWeight: 600,
              }}>
              AI Automation Accelerator graduates leave with:
            </p>
            <p
              className="font-body leading-relaxed mb-6"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                lineHeight: '1.8',
              }}>
              Three deployed production automation workflows running live — not slides, not certificates, not portfolio mockups. Three systems that can be screen-shared, triggered in real time, and demonstrated to any employer, client, or stakeholder in under two minutes. The ROI is calculated per automation. The documentation is written and handoff-ready.
            </p>
            <p
              className="font-body leading-relaxed mb-3"
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                lineHeight: '1.8',
                fontWeight: 600,
              }}>
              AI Product Design Course graduates leave with:
            </p>
            <p
              className="font-body leading-relaxed mb-8"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                lineHeight: '1.8',
              }}>
              Two portfolio case studies — one audit of a live AI product with redesigned screens, one original AI feature designed across all 8 states in Figma with a functional Bolt/v0 prototype. Both are real work. Both are demonstrable. Neither requires an employer to trust a certificate they have not heard of.
            </p>
            <div
              className="rounded-xl p-6 mb-8"
              style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-default)',
              }}>
              <p
                className="font-body leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8',
                }}>
                If you are a working professional or freelancer who wants to add AI automation or AI product design to your career — the AI Track does not promise a job. It produces the portfolio that makes the conversation possible.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/ai-automation-accelerator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: 'var(--color-cta)' }}>
                AI Automation Accelerator
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/ai-product-design-course"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-body font-semibold border-2 transition-colors hover:bg-purple-50"
                style={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)',
                }}>
                AI Product Design Course
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-warm)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: 'var(--color-primary)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-card rounded-xl p-6 shadow-md">
                <h3
                  className="font-display font-bold mb-3"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                  }}>
                  {faq.question}
                </h3>
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.7'
                  }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24 md:py-32 section-band-accent">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center">
            <h2
              className="font-display font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Ready to Launch Your Career in UI/UX Design?
            </h2>
            <p
              className="font-body mb-8 text-lg opacity-90"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
              Apply now or schedule a counselling call to learn how our placement support can help you land your dream design role.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA: WhatsApp */}
              <a
                href={getWhatsAppUrl({ type: 'placements', sourcePage: pathname })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 min-h-[44px] surface-on-accent"
                style={{
                  backgroundColor: 'var(--color-highlight)',
                  color: 'var(--text-on-accent)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              {/* Secondary: Explore Courses */}
              <Link
                href="/ui-ux-design-pro"
                className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-[var(--color-accent-muted)] min-h-[44px]"
                style={{
                  borderColor: 'var(--bg-card)',
                  color: 'var(--text-on-dark)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                Explore Our Courses
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Tertiary: Call */}
              <a
                href="tel:+919353000320"
                className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-[var(--color-accent-muted)] min-h-[44px]"
                style={{
                  borderColor: 'var(--bg-card)',
                  color: 'var(--text-on-dark)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                <Phone className="w-5 h-5" />
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
