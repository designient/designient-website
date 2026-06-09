'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPin,
  CheckCircle,
  Users,
  Briefcase,
  Target,
  ArrowRight,
  Phone,
  BookOpen,
  Award,
  TrendingUp,
  Heart,
  Calendar,
} from 'react-feather'
import type { Icon } from 'react-feather'
import { PageHero } from '../layout/PageHero'
import { CourseFAQ } from '../course/CourseFAQ'
import { CourseSectionBand, CourseBentoGrid } from '../course/layout'
import { CityAITrackSection } from './CityAITrackSection'
import { CourseCTA } from '../course/CourseCTA'
import { CitySiblingLinks } from './CitySiblingLinks'
import { CityBatchAvailabilitySection } from './CityBatchAvailabilitySection'
import { cityPageConfig, type CityPageKey, type CityWhyDesignientItem } from '../../data/cityPages'

const whyDesignientIcons: Record<CityWhyDesignientItem['icon'], Icon> = {
  users: Users,
  target: Target,
  briefcase: Briefcase,
  trendingUp: TrendingUp,
  heart: Heart,
  calendar: Calendar,
}

type CityPageContentProps = {
  city: CityPageKey
}

export function CityPageContent({ city }: CityPageContentProps) {
  const config = cityPageConfig[city]
  const gridCols = config.whoForColumns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'

  return (
    <>
      <PageHero size="tall" align="center">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mb-6">
            <Link href="/" className="font-body text-sm hover:underline" style={{ color: 'var(--text-muted)' }}>
              Home
            </Link>
            <span className="font-body text-sm mx-2" style={{ color: 'var(--text-muted)' }}>
              ›
            </span>
            <span className="font-body text-sm" style={{ color: 'var(--color-primary)' }}>
              {config.breadcrumbLabel}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1
              className="font-display font-bold mb-6"
              style={{ color: 'var(--color-primary)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              {config.heroTitle}
            </h1>
            <p
              className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-8"
              style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
            >
              {config.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={config.enrollHref}
                className="inline-flex items-center gap-2 font-body font-bold px-8 py-4 rounded-full transition-transform hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-cta)',
                  color: 'var(--text-on-accent)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                }}
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919353000320"
                className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-[var(--color-accent-muted)]"
                style={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                }}
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </PageHero>

      <CourseSectionBand variant="pencil">
        <section className="py-16 md:py-20" aria-labelledby={`${city}-intro-heading`}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                id={`${city}-intro-heading`}
                className="font-display font-bold mb-6"
                style={{ color: 'var(--color-forest)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                {config.introHeading}
              </h2>
              <p className="font-body text-lg leading-relaxed mb-4" style={{ color: 'var(--text-primary)' }}>
                {config.introParagraphs[0]}
              </p>
              <p className="font-body text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {config.introParagraphs[1]}
              </p>
            </div>
          </div>
        </section>
      </CourseSectionBand>

      <section className="py-24 md:py-32">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--bg-section-green)' }}
                >
                  <MapPin className="w-8 h-8" style={{ color: 'var(--color-forest)', strokeWidth: 1.5 }} />
                </div>
                <h2
                  className="font-display font-bold"
                  style={{
                    color: 'var(--color-forest)',
                    fontWeight: 700,
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  }}
                >
                  {config.whyLearnTitle}
                </h2>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
            >
              {config.whyLearnParagraph}
            </motion.p>
          </div>
        </div>
      </section>

      <CourseSectionBand variant="neutral">
        <section className="py-24 md:py-32">
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--bg-section-green)' }}
                  >
                    <BookOpen className="w-8 h-8" style={{ color: 'var(--color-forest)', strokeWidth: 1.5 }} />
                  </div>
                  <h2
                    className="font-display font-bold"
                    style={{
                      color: 'var(--color-forest)',
                      fontWeight: 700,
                      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    }}
                  >
                    UI/UX Design Pro Course
                  </h2>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-lg leading-relaxed text-center"
                style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
              >
                {config.courseOverview.beforeLink}
                <Link href="/ui-ux-design-pro" className="font-semibold underline" style={{ color: 'var(--color-primary)' }}>
                  {config.courseOverview.linkText}
                </Link>
                {config.courseOverview.afterLink}
              </motion.p>
            </div>
          </div>
        </section>
      </CourseSectionBand>

      <CityBatchAvailabilitySection city={city} />

      <CourseSectionBand variant="neutral">
        <section className="py-24 md:py-32">
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--bg-section-green)' }}
                  >
                    <Users className="w-8 h-8" style={{ color: 'var(--color-forest)', strokeWidth: 1.5 }} />
                  </div>
                  <h2
                    className="font-display font-bold"
                    style={{
                      color: 'var(--color-forest)',
                      fontWeight: 700,
                      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    }}
                  >
                    Who This Course Is For
                  </h2>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`grid grid-cols-1 ${gridCols} gap-6`}
              >
                {config.whoForItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: config.whoForColumns === 2 && index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg"
                    style={{ backgroundColor: 'var(--bg-card)' }}
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                    <span
                      className="font-body"
                      style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </CourseSectionBand>

      <section className="py-24 md:py-32">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--bg-section-green)' }}
                >
                  <Award className="w-8 h-8" style={{ color: 'var(--color-forest)', strokeWidth: 1.5 }} />
                </div>
                <h2
                  className="font-display font-bold"
                  style={{
                    color: 'var(--color-forest)',
                    fontWeight: 700,
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  }}
                >
                  Why Designient in {config.name}
                </h2>
              </div>
            </motion.div>
            <CourseBentoGrid
              items={config.whyDesignientItems.map((item, index) => {
                const Icon = whyDesignientIcons[item.icon]
                return {
                  id: item.text,
                  span: index === 0 ? '2x1' as const : '1x1' as const,
                  className: '!bg-[var(--bg-warm)]',
                  children: (
                    <div className="flex items-start gap-4 h-full">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--bg-section-green)' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: 'var(--color-forest)', strokeWidth: 1.5 }} />
                      </div>
                      <p
                        className="font-body font-semibold"
                        style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ),
                }
              })}
            />
          </div>
        </div>
      </section>

      <CourseSectionBand variant="green">
        <section className="py-24 md:py-32">
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--bg-section-green)' }}
                  >
                    <Briefcase className="w-8 h-8" style={{ color: 'var(--color-forest)', strokeWidth: 1.5 }} />
                  </div>
                  <h2
                    className="font-display font-bold"
                    style={{
                      color: 'var(--color-forest)',
                      fontWeight: 700,
                      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    }}
                  >
                    Placement Support
                  </h2>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-lg leading-relaxed text-center"
                style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
              >
                {config.placementParagraph}
              </motion.p>
            </div>
          </div>
        </section>
      </CourseSectionBand>

      <CourseSectionBand variant="neutral">
        <CourseFAQ faqs={config.faqs} title="Frequently Asked Questions" />
      </CourseSectionBand>

      <CityAITrackSection cityName={config.name} />

      <CourseSectionBand variant="neutral">
        <section className="py-16 md:py-20">
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <p
                  className="font-body mb-6"
                  style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}
                >
                  Learn more about Designient and our placement support:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/ui-ux-design-pro"
                    className="inline-flex items-center gap-2 font-body font-semibold px-6 py-3 rounded-full border-2 transition-colors hover:bg-purple-50"
                    style={{
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    }}
                  >
                    View Full Course Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-2 font-body font-semibold px-6 py-3 rounded-full border-2 transition-colors hover:bg-purple-50"
                    style={{
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    }}
                  >
                    About Designient
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/placements"
                    className="inline-flex items-center gap-2 font-body font-semibold px-6 py-3 rounded-full border-2 transition-colors hover:bg-purple-50"
                    style={{
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    }}
                  >
                    Placement Support
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </CourseSectionBand>

      <CourseSectionBand variant="green">
        <CitySiblingLinks currentCity={city} />
        <CourseCTA
          courseName="UI/UX Design Pro"
          courseSlug="ui-ux-design-pro"
          ctaText={config.ctaText}
          secondaryText={config.ctaSecondary}
          cityName={config.name}
        />
      </CourseSectionBand>
    </>
  )
}
