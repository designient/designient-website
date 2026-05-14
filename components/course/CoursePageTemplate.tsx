import React from 'react'
import Link from 'next/link'
import { ChevronRight, Gift, Layers, Mic, Rocket, FileText, Award, Check } from 'lucide-react'
import type { CourseData } from '../../lib/courseData'
import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { Button } from '../ui/Button'
import { Badge, Overline } from '../ui/Badge'
import { Accordion } from '../ui/Accordion'
import { Reveal } from '../ui/Reveal'
import { StructuredData } from '../StructuredData'

const BONUS_ICONS: Record<string, React.ElementType> = {
  Gift,
  Layers,
  Mic,
  Rocket,
  FileText,
  Award,
}

interface Props {
  course: CourseData
}

export function CoursePageTemplate({ course }: Props) {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Designient School of Masterminds',
      url: 'https://designient.com',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'online'],
      location: {
        '@type': 'Place',
        name: 'Bengaluru, Hyderabad, Pune + Online',
      },
    },
    educationalCredentialAwarded: course.certification,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: course.faqs.map((f) => ({
      '@type': 'Question',
      name: f.title,
      acceptedAnswer: { '@type': 'Answer', text: f.content },
    })),
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
      { '@type': 'ListItem', position: 2, name: 'Courses', item: 'https://designient.com/courses' },
      { '@type': 'ListItem', position: 3, name: course.title, item: course.canonicalUrl },
    ],
  }

  return (
    <div className="min-h-screen bg-void">
      <StructuredData data={courseSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbs} />
      <Navbar />

      <main id="main-content">
        {/* ── HERO ── */}
        <section
          aria-labelledby="course-hero-heading"
          className="relative isolate pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 30% 30%, rgba(232,168,56,0.07) 0%, transparent 65%)',
            }}
          />
          <div className="absolute inset-0 bg-dots opacity-30 -z-10" aria-hidden="true" />

          <div className="max-w-container mx-auto container-px">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 text-caption text-ash">
                <li>
                  <Link href="/" className="hover:text-silver transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={12} strokeWidth={1.5} />
                </li>
                <li>
                  <Link href="/courses" className="hover:text-silver transition-colors">
                    Courses
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={12} strokeWidth={1.5} />
                </li>
                <li className="text-ivory" aria-current="page">
                  {course.title}
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <Overline>{course.overline}</Overline>
                <h1
                  id="course-hero-heading"
                  className="mt-5 font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[1.06] tracking-[-0.025em] text-ivory"
                >
                  {course.title}
                </h1>
                <p className="mt-3 font-serif italic text-[clamp(1.125rem,2vw,1.375rem)] text-silver leading-relaxed">
                  {course.subtitle}
                </p>
                <p className="mt-6 max-w-xl text-body-lg text-cloud">{course.description}</p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href="/apply-now">Apply for This Course</Button>
                  <Button href="/contact-us" variant="secondary">
                    Talk to a Mentor
                  </Button>
                </div>

                <p className="mt-6 text-body-sm text-ash">
                  {course.placementRate !== '—' ? `${course.placementRate} placement rate · ` : ''}
                  Next batch: June 2026 · Limited seats
                </p>
              </div>

              {/* Glance card */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="rounded-lg bg-obsidian border-subtle shadow-lg-dark p-7">
                  <Overline className="block mb-5">Course at a Glance</Overline>
                  <dl className="space-y-3">
                    {[
                      { dt: 'Duration', dd: course.duration },
                      { dt: 'Total Hours', dd: course.hours },
                      { dt: 'Level', dd: course.level },
                      { dt: 'Format', dd: course.format },
                      { dt: 'Certification', dd: course.certification },
                      ...(course.placementRate !== '—'
                        ? [{ dt: 'Placement Rate', dd: course.placementRate }]
                        : []),
                    ].map(({ dt, dd }) => (
                      <div key={dt} className="flex items-center justify-between gap-4 py-3 border-b border-white/[0.06] last:border-0">
                        <dt className="text-ash text-[13px] uppercase tracking-[0.08em]">{dt}</dt>
                        <dd className="text-ivory text-[15px] font-medium text-right">{dd}</dd>
                      </div>
                    ))}
                  </dl>
                  <Button href="/apply-now" fullWidth className="mt-6">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CURRICULUM ── */}
        <section
          id="curriculum"
          aria-labelledby="curriculum-heading"
          className="section"
          style={{ background: 'linear-gradient(180deg, var(--color-void) 0%, #111115 100%)' }}
        >
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <Overline>Curriculum</Overline>
              <h2
                id="curriculum-heading"
                className="mt-5 font-serif text-display-sm md:text-display-md text-ivory text-balance"
              >
                What you&rsquo;ll master.
              </h2>
            </Reveal>
            <div className="mt-14 max-w-3xl">
              <Reveal delay={100}>
                <Accordion
                  items={course.curriculum.map((mod) => ({
                    id: mod.id,
                    label: `${mod.label} · ${mod.hours}h`,
                    title: mod.title,
                    content: (
                      <div className="space-y-5">
                        <ul className="space-y-2">
                          {mod.topics.map((t) => (
                            <li key={t} className="flex items-start gap-3">
                              <Check size={14} strokeWidth={2} className="text-amber mt-0.5 flex-shrink-0" />
                              <span className="text-cloud text-[15px]">{t}</span>
                            </li>
                          ))}
                        </ul>
                        {mod.tools.length > 0 ? (
                          <div className="flex flex-wrap gap-2 pt-3">
                            {mod.tools.map((tool) => (
                              <Badge key={tool} variant="subtle">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ),
                  }))}
                  withLabel
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── TOOLS ── */}
        <section aria-labelledby="tools-heading" className="section bg-void">
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <Overline>Your Toolkit</Overline>
              <h2
                id="tools-heading"
                className="mt-5 font-serif text-display-sm text-ivory text-balance"
              >
                Industry-standard tools. AI-powered workflows.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {course.tools.map((tool, i) => (
                <Reveal key={tool.name} delay={i * 70}>
                  <div className="card card-hover p-5 text-center h-full flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-md bg-amber-10 border border-amber/20 grid place-items-center text-amber font-medium text-lg font-sans">
                      {tool.initial}
                    </div>
                    <div>
                      <p className="text-ivory text-[14px] font-medium">{tool.name}</p>
                      <p className="text-ash text-[12px] mt-1 leading-snug">{tool.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BONUSES ── */}
        <section
          aria-labelledby="bonuses-heading"
          className="section"
          style={{ background: 'var(--color-obsidian)' }}
        >
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <Overline>Included in Your Enrollment</Overline>
              <h2
                id="bonuses-heading"
                className="mt-5 font-serif text-display-sm text-ivory text-balance"
              >
                Everything you need to get started and get paid.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
              {course.bonuses.map((bonus, i) => {
                const Icon = BONUS_ICONS[bonus.icon] ?? Gift
                return (
                  <Reveal key={bonus.title} delay={i * 80}>
                    <div>
                      <span className="inline-grid place-items-center w-11 h-11 rounded-md bg-amber-10 border border-amber/20 text-amber mb-5">
                        <Icon size={20} strokeWidth={1.5} />
                      </span>
                      <h3 className="font-sans text-[17px] font-semibold text-ivory">{bonus.title}</h3>
                      <p className="mt-2 text-silver text-[14.5px] leading-relaxed">{bonus.description}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" aria-labelledby="course-faq-heading" className="section bg-void">
          <div className="max-w-container mx-auto container-px">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <Reveal className="lg:col-span-4">
                <Overline>Frequently Asked</Overline>
                <h2
                  id="course-faq-heading"
                  className="mt-5 font-serif text-display-sm text-ivory text-balance"
                >
                  Questions we hear most.
                </h2>
                <p className="mt-5 text-silver text-body-md">
                  Still have something on your mind? Our mentors are happy to chat.
                </p>
                <div className="mt-8">
                  <Button href="/contact-us" variant="secondary">
                    Talk to a Mentor
                  </Button>
                </div>
              </Reveal>
              <Reveal className="lg:col-span-8" delay={120}>
                <Accordion items={course.faqs} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── COURSE CTA ── */}
        <section
          aria-labelledby="course-cta-heading"
          className="relative isolate py-28 text-center overflow-hidden"
          style={{ background: 'var(--color-obsidian)' }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(232,168,56,0.09) 0%, transparent 60%)',
            }}
          />
          <div className="max-w-container mx-auto container-px">
            <Reveal>
              <Overline>Ready to Start?</Overline>
              <h2
                id="course-cta-heading"
                className="mt-6 mx-auto max-w-2xl font-serif text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ivory text-balance"
              >
                Applications for {course.title} are open.
              </h2>
              <p className="mt-5 mx-auto max-w-lg text-body-lg text-silver">
                We review every application within 24 hours. Small batches — seats fill fast.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/apply-now" size="lg">
                  Apply Now
                </Button>
                <Button href="/contact-us" variant="secondary" size="lg">
                  Ask a Question
                </Button>
              </div>
              <p className="mt-6 text-caption text-ash">
                Also explore:{' '}
                {[
                  { title: 'UI/UX Design Pro', href: '/ui-ux-design-pro' },
                  { title: 'UI/UX Design Bootcamp', href: '/ui-ux-design-bootcamp' },
                  { title: 'UI/UX Design Master', href: '/ui-ux-design-master' },
                  { title: 'AI Prompt Engineering', href: '/prompt-engineering-mastery' },
                ]
                  .filter((c) => c.href !== course.href)
                  .map((c, i, arr) => (
                    <React.Fragment key={c.href}>
                      <Link
                        href={c.href}
                        className="text-amber hover:text-amber-glow transition-colors"
                      >
                        {c.title}
                      </Link>
                      {i < arr.length - 1 ? ' · ' : ''}
                    </React.Fragment>
                  ))}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
