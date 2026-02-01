import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You - Designient School of Masterminds',
  description: 'Thank you for contacting Designient. We\'ll get back to you within 24 business hours.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Thank You - Designient School of Masterminds',
    description: 'Thank you for contacting Designient. We\'ll get back to you within 24 business hours.',
    url: 'https://designient.com/thank-you',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Thank You - Designient',
    description: 'Thank you for contacting Designient.',
  },
  alternates: {
    canonical: 'https://designient.com/thank-you',
  },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16" style={{ backgroundColor: '#f9fafb' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className="font-display font-bold mb-6"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: '1.2'
                }}>
                Thank You for Reaching Out
              </h1>
            </div>
          </div>
        </section>

        {/* Confirmation Content */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Confirmation Message */}
              <div className="mb-8">
                <div
                  className="mb-6 p-6 rounded-xl text-center"
                  style={{
                    backgroundColor: '#d1fae5',
                    border: '2px solid #10b981'
                  }}>
                  <p
                    className="font-body text-lg font-semibold"
                    style={{ color: '#065f46' }}>
                    ✓ Your message has been received successfully!
                  </p>
                </div>
                <p
                  className="font-body text-lg leading-relaxed mb-6"
                  style={{
                    color: '#4a4a4a',
                    lineHeight: '1.7'
                  }}>
                  We appreciate you taking the time to reach out to us. Your enquiry is important to us, and we're excited to help you on your UI/UX design journey.
                </p>
              </div>

              {/* Response Time Reassurance */}
              <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: '#f9fafb' }}>
                <h2
                  className="font-display font-semibold mb-4"
                  style={{
                    color: '#1a1a1a',
                    fontSize: '1.5rem'
                  }}>
                  What Happens Next?
                </h2>
                <p
                  className="font-body leading-relaxed mb-4"
                  style={{
                    color: '#4a4a4a',
                    lineHeight: '1.7'
                  }}>
                  <strong>We usually respond within 24 business hours.</strong> Our team will review your enquiry and get back to you via email or phone with the information you need.
                </p>
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: '#4a4a4a',
                    lineHeight: '1.7'
                  }}>
                  If your enquiry is urgent, feel free to call us directly at{' '}
                  <a
                    href="tel:+919353000320"
                    className="font-semibold hover:underline"
                    style={{ color: '#8458B3' }}>
                    +91 9353 000 320
                  </a>
                  {' '}or email us at{' '}
                  <a
                    href="mailto:hello@designient.com"
                    className="font-semibold hover:underline"
                    style={{ color: '#8458B3' }}>
                    hello@designient.com
                  </a>.
                </p>
              </div>

              {/* Next Steps Explanation */}
              <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: '#f9fafb' }}>
                <h2
                  className="font-display font-semibold mb-4"
                  style={{
                    color: '#1a1a1a',
                    fontSize: '1.5rem'
                  }}>
                  While You Wait
                </h2>
                <p
                  className="font-body leading-relaxed mb-4"
                  style={{
                    color: '#4a4a4a',
                    lineHeight: '1.7'
                  }}>
                  While we prepare a response, you might find these resources helpful:
                </p>
                <ul
                  className="font-body space-y-2 ml-6"
                  style={{
                    color: '#4a4a4a',
                    lineHeight: '1.7',
                    listStyleType: 'disc'
                  }}>
                  <li>Explore our course curriculum and learning outcomes</li>
                  <li>Read success stories from our alumni</li>
                  <li>Check out our FAQs for common questions</li>
                  <li>Learn about our placement assistance program</li>
                </ul>
              </div>

              {/* Helpful Links */}
              <div className="mb-8">
                <h2
                  className="font-display font-semibold mb-6 text-center"
                  style={{
                    color: '#1a1a1a',
                    fontSize: '1.5rem'
                  }}>
                  Explore More
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/ui-ux-design-pro"
                    className="block p-6 rounded-xl border-2 hover:border-purple-500 transition-colors text-center"
                    style={{
                      backgroundColor: '#f9fafb',
                      borderColor: '#e5e7eb'
                    }}>
                    <h3
                      className="font-display font-semibold mb-2"
                      style={{
                        color: '#8458B3',
                        fontSize: '1.25rem'
                      }}>
                      UI/UX Design Pro Course
                    </h3>
                    <p
                      className="font-body text-sm"
                      style={{ color: '#4a4a4a' }}>
                      Learn about our comprehensive UI/UX design course
                    </p>
                  </Link>
                  <Link
                    href="/placements"
                    className="block p-6 rounded-xl border-2 hover:border-purple-500 transition-colors text-center"
                    style={{
                      backgroundColor: '#f9fafb',
                      borderColor: '#e5e7eb'
                    }}>
                    <h3
                      className="font-display font-semibold mb-2"
                      style={{
                        color: '#8458B3',
                        fontSize: '1.25rem'
                      }}>
                      Placements
                    </h3>
                    <p
                      className="font-body text-sm"
                      style={{ color: '#4a4a4a' }}>
                      Explore our placement assistance and career support
                    </p>
                  </Link>
                  <Link
                    href="/faqs"
                    className="block p-6 rounded-xl border-2 hover:border-purple-500 transition-colors text-center"
                    style={{
                      backgroundColor: '#f9fafb',
                      borderColor: '#e5e7eb'
                    }}>
                    <h3
                      className="font-display font-semibold mb-2"
                      style={{
                        color: '#8458B3',
                        fontSize: '1.25rem'
                      }}>
                      FAQs
                    </h3>
                    <p
                      className="font-body text-sm"
                      style={{ color: '#4a4a4a' }}>
                      Find answers to frequently asked questions
                    </p>
                  </Link>
                  <Link
                    href="/verify"
                    className="block p-6 rounded-xl border-2 hover:border-purple-500 transition-colors text-center"
                    style={{
                      backgroundColor: '#f9fafb',
                      borderColor: '#e5e7eb'
                    }}>
                    <h3
                      className="font-display font-semibold mb-2"
                      style={{
                        color: '#8458B3',
                        fontSize: '1.25rem'
                      }}>
                      Certificate Verification
                    </h3>
                    <p
                      className="font-body text-sm"
                      style={{ color: '#4a4a4a' }}>
                      Verify a Designient certificate
                    </p>
                  </Link>
                </div>
              </div>

              {/* Back to Home CTA */}
              <div className="text-center">
                <Link
                  href="/"
                  className="inline-block px-6 py-3 rounded-lg font-body font-semibold text-white transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: '#8458B3'
                  }}>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
