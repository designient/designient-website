import type { Metadata } from 'next'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { CoursesOverview } from '../../components/sections/CoursesOverview'
import { CTASection } from '../../components/sections/CTASection'

export const metadata: Metadata = {
  title: 'UI/UX Design Courses — All Programmes | Designient',
  description:
    'Four paths to a design career. UI/UX Design Pro, Bootcamp, Master, and AI Prompt Engineering. Small batches, real mentors, Adobe certified.',
  openGraph: {
    title: 'All Courses — Designient School of Masterminds',
    description: 'Four paths. One standard of excellence.',
    url: 'https://designient.com/courses',
    type: 'website',
  },
  alternates: { canonical: 'https://designient.com/courses' },
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main id="main-content">
        <div className="pt-12 md:pt-16">
          <CoursesOverview />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
