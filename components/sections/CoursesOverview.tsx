import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Overline, Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'

interface Course {
  title: string
  duration: string
  hours: string
  description: string
  tags: string[]
  href: string
  placement?: string
}

const courses: Course[] = [
  {
    title: 'UI/UX Design Pro',
    duration: '3 Months',
    hours: '124 Hrs',
    description: 'The complete foundation for your design career.',
    tags: ['Figma', 'AI Tools', 'Adobe Certified', 'Portfolio'],
    href: '/ui-ux-design-pro',
    placement: '95% placed',
  },
  {
    title: 'UI/UX Design Bootcamp',
    duration: '30 Days',
    hours: '36 Hrs',
    description: 'Fast-track your design career in 30 days.',
    tags: ['Figma', 'Figma AI', 'Portfolio', 'Internship-Ready'],
    href: '/ui-ux-design-bootcamp',
  },
  {
    title: 'UI/UX Design Master',
    duration: '6 Months',
    hours: '200+ Hrs',
    description: 'Advanced specialisation with diploma certification.',
    tags: ['Design Systems', 'ProtoPie', 'Leadership', 'Motion'],
    href: '/ui-ux-design-master',
  },
  {
    title: 'AI Prompt Engineering',
    duration: 'Flexible',
    hours: '—',
    description: 'Master prompt engineering for design workflows.',
    tags: ['ChatGPT', 'Midjourney', 'AI Workflows'],
    href: '/prompt-engineering-mastery',
  },
]

export function CoursesOverview() {
  return (
    <section
      aria-labelledby="courses-heading"
      className="section relative"
      style={{ background: 'linear-gradient(180deg, var(--color-void) 0%, #111115 100%)' }}
    >
      <div className="max-w-container mx-auto container-px">
        <div className="max-w-3xl">
          <Overline>Our Courses</Overline>
          <h2
            id="courses-heading"
            className="mt-5 font-serif text-display-md md:text-[clamp(2.5rem,4.5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-ivory text-balance"
          >
            Four paths. One standard of excellence.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <Reveal key={course.href} delay={i * 90}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={course.href}
      className="card card-hover block p-8 h-full group"
    >
      <div className="flex flex-wrap items-center gap-2 mb-7">
        <Badge variant="neon">{course.duration}</Badge>
        <Badge variant="neon">{course.hours}</Badge>
        {course.placement ? <Badge variant="success">{course.placement}</Badge> : null}
      </div>

      <h3 className="font-serif text-display-sm text-ivory leading-[1.15] tracking-[-0.015em]">
        {course.title}
      </h3>
      <p className="mt-3 text-silver text-[15.5px] leading-relaxed">{course.description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {course.tags.map((tag) => (
          <li
            key={tag}
            className="px-3 py-1 rounded-full text-[12px] text-silver border border-white/10 bg-white/[0.02]"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center justify-between pt-5 border-t border-white/[0.06]">
        <span className="text-[13px] uppercase tracking-[0.12em] text-ash">Learn more</span>
        <span className="inline-flex items-center gap-1 text-neon group-hover:text-neon-glow transition-colors">
          <span className="text-[14px] font-medium uppercase tracking-[0.08em]">View</span>
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  )
}
