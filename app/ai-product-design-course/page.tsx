import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'AI Product Design Course | Designient School of Masterminds',
  description: 'Design AI behaviour — trust UI, error states, and confidence design. 6-week application-based course for PMs, designers, and UX writers. 12 seats per cohort.',
  alternates: {
    canonical: 'https://designient.com/ai-product-design-course',
  },
  openGraph: {
    title: 'AI Product Design Course | Designient',
    description: 'Design AI-native products with trust UI, error states, and functional prototypes. Application-based enrollment.',
    url: 'https://designient.com/ai-product-design-course',
    type: 'website',
  },
}

export default function AIProductDesignCoursePage() {
  return (
    <div className="min-h-screen bg-base font-sans text-primary">
      <Header />
      <main id="main-content" role="main" className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
        <p className="font-body text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--color-primary)' }}>
          AI Track · By Application Only
        </p>
        <h1 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
          AI Product Design Course
        </h1>
        <p className="font-body text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          6 weeks · 67 hours · Design AI behaviour — trust UI, error states, confidence design. 12 seats per cohort. Application-based enrollment.
        </p>
        <p className="font-body mb-8" style={{ color: 'var(--text-secondary)' }}>
          Price from Rs 64,999 · Full course page coming soon.
        </p>
        <Link
          href="/apply-now"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-body font-bold surface-on-accent"
          style={{ backgroundColor: 'var(--color-cta)', color: 'var(--text-on-accent)' }}
        >
          Apply Now →
        </Link>
      </main>
      <Footer />
    </div>
  )
}
