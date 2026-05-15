import type { Metadata } from 'next'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { StructuredData } from '../../components/StructuredData'
import { VerifyCertificateForm } from '../../components/verify/VerifyCertificateForm'

export const metadata: Metadata = {
  title: 'Verify a Designient Certificate | Designient',
  description:
    'Verify the authenticity of any Designient certificate. Enter the certificate ID to confirm it was issued by Designient School of Masterminds.',
  openGraph: {
    title: 'Verify a Designient Certificate',
    description: 'Confirm the authenticity of a Designient School of Masterminds certificate.',
    url: 'https://designient.com/verify',
  },
  alternates: { canonical: 'https://designient.com/verify' },
}

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
      { '@type': 'ListItem', position: 2, name: 'Verify Certificate', item: 'https://designient.com/verify' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Can anyone verify a certificate?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Simply enter the certificate ID on this page to confirm its authenticity. No account required.' } },
      { '@type': 'Question', name: 'What if my certificate is not found?', acceptedAnswer: { '@type': 'Answer', text: 'Double-check the certificate ID exactly as printed. If the issue persists, email hello@designient.com.' } },
    ],
  },
]

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-void">
      <StructuredData data={schemas} />
      <Navbar />
      <main id="main-content" className="section-glow">
        <section
          aria-labelledby="verify-heading"
          className="section flex flex-col items-center text-center"
        >
          <div className="max-w-container mx-auto container-px w-full flex flex-col items-center">
            <span className="overline mb-6">Certificate Verification</span>
            <h1
              id="verify-heading"
              className="font-serif text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ivory text-balance max-w-xl"
            >
              Verify a Designient Certificate
            </h1>
            <p className="mt-5 text-body-md text-silver max-w-lg">
              Enter the certificate ID printed on any Designient certificate to verify its
              authenticity.
            </p>
            <div className="mt-12 w-full max-w-lg">
              <VerifyCertificateForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
