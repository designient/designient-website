import { Header } from '../../../../components/Header'
import { Footer } from '../../../../components/Footer'
import { CertificateDisplay } from '../../../../components/verify/CertificateDisplay'
import type { Metadata } from 'next'
export const runtime = 'edge'

export async function generateMetadata({ params }: { params: Promise<{ hash: string }> }): Promise<Metadata> {
  const { hash } = await params
  return {
    title: 'Certificate Verification – Designient',
    description: 'Digital certificate verification for Designient School of Masterminds',
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: 'Certificate Verification – Designient',
      description: 'Digital certificate verification for Designient School of Masterminds',
      url: `https://designient.com/verify/uxp/${hash}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://designient.com/verify/uxp/${hash}`,
    },
  }
}

export default async function CertificatePage({ params }: { params: Promise<{ hash: string }> }) {
  const { hash } = await params
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main id="main-content" role="main">
        <CertificateDisplay hash={hash} />
      </main>
      <Footer />
    </div>
  )
}
