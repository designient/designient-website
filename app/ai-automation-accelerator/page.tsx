import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'AI Automation Accelerator | Designient School of Masterminds',
  description: 'Build 3 deployed AI automations in 8 weeks using n8n, Make, ManyChat, and Relevance AI. Live mentorship, small batches, no coding required.',
  alternates: {
    canonical: 'https://designient.com/ai-automation-accelerator',
  },
  openGraph: {
    title: 'AI Automation Accelerator | Designient',
    description: 'Build 3 deployed AI automations in 8 weeks. Live mentorship, no coding required.',
    url: 'https://designient.com/ai-automation-accelerator',
    type: 'website',
  },
}

export default function AIAutomationAcceleratorPage() {
  return (
    <div className="min-h-screen bg-base font-sans text-primary">
      <Header />
      <main id="main-content" role="main" className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
        <p className="font-body text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--color-primary)' }}>
          AI Track · Highest Demand 2026
        </p>
        <h1 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
          AI Automation Accelerator
        </h1>
        <p className="font-body text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          8 weeks · 76 hours · Build 3 deployed AI automations using n8n, Make, ManyChat, and Relevance AI. No coding required. Live mentorship every session.
        </p>
        <p className="font-body mb-8" style={{ color: 'var(--text-secondary)' }}>
          Price from Rs 34,999 · Full course page coming soon.
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
