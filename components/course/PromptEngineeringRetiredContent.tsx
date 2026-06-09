import Link from 'next/link'
import { ArrowRight } from 'react-feather'
import { PageHero } from '../layout/PageHero'

const RETIRED_DATE = 'May 30, 2026'

export function PromptEngineeringRetiredContent() {
 return (
 <PageHero size="default" align="center">
 <div className="max-w-3xl mx-auto">
 <h1
 className="font-display font-bold mb-4"
 style={{
 color: 'var(--color-primary)',
 fontSize: 'clamp(2rem, 4vw, 2.75rem)',
 lineHeight: '1.2',
 }}>
 Prompt Engineering Mastery - Course Update
 </h1>
 <p
 className="font-body text-lg font-semibold mb-8"
 style={{ color: 'var(--text-primary)' }}>
 This course has been discontinued.
 </p>
 <p
 className="font-body leading-relaxed mb-6 text-left"
 style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
 Prompt Engineering Mastery has been retired as of {RETIRED_DATE}.
 </p>
 <p
 className="font-body leading-relaxed mb-6 text-left"
 style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
 The decision was deliberate: the skills this course covered - writing effective prompts for ChatGPT, Claude, Midjourney, and other AI platforms - are now embedded directly into every Designient course at the level they are actually used. Teaching prompt engineering in isolation no longer serves students as well as teaching it as part of a complete AI workflow or design curriculum.
 </p>
 <p
 className="font-body leading-relaxed mb-10 text-left"
 style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
 If you were enrolled in a future cohort of this course, you have been contacted directly by the Designient team with your options. If you have not received communication, email{' '}
 <a href="mailto:hello@designient.com?subject=Prompt%20Engineering%20Mastery%20Refund%20Request" className="course-inline-link">
 hello@designient.com
 </a>{' '}
 with subject line: Prompt Engineering Mastery Refund Request.
 </p>

 <h2
 className="font-display font-bold mb-4 text-left w-full"
 style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
 What replaces it
 </h2>
 <p
 className="font-body leading-relaxed mb-8 text-left w-full"
 style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
 The two courses below cover prompt engineering at the depth and in the context where it matters most - as part of building real AI systems and designing real AI products.
 </p>

 <div className="grid md:grid-cols-2 gap-6 mb-10 text-left w-full">
 <div
 className="rounded-xl p-6 border-2 h-full flex flex-col"
 style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-subtle)' }}>
 <h3 className="font-display font-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>
 AI Automation Accelerator
 </h3>
 <p className="font-body text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
 8 Weeks · Professionals and Freelancers · Highest Demand 2026
 </p>
 <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
 Learn to build AI automation workflows using n8n, Make, ManyChat, and Relevance AI. Prompt engineering is taught inside Claude API nodes, workflow decision logic, and Relevance AI agent building - where it produces real deployed output.
 </p>
 <Link
 href="/ai-automation-accelerator"
 className="inline-flex items-center gap-2 font-body font-semibold text-sm"
 style={{ color: 'var(--color-primary)' }}>
 View Course
 <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 <div
 className="rounded-xl p-6 border-2 h-full flex flex-col"
 style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-subtle)' }}>
 <h3 className="font-display font-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>
 AI Product Design Course
 </h3>
 <p className="font-body text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
 6 Weeks · By Application Only · PMs, Designers, UX Writers
 </p>
 <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
 Learn to design AI behaviour - trust UI, error states, confidence design. Prompt engineering is taught inside AI behaviour specification writing and Bolt/v0 prototype building - where it produces portfolio-quality case studies.
 </p>
 <Link
 href="/ai-product-design-course"
 className="inline-flex items-center gap-2 font-body font-semibold text-sm"
 style={{ color: 'var(--color-primary)' }}>
 View Course
 <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </div>

 <Link
 href="/courses"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white transition-colors hover:opacity-90 mb-8"
 style={{ backgroundColor: 'var(--color-cta)' }}>
 Browse All Courses
 <ArrowRight className="w-5 h-5" />
 </Link>

 <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
 Questions? Email{' '}
 <a href="mailto:hello@designient.com" className="course-inline-link">
 hello@designient.com
 </a>{' '}
 or{' '}
 <Link href="/contact-us" className="course-inline-link">
 contact us
 </Link>
 .
 </p>
 </div>
 </PageHero>
 )
}
